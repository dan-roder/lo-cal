<?php
add_action( 'admin_menu', 'menu_sync_admin' );

function menu_sync_admin() {

    // $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function = ''

	// add_menu_page( 'My Top Level Menu Example', 'Top Level Menu', 'manage_options', 'myplugin/myplugin-admin-page.php', 'myplguin_admin_page', 'dashicons-tickets', 6  );
    // add_management_page( 'Aloha Menu Sync', 'Sync Menu Items', 'manage_options', 'menu-sync-admin.php', 'sync_admin' );
    add_submenu_page('edit.php?post_type=menu_item', 'Aloha Menu Sync', 'Sync Menu Items', 'manage_options', 'menu_sync_admin.php', 'lo_sync_admin');
}

function lo_sync_admin() {
    ?>
    <div class="wrap">
        <h1>Sync Aloha Menu</h1>
        <p>Below are options to sync the menu items offered with your current menu on Aloha POS.<p>
        <button class="button start-sync" id="start">Start</button>
        <div id="sync-items">
            <h2>Sync Items</h2>
            <div id="new_items" class="item"></div>
            <div id="old_items" class="item"></div>
            <div id="current_items" class="item"></div>
        </div>
        <div class="loader"></div>
        <div id="error"></div>
    </div>
    <?php
}
