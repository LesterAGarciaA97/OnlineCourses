/* ---------------------------------------------------------------------
Global JavaScript & jQuery

Target Browsers: All
------------------------------------------------------------------------ */

var NERD = NERD || {};
var UNW = UNW || {};

$(function () {

    // Initialize!
    NERD.NavEqualize.init();
    UNW.Header.init();
    UNW.Search.init();
    NERD.ActiveDoormat.init();
    //NERD.ExternalLinks.init();
    NERD.AutoReplace.init();
    NERD.FeaturedCarousel.init();
    NERD.TextControlledCarousel.init();
    NERD.BeyondCarousel.init();
    NERD.FlickrFeed.init();
    NERD.YoutubeFeed.init();
    NERD.TwitterFeed.init();
    NERD.Modals.init();
    NERD.TabbedNav.init();
    NERD.Accordion.init();
    NERD.OptionsAccordion.init();
    NERD.SimpleToggleHide.init();
    NERD.FlickrSetModal.init();
    NERD.Jbox.init();
    //NERD.ytPlayer.init();
    UNW.Analytics.init();
    UNW.Ticker.init();
    UNW.Snippets.init();
    UNW.Jobs.init();
});


UNW.Header = {
    init: function () {
        $('#language-bar-place-holder').replaceWith($('#language-bar-content').html());

        $("#btnSearch").click(function () {
            UNW.Header.redirectToSearchPage();
        });

        $("#headerSearchTxt").keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                UNW.Header.redirectToSearchPage();
            }
        });

        $('#dl-menu').dlmenu({
            animationClasses: { classin: 'dl-animate-in-5', classout: 'dl-animate-out-5' }
        });

        /*
            $(".translation li a").each(function (i, val) {
                var language = $(this).attr('data-language');
                var relativeUrl = $('html').attr('data-relativeUrl');
                if (typeof language != 'undefined' && typeof relativeUrl != 'undefined') {
                    this.href = "/" + $(this).attr('data-language') + $('html').attr('data-relativeUrl');
                }
            });
        */
    },

    redirectToSearchPage: function () {
        var keyword = DOMPurify.sanitize($("#headerSearchTxt").val());
        if (keyword.toLowerCase().indexOf('...', keyword.length - 3) !== -1) return false;
        var langName = "/" + window.location.pathname.split("/")[1].trim();
        var location = langName + "/search-results?keywords=" + keyword;
        window.location = location;
    }

};

UNW.Search = {

    doSearch: function () {
        var searchText = DOMPurify.sanitize($("#searchText").val());
        if (searchText.toLowerCase().indexOf('...', searchText.length - 3) !== -1) {
            searchText = "";
        }
        window.location.href = "?keywords=" + searchText;
    },

    init: function () {

        $("#searchText").keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                $("#searchButton").click();
            }
        });

        var queryParams = new URI().search(true);
        if (queryParams.start_date) {
            $(".date-range #startDate").val(queryParams.start_date);
        }
        if (queryParams.end_date) {
            $(".date-range #endDate").val(queryParams.end_date);
        }

        $("#applyDateFilter").click(function () {
            var startDate = $(".date-range #startDate").val();
            var endDate = $(".date-range #endDate").val();
            var newUri = new URI();
            var validDates = false;
            var dateRange = {};
            if (startDate && startDate != "mm/dd/yyyy") {
                dateRange.start_date = startDate;
                validDates = true;
            }
            if (endDate && endDate != "mm/dd/yyyy") {
                dateRange.end_date = endDate;
                validDates = true;
            }
            if (validDates) {
                newUri.search(dateRange);
            }
            //newUri.removeSearch("start_date");
            //newUri.addSearch("start_date", startDate);
            //newUri.addSearch("end_date", endDate);
            window.location.href = newUri.toString();
            return false;
        });

        //$("[data-toggle='dropdown']").next("ul").addClass("expandable");
        //$("[data-toggle='dropdown']").on('click', function() {
        //    $(this).next("ul").toggleClass('expanded');
        //});
        $(".search-filters .show-more,.show-more-text").click(function () {
            if (this.className.indexOf('clicked') != -1) {
                $(this).prev().slideUp(1000);
                $(this).removeClass('clicked');
                //$(this).html("<a>Show</a>");
                $(this).children('.show').show();
                $(this).children('.hide').hide();
            }
            else {
                $(this).addClass('clicked');
                $(this).prev().slideDown(1000);
                //$(this).html("<a>Hide</a>");
                $(this).children('.show').hide();
                $(this).children('.hide').show();
            }
        });

        $(".search-filters .block .head .icon").on('click', function () {
            $(this).closest('.block').find('.content').slideToggle("slow");
            $(this).closest('.head').toggleClass('closed');
        });
    },




};

UNW.Analytics = {
    init: function () {
        if (typeof(gtag) != 'undefined') {
            $("a.ga-event").on("click", function () {
                var label = URI($(this).attr('href')).path();
                UNW.Analytics.eventClick($(this).attr("data-category"), $(this).attr('data-action'), label, $(this).attr('data-value'));
            });
        }
    },

    eventClick: function (category, action, label, value) {
        if (typeof(gtag) != 'undefined') {
            label = location.pathname + " - " + label;
            value = value || 1;
            //ga('send', 'event', category, action, label, value);
            //ga('archive.send', 'event', category, action, label, value);
            gtag('event', action, { 'event_category': category, 'event_label': label, 'value': value });
            //gtag('event', 'archive.send', { 'event_category': category, 'event_label': label, 'event_action': action, 'value': value });
        }
    }


};

