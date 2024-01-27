(function ($) {
    'use strict';

    /*=============================================
	=    		 Preloader			      =
=============================================*/
    $('#preloader').delay(0).fadeOut();
    // }
    var loader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        loader.style.display = 'none';
    });

    /*=============================================
	=    		 Wow Active  	         =
=============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }

    /*=============================================
	=    		Mobile Menu			      =
=============================================*/

    //SubMenu Dropdown Toggle
    if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }
    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        var mobileMenuContent = $('.menu-area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(300);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $('#sticky-header').removeClass('sticky-menu');
            $('.scroll-to-target').removeClass('open');
        } else {
            $('#sticky-header').addClass('sticky-menu');
            $('.scroll-to-target').addClass('open');
        }
    });

    /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
    if ($('.scroll-to-target').length) {
        $('.scroll-to-target').on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate(
                {
                    scrollTop: $(target).offset().top,
                },
                1000
            );
        });
    }

    //====== Progress Bar
    if ($('.count-bar').length) {
        $('.count-bar').appear(
            function () {
                var el = $(this);
                var percent = el.data('percent');
                $(el).css('width', percent).addClass('counted');
            },
            {
                accY: -50,
            }
        );
    }

    //====== Magnific Popup
    if ($('.play-btn').length) {
        $('.play-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
        });
    }

    /*=============================================
	=    		Odometer Active  	       =
=============================================*/
    $('.odometer').appear(function (e) {
        var odo = $('.odometer');
        odo.each(function () {
            var countNumber = $(this).attr('data-count');
            $(this).html(countNumber);
        });
    });

    /*=============================================
	=    		 		      =
=============================================*/

    $(window).on('load', function () {
        wowAnimation();
        thmSwiperInit();
    });
    ///////////////////////////////////////////////////
    // accordion Js

    $('.accordion-title').click(function () {
        $('.accordion-title').not(this).removeClass('open');
        $('.accordion-title').not(this).next().slideUp(300);
        $(this).toggleClass('open');
        $(this).next().slideToggle(300);
    });
    ///////////////////////////////////////////////////
    // hero-slider Js
    $('.hero-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 0,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: true,
        dotsEach: 1,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    ///////////////////////////////////////////////////
    // project-slider Js
    $('.project-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: false,
        dots: false,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    });
    ///////////////////////////////////////////////////
    // project-slider2 Js
    $('.project-slider2').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: false,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    ///////////////////////////////////////////////////
    // brand-slider Js
    $('.brand-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: false,
        dots: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 3,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 5,
            },
        },
    });
    ///////////////////////////////////////////////////
    // testimonial-slider Js
    $('.testimonial-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: true,
        dots: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });
    ///////////////////////////////////////////////////
    // testimonial-slider2 Js
    $('.testimonial-slider2').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: false,
        dotsEach: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });
    ///////////////////////////////////////////////////
    // service-slider Js
    $('.service-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-next'></i>", "<i class='flaticon-next'></i>"],
        dots: false,
        dotsEach: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    ///////////////////////////////////////////////////
    // team-slider Js
    $('.team-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: false,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    ///////////////////////////////////////////////////
    // Swiper-slider Js
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: 'fade',
        parallax: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    ///////////////////////////////////////////////////
    // CountUp Js

    let valueDisplays = document.querySelectorAll('.num');
    let interval = 5000;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                countUp(entry.target);
            } else {
                countDown(entry.target);
            }
        });
    }, observerOptions);

    valueDisplays.forEach((valueDisplay) => {
        observer.observe(valueDisplay);
    });

    function countUp(element) {
        let startValue = 0;
        let endValue = parseInt(element.getAttribute('data-val'));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            element.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    }

    function countDown(element) {
        let startValue = parseInt(element.getAttribute('data-val'));
        let endValue = 0;
        let duration = Math.floor(interval / startValue);
        let counter = setInterval(function () {
            startValue -= 1;
            element.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    }

    $(document).ready(function () {
        $('select:not(.ignore)').niceSelect();
    });
})(jQuery);
// var swiper = new Swiper('.swiper-container', {
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     on: {
//         slideChange: function () {
//             var activeSlide = document.querySelector('.swiper-slide-active');
//             activeSlide.classList.add('animate__animated', 'animate__fadeIn');
//             setTimeout(function () {
//                 activeSlide.classList.remove('animate__animated', 'animate__fadeIn');
//             }, 1000);
//         },
//     },
// });
