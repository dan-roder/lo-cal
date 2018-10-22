<?php

/**
 * REST API endpoint for posting error messages to Wordpress plugin
 */
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

/**
 * REST API Endpoint for adding a contact form submission to a custom post type
 */
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

      wp_mail('info@lo-calkitchen.com', 'Contact Submission From: ' . $firstName . ' ' . $lastName, $message, $headers);
    }

    return 'success';
  }
  else{
    return 'Error';
  }
}

/**
 * REST API Endpoint for submitting a user to Mailchimp
 */

add_action( 'rest_api_init', 'mailchimp_signup' );

function mailchimp_signup() {
  register_rest_route( 'mailchimp/v2', 'signup/', array(
    'methods' => 'POST',
    'callback' => 'signup_for_newsletter'
  ));
}

function signup_for_newsletter(WP_REST_Request $request){
  $mailChimpObj = new \stdClass();
  $body = $request->get_body();

  if($body){
    define('MAILCHIMP_ENDPOINT', 'https://us14.api.mailchimp.com/3.0/lists/1ab7655e84/members');
    define('API_KEY', '44a3b36ccc5b4109a29346f9c892b443-us14');

    $json = json_decode($body, true);

    $mailChimpObj->email_address = $json['email_address'];
    $mailChimpObj->status = $json['status'];

    $payload = json_encode($mailChimpObj);

    $ch = curl_init();

    $headers = [];
    //set the url, number of POST vars, POST data
    $options = array(
      CURLOPT_HEADER => true,
      CURLOPT_HTTPHEADER => array('Accept: application/json'),
      CURLOPT_USERPWD => "local:" . API_KEY,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_URL => MAILCHIMP_ENDPOINT
    );

    $options[CURLOPT_POST] = true;
    $options[CURLOPT_POSTFIELDS] = $payload;

    //execute post

    curl_setopt_array($ch, $options);
    $result = curl_exec($ch);

    if (curl_error($ch)) {
      $error_msg = curl_error($ch);
      return rest_ensure_response($error_msg);
    }

    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $headers = substr($result, 0, $header_size);
    $respBody = substr($result, $header_size);
  }

  //close connection
  return rest_ensure_response($respBody);

}

/**
 * REST API endpoint for posting error messages to Wordpress plugin
 */
add_action( 'rest_api_init', 'get_submenu_items' );

function get_submenu_items() {
  register_rest_route( 'sub_menus/v2', 'items/(?P<category>[a-zA-Z-]+)', array(
    'methods' => 'GET',
    'callback' => 'get_submenus'
  ));
}

function get_submenus(WP_REST_Request $request){
  $category = $request->get_param('category');

  $posts = get_posts(array(
    'numberposts'	=> -1,
    'post_type'		=> 'menu_item',
    'meta_key'		=> 'submenu',
    'meta_value'	=> $category
  ));

  try {
    // merge the acf in with the original post data
    for($i = 0; $i < count($posts); ++$i) {
      $post = $posts[$i];

      $acf = get_fields($post->ID);

      $post->acf = $acf;
    }
  } catch(Exception $e) {
    return $this->error($e->getMessage());
  }

  return rest_ensure_response($posts);

}