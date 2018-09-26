<?php

add_action( 'rest_api_init', 'post_error_message' );

function post_error_message() {
  register_rest_route( 'error_message/v2', 'log/', array(
    'methods' => 'POST',
    'callback' => 'log_error_message'
  ));
}

function log_error_message(WP_REST_Request $request){
  $returnObj = new \stdClass();

  if(function_exists('log_error')){
    $bodyContent = $request->get_body();
    $returnObj->response = 'error logged to wordpress error logs';
    log_error($bodyContent);
  }
  return rest_ensure_response($returnObj);

}

add_action( 'rest_api_init', 'submit_contact_form' );

function submit_contact_form(){
  register_rest_route( 'contact_form/v2', 'submit', array(
    'methods' => 'POST',
    'callback' => 'handle_contact_submission'
  ));
}

function handle_contact_submission(WP_REST_Request $request){
  $json = $request->get_body();

  if($json){
    $jsonBody = json_decode($json, true);


    $firstName = $jsonBody['firstName'];
    $lastName = $jsonBody['lastName'];
    $reason = $jsonBody['contactReason'];
    $email = $jsonBody['email'];
    $comments = $jsonBody['comments'];

    $postArr = array(
      'post_type' => 'contact_submission',
      'post_title' => $firstName . ' ' . $lastName . ': ' . $reason
    );
    // First do wp_insert to get post_id
    $postId = wp_insert_post($postArr);

    // Update ACF Fields
    if($postId){
      update_field('contact_reason', $reason, $postId);
      update_field('first_name', $firstName, $postId);
      update_field('last_name', $lastName, $postId);
      update_field('email', $email, $postId);
      update_field('comments', $comments, $postId);
      // Construct object to insert into WP Post

      $link = '<a href="https://' . $_SERVER['HTTP_HOST'] . '/wp-admin/post.php?post=' . $postId . '&action=edit">click here</a>';
      $message = 'You have a new contact form submission. Please ' . $link . ' to view the submission';

      $headers = array('Content-Type: text/html; charset=UTF-8');

      wp_mail('droder@req.co', 'Contact Submission From: ' . $firstName . ' ' . $lastName, $message, $headers);
    }

    return 'success';
  }
  else{
    return 'Error';
  }
}