UNW.Ticker = {
    init: function () {
        $(".breakingNews").breakingNews({
            effect: "slide-v",
            autoplay: true,
            timer: 5000,
            color: "light",
            border: true
        });
    }
};

UNW.Snippets = {
    init: function () {
        this.columnCount('flex-media');
    },

    columnCount: function (className) {
        $('.' + className).each(function () {
            var figureCount = $(this).find('figure').length;
            switch (figureCount) {
                case 1:
                    $(this).addClass('one');
                    break;
                case 2:
                    $(this).addClass('two');
                    break;
                default:
                    $(this).addClass('three');
                    break;
            }
            if (className === 'flex-media') {
                $(this).find('figure').each(function () {
                    $(this).find('img').wrap('<div class="img-block"></div>');
                });
            }
        });
    }
};

UNW.Jobs = {
    init: function () {
        $(document).ready(function () {
            var jobDiv = $(".Job-vacancyFrame");
            var framUrl = jobDiv.attr("src");
            var postLevel = jobDiv.attr("postLevel");
            if (postLevel != null) {
                framUrl = framUrl + "?postLevel=" + postLevel;
            }
            $.ajax({
                url: framUrl, success: function (result) {
                    $(".Job-vacancyFrame").html(DOMPurify.sanitize(result));
                }
            });
        });
    }
};

/* ---------------------------------------------------------------------
ExternalLinks
Author: Anthony Ticknor

Launches links with a rel="external" in a new window
------------------------------------------------------------------------ */

NERD.NavEqualize = {
    init: function () {
        // get the nav
        var $navPrimary = $('#js-nav-primary');
        // determine the width of the nav containter
        var navOuterWidth = $navPrimary.width();
        // determine the width of the nav items
        //var navInnerWidth = $navPrimary.find('ul.menuH').width();
        var navInnerWidth = 0;
        $navPrimary.find('ul.menuH > li').each(function () {
            navInnerWidth += $(this).width();
        });

        // determine how many nav items exist at the root level
        var numNavItems = $navPrimary.find('ul.menuH > li').length;
        // use maths to figure out how many extra pixels we can add to each item
        var addToWidth = Math.floor((navOuterWidth - navInnerWidth) / numNavItems);
        // figure out the remainder of pixels that can't be split out.
        var remainder = (navOuterWidth - navInnerWidth) - (addToWidth * numNavItems);

        // make sure we're working with a positive number
        if (addToWidth >= 0) {
            // apply the pixels to each nav item.
            var cumulative = 0;
            $navPrimary.find('ul.menuH > li').each(function () {
                var me = $(this);
                var width = me.width() + addToWidth;
                cumulative += width;
                me.width(width);
            });
            // apply the remainder to the last item
            var last = $navPrimary.find('ul.menuH > li').last();
            remainder = navOuterWidth - cumulative;
            last.width(last.width() + remainder);
        }

        // display the nav once changes are applied
        $navPrimary.css('visibility', 'visible');
    }
};

/* ---------------------------------------------------------------------
Active DoorMat
Author: Jerami Tainter

marks the active doormat ul with active
------------------------------------------------------------------------ */

NERD.ActiveDoormat = {
    init: function () {
        $('.site-map-root').find('a').each(function () {
            if (this.href == window.location.href) {
                var activeLi = $(this).parent().parents('li');
                activeLi.addClass('active');
                activeLi.siblings().removeClass('active');
                return;
            }
        });
    }
};

/* ---------------------------------------------------------------------
ExternalLinks
Author: Anthony Ticknor

Launches links with a rel="external" in a new window
------------------------------------------------------------------------ */

NERD.ExternalLinks = {
    init: function () {
        $('a[rel=external]').attr('target', '_blank');
    }
};

/* ---------------------------------------------------------------------
AutoReplace
Author: Dan Piscitiello

Mimics HTML5 placeholder behavior

Additionally, adds and removes 'placeholder-text' class, used as a styling
hook for when placeholder text is visible or not visible

Additionally, prevents forms from being
submitted if the default text remains in input field - which we may 
or may not want to leave in place, depending on usage in site
------------------------------------------------------------------------ */
NERD.AutoReplace = {
    $fields: undefined,

    init: function () {
        var $fields = $('[placeholder]');

        if ($fields.length !== 0) {
            var self = this;
            self.$fields = $fields.addClass('placeholder-text');
            self.bind();
        }
    },

    bind: function () {
        var self = this;

        self.$fields.each(
            function () {
                var me = $(this);
                var defaultText = me.attr('placeholder');
                if (!me.val()) {
                    me.attr('placeholder', '').val(defaultText);
                }

                me.focus(
                    function () {
                        if (me.val() === defaultText) {
                            me.val('').removeClass('placeholder-text');
                        }
                    }
                );

                me.blur(
                    function () {
                        if (me.val() === '') {
                            me.val(defaultText).addClass('placeholder-text');
                        }
                    }
                );

                me.parents('form').submit(
                    function () {
                        if (me.is('.required') && (me.val() === defaultText || me.val() === "")) {
                            return false;
                        }
                    }
                );
            }
        );
    }
};


/* ---------------------------------------------------------------------
FeaturedCarousel
Author: Anthony Ticknor

Builds a featured carousel
------------------------------------------------------------------------ */

