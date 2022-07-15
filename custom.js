
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
            slidesToShow: 1,
            centerPadding: '10px',
            centerMode: true
        });
        $('.plan-type').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 2
        });
    }
    if (window.innerWidth < 768) {
        mobileOnlySlider();
    }
    $(window).resize(function (e) {
        if (window.innerWidth < 768) {
            if (!$('.mobile-wrap, .partners, .plan-type').hasClass('slick-initialized')) {
                mobileOnlySlider();
            }
        } else {
            if ($('.mobile-wrap, .partners, .plan-type').hasClass('slick-initialized')) {
                $('.mobile-wrap, .partners, .plan-type').slick('unslick');
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

  function showHideContent() {
    var x = document.getElementById("moreContent");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementsByClassName('content-separator')[0].style.display = 'none';
      document.getElementsByClassName('read-more')[0].style.display = 'none';
    } else {
      x.style.display = "none";
    }
  } 