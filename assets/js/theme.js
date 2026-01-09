(function($) {
    'use strict';

// Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });

    // 6.HOME 2 HERO CAROUSEL
    $('.em-slick-slider-new').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
    /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 300000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*--
    	One Page Nav
    ----------------------------------- */
    var top_offset = $('.one_page').height() - 100;
    $('.one_page .leadership_menu .nav_scroll').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1000,
        scrollOffset: top_offset,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
	

    $(".nav_scroll > li:first-child").addClass("current");
	
    /* sticky nav 1 */
    $('.one_page').scrollToFixed({
        preFixed: function() {
            $(this).find('.scroll_fixed').addClass('prefix');
        },
        postFixed: function() {
            $(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
        }
    });

    /* sticky nav 2 */
    var headers1 = $('.trp_nav_area');
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 200) {
            headers1.addClass('hbg2');
        } else {
            headers1.removeClass('hbg2');
        }

    });

    /*---------------------
    counterUp
    --------------------- */
    $('.countr_text h1').counterUp({
        delay: 10,
        time: 1000
    });

	 /* Loder  */
    $(function () {
      $('body').addClass('loaded');
    });

    /* Portfolio Isotope  */

    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });


            $('.filter_menu li').on('click', function() {

                $('.filter_menu li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    /*--------------------------
    	blog messonary
    ---------------------------- */
    $('.bgimgload').imagesLoaded(function() {
        if ($.fn.isotope) {
            var $blogmassonary = $('.blog-messonary');
            $blogmassonary.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });

        };
    });
    /*--------------------
    	testimonial 
    -----------------------------------*/
    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed:2500,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

// slider section
    $('.slider_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed:2500,
        dots: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
	// header section
    //     $('.header_list').owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout:4000,
    //     smartSpeed:2500,
    //     dots: true,
    //     nav: false,
    //     navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         992: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         },
    //         1365: {
    //             items:2
    //         },
    //         1600: {
    //             items: 3
    //         },
    //         1920: {
    //             items: 3
    //         }
    //     }
    // })

    $('.blog_carousel').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items:1
            },
            992: {
                items: 3
            },
             1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
	
    $('.brand_curousel').owlCarousel({
        nav: true,
        autoplayTimeout:4000,
        smartSpeed:2500,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 5
            }
        }
    })

    $('.single_gallery').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    $('.portfolio_gallery_post').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
      // Brand Active
    $('.slider-carousel').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 6000,
         smartSpeed:1500,
         dots: false,
         dotsEach: false,
         nav:false,
         navText: [" <i class='fas fa-angle-left'></i>" , "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });
   // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true,
    });
	
	/*---------------------
	 countdown
	--------------------- */
		$('[data-countdown]').each(function() {
		  var $this = $(this), finalDate = $(this).data('countdown');
		  $this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdowns days"><span class="time-counts">%-D</span> <p>Days</p></span> <span class="cdowns hour"><span class="time-counts">%-H</span> <p>Hour</p></span> <span class="cdowns minutes"><span class="time-counts">%M</span> <p>Min</p></span> <span class="cdowns second"> <span><span class="time-counts">%S</span> <p>Sec</p></span>'));
		  });
		});	
	
	
    // top quearys menu 
    var accoll = $(".panel-heading1");
    accoll.on('click', function() {
        accoll.removeClass('active');
        $(this).addClass('active');
    });	


})(jQuery);