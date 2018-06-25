jQuery(document).ready( function ($) {
    var new_items, old_items, current_items, url;
    $("#start").on('click', function(e){
        e.preventDefault();
        console.log("CLICK!");
        $(".loader").show();
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/menu-sync/start",
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
                syncButtons(new_items, old_items, current_items);

            });
        })
        .fail( function( jqXHR, textStatus ){
            handleError( jqXHR, textStatus ).then(function( error ){
                console.log( error );
                error_item = '<p> There was an error</p>';
                error_item += '<h3>' + response.stausText + '</h3><pre>' + JSON.stringify(response) + '<pre>';
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
        $(".button.sync-items").each(function(index, value) {
            $this = $(this);
            console.log($this);
            // lookupKey = $this.attr('id');
            $this.click(function(e) {
                e.preventDefault();
                $(".loader").show();
                console.log(e.target.id);
                console.log(lookup[e.target.id]);
                items = lookup[e.target.id];
                if ( e.target.id === 'new_items' && lookup['current_items'].length === 0) {
                    url = "http://138.197.123.70/menu-sync/init";
                    console.log(url);
                } else {
                    url = "http://138.197.123.70/menu-sync/" + e.target.id;
                    console.log(url);
                    console.log(lookup['current_items'].length === 0);
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
                })
                .fail(function( jqXHR, textStatus ){
                    $(".loader").hide();
                    console.log(jqXHR);
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
            resp = response.responseJSON
            console.log(resp);
            resolve({   status: resp['status'],
                        text: resp['error'],
                        message: JSON.stringify(resp['exception'])});
        });

    }

});



