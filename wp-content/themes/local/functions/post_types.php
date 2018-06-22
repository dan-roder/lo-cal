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
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
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

function save_menu_categories_meta_box_data( $post_id ) {
    $my_data = sanitize_text_field( $_POST['parent_id'] );
    add_post_meta( $post_id, 'menu_category', $my_data, true );
}

add_filter( 'post_type_link', function( $link, $post ) {
	// if ( 'menu_item' == get_post_type( $post ) ) {
	$post_id = $post->ID;
	// var_dump($post); die();
	$meta_key = 'submenu';
	$meta_data = get_post_meta( $post_id, 'submenu' );
	// var_dump($post, $meta_data); die();
	if( $meta_data ) {
		return str_replace( '%category-name%', $meta_data[0], $link );
	}
	// }
	return $link;
}, 10, 2 );

function create_api_posts_meta_field() {
	register_rest_field( 'menu_item', 'submenu', array(
		'get_callback' => 'get_post_meta_for_api',
		'update_callback' => 'update_post_meta_for_api',
		'schema' => null,
	));
}

function get_post_meta_for_api( $object, $field_name, $request, $object_type ) {

	$post_id = $object['id'];
	//return the post meta
	return get_post_meta( $post_id )['submenu'][0];
}
function update_post_meta_for_api( $value, $object, $field_name, $request ) {
	return update_post_meta( $object['id'], $field_name, $value, true );
}

class Custom_Endpoint_REST_Controller extends WP_REST_Controller {