NERD.FeaturedCarousel = {

    $slideshow: undefined,
    numSlides: undefined,
    slides: undefined,
    slidePagination: undefined,
    currentSlide: 0,

    init: function () {
        var $slideshow = $('#js-featured-carousel');
        if ($slideshow.length !== 0) {
            var self = this;
            self.$slideshow = $slideshow;
            self.slides = $slideshow.children('.slide');
            self.numSlides = self.slides.length;
            self.numSlidesFromZero = self.slides.length - 1; // the -1 gets you 0 based counting for using EQ
            self.setupSlides();
            self.setupControls();
            self.playCarousel();
            self.bind();
        }
    },

    setupSlides: function () {
        var self = this;
        self.slides.css('display', 'none');
        self.slides.eq(0).css('display', 'block');
    },

    setupControls: function () {
        var self = this;
        var carouselPagination = '';
        for (var i = 0; i < self.numSlides; i++) {
            carouselPagination += '<li><a>&bull;</a></li>';
        }
        self.$slideshow.append('<ol class="fc-pagination">' + carouselPagination + '</ol>');
        self.slidePagination = self.$slideshow.find('.fc-pagination').children('li');
        self.slidePagination.eq(0).addClass('active');
    },

    bind: function () {
        var self = this;
        var stopped = false;
        self.$slideshow.hover(
            function () {
                self.pauseCarousel();
            },
            function () {
                if (stopped === false) {
                    self.playCarousel();
                }
            }
        );
        self.slidePagination.find('a').click(
            function () {
                self.pauseCarousel();
                stopped = true;
                var me = $(this);
                var slideIndex = me.parent().index();
                self.jumpToSlide(slideIndex);
            }
        );
        self.slidePagination.find('a').each(function (i) {
            var me = $(this);
            var cnt = i + 1;
            me.attr({ "class":"ga-event", "data-category": "ui-carousel", "data-action": "ui-carousel-circles-" + cnt, "data-value": 1 });
        });
    },

    playCarousel: function () {
        var self = this;
        self.play = window.setInterval(function () { self.nextSlide(); }, 8000);
    },

    pauseCarousel: function () {
        var self = this;
        clearInterval(self.play);
    },

    prevSlide: function () {
        var self = this;
        self.slides.eq(self.currentSlide).fadeOut();
        self.slidePagination.eq(self.currentSlide).removeClass('active');
        if (self.currentSlide === 0) {
            self.currentSlide = self.numSlidesFromZero;
        } else {
            self.currentSlide--;
        }
        self.slidePagination.eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).fadeIn();
    },

    nextSlide: function () {
        var self = this;
        self.slides.eq(self.currentSlide).fadeOut();
        self.slidePagination.eq(self.currentSlide).removeClass('active');
        if (self.currentSlide === self.numSlidesFromZero) {
            self.currentSlide = 0;
        } else {
            self.currentSlide++;
        }
        self.slidePagination.eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).fadeIn();
    },

    jumpToSlide: function (slideIndex) {
        var self = this;
        self.slides.eq(self.currentSlide).fadeOut();
        self.slidePagination.eq(self.currentSlide).removeClass('active');
        self.currentSlide = slideIndex;
        self.slidePagination.eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).fadeIn();
    }
};

/* ---------------------------------------------------------------------
Text Controlled Carousel
Author: Josh Anderson

Builds a carousel and text hover navigation. Used on the home page.
------------------------------------------------------------------------ */

NERD.TextControlledCarousel = {

    $slideContainer: undefined,
    $slideControls: undefined,
    slides: undefined,
    currentSlide: 0,

    init: function () {
        $slideContainer = $('#home-featured-carousel');
        if ($slideContainer.length) {
            var self = this;
            self.$slideContainer = $slideContainer;
            self.slides = $slideContainer.children('.featured-slide');
            self.numSlidesFromZero = self.slides.length - 1; // the -1 gets you 0 based counting for using EQ
            self.setupSlides();
            self.setupControls();
            self.playCarousel();
            self.bind();
        }
    },

    setupSlides: function () {
        var self = this;
        self.slides.hide();
        self.slides.eq(0).css('display', 'block');
    },

    setupControls: function () {
        var self = this;
        self.$slideContainer.append('<ul id="slide-controls" class="text-slide-controls"></ul>');
        self.$slideControls = $('#slide-controls');

        self.slides.each(function () {
            var me = $(this);
            var text = me.find('.featured-slide-heading').text();
            var link = me.find('a').attr('href');
            self.$slideControls.append('<li><a href="' + link + '">' + text + '</a></li>');
        });

        var containerWidth = (self.$slideContainer.width()) - 2;
        var paddingWidth = parseInt(self.$slideControls.find('li').css('padding-left')) * 2;
        var paddingHeight = parseInt(self.$slideControls.find('li').css('padding-top')) * 2;
        var containerItems = self.slides.length;

        // Apply the width to the items
        self.$slideControls.find('li').width([(containerWidth - containerItems) / containerItems] - paddingWidth);

        // Apply the height to the items
        var itemHeight = self.$slideControls.height();
        self.$slideControls.find('li').height(itemHeight);

        // Add active class
        self.$slideControls.find('li').eq(0).addClass('active');
        self.$slideControls.css('top', '329px');

        // Add the height to the main container
        self.$slideContainer.height(self.$slideContainer.height() + itemHeight);
    },

    bind: function () {
        var self = this;

        self.$slideContainer.hover(
            function () {
                self.pauseCarousel();
            },
            function () {
                self.playCarousel();
            }
        );

        self.$slideControls.find('li').hover(
            function () {
                self.pauseCarousel();
                stopped = true;
                var me = $(this);
                var slideIndex = me.index();
                self.jumpToSlide(slideIndex);
            }
        );
    },

    playCarousel: function () {
        var self = this;
        self.play = window.setInterval(function () { self.nextSlide(); }, 4000);
    },

    pauseCarousel: function () {
        var self = this;
        clearInterval(self.play);
    },

    nextSlide: function () {
        var self = this;
        self.slides.eq(self.currentSlide).fadeOut(200);
        self.$slideControls.find('li').eq(self.currentSlide).removeClass('active');
        if (self.currentSlide === self.numSlidesFromZero) {
            self.currentSlide = 0;
        } else {
            self.currentSlide++;
        }
        self.$slideControls.find('li').eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).fadeIn(200);
    },

    jumpToSlide: function (slideIndex) {
        var self = this;
        self.slides.eq(self.currentSlide).hide();
        self.$slideControls.find('li').eq(self.currentSlide).removeClass('active');
        self.currentSlide = slideIndex;
        self.$slideControls.find('li').eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).show();
    }

};
/* ---------------------------------------------------------------------
Beyond UN Women Carousel
Author: Josh Anderson

Grey carousel on the bottom on the home page.
Builds a carousel and list of links on the right hand side.
------------------------------------------------------------------------ */

