<?php
  // Register Custom Post Type
function landing_page() {

  $labels = array(
    'name'                  => _x( 'Landing Pages', 'Post Type General Name', 'text_domain' ),
    'singular_name'         => _x( 'Landing Page', 'Post Type Singular Name', 'text_domain' ),
    'menu_name'             => __( 'Landing Pages', 'text_domain' ),
    'name_admin_bar'        => __( 'Landing Page', 'text_domain' ),
    'archives'              => __( 'Item Archives', 'text_domain' ),
    'attributes'            => __( 'Item Attributes', 'text_domain' ),
    'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
    'all_items'             => __( 'All Items', 'text_domain' ),
    'add_new_item'          => __( 'Add New Item', 'text_domain' ),
    'add_new'               => __( 'Add New', 'text_domain' ),
    'new_item'              => __( 'New Item', 'text_domain' ),
    'edit_item'             => __( 'Edit Item', 'text_domain' ),
    'update_item'           => __( 'Update Item', 'text_domain' ),
    'view_item'             => __( 'View Item', 'text_domain' ),
    'view_items'            => __( 'View Items', 'text_domain' ),
    'search_items'          => __( 'Search Item', 'text_domain' ),
    'not_found'             => __( 'Not found', 'text_domain' ),
    'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
    'featured_image'        => __( 'Featured Image', 'text_domain' ),
    'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
    'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
    'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
    'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
    'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
    'items_list'            => __( 'Items list', 'text_domain' ),
    'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
    'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
  );
  $args = array(
    'label'                 => __( 'Landing Page', 'text_domain' ),
    'description'           => __( 'Landing Pages with multiple different options for content to be displayed on the page', 'text_domain' ),
    'labels'                => $labels,
    'supports'              => array(
      'title',
      'editor',
      'thumbnail',
      'page-attributes'
    ),
    'rewrite'               => array(
      'slug' => '/',
      'with_front' => false
    ),
    'show_in_rest'          => true,
    'rest_base'             => 'landing_page',
    'hierarchical'          => true,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 20,
    'menu_icon'             => 'dashicons-images-alt',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'page',
  );
  register_post_type( 'landing_page', $args );

}


/**
 *
 * Menu Item Custom Post Type
 *
 */
