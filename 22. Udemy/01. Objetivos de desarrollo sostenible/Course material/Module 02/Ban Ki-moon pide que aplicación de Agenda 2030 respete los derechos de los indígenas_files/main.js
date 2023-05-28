// NAV
$(document).ready(function() {
    var $btnMegaMenu = $(".btn-mega-menu");
    var navWrap = $("#navWrap");
    var navContent = $(".nav-content");
    var header = $("header");
    var logoNavWrap = $(".logo-nav-wrap");
    var c,
        currentScrollTop = 0;
    var nav = $("nav");
    var navbar = $(".navbar");
    var navBarLink = $(".navbar-nav > li > a");
    var navBarLinkInverse = $(".navbar-inverse .navbar-nav > li > a");
    var btnMegaMenuInner = $(".btn-mega-menu-inner");
    var btnMegaMenuInnerBefore = $(".btn-mega-menu-inner:before");

    $btnMegaMenu.on("click", function(e) {
        $btnMegaMenu.toggleClass("is-active");
        navWrap.toggleClass("active");
    });

    $(window).scroll(function() {
        var windowScroll = $(window).scrollTop();
        var viewportHeight = $(this).height();
        var documentHeight = $(document).height();
        var b = nav.height();
        if (windowScroll > 90) {
            navContent.addClass("disable");
            header.addClass("header-disable");

            logoNavWrap.addClass("active");
            navbar.addClass("scroll-active");
            navBarLink.addClass("scroll-active");
            navBarLinkInverse.addClass("scroll-active");
            $btnMegaMenu.addClass("scroll-active");
            btnMegaMenuInner.addClass("scroll-active");
            btnMegaMenuInnerBefore.addClass("scroll-active");
        } else {
            navContent.removeClass("disable");
            header.removeClass("header-disable");
            logoNavWrap.removeClass("active");
            navbar.removeClass("scroll-active");
            navBarLink.removeClass("scroll-active");
            navBarLinkInverse.removeClass("scroll-active");
            $btnMegaMenu.removeClass("scroll-active");
            btnMegaMenuInner.removeClass("scroll-active");
            btnMegaMenuInnerBefore.removeClass("scroll-active");
        }
        var x = window.matchMedia("(max-width: 767px)").matches;
        if (windowScroll > 120 && x == false) {
            header.css({ top: "0px", position: "fixed" });
        } else if (x == false) {
            header.css({ top: "130px", position: "initial" });
        }

        if (windowScroll > 60 && x == true) {
            header.css({ top: "0px", position: "fixed" });
        } else if (x == true) {
            header.css({ top: "130px", position: "initial" });
        }

        var sectionsHeight = $('#sports').height() + $('.content-gente-flash').height() + $('#suplementos').height() + $('footer').height();
        if (windowScroll >= documentHeight - viewportHeight - sectionsHeight) {
            // closePubli("oepPubli");
            closePubli("fancesaPubli");
        }
    });

    // CURIOSIDADES
    $("#curiosidades .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                loop: true,
                nav: true
            },
            992: {
                items: 4,
                loop: true,
                nav: true
            }
        }
    });

    // GALERIA
    // GALERIA DE SECCION EN PORTADA
    var galleryThumbs = new Swiper(".gallery-container  .gallery-thumbs", {
        spaceBetween: 5,
        slidesPerView: 10,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 10,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 5
            }
        }
    });
    var galleryTop = new Swiper(".gallery-container  .gallery-top", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery-container .swiper-button-next",
            prevEl: ".gallery-container .swiper-button-prev"
        },
        thumbs: {
            swiper: galleryThumbs
        },
        zoom: {
            maxRatio: 5
        }
    });

    // GALERIA DE UNA NOTA
    var galleryNota = new Swiper(".container-nota  .gallery-thumbs", {
        spaceBetween: 5,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 7,
                spaceBetween: 5
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 5
            }
        }
    });
    var galleryTop = new Swiper(".container-nota  .gallery-top", {
        spaceBetween: 5,
        navigation: {
            nextEl: ".container-nota .swiper-button-next",
            prevEl: ".container-nota .swiper-button-prev"
        },
        thumbs: {
            swiper: galleryNota
        },
        zoom: {
            maxRatio: 5
        }
    });

    // vista de una galeria
    var galleryThumbsView = new Swiper(
        ".container-view-gallery  .gallery-thumbs", {
            spaceBetween: 5,
            slidesPerView: 7,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 5
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 5
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 5
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 5
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5
                }
            }
        }
    );
    var galleryTopView = new Swiper(".container-view-gallery  .gallery-top", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".container-view-gallery .swiper-button-next",
            prevEl: ".container-view-gallery .swiper-button-prev"
        },
        thumbs: {
            swiper: galleryThumbsView
        },
        zoom: {
            maxRatio: 5
        }
    });

    // IMAGES

    //initialize swiper when document ready
    var mySwiper = new Swiper(".images-container .swiper-container", {
        // Optional parameters
        direction: "horizontal",
        navigation: {
            nextEl: ".images-container .swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".images-container .swiper-pagination",
            type: "fraction"
        },
        loop: false
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false,
            // },
    });

    // LAST-NEWS-SLIDES
    $("#lastNewsSlide .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 3,
                nav: true
            }
        }
    });

    // OPINION
    $(".content-opinion .owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        // autoplay: true,
        // autoplayTimeout: 1000,
        // autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true,
                loop: false
            },
            992: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    $('.cover-container .owl-carousel').owlCarousel({
        items: 1.25,
        loop: false,
        margin: 10,
        merge: true,
        center: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            400: {
                items: 1,
            },
            540: {
                items: 1.45,
            },
            678: {
                merge: false,
                items: 2,
            },
            992: {
                mergeFit: true,
                items: 1.15,
            }
        }
    });

    // SUPLEMENTOS
    $("#suplementos .owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            400: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            768: {
                items: 4,
                nav: false
            },
            992: {
                items: 6,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });

    $("#brasil2019 .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        merge: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
                    // dots:true,
            },
            400: {
                items: 2,
                nav: false
                    // dots:true,
            },
            768: {
                items: 3,
                loop: true,
                nav: false
                    // dots:true,
            },
            992: {
                items: 4,
                loop: true,
                nav: false
            }
        }
    });

    // MORE-READ
    $("#viewMore").on("hide.bs.collapse", function() {
        $("#btnViewMoreToday").html("VER MÁS");
    });
    $("#viewMore").on("show.bs.collapse", function() {
        $("#btnViewMoreToday").html("VER MENOS");
    });

    $("#viewMoreWeek").on("hide.bs.collapse", function() {
        $("#btnViewMoreWeek").html("VER MÁS");
    });
    $("#viewMoreWeek").on("show.bs.collapse", function() {
        $("#btnViewMoreWeek").html("VER MENOS");
    });
    $("#cover-image").owlCarousel({
        items: 1.25,
        loop: false,
        margin: 10,
        merge: true,
        center: true,
        nav: true,
        responsive: {
            678: {
                mergeFit: true
            },
            992: {
                mergeFit: true
            }
        }
    });
});

// lazyload
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    fetchImage(lazyImage.src).then(() => {
                        lazyImage.classList.remove("lazy");
                    })
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
});

function fetchImage(url) {
    return new Promise(function(res, reject) {
        const image = new Image();
        image.src = url;
        image.onload = res;
        image.onerror = reject;
    })
}