NERD.BeyondCarousel = {
    $slideContainer: undefined,
    $slideControls: undefined,
    slides: undefined,
    currentSlide: 0,

    init: function () {
        $slideContainer = $('#beyond-carousel');
        if ($slideContainer.length) {
            var self = this;
            self.$slideContainer = $slideContainer;
            self.slides = $slideContainer.children('.slide-item');
            self.numSlidesFromZero = self.slides.length - 1; // the -1 gets you 0 based counting for using EQ
            self.setupSlides();
            self.setupControls();
            self.playCarousel();
            self.bind();
        }
    },

    setupSlides: function () {
        var self = this;
        self.slides.hide();
        self.slides.eq(0).css('display', 'block');
    },

    setupControls: function () {
        var self = this;
        self.$slideContainer.append('<div class="beyond-slide-controls-container"><ul id="beyond-slide-controls" class="beyond-slide-controls"></ul></div>');
        self.$slideControls = $('#beyond-slide-controls');

        self.slides.each(function () {
            var me = $(this);
            var text = me.find('.featured-slide-heading-alt').text();
            var link = me.find('a').attr('href');
            self.$slideControls.append('<li><a href="' + link + '" >' + text + '</a></li>');
        });

        // Add active class
        self.$slideControls.find('li').eq(0).addClass('active');
    },

    bind: function () {
        var self = this;

        self.$slideContainer.hover(
            function () {
                self.pauseCarousel();
            },
            function () {
                self.playCarousel();
            }
        );

        self.$slideControls.find('li').hover(
            function () {
                self.pauseCarousel();
                stopped = true;
                var me = $(this);
                var slideIndex = me.index();
                self.jumpToSlide(slideIndex);
            }
        );

        // Add an active class to slide controls so the css transitions can handle the hover states
        self.$slideControls.hover(
            function () {
                self.$slideControls.addClass('hovered');
            },
            function () {
                self.$slideControls.removeClass('hovered');
            }
        );

        var topValue = 0;
        var itemPanelsInCarousel = Math.ceil(self.$slideControls.children('li').length / 4) - 1;
        var currentItemPanel = 0;
        var panelHeight = 248;
        self.$slideContainer.find('img.up').click(function () {
            if (!self.$slideControls.is(':animated')) {
                if (currentItemPanel > 0) {
                    self.$slideControls.animate({ 'top': '+=' + panelHeight });
                    currentItemPanel -= 1;
                } else {
                    self.$slideControls.animate({ 'top': '-' + (panelHeight * itemPanelsInCarousel) }, 500);
                    currentItemPanel = itemPanelsInCarousel;
                }
            }
        });
        self.$slideContainer.find('img.down').click(function () {
            if (!self.$slideControls.is(':animated')) {
                topValue = parseInt(self.$slideControls.css('top').replace('px', ''));
                if (currentItemPanel < itemPanelsInCarousel) {
                    self.$slideControls.animate({ 'top': '-=' + panelHeight });
                    currentItemPanel += 1;
                } else {
                    self.$slideControls.animate({ 'top': '0' }, 500);
                    currentItemPanel = 0;
                }
            }
        });
    },

    playCarousel: function () {
        var self = this;
        self.play = window.setInterval(function () { self.nextSlide(); }, 5000);
    },

    pauseCarousel: function () {
        var self = this;
        clearInterval(self.play);
    },

    nextSlide: function () {
        var self = this;
        self.slides.eq(self.currentSlide).fadeOut(200);
        self.$slideControls.find('li').eq(self.currentSlide).removeClass('active');
        if (self.currentSlide === self.numSlidesFromZero) {
            self.currentSlide = 0;
        } else {
            self.currentSlide++;
        }
        self.$slideControls.find('li').eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).fadeIn(200);
    },

    jumpToSlide: function (slideIndex) {
        var self = this;
        self.slides.eq(self.currentSlide).hide();
        self.$slideControls.find('li').eq(self.currentSlide).removeClass('active');
        self.currentSlide = slideIndex;
        self.$slideControls.find('li').eq(self.currentSlide).addClass('active');
        self.slides.eq(self.currentSlide).show();
    }
};


/* ---------------------------------------------------------------------
Tabbed Navigation
Author: Jamie Birthler
------------------------------------------------------------------------ */
NERD.TabbedNav = {
    init: function () {

        $('#tab-box div:not(:first)').hide();

        $('#tab-nav li').click(function (e) {
            $('#tab-box div').hide();
            $('#tab-nav .active').removeClass("active");
            $(this).addClass('active');

            var clicked = $(this).find('a:first').attr('href');
            $('#tab-box ' + clicked).fadeIn('fast');
            e.preventDefault();
        }).eq(0).addClass('active');
    }
};

