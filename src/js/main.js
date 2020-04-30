/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/jquery-nice-select-1.1.0/js/jquery.js
//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js



/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    var swiperBrands = new Swiper('.slider-brands', {
        slidesPerView: 3,
        spaceBetween: 90,
        navigation: {
            nextEl: '.block-view-brands .swiper-button-next',
            prevEl: '.block-view-brands .swiper-button-prev',
        },
        pagination: {
            el: '.block-view-brands .swiper-pagination',
        },
    });

    var swiperReviews = new Swiper('.slider-reviews', {
        direction: 'vertical',
        navigation: {
            nextEl: '.block-reviews  .swiper-button-next',
            prevEl: '.block-reviews  .swiper-button-prev',
        },
        pagination: {
            el: '.block-reviews .swiper-pagination',
            clickable: true,
        },
    });
    /**
     * CUSTOM SELECT
     **/
    $(document).ready(function() {
        $('select').niceSelect();
    });
});