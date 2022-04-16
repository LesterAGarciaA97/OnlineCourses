(function(e,c,a){var d="scrollBox",f={containerClass:"sb-container",containerNoScrollClass:"sb-container-noscroll",contentClass:"sb-content",scrollbarContainerClass:"sb-scrollbar-container",scrollBarClass:"sb-scrollbar"};
function b(h,g){this.element=h;
this.settings=e.extend({},f,g);
this._defaults=f;
this._name=d;
this.init()
}e.extend(b.prototype,{init:function(){this.addScrollbar();
this.addEvents();
this.onResize()
},addScrollbar:function(){e(this.element).addClass(this.settings.containerClass);
this.wrapper=e("<div class='"+this.settings.contentClass+"' />");
this.wrapper.append(e(this.element).contents());
e(this.element).append(this.wrapper);
this.scollbarContainer=e("<div class='"+this.settings.scrollbarContainerClass+"' />");
this.scrollBar=e("<div class='"+this.settings.scrollBarClass+"' />");
this.scollbarContainer.append(this.scrollBar);
e(this.element).prepend(this.scollbarContainer)
},addEvents:function(){this.wrapper.on("scroll."+d,e.proxy(this.onScroll,this));
e(c).on("resize."+d,e.proxy(this.onResize,this));
this.scrollBar.on("mousedown."+d,e.proxy(this.onMousedown,this));
this.scrollBar.on("touchstart."+d,e.proxy(this.onTouchstart,this))
},onTouchstart:function(h){var g=this;
h.preventDefault();
var j=g.scrollBar[0].offsetTop;
var i=function(k){var l=k.touches[0].pageY-h.touches[0].pageY;
g.scrollBar[0].style.top=Math.min(g.scollbarContainer[0].clientHeight-g.scrollBar[0].clientHeight,Math.max(0,j+l))+"px";
g.wrapper[0].scrollTop=(g.wrapper[0].scrollHeight*g.scrollBar[0].offsetTop/g.scollbarContainer[0].clientHeight)
};
e(a).on("touchmove."+d,i);
e(a).on("touchend."+d,function(){e(a).off("touchmove."+d);
e(a).off("touchend."+d)
})
},onMousedown:function(h){var g=this;
h.preventDefault();
var j=g.scrollBar[0].offsetTop;
var i=function(k){var l=k.pageY-h.pageY;
g.scrollBar[0].style.top=Math.min(g.scollbarContainer[0].clientHeight-g.scrollBar[0].clientHeight,Math.max(0,j+l))+"px";
g.wrapper[0].scrollTop=(g.wrapper[0].scrollHeight*g.scrollBar[0].offsetTop/g.scollbarContainer[0].clientHeight)
};
e(a).on("mousemove."+d,i);
e(a).on("mouseup."+d,function(){e(a).off("mousemove."+d);
e(a).off("mouseup."+d)
})
},onResize:function(){this.wrapper.css("max-height",e(this.element).height());
var g=this.wrapper[0].clientHeight;
this.scrollBar.css("height",this.scollbarContainer[0].clientHeight*g/this.wrapper[0].scrollHeight+"px");
if(this.scollbarContainer[0].clientHeight<=this.scrollBar[0].clientHeight){e(this.element).addClass(this.settings.containerNoScrollClass)
}else{e(this.element).removeClass(this.settings.containerNoScrollClass)
}this.onScroll()
},onScroll:function(){this.scrollBar.css("top",Math.min(this.scollbarContainer[0].clientHeight-this.scrollBar[0].clientHeight,this.scollbarContainer[0].clientHeight*this.wrapper[0].scrollTop/this.wrapper[0].scrollHeight)+"px")
}});
e.fn[d]=function(g){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,g))
}})
}
})(jQuery,window,document);
$(document).ready(function(){$(".hdr-search a").click(function(){$(".hdr-search input").toggleClass("input-hidden");
if($(window).width()<480){if(!$(".hdr-search input").hasClass("input-hidden")){$(".hdr-top-logo").hide()
}else{$(".hdr-top-logo").show()
}}});
$(".hdr-login").click(function(){$(".hdr-login-box").toggleClass("slide-down");
$(".hdr-login").find(".fa").toggleClass("rotate")
});
$(window).scroll(function(){if($(this).scrollTop()>40){$(".header-group").addClass("fixed-header");
$(".hdr-login-box").removeClass("slide-down");
$(".hdr-login .fa").removeClass("rotate");
if(typeof $(".hdr-mobile-group-toggle").attr("aria-expanded")!=="undefined"){if(!$(".hdr-mobile-group-toggle").hasClass("collapsed")){$(".hdr-mobile-group-toggle").trigger("click")
}}}else{$(".header-group").removeClass("fixed-header")
}});
$("body").click(function(a){if(a.target){if(a.target.className=="hdr-login"||$(a.target).closest(".hdr-login").length){return
}$(".hdr-login-box").removeClass("slide-down");
$(".hdr-login .fa").removeClass("rotate")
}})
});
function initTopNav(){$(".myContainer").scrollBox();
if($(window).width()>1024){desktopNavigationTrigger();
calcNavbarwidth()
}else{if($(window).width()>800&&$(window).width()<1025){tabletNavigationTrigger()
}else{mobileNavigationTrigger()
}}$(".tr-nav-promo-image .btn-nav").each(function(){$(this).text()==""?$(this).hide():""
})
}$(document).ready(function(){if($("#pagePathHeader").val()!=undefined){var c=$("#pagePathHeader").val()!=undefined?$("#pagePathHeader").val():"/content/vmware/vmware-published-sites/us.html";
var h="";
var a="";
var e="";
var d="";
var c=c;
var g=c+"/config-pages/global-components-redesign";
var b=c.substring(c.lastIndexOf("/")+1);
if(b.toLowerCase().indexOf(".html")>=0){b=b.replace(/.html/g,"")
}jQuery.ajax({url:"/bin/vmware/megamenu/sidenav."+b+".html",type:"GET",cache:true,async:false,success:function(i){h=i;
f(i,"placeHolderDiv")
},failure:function(i){console.log("Not Saved")
}});
function f(k,j){var i=document.getElementById(j);
if(i){i.innerHTML=k;
initTopNav()
}}}});
$(window).resize(function(){if($(window).width()>1024){desktopNavigationTrigger();
$(".tn-panel").removeAttr("style");
calcNavbarwidth()
}else{if($(window).width()>800&&$(window).width()<1025){tabletNavigationTrigger();
if($(".NavShow").length){$(".tn-links > .navbar-toggle").trigger("click");
$("#topNav").removeClass("in")
}$(".tn-panel").removeAttr("style");
$(".moveright").remove();
$(".moveleft").remove()
}else{mobileNavigationTrigger();
if($(".NavShow").length){$(".tn-links > .navbar-toggle").trigger("click");
$("#topNav").removeClass("in")
}$(".moveright").remove();
$(".moveleft").remove()
}}});
function calcNavbarwidth(){var c=$("#topNav").width();
var b=0;
var d=$(".tn-links li").length;
$(".tn-links li").each(function(){b+=$(this).width()
});
b=b+20;
var a=c-200;
$(".moveright").remove();
$(".moveleft").remove();
if(b>c){$("#topNav").addClass("fade-right");
$("#topNav ul").width(b);
$("#topNav ul").css("transform","translateX(0px)");
$("#topNav").after('<a href="javascript:void(0)" class="moveright"><i class="fa fa-angle-right" aria-hidden="true"></i></a>')
}else{$("#topNav").removeClass("fade-right");
$("#topNav").removeClass("fade-left");
$("#topNav ul").css("transform","translateX(0px)")
}$(document).on("click",".moveright",function(){$("#topNav ul").css("transform","translateX(-"+a+"px)");
$("a.moveright").remove();
$("#topNav").removeClass("fade-right").addClass("fade-left");
$("#topNav").after('<a href="javascript:void(0)" class="moveleft"><i class="fa fa-angle-left" aria-hidden="true"></i></a>')
});
$(document).on("click",".moveleft",function(){$("#topNav ul").css("transform","translateX(0px)");
$("a.moveleft").remove();
$("#topNav").removeClass("fade-left").addClass("fade-right");
$("#topNav").after('<a href="javascript:void(0)" class="moveright"><i class="fa fa-angle-right" aria-hidden="true"></i></a>')
})
}function desktopNavigationTrigger(){reselEventTriggers();
resetNavSubPanel();
$(document).on({mouseenter:function(){var b=$(this).data("show");
var c=$(this);
var a="."+b+"";
$(this).data("timeout",setTimeout(function(){$(".tn-panel").addClass("show-panel");
showNavPanel(a,c)
},500))
},mouseleave:function(){clearTimeout($(this).data("timeout"));
hideNavPanel()
}},".tn-links li a");
$(document).on({mouseenter:function(){$(".tn-panel").addClass("show-panel")
},mouseleave:function(){hideNavPanel()
}},".tn-panel");
$(document).on({mouseenter:function(){var b=$(this).data("show-left");
var c=$(this);
var a="."+b+"";
$(this).data("timeout",setTimeout(function(){showNavSubPanel(a,c)
},250))
},mouseleave:function(){clearTimeout($(this).data("timeout"))
}},".tl-nav-links li a")
}function reselEventTriggers(){$(document).off("mouseenter mouseleave",".tn-links li a");
$(document).off("mouseenter mouseleave",".tl-nav-links li a");
$(document).off("click",".tn-links li a");
$(document).off("click",".tl-nav-links li a");
$(document).off("click",".tn-main-link");
$(document).off("click",".tr-nav-title");
$(".tr-mob-link").remove();
$(".tl-nav-mob").remove();
$(".tl-nav").removeAttr("style")
}function showNavPanel(a,b){if(!$(a).hasClass("active")){resetNavSubPanel();
$(".tl-nav-links").not($(a)).fadeOut(200);
$(".tn-links li a").removeClass("active");
b.addClass("active");
$(".tn-subgroup").removeClass("active");
$(a).addClass("active").find(".tl-nav-links").fadeIn(300);
$(window).trigger("resize.scrollBox")
}}function hideNavPanel(){if($(".gradient-hr:hover").length==0&&!$(".tn-links li a:hover").length){$(".tn-panel").removeClass("show-panel");
console.log("hide")
}setTimeout(function(){if($(".tn-panel").height()==0){$(".tn-subgroup").removeClass("active");
$(".tn-links li a").removeClass("active");
$(".tl-nav-links").hide();
resetNavSubPanel()
}},700)
}function showNavSubPanel(a,b){$(".tr-nav-sub").hide();
$(".tl-nav-links li").removeClass("active");
b.parent().addClass("active");
$(a).fadeIn(300).parent();
setTimeout(function(){$(window).trigger("resize.scrollBox")
},400)
}function resetNavSubPanel(){$(".tr-nav-sub").hide();
$(".tl-nav-links li").removeClass("active");
$(".tl-nav-links li:first-child").addClass("active");
$(".tr-nav-sub:first-child").addClass("active").show()
}function mobileNavigationTrigger(){reselEventTriggers();
$(".tl-nav-links").each(function(){var a='<p class="tr-mob-link">'+$(this).find(".tn-main-link").html()+"</p>";
$(this).find("ul").before(a)
});
$(document).on({click:function(){var b=$(this).data("show");
var d=$(this);
var a="."+b+"";
$(".tn-subgroup").removeClass("active");
$(a).addClass("active").find(".tl-nav-links").show();
if($(a).hasClass("tl-hide")){var c=$(a).find(".tr-left").outerHeight()+$(a).find(".tr-nav-promo").outerHeight();
$(".tn-panel").height(c+40)
}$(this).data("timeout",setTimeout(function(){showNavPanelMobile(a,d)
},300))
}},".tn-links li a");
$(document).on({click:function(){$(this).data("timeout",setTimeout(function(){$(".tn-panel").removeClass("show-panel");
$("#topNav").removeClass("moveLeft");
$(".tl-nav-links").removeClass("active")
},300))
}},".tn-main-link");
$(document).on({click:function(){var b=$(this).data("show-left");
var c=$(this);
var a="."+b+"";
$(".tr-nav-sub").hide();
$(a).show();
$(this).data("timeout",setTimeout(function(){showNavSubPanelMobile(a,c);
var d=$(a).find(".tr-left").outerHeight()+$(a).find(".tr-nav-promo").outerHeight();
$(".tn-panel").height(d+40)
},500))
}},".tl-nav-links li a");
$(document).on({click:function(){var a=$(this);
$(this).data("timeout",setTimeout(function(){if(a.closest(".tl-hide").length){$(".tn-panel").removeClass("show-panel");
$("#topNav").removeClass("moveLeft");
$(".tl-nav-links").removeClass("active")
}$(".tl-nav").removeClass("moveLeft");
$(".tr-nav").removeClass("active");
$(".tn-panel").height("auto")
},300))
}},".tr-nav-title")
}function showNavPanelMobile(a,b){$(".tn-panel").addClass("show-panel");
$("#topNav").addClass("moveLeft");
if(!$(a).hasClass("active")){$(".tl-nav-links").not($(a)).hide();
$(".tn-links li a").removeClass("active");
b.addClass("active")
}clearTimeout(b.data("timeout"))
}function showNavSubPanelMobile(a,b){$(".tl-nav-links li").removeClass("active");
$(".tr-nav-sub").removeClass("active");
$(".tl-nav").addClass("moveLeft");
$(a).closest(".tr-nav").addClass("active");
clearTimeout(b.data("timeout"))
}$(document).on({click:function(){$(".top-navigation").toggleClass("show");
$(".header-group").toggleClass("NavShow");
$("#topNav").removeClass("moveLeft");
$(".tn-panel").removeClass("show-panel");
$(".tn-subgroup").removeClass("active");
$(".tl-nav").removeClass("moveLeft");
$(".tr-nav").removeClass("active");
$(".tn-panel").height("auto");
$(this).toggleClass("close-nav")
}},".tn-links > .navbar-toggle");
function tabletNavigationTrigger(){reselEventTriggers();
$(document).on({click:function(){var b=$(this).data("show");
var c=$(this);
var a="."+b+"";
$(".tn-subgroup").removeClass("active");
$(".tl-nav-links li").removeClass("active");
$(".tr-nav-sub").removeClass("active");
$(".tl-nav-links li:first-child").addClass("active");
$(".tr-nav-sub:first-child").addClass("active").show();
$(a).addClass("active").find(".tl-nav-links").show();
$(a).find(".tl-nav").height($(a).find(".tr-nav").outerHeight());
$(this).data("timeout",setTimeout(function(){showNavPanelMobile(a,c)
},300))
}},".tn-links li a");
$(document).on({mouseenter:function(){var b=$(this).data("show-left");
var c=$(this);
var a="."+b+"";
showNavSubPanel(a,c);
$(".tn-subgroup.active").find(".tl-nav").height($(".tn-subgroup.active").find(".tr-nav").outerHeight())
},mouseleave:function(){clearTimeout($(this).data("timeout"))
}},".tl-nav-links li a");
$(document).on({click:function(){$(this).data("timeout",setTimeout(function(){$(".tn-panel").removeClass("show-panel");
$("#topNav").removeClass("moveLeft");
$(".tl-nav-links").removeClass("active")
},300))
}},".tn-main-link")
}$(document).on({click:function(){$(this).data("timeout",setTimeout(function(){if($(".NavShow").length){$(".tn-links > .navbar-toggle").addClass("collapsed").attr("aria-expanded","false").toggleClass("close-nav");
$(".top-navigation").toggleClass("show");
$(".header-group").toggleClass("NavShow");
$("#topNav").removeClass("moveLeft");
$(".tn-panel").removeClass("show-panel");
$(".tn-subgroup").removeClass("active");
$(".tl-nav").removeClass("moveLeft");
$(".tr-nav").removeClass("active");
$(".tn-panel").height("auto");
$("#topNav").removeClass("in")
}},300))
}},".hdr-mobile-group-toggle");
$(document).on({click:function(){$(this).data("timeout",setTimeout(function(){if($(".hdr-mobile-group.in").length){$(".hdr-mobile-group-toggle").addClass("collapsed").attr("aria-expanded","false");
$("#hdr-mobile-group").removeClass("in")
}},300))
}},".tn-links > .navbar-toggle");
$(window).resize(function(){if($("#onetrust-banner-sdk").length){var a=$("#onetrust-banner-sdk").outerHeight()-35+"px";
$(".footer-links-group").css("padding-bottom",a)
}else{$(".footer-links-group").css("padding-bottom","0")
}});
$(document).ready(function(){$(document).on("keydown",".tn-links li a",function(a){if(a.keyCode==13){if(!$(this).hasClass("active")){$(this).trigger("mouseenter");
$(".tn-panel").trigger("mouseenter")
}else{$(this).trigger("mouseleave");
$(".tn-panel").trigger("mouseleave")
}}else{if(a.keyCode==9){if($(this).hasClass("active")){$(".tn-panel .tn-subgroup.active .sb-content li:first-child a").focus();
return false
}}}});
$(document).on("keydown",".tn-panel .tn-subgroup.active li a",function(d){if(d.shiftKey&&d.which===9&&$(d.target).closest("li").is(":first-child")){$(".tn-links li a.active").focus();
return false
}else{if(d.shiftKey&&d.which===9){return true
}else{if(d.keyCode==9){if($(this).parent("li").hasClass("active")){var b;
$(".tn-subgroup.active .tr-nav-sub").each(function(){if($(this).css("display")==="block"){b=this
}});
var c=$(b).find(".tr-nav-link-group .col-md-6:first-of-type .tr-nav-link");
var a=$(b).find(".tr-nav-link-group .col-md-6:last-of-type .tr-nav-link");
if(c.length){c.first().find("a").focus();
return false
}else{if(a.length){a.first().find("a").focus();
return false
}}}}else{if(d.keyCode==13){if(!$(this).hasClass("active")){$(this).trigger("mouseenter")
}else{$(this).trigger("mouseleave")
}}}}}});
$(document).on("keydown",".tr-nav a",function(b){if(b.keyCode===9&&b.shiftKey){var a;
if($(b.target).is($('.tn-subgroup.active .tr-nav-sub[style="display: block;"] .tr-nav-link-group .col-md-6:first-of-type .tr-nav-link:first-child a'))||!$('.tn-subgroup.active .tr-nav-sub[style="display: block;"] .tr-nav-link-group .col-md-6:first-of-type .tr-nav-link:last-child a').length&&$(b.target).is($('.tn-subgroup.active .tr-nav-sub[style="display: block;"] .tr-nav-link-group .col-md-6:last-of-type .tr-nav-link:first-child a'))){a=$(".tn-panel .tn-subgroup.active .tl-nav-links li.active").find("a");
a.focus();
return false
}}else{if(b.keyCode===9){var a;
if($(b.target).closest(".tr-nav-footer").length||!$(b.target).closest(".tr-nav-link-group").siblings(".tr-nav-footer").find("a").length&&$(b.target).is($('.tn-subgroup.active .tr-nav-sub[style="display: block;"] .tr-nav-link-group .col-md-6:last-of-type .tr-nav-link:last-child a'))||!$('.tn-subgroup.active .tr-nav-sub[style="display: block;"] .tr-nav-link-group .col-md-6:last-of-type .tr-nav-link:last-child a').length&&$(b.target).is($('.tn-subgroup.active .tr-nav-sub[style="display: block;"] .tr-nav-link-group .col-md-6:first-of-type .tr-nav-link:last-child a'))){if($(b.target).closest(".tn-subgroup.active").find(".sb-content li").last().hasClass("active")&&!$(".tn-panel .tn-subgroup.active .tl-show-more").length){$(".tn-links .active").closest("li").find("a").trigger("mouseleave").end().next().find("a").focus();
return false
}else{if($(".tn-panel .tn-subgroup.active .tl-nav-links li.active").next().length){a=$(".tn-panel .tn-subgroup.active .tl-nav-links li.active").next().find("a")
}else{if($(".tn-panel .tn-subgroup.active .tl-show-more").length){a=$(".tn-panel .tn-subgroup.active .tl-show-more a")
}else{a=$(".tn-panel .tn-subgroup.active .tl-nav-links li:first-child a")
}}}a.focus();
return false
}}}});
$(document).on("keydown",".hdr-login-box.slide-down li:last-child a",function(a){if(!a.shiftKey){$(".hdr-login-box").removeClass("slide-down");
$(".hdr-login i.fa").removeClass("rotate");
$(".hdr-login").attr("aria-expanded","false")
}});
$(document).on("keydown",".hdr-login-box.slide-down li:first-child a",function(a){if(a.keyCode===9&&a.shiftKey){$(".hdr-login-box").removeClass("slide-down");
$(".hdr-login i.fa").removeClass("rotate");
if($(".fa-chevron-right.rotate").length){$(this).attr("aria-expanded","true")
}else{$(this).attr("aria-expanded","false")
}}});
$(document).on("keydown",".tn-panel .tn-subgroup.active .tl-nav-links li:last-child a ",function(a){if(a.keyCode==9){if(!(a.shiftKey&&a.which===9)){if(!$(this).parent().hasClass("active")){if(!$(this).parent().parent().parent().next().hasClass("tl-show-more")){$(this).trigger("mouseleave");
$(".tn-links li a.active").focus()
}}}}});
$(document).on("keydown",".tn-panel .tn-subgroup.active .tl-nav-links .tl-show-more a ",function(a){if(a.keyCode==9){if(!(a.shiftKey&&a.which===9)){$(this).trigger("mouseleave");
$(".tn-links li a.active").focus()
}}});
$(".new-candidate-accordion-list .quarter").attr("tabindex","0");
$(".new-candidate-accordion-list .quarter .accordion-inner-list").attr("tabindex","0");
$(document).on("keydown",".new-candidate-accordion-list .quarter",function(a){if(a.keyCode==13&&!$(this).hasClass("open")){$(this).addClass("open");
$(".new-candidate-accordion-list .quarter .accordion-inner-list").focus()
}else{if(a.keyCode==13&&$(this).hasClass("open")){$(this).removeClass("open")
}}});
$(document).on("keydown",".new-candidate-accordion-list .quarter",function(a){if(a.shiftKey&&a.keyCode==9){$(this).removeClass("open")
}});
$(document).on("keydown",".new-candidate-accordion-list .quarter .accordion-inner-list",function(a){if(a.keyCode==9&&!(a.shiftKey&&a.keyCode==9)&&$(this).parent().hasClass("open")){$(this).parent().removeClass("open")
}})
});
$(document).ready(function(){$(".hdr-login").attr("aria-haspopup","true");
$(".hdr-login").attr("aria-expanded","false");
$(".hdr-login-box").attr("role","menu");
$(".hdr-login-box").attr("aria-label","login");
$(".hdr-login").click(function(){if($(".fa-chevron-right.rotate").length){$(this).attr("aria-expanded","true")
}else{$(this).attr("aria-expanded","false")
}});
$(".tn-links .navbar-toggle").attr("tabindex","1");
$(".hdr-search a").click(function(a){if(!$(".hdr-search input").hasClass("input-hidden")){setTimeout(function(){$("#ub-search").trigger("focus");
a.preventDefault()
},10)
}})
});
$(document).ready(function(){$(document).on("mouseover",".tn-links li",function(a){if($(this).hasClass("noContent")){$(this).parents(".tn-group ").children(".tn-panel").css("display","none")
}else{$(this).parents(".tn-group ").children(".tn-panel").css("display","block")
}})
});