/* ---------------------------------------------------------------------
 
Author: Jamie Birthler
------------------------------------------------------------------------ */
NERD.Accordion = {

    init: function () {
        $('.accordion > .expand > ul').click(function (e) {
            e.stopPropagation();
        }).hide();

        $('.accordion > .expand').toggle(function () {
            $(this).addClass("open");
            $(this).find('.accordion-content').slideDown();
        }, function () {
            $(this).removeClass("open");
            $(this).find('.accordion-content').slideUp();
        });
    }
};

/* ---------------------------------------------------------------------
Author: Brett Hazen

Similar to accordion above, but using links as expansion items to
allow for checkboxes to be present
------------------------------------------------------------------------ */
NERD.OptionsAccordion = {
    init: function () {
        $('.optionsList > .expand > ul').click(function (e) {
            e.stopPropagation();
        }).hide();

        $('.optionsList > .expand > a.optionsList-head').toggle(function () {
            $(this).addClass("open");
            $(this).siblings('.optionsList-content:first').slideDown();
        }, function () {
            $(this).removeClass("open");
            $(this).siblings('.optionsList-content:first').slideUp();
        });
    }
};

/* ---------------------------------------------------------------------
FlickrFeed, YoutubeFeed, TwitterFeed
Author: Jamie Birthler

Builds a Flickr feed, YouTube feed, TwitterFeed
------------------------------------------------------------------------ */

NERD.FlickrFeed = {

    init: function () {

        var userID = $('input[type=hidden]', '#tab-flickr').val();
        if (!userID) {
            return false;
        }

        var returnNumFeed = $('#DisplayNumFeeds').val();
        if (!returnNumFeed) {
            return false;
        }

        var flickrBaseURL = 'http://api.flickr.com/services/feeds/photos_public.gne?id=' + userID + '&lang=en-us&format=json&jsoncallback=?';

        $.getJSON(flickrBaseURL, function (data) {

            $.each(data.items, function (i, item) {
                $('<img/>').attr('src', item.media.m).appendTo('#flickr-feed')
                .wrap('<li><a class="spawn-modal modalImage" href="' + item.media.m.replace("_m.", ".") + '"  id="' + item.media.m.replace("_m.", "_b.") + '"></a></li>');

                if (i === returnNumFeed - 1) { return false; }

            });


            $('a.spawn-modal').click(function () {
                if ($(this).filter('.modalImage').length > 0) {

                    var imgDiv = $("#img-viewer");
                    var imgURL = $(this).attr('id');
                    imgDiv.html("<img src='" + imgURL + "' height='385'/>");
                }
            });

        });




    }

};

NERD.YoutubeFeed = {

    init: function () {
        var userOrPlaylistID = $('input[type=hidden]', '#tab-youtube').val();
        var embedBaseUrl = 'http://www.youtube.com/embed/';
        if (!userOrPlaylistID) {
            return false;
        }


        var returnNumFeed = $('#DisplayNumFeeds').val();
        if (!returnNumFeed) {
            return false;
        }

        $.ajax({
            url: '/services/SocialMediaService.asmx/GetYouTubeFeed',
            type: 'POST',
            data: '{ userOrPlaylistID: "' + userOrPlaylistID + '", count: ' + returnNumFeed + '}',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                var html = "";
                $.each(data.d, function (index, item) {
                    var title = item.Title;
                    var videoID = item.VideoId;
                    var url = item.YouTubeUrl;
                    var thumb = item.ThumbnailUrl;

                    html += '<li><a  class="spawn-modal modalVideo" href="' + embedBaseUrl + videoID + '" id="' + videoID + '"><img src="' + (thumb) + '"/><h3>' + title + '</h3></a></li>';

                    if (index === returnNumFeed - 1) {
                        return false;
                    }
                });

                $('#youtube-feed').html(html);
            }

        });

    }

};

NERD.TwitterFeed = {

    appendTo: '#twitter-feed',

    init: function () {

        var userID = $('input[type=hidden]', '#tab-twitter').val();
        if (!userID) {
            return false;
        }

        var returnNumFeed = $('#DisplayNumFeeds').val();
        if (!returnNumFeed) {
            return false;
        }
        $.ajax({
            type: 'Post',
            url: '/services/SocialMediaService.asmx/GetTwitterStatuses',
            data: "{ screenName: '" + userID + "', count: " + 4 + "}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                var data = msg.d;
                var html = '<li class="tweet">TWEET_TEXT<div class="time">AGO</li>';

                // append tweets into page
                if (data.length < returnNumFeed) {
                    returnNumFeed = data.length;
                }
                for (var i = 0; i < returnNumFeed; i++) {
                    $(NERD.TwitterFeed.appendTo).append(
                        html.replace('TWEET_TEXT', data[i].Text)
                            .replace(/USER/g, data[i].User)
                            .replace('AGO', NERD.TwitterFeed.timeAgo(data[i].CreatedAt))
                            .replace(/ID/g, data[i].ID)
                    );
                }
            }

        });

    },

    timeAgo: function (dateString) {
        var rightNow = new Date();
        var then = new Date(dateString);

        if ($.browser.msie) {
            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
        }

        var diff = rightNow - then;

        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

        if (isNaN(diff) || diff < 0) {
            return "";
        }

        if (diff < second * 2) {
            return "right now";
        }

        if (diff < minute) {
            return Math.floor(diff / second) + " seconds ago";
        }

        if (diff < minute * 2) {
            return "about 1 minute ago";
        }

        if (diff < hour) {
            return Math.floor(diff / minute) + " minutes ago";
        }

        if (diff < hour * 2) {
            return "about 1 hour ago";
        }

        if (diff < day) {
            return Math.floor(diff / hour) + " hours ago";
        }

        if (diff > day && diff < day * 2) {
            return "yesterday";
        }

        if (diff < day * 365) {
            return Math.floor(diff / day) + " days ago";
        }

        else {
            return "over a year ago";
        }
    }, // timeAgo()

    /* Makes links function correctly */
    ify: {
        link: function (tweet) {
            return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function (link, m1, m2, m3, m4) {
                var http = m2.match(/w/) ? 'http://' : '';
                return '<a class="twtr-hyperlink"  href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
            });
        },

        at: function (tweet) {
            return tweet.replace(/\B[@ï¼ ]([a-zA-Z0-9_]{1,20})/g, function (m, username) {
                return '<a  class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
            });
        },

        list: function (tweet) {
            return tweet.replace(/\B[@ï¼ ]([a-zA-Z0-9_]{1,20}\/\w+)/g, function (m, userlist) {
                return '<a  class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
            });
        },

        hash: function (tweet) {
            return tweet.replace(/(^|\s+)#(\w+)/gi, function (m, before, hash) {
                return before + '<a  class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
            });
        },

        clean: function (tweet) {
            return this.hash(this.at(this.list(this.link(tweet))));
        }
    } // ify

};

