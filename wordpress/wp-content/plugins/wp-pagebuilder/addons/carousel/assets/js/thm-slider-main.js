
jQuery(document).ready(function($) {
    'use strict';

    // Init slick slider + animation

    /*
    $('.wppb-carousel').slick({
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: true,
        nextArrow: '<span class="wppb-carousel-prev"><i class="fa fa-angle-left"></i></span>',
        prevArrow: '<span class="wppb-carousel-next"><i class="fa fa-angle-right"></i></span>'
    }).slickAnimation();

*/

    $('.wppb-carousel').each(function(index, $value){
        let $slider = $(this);

        let settings = JSON.parse($slider.attr('data-settings'));
        let isDots = ( parseInt(settings.control_option) === 1);
        let isArrow = ( parseInt(settings.arrow_option) === 1);
        let isAutoPlay = ( parseInt(settings.autoplay_option) === 1);

        let slickOptions = {
            autoplay: false,
            speed: 800,
            lazyLoad: 'progressive',
            nextArrow: '<span class="wppb-carousel-prev"><i class="fa fa-angle-left"></i></span>',
            prevArrow: '<span class="wppb-carousel-next"><i class="fa fa-angle-right"></i></span>'
            //dots: true,
        };
        slickOptions.dots = isDots;
        slickOptions.arrows = isArrow;
        slickOptions.autoplay = isAutoPlay;

        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
        $slider.not('.slick-initialized').slick(slickOptions).slickAnimation();
    });

    $(document).on('rendered_addon', function (e, addon) {
        let iframe = window.frames['wppb-builder-view'].window.document;

        if (typeof addon.type !== 'undefined' && addon.type === 'addon' && ( addon.name === 'wppb_carousel')) {
            let $sliderWrap = $(iframe).find('.wppb-carousel');

            $sliderWrap.each(function(index, $value){
                let $slider = $(this);
                let addonID = parseInt($slider.attr('data-addon-id'));

                if (addonID === parseInt(addon.id) ) {
                    let settings = addon.settings;
                    let isDots = ( parseInt(settings.control_option) === 1);
                    let isArrow = ( parseInt(settings.arrow_option) === 1);
                    let isAutoPlay = ( parseInt(settings.autoplay_option) === 1);

                    let slickOptions = {
                        autoplay: false,
                        speed: 800,
                        lazyLoad: 'progressive',
                        nextArrow: '<span class="wppb-carousel-prev"><i class="fa fa-angle-left"></i></span>',
                        prevArrow: '<span class="wppb-carousel-next"><i class="fa fa-angle-right"></i></span>'
                        //dots: true,
                    };
                    slickOptions.dots = isDots;
                    slickOptions.arrows = isArrow;
                    slickOptions.autoplay = isAutoPlay;

                    if ($slider.hasClass('slick-initialized')) {
                        $slider.slick('unslick');
                    }
                    $slider.not('.slick-initialized').slick(slickOptions).slickAnimation();
                }
            });
        }
    });

});