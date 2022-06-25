
$(document).ready(function () {
    $('.intro-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1
    });

    function mobileOnlySlider() {
        $('.mobile-wrap').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 1
        });
    }
    if (window.innerWidth < 768) {
        mobileOnlySlider();
    }
    $(window).resize(function (e) {
        if (window.innerWidth < 768) {
            if (!$('.mobile-wrap').hasClass('slick-initialized')) {
                mobileOnlySlider();
            }
        } else {
            if ($('.mobile-wrap').hasClass('slick-initialized')) {
                $('.mobile-wrap').slick('unslick');
            }
        }
    });
});
 