/* ---------------------------------------------------------------------
Modals
Author: Dan P

Controls the markup construction, resizing, positioning,
spawning, loading of inline or ajax content, and events of modals
------------------------------------------------------------------------ */
NERD.Modals = {
    $overlay: undefined,
    $modal: undefined,
    $modalContent: undefined,
    $autoModal: undefined,
    href: undefined,

    init: function () {
        var self = this;
        var body = $('body');
        var $autoModal = $('.auto-spawn');

        self.$overlay = $('<div class="modal-overlay"></div>').prependTo(body);
        self.$modal = $('<div class="modal" aria-live="assertive"><a href="#" class="icon close">Close</a><div class="modal-content"></div></div>').prependTo(body);
        self.$modalContent = self.$modal.find('div.modal-content');

        if ($autoModal.length) {
            self.$autoModal = $autoModal;
            self.spawnAutoModal();
        }

        self.bind();
    },

    bind: function () {
        var self = this;
        /*
        $('body').delegate('a.spawn-modal:not(.modalVideo)', 'click',
            function (e) {
                self.href = $(this).attr('href');
                //e.preventDefault();
                //self.loadContent();
            }
        );
        */

        if ($(window).width() > 700) {

            $(document).on('click', '.modalVideo', function (e) {
                e.preventDefault();
                $.fancybox($(this).attr('href'), {
                    width: 640,
                    height: 385,
                    type: 'iframe',
                    centerOnScroll: true,
                    autoDimensions: false,
                    scrolling: 'no'
                });

            });

            $(document).on('click', '.modalPage', function (e) {
                e.preventDefault();
                $.fancybox($(this).attr('href'), {
                    width: 1500,
                    height: 700,
                    type: 'iframe',
                    centerOnScroll: true,
                    autoDimensions: false,
                    scrolling: 'no'
                });

            });

            $(document).on('click', '.modalImage', function (e) {
                e.preventDefault();
                $.fancybox($(this).attr('href'), {
                    type: 'image',
                    centerOnScroll: true,
                    autoDimensions: true,
                    scrolling: 'no',
                    titleShow: false
                });

            });


        }

        self.$modal.delegate('a.close', 'click',
            function (e) {
                self.closeModal();
                e.preventDefault();
            }
        );
    },

    spawnAutoModal: function () {
        var self = this;

        self.href = "#" + self.$autoModal.attr('id');
        self.loadContent();
    },

    loadContent: function () {
        var self = this;

        if (self.href.charAt(0) !== '#') {
            self.loadAjaxContent();
        } else {
            self.loadInlineContent();
        }
    },

    loadAjaxContent: function () {
        var self = this;
        $.ajax({
            url: self.href + "?format=html",
            dataType: 'html',
            success: function (data) {
                self.$modalContent.html(data);
                self.href = self.$modalContent.children().eq(0).attr('id');
                self.cleanUrls();
                self.spawnModal();
            }
        });
    },

    cleanUrls: function () {
        var self = this;
        var $anchors = self.$modalContent.find('a');

        $anchors.each(
            function () {
                var $this = $(this);
                $this.attr('href', decodeURI($this.attr('href')));
            }
        );
    },

    loadInlineContent: function () {
        var self = this;

        //Jamie or Tick can refactor this
        var startIndex = self.href.indexOf("#");
        self.href = self.href.substr(startIndex);

        var content = $(self.href).clone(true, true).removeClass('hidden').removeClass('inline-modal');

        self.$modalContent.html('').prepend(content);

        self.cleanUrls();
        self.spawnModal();
    },

    spawnModal: function () {
        var self = this;

        if (!self.href) {
            self.href = 'unnamed-modal';
        }

        self.href = self.href.replace('#', '');

        self.$modal.attr('id', 'modal-id-' + self.href);
        self.positionModal();

        self.$overlay.fadeTo(400, .3);
        self.$modal.fadeIn(400);
    },

    positionModal: function () {
        var self = this;
        var measurement = self.measureModal();
        var leftOffset = Math.round(measurement.w / 2);
        var topOffset = Math.round(measurement.h / 2);

        self.$modal.css({
            'margin-left': -leftOffset,
            'margin-top': -topOffset,
            'position': 'fixed'
        });

        // If modal is positioned off screen, switch mositioning
        if (measurement.t - topOffset < 0) {
            self.$modal.css('margin-top', 'auto');
            self.$modal.addClass('modal-scroll');
        }

    },

    measureModal: function () {
        var self = this;
        var measurement = {};

        self.$modal.css({
            'left-margin': -99999,
            'display': 'block'
        });

        measurement.w = self.$modal.outerWidth();
        measurement.h = self.$modal.outerHeight();
        measurement.t = self.$modal.position().top;

        self.$modal.attr('style', '');

        return measurement;
    },

    closeModal: function () {
        var self = this;

        self.$overlay.fadeOut(400);

        self.$modal.fadeOut(400,
            function () {

                $('body').trigger('modal-closed', [self.$modal.attr('id').replace('modal-id-', ''), self.$modalContent.clone()]);
                self.$modal.attr('id', '');
                self.$modalContent.html('');
                self.$modal.removeClass('modal-scroll');
            }
        );
    }
};

