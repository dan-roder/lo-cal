<?php 
	// Register Custom Taxonomy
	function custom_taxonomy() {

		$labels = array(
			'name'                       => _x( 'Locations', 'Taxonomy General Name', 'text_domain' ),
			'singular_name'              => _x( 'Location', 'Taxonomy Singular Name', 'text_domain' ),
			'menu_name'                  => __( 'Locations', 'text_domain' ),
			'all_items'                  => __( 'Locations', 'text_domain' ),
			'parent_item'                => __( 'Parent Location', 'text_domain' ),
			'parent_item_colon'          => __( 'Parent Item:', 'text_domain' ),
			'new_item_name'              => __( 'New Location', 'text_domain' ),
			'add_new_item'               => __( 'Add New Location', 'text_domain' ),
			'edit_item'                  => __( 'Edit Location', 'text_domain' ),
			'update_item'                => __( 'Update Location', 'text_domain' ),
			'view_item'                  => __( 'View Location', 'text_domain' ),
			'separate_items_with_commas' => __( '', 'text_domain' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'text_domain' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
			'popular_items'              => __( '', 'text_domain' ),
			'search_items'               => __( 'Search Locations', 'text_domain' ),
			'not_found'                  => __( 'Not Found', 'text_domain' ),
		);
		$args = array(
			'labels'                     => $labels,
			'hierarchical'               => false,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => false,
		);
		register_taxonomy( 'locations', array( 'program' ), $args );

	}

	// Hook into the 'init' action
	add_action( 'init', 'custom_taxonomy', 0 );
?>