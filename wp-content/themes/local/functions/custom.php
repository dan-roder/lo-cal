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
    log_error('test error');
  }
  return rest_ensure_response($returnObj);

}