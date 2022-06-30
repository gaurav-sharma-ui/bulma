
$(document).ready(function () {
    if ($('.intro-slider .item').length > 1) {
        $('.intro-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 1
        });
    }
   

    function mobileOnlySlider() {
        $('.mobile-wrap, .partners').slick({
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
            if (!$('.mobile-wrap, .partners').hasClass('slick-initialized')) {
                mobileOnlySlider();
            }
        } else {
            if ($('.mobile-wrap, .partners').hasClass('slick-initialized')) {
                $('.mobile-wrap, .partners').slick('unslick');
            }
        }
    });


    var $menu = $('.header-left .dropdown');
    function showHideNav(e) {
        e.preventDefault();

        if (!$menu.hasClass('is-active')) {
            $menu.addClass('is-active');

            $(document).one('click', function closeTooltip(e) {
                // console.log($menu.has(e.target));
                // console.log($('.header-left .dropdown .navbar-burger').has(e.target));
                if ($menu.has(e.target).length === 0 && $('.header-left .dropdown .navbar-burger').has(e.target).length === 0) {
                    $menu.removeClass('is-active');
                } else if ($menu.hasClass('is-active')) {
                    $(document).one('click', closeTooltip);
                }
            });
        } else {
            $menu.removeClass('is-active');
        }
    }
    
    $('.header-left .dropdown .navbar-burger, .close-icon').on('click', showHideNav);
 
});
 
function openTab(evt, airPayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(airPayName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function sideNavOpen() {
    // document.getElementById("sideNav").style.width = "100%";
    document.getElementById("sideNav").style.left = "0";
  }
  
  function sideNavClose() {
    if(screen.width <= 767) {
        document.getElementById("sideNav").style.left = "-75vw";    
    } else {
        document.getElementById("sideNav").style.left = "-20vw";
    }
  }