/* ---------------------------------------------------------------------
YouTube Chromeless Player
Author: Jamie Birthler

Custom player skin using the YouTube Chromeless Player API
------------------------------------------------------------------------ */
NERD.ytPlayer = {

    init: function () {
        ytPlayer.loadPlayer();

        $('a.spawn-modal').click(function () {
            ytPlayer.loadPlayer();
        });

    },

    loadPlayer: function () {
        if (swfobject.hasFlashPlayerVersion("8.0.0")) {
            var params = { allowScriptAccess: "always" };
            var atts = { id: "ytPlayer" };
            swfobject.embedSWF("http://www.youtube.com/apiplayer?" + "&enablejsapi=1&playerapiid=player1", "videoDiv", "640", "385", "8", null, null, params, atts);

            ytPlayer.addControls();
        } else {
            alert('no flash, using html5 player if possible');
            var videoDiv = document.getElementById('videoDiv');
            videoDiv.innerHTML = '<object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/YJp7tqRyJAI?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/YJp7tqRyJAI?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object>';
        }
    },

    // Player Controls
    updateHTML: function (elmId, value) {
        document.getElementById(elmId).innerHTML = value;
    },

    onPlayerError: function (errorCode) {
        alert("An error occured of type:" + errorCode);
    },

    onPlayerStateChange: function (newState) {
        ytPlayer.updateHTML("playerState", newState);
    },

    updatePlayerInfo: function () {
        if (ytplayer && ytplayer.getDuration) {
            ytPlayer.updateHTML("duration", splitTime(ytplayer.getDuration()));
            ytPlayer.updateHTML("current-time", splitTime(ytplayer.getCurrentTime()));
            if (ytplayer.getPlayerState() === 1) {
                ytPlayer.playVideo();
            } else if (ytplayer.getPlayerState() === 0) {
                ytPlayer.pauseVideo();
            }

            if (ytplayer.getVideoBytesLoaded() > -1) {
                var loadedAmount = (ytplayer.getVideoBytesLoaded() / ytplayer.getVideoBytesTotal()) * 100;
                $loaded.css('width', loadedAmount + '%');
            }

            if (ytplayer.getCurrentTime() > 0) {
                var videoPosition = (ytplayer.getCurrentTime() / ytplayer.getDuration()) * 100;
                $indicator.css('left', videoPosition + '%');
            }
        }
    },

    togglePlay: function () {
        if ($play.hasClass('playing')) {
            ytPlayer.pauseVideo();
        } else {
            ytPlayer.playVideo();
        }
        return false;
    },

    playVideo: function () {
        if (ytplayer) {
            ytplayer.playVideo();
            $play.removeClass('paused').addClass('playing').attr('title', 'Pause');
        }
    },

    pauseVideo: function () {
        if (ytplayer) {
            ytplayer.pauseVideo();
            $play.removeClass('playing').addClass('paused').attr('title', 'Play');
        }
    },

    toggleMute: function () {
        if ($mute.hasClass('muted')) {
            ytPlayer.unMuteVideo();
        } else {
            ytPlayer.muteVideo();
        }
        return false;
    },

    muteVideo: function () {
        if (ytplayer) {
            ytplayer.mute();
            $mute.addClass('muted').attr('title', 'Un-Mute');
        }
    },

    unMuteVideo: function () {
        if (ytplayer) {
            ytplayer.unMute();
            $mute.removeClass('muted').attr('title', 'Mute');
        }
    },

    seek: function (seekPosition) {
        var seekToPosition = Math.round(player.getDuration() * seekPosition);
        ytplayer.seekTo(seekToPosition, false);
    },

    getCurrentTime: function () {
        if (ytplayer) {
            return ytplayer.getCurrentTime();
        }
    },

    getDuration: function () {
        if (ytplayer) {
            return ytplayer.getDuration();
        }
    },

    splitTime: function (a) {
        var tm = new Date(a * 1000);
        var hours = Math.round(tm.getUTCHours());
        var minutes = Math.round(tm.getUTCMinutes());
        var seconds = Math.round(tm.getUTCSeconds());

        if (hours > 0) {
            timeStr = "" + hours;
            timeStr += ((minutes < 10) ? ":0" : ":") + minutes;
            timeStr += ((seconds < 10) ? ":0" : ":") + seconds;
        } else {
            timeStr = "";
            timeStr = ((minutes < 10) ? "0" : ":") + minutes;
            timeStr += ((seconds < 10) ? ":0" : ":") + seconds;
        }

        return timeStr;
    },

    addControls: function () {
        $play = $('<a/>', {
            href: '#',
            'class': 'play-pause',
            text: 'Play/Pause',
            title: 'Play',
            click: function () {
                ytPlayer.togglePlay();
                return false;
            }
        }).appendTo('.video-controls');

        $mute = $('<a/>', {
            href: '#',
            'class': 'volume',
            text: 'Volume',
            title: 'Mute',
            click: function () {
                ytPlayer.toggleMute();
                return false;
            }
        }).appendTo('.video-controls');

        $currentTime = $('<span id="current-time"></span>').appendTo('.video-controls');

        $seek = $('<div/>', {
            'class': 'status',
            click: function (e) {
                var skipTo = e.pageX - $seek.offset().left,
	                     statusWidth = $seek.width();
                $video.seek(skipTo / statusWidth);
            }
        }).appendTo('.video-controls');

        $bar = $('<div class="bar"></div>').appendTo($seek);
        $loaded = $('<div class="loaded"></div>').appendTo($bar);
        $indicator = $('<span class="indicator"></span>').appendTo($bar);

        $duration = $('<span id="duration"></span>').appendTo('.video-controls');
    },

    onYouTubePlayerReady: function (playerId) {
        ytplayer = document.getElementById("ytPlayer");
        setInterval(ytplayer.updatePlayerInfo, 250);
        ytplayer.updatePlayerInfo();
        ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
        ytplayer.addEventListener("onError", "onPlayerError");
        //Load an initial video into the player
        ytplayer.cueVideoById("YJp7tqRyJAI");
    }

};

