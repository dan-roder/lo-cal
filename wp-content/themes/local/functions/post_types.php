<?php
  add_action('init', 'custom_post_types');

  function custom_post_types(){
    // register_post_type('leadership', array(
    //   'label' => 'Leadership',
    //   'description' => 'Kastle Security team members with bio and headshot.',
    //   'public' => true,
    //   'show_ui' => true,
    //   'exclude_from_search' => false,
    //   'show_in_menu' => true,
    //   '_builtin' => false,
    //   'capability_type' => 'post',
    //   'hierarchical' => false,
    //   'query_var' => true,
    //   'menu_icon'   => 'dashicons-businessman',
    //   'hierarchical' => false,
    //   'has_archive' => true,
    //   'supports' => array(
    //   	'title',
    //   	'page-attributes',
    //   	'editor',
    //   	'thumbnail'
    //   ),
    //   'labels' => array (
    //     'name' => 'Leadership',
    //     'singular_name' => 'Member',
    //     'menu_name' => 'Team',
    //     'add_new' => 'Add Team Member',
    //     'add_new_item' => 'Add Team Member',
    //     'edit' => 'Edit',
    //     'edit_item' => 'Edit Member',
    //     'new_item' => 'New Member',
    //     'view' => 'View Team Member',
    //     'view_item' => 'View Team Member',
    //     'search_items' => 'Search Team Members',
    //     'not_found' => 'No Team Members Found',
    //     'not_found_in_trash' => 'No Team Members Found in Trash',
    //   ),
    // ));
  }
?>
