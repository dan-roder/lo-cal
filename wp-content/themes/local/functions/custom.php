<?php

// Changing excerpt more

function new_excerpt_more($more) {
	global $post;
	return '… <a href="'. get_permalink($post->ID) . '">' . '[Read More]' . '</a>';
}

// add_filter('excerpt_more', 'new_excerpt_more');

function image_alt($attachment_id){
	$alt = trim(strip_tags( get_post_meta($attachment_id, '_wp_attachment_image_alt', true) ));
	return $alt;
}
// Loads The Mission Statement
function load_mission() {
	echo "<h2>Our Mission </h2>";
	the_field('mission_statement', 'option');
}

function call_to_action($cta, $link) {
	return "<a class='btn' href='". $link . "'>" . $cta . "</a>";
}

function get_img_src($location) {
	echo get_template_directory_uri() . "/img/" . $location;
}

function safe_css_class($class){
  return preg_replace('/\W+/','',strtolower(strip_tags($class)));
}

/**
 * Get Youtube video ID from URL
 *
 * @param string $url
 * @return mixed Youtube video ID or FALSE if not found
 */
function getYoutubeIdFromUrl($url, $autoplay = false) {
  $parts = parse_url($url);
  $returns = new stdClass();
  if(isset($parts['query'])){
    parse_str($parts['query'], $qs);
    $returns->type = "YouTube";
    if(isset($qs['v'])){
        $returns->id = $qs['v'];
    }else if(isset($qs['vi'])){
        $returns->id = $qs['vi'];
    }
    $autoplayAppend = ($autoplay) ? '?autoplay=1' : '';
    $youtubeUrl = 'https://www.youtube.com/embed/' . $returns->id . $autoplayAppend;
    $embedUrl = '<iframe src="' . $youtubeUrl . '" frameborder="0" allowfullscreen></iframe>';
    return $embedUrl;
  }
  if(isset($parts['path'])){
    $path = explode('/', trim($parts['path'], '/'));
    $returns->type = "Vimeo";
    $returns->id = $path[count($path)-1];
    $embedUrl = '<iframe src="https://player.vimeo.com/video/' . $returns->id . '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    return $embedUrl;
  }
  return false;
}

// add hook
add_filter( 'wp_nav_menu_objects', 'my_wp_nav_menu_objects_sub_menu', 10, 2 );
// filter_hook function to react on sub_menu flag
function my_wp_nav_menu_objects_sub_menu( $sorted_menu_items, $args ) {
  if ( isset( $args->sub_menu ) ) {
    $root_id = 0;

    // find the current menu item
    foreach ( $sorted_menu_items as $menu_item ) {
      if ( $menu_item->current ) {
        // set the root id based on whether the current menu item has a parent or not
        $root_id = ( $menu_item->menu_item_parent ) ? $menu_item->menu_item_parent : $menu_item->ID;
        break;
      }
    }

    // find the top level parent
    if ( ! isset( $args->direct_parent ) ) {
      $prev_root_id = $root_id;
      while ( $prev_root_id != 0 ) {
        foreach ( $sorted_menu_items as $menu_item ) {
          if ( $menu_item->ID == $prev_root_id ) {
            $prev_root_id = $menu_item->menu_item_parent;
            // don't set the root_id to 0 if we've reached the top of the menu
            if ( $prev_root_id != 0 ) $root_id = $menu_item->menu_item_parent;
            break;
          }
        }
      }
    }
    $menu_item_parents = array();
    foreach ( $sorted_menu_items as $key => $item ) {
      // init menu_item_parents
      if ( $item->ID == $root_id ) $menu_item_parents[] = $item->ID;
      if ( in_array( $item->menu_item_parent, $menu_item_parents ) ) {
        // part of sub-tree: keep!
        $menu_item_parents[] = $item->ID;
      } else if ( ! ( isset( $args->show_parent ) && in_array( $item->ID, $menu_item_parents ) ) ) {
        // not part of sub-tree: away with it!
        unset( $sorted_menu_items[$key] );
      }
    }

    return $sorted_menu_items;
  } else {
    return $sorted_menu_items;
  }
}

if ( ! function_exists( 'kastle_paging_nav' ) ) {
  /**
   * Display navigation to next/previous set of posts when applicable.
   *
   * @since Twenty Fourteen 1.0
   *
   * @global WP_Query   $wp_query   WordPress Query object.
   * @global WP_Rewrite $wp_rewrite WordPress Rewrite object.
   */
  function kastle_paging_nav() {
    global $wp_query, $wp_rewrite;

    // Don't print empty markup if there's only one page.
    if ( $wp_query->max_num_pages < 2 ) {
      return;
    }

    $paged        = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
    $pagenum_link = html_entity_decode( get_pagenum_link() );
    $query_args   = array();
    $url_parts    = explode( '?', $pagenum_link );

    if ( isset( $url_parts[1] ) ) {
      wp_parse_str( $url_parts[1], $query_args );
    }

    $pagenum_link = remove_query_arg( array_keys( $query_args ), $pagenum_link );
    $pagenum_link = trailingslashit( $pagenum_link ) . '%_%';

    $format  = $wp_rewrite->using_index_permalinks() && ! strpos( $pagenum_link, 'index.php' ) ? 'index.php/' : '';
    $format .= $wp_rewrite->using_permalinks() ? user_trailingslashit( $wp_rewrite->pagination_base . '/%#%', 'paged' ) : '?paged=%#%';

    // Set up paginated links.
    $links = paginate_links( array(
      'base'     => $pagenum_link,
      'format'   => $format,
      'total'    => $wp_query->max_num_pages,
      'current'  => $paged,
      'mid_size' => 1,
      'add_args' => array_map( 'urlencode', $query_args ),
      'prev_text' => __( '&larr; Previous', 'kastle' ),
      'next_text' => __( 'Next &rarr;', 'kastle' ),
    ) );

    if ( $links ) :

    ?>
    <nav class="navigation paging-navigation" role="navigation">
      <h1 class="screen-reader-text"><?php _e( 'Posts navigation', 'kastle' ); ?></h1>
      <div class="pagination loop-pagination">
        <?php echo $links; ?>
      </div><!-- .pagination -->
    </nav><!-- .navigation -->
    <?php
    endif;
  }
}

?>
