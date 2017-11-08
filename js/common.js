$(document).ready(function() {
    "use strict";
    //menu icon
    $('#menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('#header .container_right').toggleClass('open');
    });

	//slider
    if ($('#candosoon_slider').length) {
        $('#candosoon_slider').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 461,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if ($('#campaign_slider').length) {
        $('#campaign_slider').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 461,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if ($('#feature_slider').length) {
        $('#feature_slider').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if (($(window).width() <= 1024) && ($('#popular_search').length)) {
        $('#popular_search .box_tab #tab_court .box_items').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 421,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('#popular_search .box_tab #tab_lession .box_items').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 421,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if ($('#lession').length) {
        $('#lession .content').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 851,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    //fixed breadcrumbs
    if ($('.breadcrumbs').length) {
        var breadcrumb_pos = $('.breadcrumbs').offset().top;
        var breadcrumb_h = $('.breadcrumbs').outerHeight();
        $(window).bind('load scroll', function() {
            if ($(this).scrollTop() >= (breadcrumb_pos)) {
                $('.breadcrumbs').addClass('fixed');
                $('.breadcrumbs').css({
                    'position': 'fixed',
                });
                $('.breadcrumbs').next().css('margin-top', breadcrumb_h);
            } else {
                $('.breadcrumbs').removeClass('fixed');
                $('.breadcrumbs').css({
                    'position': 'static',
                });
                $('.breadcrumbs').next().css('margin-top', 0);
            }
        });
    }


    //popup
    $('.popup .btn_close').click(function() {
        $(this).parents('.popup').fadeOut();
    });

    $('#lession .content .post').click(function() {
        $(this).parents('#lession').find('.popup').fadeIn();
    });

    $('#rental_coat .book_info .detail .content ul li:nth-child(2), #rental_coat .book_info .detail .content ul li:nth-child(3)').click(function() {
        $(this).parents('#rental_coat').find('.popup').fadeIn();
    });


    //form request_setting
    $('#header .container_right .btn_letter').click(function() {
        $('#request_setting').fadeIn();
    });
    $('#request_setting .submit').click(function() {
        $(this).parents('#request_setting').fadeOut();
    });
    $('#request_setting .overlay').click(function() {
        $(this).parents('#request_setting').fadeOut();
    });

    //tab index
    $('#popular_search li').click(function() {
        if ($(this).hasClass('active') === false) {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');

            var get_tab = $(this).attr('data-tab');
            $('#popular_search .box_tab .tab_content').removeClass('show')
            $('#popular_search .box_tab .tab_content[data-tab-content="' + get_tab + '"]').addClass('show');
        }
    });

	//change menu color
	$('#form_search_header ul li').click(function() {
		if($(this).hasClass('active') === false) {
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');

			if($(this).attr('id') === "for_court") {
				$('body').removeClass('content_lession');
				$('body').addClass('content_court');
				var placeholder = $('#input_search').attr('data-for-court');
				$('#input_search').attr('placeholder', placeholder);
			} else if($(this).attr('id') === "for_lession") {
				$('body').removeClass('content_court');
				$('body').addClass('content_lession');
				var placeholder = $('#input_search').attr('data-for-lession');
				$('#input_search').attr('placeholder', placeholder);
			}
		}
	});

	//add class body
	if($('body').attr('data-is-page') === 'court') {
		$('body').addClass('content_court');
		$('#form_search_header ul li#for_court').trigger('click');
	}

	//icon message
	$('#main .btn_letter').click(function() {
		$(this).toggleClass('active');
	});

	$('#main .btn_star').click(function() {
		$(this).find('i').toggleClass('fa-star-o');
		$(this).find('i').toggleClass('fa-star');
	});


	$('.controls ul li').click(function() {
		$(this).toggleClass('active');
	});

	$('#rental_coat .surface li').click(function() {
		$(this).toggleClass('active');
	});

	if ($('.court_item .box_img .list_img ul').length) {
        $('.court_item .box_img .list_img ul').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
        });
    }
    if ($('#page-search-list #posts_container .post .thumbs .images').length) {
        $('#page-search-list #posts_container .post .thumbs .images').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: false,
        });
    }



    $('.item_get_link').click(function() {
    	var link = $(this).find('a').attr('href');
    	window.location.assign(link);
    });

    
    $('.list_option_search .box_more .more_option li input').on('change', function() {
    	var flag = 0;
    	$(this).parents('.more_option').find('li').each(function() {
    		if($(this).find('input').prop('checked') === true) {
    			flag++;
    		}
    	});
    	if(flag !== 0) {
    		$('.list_option_search .box_more > li').addClass('active');
    	} else {
    		$('.list_option_search .box_more > li').removeClass('active');
    	}
    });

    $('.list_option_search .box_surface input').on('change', function() {
    	var flag = 0;
    	$(this).parents('.box_surface').find('li').each(function() {
    		if($(this).find('input').prop('checked') === true) {
    			flag++;
    		}
    	});
    	if(flag !== 0) {
    		$('.list_option_search .box_surface > li').addClass('active');
    	} else {
    		$('.list_option_search .box_surface > li').removeClass('active');
    	}
    });


});


$(window).bind('load resize', function() {
	"use strict";
});