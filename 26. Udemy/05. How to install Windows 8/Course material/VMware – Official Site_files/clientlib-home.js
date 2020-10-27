$(window).load(function(){sliderNote()
});
$(document).ready(function(){var a=$("#carousel");
if(a.length>0){a.carousel()
}$(function(){if(a.length>0){a.bind("slide.bs.carousel",function(b){if($(b.relatedTarget).find(".carousel_img").attr("data-original")!=null||$(b.relatedTarget).find(".carousel_img").attr("data-original")!=undefined){$(b.relatedTarget).find(".carousel_img").css("background-image","url("+$(b.relatedTarget).find(".carousel_img").attr("data-original")+")");
$(b.relatedTarget).find(".carousel_img").removeAttr("data-original")
}})
}});
setTimeout(function(){sliderNote()
},250);
setTimeout(function(){bottomBlocks()
},250);
setTimeout(function(){bottomBlocksNew()
},250);
setTimeout(function(){topCarBlocksHgt()
},400)
});
$(window).resize(function(){setTimeout(function(){topCarBlocksHgt()
},400);
setTimeout(function(){sliderNote()
},380);
setTimeout(function(){bottomBlocks();
bottomBlocksNew()
},600)
});
function sliderNote(){$(".owl-container #heroBanner .owl-controls").removeAttr("style");
var a=$(".note-overlay").outerHeight();
$(".owl-container #heroBanner .owl-controls").css("bottom",a)
}function topCarBlocksHgt(){$("#heroBanner .owl-page p").css("height","auto");
var a=new Array();
var b="";
$("#heroBanner .owl-page").each(function(){a.push($(this).children().children("p").outerHeight())
});
b=Math.max.apply(Math,a);
$("#heroBanner .owl-page p").css("height",b)
}function bottomBlocks(){$(".bottom-home .col-2").css("height","auto");
var b=new Array();
var a="";
$(".bottom-home .col-2").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".bottom-home .col-2").css("height",a)
}function bottomBlocksNew(){$(".twoBannerModule .twoBannerModule-Inner").css("height","auto");
var b=new Array();
var a="";
$(".twoBannerModule .twoBannerModule-Inner").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".twoBannerModule .twoBannerModule-Inner").css("height",a)
}var owl;
$(document).ready(function(){function h(){$.each(this.owl.userItems,function(o){var q=$(this).find(".item-img").attr("title");
var m=$(this).find(".item-img").attr("data-icon");
var p=$(".homeBanner .owl-controls .owl-pagination .owl-page span");
var l=[];
var n=[];
$.each($(".titleIcons"),function(i){l[i]=$(this).attr("data-icon");
n[i]=$(this).attr("title")
});
if(q==null&&m==null){q=n[o];
m=l[o]
}$(p[o]).append('<i class="'+m+'"></i><p>'+q+"</p>")
})
}function d(){var i=$("#heroBanner").data("owlCarousel");
if(i!=undefined){i.next()
}}var j=$(this).find(".herocarouseltransitionValue").attr("transitionValue");
var e=$(this).find(".herocarouseltransitionOffOn").attr("transitionOffOn");
var g=$("#heroBanner .owl-item").length;
var f=1;
var k=0;
$(".owl-controls").append('<div class="owl-dots"></div>');
for(var c=0;
c<g;
c++){$(".owl-dots").append("<span></span>")
}var b;
if(owl!=undefined){$("#heroBanner .owl-dots span:first-child").addClass("active");
var a=function(){b=setInterval(function(){owl.next();
f++;
k=$(".owl-page.active").index()+1;
$("#heroBanner .owl-dots span").removeClass("active");
$("#heroBanner .owl-dots span:nth-child("+k+")").addClass("active");
if(f==g){setTimeout(function(){owl.jumpTo(0);
$("#heroBanner .owl-dots span").removeClass("active");
$("#heroBanner .owl-dots span:first-child").addClass("active");
clearInterval(b)
},j*1000)
}},j*1000)
};
$(document).on("click","#heroBanner .owl-dots span",function(){$("#heroBanner .owl-dots span").removeClass("active");
$(this).addClass("active");
var i=$(this).index();
clearInterval(b);
owl.jumpTo(i)
});
if(e==="transitionOn"){if($(window).width()>800){a()
}}$(document).on("click touchstart","#heroBanner .owl-page",function(){clearInterval(b);
setTimeout(function(){k=$(".owl-page.active").index()+1;
$("#heroBanner .owl-dots span").removeClass("active");
$("#heroBanner .owl-dots span:nth-child("+k+")").addClass("active")
},300)
});
$(document).on("click touchend mouseup","#heroBanner .owl-next,#heroBanner .owl-prev,#heroBanner .item",function(){clearInterval(b);
setTimeout(function(){k=$(".owl-page.active").index()+1;
$("#heroBanner .owl-dots span").removeClass("active");
$("#heroBanner .owl-dots span:nth-child("+k+")").addClass("active")
},300);
if($(window).width()<800&&$(".owl-dots span.active:last-child").length&&$(this).hasClass("owl-next")){owl.jumpTo(0)
}if($(window).width()<800&&$(".owl-dots span.active:first-child").length&&$(this).hasClass("owl-prev")){owl.jumpTo(g-1)
}});
if($("#heroBanner").find(".owl-item").length<=1){$("#heroBanner .owl-controls .owl-prev").hide();
$("#heroBanner .owl-controls .owl-next").hide()
}}});