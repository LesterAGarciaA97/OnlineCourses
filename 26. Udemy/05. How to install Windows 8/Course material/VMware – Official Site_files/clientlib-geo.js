$(window).resize(function(){popupHeight();
geoPopupHeight()
});
$(".overlay-popup").click(function(){popupHide();
$(".geoPopup").css("overflow","hidden");
$("#geo-form-option")[0].reset()
});
$(".close-popup").click(function(){popupHide()
});
var totalH;
var h;
function GeoPopupShow(){$("#LocaleSelect").show();
$(".overlay-popup").show();
popupHeight();
$("#geo-form-option")[0].reset()
}function popupHide(){$(".overlay-popup").hide();
$(".geoPopup").height("0px");
$(".geoPopup").hide();
$("#navbar").removeClass("in");
$(".overlay").hide();
$(".mobi-head").hide();
$(".mobi-head span").remove()
}function GeoPopupShowCountry(){$("#LocaleSelectCountry").show();
geoPopupHeight()
}$(".more-option").click(function(){$("#LocaleSelect").hide();
GeoPopupShowCountry();
$(".geoPopup").css("overflow","auto")
});
function popupHeight(){totalH=$(".popup-header").height()+$(".popup-content").height();
h=$(".geoPopup").height(totalH)
}function geoPopupHeight(){totalH=$(".geoPopupSelect .popup-header").height()+$(".geoPopupSelect .popup-content").height();
h=$(".geoPopupSelect.geoPopup").height(totalH)
}if(navigator.appName=="Microsoft Internet Explorer"){var psz={};
psz.rule={}
}else{vmf.ns.use("psz.rule")
}psz.rule.geoRedirect=function(){var i="pszGeoPref";
var g=365;
var f=function(o){var m=o.attr("id");
var p=m;
var n=vmf.form.getCbk("geo-form","remember-choice");
var j="";
var l="";
if(p.length>2){if(p=="nlbe"||p=="frbe"){j=p.substring(2,4)
}else{if(p=="meaa"||p=="meab"){p="mena";
j="dz"
}else{if(p=="latam"){j="br"
}else{j=p.substring(0,2)
}}}}else{if(p=="uk"){j="fr"
}else{if(p=="ap"){p="apac";
j="fj"
}else{j=p
}}}jQuery.each(LocationGeo.prototype.countryMapping,function(q,r){if(q.toLowerCase()==j){l=r.region
}});
s.pageName="vmware : HP_GEO_SELECTOR : "+l+" :  "+p.toUpperCase();
sendTracking();
if(n){vmf.cookie.write(i,m,g)
}else{if(m=="us"){vmf.cookie.write(i,"us")
}}var k=setTimeout(function(){vmf.url.redirect({url:vmf.dom.id(m).getAttribute("href")})
},500);
return false
};
var e=function(){var j=vmf.form.getCbk("geo-form","remember-choice");
if(!j){vmf.cookie.write(i,"")
}};
var d=function(){var j="";
j=vmf.cookie.read(i);
if(j!=""&&j!=null){vmf.form.setCbk("geo-form-option","remember-choice-option",true)
}};
var c=function(){var j=vmf.form.getCbk("geo-form-option","remember-choice-option");
if(!j){vmf.cookie.write(i,"")
}};
var b=function(){s.pageName="vmware : HP_GEO_RECOMMEND : WORLDWIDE";
sendTracking();
vmf.cookie.write(i,"us",g);
var j=setTimeout(function(){vmf.url.redirect({url:vmf.dom.id("us").getAttribute("href")})
},500);
return false
};
var a=function(){var l=vmf.form.getCbk("geo-form-option","remember-choice-option");
var k=vmf.dom.id("options-selected").getAttribute("rev");
var m=k;
s.pageName="vmware : HP_GEO_RECOMMEND : "+m.toUpperCase();
sendTracking();
if(l){vmf.cookie.write(i,k,g)
}else{vmf.cookie.write(i,"")
}var j=setTimeout(function(){vmf.url.redirect({url:vmf.dom.id("options-selected").getAttribute("href")})
},500);
return false
};
return{initHandler:function(){$(".geo-link").click(function(j){f($(this))
});
$("#remember-choice").click(function(j){e()
});
$("#remember-choice-option").click(function(j){c()
});
$(".options-default").click(function(j){b()
});
$("#options-selected").click(function(j){a()
});
window.onload=d
}}
}();