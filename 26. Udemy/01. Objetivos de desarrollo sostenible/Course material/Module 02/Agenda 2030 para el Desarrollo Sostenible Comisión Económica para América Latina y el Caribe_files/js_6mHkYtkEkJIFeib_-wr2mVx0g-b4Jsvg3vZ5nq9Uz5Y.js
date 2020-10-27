(function($){var setClasses=function(widthImg){if(widthImg<=400&&widthImg>150){$(".node-type-cepal-presentation .field--type-image img").addClass("image-old");$(".node-type-cepal-speech .field--type-image img").addClass("image-old");$(".node-type-cepal-article .field--type-image img").addClass("image-old");$(".node-type-cepal-pr .field--type-image img").addClass("image-old");$(".node-type-cepal-news .field--type-image img").addClass("image-old");$(".node-type-cepal-note .field--type-image img").addClass("image-old");
$(".field--type-image .required-fields, .node-type-cepal-presentation .field--type-image .required-fields, .node-type-cepal-pr .field--type-image .required-fields, .node-type-cepal-news .field--type-image .required-fields, .node-type-cepal-graphic-info .field--type-image .required-fields, .node-type-cepal-note .field--type-image .required-fields").addClass("image-old");$(".field--name-field-file-image-title-text field--type-text").addClass("image-old");$(".panel-pane pane-entity-field.pane-node-field-pr-image").addClass("image-old");
$(".panel-pane.pane-entity-field.pane-node-field-article-image").addClass("image-old");$(".panel-pane.pane-entity-field.pane-node-field-news-image").addClass("image-old");$(".panel-pane.pane-entity-field.pane-node-field-speech-image").addClass("image-old");$(".panel-pane.pane-entity-field.pane-node-field-note-image").addClass("image-old")}else if(widthImg<=150)$(".node-type-cepal-article .field--type-image img, .node-type-cepal-presentation .field--type-image img, .node-type-cepal-pr .field--type-image img, .node-type-cepal-news .field--type-image img, .field--type-image .required-fields, .node-type-cepal-note .field--type-image img").addClass("hidden");
else $(".node-type-cepal-article .field--type-image img, .node-type-cepal-presentation .field--type-image img, .node-type-cepal-pr .field--type-image img, .node-type-cepal-news .field--type-image img, .node-type-cepal-note .field--type-image img").addClass("image-new")};var cepalInit=function(context){var widthImg=$(".page-node .field--type-image img").eq(0).width();setClasses(widthImg);$(".node-type-cepal-nle .pane-node-field-body").readmore({speed:50,lessLink:Drupal.t('<a href="#" class="button--default button__readmore">Read less</a>'),
moreLink:Drupal.t('<a href="#" class="button--default button__readmore">Read more</a>'),collapsedHeight:200,embedCSS:false});$(".button--default").click(function(event){});if(window.innerWidth>768)$(".block--system-main-menu ul.menu li a").first().html('<i class="fa fa-home fa-lg"></i>');if(window.innerWidth>1024){$(".block--system-main-menu ul.menu li a").first().html('<i class="fa fa-home fa-lg"></i>');$(".block--system-main-menu ul.menu li.expanded").hover(function(){$(".block--system-main-menu ul.menu li.expanded ul.menu").show();
$(".fa.fa-chevron-down.fa-lg").addClass("active");$("li.expanded a").first().addClass("active");$(this).addClass("active")},function(){$(".block--system-main-menu ul.menu li.expanded ul.menu").hide();$(".fa.fa-chevron-down.fa-lg").removeClass("active");$(this).removeClass("active");$("li.expanded a").first().removeClass("active");$(".page-work-areas li.expanded a").first().addClass("active")})}else $(".fa.fa-chevron-down.fa-lg").click(function(event){$(".block--system-main-menu ul.menu li.expanded ul.menu").toggle();
$(".fa.fa-chevron-down.fa-lg").toggleClass("active")});$(".i18n-en #edit-search-term").attr("placeholder","Search");$(".i18n-es #edit-search-term").attr("placeholder","Buscar");$(".i18n-pt-br #edit-search-term").attr("placeholder","Buscar");$(".i18n-en.section-press #edit-search-fulltext, .i18n-en.section-press-section #edit-search-fulltext, .i18n-en.node-type-cepal-press-bulletin #edit-search-fulltext").attr("placeholder","Search news...");$(".i18n-es.section-press #edit-search-fulltext, .i18n-es.section-press-section #edit-search-fulltext, .i18n-es.node-type-cepal-press-bulletin #edit-search-fulltext").attr("placeholder",
"Busque noticias...");$(".i18n-pt-br.page-press #edit-search-fulltext, .i18n-pt-br.section-press-section #edit-search-fulltext, .i18n-pt-br.node-type-cepal-press-bulletin #edit-search-fulltext").attr("placeholder","Busque not\u00edcias...");$(".i18n-en.section-publications #edit-search-fulltext").attr("placeholder","Search publications...");$(".i18n-es.section-publicaciones #edit-search-fulltext").attr("placeholder","Busque publicaciones...");$(".i18n-pt-br.page-publications #edit-search-fulltext").attr("placeholder",
"Busque publica\u00e7\u00f5es...");$(".i18n-en.section-cooperation #edit-search-fulltext").attr("placeholder","Search projects...");$(".i18n-es.section-cooperation #edit-search-fulltext").attr("placeholder","Busque proyectos...");$(".i18n-pt-br.page-cooperation #edit-search-fulltext").attr("placeholder","Busque proyetos...");$(".i18n-en.section-training #edit-search-api-views-fulltext").attr("placeholder","Search courses...");$(".i18n-es.section-capacitacion #edit-search-api-views-fulltext").attr("placeholder",
"Busque cursos...");$(".i18n-pt-br.page-training #edit-search-api-views-fulltext").attr("placeholder","Busque cursos...");$(".block-flickr-view-more").appendTo(".flickr-photoset");$(".pane-cepal-block-basic-block-link-flickr-view-more").hide();$(".pane-cepal-block-basic-block-language-available .active").contents().unwrap();$(".events-courses-title span.events a").click(function(event){$(".pane-home-contents-events").show();$(".pane-courses-courses-pane").hide();$(this).addClass("active");$(".events-courses-title span.courses a").removeClass("active")});
$(".events-courses-title span.courses a").click(function(event){$(".pane-home-contents-events").hide();$(".pane-courses-courses-pane").show();$(this).addClass("active");$(".events-courses-title span.events a").removeClass("active")});$(".section-press-section .pane-cepal-section-flickr a").attr("target","_blank");$(".facetapi-active").html('<i class="fa fa-times-circle"></i>');$(".nav-mobile").click(function(event){var alto=$(document).height();$(".l-region--navigation").toggle();$(".nav-mobile .fa").toggleClass("fa-bars");
$(".nav-mobile .fa").toggleClass("fa-times");$(".page-work-areas .block--system-main-menu ul.menu li.expanded").toggleClass("active");$(".l-region--navigation").css("height",alto+"px")});$(".mobile-block-facets-order, .mobile-block-facets-search").click(function(event){$(".pane-facetapi-language, .pane-facetapi-date, .pane-facetapi-type, .pane-facetapi-workarea, .pane-facetapi-topics, .pane-facetapi-country-region, .pane-facetapi-participation, .pane-facetapi-hq-offices, .pane-facetapi-course-scope, .pane-facetapi-course-method, .pane-facetapi-course-status").hide()});
var count=$(".pane-node-field-publication-files").children("div.pane-content").length;if(count>5)$(".pane-node-field-publication-files").append('<div class="show-more-publication-attachments"><i class="fa fa-plus-circle vivid-orange"></i><p class="vivid-orange"><b><a id="publication-more-files" href="#">Show fewer</a></b></p></div>');$(".mobile-block-facets-order").click(function(event){$(".mobile-block-facets-search, .mobile-block-facets-filter").removeClass("active");$(".mobile-block-facets-order").addClass("active");
$(".form-item-search-fulltext").hide();$(".views-widget-sort-by").show();if($(".mobile-block-facets-search").hasClass("active"))$(".panel-pane.pane-views-exposed").show();if($(".panel-pane.pane-views-exposed").css("display")=="block")if($(".form-item-search-fulltext").css("display")=="none"){$(".panel-pane.pane-views-exposed").hide();$(".mobile-block-facets-order").removeClass("active")}else $(".panel-pane.pane-views-exposed").show();else $(".panel-pane.pane-views-exposed").show()});$(".mobile-block-facets-search").click(function(event){$(".mobile-block-facets-order, .mobile-block-facets-filter").removeClass("active");
$(".mobile-block-facets-search").addClass("active");$(".form-item-search-fulltext").show();$(".views-widget-sort-by").hide();if($(".mobile-block-facets-order").hasClass("active"))$(".panel-pane.pane-views-exposed").show();if($(".panel-pane.pane-views-exposed").css("display")=="block")if($(".views-widget-sort-by").css("display")=="none"){$(".panel-pane.pane-views-exposed").hide();$(".mobile-block-facets-search").removeClass("active")}else $(".panel-pane.pane-views-exposed").show();else $(".panel-pane.pane-views-exposed").show()});
$(".mobile-block-facets-filter").click(function(event){$(".mobile-block-facets-search, .mobile-block-facets-order").removeClass("active");$(".mobile-block-facets-filter").addClass("active");$(".panel-pane.pane-views-exposed").hide();$(".pane-facetapi-language, .pane-facetapi-date, .pane-facetapi-type, .pane-facetapi-workarea, .pane-facetapi-topics, .pane-facetapi-country-region, .pane-facetapi-participation, .pane-facetapi-hq-offices, .pane-facetapi-course-scope, .pane-facetapi-course-method, .pane-facetapi-course-status").toggle();
if($(".pane-facetapi-language").css("display")=="none")$(".mobile-block-facets-filter").removeClass("active")});$(".pane-menu-pages ul.menu li span.nolink").click(function(event){$(this).parent().children("ul.menu").toggle();$(this).children(".menu span.nolink").toggleClass("open");$(this).children("span").children("i").toggleClass("fa-rotate-90")});$(".pane-menu-pages li").children(".menu").hide();$(".pane-menu-pages li.active").parent(".menu").show();$(".equalheight article").equalHeights();$(".page-work-areas .work-area h3").equalHeights();
$(".pane-libraries-libraries-list-pane article.taxonomy-term--library").equalHeights();$(".view-id-landing_regional_office_work_area.view-display-id-list_national_office .item-list ul li").equalHeights();$(".node-type-cepal-project .pane-node-field-project-files .pane-content").equalHeights();$(".section-press-section .pane-node-field-section-infographic-trans, .section-press-section .pane-node-field-section-video-translated").equalHeights();var allPanels=$(".accordion .pane-content").hide();allPanels.slideUp();
allPanels.first().slideDown();$(".accordion h2.pane-title").append('<i class="fa fa-caret-down"></i>');$(".accordion h2.pane-title").click(function(){$(this).parent().children(".pane-content").slideToggle();return false});linkCount=$(".node-type-cepal-page .pane-node-field-body h2 a").length;if($("body").hasClass("node-type-cepal-page")&&linkCount>0){$(".node-type-cepal-page .pane-node-field-body h2").attr("class","menu-link");titleWrapperText=Drupal.t("Contents");titleWrapper='<h2 class="section-title-alternative">'+
titleWrapperText+"</h2>";linksAcordeon=$(".node-type-cepal-page .pane-node-field-body h2");$(linksAcordeon).clone().appendTo(".moscone-flipped-sidebar .moscone-flipped-sidebar-inner");$(".moscone-flipped-sidebar .moscone-flipped-sidebar-inner h2.menu-link").wrapAll('<div class="wrapper-sticky-index"></div>');$(".wrapper-sticky-index").sticky({topSpacing:50,bottomSpacing:800});$(".l-footer").unstick();$(".wrapper-sticky-index").prepend(titleWrapper)}};Drupal.behaviors.cepalExampleBehavior={attach:function(context,
settings){cepalInit(context);$("#block-cepal-block-basic-mobile-menu h2").click(function(event){$("#block-cepal-block-basic-mobile-menu .block__content").toggle("fast")});$("#block-system-main-menu li.expanded").hover(function(){$("#block-system-main-menu li.expanded ul").addClass("open")},function(){$("#block-system-main-menu li.expanded ul").removeClass("open")})}}})(jQuery);;
(function($){Drupal.behaviors.cepalCustomBehavior={attach:function(context,settings){$("#bio-more",context).once("cepal-custom",function(){var toggleOpen=true;$(this).click(function(event){var viewLess,viewMore,text;viewLess=Drupal.t("View less");viewMore=Drupal.t("View more");$(".node-type-cepal-person .views-field-field-person-biography p:lt(2)").toggle();$(".node-type-cepal-person .views-field-field-person-biography p").toggle();if(toggleOpen)text=viewMore;else text=viewLess;$("#bio-more").html(text);
toggleOpen=!toggleOpen});$(this).trigger("click");toggleOpen=false});$(".show-more-publication-attachments",context).once("cepal-custom",function(){var toggleOpen=true;$(this).click(function(event){var viewLess,viewMore,text;viewLess=Drupal.t("Show fewer");viewMore=Drupal.t("Show more");$(".pane-node-field-publication-files div.pane-content:gt(4)").toggle();if(toggleOpen)text=viewMore;else text=viewLess;$("#publication-more-files").html(text);toggleOpen=!toggleOpen});$(this).trigger("click");toggleOpen=
false})}}})(jQuery);;
/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);;
// Sticky Plugin v1.0.2 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 16/04/2015
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            var newWidth;
            if ( s.getWidthFrom ) {
                newWidth = $(s.getWidthFrom).width() || null;
            }
            else if(s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if ( newWidth == null ) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        var newWidth = null;
        if ( s.getWidthFrom ) {
            if ( s.responsiveWidth === true ) {
                newWidth = $(s.getWidthFrom).width();
            }
        }
        else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if ( newWidth != null ) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var stickyHeight = stickyElement.outerHeight();
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          stickyWrapper.css('height', stickyHeight);

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while ( i-- > 0 )
          {
            if (sticked[i].stickyElement.get(0) === that)
            {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
;
/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(t,e,i){var o;return function(){var n=this,a=arguments,s=function(){o=null,i||t.apply(n,a)},r=i&&!o;clearTimeout(o),o=setTimeout(s,e),r&&t.apply(n,a)}}function i(t){var e=++h;return String(null==t?"rmjs-":t)+e}function o(t){var e=t.clone().css({height:"auto",width:t.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(t),i=e.outerHeight(),o=parseInt(e.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=t.data("defaultHeight");e.remove();var a=o||t.data("collapsedHeight")||n;t.data({expandedHeight:i,maxHeight:o,collapsedHeight:a}).css({maxHeight:"none"})}function n(t){if(!d[t.selector]){var e=" ";t.embedCSS&&""!==t.blockCSS&&(e+=t.selector+" + [data-readmore-toggle], "+t.selector+"[data-readmore]{"+t.blockCSS+"}"),e+=t.selector+"[data-readmore]{transition: height "+t.speed+"ms;overflow: hidden;}",function(t,e){var i=t.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),t.getElementsByTagName("head")[0].appendChild(i)}(document,e),d[t.selector]=!0}}function a(e,i){this.element=e,this.options=t.extend({},r,i),n(this.options),this._defaults=r,this._name=s,this.init(),window.addEventListener?(window.addEventListener("load",c),window.addEventListener("resize",c)):(window.attachEvent("load",c),window.attachEvent("resize",c))}var s="readmore",r={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,blockProcessed:function(){},beforeToggle:function(){},afterToggle:function(){}},d={},h=0,c=e(function(){t("[data-readmore]").each(function(){var e=t(this),i="true"===e.attr("aria-expanded");o(e),e.css({height:e.data(i?"expandedHeight":"collapsedHeight")})})},100);a.prototype={init:function(){var e=t(this.element);e.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),o(e);var n=e.data("collapsedHeight"),a=e.data("heightMargin");if(e.outerHeight(!0)<=n+a)return this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(e,!1),!0;var s=e.attr("id")||i(),r=this.options.startOpen?this.options.lessLink:this.options.moreLink;e.attr({"data-readmore":"","aria-expanded":this.options.startOpen,id:s}),e.after(t(r).on("click",function(t){return function(i){t.toggle(this,e[0],i)}}(this)).attr({"data-readmore-toggle":s,"aria-controls":s})),this.options.startOpen||e.css({height:n}),this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(e,!0)},toggle:function(e,i,o){o&&o.preventDefault(),e||(e=t('[aria-controls="'+this.element.id+'"]')[0]),i||(i=this.element);var n=t(i),a="",s="",r=!1,d=n.data("collapsedHeight");n.height()<=d?(a=n.data("expandedHeight")+"px",s="lessLink",r=!0):(a=d,s="moreLink"),this.options.beforeToggle&&"function"==typeof this.options.beforeToggle&&this.options.beforeToggle(e,n,!r),n.css({height:a}),n.on("transitionend",function(i){return function(){i.options.afterToggle&&"function"==typeof i.options.afterToggle&&i.options.afterToggle(e,n,r),t(this).attr({"aria-expanded":r}).off("transitionend")}}(this)),t(e).replaceWith(t(this.options[s]).on("click",function(t){return function(e){t.toggle(this,i,e)}}(this)).attr({"data-readmore-toggle":n.attr("id"),"aria-controls":n.attr("id")}))},destroy:function(){t(this.element).each(function(){var e=t(this);e.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),e.removeData()})}},t.fn.readmore=function(e){var i=arguments,o=this.selector;return e=e||{},"object"==typeof e?this.each(function(){if(t.data(this,"plugin_"+s)){var i=t.data(this,"plugin_"+s);i.destroy.apply(i)}e.selector=o,t.data(this,"plugin_"+s,new a(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var o=t.data(this,"plugin_"+s);o instanceof a&&"function"==typeof o[e]&&o[e].apply(o,Array.prototype.slice.call(i,1))}):void 0}});;
;
