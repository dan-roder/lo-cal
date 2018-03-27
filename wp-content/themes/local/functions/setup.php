<?php
// disable admin bar
add_filter('show_admin_bar', '__return_false');


function register_theme_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
    )
  );
}

add_action( 'init', 'register_theme_menus' );

add_theme_support( 'post-thumbnails' );


add_image_size( 'blog-preview', '260', '180', array('center', 'center') );



function custom_excerpt_length( $length ) {
	return 45;
}

function custom_excerpt_more( $more ) {
	return ' ... <a href="'. get_permalink() .'">Read More</a>';
}
add_filter('excerpt_more', 'custom_excerpt_more');
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

add_filter( 'post_thumbnail_html', 'remove_thumbnail_dimensions', 10, 3 );

function remove_thumbnail_dimensions( $html, $post_id, $post_image_id ) {
  $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
  return $html;
}

// Callback function to insert 'styleselect' into the $buttons array
function my_mce_buttons_2( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
// Register our callback to the appropriate filter
add_filter('mce_buttons_2', 'my_mce_buttons_2');

// Callback function to filter the MCE settings
function my_mce_before_init_insert_formats( $init_array ) {
	// Define the style_formats array
	$style_formats = array(
		// Each array child is a format with it's own settings
		array(
			'title' => 'Red Button',
			'block' => 'div',
			'classes' => 'red-button',
			'wrapper' => false,
    ),
    array(
      'title' => 'Black Button',
			'block' => 'div',
			'classes' => 'black-button',
			'wrapper' => false,
    ),
    array(
      'title' => 'Promotion Paragraph',
      'block' => 'p',
      'classes' => 'promotion-text',
      'wrapper' => false
    )

	);
	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = json_encode( $style_formats );

	return $init_array;

}
// Attach callback to 'tiny_mce_before_init'
add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );

function my_theme_add_editor_styles() {
  add_editor_style( 'styles/editor-styles.css' );
}
add_action( 'after_setup_theme', 'my_theme_add_editor_styles' );


add_filter( 'get_the_archive_title', function ($title) {

  if ( is_category() ) {
    $title = single_cat_title( '', false );
  } elseif ( is_tag() ) {
    $title = single_tag_title( '', false );
  } elseif ( is_author() ) {
    $title = '<span class="vcard">' . get_the_author() . '</span>' ;
  } elseif ( is_post_type_archive() ) {
    $title = post_type_archive_title( '', false );
  }

  return $title;

});
?>
