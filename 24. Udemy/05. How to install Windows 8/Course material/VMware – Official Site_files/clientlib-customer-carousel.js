$(document).ready(function(){var a=0;
var b=$(".customercarousel .carousel-indicators li").length;
$(".customercarousel .carousel").on("slid.bs.carousel",function(){a=a+1;
if(a==b){$(".customercarousel .carousel").carousel("pause")
}});
$(document).on("click",".customercarousel .carousel .carousel-indicators li,.customer-module-caurosel-wrapper .content-wrapper .content-cta",function(){$(window).load(function(){$(".customercarousel .carousel").carousel("pause")
});
$(".customercarousel .carousel").carousel("pause")
})
});