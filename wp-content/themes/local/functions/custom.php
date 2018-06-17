<?php

// function slug_get_post_meta_cb( $object, $field_name, $request ) {
//   return get_post_meta( $object[ 'id' ], $field_name );
// }

// add_action( 'rest_api_init', function() {
//   register_rest_field( 'menu_item', 'menuid',
//     array(
//       'get_callback'    => 'slug_get_post_meta_cb',
//       'schema'          => null,
//     )
//   );

//  });

add_action( 'rest_api_init', 'get_menu_item_from_menu_id' );

function get_menu_item_from_menu_id() {
  register_rest_route( 'menu_item/v1', '/menuid/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'get_post_data_from_menu_id',
    'args' => array(
      'id' => array(
        'validate_callback' => function($param, $request, $key) {
          return is_numeric( $param );
        }
      ),
    ),
  ));
}

function get_post_data_from_menu_id( $object ) {
    //get the id of the post object array
    $posts = get_posts(array(
      'numberposts'	=> -1,
      'post_type'		=> 'menu_item',
      'meta_key'		=> 'menuid',
      'meta_value'	=> $object['id']
    ));

    if(isset($posts[0]->ID)){
      $url = 'http://'.$_SERVER['HTTP_HOST'].'/wp-json/wp/v2/menu_item/' . $posts[0]->ID;
      $body = wp_remote_get($url);
      // $body = get_post_meta($posts[0]->ID);
      // var_dump($body); die();
    }

    //return the post meta
    return new WP_REST_Response( $posts, 200 );
}