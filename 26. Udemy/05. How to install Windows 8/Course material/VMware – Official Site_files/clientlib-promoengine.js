$(document).ready(function(){if($('[name="isauthor"]').val()=="true"){var b=window.location.href;
if(b.indexOf("preview=true")!=-1){if(b.indexOf("promoPath=")!=-1){var c=b.split("promoPath=")[1];
if(c.indexOf("&")!=-1&&b.indexOf("position=")!=-1){c=c.split("&")[0];
var a=b.split("position=")[1];
if($("body").find(".hcontentcard.parbase").html()!=undefined){hcontentCarddisplay(c,a,"preview")
}}}}}else{if($("body").find(".hcontentcard.parbase").html()!=undefined){hcontentCarddisplay("","","")
}}});
function hcontentCarddisplay(b,e,f){function a(){var l=new Date();
var k=l.getTimezoneOffset();
k=(k/60)*-1;
var j=l.getTime();
if(k!==0){return(j+(3600000*k))
}return j
}var d=$('[name="resolvedPath"]').val();
var h=$('[name="pagePath"]').attr("content");
var g=[];
$("body").find(".hcontentcard.parbase").each(function(){var j=$(this).find("input#promotionalContent").val();
var l=$(this).find("input#promoposition").val();
var k=$(this).find("input#IsMbox").val();
if(j==="true"&&l!=""&&l!=undefined){g.push(l)
}});
var c=$('[name="localeVal"]').val();
if(c==="null"||c===""){var i=d;
if(i.indexOf("/content/vmware/vmware-preview-sites")>-1){i=i.replace("/content/vmware/vmware-preview-sites/","");
c=i.split("/")[0]
}else{if(i.indexOf("/content/vmware/vmware-published-sites")>-1){i=i.replace("/content/vmware/vmware-published-sites/","");
c=i.split("/")[0]
}else{if(h.indexOf("/content/vmware/vmware-preview-sites")>-1){i=h.replace("/content/vmware/vmware-preview-sites/","");
redirect_locale=i.split("/")[0]
}else{if(h.indexOf("/content/vmware/vmware-published-sites")>-1){i=h.replace("/content/vmware/vmware-published-sites/","");
redirect_locale=i.split("/")[0]
}}c=d.split("/")[1];
d=h.replace(redirect_locale,c)
}}}if(d.indexOf("/content/vmware/vmware-preview-sites")>-1){d=d.replace("/content/vmware/vmware-preview-sites","/content/vmware/vmware-published-sites")
}if(g.length>0){$.ajax({url:"/bin/vmware/promotionalcontent",type:"Get",async:true,data:{path:d,promopositionArray:JSON.stringify(g),currentDate:a(),promoPath:b,position:e,preview:f,locale:c}}).done(function(j){if(j.PromoJSon!=undefined){var k=j.PromoJSon;
$("body").find(".hcontentcard.parbase").each(function(){var o=$(this);
o.find(".thumb-container").removeAttr("style");
var n=$(this).find("input#promotionalContent").val();
var l=$(this).find("input#promoposition").val();
var m=$(this).find("input#templateName").val();
if(n==="true"&&promoposition!=""&&promoposition!=undefined){$.each(k,function(A,S){var q=S.isValidPromo;
var J=S.promoPosition!=undefined?S.promoPosition:"";
if(q&&J===l){var t=S.hamBurgerMenu!=undefined?S.hamBurgerMenu:"";
var ac=S.ctaPath!=undefined?S.ctaPath:"";
var D=S.ctaLabel!=undefined?S.ctaLabel:"";
var L=S.ctaLinkTitle!=undefined?S.ctaLinkTitle:"";
var O=S.date!=undefined?S.date:"";
var E=S.promoTitle!=undefined?S.promoTitle:"";
var V=S.promoContent!=undefined?S.promoContent:"";
var w=S.bcvtrue!=undefined?S.bcvtrue:"";
var aa=S.iconval!=undefined?S.iconval:"";
var u=false;
var M=S.altText!=undefined?S.altText:"";
var y=S.playicon?S.playicon:"";
var U=S.windowSelection!=undefined?S.windowSelection:"";
var I=S.zoomIcon!=undefined?S.zoomIcon:"";
var Z=S.largeImageLink!=undefined?S.largeImageLink:"";
var ab=S.imagePath!=undefined?S.imagePath:"";
var B=S.bcvid!=undefined?S.bcvid:"";
var W=S.expandImageCheckbox!=undefined?S.expandImageCheckbox:"";
var P=S.bcduration!=undefined?S.bcduration:"";
var ad=S.twitter!=undefined?S.twitter:"";
var N=S.linkedin!=undefined?S.linkedin:"";
var T=S.googleplus!=undefined?S.googleplus:"";
var Q=S.facebook!=undefined?S.facebook:"";
var G=S.props!=undefined?S.props:"";
var r=S.updatedbody!=undefined?S.updatedbody:"";
var z=S.description!=undefined?S.description:"";
var X=$(o).find(".section-custom").attr("id")!=undefined?$(o).find(".section-custom").attr("id"):"";
var x=$(o).find("#divId").val()!=undefined?$(o).find("#divId").val():"";
if(t===""){t="true"
}var R="";
if(t!=true&&ac===""&&O===""&&(E===""||V==="")){R='<div class="thumb-container withoutHamModule">'
}else{R='<div class="thumb-container">'
}if(w==="false"){if(aa==="fa fa-youtube"){u=true;
var C='<div class="thumb-img alt-background" id="'+x+'" style="background-image:url('+ab+')">';
C+='<p class="alt-text">'+M+"</p>";
if(!(y==="false")){var p=U=="true"?"_self":"_blank";
C+="<a "+G+' class="learn_more" href='+ac+" target="+p+'><img src="/content/dam/digitalmarketing/vmware/global-icons/play_icon.png" alt="Video Play Icon"  /></a>'
}else{var p=U=="true"?"_self":"_blank";
C+="<a "+G+' class="learn_more" href='+ac+" target="+p+'><img src="/content/dam/digitalmarketing/vmware/global-icons/dark-play-icon.png" alt="Video Play Icon"  /></a>'
}}else{if(aa==="fa fa-video-camera"){var C='<div class="thumb-img alt-background" id="'+x+'" style="background-image:url('+ab+')">';
C+='<p class="alt-text">'+M+"</p>";
if(!(y==="false")){var p=U=="true"?"_self":"_blank";
C+="<a "+G+' class="learn_more" href='+ac+" target="+p+'><img src="/content/dam/digitalmarketing/vmware/global-icons/play_icon.png" alt="Video Play Icon"  /></a>'
}else{var p=U=="true"?"_self":"_blank";
C+="<a "+G+' class="learn_more" href='+ac+" target="+p+'><img src="/content/dam/digitalmarketing/vmware/global-icons/dark-play-icon.png" alt="Video Play Icon"  /></a>'
}}else{var C='<div class="thumb-img alt-background" id="'+x+'" style="background-image:url('+ab+')">';
C+='<p class="alt-text">'+M+"</p>";
if(W=="true"){if(!(I==="false")){C+='<a onclick="return ImageLargeView(this);" largeimagename='+Z+" altText="+M+' href="javascript:void(0)"><i class="fa fa-search-plus img-largeView" aria-hidden="true"></i></a>'
}else{C+='<a onclick="return ImageLargeView(this);" largeimagename='+Z+" altText="+M+' href="javascript:void(0)"><i class="fa fa-search-plus img-largeView dark" aria-hidden="true"></i></a>'
}}}}C+="</div>"
}else{var C='<div class="thumb-img alt-background" style="background-image:url('+ab+')">';
C+='<p class="alt-text">'+M+"</p>";
if(B!=null&&(B!="")){if(!(y==="false")){C+=" <a asset-id="+B+' data-element-type="video" href="javascript:void(0);" onclick="return showVideo('+B+');"><img src="/content/dam/digitalmarketing/vmware/global-icons/play_icon.png" alt="Video Play Icon"  /></a>'
}else{C+=" <a "+G+" asset-id="+B+' data-element-type="video" href="javascript:void(0);" onclick="return showVideo('+B+');"><img src="/content/dam/digitalmarketing/vmware/global-icons/dark-play-icon.png" alt="Video Play Icon"  /></a>'
}}C+="</div>"
}var s='<div class="thumb-details">';
if(w!="false"&&B!=""&&P!=""){s+='<span class="timestamp">'+P+"</span>"
}s+='<div class="col-xs-1 col-md-1 col-sm-1">';
if(aa==="fa support_ico"){aa="fa support_ico"
}else{aa=aa
}s+='<i class="'+aa+'"></i></div>';
s+='<div class="col-xs-10 col-md-10 col-sm-10">';
if(!(t==="true")){var F="no"
}else{var F=""
}s+='<div class="detail-content '+F+'clamp">';
if(E!=""&&V!=""){s+='<h3 class="'+F+'clampingDetail"><span>'+E+"</span></h3>";
s+=r
}else{if(E!=""){s+='<h3 class="'+F+'clampingDetail"><p>'+E+"</p>"
}else{s+=r
}}s+="</div>";
if(ac!=""&&D!=""||O!=""){s+='<div class="cta_module">';
if(ac!=""&&D!=""){if(w!="false"&&B!=""){s+=' <a  class="learn_more"  asset-id='+B+' data-element-type="video" href="javascript:void(0);" onclick="return showVideo('+B+');">'+D+'<i class="fa fa-angle-double-right inline"></i></a>'
}else{var p=U=="true"?"_self":"_blank";
s+=' <a  class="learn_more" title='+L+" target="+p+" href="+ac+">"+D+'<i class="fa fa-angle-double-right inline"></i></a>'
}}if(O!=""){s+='<span class="datestamp">'+O.split("T")[0]+"</span>"
}s+="</div>"
}s+="</div>";
var v="";
if(t==="true"){if(m!="l4enterprise"){s+='<div class="col-xs-1 col-md-1 col-sm-1 cntClk"><i class="fa fa-bars detail-toggle non-product"></i></div>'
}if(m==="l4enterprise"){s+='<div class="col-xs-1 col-md-1 col-sm-1 cntClk"><i class="fa fa-plus-square detail-toggle"></i></div>'
}}s+='<div class="social-block">';
var Y="";
var K="";
var H="";
if(ac!=""||ac.includes("/content/dam/")){Y=ac;
K="redirect"
}else{if(B!=null&&B!=""){Y=B;
H="brightcove"
}else{Y=X
}}if(ad!=""){s+='<a data-share="twitter" href="javascript:void(0);"  data-url="'+Y+'"  data-redirect="'+K+'" data-brightcove="'+H+'" data-title="'+E+'"  data-via="VMware" data-summary = "'+z+'" data-cta-link = "'+z+'"><i class="fa fa-twitter"></i></a>'
}if(Q!=""){s+='<a data-share="facebook" href="javascript:void(0);"  data-url="'+Y+'"  data-redirect="'+K+'" data-brightcove="'+H+'" data-title="'+E+'" data-image ="'+ab+'" data-summary = "'+z+'"><i class="fa fa-facebook"></i></a>'
}if(N!=""){s+='<a data-share="linkedin" href="javascript:void(0);"  data-url="'+Y+'"  data-redirect="'+K+'" data-brightcove="'+H+'" data-title="'+E+'" data-image ="'+ab+'" data-summary = "'+z+'"><i class="fa fa-linkedin"></i></a>'
}if(T!=""){s+='<a data-share="google" href="javascript:void(0);"  data-url="'+Y+'"  data-redirect="'+K+'" data-brightcove="'+H+'" data-title="'+E+'" data-image ="'+ab+'" data-summary = "'+z+'"><i class="fa fa-google-plus"></i></a>'
}s+="</div>";
s+="</div>";
s+="</div>";
R+=C+s;
$(o).find(".thumb-container ").remove();
$(o).find(".col-md-12").append(R)
}})
}})
}}).fail(function(j,l,k){console.log("failed");
$("body").find(".hcontentcard.parbase").each(function(){$(this).find(".thumb-container").removeAttr("style")
})
})
}else{$("body").find(".hcontentcard.parbase").each(function(){$(this).find(".thumb-container").removeAttr("style")
})
}}$("body").bind("DOMNodeInserted",function(){$(this).find(".detail-content p").addClass("clampingDetail");
$(".detail-content").each(function(){if($(this).find("h3").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singlePara")
}else{if($(this).find("p").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singleHeading")
}else{if($(this).find("h3").length<1){$(this).addClass("onlyPara")
}else{if($(this).find("p").length<1){$(this).addClass("onlyHeading")
}else{if($(this).parent(".col-md-10").find(".cta_module").length<1&&$(this).parent(".col-md-10").parent(".social-block").find(".social-block").length<1){$(this).addClass("onlyContent")
}}}}}})
});
$(window).load(function(){$(window).trigger("resize")
});