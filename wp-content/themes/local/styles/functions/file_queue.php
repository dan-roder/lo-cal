<?php

// Register/Enqueue css and js
add_action( 'wp_print_scripts', 'engueue_theme_scripts' );
add_action( 'wp_print_styles', 'engueue_theme_styles' );


/**
 * Theme Scripts/Styles
 */


function engueue_theme_styles() {
	wp_register_style( 'main', get_template_directory_uri().'/dist/css/main.css' );

	wp_enqueue_style( 'main' );
}

function engueue_theme_scripts() {
    wp_register_script('vendor', get_template_directory_uri() . '/dist/js/vendor.min.js', array('jquery'));
    wp_register_script('main', get_template_directory_uri() . '/dist/js/main.js' );
    
	wp_enqueue_script( 'vendor');
    wp_enqueue_script( 'main');

}
