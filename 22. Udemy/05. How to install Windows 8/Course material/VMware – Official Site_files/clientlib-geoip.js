window.vmf=function(){var c=function(d){return $("#"+d)
};
var b=function(d){document.write('<script src="',d,'" type="text/javascript"><\/script>')
};
var a=[];
return{loadJs:function(f,e,d){if(($.inArray(f,a)<0)){(e)?$.getScript(f,d):b(f)
}},loadCss:function(d){var e=document.createElement("link");
e.setAttribute("rel","stylesheet");
e.setAttribute("type","text/css");
e.setAttribute("href",d);
document.getElementsByTagName("head")[0].appendChild(e)
},dom:function(){return{onload:function(d){$(document).ready(d)
},unload:function(d){$(window).unload(d)
},id:function(d){return document.getElementById(d)
},getHtml:function(d){return c(d).html()
},setHtml:function(f,d,e){switch(e){case"before":c(f).prepend(d);
break;
case"after":c(f).append(d);
break;
default:c(f).html(d)
}},addHandler:function(f,e,d){(f instanceof jQuery?f:jQuery(f)).bind(e,d)
},removeHandler:function(f,e,d){(f instanceof jQuery?f:jQuery(f)).unbind(e,d)
},get:function(d){return $(d)
},serialize:function(d){return jQuery(d).serialize()
},trigger:function(e,d){(e instanceof jQuery?e:jQuery(e)).trigger(d)
}}
}(),cookie:function(){return{read:function(f){var e=f+"=";
var d=document.cookie.split(";");
for(var g=0;
g<d.length;
g++){var h=d[g];
while(h.charAt(0)==" "){h=h.substring(1,h.length)
}if(h.indexOf(e)==0){return h.substring(e.length,h.length)
}}return null
},write:function(d,h,g){var f="";
if(g){var e=new Date();
e.setTime(e.getTime()+(g*24*60*60*1000));
f="; expires="+e.toGMTString()
}else{f=""
}if(d=="pszGeoPref"){document.cookie=d+"="+h+f+";domain=.vmware.com; path=/"
}else{document.cookie=d+"="+h+f+"; path=/"
}},clear:function(d){vmf.cookie.write(d,"",-1)
}}
}(),json:function(){return{txtToObj:function(d){try{return $.evalJSON(d)
}catch(e){return null
}},objToTxt:function(d){return $.toJSON(d)
}}
}(),array:function(){return{contains:function(e,d){return($.inArray(e,d)>-1)
},txtToAry:function(d){return d.split(",")
},aryToTxt:function(d){return d.join(",")
},objToAry:function(d){return $.makeArray(d)
}}
}(),string:function(){return{setCharAt:function(e,d,g){if(d>=e.length){return e
}else{var f=e.substring(0,d);
f+=g;
f+=e.substring(d+1,e.length);
return f
}},trim:function(d){return $.trim(d)
}}
}(),ns:function(){return{use:function(d){var f=d.split(".");
var g=window;
for(var e in f){if(!g[f[e]]){g[f[e]]={};
g=g[f[e]]
}else{g=g[f[e]]
}}}}
}(),ajax:function(){return{connect:function(d){$.ajax(d)
},get:function(d,e,k,h,g,f){var j={type:"GET",url:d,data:e,success:k,error:h,complete:g};
if(f){j.timeout=f
}jQuery.ajax(j)
},post:function(g,j,h,f,e,d){var k={type:"POST",url:g,data:j,success:h,error:f,complete:e};
if(d){k.timeout=d
}jQuery.ajax(k)
}}
}(),form:function(){return{serialize:function(h,g){var f=vmf.dom.id(h)||document.forms[h];
if(!f){return null
}if(g){var e=[];
for(var d in g){e.push(f[g[d]])
}return jQuery(e).serialize()
}else{return jQuery(f).serialize()
}},getRadioBtn:function(f,e){var d=vmf.dom.id(f)||document.forms[f];
if(!d){return null
}return jQuery("input[@name='"+e+"']:checked").val()
},getCbk:function(f,d){var e=vmf.dom.id(f)||document.forms[f];
if(!e){return false
}return e[d].checked
},setCbk:function(g,e,f){f=f||true;
var d=vmf.dom.id(g)||document.forms[g];
if(d){d[e].checked=f
}}}
}(),url:function(){return{getParam:function(f){var g=window.location.toString();
var d=g.indexOf("?");
if(d<0){return null
}var j=g.substring(d+1,g.length).split("&");
for(var h in j){var e=j[h].split("=");
if(e[0]==f){return e[1]
}}return null
},hasAnchor:function(d){var e=window.location.toString();
var f=e.indexOf("#");
if(f<0){return false
}else{return(e.substring(f+1,e.length)==d)
}},redirect:function(d){if(!d.url){return
}switch(d.target){case"new":window.open(d.url);
break;
default:document.location=d.url
}}}
}()}
}();
var dbPassVars=new Object();
var dbParser=function(d){var a=true;
var c=false;
dbPassVars={primary_sic:"",annual_sales:"",city:"",company_name:"",country:"",demandbase_sid:"",employee_count:"",employee_range:"",fortune_1000:"",industry:"",isp:"",registry_area_code:"",registry_city:"",registry_company_name:"",registry_country_code:"",registry_state:"",registry_zip_code:"",state:"",sub_industry:"",zip:"",audience:""};
var b="";
for(key in dbPassVars){if(typeof d[key]!=="undefined"){dbPassVars[key]=d[key];
if(a==true){b+=key+"="+d[key]+"\n"
}}else{if(a==true){b+=key+"=UNDEFINED\n"
}}}if(c==true){b+="isp="+d.isp+"";
var e={city:"registry_city",state:"registry_state",zip:"registry_zip_code",country:"registry_country_code",company_name:"registry_company_name"};
for(key in e){delete dbPassVars[e[key]];
if(d.isp==true||dbPassVars[key]==null||dbPassVars[key]==""){dbPassVars[key]=d[e[key]];
b+=key+"="+dbPassVars[key]+"<-- reg override\n"
}}}if(typeof d.stock_ticker!=="undefined"&&d.stock_ticker!=null&&d.stock_ticker!=""){dbPassVars.company_name+=" ["+d.stock_ticker+"]"
}b+="ip="+d.ip+"\n";
dbPassVars.debug=b
};
var initialTab="0";
var initialRegion="";
Geo={},function loadTabs(){var b={};
var c=window.parent.initialTab;
if(c=="0"){var a=jQuery("#sb-player ul.option-tabs").tabs("#sb-player div.option-locals",{effect:"fade",fadeOutSpeed:"slow"})
}else{var a=jQuery("#sb-player ul.option-tabs").tabs("#sb-player div.option-locals",{initialIndex:c,effect:"fade",fadeOutSpeed:"slow"})
}vmf.dom.onload(psz.rule.geoRedirect.initHandler)
};
function sendTracking(){s.hier1="";
if(s.prop1){s.channel=s.prop1;
setProps1t5();
var a=s.t();
if(a){document.write(a)
}}}function loadOptions(){$("#LocaleSelect").hide();
GeoPopupShowCountry();
$(".geoPopup").css("overflow","auto");
s.pageName="vmware : HP_GEO_RECOMMEND : MORE_OPTION";
sendTracking()
}jQuery.extend({getUrlVars:function(){var d=[],c;
var a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
for(var b=0;
b<a.length;
b++){c=a[b].split("=");
d.push(c[0]);
d[c[0]]=c[1]
}return d
},getUrlVar:function(a){return jQuery.getUrlVars()[a]
}});
function LocationGeo(){vmf.dom.onload(psz.rule.geoRedirect.initHandler);
this.shadowbox=window.parent.Shadowbox;
this.currCountryCode=null;
this.initab=-1;
this.countrySite="";
this.countryMapping=this.getCountryMapping();
this.dbPassVars=window.parent.dbPassVars;
if(this.dbPassVars!==null){if(this.dbPassVars.isp){this.currCountryCode=this.dbPassVars.registry_country_code
}else{if(this.dbPassVars.country){this.currCountryCode=this.dbPassVars.country
}else{this.currCountryCode=this.dbPassVars.registry_country_code
}}}}LocationGeo.prototype.getCountryMapping=function(){var c=this.dbPassVars;
var d=this.currCountryCode;
var b=null;
var a=null;
var e=null;
jQuery.ajax({url:"/content/dam/vmwaredesigns/geoip/configs/country-mapping.json",dataType:"json",async:false,success:function(f){LocationGeo.prototype.setCountryMapping(f)
}})
};
LocationGeo.prototype.setCountryMapping=function(c){this.countryMapping=c;
var b=vmf.cookie.read("pszGeoPref");
if(b==null||b=="null"||b==""){vmf.cookie.write("pszGeoPref","");
var a="";
if(jQuery.browser.msie){a="&callback=?"
}else{a=""
}if(db!=null){LocationGeo.prototype.apacCountryMapping(db)
}else{Redesign.CustomFn.showTextLightBox('We are unable to detect your language. Please <a href="//www.vmware.com/worldwide.html">continue to the worldwide page </a>to update your preference.')
}}};
LocationGeo.prototype.apacCountryMapping=function(d){if(d!==null){var c="";
if($.getUrlVars()["apacCode"]){c=$.getUrlVars()["apacCode"]
}else{c=d.registry_country_code
}var b="";
if(c!==null||c!=""){jQuery.each(this.countryMapping,function(e,f){if(e==c){b=f
}});
if(b.region=="AP"){if(!b||b.site===""||b.site===null){var a=$.trim(c.toLowerCase())
}else{var a=$.trim(b.site.toLowerCase())
}vmf.url.redirect({url:a})
}else{return true
}}}};
LocationGeo.prototype.loadPopup=function(){var b=this.getvar("cc",this.geturl());
var j="";
var g=this.dbPassVars;
var c=LocationGeo.prototype.countryMapping;
this.countryMapping=c;
var k=false;
if(b){jQuery.each(c,function(l,m){if(l.toLowerCase()==b.toLowerCase()){j=b.toUpperCase();
k=m;
jQuery(".country-lang").html(k.name);
jQuery(".country-name").html(j)
}})
}else{if($.getUrlVars()["currCountryCode"]){j=$.getUrlVars()["currCountryCode"]
}else{if(g!==null){if(g.isp){j=g.registry_country_code
}else{if(g.country){j=g.country
}else{j=g.registry_country_code
}}}}jQuery.each(c,function(l,m){if(l==j){k=m;
jQuery(".country-lang").html(k.name);
jQuery(".country-name").html(j)
}})
}var a="";
a=vmf.cookie.read("pszGeoPref");
if(a!=""&&a!=null){jQuery(".remember-choice-option").attr("checked",true)
}var f=typeof(j);
window.parent.initialRegion=k.region;
if(j!==""&&f=="string"&&navigator.cookieEnabled==true){if(jQuery.browser.msie&&jQuery.browser.version=="6.0"){}else{if(j!=="US"&&a!=="us"&&k.region!="AP"){if(!k||k.site===""||k.site===null){s.pageName="vmware : HP_GEO_SELECTOR : HOME";
var d=$("#location-option-cont").html();
$("#LocaleSelect").hide();
GeoPopupShowCountry();
$(".geoPopup").css("overflow","auto")
}else{s.pageName="vmware : HP_GEO_RECOMMEND : HOME";
var h=j.toLowerCase();
vmf.dom.id("options-selected").setAttribute("href",k.site);
vmf.dom.id("options-selected").setAttribute("rev",h);
var e=$("#location-select-cont").html();
GeoPopupShow()
}sendTracking()
}}}};
LocationGeo.prototype.geturl=function(){var a=document.URL.indexOf("?");
if(a>0){return unescape(document.URL.substring(a+1,document.URL.length))
}else{return false
}};
LocationGeo.prototype.getvar=function(a,e){if(e){var c=false;
var b=e.split("&");
for(i=0;
i<b.length;
i++){var d=b[i].split("=");
if(d[0]==a){c=d[1]
}}if(c){return c
}else{return""
}}else{return""
}};
LocationGeo.prototype.initialTab=function(a){switch(a){case"MENA":return"4";
break;
case"AP":return"3";
break;
case"EU":return"2";
break;
case"LA":return"1";
break;
case"NA":return"0";
break
}};
var geoPref=vmf.cookie.read("pszGeoPref");
var cMapping=window.LocationGeo.prototype.countryMapping;
if(typeof cMapping=="undefined"){window.LocationGeo.prototype.getCountryMapping();
cMapping=window.LocationGeo.prototype.countryMapping
}if(geoPref!="us"&&geoPref!=null&&geoPref!=""&&geoPref!="meaa"&&geoPref!="meab"){var path="";
if(geoPref=="caen"||geoPref=="cafr"||geoPref=="nlbe"||geoPref=="frbe"){switch(geoPref){case"caen":path="/ca/en/";
break;
case"cafr":path="/ca/fr/";
break;
case"nlbe":path="/be/nl/";
break;
case"frbe":path="/be/fr/";
break
}}jQuery.each(cMapping,function(a,b){if(a.toLowerCase()==geoPref.toLowerCase()){if(b.site!=""){path=b.site
}else{path="/"+geoPref+"/"
}}});
if(path!=""){var loc=window.location;
window.location.href=loc.protocol+"//"+loc.host+path
}}else{if(geoPref=="meaa"||geoPref=="meab"){var path="/mena/",loc=window.location;
window.location.href=loc.protocol+"//"+loc.host+path
}};