/* ---------------------------------------------------------------------
SimpleToggleHide
Author: Matt Duffin

Hides a section of html on page load, with open/close toggle functionality controlled by the assigned class.
------------------------------------------------------------------------ */
NERD.SimpleToggleHide = {
    init: function () {
        var container = $('.js-toggle-hide');
        var button = $('.js-toggle-hide-btn');

        container.hide();

        button.toggle(function () {
            button.html("Hide Advanced Search");
            container.slideDown();
        }, function () {
            button.html("Advanced Search");
            container.slideUp();
        });

    }

};

/* ---------------------------------------------------------------------
FlicrkSetModal
Author: Brett Hazen

Uses a Flicrk set ID set in the back end to display a slideshow in a modal
------------------------------------------------------------------------ */
NERD.FlickrSetModal = {
    init: function () {

        var modalHeight = '675';
        var modalWidth = $(window).width() > 700 ? '675' : '310';

        $modalWrappers = $('.flickr-modal-wrapper');
        $modalWrappers.css({ 'display': '' });
        //$('.jThumbnailScroller.tS2').css({ 'width': modalWidth }); // This required so that the thumbnail scroll display properly.

        $('.flickr-info').each(function (index, item) {
            var newLink = '<a href="#' + $(this).attr('FlickrSetID') + '" class="go-to flickr-set">' + $('#viewMorePhotos').val() + '</a>';
            var $moreLinkDivs = $(item).parent().siblings('.additionalLinks');
            if ($moreLinkDivs.length === 0) {
                $(item).append(newLink);
            } else {
                $($moreLinkDivs[0]).append(newLink);
            }

            var $modal = $('#tS2_' + $(this).attr('FlickrSetID'));
            if ($modal) {
                $modal.find('img').css({ 'width': '100px' }); // This required so that the thumbnail scroll display properly. It sets a width to the image even if it has not loaded from flickr yet.
                $modal.attr('data-scrolling', 'true');
                $modal.thumbnailScroller({
                    scrollerType: "clickButtons",
                    scrollerOrientation: "horizontal",
                    scrollSpeed: 2,
                    scrollEasing: "easeOutCirc",
                    scrollEasingAmount: 600,
                    scrollSpeed: 800,
                    noScrollCenterSpace: 10,
                    autoScrolling: 0,
                    autoScrollingSpeed: 2000,
                    autoScrollingEasing: "easeInOutQuad",
                    autoScrollingDelay: 500
                });
                $modal.find('img').css({ 'width': '' }); // Remove the width so that thumbnail are not distorted. This was only here for the thumbnailScroller.
            }
        });

        $modalWrappers.css('display', 'none');

        var flickrModals = $('a.flickr-set');

        if (flickrModals.length > 0) {
            $('a.flickr-set').click(function (e) {

                e.preventDefault();
                $('#currentSetID').val($(this).parent().attr('flickrSetID'));

                if ($(window).width() <= 700) {
                    if ($('#photoPagePath').val() == '') {
                        $('.flickr-modal-wrapper').hide();
                        $($(this).attr('href')).parent().fadeIn();//.scrollTop();
                        window.scrollTo(0, 0);
                    } else {
                        window.location = $('#photoPagePath').val() + '?setid=' + $(this).parent().attr('flickrSetID');
                    }

                }

            });

            if ($(window).width() > 700) {
                $('a.flickr-set').fancybox({
                    'autoDimensions': false,
                    'padding': 0,
                    'margin': 0,
                    'scrolling': 'no',
                    'titleShow': false,
                    'type': 'inline',
                    'height': modalHeight + 'px',
                    'width': modalWidth + 'px',
                    'centerOnScroll': true
                });

            }

            $('#FlickrImage').click(function () {
                $('a.flickr-set').trigger('click');
            });
        }
    }
};
/* ---------------------------------------------------------------------
JBox Offset
Author: Jamie Birthler


------------------------------------------------------------------------ */
NERD.Jbox = {
    init: function () {
        var jbox = $("#jbox");
        var interiorNav = $("#interior-nav");

        if (!interiorNav.offset() || !jbox.offset()) return;

        var navHeight = interiorNav.offset().top + interiorNav.height();
        var jboxTop = jbox.offset().top;

        if (jboxTop > navHeight) {
            $(jbox).toggleClass("jbox-offset");
        }
    }
};
