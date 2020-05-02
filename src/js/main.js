/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js
//= include ../../node_modules/clip-path-polyfill/clip-path-polyfill.js


/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    if ($('.slider-brands .card').length > 3) {

        $('#popularBrandsPagination').addClass('brands-pagination_active');
        $('.slider-brands').removeClass('slider-brands_static');

        var swiperBrands = new Swiper('.slider-brands', {
            navigation: {
                nextEl: '#popularBrandsPagination .swiper-button-next',
                prevEl: '#popularBrandsPagination .swiper-button-prev',
            },
            pagination: {
                el: '#popularBrandsPagination .swiper-pagination',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                1050: {
                    slidesPerView: 2,
                },
                1150: {
                    slidesPerView: 3,
                }
            }
        });
    }


    var swiperReviews = new Swiper('.slider-reviews', {
        direction: 'vertical',
        navigation: {
            nextEl: '#reviewsPagination  .swiper-button-next',
            prevEl: '#reviewsPagination  .swiper-button-prev',
        },
        pagination: {
            el: '#reviewsPagination .swiper-pagination',
            clickable: true,
        },
    });

    /**
     * CUSTOM SELECT
     **/

    $('.custom-select').niceSelect();

    /**
     * CARD HEIGHT
     **/

    function setEqualHeight() {

        var max_card_height = 0;
        var $advantagesCards = $('.advantages-card');
        $advantagesCards.each(function () {
            if ($(this).height() > max_card_height) { // если высота колонки больше значения максимальной высоты,
                max_card_height = $(this).height(); // то она сама становится новой максимальной высотой
            }
        });
        $advantagesCards.css({minHeight: max_card_height}); // устанавливаем высоту каждой колонки равной значению максимальной высоты
    }

    setEqualHeight();

    var windowW = $(window).width();

    $(window).on('resize', function () {
        var resizedWindowWidth = $(window).width();

        if (windowW !== resizedWindowWidth) {
            windowW = resizedWindowWidth;
            setEqualHeight();
        }
    })
});