jQuery(document).ready(function($){

    if (wppb_admin_ajax.current_editor === 'wppb_builder_activated'){
        jQuery("body").addClass("active-wppb-editor");
    }else{
        jQuery("body").addClass("inactive-wppb-editor");
    }

    jQuery('.edit-with-wppb-builder').click(function (e) {
        e.preventDefault();
        var $that =  $(this);
        var post_id = jQuery('.wppagebuilder-edit-button').attr("data-postid");
        $.post(  wppb_admin_ajax.ajax_url, {action: 'wppb_switch_editor', post_id : post_id, wppb_nonce : wppb_admin_ajax.wppb_nonce }, function( data ) {
        });
        location.href = $that.attr('href');
    });

    $('.use-default-editor').click(function (e) {
        e.preventDefault();
        var post_id = jQuery('.wppagebuilder-edit-button').attr("data-postid");
        jQuery.ajax({
            url : wppb_admin_ajax.ajax_url,
            type : 'post',
            data : {
                action: 'wppb_switch_default',
                post_id : post_id,
                wppb_nonce : wppb_admin_ajax.wppb_nonce
            },
            success : function( response ) {
                //
            }
        });
        window.location.reload();
    });

    $(document).on('click', '#wppb_clear_cache_btn', function(e){
        e.preventDefault();

        var $that = $(this);

        jQuery.ajax({
            url : wppb_admin_ajax.ajax_url,
            type : 'post',
            data : {
                action: 'wppb_clear_cache',
                wppb_nonce : wppb_admin_ajax.wppb_nonce
            },
            beforeSend: function(){
                $that.addClass('updating-message');
            },
            success : function( response ) {
                $that.closest('label').find('.response-text').html('<span style="color: #228b22;">WP Page Builder cache has been cleared.</span>');
            },
            complete: function(){
                $that.removeClass('updating-message');
            }
        });
    });

    /**
     * Gutenberg compatibility
     */

    let wppbGutenbergCompatibility = {
        init : function(){
            let self = this;
            setTimeout(
                function(){
                    self.addWPPBBtn();
                },
                1
            );

        },
        toolbarSelector: $('.edit-post-header-toolbar'),
        addWPPBBtn: function(){
            let isBtnExists = this.toolbarSelector.find('#wppb-edit-with-btn-in-gutenberg-toolbar').length;
            let btnHtmlWrap = $('#wppb-edit-with-btn-in-gutenberg-toolbar');
            if (!isBtnExists && btnHtmlWrap.length) {
                $('.edit-post-header-toolbar').append(btnHtmlWrap.html());
            }
        }
    };
    wppbGutenbergCompatibility.init();

    //wppb-edit-with-btn-in-gutenberg-toolbar
});


//wppb_clear_cache_btn