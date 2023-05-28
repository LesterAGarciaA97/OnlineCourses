/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(f,b,g){var a=/\+/g;
function e(h){return h
}function c(h){return decodeURIComponent(h.replace(a," "))
}var d=f.cookie=function(p,o,v){if(o!==g){v=f.extend({},d.defaults,v);
if(o===null){v.expires=-1
}if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setDate(u.getDate()+r)
}o=d.json?JSON.stringify(o):String(o);
return(b.cookie=[encodeURIComponent(p),"=",d.raw?o:encodeURIComponent(o),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var h=d.raw?e:c;
var s=b.cookie.split("; ");
for(var n=0,k=s.length;
n<k;
n++){var m=s[n].split("=");
if(h(m.shift())===p){var j=h(m.join("="));
return d.json?JSON.parse(j):j
}}return null
};
d.defaults={};
f.removeCookie=function(j,h){if(f.cookie(j)!==null){f.cookie(j,null,h);
return true
}return false
}
})(jQuery,document);
$(document).ready(function(){if(window.innerWidth==800){$(".navbar-collapse").css("margin-left","-15px");
$(".navbar-collapse").css("margin-right","-15px");
$("ul.navbar-nav li").css("width","100%");
$(document).on("click","#toggleHead",function(){$(".navbar-collapse").css("margin-left","-15px");
$(".navbar-collapse").css("margin-right","-15px");
$("ul.navbar-nav li").css("width","100%")
});
$(document).on("click",".login-dd #mNavClose",function(){$(".navbar-collapse.collapse").removeAttr("style")
})
}if(window.innerWidth>800){$("#navbar").addClass("deskNavbar")
}else{if(window.innerWidth<=800){$("#navbar").addClass("mobiNavbar");
$(document).on("click","#toggleHead",function(){$(".overlay").addClass("loginOverlay");
$("html,body").css("overflow","hidden")
});
$(document).on("touchstart click",".overlay.loginOverlay",function(){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$(".login > ul").hide();
$(".login-dd #mNavClose").remove();
$(".mobi-head a").empty();
$(this).removeClass("loginOverlay");
$(this).hide();
$(".mobi-head").removeClass("login-dd");
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").removeAttr("style");
$("html,body").removeAttr("style")
});
$(document).on("touchstart click",".overlay",function(){$(".sidebar-container .sidebar ul").hide();
$(".mobiNav ul.submenu").hide();
$(".sidebar").removeAttr("style");
$(".mobi-head").hide();
$(".mobi-head").removeClass("level2");
$(".mobi-head").removeClass("level3");
$(".mobi-head").empty();
$(".l_content").empty();
$("#reverse").remove();
$(this).hide();
$("#search-panel").animate({top:"-74px"},100);
$("html,body").removeAttr("style")
})
}}if(window.innerWidth==800){$(".nav-vm .navbar-nav > li").css("width","100%")
}else{$(".nav-vm .navbar-nav > li").css("width","auto")
}$(window).resize(function(){if(window.innerWidth>800){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$("#search-panel").animate({top:"-74px"},100);
$(".overlay").hide(200);
$("#navbar").addClass("deskNavbar");
$("#navbar").removeClass("mobiNavbar");
$(".deskNavbar .navbar-nav li.login ul").hide();
$(".navbar-collapse.collapse").removeAttr("style")
}else{if(window.innerWidth<=800){$("#navbar").removeClass("deskNavbar");
$("#navbar").addClass("mobiNavbar");
$(".navbar-collapse.collapse").removeAttr("style")
}}if(window.innerWidth==800){$(".nav-vm .navbar-nav > li").css("width","100%")
}else{$(".nav-vm .navbar-nav > li").css("width","auto")
}});
$(document).on("click","#toggleHead",function(){$(".mobi-head").show();
$(".mobi-head").addClass("login-dd");
$(".overlay").show();
$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>');
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").show();
$(".mobiNavbar ul li.login ul li").hide()
});
$(document).on("click","#mNavSeacrch",function(){$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>');
$("#search-panel").animate({top:"48px"},200);
$(".mobi-head").show();
$(".overlay").show()
});
$(document).on("click","#mNavClose",function(){$("#search-panel").animate({top:"-74px"},100)
});
$(document).on("click",".login-dd #mNavClose",function(){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$(".overlay").hide();
$(".login > ul").hide();
$("#reverse").remove();
$(".mobi-head a").empty();
$(this).remove();
$(".mobi-head").removeClass("login-dd");
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").removeAttr("style")
})
});
$(document).on("click",".mobiNavbar .login a",function(){$(this).parent("li").children("ul").show();
$(this).parent("li").siblings("li").hide();
$(".login > a").hide();
$(".login ul, .login ul li").show();
$(".mobi-head a").empty();
$(".mobi-head").append('<a id="reverse" class="reverse" href="javascript:void(0);"><i class="fa fa-chevron-left"></i> <font>Login</font></a>')
});
$(document).on("click",".login-dd #reverse",function(){$(this).remove();
$(".login > ul").hide();
$(".login > a").show();
$(".mobi-head a").empty();
$(".nav-vm.navbar li").show()
});
$(".nav-vm form input").on("keydown",function(a){if(a.which==13){$(this).parent("form").submit()
}});
$(document).on("click",".searchQuery",function(){$(this).parent("form").submit()
});
var amb="&",ques="?",hash="#",eq="=",aq="aq".q="q";
var cc="cc",client="client",stype="stype",site="site";
var product="product";
var fallback_client="VMware",fallback_site="VMware",fallback_cc="en",fallback_stype="main",fallback_url="/search.html";
var parameter_URL="",url="",globalsearch_parameter_MAP={},siteRootPath="",productfield="",form_action="";
var srtype_global="global";
$(document).on("click",".searchQuery",function(){siteRootPath=$("#globalsearch").attr("action");
var a=$("#ub-search").val().trim()==""?$("#ub-search").val().trim():encodeURIComponent($("#ub-search").val());
global_search(srtype_global,a)
});
$(document).on("keypress","#globalsearch #ub-search",function(b){if(b.which==13){siteRootPath=$("#globalsearch").attr("action");
var a=$("#ub-search").val().trim()==""?$("#ub-search").val().trim():encodeURIComponent($("#ub-search").val());
global_search(srtype_global,a);
return false
}});
function global_search(b,a){if(typeof b!="undefined"||b.length>0){search(a,b)
}}$(document).on("click","#search-panel button",function(){siteRootPath=$("#globalsearch").attr("action");
var a=$(".search-panel #search").val().trim()==""?$(".search-panel #search").val().trim():encodeURIComponent($(".search-panel #search").val());
$("#mNavClose").click();
global_search(srtype_global,a);
return false
});
$(document).on("keypress",".search-panel #search",function(b){if(b.which==13){siteRootPath=$("#globalsearch").attr("action");
var a=$(".search-panel #search").val().trim()==""?$(".search-panel #search").val().trim():encodeURIComponent($(".search-panel #search").val());
$("#mNavClose").click();
global_search(srtype_global,a);
return false
}});
$(document).on("click","#basic-addon1",function(){$("#supportsearch").attr("action",$("#globalsearch").attr("action"));
var a=$("#supportsearch").attr("action");
siteRootPath=a;
var c=$(this).data("srtype");
if($(this).data("productfield")!=""){productfield=$(this).data("productfield")
}if("global"==c){var b=$("#generic-search").val().trim()==""?$("#generic-search").val().trim():encodeURIComponent($("#generic-search").val());
global_search(c,b)
}else{supp_sec_search(c)
}});
$(document).on("keypress","#generic-search",function(e){$("#supportsearch").attr("action",$("#globalsearch").attr("action"));
var b=$("#supportsearch").attr("action");
siteRootPath=b;
var d=$(this).data("srtype");
var a=(e.keyCode?e.keyCode:e.which);
if(a=="13"){if($(this).data("productfield")!=""){productfield=$(this).data("productfield")
}if("global"==d){var c=$("#generic-search").val().trim()==""?$("#generic-search").val().trim():encodeURIComponent($("#generic-search").val());
global_search(d,c)
}else{supp_sec_search(d)
}return false
}});
function supp_sec_search(b){var a=$("#generic-search").val().trim()==""?$("#generic-search").val().trim():encodeURIComponent($("#generic-search").val());
if(typeof b!="undefined"||b.length>0){search(a,b)
}}function create_globalsearch_Map(){var a={};
$.each($("#globalsearch input"),function(b,d){if($(this).attr("type")=="hidden"){var e=$(this).attr("name");
if(e.indexOf("cq_csrf_token")>-1){return true
}var c=$(this).val();
a[e]=c
}});
return a
}function create_supp_sec_search_parameter_MAP(){var a={};
$.each($("#supportsearch input"),function(b,d){if($(this).attr("type")=="hidden"){var e=$(this).attr("name");
if(e.indexOf("cq_csrf_token")>-1){return true
}var c=$(this).val();
a[e]=c
}});
return a
}function get_Search_URL(b){var a="";
if(b.length>0){a+=b
}return a
}function create_search_urlparam(b,d){var e="";
var a=1;
for(var c in globalsearch_parameter_MAP){if(globalsearch_parameter_MAP.hasOwnProperty(c)){if(a==1){e+=c+eq+globalsearch_parameter_MAP[c];
a=0
}else{e+=amb+c+eq+globalsearch_parameter_MAP[c]
}}}e+=amb+q+eq+b;
return e
}function create_security_search_urlparam(a,b){var c="";
c=create_search_urlparam(a,b);
return c
}function create_support_search_urlparam(a,b){var c="";
c=create_search_urlparam(a,b);
c+=amb+product+eq+productfield;
return c
}function search(a,b){url=get_Search_URL(siteRootPath);
if(url==""){url=fallback_url;
if(b=="global"){globalsearch_parameter_MAP[client]=fallback_client;
globalsearch_parameter_MAP[site]=fallback_site;
globalsearch_parameter_MAP[cc]=fallback_cc;
globalsearch_parameter_MAP[stype]=fallback_stype
}else{if(b=="security"){globalsearch_parameter_MAP[cc]=fallback_cc
}else{globalsearch_parameter_MAP[cc]=fallback_cc
}}}parameter_URL=ques;
if("support"==b){parameter_URL+="q="+a+amb+"aq=@vmsearchlanguage%3D%3D"+create_lang_mapping()+"&client=VMware&tab=supportSearch&start=0&num=20&sort=&slen=200&"+product+eq+productfield
}else{if("security"==b){parameter_URL+=create_security_search_urlparam(a,b)
}else{if("global"==b){parameter_URL+="q="+a+amb+"aq=@vmsearchlanguage%3D%3D"+create_lang_mapping()+"&client=VMware&tab=mainvmware&start=0&num=20&sort=&slen=200&product="
}}}window.location=url+parameter_URL
}function create_lang_mapping(){var a={ae:{language:"Avestan"},ap:{language:"English-AP"},ar:{language:"Spanish-AR"},at:{language:"German-AT"},au:{language:"English-AU"},"be/fr":{language:"English-BE-FR"},"be/nl":{language:"English-BE-NL"},be:{language:"English-BE"},belgie:{language:"English-BELGIE"},bg:{language:"Bulgarian"},br:{language:"Portuguese-br"},brazil:{language:"Portuguese"},"ca-fr":{language:"French-CA-FR"},"ca/fr":{language:"French-CA-FR"},ca:{language:"English-CA"},ch:{language:"German-CH"},cl:{language:"Spanish-CL"},cn:{language:"Chinese"},co:{language:"Spanish-CO"},cr:{language:"Spanish-CR"},cz:{language:"Czech"},de:{language:"German"},deutschland:{language:"German"},dk:{language:"Danish"},en:{language:"English"},es:{language:"Spanish"},espana:{language:"Spanish"},fi:{language:"Finnish"},fr:{language:"French"},france:{language:"French"},gb:{language:"English-UK"},asean:{language:"English-ASEAN"},hk:{language:"English-HK"},hu:{language:"Hungarian"},ie:{language:"English-IE"},il:{language:"English-IL"},"in":{language:"English-IN"},israel:{language:"English_ISRAEL"},it:{language:"Italian"},ja:{language:"Japanese"},jp:{language:"Japanese"},ko:{language:"Korean"},kr:{language:"Korean"},lasp:{language:"English-LASP"},latam:{language:"Spanish"},mena:{language:"English-MENA"},"middle-east":{language:"English-MIDDLE-EAST"},mx:{language:"Spanish-MX"},my:{language:"English-MY"},nl:{language:"Dutch"},no:{language:"Norwegian"},nz:{language:"English-NZ"},oesterreich:{language:"German"},pe:{language:"Spanish-PE"},pl:{language:"Polish"},ru:{language:"Russian"},russia:{language:"Russian"},sa:{language:"Arabic"},schweiz:{language:"German"},se:{language:"Swedish"},sg:{language:"English-SG"},sverige:{language:"Swedish"},th:{language:"Thai"},tr:{language:"Turkish"},tw:{language:"Taiwanese"},uk:{language:"English-UK"},us:{language:"English"},"":{language:"English"},ve:{language:"Spanish-VE"}};
var b=(function(){var e,c;
if(document.documentElement.lang.indexOf("-")>-1){e=document.documentElement.lang.split("-");
if(typeof e[1]!="undefined"){c=e[1].toLowerCase()
}else{if(window.location.href.indexOf("/asean")>-1){c="asean"
}else{c=e[0]
}}}else{if(document.querySelectorAll("meta[http-equiv='content-language']").length>0){c=document.querySelector("meta[http-equiv='content-language' ]").getAttribute("content")
}else{if(window.location.href.indexOf("/asean")>-1){c="asean"
}else{c=document.documentElement.lang
}}}var d=function(){return(a[c])
};
var f=function(){return d()
};
return{fetchi18nTranslations:f}
})();
return b.fetchi18nTranslations().language
}var mainCatVal="";
var mainCatClass="";
var linkClickVal="";
var ulHeight=0;
var data_target="";
var level1Html="";
var sideBarlogoHeight=0;
var sideBarTotalHeight=0;
var wHeight=0;
$(document).ready(function(){ulHeight=$(".sidebar > ul").outerHeight(true);
$(".verticleToggleMenu").hide();
toggleSidebar();
defineWidth();
$(document).on("click",".verticleToggleMenu",function(){$(".sidebar .verticlaToggle").css("height","100%");
$(".verticlaToggle").addClass("opened");
$(".sidebar ul.verticlaToggle.opened li").show();
$("#head-ico a").html($(this).html());
var a=$(this).attr("data-target");
$(".menu-cat").hide();
$(a).show();
$(this).addClass("cross");
$(".sidebar-overlay").show();
$(".sidebar-overlay").animate({left:"135px"},0);
defineWidth()
});
$(document).on("click",".verticleToggleMenu.cross",function(){$(this).removeClass("cross");
$(".sidebar-overlay li.info").show();
$(".sidebar-overlay li.head-ico").show();
$(".verticlaToggle").removeClass("opened");
$(".subCat-container").removeClass("vMenu");
$(".subCat-container.vMenu").parent(".col-md-3").removeClass("stretch-full");
$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".sidebar .verticlaToggle li").children("a").removeClass("cross");
$(".verticleNav .levelV1").remove();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container li.subCat").siblings("li").removeClass("show_subcat");
$(".subCat-container").removeClass("vMenuLevel2")
});
$(document).on("click",".verticleToggle.opened li",function(){$(".verticleToggle.opened li").removeClass("active-li");
$(this).addClass("active-li")
});
if($(window).innerWidth()<800){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide();
setHeight()
}$(".sidebar-overlay").addClass("deskNav");
$(document).on("click",".sidebar ul li a",function(){$("#head-ico a").html($(this).html());
var c="#menu-overlay-"+$(this).attr("id");
$(".menu-cat").hide();
$(c).show();
$(".sidebar-overlay").show();
$(".sidebar-overlay .submenu li").hide();
$(".submenu li.subCat").show();
$(".sidebar-overlay").animate({left:"135px"},0);
$(".sidebar ul li a").removeClass("cross");
$(".sidebar ul li").removeClass("active-li");
$(this).parent("li").addClass("active-li");
$(this).addClass("cross");
var b=$(this).parent("li").height();
var a=$(".sidebar ul li.active-li");
a=b;
if(window.innerWidth<=800){$(".menu-cat").scrollTop(0);
$(".sidebar-overlay").addClass("mobiNav");
$(".menu-cat").each(function(){if($(this).css("display")=="block"){var e=$(this).innerHeight();
var d=window.innerHeight;
if(e>d){$(this).css("max-height",(d-99));
$(this).css("overflow-y","scroll")
}}})
}});
$(document).on("click",".cross",function(){$(".menu-cat").scrollTop(0);
$(this).removeClass("cross");
$(this).parent("li").removeClass("active-li");
$(".sidebar-overlay").animate({left:"-100%"},0)
});
$(document).on("click","#hamBurger",function(){$(".sidebar ul.opened li").show();
$("html,body").css("overflow","hidden");
$(".sidebar-container .sidebar ul").show();
$(".overlay").show();
$(".l_content").empty();
$("#reverse").remove();
$(".mobi-head").show();
if($("#mNavClose").length==0){$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>')
}});
$(document).on("click","#mNavClose",function(){$(".sidebar-container .sidebar ul").hide();
$(".mobi-head").hide();
$(".mobi-head").removeClass("level2");
$(".mobi-head").removeClass("level3");
$(".overlay").hide();
$(".l_content").empty();
$("#reverse").remove();
$(this).remove();
$("html,body").removeAttr("style")
});
$(window).resize(function(){if(window.innerWidth>800){$(".sidebar-container .submenu").show();
$(".sidebar-container .sidebar ul").show();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .sidebar ul").removeAttr("style");
$(".sidebar-container .sidebar").show();
$(".sidebar ul li").removeClass("active-li");
$(".mobi-head").empty();
$(".sidebar-overlay").addClass("deskNav");
$(".sidebar-overlay").removeClass("mobiNav");
$("html,body").removeAttr("style")
}else{if(window.innerWidth<=800){$(".sidebar-overlay").removeClass("deskNav");
$(".sidebar-container .sidebar-overlay").hide();
$(".sidebar ul li a").removeClass("cross");
$(".sidebar ul li").removeAttr("style");
$(document).on("click","#hamBurger",function(){$(".sidebar-container .sidebar").css({margin:"0",width:"100%",height:"100%"})
});
$(document).on("click","#mNavClose",function(){$(".sidebar ul li a").removeClass("cross");
$(".sidebar-container .sidebar").removeAttr("style");
$(".menu-cat").removeAttr("style");
$(".menu-cat").hide();
$(".sidebar-container .submenu").hide()
});
setHeight()
}else{if(window.innerWidth==800){$(".verticlaToggle").removeClass("opened");
$("#mNavClose").click()
}}}if($(window).innerWidth()<800){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide()
}defineWidth();
toggleSidebar()
});
$(window).on("orientationchange",function(){setTimeout(function(){setHeight()
},300)
})
});
$(document).on("click",".sidebar-overlay .submenu li.subCat",function(){$(".mobi-head").addClass("level3");
$(".mobi-head").removeClass("level2");
mainCatVal=$(".mobi-head .l_content span").html();
mainCatClass=$(".mobi-head .l_content i").attr("class");
if($(this).children("strong").children("a").length<1){linkClickVal=$($(this).children("strong")).html()
}else{linkClickVal=$($(this).children("strong").children("a")).html()
}$(".mobi-head .l_content").html('<span data-category="'+mainCatVal+'" class="l3">'+linkClickVal+"</span>")
});
$(document).on("click","#hamBurger",function(){$(".sidebar-container .sidebar").css({margin:"0",width:"100%",height:"100%"})
});
$(document).on("click",".level3 #mNavClose",function(){$(".subCat-container li").hide();
$(".subCat").show()
});
$(document).on("click","#mNavClose",function(){$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide()
});
$(document).on("click",".level2 .l_content, .level2 #reverse",function(){$(this).hide();
$("#reverse,.submenu").hide();
$(".sidebar ul").show();
$(".sidebar-overlay.mobiNav").removeAttr("style")
});
$(document).on("click",".level3 .l_content, .level3 #reverse",function(){$(this).hide();
$("#reverse,.submenu li").hide();
$(".subCat").show();
$(".subCat").closest(".menu-cat").find("span").show();
$(".mobi-head").addClass("level2");
$(".mobi-head").removeClass("level3");
$(".level2 #reverse").show();
if(mainCatVal=="Partners Programs"){$(".l_content").show().html('<i style="margin-right:2px; width:auto;" class="'+mainCatClass+'"></i><i class="'+mainCatClass+'"></i><span>'+mainCatVal+"</span>")
}else{$(".l_content").show().html('<i class="'+mainCatClass+'"></i><span>'+mainCatVal+"</span>")
}});
$(document).on("click",".submenu li.subCat",function(){$(this).parent().children().show();
if(window.innerWidth<=800){$(this).closest(".menu-cat").find("span").hide()
}$(".submenu li.subCat").hide()
});
$(document).on("click",".submenu li a",function(a){if($(this).attr("href")==document.location.pathname+document.location.hash){$(".cross").click();
a.preventDefault()
}else{if($(this).attr("href").split("#")[0]==document.location.pathname){$(".cross").click();
var b="#"+$(this).attr("href").split("#")[1];
$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==b){$(this).click()
}})
}}});
$(document).on("click",".sidebar ul li a",function(){if($(".submenu").is(":hidden")){$(".submenu").show()
}if($(".verticleToggleMenu").is(":visible")){$(".head-ico").hide();
$(".sidebar-overlay ul li.info").addClass("infoHidden");
$(".subCat-container").parent(".col-md-3").removeClass("stretch-full")
}else{$(".head-ico").show();
$(".sidebar-overlay ul li.info").removeClass("infoHidden")
}$(".mobi-head").addClass("level2");
$(".mobi-head").html('<a class="l_content">'+$(this).html()+'</a><span id="mNavClose" class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
$(".level2").append('<a id="reverse" class="reverse" href="javascript:void(0);"><i class="fa fa-chevron-left"></i></a>');
$(this).parent().parent("ul").hide();
$(".sidebar-overlay").show()
});
function defineWidth(){var a=$(".sidebar-overlay").width()-165;
var b=a+"px";
$("ul.verticlaToggle").css({width:b})
}function toggleSidebar(){var a=false;
sideBarlogoHeight=$(".sidebar .logo-vm").outerHeight()+20;
sideBarTotalHeight=ulHeight+sideBarlogoHeight;
wHeight=$(window).height();
if($(".verticleToggleMenu").is(":visible")){$(".head-ico").hide();
$(".sidebar-overlay ul li.info").addClass("infoHidden")
}else{$(".head-ico").show();
$(".sidebar-overlay ul li.info").removeClass("infoHidden")
}if(wHeight<sideBarTotalHeight&&!$(".sidebar > ul").hasClass("verticlaToggle")&&$(window).innerWidth()>800){$(".sidebar > ul").addClass("verticlaToggle");
$(".sidebar > ul").hide();
$(".verticleToggleMenu").show();
$(".sidebar-overlay").addClass("verticleNav");
if(a==false){$(".verticlaToggle").removeClass("opened");
$(".cross").click();
$(".sidebar > ul").hide();
$(".sidebar ul li").hide();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide();
a=true
}$(".sidebar ul.verticlaToggle li a").removeClass("cross")
}else{if($(window).height()>sideBarTotalHeight&&$(".sidebar > ul").hasClass("verticlaToggle")){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide();
$(".sidebar-overlay").removeClass("verticleNav");
$(".subCat-container").removeClass("vMenu");
$(".sidebar ul li a").removeClass("cross");
$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".subCat-container").parent(".col-md-3").removeClass("stretch-full");
if(a==false){$(".verticlaToggle").removeClass("opened");
$(".cross").click();
$(".sidebar > ul").show();
$(".sidebar ul li").show();
$(".levelV1").hide();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide();
a=true
}$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".verticleNav .levelV1").remove();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container li.subCat").siblings("li").removeClass("show_subcat");
$(".subCat-container").removeClass("vMenuLevel2")
}else{if($(window).height()>sideBarTotalHeight){$(".sidebar-overlay").removeClass("verticleNav")
}else{a=false
}}}return false
}var wHeight=$(window).height();
var sideBarlogoHeight=$(".sidebar .logo-vm").outerHeight()+20;
var sideBarTotalHeight=ulHeight+sideBarlogoHeight;
$(document).on("click",".sidebar ul.verticlaToggle.opened li a",function(){$(".sidebar .verticlaToggle.opened").css("height","0");
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
data_target="#menu-overlay-"+$(this).attr("id");
$(".sidebar ul.verticlaToggle.opened li").hide();
$(".subCat-container").addClass("vMenu");
$(".subCat-container.vMenu").parent(".col-md-3").addClass("stretch-full");
var a=$(this).html();
$(".levelV1").remove();
$(".menu-cat").append('<div class="levelV1"><a href="javascript:void(0)"><i class="fa fa-chevron-left"></i>'+a+"</a></div>")
});
$(document).on("click",".verticleNav .levelV1 a",function(){$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(".subCat-container").removeClass("vMenu");
$(".verticleNav .menu-cat").hide();
$(".sidebar ul.verticlaToggle.opened li").show();
$(".sidebar .verticlaToggle").css("height","100%")
});
$(document).on("click",".verticleNav .subCat-container.vMenu li.subCat",function(){level1Html=$(".levelV1").html();
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(".verticleNav .levelV1").addClass("levelV2");
var a=$(this).html();
$(".verticleNav .levelV1").html('<a href="javascript:void(0)"><i class="fa fa-chevron-left"></i>'+a+"</a>");
$(".verticleNav .subCat-container.vMenu li.subCat").addClass("clicked");
$(this).siblings("li").addClass("show_subcat");
$(".subCat-container").addClass("vMenuLevel2").removeClass("vMenuLevel1")
});
$(document).on("click",".levelV1.levelV2",function(){$(".subCat-container").removeClass("vMenuLevel2").addClass("vMenuLevel1").addClass("vMenu");
$(".levelV1").html(level1Html);
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(this).removeClass("levelV2");
$(".verticlaToggle").children("li").hide();
$(".submenu .menu-cat .subCat").show();
$(".submenu .menu-cat .show_subcat").removeClass("show_subcat").hide();
$(data_target).show();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container.vMenu li.subCat").siblings("li").removeClass("show_subcat");
$(".sidebar .verticlaToggle").css("height","0")
});
$(document).on("click",".submenu li a",function(a){if($(this).attr("href")==document.location.pathname+document.location.hash){$(".cross").click();
a.preventDefault()
}else{if($(this).attr("href").split("#")[0]==document.location.pathname+document.location.hash){$(".cross").click();
var b="#"+$(this).attr("href").split("#")[1];
$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==b){$(this).click()
}})
}}});
function setHeight(){$(".sidebar").css({"max-height":"0"});
$(".sidebar-overlay").removeAttr("style");
windowHeight=$(window).innerHeight();
$(".sidebar").css({"max-height":windowHeight+"px"});
$(".sidebar-overlay").css({"max-height":windowHeight+"px"})
}$(document).ready(function(){$(document).on("scroll",function(){if($(document).scrollTop()>0&&window.innerWidth>800){$(".breadCrumb").addClass("scrolling")
}else{$(".breadCrumb").removeClass("scrolling")
}});
if(window.scrollY>0&&window.innerWidth>800){$(".breadCrumb").addClass("scrolling")
}else{$(".breadCrumb").removeClass("scrolling")
}$(".overlay-con > a").mouseover(function(){$(".overlay-con a").addClass("hover-opacity");
$(this).removeClass("hover-opacity")
});
$(".social-overlay").mouseout(function(){$(".overlay-con a").removeClass("hover-opacity")
});
$(".dd-con").mouseover(function(){$(".toggle-dropdown > a").addClass("active")
});
$(".dd-con").mouseout(function(){$(".toggle-dropdown > a").removeClass("active")
});
function b(){var g="";
var f=($(".nav-vm").height())+($(".breadCrumb").height());
if($(window).scrollTop()==0){g=window.innerHeight-(f+70)
}else{if($(window).scrollTop()>0){g=window.innerHeight-(($(".breadCrumb").height())+70)
}}$(".bc-dropdown ul #content-1, .bc-dropdown ul #content-2").css("max-height",g)
}b();
var a=$(".breadCrumb ul div.dd-con").children("li").last();
$(".breadCrumb ul div.dd-con").children("li").last().remove();
$(".breadCrumb").children("ul").append(a);
if(!($(a).children("a").next("ul").length>0)){$(a).removeClass("bc-dropdown")
}var e=20;
$(".bc-dropdown").each(function(f){e=$(this).outerWidth()+e
});
var d="";
function c(){$(".breadCrumb ul li:last span").removeAttr("style");
if($(".breadCrumb .social-links")[0]){if(window.innerWidth<1120){d=$(".breadCrumb ul").outerWidth()-200
}else{d=$(".breadCrumb ul").width()-$(".breadCrumb ul div.toggle-dropdown").width()
}}else{$(".breadCrumb ul").css("width","90%");
if(window.innerWidth<1120){d=$(".breadCrumb ul").outerWidth()-200
}else{d=$(".breadCrumb ul").width()-$(".breadCrumb ul div.toggle-dropdown").width()
}}if($(".breadCrumb ul").width()<($(".breadCrumb ul div.toggle-dropdown").outerWidth()+$(".breadCrumb ul li:last").width())){$(".breadCrumb > ul").addClass("spanellipse")
}else{$(".breadCrumb > ul").removeClass("spanellipse")
}if($(".social-links").width()<30){$(".breadCrumb ul").addClass("no-social-bc")
}if(($(".breadCrumb ul").width()-$(".lastLi").width()>300)){$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox");
d=($(".breadCrumb ul").width()-$(".breadCrumb ul div").width()-$(".social-links").width())+200;
$(".breadCrumb ul li:last span").width(d)
}if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".breadCrumb ul li:last span").width()+200){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}if($(".social-links").length&&!$(".showDrpBox").length){if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".social-links").width()+170){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}}}$(window).load(function(){$(".breadCrumb ul").css("visibility","visible");
c();
if(($(".breadCrumb ul").width()-$(".lastLi").width()>300)){$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox");
d=($(".breadCrumb ul").width()-$(".breadCrumb ul div").width()-$(".social-links").width())+200;
$(".breadCrumb ul li:last span").width(d)
}if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".breadCrumb ul li:last span").width()+200){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}c();
if($(".toggle-dropdown > a").css("display")!="none"){$(".dd-con").addClass("toggleView")
}else{$(".dd-con").removeClass("toggleView")
}});
$(window).resize(function(){$(".breadCrumb ul").css("visibility","visible");
c()
});
$(window).resize(function(){b();
if($(".toggle-dropdown > a").css("display")!="none"){$(".dd-con").addClass("toggleView")
}else{$(".dd-con").removeClass("toggleView")
}});
$(document).on("scroll",function(){b()
});
if($(".dd-con li.bc-dropdown").length>2){$(".dd-con").addClass("multi-tier-brd")
}if($(".dd-con li.bc-dropdown").length==5){$(".dd-con").addClass("listFive")
}else{if($(".dd-con li.bc-dropdown").length==4){$(".dd-con").addClass("listFour")
}else{if($(".dd-con li.bc-dropdown").length==1){$(".dd-con").addClass("single-brd")
}else{if($(".dd-con li.bc-dropdown").length<1){$(".toggle-dropdown").hide()
}}}}});
var getAnchorName=[];
var getAnchortop=[];
var getAnchortopNav=[];
var scrollPos=$(window).scrollTop();
var factor=0,_factor=0,__factor=0;
var navBarHeight=$(".navbar").outerHeight(true);
var breadCrumHeight=$(".breadCrumb").outerHeight(true);
var secondNavHeight=$(".secondary-nav").outerHeight(true);
var secondNavFixedHeight=$(".secondary-nav.fixed").outerHeight(true);
var getNavHeight=0;
function getNavDetail(){getAnchorName.length=0;
getAnchortop.length=0;
$(".navSelecter").each(function(){getAnchorName.push($(this).attr("id"));
getAnchortop.push(Math.ceil($(this).position().top+65))
})
}$(document).ready(function(){if($(".secondary-nav ul li").length<1){$(".secondary-nav").addClass("noLinks")
}SetHeaderHeight();
$(window).load(function(){b();
if(window.innerWidth<=800){calcHeight_snav()
}$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==document.location.hash){$(this).click()
}})
});
$(window).on("scroll",function(){if(window.innerWidth<=800){collapseMenu()
}});
$(document).on("click",'.secondary-nav ul li a[href*="#"]:not([href="#"])',function(g){if($(this).parents(".mobilecongress").length){b();
var d=0;
if(window.innerWidth<800){if($(this).hasClass("active")&&!$(this).parent("ul").hasClass("open")){return false
}}if(window.innerWidth<641){d=getAnchortop[0]+30
}else{if(window.innerWidth<801){d=getAnchortop[0]
}else{if(window.innerWidth<1001){if($(this).parent().is(":last-child")){d=getAnchortop[0]-140
}else{if(!$(this).parent().is(":first-child")){d=getAnchortop[0]-100
}else{d=getAnchortop[0]
}}}else{if($(this).parent().is(":last-child")){d=getAnchortop[0]-70
}else{if(!$(this).parent().is(":first-child")){d=getAnchortop[0]-50
}else{d=getAnchortop[0]
}}}}}calcHeight_snav();
g.preventDefault();
var f=this.hash;
var c=$(f);
if(!$(".secondary-page-nav").length){$("html, body").animate({scrollTop:c.offset().top-d},900,function(){onScroll()
})
}else{$("html, body").animate({scrollTop:c.offset().top},900,function(){onScroll()
})
}$(".secondary-nav ul").removeClass("open")
}else{b();
var d=0;
if(window.innerWidth<800){if($(this).hasClass("active")&&!$(this).parent("ul").hasClass("open")){return false
}}if(window.innerWidth<641){d=getAnchortop[0]+30
}else{if(window.innerWidth<801){d=getAnchortop[0]
}else{if(window.innerWidth<1001){d=getAnchortop[0]
}else{if($(".formlanding").length){d=getAnchortop[0]+50-$(".pageHeader").offset().top
}else{d=getAnchortop[0]+24
}}}}calcHeight_snav();
g.preventDefault();
var f=this.hash;
var c=$(f);
if(!$(".secondary-page-nav").length){$("html, body").animate({scrollTop:c.offset().top-d},900,function(){onScroll()
})
}else{if($(window).scrollTop()+$(".breadCrumb").height()>$(".pageHeaderNav").offset().top+$(".pageHeaderNav h2").height()){if($(window).width()>800){$("html, body").animate({scrollTop:c.offset().top-180},900,function(){onScroll()
})
}else{$("html, body").animate({scrollTop:c.offset().top-140},900,function(){onScroll()
})
}}else{if($(window).width()>800){$("html, body").animate({scrollTop:c.offset().top-$(".secondary-page-nav").height()-100},900,function(){onScroll()
})
}else{$("html, body").animate({scrollTop:c.offset().top-$(".secondary-page-nav").height()-80},900,function(){onScroll()
})
}}}$(".secondary-nav ul").removeClass("open")
}});
if(window.innerWidth<=800){collapseMenu()
}$(window).on("scroll",function(){b();
onScroll()
});
function a(c){}$(document).on("click",".secondary-nav ul li a",function(d){$(".content-container").css("padding-top",0);
if($(this).hasClass("active")){return false
}else{var c=$(this);
var f=c.attr("href");
if(c.position().top<=scrollPos){}else{c.removeClass("active")
}}});
$(document).on("click",".secondary-nav ul li a.active",function(c){$(".secondary-nav ul li").toggle();
$(".secondary-nav ul li a.active").parent("li").toggle();
$(".secondary-nav ul").addClass("open");
c.preventDefault()
});
function b(){if(!$(".secondary-page-nav").length){if(window.innerWidth<1001&&window.innerWidth>800){if($(window).scrollTop()<40){$(".content-container").css("padding-top",0)
}if($(window).scrollTop()>40){$(".secondary-nav").addClass("fixed");
$(".content-container").css("padding-top",$(".secondary-nav").height()+20)
}else{$(".secondary-nav").removeClass("fixed");
$(".content-container").css("padding-top","0")
}}else{if($(window).scrollTop()>($(".secondary-nav").height()-$(".breadCrumb").height()-44)&&$(window).scrollTop()>0){if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("fixed")
}}else{$(".secondary-nav").removeClass("fixed")
}if($(".formlanding").length&&$(window).scrollTop()>0){$(".secondary-nav").addClass("fixed")
}getNavDetail()
}}}if($(window).scrollTop()>0){$(".breadCrumb").addClass("scrolling")
}$(window).resize(function(){headlinePos();
SetHeaderHeight();
b();
onScroll();
if($(window).scrollTop()>0){$(".breadCrumb").addClass("scrolling")
}if(window.innerWidth<=800){collapseMenu();
calcHeight_snav()
}else{getNavDetail();
if(navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0){$(".content-container").css("padding-top","0")
}else{if($(window).scrollTop()<40){$(".content-container").css("padding-top","initial")
}}}});
if(window.innerWidth<=640){headlinePos()
}$(window).scroll(function(){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$("#truste-consent-track").css("height","auto");
if($(window).width()<800){$("#consent_blackbar").css("margin-top","45px")
}}}else{if($(window).scrollTop()>0){if($(".secondary-nav ul").length>0){$("#truste-consent-track").height(0);
$("#consent_blackbar").css("margin-top","0px")
}}}if(window.innerWidth<800){if($(".secondary-nav").hasClass("noLinks")){if($(window).scrollTop()==0){$(".content-container").css("padding-top","0")
}}if(!$(".secondary-page-nav").length){if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}}if(window.innerWidth<=640){if($(window).scrollTop()==0){if($(".secondary-nav").hasClass("noLinks")){$(".secondary-nav").removeClass("hideHeading")
}getNavDetail();
if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("stayTop");
$(".secondary-nav").removeClass("hideHeading");
if(!$(".secondary-page-nav").length){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}}else{if($(window).scrollTop()>0){getNavDetail();
if($(".secondary-nav ul").length>0){if(!$(".secondary-page-nav").length>0){$(".secondary-nav").addClass("hideHeading");
$(".secondary-nav").removeClass("stayTop")
}if(!$(".secondary-page-nav").length){if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}}}}}});
if(window.innerWidth<800){if(!$(".secondary-page-nav").length){if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}$(window).on("scroll",calcHeight_snav);
$(window).on("scroll",onScroll);
$(window).on("resize",onScroll)
}onScroll();
$(window).on("scroll",onScroll);
$(window).on("resize",onScroll);
$(window).on("load",onScroll)
});
function headlinePos(){if(window.innerWidth<=640){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("stayTop");
$(".secondary-nav").removeClass("hideHeading")
}}else{if($(window).scrollTop()>0){if(!$(".secondary-page-nav").length>0){$(".secondary-nav").addClass("hideHeading");
$(".secondary-nav").removeClass("stayTop")
}}}}else{if(window.innerWidth>640){$(".secondary-nav").removeClass("stayTop");
$(".secondary-nav").removeClass("hideHeading")
}}}function SetHeaderHeight(){if(window.innerWidth>800){if($(".secondary-nav .snav_left ul").length>0){$(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true)+$(".secondary-nav .snav_left ul").outerHeight(true))
}else{if($(".secondary-nav .snav_right .cta a").length<2){$(".secondary-nav .snav_right").addClass("singleLinkRight")
}$(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true)+$(".secondary-nav .snav_left ul").outerHeight(true))
}}else{if($(".secondary-nav .snav_right .cta a").length<1){$(".secondary-nav .snav_left").addClass("noCtaLink")
}else{if($(".secondary-nav .snav_right .cta a").length<2){$(".secondary-nav .snav_right").addClass("singleLinkCenter")
}}$(".snav_right").removeAttr("style");
if($(".secondary-nav .snav_left ul li").length<1){}}}function collapseMenu(){$(".secondary-nav ul li a").parent("li").hide();
$(".secondary-nav ul li a.active").parent("li").show()
}function calcHeight_snav(){var a=0;
if($(".secondary-nav").is(":visible")==true){a=$(".secondary-nav").height()
}}function onScroll(){getNavDetail();
var b=0;
if(window.innerWidth<801){if(!$(".secondary-page-nav").length){b=$(window).scrollTop()+getAnchortop[0]+50
}else{b=$(window).scrollTop()+200
}}else{if(window.innerWidth<1001){b=$(window).scrollTop()+getAnchortop[0]+$(".secondary-nav").outerHeight(true)+10
}else{if(!$(".secondary-page-nav").length){b=$(window).scrollTop()+getAnchortop[0]+70
}else{b=$(window).scrollTop()+220
}}}if(window.innerWidth>800){if($(window).scrollTop()<40){SetHeaderHeight();
$(".content-container").css("padding-top",0)
}}for(var a=0;
a<getAnchortop.length;
a++){if(b>getAnchortop[a]-50){$(".secondary-nav ul li a").removeClass("active");
$(".secondary-nav ul li a[href='#"+getAnchorName[a]+"']").addClass("active")
}}}$(window).resize(function(){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$("#truste-consent-track").css("height","auto");
if($(window).width()<800){$("#consent_blackbar").css("margin-top","45px")
}else{$("#consent_blackbar").css("margin-top","0")
}}}else{if($(window).scrollTop()>0){if($(".secondary-nav ul").length>0){$("#truste-consent-track").height(0);
$("#consent_blackbar").css("margin-top","0px")
}}}});
$(window).load(function(){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$("#truste-consent-track").css("height","auto");
if($(window).width()<800){$("#consent_blackbar").css("margin-top","45px")
}else{$("#consent_blackbar").css("margin-top","0")
}}}else{if($(window).scrollTop()>0){if($(".secondary-nav ul").length>0){$("#truste-consent-track").height(0);
$("#consent_blackbar").css("margin-top","0px")
}}}});
$(document).ready(function(){if($(".secondary-page-nav").length){$(".section-custom.eventsBanner").parent().addClass("clearfix");
$(".section-custom.homeBanner").parent().addClass("clearfix");
$(".section-custom.eventsBanner").css("margin","0");
$(".section-custom.homeBanner").css("margin","0")
}});
$(window).scroll(function(){if($(".secondary-page-nav").length){if($(window).scrollTop()+$(".breadCrumb").height()>$(".pageHeaderNav").offset().top+$(".pageHeaderNav h2").height()){$(".secondary-page-nav").addClass("fixed");
if($(window).width()<800){$(".secondary-page-nav").removeClass("stayTop");
$(".secondary-page-nav").addClass("hideHeading")
}}else{$(".secondary-page-nav").removeClass("fixed");
if($(window).width()<800){$(".secondary-page-nav").addClass("stayTop");
$(".secondary-page-nav").removeClass("hideHeading")
}}}});
function getUrlParameter(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var c=new RegExp("[\\?&]"+a+"=([^&#]*)");
var b=c.exec(location.search);
return b===null?"":decodeURIComponent(b[1].replace(/\+/g," "))
}function fireTechOmniture(h){var j=1;
var a="";
var d="";
var b=0;
var f=0;
b=getUrlParameter("start");
d=getUrlParameter("num");
a=getUrlParameter("q");
if(b>0){j=(b/d)+1
}var e="";
var c=true;
if($(".search-summary-left p span").eq(1).length){c=false;
e=$(".search-summary-left p span").eq(1).html()
}var g={};
g.pageload=h;
g.q=a;
g.total_result=e;
g.no_result=c;
g.page_number=j;
g.items_per_page=d;
h=false;
if(typeof omniture_setTechSearch!="undefined"){omniture_setTechSearch(g)
}}function fireOmniture(l,m){var p=1;
var a="";
var d="";
var h="";
var c=0;
var j=0;
c=getUrlParameter("start");
h=getUrlParameter("num");
a=getUrlParameter("q");
d=getUrlParameter("tab");
if(d=="mainvmware"){d="vmware.com"
}else{if(d=="supportSearch"){d="support"
}}if(c>0){p=(c/h)+1
}var g="";
var e=true;
if($(".search-summary-left p span").eq(1).length){e=false;
g=$(".search-summary-left p span").eq(1).html()
}var f="";
var r="";
if($("vm-bestbet .search-reccomended").length){r=$("vm-bestbet .search-reccomended").size()
}else{r=""
}var o=[];
var b=[];
var n=[];
$(".products .checkbox input:checked").each(function(){o.push($(this).attr("name"))
});
$('.category .checkbox input[data-model="vmsearchcategory"]:checked').each(function(){b.push($(this).attr("name"))
});
$('.category .checkbox input[data-model="filetype"]:checked').each(function(){n.push($(this).attr("name"))
});
var k={};
k.pageload=l;
k.search_button=m;
k.q=a;
k.total_result=g;
k.no_result=e;
k.total_recommand=r;
k.page_number=p;
k.tab=d;
k.product=o;
k.category=b;
k.type=n;
k.items_per_page=h;
l=false;
m=false;
if(typeof omniture_setSearch!="undefined"){omniture_setSearch(k)
}}$(document).ready(function(){var b=false;
var a=false;
$(document).on("click","span#basic-addon1, #basic-addon1 i.fa-search",function(){a=true;
b=false;
setTimeout(function(){if(window.location.href.indexOf("/search.html")>-1){fireOmniture(b,a)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(b)
}},3000)
});
$(document).on("click",".filter-select__item",function(){a=true;
b=false;
setTimeout(function(){if(window.location.href.indexOf("/search.html")>-1){fireOmniture(b,a)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(b)
}adobe.target.getOffer({mbox:"target-global-mbox",success:function(c){adobe.target.applyOffer({mbox:"target-global-mbox",offer:c})
},error:function(c,d){console.log("Request failed",c,d)
}})
},3000)
});
$(document).on("click","#tech_table .search-result a , vm-results .search-result h4 a,vm-bestbet .search-reccomended h4 a",function(){b=false;
a=false;
if(window.location.href.indexOf("/search.html")>-1){fireOmniture(b,a)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(b)
}});
$(document).on("click",".select-option ul li a , #applyFilters,#resetFilters,.filter-select-addon,.search-filter-tabs,.remove-srchItem,.search-summary-left.pull-left p a,.search-summary-right.pull-right p a ,.search-pagination li a",function(){b=false;
a=false;
setTimeout(function(){if(window.location.href.indexOf("/search.html")>-1){fireOmniture(b,a)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(b)
}},3000)
});
$('#fixed-search-nav input[type="text"]').keypress(function(d){b=false;
a=false;
var c=d.which;
if(c==13){setTimeout(function(){if(window.location.href.indexOf("/search.html")>-1){fireOmniture(b,a)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(b)
}},3000)
}});
$(document).on("keypress",'#fixed-search-nav input[type="text"]',function(d){b=false;
a=false;
var c=d.which;
if(c==13){setTimeout(function(){if(window.location.href.indexOf("/search.html")>-1){fireOmniture(b,a)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(b)
}},3000)
}})
});
$(window).load(function(){pageLoad=true;
buttonClick=false;
if(window.location.href.indexOf("/search.html")>-1){fireOmniture(pageLoad,buttonClick)
}if(window.location.href.indexOf("/techpapers.html")>-1){fireTechOmniture(pageLoad)
}});
$(document).ready(function(){var f=$("form#globalsearch").attr("action");
var e="";
if(typeof f!="undefined"){if(window.location.href.indexOf("-uat")>-1){f=f.replace("//www.vmware.com","//www-uat.vmware.com")
}else{if(window.location.href.indexOf("-stage")>-1){f=f.replace("//www.vmware.com","//www-stage.vmware.com")
}else{f=f
}}if(f.indexOf(".html#/")>-1){e=f.replace(".html#/",".html")
}else{e=f
}$("form#globalsearch").attr("action",e)
}if(window.location.href.indexOf("/brand")<=-1){freezeframe=function(){};
freezeframe.prototype.freeze=function(){return true
}
}if($(".demandgen").length){$(".wrapper").addClass("demand-gen")
}$('<div id="consent_blackbar"></div>').prependTo("body");
if($(".business-card").length){$("#consent_blackbar").hide()
}if($(".holPar").length){$("#consent_blackbar").hide()
}if($(".wrapper-brand").length){$("#consent_blackbar").hide()
}$(document).on("click",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
$(document).on("touchstart",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
$(document).on("tap",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
if($(window).width()>350){if($(".inbeddedvideo").find(".autoplay").length>0){$(".inbeddedvideo .l2_banner_content").hide()
}}$(".worldwide-region-list-content .geo-link#ru").parent().addClass("ru-font");
$(".linklist-simple a").each(function(){$(this).attr("title",$(this).text())
});
$(".tech_inner_block h4").each(function(p,r){var s=$(this).text();
$(this).html(s)
});
$(".comparisonTable .tooltip_container [data-toggle='tooltip']").each(function(){if($(this).length>0){var p=$(this).attr("data-original-title");
$(this).attr("title",p);
$(this).tooltip()
}});
function k(s){var r=s+"=";
var u=decodeURIComponent(document.cookie);
var p=u.split(";");
for(var t=0;
t<p.length;
t++){var v=p[t];
while(v.charAt(0)==" "){v=v.substring(1)
}if(v.indexOf(r)==0){return v.substring(r.length,v.length)
}}return""
}var o=k("cs-product-solution");
var d="";
var g="";
var j="";
var n="";
var h="";
if(o!==""){if(o.indexOf(",")!==-1){d=o.split(",");
g=d[0];
j=d[1];
if(g.indexOf("product=")!==-1){n=g
}if(j.indexOf("solution=")!==-1){h=j
}}else{d=o
}}var b=$("meta[property=cs-product]").attr("content");
var a=$("meta[property=cs-solution]").attr("content");
var c;
if(typeof(b)=="undefined"&&typeof(a)!=="undefined"){if(n!==""){c=n+",solution="+a
}else{if(d!==""&&d.indexOf("product=")!==-1){c=d+",solution="+a
}else{c="solution="+a
}}}if(typeof(a)=="undefined"&&typeof(b)!=="undefined"){if(h!==""){c="product="+b+","+h
}else{if(d!==""&&d.indexOf("solution=")!==-1){c="solution="+a+","+d
}else{c="product="+b
}}}if(typeof(a)!=="undefined"&&typeof(b)!=="undefined"){c="product="+b+",solution="+a
}var m=new Date();
m.setDate(m.getDate()+30);
if(typeof(b)!=="undefined"||typeof(a)!=="undefined"){document.cookie="cs-product-solution="+c+";path=/;expires="+m
}$(".wrapper .content-container a[href*='#']:not([href='#'])").click(function(){if(!$(this).closest(".secondary-page-nav").length&&!$(this).closest(".expandCollapseContainer").length&&!$(this).closest(".carouselHeader").length&&!$(this).closest(".tabbedContentContainer").length){var p=$(this).attr("href");
if(typeof p!==typeof undefined){var r=$(this).attr("href").split("#")[1];
if($(this).attr("href").split("#")[0]==""){var t="#"+r;
var s;
($(".fixed-header").length&&$(".top-navigation").length)?s=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight()+$(".fixed-header").innerHeight()+$(".top-navigation").innerHeight():s=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight();
if($(t).length){$("html, body").animate({scrollTop:$(t).offset().top-s},1000)
}}}}});
var l=window.location.href.substring(window.location.href.lastIndexOf("search.html#/"));
if(l=="search.html#/"){if(window.location.href.indexOf("?q=")<=-1){history.pushState(null,null,"/search.html#")
}}$(".tooltip-holder [data-toggle='tooltip']").each(function(){if($(this).length>0){var p=$(this).attr("data-original-title");
$(this).attr("title",p);
$(this).tooltip()
}})
});
$(document).on("click","#tech_specs_collapse",function(){$(this).parent().parent().find(".col-md-12").find(".tech_collapse.collapse_view").toggleClass("visible");
resizeBlock_tech_specs()
});
$(document).on("click","#overview_collapse",function(){$("#overview .collapse_view").toggleClass("visible")
});
$(document).on("click","#collapse_features",function(){$(this).children("span").html("collapse features");
$(".hidden_features").show()
});
$(document).on("click","#collapse_features.expanded",function(){$(this).children("span").html("see all features");
$(".hidden_features").hide()
});
$(document).on("click",".price_display_dynamic",function(){var c=$(this).data("randomid");
var b=$(this).data("colltext");
var a=$(this).data("exptext");
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$(this).parent().parent().children(".hidden-pricing").show()
});
$(document).on("click",".price_display_dynamic.expanded",function(){var c=$(this).data("randomid");
var b=$(this).data("colltext");
var a=$(this).data("exptext");
$(this).removeClass("expanded");
$(this).children("span").html(a);
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).parent().parent().children(".hidden-pricing").hide()
});
$(document).on("mouseenter",".module .share a",function(){$(this).next().show()
});
$(document).on("mouseleave",".module .share",function(){$(this).children(".share-tip").hide()
});
function resizeBlock_tech_specs(){$(".tech_center_box").removeAttr("style");
var a="";
$(".right-border").each(function(){var d=$(this).find(".tech_center_box").height();
var c=$(this).prev().find(".tech_center_box").height();
var b=$(this).next().find(".tech_center_box").height();
a=Math.max(d,c,b);
$(this).find(".tech_center_box").css("height",a+5);
$(this).prev().find(".tech_center_box").css("height",a+5);
$(this).next().find(".tech_center_box").css("height",a+5)
})
}resizeBlock_tech_specs();
$(document).ready(function(){resizeBlock_tech_specs()
});
$(window).resize(function(){moduleHeight();
resizeBlock_tech_specs();
setTimeout(moduleHeight,50);
if(window.innerWidth>992){combinationCard()
}if(window.innerWidth>801){if(!$(".secondary-nav").length>0){$(".content-container").removeAttr("style")
}}else{if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}}});
function moduleHeight(){$(".module").removeAttr("style");
var b=new Array();
var a="";
$(".module").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".module").css("height",a+20);
$(".miniverticalcontentcontainer .section.target.parbase").css("height",a+35)
}moduleHeight();
$(document).ready(function(){moduleHeight();
if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}$(".two_col_exp_col").addClass("collapsed");
$(document).on("click",".two_col_exp_col_aTag",function(){var d=$(this).parent().data("exp_txt");
var b=$(this).parent().data("col_txt");
if($(this).parent().hasClass("collapsed")){$(this).parent().find("i").removeClass("fa-arrow-circle-down");
$(this).parent().find("i").addClass("fa-arrow-circle-up");
$(this).parent().find("span").text(b)
}else{$(this).parent().find("i").removeClass("fa-arrow-circle-up");
$(this).parent().find("i").addClass("fa-arrow-circle-down");
$(this).parent().find("span").text(d)
}$(this).parent().toggleClass("collapsed");
var c=$(this).parent().hasClass("collapsed");
$(this).parent().prev().find(".row").find(".hidden_part").removeClass("collapse_view");
if(c){$(this).parent().prev().find(".row").find(".hidden_part").addClass("collapse_view")
}$(this).parent().prev().find(".row").find(".hidden_part").find(".section").each(function(e){$(this).parent().removeClass("hidden");
$(this).parent().addClass("visible");
if(c){$(this).parent().removeClass("visible");
$(this).parent().addClass("hidden")
}});
resizeFunc();
$(".thumb-details").each(function(){if(!($(this).hasClass("rollover"))){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var e=$(this).height();
$(this).children(".col-md-1").css("height",e);
$(this).children(".col-md-10").css("height",e)
}})
});
var a=$("div.verticalContainer").data("minivercontainer");
if(a=="zero"){$("div[data-emptytext='Mini Vertical Content Card']").addClass("reset_hgt_to_zero")
}if($("#expand_collapse_collapse.collapse_content").hasClass("collapse_tables")){$(document).on("click",".span-heading-table.exp-col-container a",function(){var e=$(this).data("parent");
var c=e.split("#accordion");
var b=c[1];
var d=$(this).data("exptext");
$("#"+b+" .collapse_content span").html(d);
$("#"+b+" .collapse_content").removeClass("table_expanded");
$("#"+b+" .collapse_content").removeClass("expanded");
$("#"+b+" .collapse_content").addClass("collapse_tables");
$("#"+b+" .collapse_content i").attr("class","fa fa-arrow-circle-down")
})
}$(document).ready(function(){if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip()
}});
$("div>button.green").click(function(){var c=$(this).data("href");
var f=$(this).data("tgt");
var b=$(this).data("srcvalue");
if(b=="pageheader"||b=="stickysection"){if(!(c.endsWith(".html")||c.endsWith(".htm"))&&(c.startsWith("/content"))){if(c.startsWith("/content/dam")){c=c
}else{c=c+".html"
}}else{if((c.startsWith("http"))||(c.startsWith("https"))){c=c
}}if(f){window.location=c
}else{window.open(c)
}}else{var e=window.location.origin;
var d="";
if(f=="self"){d=e+c;
window.location.replace(d)
}else{d=c;
window.open(d,"_blank")
}}});
$(document).on("click",".price_display_dynamic",function(){var b=$(this).data("randomid");
$(".hidden_part"+b).toggleClass("collapse_view")
})
});
$(document).ready(function(){$(".footer-links-group .fb-links span:first-child").each(function(){var b=$(this).text();
var a=b.split(" ");
cpyyr=new Date();
x=cpyyr.getFullYear();
for(i=0;
i<a.length;
i++){if((!(a[i].indexOf("1")))||(!(a[i].indexOf("2")))||(!(a[i].indexOf("3")))){$(this).text(b.replace(a[i],x))
}}})
});
$(document).ready(function(){$("#footertext_year ul li:first-child").each(function(){var b=$(this).text();
var a=b.split(" ");
cpyyr=new Date();
x=cpyyr.getFullYear();
for(i=0;
i<a.length;
i++){if((!(a[i].indexOf("1")))||(!(a[i].indexOf("2")))||(!(a[i].indexOf("3")))){$(this).text(b.replace(a[i],x))
}}})
});
$(document).ready(function(){$(".page-footer .page-footer-copyright").each(function(){var b=$(this).text();
var a=b.split(" ");
cpyyr=new Date();
x=cpyyr.getFullYear();
for(i=0;
i<a.length;
i++){if((!(a[i].indexOf("1")))||(!(a[i].indexOf("2")))||(!(a[i].indexOf("3")))){$(this).text(b.replace(a[i],x))
}}})
});
$(document).ready(function(){$(".exp_col_hide_show").addClass("collapsed_data");
var d=$(window).height();
var b=$(".content-container").height();
var c=$(".footer-container").height();
var a=d-c;
if(d<=600||d>=600){if($(window).width()<800||$(window).width()>800){$(".footer-container").css("position","relative")
}}});
$(document).on("click",".collapse_content_wid",function(){var b=$(this).data("randomincval");
var a=b-1000;
var c=$(this).data("collpseval");
$(this).addClass("expanded");
$(this).children("#exptext"+a).html(c);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up")
});
$(document).on("click",".collapse_content_wid.expanded",function(){var b=$(this).data("randomincval");
var a=b-1000;
var c=$(this).data("expval");
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("#exptext"+a).html(c)
});
$(document).on("click","#overview_collapse_wid",function(){var b=$(this).data("randomincval");
var a=b-1000;
$("#"+a+" .collapse_view").toggleClass("visible")
});
$(document).on("click",".exp_col_hide_show",function(){var c=$(this).data("colltext");
var b=$(this).data("exptext");
var a=$(this).data("randomid");
$(this).removeClass("collapse_tables");
$(this).addClass("table_expanded");
$("#accordion"+a+" .panel-collapse.collapse").addClass("in");
$("#accordion"+a+' .panel-collapse:not(".in")').collapse("show");
$("#accordion"+a+" .panel-title.span-heading-table > a i").removeClass("fa-plus");
$("#accordion"+a+" .panel-title.span-heading-table > a i").addClass("fa-close");
if($(this).hasClass("collapsed_data")){$(this).children("span").html(c);
$(this).find("i").removeClass("fa fa-arrow-circle-down");
$(this).find("i").addClass("fa fa-arrow-circle-up");
$(".exp_col_hide_show").removeClass("collapsed_data")
}else{$(this).children("span").html(b);
$(this).find("i").removeClass("fa fa-arrow-circle-up");
$(this).find("i").addClass("fa fa-arrow-circle-down");
$(".exp_col_hide_show").addClass("collapsed_data")
}});
$(document).on("click",".table_expanded",function(){$(this).removeClass("table_expanded");
var d=$(this).data("colltext");
var b=$(this).data("exptext");
var a=$(this).data("randomid");
$("#accordion"+a+" .panel-title.span-heading-table > a i").removeClass("fa-close");
$("#accordion"+a+" .panel-title.span-heading-table > a i").addClass("fa-plus");
$(this).children("span").html(b);
$("#accordion"+a+" .panel-collapse.in").collapse("hide");
$(this).addClass("collapse_tables");
var c=$("#accordion"+a).offset().top-122;
$("html, body").animate({scrollTop:c},900)
});
$(document).on("click",".panel-title.span-heading-table > a",function(){if($(this).children("i").hasClass("fa-close")){$(this).children("i").removeClass("fa-close");
$(this).children("i").addClass("fa-plus")
}else{if($(this).children("i").hasClass("fa-plus")){var a=$(this).data("parent");
$(a+" .panel-title.span-heading-table > a i").removeClass("fa-close");
$(a+" .panel-title.span-heading-table > a i").addClass("fa-plus");
$(this).children("i").removeClass("fa-plus");
$(this).children("i").addClass("fa-close")
}}});
$(document).ready(function(){$(".faqAnsBox p a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".faqAnsBox ul li a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".faqAnsBox ol li a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".tech_inner_block a").append(' <i class="fa fa-angle-double-right inline"></i>')
});
$(document).on("click","#tech_specs_collapse",function(){var a=$(this).data("incrandomnumber");
var b=$(this).data("collapsetextts");
var c=a-1000;
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$("#tech_specs-containerDiv"+c+".tech_specs-container .collapse_view").toggleClass("visible")
});
$(document).on("click","#tech_specs_collapse.expanded",function(){var a=$(this).data("incrandomnumber");
var b=$(this).data("expandtextts");
var c=a-1000;
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("span").html(b)
});
$(document).on("click","#overview_collapse_flc",function(){var b=$(this).data("collpseval");
var a=$(this).data("randomval");
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$("#features"+a+" .hidden_features").show()
});
$(document).on("click","#overview_collapse_flc.expanded",function(){var b=$(this).data("expval");
var a=$(this).data("randomval");
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("span").html(b);
$("#features"+a+" .hidden_features").hide()
});
$(document).ready(function(){if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}if($("div.supportList").length){$(".supportList .selectpicker").selectpicker("deselectAll")
}});
function combinationCard(){$(".module_container").each(function(){var a=$(this).outerHeight();
var d=$(this).children().children(".img-left").outerHeight();
var c=$(this).children(".content-wrapper").outerHeight();
var b=a-d;
if(c>d){$(this).children().children(".img-left").css("margin-top",b/2)
}})
}$(window).load(function(){$(".supportList select.selectpicker").children("option").each(function(c){var b=0;
var a=$(this).val();
b=c-1;
$(".supportList .bootstrap-select.btn-group .dropdown-menu li a").eq(b).attr("href",a)
});
$(document).on("click",".supportList .bootstrap-select.btn-group .dropdown-menu li",function(){var a=$(this).children("a").attr("href");
document.location=a
})
});
$(document).ready(function(){var a=$(".alt-background");
for(i=0;
i<a.length;
i++){backgroudUrl=$(a[i]).css("background-image");
imageUrl=backgroudUrl.replace('url("',"").replace('")',"");
var b=new Image();
b.src=imageUrl;
if(b.width==0){$(a[i]).find(".alt-text").attr("style","display : block !important;")
}else{$(a[i]).find(".alt-text").attr("style","display : none !important;")
}}});
$(document).ready(function(){$("body").hover(function(){$(".nav>li>a").blur()
},function(){})
});
$(document).on("click","#close_video",function(){$(".overlay-brightcove, .modal1").hide();
$(".getVideo object").remove();
$(".getVideo iframe").remove();
if($(".video-overlay ").hasClass("darkenMP4video")){$(".video-overlay ").removeClass("darkenMP4video")
}});
$(document).ready(function(){$(".customerBanner").parents(".section").children("*").css("transition","none")
});
$(document).on("click",".collapse_content",function(){if(!$(this).hasClass("expanded")&&!$(this).hasClass("table_expanded")){$(this).parents(".section").css({"float":"left",width:"100%"})
}else{if($(this).hasClass("expanded")){$(this).parents(".section").removeAttr("style")
}else{if($(this).hasClass("table_expanded")){$(this).parents(".section").removeAttr("style")
}}}});
$(document).on("click","#close_video",function(){$(".getVideo").parent().css("display","block")
});
$(document).on("click",".overlay-brightcove",function(){$(".getVideo").parent().css("display","block")
});
function tableInnerHeight(){$(".table-colspan").each(function(){$(this).find(".colspan-cells").removeAttr("style");
$(this).find(".colspan-cells p").removeAttr("style");
var d=new Array();
var c="";
$(this).find(".colspan-cells").each(function(){d.push($(this).outerHeight())
});
c=Math.max.apply(Math,d);
$(this).find(".colspan-cells").css("height",c);
var a=$(this).find(".colspan-cells:first p:first").outerHeight();
var b=$(this).find(".colspan-cells:first p:last").outerHeight();
$(this).find(".colspan-cells:last p:first").css("height",a);
$(this).find(".colspan-cells:last p:last").css("height",b)
})
}function ImageLargeView(c){$(".getVideo").parent().css("display","none");
var d=$(c).attr("largeimagename");
var a=$(c).attr("altText");
if(d!=undefined&&d!=""){$(".getImage").show();
var b='<img src="'+d+'" alt="'+a+'" />';
$(".getImage").html(b);
$(".imgnewtab").show();
$(".imgnewtab").attr("href",d);
setModal1MaxHeight();
$(".modal1, .overlay-brightcove").show()
}}function setModal1MaxHeight(){if($(".getImage img").length){var a=$(window).height();
var b=0;
if(a<450){b=a-100
}else{b=500
}$(".outer-container").css({"overflow-y":"auto",height:"auto","padding-bottom":"0px","max-height":b+"px"})
}}$(window).resize(function(){resizeBlock_tech_specs();
tableInnerHeight();
setTimeout(moduleHeight,50);
if(window.innerWidth>992){combinationCard()
}if(window.innerWidth>801){if(!$(".secondary-nav").length>0){$(".content-container").removeAttr("style")
}}else{if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}}setModal1MaxHeight()
});
$(window).load(function(){sortFilter();
if(window.innerWidth>992){combinationCard()
}$(".wrapper .content-container a").each(function(){if($(this).attr("href")==document.location.hash){$(this).click()
}});
if(window.location.hash){if(window.location.href.split("#")[1].indexOf("?")>-1){var d=window.location.href;
var b=d.split("#")[1];
var a;
if(b.indexOf("?")>-1){a=b.split("?")[0]
}else{a=d.split("#")[1]
}var e="#"+a;
var c;
($(".fixed-header").length&&$(".top-navigation").length)?c=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight()+$(".fixed-header").innerHeight()+$(".top-navigation").innerHeight():c=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight();
if($(e).length){$("html, body").animate({scrollTop:$(e).offset().top-c-90},1000)
}if($(e).length&&$(window).width()<=1000&&$(window).width()>800){$("html, body").animate({scrollTop:$(e).offset().top-c},1000)
}if($(e).length&&($(window).width()<=800)){$("html, body").animate({scrollTop:$(e).offset().top-c+50},1000)
}}}$(".wrapper .content-container a[href*='#']:not([href='#'])").click(function(){if(!$(this).closest(".secondary-page-nav").length&&!$(this).closest(".expandCollapseContainer").length&&!$(this).closest(".carouselHeader").length&&!$(this).closest(".tabbedContentContainer").length){var f=$(this).attr("href");
if(typeof f!==typeof undefined){var g=$(this).attr("href").split("#")[1];
if($(this).attr("href").split("#")[0]==""){var j="#"+g;
var h;
($(".fixed-header").length&&$(".top-navigation").length)?h=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight()+$(".fixed-header").innerHeight()+$(".top-navigation").innerHeight():h=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight();
if($(j).length){$("html, body").animate({scrollTop:$(j).offset().top-h},1000)
}}}}})
});
$(window).load(function(){if($(".table-responsive").length){$(".table-responsive td").each(function(){if($(".table-responsive th").length>0){if($(this).data("th").indexOf("href")>-1){$(this).prepend($(this).data("th")).addClass("anchor-link-mobile")
}}})
}if($(".comparisonTable").length){$(".comparisonTable .rTableCell span").each(function(){$(this).html($(this).text().replace("&lt","<").replace("&gt",">"))
})
}$(".pricingtabledisplay .tooltip_container [data-toggle='tooltip']").each(function(){if($(this).length>0){var a=$(this).attr("data-original-title");
$(this).attr("title",a);
$(this).tooltip()
}});
$(".pricingtabledynamic .tooltip_container [data-toggle='tooltip']").each(function(){if($(this).length>0){var a=$(this).attr("data-original-title");
$(this).attr("title",a);
$(this).tooltip()
}});
if(window.location.href.indexOf("/ja/")>-1||window.location.href.indexOf("/jp/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("選択されていません")
}})
}if(window.location.href.indexOf("/de/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Keine Auswahl")
}})
}if(window.location.href.indexOf("/at/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Keine Auswahl")
}})
}if(window.location.href.indexOf("/ch/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Keine Auswahl")
}})
}if(window.location.href.indexOf("/fr/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Aucune sélection")
}})
}if(window.location.href.indexOf("/ca-fr/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Aucune sélection")
}})
}if(window.location.href.indexOf("/la/")>-1||window.location.href.indexOf("/latam/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("No se seleccionó nada")
}})
}if(window.location.href.indexOf("/hu/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Válasszon")
}})
}if(window.location.href.indexOf("/tr/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Seçilmedi")
}})
}if(window.location.href.indexOf("/sv/")>-1||window.location.href.indexOf("/se/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Inget val")
}})
}if(window.location.href.indexOf("/ru/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Значение не выбрано")
}})
}if(window.location.href.indexOf("/pl/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Niczego nie wybrano")
}})
}if(window.location.href.indexOf("/nl/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Niets geselecteerd")
}})
}if(window.location.href.indexOf("/it/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Nessuna selezione effettuata")
}})
}if(window.location.href.indexOf("/es/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("No se ha seleccionado nada")
}})
}if(window.location.href.indexOf("/ko/")>-1||window.location.href.indexOf("/kr/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("항목이 선택되지 않았습니다")
}})
}if(window.location.href.indexOf("/zh_cn/")>-1||window.location.href.indexOf("/cn/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("未选择职位")
}})
}if(window.location.href.indexOf("/zh_tw/")>-1||window.location.href.indexOf("/tw/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("未選擇")
}})
}if(window.location.href.indexOf("/cs/")>-1||window.location.href.indexOf("/cz/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Nevybráno")
}})
}if(window.location.href.indexOf("/pt_br/")>-1||window.location.href.indexOf("/br/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Nenhuma função selecionada")
}})
}if(window.location.href.indexOf("/pt/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Nada foi seleccionado")
}})
}if(window.location.href.indexOf("/fi/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Ei valintaa")
}})
}if(window.location.href.indexOf("/da/")>-1||window.location.href.indexOf("/dk/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Ingen valgt")
}})
}if(window.location.href.indexOf("/no/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("Ingen valgt")
}})
}if(window.location.href.indexOf("/sa/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("لم يتم تحديد أي عناصر")
}})
}if(window.location.href.indexOf("/ae/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("لم يتم تحديد أي عناصر")
}})
}if(window.location.href.indexOf("/he/")>-1||window.location.href.indexOf("/il/")>-1){$("span.filter-option.pull-left").each(function(){if($(this).html().indexOf("Nothing selected")>-1){$(this).html("בחר אפשרות אחת")
}if($(this).html().indexOf("Select Country Code")>-1){$(this).html("מספר טלפון בעסק")
}})
}});
$(document).ready(function(){$(document).on("click",".show-details .close-tab",function(){$(".technostack").removeClass("opened")
})
});
$(window).load(function(){$(document).on("click",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
$(document).on("touchstart",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
$(document).on("tap",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
$(document).on("click",".inbeddedvideo .vjs-poster",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
if($(window).width()>350){if($(".inbeddedvideo").find(".autoplay").length>0){$(".inbeddedvideo .l2_banner_content").hide()
}}});
function sortFilter(){var a=setInterval(function(){if($(".tpsearch").length){$(".tpsearch .checkbox div:nth-child(1)").addClass("textSort");
$(".search-filter .ng-scope h4").parent().addClass("filterCategory");
$(".filterCategory").each(function(){var d=$(this);
var c=d.find(".checkbox").get();
c.sort(function(f,e){var h=$(f).find(".textSort").text().toUpperCase();
var g=$(e).find(".textSort").text().toUpperCase();
return(h<g)?-1:(h>g)?1:0
});
$.each(c,function(e,f){d.append(f)
})
});
if($(".tpsearch .search-filter").css("opacity")==0){$(".tpsearch .search-filter").css("opacity","1")
}b()
}},1000);
function b(){clearInterval(a)
}}$(document).on("click","#applyFilters,#resetFilters,.search-select-addon,.remove-srchItem,.sort-box ul li a,.results-box ul li a,.search-pagination .textarea li a",function(){sortFilter()
});
$(document).on("change",'#fixed-search-nav input[type="text"]',function(){sortFilter()
});
$('#fixed-search-nav input[type="text"]').keypress(function(b){var a=b.which;
if(a==13){sortFilter()
}});
$(document).on("keypress",'#fixed-search-nav input[type="text"]',function(b){var a=b.which;
if(a==13){sortFilter()
}});
$(document).on("keypress",'#fixed-search-nav input[type="text"]',function(b){var a=b.which;
if(a==13){setTimeout(function(){adobe.target.getOffer({mbox:"target-global-mbox",success:function(c){adobe.target.applyOffer({mbox:"target-global-mbox",offer:c})
},error:function(c,d){console.log("Request failed",c,d)
}})
},2000)
}});
$(document).ready(function(){var a=$(".banner_small p").text().length;
var b=$(".l2_banner p").text().length;
if(a>=180){$(".l2_banner_content").css("margin-top","25px")
}if(window.innerWidth<800){if($(".banner-overlay").length){if(b>=180){$(".l2_banner_content").css("margin-top","25px")
}}$(".caurosel-desktop").remove()
}else{$(".caurosel-mobile").remove()
}$(".carousel-inner .item:first-child").addClass("active");
var c=$(".prodRedesign-caurosel .res_block ul li a span");
c.each(function(){var e=$(this).text();
if(window.innerWidth>768){if(e.length<80){return
}$(this).html(e.slice(0,80)+'<a href="javascript:void(0);" class="more"> ...</a>')
}if(window.innerWidth===768){if(e.length<150){return
}$(this).html(e.slice(0,150)+'<a href="javascript:void(0);" class="more"> ...</a>')
}if(window.innerWidth<768){if(e.length<40){return
}$(this).html(e.slice(0,40)+'<a href="javascript:void(0);" class="more"> ...</a>')
}var d="<div class='popupContent' style='display:none'>"+e+"</diV>";
$(this).append(d)
});
$("a.more",c).hover(function(d){d.preventDefault();
$(this).next().toggle();
$(this).parents("li").siblings("li").find("div.popupContent").hide()
})
});
$(window).load(function(){var a=$(".l2_banner .container-fluid.full-width").height()+"px";
var b=$(".l2_banner p").text().length;
if($(".l2_banner_img a img").length||$(".l2_banner_img a .img-largeView").length){if(window.innerWidth<800){if(b>=180){$(".l2_banner_img a img").css("margin-top",a);
$(".l2_banner_img a .img-largeView").css("margin-top",a)
}}else{$(".l2_banner_img a img").removeAttr("style");
$(".l2_banner_img a .img-largeView").removeAttr("style")
}}});
$(document).on("click",".overlay-brightcove",function(){if($("#close_video").length){$("#close_video").trigger("click")
}});
$(document).on("click","button.vjs-share-control.vjs-button",function(){$(".vjs-social-share-link.vjs-icon-twitter").removeClass("vjs-social-share-link").addClass("twitter-icon-custom")
});
$(document).ready(function(){$(".prodRedesign-leftContainer").each(function(){var a=$(this).height();
$(this).siblings(".prodRedesign-rightContainer").outerHeight(a)
})
});
$(document).ready(function(){setTimeout(function(){$("#_evh-button").removeAttr("tabindex");
$("#_evh-link").attr("tabindex","0")
},100);
$(".breadCrumb a").removeAttr("aria-current");
$(".breadCrumb a.active").attr("aria-current","page")
});
$(document).ready(function(){function a(){var c=0;
$(".threecolumncontainer .customerStoryBlock .cert_block").each(function(){if($(this).height()>c){c=$(this).height()
}});
$(".threecolumncontainer .customerStoryBlock .cert_block ").height(c)
}a();
$(window).resize(function(){$(".threecolumncontainer .customerStoryBlock .cert_block").height("");
a()
});
if($("form#securitysignup").length&&$("form#securitysignup").attr("action").indexOf("https")<0){var b=$("form#securitysignup").attr("action").replace("http","https");
$("form#securitysignup").attr("action",b)
}});
if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;
return new a()
}
}(function(c,b,a){var d={init:function(e,f){var g=this;
g.$elem=c(f);
g.options=c.extend({},c.fn.owlCarousel.options,g.$elem.data(),e);
g.userOptions=e;
g.loadContent()
},loadContent:function(){var g=this,f;
function e(k){var h,j="";
if(typeof g.options.jsonSuccess==="function"){g.options.jsonSuccess.apply(this,[k])
}else{for(h in k.owl){if(k.owl.hasOwnProperty(h)){j+=k.owl[h].item
}}g.$elem.html(j)
}g.logIn()
}if(typeof g.options.beforeInit==="function"){g.options.beforeInit.apply(this,[g.$elem])
}if(typeof g.options.jsonPath==="string"){f=g.options.jsonPath;
c.getJSON(f,e)
}else{g.logIn()
}},logIn:function(){var e=this;
e.$elem.data("owl-originalStyles",e.$elem.attr("style"));
e.$elem.data("owl-originalClasses",e.$elem.attr("class"));
e.$elem.css({opacity:0});
e.orignalItems=e.options.items;
e.checkBrowser();
e.wrapperWidth=0;
e.checkVisible=null;
e.setVars()
},setVars:function(){var e=this;
if(e.$elem.children().length===0){return false
}e.baseClass();
e.eventTypes();
e.$userItems=e.$elem.children();
e.itemsAmount=e.$userItems.length;
e.wrapItems();
e.$owlItems=e.$elem.find(".owl-item");
e.$owlWrapper=e.$elem.find(".owl-wrapper");
e.playDirection="next";
e.prevItem=0;
e.prevArr=[0];
e.currentItem=0;
e.customEvents();
e.onStartup()
},onStartup:function(){var e=this;
e.updateItems();
e.calculateAll();
e.buildControls();
e.updateControls();
e.response();
e.moveEvents();
e.stopOnHover();
e.owlStatus();
if(e.options.transitionStyle!==false){e.transitionTypes(e.options.transitionStyle)
}if(e.options.autoPlay===true){e.options.autoPlay=5000
}e.play();
e.$elem.find(".owl-wrapper").css("display","block");
if(!e.$elem.is(":visible")){e.watchVisibility()
}else{e.$elem.css("opacity",1)
}e.onstartup=false;
e.eachMoveUpdate();
if(typeof e.options.afterInit==="function"){e.options.afterInit.apply(this,[e.$elem])
}},eachMoveUpdate:function(){var e=this;
if(e.options.lazyLoad===true){e.lazyLoad()
}if(e.options.autoHeight===true){e.autoHeight()
}e.onVisibleItems();
if(typeof e.options.afterAction==="function"){e.options.afterAction.apply(this,[e.$elem])
}},updateVars:function(){var e=this;
if(typeof e.options.beforeUpdate==="function"){e.options.beforeUpdate.apply(this,[e.$elem])
}e.watchVisibility();
e.updateItems();
e.calculateAll();
e.updatePosition();
e.updateControls();
e.eachMoveUpdate();
if(typeof e.options.afterUpdate==="function"){e.options.afterUpdate.apply(this,[e.$elem])
}},reload:function(){var e=this;
b.setTimeout(function(){e.updateVars()
},0)
},watchVisibility:function(){var e=this;
if(e.$elem.is(":visible")===false){e.$elem.css({opacity:0});
b.clearInterval(e.autoPlayInterval);
b.clearInterval(e.checkVisible)
}else{return false
}e.checkVisible=b.setInterval(function(){if(e.$elem.is(":visible")){e.reload();
e.$elem.animate({opacity:1},200);
b.clearInterval(e.checkVisible)
}},500)
},wrapItems:function(){var e=this;
e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
e.wrapperOuter=e.$elem.find(".owl-wrapper-outer");
e.$elem.css("display","block")
},baseClass:function(){var g=this,e=g.$elem.hasClass(g.options.baseClass),f=g.$elem.hasClass(g.options.theme);
if(!e){g.$elem.addClass(g.options.baseClass)
}if(!f){g.$elem.addClass(g.options.theme)
}},updateItems:function(){var g=this,f,e;
if(g.options.responsive===false){return false
}if(g.options.singleItem===true){g.options.items=g.orignalItems=1;
g.options.itemsCustom=false;
g.options.itemsDesktop=false;
g.options.itemsDesktopSmall=false;
g.options.itemsTablet=false;
g.options.itemsTabletSmall=false;
g.options.itemsMobile=false;
return false
}f=c(g.options.responsiveBaseWidth).width();
if(f>(g.options.itemsDesktop[0]||g.orignalItems)){g.options.items=g.orignalItems
}if(g.options.itemsCustom!==false){g.options.itemsCustom.sort(function(j,h){return j[0]-h[0]
});
for(e=0;
e<g.options.itemsCustom.length;
e+=1){if(g.options.itemsCustom[e][0]<=f){g.options.items=g.options.itemsCustom[e][1]
}}}else{if(f<=g.options.itemsDesktop[0]&&g.options.itemsDesktop!==false){g.options.items=g.options.itemsDesktop[1]
}if(f<=g.options.itemsDesktopSmall[0]&&g.options.itemsDesktopSmall!==false){g.options.items=g.options.itemsDesktopSmall[1]
}if(f<=g.options.itemsTablet[0]&&g.options.itemsTablet!==false){g.options.items=g.options.itemsTablet[1]
}if(f<=g.options.itemsTabletSmall[0]&&g.options.itemsTabletSmall!==false){g.options.items=g.options.itemsTabletSmall[1]
}if(f<=g.options.itemsMobile[0]&&g.options.itemsMobile!==false){g.options.items=g.options.itemsMobile[1]
}}if(g.options.items>g.itemsAmount&&g.options.itemsScaleUp===true){g.options.items=g.itemsAmount
}},response:function(){var g=this,f,e;
if(g.options.responsive!==true){return false
}e=c(b).width();
g.resizer=function(){if(c(b).width()!==e){if(g.options.autoPlay!==false){b.clearInterval(g.autoPlayInterval)
}b.clearTimeout(f);
f=b.setTimeout(function(){e=c(b).width();
g.updateVars()
},g.options.responsiveRefreshRate)
}};
c(b).resize(g.resizer)
},updatePosition:function(){var e=this;
e.jumpTo(e.currentItem);
if(e.options.autoPlay!==false){e.checkAp()
}},appendItemsSizes:function(){var g=this,e=0,f=g.itemsAmount-g.options.items;
g.$owlItems.each(function(h){var j=c(this);
j.css({width:g.itemWidth}).data("owl-item",Number(h));
if(h%g.options.items===0||h===f){if(!(h>f)){e+=1
}}j.data("owl-roundPages",e)
})
},appendWrapperSizes:function(){var f=this,e=f.$owlItems.length*f.itemWidth;
f.$owlWrapper.css({width:e*2,left:0});
f.appendItemsSizes()
},calculateAll:function(){var e=this;
e.calculateWidth();
e.appendWrapperSizes();
e.loops();
e.max()
},calculateWidth:function(){var e=this;
e.itemWidth=Math.round(e.$elem.width()/e.options.items)
},max:function(){var e=this,f=((e.itemsAmount*e.itemWidth)-e.options.items*e.itemWidth)*-1;
if(e.options.items>e.itemsAmount){e.maximumItem=0;
f=0;
e.maximumPixels=0
}else{e.maximumItem=e.itemsAmount-e.options.items;
e.maximumPixels=f
}return f
},min:function(){return 0
},loops:function(){var k=this,j=0,g=0,f,h,e;
k.positionsInArray=[0];
k.pagesInArray=[];
for(f=0;
f<k.itemsAmount;
f+=1){g+=k.itemWidth;
k.positionsInArray.push(-g);
if(k.options.scrollPerPage===true){h=c(k.$owlItems[f]);
e=h.data("owl-roundPages");
if(e!==j){k.pagesInArray[j]=k.positionsInArray[f];
j=e
}}}},buildControls:function(){var e=this;
if(e.options.navigation===true||e.options.pagination===true){e.owlControls=c('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)
}if(e.options.pagination===true){e.buildPagination()
}if(e.options.navigation===true){e.buildButtons()
}},buildButtons:function(){var f=this,e=c('<div class="owl-buttons"/>');
f.owlControls.append(e);
f.buttonPrev=c("<div/>",{"class":"owl-prev",html:f.options.navigationText[0]||""});
f.buttonNext=c("<div/>",{"class":"owl-next",html:f.options.navigationText[1]||""});
e.append(f.buttonPrev).append(f.buttonNext);
e.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(g){g.preventDefault()
});
e.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(g){g.preventDefault();
if(c(this).hasClass("owl-next")){f.next()
}else{f.prev()
}})
},buildPagination:function(){var e=this;
e.paginationWrapper=c('<div class="owl-pagination"/>');
e.owlControls.append(e.paginationWrapper);
e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(f){f.preventDefault();
if(Number(c(this).data("owl-page"))!==e.currentItem){e.goTo(Number(c(this).data("owl-page")),true)
}})
},updatePagination:function(){var l=this,f,k,j,h,g,e;
if(l.options.pagination===false){return false
}l.paginationWrapper.html("");
f=0;
k=l.itemsAmount-l.itemsAmount%l.options.items;
for(h=0;
h<l.itemsAmount;
h+=1){if(h%l.options.items===0){f+=1;
if(k===h){j=l.itemsAmount-l.options.items
}g=c("<div/>",{"class":"owl-page"});
e=c("<span></span>",{text:l.options.paginationNumbers===true?f:"","class":l.options.paginationNumbers===true?"owl-numbers":""});
g.append(e);
g.data("owl-page",k===h?j:h);
g.data("owl-roundPages",f);
l.paginationWrapper.append(g)
}}l.checkPagination()
},checkPagination:function(){var e=this;
if(e.options.pagination===false){return false
}e.paginationWrapper.find(".owl-page").each(function(){if(c(this).data("owl-roundPages")===c(e.$owlItems[e.currentItem]).data("owl-roundPages")){e.paginationWrapper.find(".owl-page").removeClass("active");
c(this).addClass("active")
}})
},checkNavigation:function(){var e=this;
if(e.options.navigation===false){return false
}if(e.options.rewindNav===false){if(e.currentItem===0&&e.maximumItem===0){e.buttonPrev.addClass("disabled");
e.buttonNext.addClass("disabled")
}else{if(e.currentItem===0&&e.maximumItem!==0){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")
}else{if(e.currentItem===e.maximumItem){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")
}else{if(e.currentItem!==0&&e.currentItem!==e.maximumItem){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")
}}}}}},updateControls:function(){var e=this;
e.updatePagination();
e.checkNavigation();
if(e.owlControls){if(e.options.items>=e.itemsAmount){e.owlControls.hide()
}else{e.owlControls.show()
}}},destroyControls:function(){var e=this;
if(e.owlControls){e.owlControls.remove()
}},next:function(f){var e=this;
if(e.isTransition){return false
}e.currentItem+=e.options.scrollPerPage===true?e.options.items:1;
if(e.currentItem>e.maximumItem+(e.options.scrollPerPage===true?(e.options.items-1):0)){if(e.options.rewindNav===true){e.currentItem=0;
f="rewind"
}else{e.currentItem=e.maximumItem;
return false
}}e.goTo(e.currentItem,f)
},prev:function(f){var e=this;
if(e.isTransition){return false
}if(e.options.scrollPerPage===true&&e.currentItem>0&&e.currentItem<e.options.items){e.currentItem=0
}else{e.currentItem-=e.options.scrollPerPage===true?e.options.items:1
}if(e.currentItem<0){if(e.options.rewindNav===true){e.currentItem=e.maximumItem;
f="rewind"
}else{e.currentItem=0;
return false
}}e.goTo(e.currentItem,f)
},goTo:function(e,j,g){var h=this,f;
if(h.isTransition){return false
}if(typeof h.options.beforeMove==="function"){h.options.beforeMove.apply(this,[h.$elem])
}if(e>=h.maximumItem){e=h.maximumItem
}else{if(e<=0){e=0
}}h.currentItem=h.owl.currentItem=e;
if(h.options.transitionStyle!==false&&g!=="drag"&&h.options.items===1&&h.browser.support3d===true){h.swapSpeed(0);
if(h.browser.support3d===true){h.transition3d(h.positionsInArray[e])
}else{h.css2slide(h.positionsInArray[e],1)
}h.afterGo();
h.singleItemTransition();
return false
}f=h.positionsInArray[e];
if(h.browser.support3d===true){h.isCss3Finish=false;
if(j===true){h.swapSpeed("paginationSpeed");
b.setTimeout(function(){h.isCss3Finish=true
},h.options.paginationSpeed)
}else{if(j==="rewind"){h.swapSpeed(h.options.rewindSpeed);
b.setTimeout(function(){h.isCss3Finish=true
},h.options.rewindSpeed)
}else{h.swapSpeed("slideSpeed");
b.setTimeout(function(){h.isCss3Finish=true
},h.options.slideSpeed)
}}h.transition3d(f)
}else{if(j===true){h.css2slide(f,h.options.paginationSpeed)
}else{if(j==="rewind"){h.css2slide(f,h.options.rewindSpeed)
}else{h.css2slide(f,h.options.slideSpeed)
}}}h.afterGo()
},jumpTo:function(e){var f=this;
if(typeof f.options.beforeMove==="function"){f.options.beforeMove.apply(this,[f.$elem])
}if(e>=f.maximumItem||e===-1){e=f.maximumItem
}else{if(e<=0){e=0
}}f.swapSpeed(0);
if(f.browser.support3d===true){f.transition3d(f.positionsInArray[e])
}else{f.css2slide(f.positionsInArray[e],1)
}f.currentItem=f.owl.currentItem=e;
f.afterGo()
},afterGo:function(){var e=this;
e.prevArr.push(e.currentItem);
e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2];
e.prevArr.shift(0);
if(e.prevItem!==e.currentItem){e.checkPagination();
e.checkNavigation();
e.eachMoveUpdate();
if(e.options.autoPlay!==false){e.checkAp()
}}if(typeof e.options.afterMove==="function"&&e.prevItem!==e.currentItem){e.options.afterMove.apply(this,[e.$elem])
}},stop:function(){var e=this;
e.apStatus="stop";
b.clearInterval(e.autoPlayInterval)
},checkAp:function(){var e=this;
if(e.apStatus!=="stop"){e.play()
}},play:function(){var e=this;
e.apStatus="play";
if(e.options.autoPlay===false){return false
}b.clearInterval(e.autoPlayInterval);
e.autoPlayInterval=b.setInterval(function(){e.next(true)
},e.options.autoPlay)
},swapSpeed:function(f){var e=this;
if(f==="slideSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
}else{if(f==="paginationSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
}else{if(typeof f!=="string"){e.$owlWrapper.css(e.addCssSpeed(f))
}}}},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}
},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}
},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}
},transition3d:function(f){var e=this;
e.$owlWrapper.css(e.doTranslate(f))
},css2move:function(f){var e=this;
e.$owlWrapper.css({left:f})
},css2slide:function(g,f){var e=this;
e.isCssFinish=false;
e.$owlWrapper.stop(true,true).animate({left:g},{duration:f||e.options.slideSpeed,complete:function(){e.isCssFinish=true
}})
},checkBrowser:function(){var k=this,g="translate3d(0px, 0px, 0px)",j=a.createElement("div"),h,f,l,e;
j.style.cssText="  -moz-transform:"+g+"; -ms-transform:"+g+"; -o-transform:"+g+"; -webkit-transform:"+g+"; transform:"+g;
h=/translate3d\(0px, 0px, 0px\)/g;
f=j.style.cssText.match(h);
l=(f!==null&&f.length===1);
e="ontouchstart" in b||b.navigator.msMaxTouchPoints;
k.browser={support3d:l,isTouch:e}
},moveEvents:function(){var e=this;
if(e.options.mouseDrag!==false||e.options.touchDrag!==false){e.gestures();
e.disabledEvents()
}},eventTypes:function(){var f=this,e=["s","e","x"];
f.ev_types={};
if(f.options.mouseDrag===true&&f.options.touchDrag===true){e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]
}else{if(f.options.mouseDrag===false&&f.options.touchDrag===true){e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]
}else{if(f.options.mouseDrag===true&&f.options.touchDrag===false){e=["mousedown.owl","mousemove.owl","mouseup.owl"]
}}}f.ev_types.start=e[0];
f.ev_types.move=e[1];
f.ev_types.end=e[2]
},disabledEvents:function(){var e=this;
e.$elem.on("dragstart.owl",function(f){f.preventDefault()
});
e.$elem.on("mousedown.disableTextSelect",function(f){return c(f.target).is("input, textarea, select, option")
})
},gestures:function(){var h=this,j={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};
h.isCssFinish=true;
function l(m){if(m.touches!==undefined){return{x:m.touches[0].pageX,y:m.touches[0].pageY}
}if(m.touches===undefined){if(m.pageX!==undefined){return{x:m.pageX,y:m.pageY}
}if(m.pageX===undefined){return{x:m.clientX,y:m.clientY}
}}}function k(m){if(m==="on"){c(a).on(h.ev_types.move,g);
c(a).on(h.ev_types.end,e)
}else{if(m==="off"){c(a).off(h.ev_types.move);
c(a).off(h.ev_types.end)
}}}function f(o){var n=o.originalEvent||o||b.event,m;
if(n.which===3){return false
}if(h.itemsAmount<=h.options.items){return
}if(h.isCssFinish===false&&!h.options.dragBeforeAnimFinish){return false
}if(h.isCss3Finish===false&&!h.options.dragBeforeAnimFinish){return false
}if(h.options.autoPlay!==false){b.clearInterval(h.autoPlayInterval)
}if(h.browser.isTouch!==true&&!h.$owlWrapper.hasClass("grabbing")){h.$owlWrapper.addClass("grabbing")
}h.newPosX=0;
h.newRelativeX=0;
c(this).css(h.removeTransition());
m=c(this).position();
j.relativePos=m.left;
j.offsetX=l(n).x-m.left;
j.offsetY=l(n).y-m.top;
k("on");
j.sliding=false;
j.targetElement=n.target||n.srcElement
}function g(p){var o=p.originalEvent||p||b.event,m,n;
h.newPosX=l(o).x-j.offsetX;
h.newPosY=l(o).y-j.offsetY;
h.newRelativeX=h.newPosX-j.relativePos;
if(typeof h.options.startDragging==="function"&&j.dragging!==true&&h.newRelativeX!==0){j.dragging=true;
h.options.startDragging.apply(h,[h.$elem])
}if((h.newRelativeX>8||h.newRelativeX<-8)&&(h.browser.isTouch===true)){if(o.preventDefault!==undefined){o.preventDefault()
}else{o.returnValue=false
}j.sliding=true
}if((h.newPosY>10||h.newPosY<-10)&&j.sliding===false){c(a).off("touchmove.owl")
}m=function(){return h.newRelativeX/5
};
n=function(){return h.maximumPixels+h.newRelativeX/5
};
h.newPosX=Math.max(Math.min(h.newPosX,m()),n());
if(h.browser.support3d===true){h.transition3d(h.newPosX)
}else{h.css2move(h.newPosX)
}}function e(r){var p=r.originalEvent||r||b.event,o,n,m;
p.target=p.target||p.srcElement;
j.dragging=false;
if(h.browser.isTouch!==true){h.$owlWrapper.removeClass("grabbing")
}if(h.newRelativeX<0){h.dragDirection=h.owl.dragDirection="left"
}else{h.dragDirection=h.owl.dragDirection="right"
}if(h.newRelativeX!==0){o=h.getNewPosition();
h.goTo(o,false,"drag");
if(j.targetElement===p.target&&h.browser.isTouch!==true){c(p.target).on("click.disable",function(s){s.stopImmediatePropagation();
s.stopPropagation();
s.preventDefault();
c(s.target).off("click.disable")
});
n=c._data(p.target,"events").click;
m=n.pop();
n.splice(0,0,m)
}}k("off")
}h.$elem.on(h.ev_types.start,".owl-wrapper",f)
},getNewPosition:function(){var f=this,e=f.closestItem();
if(e>f.maximumItem){f.currentItem=f.maximumItem;
e=f.maximumItem
}else{if(f.newPosX>=0){e=0;
f.currentItem=0
}}return e
},closestItem:function(){var g=this,h=g.options.scrollPerPage===true?g.pagesInArray:g.positionsInArray,e=g.newPosX,f=null;
c.each(h,function(k,j){if(e-(g.itemWidth/20)>h[k+1]&&e-(g.itemWidth/20)<j&&g.moveDirection()==="left"){f=j;
if(g.options.scrollPerPage===true){g.currentItem=c.inArray(f,g.positionsInArray)
}else{g.currentItem=k
}}else{if(e+(g.itemWidth/20)<j&&e+(g.itemWidth/20)>(h[k+1]||h[k]-g.itemWidth)&&g.moveDirection()==="right"){if(g.options.scrollPerPage===true){f=h[k+1]||h[h.length-1];
g.currentItem=c.inArray(f,g.positionsInArray)
}else{f=h[k+1];
g.currentItem=k+1
}}}});
return g.currentItem
},moveDirection:function(){var e=this,f;
if(e.newRelativeX<0){f="right";
e.playDirection="next"
}else{f="left";
e.playDirection="prev"
}return f
},customEvents:function(){var e=this;
e.$elem.on("owl.next",function(){e.next()
});
e.$elem.on("owl.prev",function(){e.prev()
});
e.$elem.on("owl.play",function(f,g){e.options.autoPlay=g;
e.play();
e.hoverStatus="play"
});
e.$elem.on("owl.stop",function(){e.stop();
e.hoverStatus="stop"
});
e.$elem.on("owl.goTo",function(g,f){e.goTo(f)
});
e.$elem.on("owl.jumpTo",function(g,f){e.jumpTo(f)
})
},stopOnHover:function(){var e=this;
if(e.options.stopOnHover===true&&e.browser.isTouch!==true&&e.options.autoPlay!==false){e.$elem.on("mouseover",function(){e.stop()
});
e.$elem.on("mouseout",function(){if(e.hoverStatus!=="stop"){e.play()
}})
}},lazyLoad:function(){var k=this,h,f,j,g,e;
if(k.options.lazyLoad===false){return false
}for(h=0;
h<k.itemsAmount;
h+=1){f=c(k.$owlItems[h]);
if(f.data("owl-loaded")==="loaded"){continue
}j=f.data("owl-item");
g=f.find(".lazyOwl");
if(typeof g.data("src")!=="string"){f.data("owl-loaded","loaded");
continue
}if(f.data("owl-loaded")===undefined){g.hide();
f.addClass("loading").data("owl-loaded","checked")
}if(k.options.lazyFollow===true){e=j>=k.currentItem
}else{e=true
}if(e&&j<k.currentItem+k.options.items&&g.length){k.lazyPreload(f,g)
}}},lazyPreload:function(e,f){var j=this,h=0,k;
if(f.prop("tagName")==="DIV"){f.css("background-image","url("+f.data("src")+")");
k=true
}else{f[0].src=f.data("src")
}function g(){e.data("owl-loaded","loaded").removeClass("loading");
f.removeAttr("data-src");
if(j.options.lazyEffect==="fade"){f.fadeIn(400)
}else{f.show()
}if(typeof j.options.afterLazyLoad==="function"){j.options.afterLazyLoad.apply(this,[j.$elem])
}}function l(){h+=1;
if(j.completeImg(f.get(0))||k===true){g()
}else{if(h<=100){b.setTimeout(l,100)
}else{g()
}}}l()
},autoHeight:function(){var h=this,j=c(h.$owlItems[h.currentItem]).find("img"),g;
function e(){var k=c(h.$owlItems[h.currentItem]).height();
h.wrapperOuter.css("height",k+"px");
if(!h.wrapperOuter.hasClass("autoHeight")){b.setTimeout(function(){h.wrapperOuter.addClass("autoHeight")
},0)
}}function f(){g+=1;
if(h.completeImg(j.get(0))){e()
}else{if(g<=100){b.setTimeout(f,100)
}else{h.wrapperOuter.css("height","")
}}}if(j.get(0)!==undefined){g=0;
f()
}else{e()
}},completeImg:function(e){var f;
if(!e.complete){return false
}f=typeof e.naturalWidth;
if(f!=="undefined"&&e.naturalWidth===0){return false
}return true
},onVisibleItems:function(){var f=this,e;
if(f.options.addClassActive===true){f.$owlItems.removeClass("active")
}f.visibleItems=[];
for(e=f.currentItem;
e<f.currentItem+f.options.items;
e+=1){f.visibleItems.push(e);
if(f.options.addClassActive===true){c(f.$owlItems[e]).addClass("active")
}}f.owl.visibleItems=f.visibleItems
},transitionTypes:function(e){var f=this;
f.outClass="owl-"+e+"-out";
f.inClass="owl-"+e+"-in"
},singleItemTransition:function(){var f=this,h=f.outClass,l=f.inClass,k=f.$owlItems.eq(f.currentItem),j=f.$owlItems.eq(f.prevItem),n=Math.abs(f.positionsInArray[f.currentItem])+f.positionsInArray[f.prevItem],m=Math.abs(f.positionsInArray[f.currentItem])+f.itemWidth/2,g="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
f.isTransition=true;
f.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":m+"px","-moz-perspective-origin":m+"px","perspective-origin":m+"px"});
function e(o){return{position:"relative",left:o+"px"}
}j.css(e(n,10)).addClass(h).on(g,function(){f.endPrev=true;
j.off(g);
f.clearTransStyle(j,h)
});
k.addClass(l).on(g,function(){f.endCurrent=true;
k.off(g);
f.clearTransStyle(k,l)
})
},clearTransStyle:function(f,e){var g=this;
f.css({position:"",left:""}).removeClass(e);
if(g.endPrev&&g.endCurrent){g.$owlWrapper.removeClass("owl-origin");
g.endPrev=false;
g.endCurrent=false;
g.isTransition=false
}},owlStatus:function(){var e=this;
e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}
},clearEvents:function(){var e=this;
e.$elem.off(".owl owl mousedown.disableTextSelect");
c(a).off(".owl owl");
c(b).off("resize",e.resizer)
},unWrap:function(){var e=this;
if(e.$elem.children().length!==0){e.$owlWrapper.unwrap();
e.$userItems.unwrap().unwrap();
if(e.owlControls){e.owlControls.remove()
}}e.clearEvents();
e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))
},destroy:function(){var e=this;
e.stop();
b.clearInterval(e.checkVisible);
e.unWrap();
e.$elem.removeData()
},reinit:function(g){var f=this,e=c.extend({},f.userOptions,g);
f.unWrap();
f.init(e,f.$elem)
},addItem:function(h,f){var g=this,e;
if(!h){return false
}if(g.$elem.children().length===0){g.$elem.append(h);
g.setVars();
return false
}g.unWrap();
if(f===undefined||f===-1){e=-1
}else{e=f
}if(e>=g.$userItems.length||e===-1){g.$userItems.eq(-1).after(h)
}else{g.$userItems.eq(e).before(h)
}g.setVars()
},removeItem:function(f){var g=this,e;
if(g.$elem.children().length===0){return false
}if(f===undefined||f===-1){e=-1
}else{e=f
}g.unWrap();
g.$userItems.eq(e).remove();
g.setVars()
}};
c.fn.owlCarousel=function(e){return this.each(function(){if(c(this).data("owl-init")===true){return false
}c(this).data("owl-init",true);
var f=Object.create(d);
f.init(e,this);
c.data(this,"owlCarousel",f)
})
};
c.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}
}(jQuery,window,document));
$(document).ready(function(){if($(".detail-content p i").length){$(".detail-content p i").closest(".detail-content").addClass("italicFont")
}$(".detail-content").each(function(){if($(this).find("h3").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singlePara")
}else{if($(this).find("p").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singleHeading")
}else{if($(this).find("h3").length<1){$(this).addClass("onlyPara")
}else{if($(this).find("p").length<1){$(this).addClass("onlyHeading")
}else{if($(this).parent(".col-md-10").find(".cta_module").length<1&&$(this).parent(".col-md-10").parent(".social-block").find(".social-block").length<1){$(this).addClass("onlyContent")
}}}}}});
$(document).on("click","i.detail-toggle.fa-plus-square",function(){$(this).removeClass("fa-plus-square");
$(this).addClass("fa-times");
$(this).parent().parent(".thumb-details").addClass("rollover");
$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").removeClass("asianLang");
setTimeout(function(){$(".rollover").children(".col-md-10").children(".detail-content").children(".clampingDetail").css("max-height","100%");
$(".rollover").children(".col-md-10").children(".detail-content").children("p:not(:first)").show()
},250)
});
$(document).on("click","i.detail-toggle.fa-times",function(){var e=$(this);
b(e);
$(this).removeClass("fa-times");
$(this).addClass("fa-plus-square");
$(this).removeAttr("style");
$(this).parent().parent(".thumb-details").removeClass("rollover");
if($(this).parent().parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").addClass("asianLang")
}$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p:not(:first)").hide()
});
$(document).on("click","i.detail-toggle.fa-bars",function(){$(this).removeClass("fa-bars");
$(this).addClass("fa-times");
$(this).parent().parent(".thumb-details").addClass("rollover");
$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").removeClass("asianLang");
setTimeout(function(){$(".rollover").children(".col-md-10").children(".detail-content").children(".clampingDetail").css("max-height","100%");
$(".rollover").children(".col-md-10").children(".detail-content").children("p:not(:first)").show()
},250)
});
$(document).on("click","i.detail-toggle.fa-times.non-product",function(){var e=$(this);
b(e);
$(this).removeClass("fa-times");
$(this).addClass("fa-bars");
$(this).removeClass("fa-plus-square");
$(this).removeAttr("style");
$(this).parent().parent(".thumb-details").removeClass("rollover");
if($(this).parent().parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").addClass("asianLang")
}$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p:not(:first)").hide()
});
function c(){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
$(".thumb-details").each(function(){if(!$(this).hasClass("rollover")){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var e=$(this).height();
$(this).children(".col-md-1").css("height",e);
$(this).children(".col-md-10").css("height",e)
}})
}c();
function b(g){var f=2*(parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3").css("line-height"))))+"px";
var e=2*(parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p").css("line-height"))))+"px";
g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",f);
g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",e)
}function a(){$(".thumb-details").each(function(){if(!$(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){var f=2*(parseInt(($(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"))))+"px";
var e=2*(parseInt(($(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))))+"px";
$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",f);
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",e)
}}})
}window.getlineHeightAsian=function(){$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"));
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))
}}});
$(".clampingDetail").each(function(){if($(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).find("span").removeAttr("style");
var h=$(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").children(".thumb-img").width();
var e=$(this).parent(".detail-content").parent(".col-md-10").prev(".col-md-1").children("i").width()+$(this).parent(".detail-content").parent(".col-md-10").next(".col-md-1.cntClk").children("i").width()+80;
var g=h-e;
var f=$(this).parent(".detail-content").children("h3").children("span").eq(0).innerWidth();
var j=$(this).parent(".detail-content").children("p").children("span").eq(0).innerWidth();
if(g<f){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if(g<j){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if($(this).parent(".detail-content").find("p").length>1||$(this).parent(".detail-content").find("p").children("span").length>1||$(this).parent(".detail-content").find("h3").children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}$(this).find("span").css("width",g);
if($(this).children("span").eq(0).is(":empty")){$(this).children("span").eq(1).addClass("addEllipsis").show()
}}})
};
window.addEventListener("resize",a);
function d(){$(".thumb-details").each(function(){if($(this).hasClass("rollover")){$(this).children(".cntClk").children(".detail-toggle").css("display","inline-block")
}if($(this).children(".cntClk").length===0){$(this).addClass("no-hamberg")
}})
}d();
window.addEventListener("resize",d);
$(window).resize(function(){var f=window.navigator.userAgent;
var e=f.indexOf("MSIE ");
if(e>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){var g=$(".thumb-img > a img").first();
$(".thumb-img > a img").remove();
$(".thumb-img > a").append(g)
}setTimeout(function(){getlineHeightAsian()
},400);
setTimeout(function(){c()
},400)
})
});
$(window).load(function(){setTimeout(function(){if($(".thumb-details").length){$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"));
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))
}}});
$(".clampingDetail").each(function(){if($(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).find("span").removeAttr("style");
var d=$(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").children(".thumb-img").width();
var a=$(this).parent(".detail-content").parent(".col-md-10").prev(".col-md-1").children("i").width()+$(this).parent(".detail-content").parent(".col-md-10").next(".col-md-1.cntClk").children("i").width()+80;
var c=d-a;
var b=$(this).parent(".detail-content").children("h3").children("span").eq(0).innerWidth();
var e=$(this).parent(".detail-content").children("p").children("span").eq(0).innerWidth();
if(c<b){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if(c<e){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if($(this).parent(".detail-content").find("p").length>1||$(this).parent(".detail-content").find("p").children("span").length>1||$(this).parent(".detail-content").find("h3").children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}$(this).find("span").css("width",c);
if($(this).children("span").eq(0).is(":empty")){$(this).children("span").eq(1).addClass("addEllipsis").show()
}}})
}},400);
$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var a=$(this).height();
$(this).children(".col-md-1").css("height",a);
$(this).children(".col-md-10").css("height",a)
}}})
});
$(document).ready(function(){$(".thumb-container .detail-content").each(function(){if(!$(this).hasClass("noclamp")){$(this).find("p").addClass("clampingDetail");
$(this).find("p:not(:first)").hide()
}else{$(this).find("p").addClass("noclampingDetail")
}});
if($(".prodRedesign-caurosel").length){$(".prodRedesign-caurosel .item+.item .thumb-details .col-md-1").hide()
}$(".prodRedesign-caurosel").on("slid.bs.carousel",function(){if($(".prodRedesign-caurosel").length){setTimeout(function(){$(".prodRedesign-caurosel .active .thumb-details").each(function(){var a=$(this).height();
console.log(a);
$(this).children(".col-md-1").css("height",a);
$(this).children(".col-md-10").css("height",a);
$(this).children(".col-md-1").show()
})
},300)
}})
});
if(!Function.prototype.bind){Function.prototype.bind=function(a){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var e=Array.prototype.slice.call(arguments,1),d=this,b=function(){},c=function(){return d.apply(this instanceof b&&a?this:a,e.concat(Array.prototype.slice.call(arguments)))
};
b.prototype=this.prototype;
c.prototype=new b();
return c
}
}(function(n,l){var h,a,p,k,j,r,t,s,m,g,c=l.createElement.bind(l),f=l.createTextNode.bind(l),b,e,o;
a=c("span");
(function(d){d.position="absolute";
d.whiteSpace="pre";
d.visibility="hidden"
})(a.style);
b=c("span");
e=c("span");
e.style.display="block";
e.style.overflow="hidden";
e.appendChild(f("\u2060"));
h=function(v,u,w){var d;
if(!v.ownerDocument||!v.ownerDocument===l){return
}j=t=0;
r=1;
g=false;
k=[];
p=(v.textContent||v.innerText).replace(/\n/g," ");
for(d=1;
d<u;
d++){o=e.cloneNode(true);
b.appendChild(o);
if(d===1){e.style.textIndent=0
}}e.style.textIndent="";
o=void 0;
while(v.firstChild){v.removeChild(v.firstChild)
}v.appendChild(b);
for(d=0;
d<u-1;
d++){k.push(b.childNodes[d].clientWidth)
}v.removeChild(b);
while(b.firstChild){b.removeChild(b.firstChild)
}v.appendChild(a);
p.replace(/ /g,function(y,z){if(r===u){return
}a.appendChild(f(p.substr(j,z-j)));
if(w-20<=a.clientWidth){if(g){m=p.substr(j,z+1-j);
j=z+1
}else{m=p.substr(j,t-j);
j=t
}s=c("span");
s.appendChild(f(m));
v.appendChild(s);
g=true;
r++
}else{g=false
}t=z+1;
a.removeChild(a.firstChild)
});
v.removeChild(a);
s=c("span");
if(r===u){(function(y){y.overflow="hidden";
y.width="100%"
})(s.style)
}s.appendChild(f(p.substr(j)));
v.appendChild(s)
};
n.clamp=h
})(window,window.document);
var clampingWidth="";
window.loadClamp=function(a){var b="";
$(".clampingDetail").each(function(){$(this).attr("data-id","randomId"+Math.floor((Math.random()*10000)+1));
b=$(this).attr("data-id");
if($(window).innerWidth()>1260){clampingWidth=$(this).innerWidth()-55
}else{clampingWidth=$(this).innerWidth()
}clamp($(".clampingDetail[data-id='"+b+"']")[0],3,clampingWidth);
if($("html").attr("lang")=="ja"||$("html").attr("lang")=="ja-JP"||$("html").attr("lang")=="zh_CN"||$("html").attr("lang")=="zh-CN"||$("html").attr("lang")=="ko"||$("html").attr("lang")=="ko-KR"){$(".thumb-container").each(function(){$(this).addClass("singleLineEllipse")
});
if(!$(this).parent().parent().parent(".thumb-details").hasClass("rollover")){$(this).parent().children("h3").eq(0).children("span").addClass("asianLang");
$(this).parent().children("p").eq(0).children("span").addClass("asianLang")
}$(".addEllipsis").each(function(){if($(this).html()==""){$(this).addClass("blankSpan")
}});
if($(this).children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
$(this).children("span").eq(0).addClass("addEllipsis")
}}else{if($(this).children("span").length>2){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
$(this).children("span").eq(1).addClass("addEllipsis")
}else{if($(this).parent().find("p").length>1){if($(this).parent().children("p").eq(0).find("span").length>1){$(this).parent().children("p").eq(0).children("span").eq(1).addClass("addEllipsis")
}else{$(this).parent().children("p").eq(0).children("span").eq(0).addClass("addEllipsis")
}}else{$(this).parent(".detail-content").parents(".thumb-details").removeClass("addEllipsis")
}}}})
};
$(function(){window.showHamBurger=function(){$(".thumb-details .col-md-10 .clampingDetail").each(function(){if($(this).parent().find("h3").find("span").hasClass("addEllipsis")){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}else{if($(this).parent().find("p").find("span").hasClass("addEllipsis")){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}else{$(this).parent(".detail-content").parents(".thumb-details").removeClass("showHam")
}}})
};
$(".collapse_content").on("click",function(){$(".hidden_clamp").toggle();
resizeFunc();
$(".thumb-details").each(function(){if(!($(this).hasClass("rollover"))){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var b=$(this).height();
$(this).children(".col-md-1").css("height",b);
$(this).children(".col-md-10").css("height",b)
}})
});
var a;
window.resizeFunc=function(){var b="";
b=$(this).attr("data-id");
loadClamp(b);
showHamBurger()
};
resizeFunc();
$(window).resize(function(){setTimeout(function(){resizeFunc()
},300)
})
});
var owl;
$(document).ready(function(){var b=$(this).find(".transitionValue").attr("transitionValue");
var a=$(this).find(".transitionOffOn").attr("transitionOffOn");
$(".owl-container > div:first-child").each(function(){var h=$(this).attr("class");
var k=h.split(" ");
var e=k[3];
var c="."+e;
var g=$(c);
if(g.length>0){$(c).owlCarousel({navigation:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],slideSpeed:300,paginationSpeed:400,lazyLoad:true,loop:true,autoplay:true,autoplayTimeout:1000,autoplaySpeed:1000,singleItem:true,afterInit:function(m){var l=".customerBanner "+c+" .owl-controls .owl-pagination .owl-page span";
$.each(this.owl.userItems,function(p){var r=$(this).find(".item-img").attr("img-src");
var s=$(this).find(".item-img").attr("tab-name-track");
var n=$(l);
var t=[];
var o=[];
$.each($(".imgSource"),function(u){t[u]=$(this).attr("img-src");
o[u]=$(this).attr("tab-name-track")
});
if(r===""){r=t[p]
}else{}if(s===""){s=o[p]
}else{}$(n[p]).append('<img src="'+r+'" alt="'+r+'" tab-name-track="'+s+'" />')
})
},afterUpdate:function(m){var l=".customerBanner "+c+" .owl-controls .owl-pagination .owl-page span";
$.each(this.owl.userItems,function(p){var r=$(this).find(".item-img").attr("img-src");
var s=$(this).find(".item-img").attr("tab-name-track");
var n=$(l);
var t=[];
var o=[];
$.each($(".imgSource"),function(u){t[u]=$(this).attr("img-src");
o[u]=$(this).attr("tab-name-track")
});
if(r===""){r=t[p]
}else{}if(s===""){s=o[p]
}else{}$(n[p]).append('<img src="'+r+'" alt="'+r+'" tab-name-track="'+s+'" />')
})
}})
}var f=g.data("owlCarousel");
var d;
var j=function(){d=setInterval(function(){f.next()
},b*1000)
};
if(a==="on"){j()
}$("#customerSlider .owl-page, .owl-next, .owl-prev").on("click",function(){clearInterval(d);
if(a==="on"){j()
}})
})
});
var tabSelected=tabOn=tabFloat=null;
var selectTab=function(a){if(tabOn!=null){tabOn.toggleClass("active")
}tabOn=$(this);
tabOn.toggleClass("active");
if(tabFloat!=null){tabFloat.hide()
}if(tabSelected!=null){tabSelected.hide()
}tabFloat=$(this.hash+"_float");
tabFloat.show();
tabSelected=$(this.hash);
tabSelected.show();
a.preventDefault()
};
$(document).ready(function(){$(".rTableCell span").each(function(){var a=$(this).text();
a=a.replace("&nbsp;"," ");
$(this).text(a)
});
$(".evaltabhead ul li a").each(function(){$(this).click(selectTab);
if($(this.parentNode).is(":first-child")){$(this).attr("class","first");
tabOn=$(this);
tabOn.toggleClass("active");
tabFloat=$(this.hash+"_float");
tabFloat.show();
tabSelected=$(this.hash);
tabSelected.show()
}if($(this.parentNode).is(":last-child")){$(this).attr("class","last")
}})
});
$(document).ready(function(){$("a[href='#topofpage']").click(function(){$("html,body").animate({scrollTop:0},1000)
});
$('.cm-migration-custom a[href*="#"]').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);
b=b.length&&b||$("[name="+this.hash.slice(1)+"]");
if(b.length){var d=b.offset().top;
var c=0;
if($(window).scrollTop()<1){var c=135
}else{var c=75
}console.log(c);
if(window.innerWidth>800){d=d-c
}else{d=d-55
}$("html,body").animate({scrollTop:d},1000);
return false
}}});
if($(".cm-migration-custom .b-pd-main").find("div.b-3of10").length<1){$(".cm-migration-custom .b-pd-main .b-7of10").css("width","100%")
}var a=$(".cm-migration-custom .b-pd-main .b-3of10 .a-pd-main .b-row").html();
a=$.trim(a);
if(a=="&nbsp;"){$(".cm-migration-custom .b-pd-main .b-7of10").css("width","100%")
}});
/*! jQuery UI - v1.11.4 - 2016-06-15
* http://jqueryui.com
* Includes: core.js, widget.js, accordion.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(d){
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
;
d.ui=d.ui||{};
d.extend(d.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
d.fn.extend({scrollParent:function(k){var j=this.css("position"),h=j==="absolute",l=k?/(auto|scroll|hidden)/:/(auto|scroll)/,m=this.parents().filter(function(){var n=d(this);
if(h&&n.css("position")==="static"){return false
}return l.test(n.css("overflow")+n.css("overflow-y")+n.css("overflow-x"))
}).eq(0);
return j==="fixed"||!m.length?d(this[0].ownerDocument||document):m
},uniqueId:(function(){var h=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++h)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){d(this).removeAttr("id")
}})
}});
function f(k,h){var m,l,j,n=k.nodeName.toLowerCase();
if("area"===n){m=k.parentNode;
l=m.name;
if(!k.href||!l||m.nodeName.toLowerCase()!=="map"){return false
}j=d("img[usemap='#"+l+"']")[0];
return !!j&&e(j)
}return(/^(input|select|textarea|button|object)$/.test(n)?!k.disabled:"a"===n?k.href||h:h)&&e(k)
}function e(h){return d.expr.filters.visible(h)&&!d(h).parents().addBack().filter(function(){return d.css(this,"visibility")==="hidden"
}).length
}d.extend(d.expr[":"],{data:d.expr.createPseudo?d.expr.createPseudo(function(h){return function(j){return !!d.data(j,h)
}
}):function(k,j,h){return !!d.data(k,h[3])
},focusable:function(h){return f(h,!isNaN(d.attr(h,"tabindex")))
},tabbable:function(k){var h=d.attr(k,"tabindex"),j=isNaN(h);
return(j||h>=0)&&f(k,!j)
}});
if(!d("<a>").outerWidth(1).jquery){d.each(["Width","Height"],function(k,h){var j=h==="Width"?["Left","Right"]:["Top","Bottom"],l=h.toLowerCase(),n={innerWidth:d.fn.innerWidth,innerHeight:d.fn.innerHeight,outerWidth:d.fn.outerWidth,outerHeight:d.fn.outerHeight};
function m(r,p,o,s){d.each(j,function(){p-=parseFloat(d.css(r,"padding"+this))||0;
if(o){p-=parseFloat(d.css(r,"border"+this+"Width"))||0
}if(s){p-=parseFloat(d.css(r,"margin"+this))||0
}});
return p
}d.fn["inner"+h]=function(o){if(o===undefined){return n["inner"+h].call(this)
}return this.each(function(){d(this).css(l,m(this,o)+"px")
})
};
d.fn["outer"+h]=function(o,p){if(typeof o!=="number"){return n["outer"+h].call(this,o)
}return this.each(function(){d(this).css(l,m(this,o,true,p)+"px")
})
}
})
}if(!d.fn.addBack){d.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}
}if(d("<a>").data("a-b","a").removeData("a-b").data("a-b")){d.fn.removeData=(function(h){return function(j){if(arguments.length){return h.call(this,d.camelCase(j))
}else{return h.call(this)
}}
})(d.fn.removeData)
}d.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
d.fn.extend({focus:(function(h){return function(j,k){return typeof j==="number"?this.each(function(){var l=this;
setTimeout(function(){d(l).focus();
if(k){k.call(l)
}},j)
}):h.apply(this,arguments)
}
})(d.fn.focus),disableSelection:(function(){var h="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.bind(h+".ui-disableSelection",function(j){j.preventDefault()
})
}
})(),enableSelection:function(){return this.unbind(".ui-disableSelection")
},zIndex:function(l){if(l!==undefined){return this.css("zIndex",l)
}if(this.length){var j=d(this[0]),h,k;
while(j.length&&j[0]!==document){h=j.css("position");
if(h==="absolute"||h==="relative"||h==="fixed"){k=parseInt(j.css("zIndex"),10);
if(!isNaN(k)&&k!==0){return k
}}j=j.parent()
}}return 0
}});
d.ui.plugin={add:function(j,k,m){var h,l=d.ui[j].prototype;
for(h in m){l.plugins[h]=l.plugins[h]||[];
l.plugins[h].push([k,m[h]])
}},call:function(h,l,k,j){var m,n=h.plugins[l];
if(!n){return
}if(!j&&(!h.element[0].parentNode||h.element[0].parentNode.nodeType===11)){return
}for(m=0;
m<n.length;
m++){if(h.options[n[m][0]]){n[m][1].apply(h.element,k)
}}}};
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
;
var g=0,b=Array.prototype.slice;
d.cleanData=(function(h){return function(j){var l,m,k;
for(k=0;
(m=j[k])!=null;
k++){try{l=d._data(m,"events");
if(l&&l.remove){d(m).triggerHandler("remove")
}}catch(n){}}h(j)
}
})(d.cleanData);
d.widget=function(h,j,r){var n,o,l,p,k={},m=h.split(".")[0];
h=h.split(".")[1];
n=m+"-"+h;
if(!r){r=j;
j=d.Widget
}d.expr[":"][n.toLowerCase()]=function(s){return !!d.data(s,n)
};
d[m]=d[m]||{};
o=d[m][h];
l=d[m][h]=function(s,t){if(!this._createWidget){return new l(s,t)
}if(arguments.length){this._createWidget(s,t)
}};
d.extend(l,o,{version:r.version,_proto:d.extend({},r),_childConstructors:[]});
p=new j();
p.options=d.widget.extend({},p.options);
d.each(r,function(t,s){if(!d.isFunction(s)){k[t]=s;
return
}k[t]=(function(){var u=function(){return j.prototype[t].apply(this,arguments)
},v=function(w){return j.prototype[t].apply(this,w)
};
return function(){var z=this._super,w=this._superApply,y;
this._super=u;
this._superApply=v;
y=s.apply(this,arguments);
this._super=z;
this._superApply=w;
return y
}
})()
});
l.prototype=d.widget.extend(p,{widgetEventPrefix:o?(p.widgetEventPrefix||h):h},k,{constructor:l,namespace:m,widgetName:h,widgetFullName:n});
if(o){d.each(o._childConstructors,function(t,u){var s=u.prototype;
d.widget(s.namespace+"."+s.widgetName,l,u._proto)
});
delete o._childConstructors
}else{j._childConstructors.push(l)
}d.widget.bridge(h,l);
return l
};
d.widget.extend=function(n){var j=b.call(arguments,1),m=0,h=j.length,k,l;
for(;
m<h;
m++){for(k in j[m]){l=j[m][k];
if(j[m].hasOwnProperty(k)&&l!==undefined){if(d.isPlainObject(l)){n[k]=d.isPlainObject(n[k])?d.widget.extend({},n[k],l):d.widget.extend({},l)
}else{n[k]=l
}}}}return n
};
d.widget.bridge=function(j,h){var k=h.prototype.widgetFullName||j;
d.fn[j]=function(n){var l=typeof n==="string",m=b.call(arguments,1),o=this;
if(l){this.each(function(){var r,p=d.data(this,k);
if(n==="instance"){o=p;
return false
}if(!p){return d.error("cannot call methods on "+j+" prior to initialization; attempted to call method '"+n+"'")
}if(!d.isFunction(p[n])||n.charAt(0)==="_"){return d.error("no such method '"+n+"' for "+j+" widget instance")
}r=p[n].apply(p,m);
if(r!==p&&r!==undefined){o=r&&r.jquery?o.pushStack(r.get()):r;
return false
}})
}else{if(m.length){n=d.widget.extend.apply(null,[n].concat(m))
}this.each(function(){var p=d.data(this,k);
if(p){p.option(n||{});
if(p._init){p._init()
}}else{d.data(this,k,new h(n,this))
}})
}return o
}
};
d.Widget=function(){};
d.Widget._childConstructors=[];
d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(h,j){j=d(j||this.defaultElement||this)[0];
this.element=d(j);
this.uuid=g++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=d();
this.hoverable=d();
this.focusable=d();
if(j!==this){d.data(j,this.widgetFullName,this);
this._on(true,this.element,{remove:function(k){if(k.target===j){this.destroy()
}}});
this.document=d(j.style?j.ownerDocument:j.document||j);
this.window=d(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=d.widget.extend({},this.options,this._getCreateOptions(),h);
this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:d.noop,_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:d.noop,widget:function(){return this.element
},option:function(l,m){var h=l,n,k,j;
if(arguments.length===0){return d.widget.extend({},this.options)
}if(typeof l==="string"){h={};
n=l.split(".");
l=n.shift();
if(n.length){k=h[l]=d.widget.extend({},this.options[l]);
for(j=0;
j<n.length-1;
j++){k[n[j]]=k[n[j]]||{};
k=k[n[j]]
}l=n.pop();
if(arguments.length===1){return k[l]===undefined?null:k[l]
}k[l]=m
}else{if(arguments.length===1){return this.options[l]===undefined?null:this.options[l]
}h[l]=m
}}this._setOptions(h);
return this
},_setOptions:function(h){var j;
for(j in h){this._setOption(j,h[j])
}return this
},_setOption:function(h,j){this.options[h]=j;
if(h==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!j);
if(j){this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}}return this
},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_on:function(l,k,j){var m,h=this;
if(typeof l!=="boolean"){j=k;
k=l;
l=false
}if(!j){j=k;
k=this.element;
m=this.widget()
}else{k=m=d(k);
this.bindings=this.bindings.add(k)
}d.each(j,function(t,s){function p(){if(!l&&(h.options.disabled===true||d(this).hasClass("ui-state-disabled"))){return
}return(typeof s==="string"?h[s]:s).apply(h,arguments)
}if(typeof s!=="string"){p.guid=s.guid=s.guid||p.guid||d.guid++
}var r=t.match(/^([\w:-]*)\s*(.*)$/),o=r[1]+h.eventNamespace,n=r[2];
if(n){m.delegate(n,o,p)
}else{k.bind(o,p)
}})
},_off:function(j,h){h=(h||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
j.unbind(h).undelegate(h);
this.bindings=d(this.bindings.not(j).get());
this.focusable=d(this.focusable.not(j).get());
this.hoverable=d(this.hoverable.not(j).get())
},_delay:function(l,k){function j(){return(typeof l==="string"?h[l]:l).apply(h,arguments)
}var h=this;
return setTimeout(j,k||0)
},_hoverable:function(h){this.hoverable=this.hoverable.add(h);
this._on(h,{mouseenter:function(j){d(j.currentTarget).addClass("ui-state-hover")
},mouseleave:function(j){d(j.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(h){this.focusable=this.focusable.add(h);
this._on(h,{focusin:function(j){d(j.currentTarget).addClass("ui-state-focus")
},focusout:function(j){d(j.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(h,j,k){var n,m,l=this.options[h];
k=k||{};
j=d.Event(j);
j.type=(h===this.widgetEventPrefix?h:this.widgetEventPrefix+h).toLowerCase();
j.target=this.element[0];
m=j.originalEvent;
if(m){for(n in m){if(!(n in j)){j[n]=m[n]
}}}this.element.trigger(j,k);
return !(d.isFunction(l)&&l.apply(this.element[0],[j].concat(k))===false||j.isDefaultPrevented())
}};
d.each({show:"fadeIn",hide:"fadeOut"},function(j,h){d.Widget.prototype["_"+j]=function(m,l,o){if(typeof l==="string"){l={effect:l}
}var n,k=!l?j:l===true||typeof l==="number"?h:l.effect||h;
l=l||{};
if(typeof l==="number"){l={duration:l}
}n=!d.isEmptyObject(l);
l.complete=o;
if(l.delay){m.delay(l.delay)
}if(n&&d.effects&&d.effects.effect[k]){m[j](l)
}else{if(k!==j&&m[k]){m[k](l.duration,l.easing,o)
}else{m.queue(function(p){d(this)[j]();
if(o){o.call(m[0])
}p()
})
}}}
});
var c=d.widget;
/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
;
var a=d.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var h=this.options;
this.prevShow=this.prevHide=d();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!h.collapsible&&(h.active===false||h.active==null)){h.active=0
}this._processPanels();
if(h.active<0){h.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?d():this.active.next()}
},_createIcons:function(){var h=this.options.icons;
if(h){d("<span>").addClass("ui-accordion-header-icon ui-icon "+h.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(h.header).addClass(h.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var h;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
this._destroyIcons();
h=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
if(this.options.heightStyle!=="content"){h.css("height","")
}},_setOption:function(h,j){if(h==="active"){this._activate(j);
return
}if(h==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(j)
}this._super(h,j);
if(h==="collapsible"&&!j&&this.options.active===false){this._activate(0)
}if(h==="icons"){this._destroyIcons();
if(j){this._createIcons()
}}if(h==="disabled"){this.element.toggleClass("ui-state-disabled",!!j).attr("aria-disabled",j);
this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!j)
}},_keydown:function(l){if(l.altKey||l.ctrlKey){return
}var m=d.ui.keyCode,k=this.headers.length,h=this.headers.index(l.target),j=false;
switch(l.keyCode){case m.RIGHT:case m.DOWN:j=this.headers[(h+1)%k];
break;
case m.LEFT:case m.UP:j=this.headers[(h-1+k)%k];
break;
case m.SPACE:case m.ENTER:this._eventHandler(l);
break;
case m.HOME:j=this.headers[0];
break;
case m.END:j=this.headers[k-1];
break
}if(j){d(l.target).attr("tabIndex",-1);
d(j).attr("tabIndex",0);
j.focus();
l.preventDefault()
}},_panelKeyDown:function(h){if(h.keyCode===d.ui.keyCode.UP&&h.ctrlKey){d(h.currentTarget).prev().focus()
}},refresh:function(){var h=this.options;
this._processPanels();
if((h.active===false&&h.collapsible===true)||!this.headers.length){h.active=false;
this.active=d()
}else{if(h.active===false){this._activate(0)
}else{if(this.active.length&&!d.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){h.active=false;
this.active=d()
}else{this._activate(Math.max(0,h.active-1))
}}else{h.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){var j=this.headers,h=this.panels;
this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
if(h){this._off(j.not(this.headers));
this._off(h.not(this.panels))
}},_refresh:function(){var l,j=this.options,h=j.heightStyle,k=this.element.parent();
this.active=this._findActive(j.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(){var p=d(this),o=p.uniqueId().attr("id"),m=p.next(),n=m.uniqueId().attr("id");
p.attr("aria-controls",n);
m.attr("aria-labelledby",o)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(j.event);
if(h==="fill"){l=k.height();
this.element.siblings(":visible").each(function(){var n=d(this),m=n.css("position");
if(m==="absolute"||m==="fixed"){return
}l-=n.outerHeight(true)
});
this.headers.each(function(){l-=d(this).outerHeight(true)
});
this.headers.next().each(function(){d(this).height(Math.max(0,l-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(h==="auto"){l=0;
this.headers.next().each(function(){l=Math.max(l,d(this).css("height","").height())
}).height(l)
}}},_activate:function(h){var j=this._findActive(h)[0];
if(j===this.active[0]){return
}j=j||this.active[0];
this._eventHandler({target:j,currentTarget:j,preventDefault:d.noop})
},_findActive:function(h){return typeof h==="number"?this.headers.eq(h):d()
},_setupEvents:function(j){var h={keydown:"_keydown"};
if(j){d.each(j.split(" "),function(l,k){h[k]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,h);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(h){var r=this.options,l=this.active,m=d(h.currentTarget),o=m[0]===l[0],j=o&&r.collapsible,k=j?d():m.next(),n=l.next(),p={oldHeader:l,oldPanel:n,newHeader:j?d():m,newPanel:k};
h.preventDefault();
if((o&&!r.collapsible)||(this._trigger("beforeActivate",h,p)===false)){return
}r.active=j?false:this.headers.index(m);
this.active=o?d():m;
this._toggle(p);
l.removeClass("ui-accordion-header-active ui-state-active");
if(r.icons){l.children(".ui-accordion-header-icon").removeClass(r.icons.activeHeader).addClass(r.icons.header)
}if(!o){m.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(r.icons){m.children(".ui-accordion-header-icon").removeClass(r.icons.header).addClass(r.icons.activeHeader)
}m.next().addClass("ui-accordion-content-active")
}},_toggle:function(k){var h=k.newPanel,j=this.prevShow.length?this.prevShow:k.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=h;
this.prevHide=j;
if(this.options.animate){this._animate(h,j,k)
}else{j.hide();
h.show();
this._toggleComplete(k)
}j.attr({"aria-hidden":"true"});
j.prev().attr({"aria-selected":"false","aria-expanded":"false"});
if(h.length&&j.length){j.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(h.length){this.headers.filter(function(){return parseInt(d(this).attr("tabIndex"),10)===0
}).attr("tabIndex",-1)
}}h.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(h,s,n){var r,p,m,o=this,t=0,l=h.css("box-sizing"),u=h.length&&(!s.length||(h.index()<s.index())),k=this.options.animate||{},v=u&&k.down||k,j=function(){o._toggleComplete(n)
};
if(typeof v==="number"){m=v
}if(typeof v==="string"){p=v
}p=p||v.easing||k.easing;
m=m||v.duration||k.duration;
if(!s.length){return h.animate(this.showProps,m,p,j)
}if(!h.length){return s.animate(this.hideProps,m,p,j)
}r=h.show().outerHeight();
s.animate(this.hideProps,{duration:m,easing:p,step:function(w,y){y.now=Math.round(w)
}});
h.hide().animate(this.showProps,{duration:m,easing:p,complete:j,step:function(w,y){y.now=Math.round(w);
if(y.prop!=="height"){if(l==="content-box"){t+=y.now
}}else{if(o.options.heightStyle!=="content"){y.now=Math.round(r-s.outerHeight()-t);
t=0
}}}})
},_toggleComplete:function(j){var h=j.oldPanel;
h.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(h.length){h.parent()[0].className=h.parent()[0].className
}this._trigger("activate",null,j)
}})
}));
$(document).ready(function(){chatOverlay()
});
$(window).resize(function(){chatOverlay()
});
function chatOverlay(){$(".fa-wechat").on({mouseenter:function(){$(document.body).find(".chatOverlay").remove();
var a=$(".fa-wechat").offset();
var b="<div class='chatOverlay'><img src='/content/dam/digitalmarketing/vmware/zh-cn/files/images/we_chat_bar_code.png' alt='WeChatBarCode'></div>";
$(document.body).append(b);
$(".chatOverlay").css({left:a.left-25,top:a.top-200})
},mouseleave:function(){$(document.body).find(".chatOverlay").remove()
},click:function(c){if(window.innerWidth<480){c.preventDefault()
}if($(document.body).find(".chatOverlay").length){$(document.body).find(".chatOverlay").remove()
}else{var a=$(".fa-wechat").offset();
var b="<div class='chatOverlay'><img src='/content/dam/digitalmarketing/vmware/zh-cn/files/images/we_chat_bar_code.png' alt='WeChatBarCode'></div>";
$(document.body).append(b);
$(".chatOverlay").css({left:a.left-25,top:(a.top-200)})
}}})
}$(document).ready(function(){var h;
var g;
$(".contactuswithgooglemaps a[title]").each(function(){h=$(this).attr("title");
g=$(this).attr("href");
if(!isNaN(h)&&(/^[0-9]{13}$/.test(h))&&g=="#"){if($(this).find("span.fa-video-camera").length!=0){$(this).find("span.fa-video-camera").attr("class","");
$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".contactuswithgooglemaps a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}else{$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".contactuswithgooglemaps a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}}});
$(".paragraphText a[title]").each(function(){h=$(this).attr("title");
g=$(this).attr("href");
if(!isNaN(h)&&(/^[0-9]{13}$/.test(h))&&g=="#"){if($(this).find("span.fa-video-camera").length!=0){$(this).find("span.fa-video-camera").attr("class","");
$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".paragraphText a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}else{$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".paragraphText a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}}});
$(".combinationContentCard a[title]").each(function(){h=$(this).attr("title");
g=$(this).attr("href");
if(!isNaN(h)&&(/^[0-9]{13}$/.test(h))&&g=="#"){if($(this).find("span.fa-video-camera").length!=0){$(this).find("span.fa-video-camera").attr("class","");
$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".combinationContentCard a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}else{$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".combinationContentCard a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}}});
var a=document.getElementsByClassName("bcvideo");
for(var d=0,e=a.length;
d<e;
d++){var j=document.getElementsByClassName("bcvideo")[d].getAttribute("asset-id");
var c="return showVideo('";
var f=c.concat(j);
var b="')";
var k=f.concat(b);
document.getElementsByClassName("bcvideo")[d].setAttribute("onclick",k)
}});
if(typeof jQuery==="undefined"||typeof Modernizr==="undefined"){throw new Error("Missing jQuery, Modernizr")
}$(document).ready(function(){$(".module .share .share-tip").each(function(){var v=$(this).prev(".module .share a").width();
$(this).css("right",v/2-20)
});
var p=window.location.hash;
if(p!=""&&!(p.indexOf("=")>-1)&&$(window.location.hash).length>0){$("html, body").animate({scrollTop:parseInt($(window.location.hash).offset().top-(2*($(".breadCrumb").height()+$(".vm-border").height())))},2000)
}var h=$("[data-share-properties]").attr("data-linkedin-app-key")||"",d=$("[data-share-properties]").attr("data-facebook-app-id")||"",b=$("[data-share-properties]").attr("data-facebook-app-version")||"";
twitterVia=$("[data-share-properties]").attr("data-twitter-via")||"",twittercid=$("[data-share-properties]").attr("data-twitter-cid")||"",twittersrc=$("[data-share-properties]").attr("data-twitter-src")||"",facebookcid=$("[data-share-properties]").attr("data-facebook-cid")||"",facebooksrc=$("[data-share-properties]").attr("data-facebook-src")||"",linkedincid=$("[data-share-properties]").attr("data-linkedin-cid")||"",linkedinsrc=$("[data-share-properties]").attr("data-linkedin-src")||"",googlecid=$("[data-share-properties]").attr("data-google-cid")||"",googlesrc=$("[data-share-properties]").attr("data-google-src")||"";
if(($(".social-block a").html()!=undefined&&$(".social-block a").html()!="")||($(".social-links-con a").html()!=undefined&&$(".social-links-con a").html()!="")||($(".shareResults a").html()!=undefined&&$(".shareResults a").html()!="")||($(".pw-social-share  a").html()!=undefined&&$(".pw-social-share  a").html()!="")||($(".social-links  a").html()!=undefined&&$(".social-links  a").html()!="")||($(".social-sharing a").html()!=undefined&&$(".social-sharing a").html()!="")){function s(y){var w=y+"=";
var v=document.cookie.split(";");
for(var z=0;
z<v.length;
z++){var A=v[z];
while(A.charAt(0)==" "){A=A.substring(1)
}if(A.indexOf(w)==0){return A.substring(w.length,A.length)
}}return""
}var m=decodeURIComponent(s("OptanonConsent"));
var a="";
if(document.cookie.indexOf("OptanonConsent")>-1&&s("OptanonConsent").indexOf("groups=")>-1){if(m.indexOf("C0005:1")>-1){if(d!=""&&b!=""){o()
}j();
if(h!=""){r()
}u()
}}else{c()
}function c(){if(document.cookie.indexOf("OptanonConsent")>-1&&s("OptanonConsent").indexOf("groups=")>-1){clearTimeout(myVar);
if(m.indexOf("C0005:1")>-1){if(d!=""&&b!=""){o()
}j();
if(h!=""){r()
}u()
}}else{a=setTimeout(c,250)
}}}function o(){if(!window.location.href.match(/\/cn\//)&&!window.location.href.match(/\/cn\./)){$.getScript("//connect.facebook.net/en_US/sdk.js",function v(){FB.init({appId:d,xfbml:true,version:b})
})
}}function j(){if(!window.location.href.match(/\/cn\//)&&!window.location.href.match(/\/cn\./)){$.getScript("//platform.twitter.com/widgets.js",function v(){})
}}function r(){if(!h){}if(!window.location.href.match(/\/cn\//)&&!window.location.href.match(/\/cn\./)){$.getScript("//platform.linkedin.com/in.js?async=true",function v(w){IN.init({api_key:h,authorize:true})
})
}}function u(){if(!window.location.href.match(/\/cn\//)&&!window.location.href.match(/\/cn\./)){$.getScript("//apis.google.com/js/platform.js?async=true",function v(w){})
}}$(document).on("click",".social-block a, .social-links-con a, .shareResults a, .pw-social-share a, .social-links a, .social-sharing a",function(y){y.preventDefault();
var v=$(y.currentTarget);
var w=f(v);
switch(w.network){case"facebook":if(d!=""&&b!=""){if(getOneTrustCookie.indexOf("C0005:1")>-1){l(w)
}}break;
case"linkedin":if(h!=""){t(w)
}break;
case"twitter":g(w);
break;
case"google":e(w);
break
}});
function f(B){var A;
var H=B.attr("data-redirect")||"";
var G=B.attr("data-brightcove")||"";
var D=B.attr("data-url")||window.location.toString();
D=D.replace("CID=","cid=").replace("SRC=","src=");
if(H=="redirect"){if(D.indexOf("/content/vmware")>=0||D.indexOf("/content/brand")>=0){A=window.location.protocol+"//"+window.location.host+D+".html"
}else{if(D.indexOf("/content/dam")>=0){A=window.location.protocol+"//"+window.location.host+D
}else{A=D
}}}else{if(G=="brightcove"){A="http://players.brightcove.net/1534342432001/Byh3doRJx_default/index.html?videoId="+D
}else{if(D.indexOf("/content/vmware")>=0||D.indexOf("/content/dam")>=0||D.indexOf(".html")>=0){var y=B.attr("data-share");
if(y=="facebook"){if(facebookcid!=""&&facebooksrc!=""){if(D.indexOf("?")>1&&!D.endsWith("?")){if(D.indexOf("cid=")>1){D=k(D,"cid",facebookcid);
if(D.indexOf("src=")>1){D=k(D,"src",facebooksrc)
}else{D=D+"&src="+facebooksrc
}}else{if(D.indexOf("src=")>1){D=k(D,"src",facebookcid);
if(D.indexOf("cid=")>1){D=k(D,"cid",facebooksrc)
}else{D=D+"&cid="+facebooksrc
}}else{D=D+"&cid="+facebookcid+"&src="+facebooksrc
}}}else{D.replace("?","");
D=D+"?cid="+facebookcid+"&src="+facebooksrc
}}}else{if(y=="linkedin"){if(linkedincid!=""&&linkedinsrc!=""){if(D.indexOf("?")>1&&!D.endsWith("?")){if(D.indexOf("cid=")>1){D=k(D,"cid",linkedincid);
if(D.indexOf("src=")>1){D=k(D,"src",linkedinsrc)
}else{D=D+"&src="+linkedinsrc
}}else{if(D.indexOf("src=")>1){D=k(D,"src",facebookcid);
if(D.indexOf("cid=")>1){D=k(D,"cid",facebooksrc)
}else{D=D+"&cid="+facebooksrc
}}else{D=D+"&cid="+linkedincid+"&src="+linkedinsrc
}}}else{D.replace("?","");
D=D+"?cid="+linkedincid+"&src="+linkedinsrc
}}}else{if(y=="twitter"){if(twittercid!=""&&twittersrc!=""){if(D.indexOf("?")>1&&!D.endsWith("?")){if(D.indexOf("cid=")>1){D=k(D,"cid",twittercid);
if(D.indexOf("src=")>1){D=k(D,"src",twittersrc)
}else{D=D+"&src="+twittersrc
}}else{if(D.indexOf("src=")>1){D=k(D,"src",facebookcid);
if(D.indexOf("cid=")>1){D=k(D,"cid",facebooksrc)
}else{D=D+"&cid="+facebooksrc
}}else{D=D+"&cid="+twittercid+"&src="+twittersrc
}}}else{D.replace("?","");
D=D+"?cid="+twittercid+"&src="+twittersrc
}}}else{if(y=="google"){if(googlecid!=""&&googlesrc!=""){if(D.indexOf("?")>1&&!D.endsWith("?")){if(D.indexOf("cid=")>1){D=k(D,"cid",googlecid);
if(D.indexOf("src=")>1){D=k(D,"src",googlesrc)
}else{D=D+"&src="+googlesrc
}}else{if(D.indexOf("src=")>1){D=k(D,"src",facebookcid);
if(D.indexOf("cid=")>1){D=k(D,"cid",facebooksrc)
}else{D=D+"&cid="+facebooksrc
}}else{D=D+"&cid="+googlecid+"&src="+googlesrc
}}}else{D.replace("?","");
D=D+"?cid="+googlecid+"&src="+googlesrc
}}}}}}A=D
}else{A=window.location.protocol+"//"+window.location.host+window.location.pathname+"#"+D
}}}var E=B.attr("data-share")||"";
var J=B.attr("data-title")||"";
var w=B.attr("data-summary")||"";
var z=document.createElement("div");
z.innerHTML=w;
var I=z.innerText;
var F=window.location.origin+B.attr("data-image")||"";
var L=twitterVia||B.attr("data-via");
var K=B.attr("data-related")||"";
var v=B.attr("data-linkedin-source")||"";
var C={context:B,network:E,url:A,title:J,summary:I,image:F,via:L,related:encodeURIComponent(K),source:v};
return C
}function k(v,y,z){if(z==null){z=""
}var w=new RegExp("\\b("+y+"=).*?(&|$)");
if(v.search(w)>=0){return v.replace(w,"$1"+z+"$2")
}v=v.replace(/\?$/,"");
return v+(v.indexOf("?")>0?"&":"?")+y+"="+z
}function n(v){var y=$("body");
var w=$(document.createElement("a"));
var A=(window.innerWidth/2)-(550/2);
var z=(window.innerHeight/2)-(400/2);
var B="toolbar=no, location=no, menubar=no, width=550, height=400, top="+z+",left="+A;
if(Modernizr.touch){w.attr("id","tmp-share");
w.attr("href",v);
w.attr("target","_blank");
w.attr("style","display:none;");
w.text("temp link for share");
y.append(w);
document.location=$("#tmp-share").attr("href")
}else{window.open(v,"_blank",B)
}}function l(v){FB.ui({method:"feed",name:v.title,mobile_iframe:true,link:v.url,caption:"vmware",picture:v.image,description:v.summary},function(w){if(w&&!w.error_code){window.location.href=""
}else{}});
if(window.location.href.indexOf("digital-workspace-survey.html")>-1){if(typeof addCTracking!="undefined"){addCTracking("digital-workspace-survey : facebook")
}}}function t(w){var v="//www.linkedin.com/shareArticle?";
v+="title="+w.title;
v+="&summary="+w.summary;
v+="&source="+w.source;
v+="&imagecontent ="+w.image;
v+="&url="+encodeURIComponent(w.url);
n(v);
if(window.location.href.indexOf("digital-workspace-survey.html")>-1){if(typeof addCTracking!="undefined"){addCTracking("digital-workspace-survey : linkedin")
}}}function g(w){var v="https://twitter.com/intent/tweet";
v+="?hashtags=";
v+="&original_referer="+encodeURIComponent(document.location.href);
v+="&related="+w.related;
v+="&source=tweetbutton";
v+="&text="+w.title;
v+="&via="+w.via;
v+="&url="+encodeURIComponent(w.url);
n(v);
if(window.location.href.indexOf("digital-workspace-survey.html")>-1){if(typeof addCTracking!="undefined"){addCTracking("digital-workspace-survey : twitter")
}}}function e(w){var v="//plus.google.com/share?";
v+="url="+encodeURIComponent(w.url);
n(v);
if(window.location.href.indexOf("digital-workspace-survey.html")>-1){if(typeof addCTracking!="undefined"){addCTracking("digital-workspace-survey : googleplus")
}}}});
$(document).ready(function(){$('a[data-element-type="video"]').mouseover(function(){$(".imgnewtab").hide();
$(".getImage").hide();
$(".outer-container").attr("style","")
});
$(".paragraphText table").closest(".container-fluid").css("padding","0");
$(".paragraphText table").attr("class","table-responsive tableComp tableCustom");
$(".paragraphText table").attr("id","tableComp");
$(".paragraphText table").wrap("<div class='section-custom full-width'></div>");
$(".paragraphText table div.table-img").each(function(){var c=$(this).css("background-image").replace(/^url\(['"]?/,"").replace(/['"]?\)$/,"");
$(this).find("a").attr("largeimagename",c);
$(this).find("a").attr("onclick","return ImageLargeView(this);");
$(this).find("a").attr("href","javascript:void(0);")
});
$(".paragraphText table div.tableIcon").each(function(){var c=$(this).css("background-image").replace(/^url\(['"]?/,"").replace(/['"]?\)$/,"");
$(this).find("a").attr("largeimagename",c);
$(this).find("a").attr("onclick","return ImageLargeView(this);");
$(this).find("a").attr("href","javascript:void(0);")
});
$(".paragraphText table div.tooltip_container a").each(function(){var c=$(this).attr("title");
$(this).attr("data-original-title",c);
$(this).attr("data-toggle","tooltip");
$(this).attr("data-placement","bottom");
$(this).attr("href","javascript:void(0);");
$(this).tooltip()
});
$('[data-toggle="tooltip"]').tooltip();
var b=[];
var a=false;
$(".paragraphText table tr").each(function(){if($(this).children().prop("tagName")==="TH"){a=true;
$(this).addClass("headerRow");
$(".paragraphText table tr:even").attr("style","background-color:#e3e3e3!important");
$(".paragraphText table tr:even a.table-icon").attr("style","float:none; display:block;background:#e3e3e3");
$(".paragraphText table tr:odd").attr("style","background-color:#fff!important");
$(".paragraphText table tr:odd a.table-icon").attr("style","float:none; display:block;background:#fff");
for(var d=0;
d<$(this).find("th").length;
d++){b.push($(this).find("th")[d].innerHTML)
}}else{for(var c=0;
c<$(this).find("td").length;
c++){if(a){$(this).find("td")[c].setAttribute("data-th",b[c])
}else{$(this).find("td")[c].removeAttribute("data-th")
}}}});
if($(window).width()<800){$(".tableCustom tr td").each(function(){if($(this).data("th")=="undefined"){$(this).removeAttr("data-th")
}})
}});
$(window).resize(function(){if($(window).width()<800){$(".tableCustom tr td").each(function(){if($(this).data("th")=="undefined"){$(this).removeAttr("data-th")
}})
}});
$(window).resize(function(){setInterval(function(){heroCarousel2()
},1000)
});
$(function(){var a=$("#carousel");
if(a.length>0){a.carousel()
}if(a.length>0){a.bind("slide.bs.carousel",function(b){if($(b.relatedTarget).find(".carousel_img").attr("data-original")!=null||$(b.relatedTarget).find(".carousel_img").attr("data-original")!=undefined){$(b.relatedTarget).find(".carousel_img").css("background-image","url("+$(b.relatedTarget).find(".carousel_img").attr("data-original")+")");
$(b.relatedTarget).find(".carousel_img").removeAttr("data-original")
}})
}owlHeroCarousel2();
heroCarousel2()
});
var owl;
function owlHeroCarousel2(){var a=$(".heroCarousel2");
if(a.find(".owl-dots").length){a.find(".owl-dots").remove()
}$(a).each(function(){var g=$(this);
var n=g.find(".herocarouseltransitionValue").attr("transitionValue");
var h=g.find(".herocarouseltransitionOffOn").attr("transitionOffOn");
var d=n*1000;
function f(){g.find(".owl-carousel").data("owlCarousel").next()
}var m=g.find(".owl-item").length;
var j=1;
var o=0;
var c;
var k;
var b=function(){c=setInterval(function(){g.find(".owl-carousel").data("owlCarousel").next();
j++;
o=$(".owl-page.active").index()+1;
if(j==m){k=setTimeout(function(){g.find(".owl-carousel").data("owlCarousel").jumpTo(0);
$("#heroBanner .owl-dots span").removeClass("active");
$("#heroBanner .owl-dots span:first-child").addClass("active");
clearInterval(c)
},n*1000)
}},d)
};
var e;
if(h==="transitionOn"){b()
}else{setInterval(c)
}g.find(".owl-carousel .owl-page, .owl-next, .owl-prev").on("click",function(){clearInterval(c);
if(h==="transitionOn"){b()
}});
if(g.find(".owl-item").length<=1){g.find(".owl-controls .owl-prev").hide();
g.find(".owl-controls .owl-next").hide()
}$(document).on("click touchstart",".heroCarousel2 .owl-page, .heroCarousel2 .section-custom a.btn",function(){clearInterval(c);
clearTimeout(k)
});
function l(){$.each(this.owl.userItems,function(t){var v=$(this).find(".item-img").attr("title");
var r=$(this).find(".item-img").attr("data-icon");
var u=$(".homeBanner .owl-controls .owl-pagination .owl-page span");
var p=[];
var s=[];
$.each($(".titleIcons"),function(w){p[w]=$(this).attr("data-icon");
s[w]=$(this).attr("title")
});
if(v==null&&r==null){v=s[t];
r=p[t]
}})
}if(g.find(".heroBannerCarousel").length>0){g.find(".heroBannerCarousel").owlCarousel({navigation:true,rewindNav:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],startPosition:0,slideSpeed:e,paginationSpeed:e,lazyLoad:true,loop:true,autoplay:true,autoplayTimeout:1000,autoplaySpeed:1000,singleItem:true,afterInit:l,startDragging:f,afterUpdate:l,afterAction:function(p){this.$owlItems.removeClass("active");
this.$owlItems.eq(this.currentItem).addClass("active");
if(this.$owlItems.eq(this.currentItem).find(".l2_banner_content h2.herowhite").length>0||this.$owlItems.eq(this.currentItem).find(".l2_banner_content p.herowhite").length>0){this.$owlItems.eq(this.currentItem).closest(".herobanner .homeBanner").addClass("invertColor")
}else{this.$owlItems.eq(this.currentItem).closest(".herobanner .homeBanner").removeClass("invertColor")
}if($(window).width()<800){$(".heroCarousel2 .owl-wrapper-outer").height($(".owl-item.active").height())
}}})
}})
}function heroCarousel2(){var a=$(".heroCarousel2");
$(a).each(function(){if($(window).width()<800){$(".heroCarousel2 .owl-item").each(function(){if($(this).find(".l2_banner_content").children().length==0){$(this).find(".l2_banner_content").css("padding","0")
}})
}var g=$(this);
var d=g.find(".homeBanner .owl-controls .owl-pagination .owl-page span");
var e=g.find(".homeBanner");
var f=g.find(".homeBanner .owl-controls .owl-pagination .owl-page");
var h=g.find(".homeBanner .owl-controls");
if(e.length>=1&&e.parent().hasClass("heroCarousel2")==true){d.remove();
var b=f.length;
if(b>=1&&f.parents().hasClass("heroCarousel2")==true){var j=h.innerWidth();
h.css({"margin-left":"-"+j/2+"px"});
var c=parseInt(h.innerWidth()-((b-1)*4));
j=parseInt(c/b);
if(b>1){f.css({width:j+"px","margin-right":"4px"});
g.find(".homeBanner .owl-controls .owl-pagination .owl-page:last").css({"margin-right":"0px"})
}else{f.css({width:"100%"})
}}}})
}$(document).ready(function(){if(!$(".homepage .heroCarousel").length){$(".homepage .content-container > div").css("padding-top","50px")
}$("#heroCarousel2 .owl-controls").attr("id","heroBanner");
if(window.innerWidth>801){if($(".homepage .heroCarousel2").length){$(".homepage .nav-vm:before").css("bottom","-3px")
}}});
$(window).load(function(){if($(window).width()<800){$(".heroCarousel2 .owl-wrapper-outer").height($(".owl-item.active").height())
}});
$(window).load(function(){if($(".c2c-popup").length){$(".c2c-draggable").draggable({handle:"header",containment:"window",drag:function(b,e){e.position.left=Math.max(136,e.position.left);
e.position.top=Math.max(0,e.position.top)
}});
if(($("#bottom-bar").length)){var a=$("#bottom-bar").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a})
}else{if($("#onetrust-banner-sdk").length){var a=$("#onetrust-banner-sdk").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a});
$(document).on("click","#onetrust-accept-btn-handler",function(){if($(window).width()>800){$(".c2c-content").css({right:"0px",bottom:"52px"})
}else{$(".c2c-content").css({bottom:"45px"})
}});
$(window).resize(function(){var b=$("#onetrust-banner-sdk").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:b})
})
}else{if($("#_evh-button").length){var a=$("#_evh-link").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a})
}else{if($("#teconsent").is(":visible")&&($("#bottom-bar").length<1)){if($(window).width()>800){var a=$("#teconsent").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a})
}else{$(".c2c-content").css({right:"0px",bottom:"45px"})
}}else{$(".c2c-content").css({right:"20px",bottom:"20px"});
$(document).on("click","#truste-consent-button",function(){if($(window).width()>800){$(".c2c-content").css({right:"0px",bottom:"60px"})
}else{$(".c2c-content").css({bottom:"45px"})
}})
}}}}}});
$("body").on("click",".c2c-close",function(){console.log("ending");
$("#idIframe").attr("src","https://www.vmware.com/content/dam/digitalmarketing/vmware/global-icons/loading.gif")
});
$(window).load(function(){setInterval(function(){if(($('.vmworld_videoCrop [type="video/mp4"]').length)&&($(window).width()>991)){if($(".video-bg video").height()>$(".bannerBrand").height()){setTimeout(function(){$(".video-bg video").css("margin-top","-"+($(".video-bg video").height()-$(".bannerBrand").height())/2+"px")
},200)
}}else{$(".video-bg video").css("margin-top","0")
}},500)
});
$(window).resize(function(){if(($('.vmworld_videoCrop [type="video/mp4"]').length)&&($(window).width()>991)){if($(".video-bg video").height()>$(".bannerBrand").height()){setTimeout(function(){$(".video-bg video").css("margin-top","-"+($(".video-bg video").height()-$(".bannerBrand").height())/2+"px")
},200)
}}else{$(".video-bg video").css("margin-top","0")
}});
$(window).on("resize",function(){if($(".banner-video").length){$(".banner-video").height($(window).width()/2);
$(".video-wrapper").height($(window).width()/2)
}if($(window).width()<800){setHerobannerHeight()
}}).resize();
$(window).load(function(){if($(window).width()<800){setHerobannerHeight()
}});
function setHerobannerHeight(){var a=setInterval(function(){$(".vmworld_videoCrop").height($(".video-wrapper").height()+$(".l2_banner_content").outerHeight());
$(".l2_banner_content").css("top",$(".video-brightcove").closest(".video-wrapper").height()+"px")
},100);
setTimeout(function(){clearInterval(a);
$(".vmware-bannerCaurosel .video-bg > video").closest(".video-wrapper").css("height","auto");
$(".vmware-bannerCaurosel .video-bg > video").closest(".bannerBrand.brandBannerContainer").css("height","auto")
},300)
}function addVideoBg(){if(window.innerWidth>1025){$(".threepxHighVideo .video-bg").removeClass("video-bg");
$(".fivepxHighVideo .video-bg").removeClass("video-bg");
$(".sevenpxHighVideo .video-bg").removeClass("video-bg")
}else{$(".threepxHighVideo .videoWhite").addClass("video-bg");
$(".fivepxHighVideo .videoWhite").addClass("video-bg");
$(".sevenpxHighVideo .videoWhite").addClass("video-bg")
}}addVideoBg();
$(document).ready(function(){if($(".carouselHeader").length){var d=$("#carousel");
if(d.length>0){d.carousel()
}$(function(){if($(".lazy").length>0){$(".lazy").lazyload({effect:"fadeIn",threshold:2})
}if(d.length>0){d.bind("slide.bs.carousel",function(g){if($(g.relatedTarget).find(".carousel_img").attr("data-original")!=null||$(g.relatedTarget).find(".carousel_img").attr("data-original")!=undefined){$(g.relatedTarget).find(".carousel_img").css("background-image","url("+$(g.relatedTarget).find(".carousel_img").attr("data-original")+")");
$(g.relatedTarget).find(".carousel_img").removeAttr("data-original")
}})
}});
setTimeout(function(){b()
});
setTimeout(function(){e()
});
setTimeout(function(){a()
});
setTimeout(function(){f()
});
function b(){$(".owl-container #heroBanner .owl-controls").removeAttr("style");
var g=$(".note-overlay").outerHeight();
$(".owl-container #heroBanner .owl-controls").css("bottom",g)
}function f(){$("#heroBanner .owl-page p").css("height","auto");
var g=new Array();
var h="";
$("#heroBanner .owl-page").each(function(){g.push($(this).children().children("p").outerHeight())
});
h=Math.max.apply(Math,g);
$("#heroBanner .owl-page p").css("height",h)
}function e(){$(".bottom-home .col-2").css("height","auto");
var h=new Array();
var g="";
$(".bottom-home .col-2").each(function(){h.push($(this).outerHeight())
});
g=Math.max.apply(Math,h);
$(".bottom-home .col-2").css("height",g)
}function a(){$(".twoBannerModule .twoBannerModule-Inner").css("height","auto");
var h=new Array();
var g="";
$(".twoBannerModule .twoBannerModule-Inner").each(function(){h.push($(this).outerHeight())
});
g=Math.max.apply(Math,h);
$(".twoBannerModule .twoBannerModule-Inner").css("height",g)
}var c;
$(document).ready(function(){function h(){$.each(this.owl.userItems,function(t){var v=$(this).find(".item-img").attr("title");
var r=$(this).find(".item-img").attr("data-icon");
var u=$(".homeBanner .owl-controls .owl-pagination .owl-page span");
var p=[];
var s=[];
$.each($(".titleIcons"),function(w){p[w]=$(this).attr("data-icon");
s[w]=$(this).attr("title")
});
if(v==null&&r==null){v=s[t];
r=p[t]
}$(u[t]).append('<i class="'+r+'"></i><p>'+v+"</p>")
})
}function j(){$.each(this.owl.userItems,function(t){var v=$(this).find(".item-img").attr("title");
var r=$(this).find(".item-img").attr("data-icon");
var u=$(this).closest(".tab-pane").find(".owl-controls .owl-pagination .owl-page span");
var p=[];
var s=[];
if($(this).closest(".tab-pane").find(".titleIcons").length){$.each($(this).closest(".tab-pane").find(".titleIcons"),function(w){p[w]=$(this).attr("data-icon");
s[w]=$(this).html()
})
}else{$(this).closest(".tab-pane").find(".owl-pagination").hide();
$(this).closest(".tab-pane").find(".owl-controls").css("border","0")
}if(v==null&&r==null){v=s[t];
r=p[t]
}if(r){$(u[t]).append('<img src="'+r+'">'+v)
}else{$(u[t]).append(v)
}})
}function g(){var p=$("#heroBanner").data("owlCarousel");
p.next()
}var o=$(this).find(".herocarouseltransitionValue").attr("transitionValue");
var m=$(this).find(".herocarouseltransitionOffOn").attr("transitionOffOn");
if($(".carouselHeader").length>0){$(".carouselHeader .owl-carousel").owlCarousel({navigation:true,dots:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],slideSpeed:300,paginationSpeed:400,lazyLoad:true,loop:true,autoplay:true,autoplayTimeout:1000,autoplaySpeed:1000,singleItem:true,afterInit:j,startDragging:g,afterUpdate:j,afterAction:function(p){this.$owlItems.removeClass("active");
this.$owlItems.eq(this.currentItem).addClass("active");
if(this.$owlItems.eq(this.currentItem).find(".item").children(".l2_banner_content").hasClass("invert")){$(".homeBanner").addClass("invertColor")
}else{$(".homeBanner").removeClass("invertColor")
}}})
}var l=$("#heroBanner").data("owlCarousel");
var k;
var n=function(){k=setInterval(function(){l.next()
},o*1000)
};
if(m==="transitionOn"){n()
}$("#heroBanner .owl-page, .owl-next, .owl-prev").on("click",function(){clearInterval(k);
if(m==="transitionOn"){n()
}});
if($("#heroBanner").find(".owl-item").length<=1){$("#heroBanner .owl-controls .owl-prev").hide();
$("#heroBanner .owl-controls .owl-next").hide()
}});
$(document).on("change","#carouselHeaderSelect",function(){var g=$("#carouselHeaderSelect option:selected").attr("class");
$('.vmw-wrapper .tabs ul li a[href="#'+g+'"]').trigger("click")
});
$(".carouselHeader").parents("body").css("overflow-x","hidden");
$(".carouselHeader").parents("html").css("overflow-x","hidden");
if($(".carouselHeader .nav-tabs li").length==1){$(".carouselHeader .nav-tabs li").css("visibility","hidden")
}if($("#carouselHeaderSelect option").length==1){$(".carouselHeader .tabs>.container-fluid").css("visibility","hidden")
}}});