    // Here initialize our namespace and resource name.
    public function __construct($namespace, $resource_name) {
        $this->namespace     = $namespace;
        $this->resource_name = $resource_name;
        $this->version = 1;

	}

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		register_rest_route( $this->namespace, '/v' . $this->version . '/' . $this->resource_name, array(
			array(
				'methods'   => WP_REST_Server::READABLE,
                'callback'  => array( $this, 'get_items' ),
				// Register our schema callback.
				'schema' => [ $this, 'get_item_schema' ],
			),
		) );
		register_rest_route( $this->namespace, '/v' . $this->version . '/' . $this->resource_name . '/(?P<id>[\d]+)', array(
            // Notice how we are registering multiple endpoints the 'schema' equates to an OPTIONS request.
            array(
                'methods'   => WP_REST_Server::READABLE,
                'callback'  => array( $this, 'get_item' ),
                // 'permission_callback' => array( $this, 'get_item_permissions_check' ),
            ),
            // Register our schema callback.
            'schema' => array( $this, 'get_item_schema' ),
        ) );

	}

	/**
	 * Get a collection of items
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {

		$args = array(
			'post_type'=> 'menu_item',
			'posts_per_page' => -1,
		);
		$posts = get_posts( $args );
		$data = array();
        if ( empty( $posts ) ) {
            return rest_ensure_response( $data );
		}
		foreach ($posts as $post) {
			$acf = get_fields($post->ID);
			$meta = get_post_meta($post->ID);
			$menuid = is_string($acf['menuid']) ? (int)$acf['menuid'] : (int)$acf['menuid']['menuid'][0];
			$submenu = $meta;
			if ( empty($submenu['submenu'][0] ) ){
				// wp_delete_post($post->ID, true);
				$empty_submenu = [ "message" => "Submenu empty", "item"=>$post ];
				var_dump($empty_submenu);die();
			}
			$post->acf = $acf;
			$post->submenu = $meta;
			$response = $this->prepare_item_for_response( $post, $request );
            $data[] = $this->prepare_response_for_collection( $response );
		}
		// Return all of our comment response data.
        return rest_ensure_response( $data );
	}

	/**
	 * Get one item from the collection
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_item( $request ) {

		$id = (int) $request['id'];
		$post = get_post( $id );

        if ( empty( $post ) ) {
            return rest_ensure_response( array() );
		}
		$acf = get_fields($post->ID);
		$meta = get_post_meta($post->ID);
		$menuid = is_string($acf['menuid']) ? (int)$acf['menuid'] : (int)$acf['menuid']['menuid'][0];
		$submenu = $meta;
		$post->acf = $acf;
		$post->submenu = $submenu;
        $response = $this->prepare_item_for_response( $post );
		$data = $this->prepare_response_for_collection( $response );
        // Return all of our post response data.
        return rest_ensure_response( $data );
	}

    /**
    * Matches the post data to the schema we want.
    *
    * @param WP_Post $post The comment object whose response is being prepared.
    */
    public function prepare_item_for_response( $post, $request ) {
        $post_data = array();
        $schema = $this->add_additional_fields_schema( $request );

        // We are also renaming the fields to more understandable names.
        if ( isset( $schema['properties']['id'] ) ) {
            $post_data['id'] = (int) $post->ID;
		}
		if ( isset( $schema['properties']['title'] ) ) {
            $post_data['title'] = $post->post_title;
		}
		if ( isset( $schema['properties']['name'] ) ) {
            $post_data['name'] = $post->post_name;
        }
		if ( isset( $schema['properties']['submenu'] ) ) {
            $post_data['submenu'] = $post->submenu['submenu'][0];
		}
		if ( isset( $schema['properties']['menuid'] ) ) {
            $post_data['menuid'] = $post->acf['menuid'];
		}
		if ( isset( $schema['properties']['status'] ) ) {
            $post_data['status'] = $post->post_status;
		}
        return rest_ensure_response( $post_data );
	}

	/**
	* Prepare a response for inserting into a collection of responses.
	*
	* This is copied from WP_REST_Controller class in the WP REST API v2 plugin.
	*
	* @param WP_REST_Response $response Response object.
	* @return array Response data, ready for insertion into collection data.
    */
	public function prepare_response_for_collection( $response ) {
		if ( ! ( $response instanceof WP_REST_Response ) ) {
			return $response;
		}

		$data = (array) $response->get_data();
		$server = rest_get_server();

		if ( method_exists( $server, 'get_compact_response_links' ) ) {
			$links = call_user_func( array( $server, 'get_compact_response_links' ), $response );
		} else {
			$links = call_user_func( array( $server, 'get_response_links' ), $response );
		}

		if ( ! empty( $links ) ) {
			$data['_links'] = $links;
		}

		return $data;
	}

    /**
    * Get our sample schema for a post.
    *
    * @param WP_REST_Request $request Current request.
    */
	public function get_item_schema( $request ) {
		return $this->add_additional_fields_schema( $request );
	}
    /**
    * Get our sample schema for a post.
    *
    * @param WP_REST_Request $request Current request.
    */
	public function add_additional_fields_schema( $request ) {

		$schema = array(
			// This tells the spec of JSON Schema we are using which is draft 4.
			'$schema'              => 'http://json-schema.org/schema#',
			// The title property marks the identity of the resource.
			'title'                => $this->resource_name,
			'type'                 => 'object',
			// In JSON Schema you can specify object properties in the properties attribute.
			'properties'           => array(
				'id' => array(
					'description'  => esc_html__( 'Unique identifier for the object.', 'my-textdomain' ),
					'type'         => 'integer',
					'context'      => array( 'view', 'edit', 'embed' ),
					'readonly'     => true,
				),
				'title' => array(
					'description'  => esc_html__( 'Menu item title.', 'my-textdomain' ),
					'type'         => 'string',
				),
				'name' => array(
					'description'  => esc_html__( 'Menu item slug.', 'my-textdomain' ),
					'type'         => 'string',
				),
				'submenu' => array(
					'description'  => esc_html__( 'Aloha submenu.', 'my-textdomain' ),
					'type'         => 'string',
				),
				'content' => array(
					'description'  => esc_html__( 'The content for the object.', 'my-textdomain' ),
					'type'         => 'string',
				),
				'menuid' => array(
					'description'  => esc_html__( 'Aloha MenuItemId.', 'my-textdomain' ),
					'type'         => 'string',
				),
				'status' => array(
					'description'  => esc_html__( 'Menu item available.', 'my-textdomain' ),
					'type'         => 'string',
				),
			),
		);

		return $schema;
	}

	// Sets up the proper HTTP status code for authorization.
	public function authorization_status_code() {

		$status = 401;

		if ( is_user_logged_in() ) {
			$status = 403;
		}

		return $status;
	}

}


add_action( 'init', function() {
	add_rewrite_rule( '^menu/(.*)/([^/]+)/?$','index.php?menu_item=$matches[2]','top' );
	$object_type = 'post';

	$options = array(
		'type' => 'string',
		'single' => true,
		'show_in_rest' => true
		);
	register_meta( 'post', 'submenu', $options );

});

function register_custom_endpoint() {
	$controller = new Custom_Endpoint_REST_Controller('local-menu', 'menu_items');
	$controller->register_routes();
}

add_action( 'init', 'blog_post', 0 );
add_action( 'init', 'menu_item', 0 );
add_action( 'init', 'menu_categories', 0 );
add_action( 'init', 'landing_page', 0 );
add_action( 'rest_api_init', 'create_api_posts_meta_field' );
add_action( 'rest_api_init', 'register_custom_endpoint' );
add_action( 'save_post', 'save_menu_categories_meta_box_data' );
?>