function menu_item() {

	$labels = array(
		'name'                  => _x( 'Menu Items', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Menu Item', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Menu Items', 'text_domain' ),
		'name_admin_bar'        => __( 'Post Type', 'text_domain' ),
		'archives'              => __( 'Item Archives', 'text_domain' ),
		'attributes'            => __( 'Item Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Items', 'text_domain' ),
		'add_new_item'          => __( 'Add New Item', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New Item', 'text_domain' ),
		'edit_item'             => __( 'Edit Item', 'text_domain' ),
		'update_item'           => __( 'Update Item', 'text_domain' ),
		'view_item'             => __( 'View Item', 'text_domain' ),
		'view_items'            => __( 'View Items', 'text_domain' ),
		'search_items'          => __( 'Search Item', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'Items list', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$rewrite = array(
		'slug'                  => 'menu/%category-name%',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => __( 'Menu Item', 'text_domain' ),
		'description'           => __( 'Menu Item details', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-cart',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'menu-item',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'menu_item', $args );
}

/**
 *
 * Menu Categories Custom Post Type
 *
 */
function menu_categories() {

	$labels = array(
		'name'                  => _x( 'Menu Categories', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Menu Category', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Menu Categories', 'text_domain' ),
		'name_admin_bar'        => __( 'Post Type', 'text_domain' ),
		'archives'              => __( 'Item Archives', 'text_domain' ),
		'attributes'            => __( 'Item Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Categories', 'text_domain' ),
		'add_new_item'          => __( 'Add New Category', 'text_domain' ),
		'add_new'               => __( 'Add Category', 'text_domain' ),
		'new_item'              => __( 'New Category', 'text_domain' ),
		'edit_item'             => __( 'Edit Category', 'text_domain' ),
		'update_item'           => __( 'Update Category', 'text_domain' ),
		'view_item'             => __( 'View Category', 'text_domain' ),
		'view_items'            => __( 'View Categories', 'text_domain' ),
		'search_items'          => __( 'Search Category', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Header Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set Header image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove header image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as header image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'Items list', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$rewrite = array(
		'slug'                  => 'menu',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => __( 'Menu Category', 'text_domain' ),
		'description'           => __( 'Menu Category details', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-cart',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'menu-categories',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'menu_categories', $args );
}

add_action( 'add_meta_boxes', 'menu_categories_meta_box' );

function menu_categories_meta_box() {

	add_meta_box(
		'menu-item-parent',
		'Menu Categories',
		'categories_attributes_meta_box',
		'menu_item',
		'side',
		'default'
	);

}

/**
 * When the post is saved, saves our custom data.
 *
 * @param int $post_id
 */
function save_menu_categories_meta_box_data( $post_id ) {

    // // Check if our nonce is set.
    if ( ! isset( $_POST['menu_category_nonce'] ) ) {
        return;
    }

    // // Verify that the nonce is valid.
    if ( ! wp_verify_nonce( $_POST['menu_category_nonce'], 'menu_category_nonce' ) ) {
        return;
    }

    // // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    // // Check the user's permissions.
    if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {

        if ( ! current_user_can( 'edit_page', $post_id ) ) {
            return;
        }

    }
    else {

        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
    }

    // /* OK, it's safe for us to save the data now. */

    // // Make sure that it is set.
    if ( ! isset( $_POST['parent_id'] ) ) {
        return;
    }

    // // Sanitize user input.
    $my_data = sanitize_text_field( $_POST['parent_id'] );

    // Update the meta field in the database.
    update_post_meta( $post_id, 'menu_category', $my_data );
}

add_action( 'save_post', 'save_menu_categories_meta_box_data' );

 /**
 *
 * Blog Post Custom Post Type
 *
 */
function blog_post() {

	$labels = array(
		'name'                  => _x( 'Blog Posts', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Blog Post', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Blog Posts', 'text_domain' ),
		'name_admin_bar'        => __( 'Blog Post', 'text_domain' ),
		'archives'              => __( 'Blog Archives', 'text_domain' ),
		'attributes'            => __( 'Item Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Blog Posts', 'text_domain' ),
		'add_new_item'          => __( 'Add Blog Post', 'text_domain' ),
		'add_new'               => __( 'Add New Blog Post', 'text_domain' ),
		'new_item'              => __( 'New Blog Post', 'text_domain' ),
		'edit_item'             => __( 'Edit Blog Post', 'text_domain' ),
		'update_item'           => __( 'Update Blog Post', 'text_domain' ),
		'view_item'             => __( 'View Blog Post', 'text_domain' ),
		'view_items'            => __( 'View Blog Posts', 'text_domain' ),
		'search_items'          => __( 'Search Item', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'Items list', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$rewrite = array(
		'slug'                  => 'blog',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => __( 'Blog Post', 'text_domain' ),
		'description'           => __( 'Blog Posts', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
    'menu_position'         => 5,
    'menu_icon'             => 'dashicons-align-left',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
    'rest_base'             => 'blog_post',
	);
	register_post_type( 'blog_post', $args );

}




// function add_menu_cat_to_meta_data($postID, $post) {
// 	$postType = get_post_type_object( $post->post_type );

// 	if ( !current_user_can( $postType->cap->edit_post, $postID ) )
// 		return $postID;

// 		// Save the Job Description
// 		$metaKey = 'menu_category';

// 			/* Verify the nonce before proceeding. */
// 			if ( verifyMetaNonce($metaKey) )
// 				return $postID;

// 			/* Get the posted data and sanitize it for use as an HTML class. */
// 			$menu_cat = ( isset( $_POST[$metaKey] ) ? sanitize_text_field( $_POST[$metaKey] ) : '' );

// 		save_meta_data($postID, $metaKey, $menu_cat);

// }



// function save_meta_data($postID, $metaKey, $newMetaValue) {
//     /* Get the meta value of the custom field key. */
//     $metaValue = get_post_meta( $postID, $metaKey, true );

//     /* If a new meta value was added and there was no previous value, add it. */
//     if ( $newMetaValue && '' == $metaValue )
//         update_post_meta( $postID, $metaKey, $newMetaValue, true );

//     /* If the new meta value does not match the old value, update it. */
//     elseif ( $newMetaValue && $newMetaValue != $metaValue )
//         update_post_meta( $postID, $metaKey, $newMetaValue );

//     /* If there is no new meta value but an old value exists, delete it. */
//     elseif ( '' == $newMetaValue && $metaValue )
//         delete_post_meta( $postID, $metaKey, $metaValue );
// }

// function verifyMetaNonce($metaKey) {
//     return  (isset($_POST[$metaKey . '_nonce']) && wp_verify_nonce( $_POST[$metaKey . '_nonce'], basename(__FILE__)));
// }

function categories_attributes_meta_box($post) {


	wp_nonce_field( 'menu_category_nonce', 'menu_category_nonce');

	$pages = wp_dropdown_pages(array(
		'post_type' => 'menu_categories',
		'selected' => $post->post_parent,
		'name' => 'parent_id',
		'show_option_none' => __('(no parent)'),
		'sort_column'=> 'menu_order, post_title',
		'echo' => 0
	));
	if ( ! empty($pages) ) {
		echo $pages;
	} // end empty pages check
}

add_action( 'init', function() {
	add_rewrite_rule( '^menu/(.*)/([^/]+)/?$','index.php?menu_item=$matches[2]','top' );
});

add_filter( 'post_type_link', function( $link, $post ) {
	if ( 'menu_item' == get_post_type( $post ) ) {
		//Lets go to get the parent cartoon-series name
		// var_dump($post->post_parent); die();
		if( $post->post_parent ) {
			$parent = get_post( $post->post_parent );
			if( !empty($parent->post_name) ) {
				return str_replace( '%category-name%', $parent->post_name, $link );
			}
		} else {
				//This seems to not work. It is intented to build pretty permalinks
				//when episodes has not parent, but it seems that it would need
				//additional rewrite rules
				//return str_replace( '/%series_name%', '', $link );
		}

	}
	return $link;
}, 10, 2 );

add_action( 'rest_api_init', 'create_api_posts_meta_field' );

function create_api_posts_meta_field() {

	// register_rest_field ( 'name-of-post-type', 'name-of-field-to-return', array-of-callbacks-and-schema() )
	register_rest_field( 'menu_item', 'menu_category', array(
		'get_callback' => 'get_post_meta_for_api',
		'update_callback' => 'update_post_meta_for_api',
		'schema' => null,
	));
}

function get_post_meta_for_api( $object ) {
	//get the id of the post object array
	$post_id = $object['id'];
	//return the post meta
	return get_post_meta( $post_id );
}

add_action( 'init', 'blog_post', 0 );
add_action( 'init', 'menu_item', 0 );
add_action( 'init', 'menu_categories', 0 );
add_action( 'init', 'landing_page', 0 );
?>
