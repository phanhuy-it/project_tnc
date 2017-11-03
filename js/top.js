$(document).ready(function() {
    "use strict";
    $('#candosoon_slider').slick({
        dots: false,
        infinite: false,
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
    $('#campaign_slider').slick({
        dots: false,
        infinite: false,
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
    $('#feature_slider').slick({
        dots: false,
        infinite: false,
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
});