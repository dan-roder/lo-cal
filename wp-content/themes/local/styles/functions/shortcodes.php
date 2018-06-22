<?php

function youtube_shortcode( $atts, $content = "" ) {
  $embedCode = '<div class="video-container">' . getYoutubeIdFromUrl($content) . '</div>';

  return $embedCode;
}
add_shortcode( 'youtube', 'youtube_shortcode' );

?>