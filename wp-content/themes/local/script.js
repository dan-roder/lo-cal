jQuery(document).ready( function ($) {
    var new_items, old_items, current_items, url;
    BASE_URL = "https://api.lo-calkitchen.com/";
    // BASE_URL = "http://localhost:300/";
    $("#start").on('click', function(e){
        console.log(process.env);
        e.preventDefault();
        console.log("CLICK!");
        $(".loader").show();
        if( $("#sync-items").is(":visible") ) {
            $("#sync-items").hide();
        }
        $("#error").html('');
        $.ajax({
            method: "GET",
            url: BASE_URL + "menu-sync/start",
        })
        .done(function( response ) {
            console.log( response );
            $(".loader").hide();
            new_items     = response['new'];
            old_items     = response['old'];
            current_items = response['current'];
            $("#sync-items").show( 100, function() {
                new_items_html     = "";
                old_items_html     = "";
                current_items_html = "";

                new_items_html += new_items.length > 0 ? "<p>Found " + new_items.length + " new items.</p>" : "";
                new_items_html += new_items.length > 0 ? "<button id='new_items' class='button sync-items'>Sync New Items</button>" : "";
                new_items_html += new_items.length === 0 ? "<p>No new items found." : "";

                old_items_html += old_items.length > 0 ? "<p>Found " + old_items.length + " old items.</p>" : "";
                old_items_html += old_items.length > 0 ? "<button id='old_items' class='button sync-items'>Sync Old Items</button>" : "";
                old_items_html += old_items.length === 0 ? "<p>No old items found." : "";

                current_items_html += current_items.length > 0 ? "<p>Found " + current_items.length + " current items.</p>" : "";
                current_items_html += current_items.length > 0 ? "<button  id='current_items' class='button sync-items'>Sync Current Items</button>" : "";
                current_items_html += current_items.length === 0 ? "<p>No current items found." : "";

                $("#new_items").html(new_items_html);
                $("#old_items").html(old_items_html);
                $("#current_items").html(current_items_html);
                if( $("#error").is(":visible") ) {
                    $("#error").hide();
                }
                syncButtons(new_items, old_items, current_items);

            });
        })
        .fail( function( jqXHR, textStatus ){
            $(".loader").hide();
            handleError( jqXHR, textStatus ).then(function( error ){
                console.log( error );
                error_item = '<p> There was an error: ' + error['status'] + '</p>';
                error_item += '<h3>' + error['text'] + '</h3><pre>' + error['message'] + '<pre>';
                $("#error").html(error_item);
            });
        });
    });

    function syncButtons(new_items, old_items, current_items) {
        lookup = {
            "new_items" : new_items,
            "old_items" : old_items,
            "current_items" : current_items
        };
        $(".button.sync-items").each(function() {
            $this = $(this);
            console.log($this);
            $this.click(function(e) {
                e.preventDefault();
                $(".loader").show();
                console.log(e.target.id);
                console.log(lookup[e.target.id]);
                items = lookup[e.target.id];
                if ( e.target.id === 'new_items' && lookup['current_items'].length === 0) {
                    // All new items, zero current items
                    url = BASE_URL + "menu-sync/init";
                } else {
                    // New items and current items
                    url = BASE_URL + "/menu-sync/" + e.target.id;
                }
                $.ajax({
                    method: "POST",
                    url: url,
                    data: { "items": items },
                })
                .done(function(response, textStatus){
                    $(".loader").hide();
                    console.log(response, textStatus);
                    itemSetSelector = "#" + e.target.id;
                    $itemSet = $(itemSetSelector);
                    successMessage = '';
                    successMessage += "<p>" + items.length + " " + e.target.id + " updated.</p>";
                    $itemSet.html(successMessage);
                    if( $("#error").is(":visible") ) {
                        $("#error").hide();
                    }
                })
                .fail(function( jqXHR, textStatus ){
                    $(".loader").hide();
                    console.log(jqXHR.error);
                    handleError( jqXHR, textStatus ).then(function( error ){
                        console.log( error );
                        error_item = '<p> There was an error: ' + error['status'] + '</p>';
                        error_item += '<h3>' + error['text'] + '</h3><pre>' + error['message'] + '<pre>';
                        $("#error").html(error_item);
                    });
                });
            });
        });
    }

    function handleError( response, status ){
        return new Promise( function ( resolve, reject) {
            resp = response.responseJSON ? response.responseJSON : response.responseText;
            resolve({   status: resp['status'] ? resp['status'] : response.status,
                        text: resp['error'] ? resp['error'] : status,
                        message: resp['exception'] ? JSON.stringify(resp['exception']) : "There was an error, please try again." });
        }
    )};
});



