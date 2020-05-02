/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js


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
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                1050: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                1381: {
                    slidesPerView: 3,
                }
            }
        });
    }

    function setSlideHeight() {
        var $slides = $('.slider-reviews .swiper-slide');
        var heightArr = $slides.map(function (index) {
            return $(this).find('.card-review').height();
        });
        var maxSlideHeight = Math.round(Math.max.apply(Math, heightArr));
        $('.slider-reviews').css({height: maxSlideHeight});
    }

    setSlideHeight();

    var reviewSettings = {
        // direction: 'vertical',
        navigation: {
            nextEl: '#reviewsPagination  .swiper-button-next',
            prevEl: '#reviewsPagination  .swiper-button-prev',
        },
        pagination: {
            el: '#reviewsPagination .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        observeParents: true,
        breakpoints: {
            0: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: true,
            },
            580: {
                direction: 'vertical',
                slidesPerView: 1,
                spaceBetween: 100,
            },
            1920: {
                direction: 'vertical',
                spaceBetween: 100,
            }
        }
    };

    var swiperReviews = new Swiper('.slider-reviews', reviewSettings);

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

    $(window).on('resize orientationchange', function () {
        var resizedWindowWidth = $(window).width();

        if (windowW !== resizedWindowWidth) {
            swiperReviews.destroy(true, true);

            windowW = resizedWindowWidth;
            if (resizedWindowWidth > 580) {
                setSlideHeight();
            } else {
                $('.slider-reviews').css({height: ''})
            }

            swiperReviews = new Swiper('.slider-reviews', reviewSettings);

            setEqualHeight();
        }
    })
});