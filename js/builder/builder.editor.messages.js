/**
 * Editor messages
 */

var massagesTicker = jQuery('#editor-messages').newsTicker({
    row_height: 40,
    max_rows: 2,
    speed: 900,
    direction: 'up',
    duration: 12000,
    autostart: 1,
    pauseOnHover: 1,
    start: function() {
        jQuery('#editor-messages').css('opacity', '1');
    },
});

jQuery(document).ready(function($){

    $(document).on( 'click', '.dslc-editor-messages-hide', function(e){

        $('#editor-messages').html('<div class="dslc-notice">Please install and activate any our add-on.</div>');
    });

    var hide_panel = $('.dslc-editor-messages-hide').data('can-hide');

    if ( hide_panel == '1' ) {
        $('.dslc-editor-messages-section').css('display', 'none');
        $('.dslca-container').removeClass( "active-message-panel" );
    } else {
        $('.dslc-editor-messages-section').css('display', 'block');
        $('.dslca-container').addClass( "active-message-panel" );
    }
});