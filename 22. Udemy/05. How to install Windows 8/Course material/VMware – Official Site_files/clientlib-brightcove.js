sc_hb_click2stop=0;
var randomID=Math.random();
var player="player";
var playerID=player.concat(randomID);
var playerTrimmedID=playerID.replace(".","");
var author=$("#runmode").val();
var entityrenderurl=Granite.HTTP.externalize("/bin/vmware/entityid/rendercontent");
var mboxDynamicDiv='<div id="dynamicElement" class="mboxDefault"></div>';
if($("body #dynamicElement").length===0){$("body").append(mboxDynamicDiv)
}function showVideo(a){var b=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);
$(".modal1, .overlay-brightcove").show();
if(b){$(".getVideo").html('<video muted playsinline style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;" id ="'+playerTrimmedID+'" autoplay data-video-id="'+a+'"  data-account="1534342432001" data-player="Byh3doRJx"  data-embed="default"  class="video-js" controls ></video><script src="https://players.brightcove.net/1534342432001/Byh3doRJx_default/index.min.js"/><\/script>')
}else{$(".getVideo").html('<video style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;" id ="'+playerTrimmedID+'" autoplay data-video-id="'+a+'"  data-account="1534342432001" data-player="Byh3doRJx"  data-embed="default"  class="video-js" controls ></video><script src="https://players.brightcove.net/1534342432001/Byh3doRJx_default/index.min.js"/><\/script>')
}$(".content").css({overflow:"hidden"});
$.getScript("https://players.brightcove.net/1534342432001/Byh3doRJx_default/index.min.js").done(function(c,d){videojs(playerTrimmedID).on("loadedmetadata",function(){var e=this;
loadLocalizedCaptions(e);
$(".getVideo .vjs-captions-button ul.vjs-menu-content li:nth-child(2)").click(function(f){$.each(e.textTracks(),function(g,h){h.mode="disabled"
})
})
})
}).fail(function(e,d,c){$("div.log").text("Triggered ajaxError handler.")
});
if(typeof init_vplayer!="undefined"){init_vplayer(playerTrimmedID)
}if(author==="false"&&author!=undefined&&author!=""){createEntityAssetMbox("brightcove_"+a)
}}function show360Video(a){var b=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);
$(".modal1, .overlay-brightcove").show();
if(b){$(".getVideo").html('<video muted playsinline style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;" id ="'+playerTrimmedID+'" autoplay data-video-id="'+a+'"  data-account="1534342432001" data-player="TFx1dHbtum"  data-embed="default"  class="video-js" controls ></video><script src="https://players.brightcove.net/1534342432001/TFx1dHbtum_default/index.min.js"/><\/script>')
}else{$(".getVideo").html('<video style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;" id ="'+playerTrimmedID+'" autoplay data-video-id="'+a+'"  data-account="1534342432001" data-player="TFx1dHbtum"  data-embed="default"  class="video-js" controls ></video><script src="https://players.brightcove.net/1534342432001/TFx1dHbtum_default/index.min.js"/><\/script>')
}$(".content").css({overflow:"hidden"});
$.getScript("https://players.brightcove.net/1534342432001/TFx1dHbtum_default/index.min.js").done(function(c,d){videojs(playerTrimmedID).on("loadedmetadata",function(){var e=this;
loadLocalizedCaptions(e)
})
}).fail(function(e,d,c){$("div.log").text("Triggered ajaxError handler.")
});
if(typeof init_vplayer!="undefined"){init_vplayer(playerTrimmedID)
}if(author==="false"&&author!=undefined&&author!=""){createEntityAssetMbox("brightcove_"+a)
}}$(document).on("click","#close_video",function(){videojs(playerTrimmedID).ready(function(){var a=this;
a.muted(true)
});
sc_hb_click2stop=1;
player.play();
$(".overlay-brightcove, .modal1").hide();
$(".getVideo").html("");
$(".content").css({overflow:"inherit"})
});
$(document).on("click",".overlay-brightcove",function(){videojs(playerTrimmedID).ready(function(){var a=this;
a.muted(true)
});
sc_hb_click2stop=1;
player.play();
$(".overlay-brightcove, .modal1").hide();
$(".getVideo").html("");
$(".content").css({overflow:"inherit"})
});
function loadLocalizedCaptions(d){var f;
var a=$('[name="languageVal"]').val()!=undefined&&$('[name="languageVal"]').val()!=""?$('[name="languageVal"]').val():"en";
if(a.indexOf("_")>-1){a=a.substr(0,a.indexOf("_"))
}var c=d.textTracks();
var e=false;
var b;
$.each(c,function(g,j){var h=g==c.length-1;
f=j.language!=undefined&&j.language!=""?j.language.substr(0,2):"";
if(f&&f!=""){if(f==="en"){b=g
}if(f===a){j.mode="showing";
e=true
}if(h&&!e&&b){c[b].mode="showing";
if(f!="en"){j.mode="disabled"
}}}else{j.mode="disabled"
}})
}function createEntityAssetMbox(a){$.ajax({url:entityrenderurl,type:"Get",async:true,data:{assetpath:a}}).done(function(b){if(b!=null){var h=b.path!=undefined?b.path:"";
var c=b.entityId!=undefined?b.entityId:"";
var e=b.categoryid!=undefined?b.categoryid:"";
var d=b.type!=undefined?b.type:"";
var g=b.EntityAttr!=undefined?JSON.stringify(b.EntityAttr):"";
var i=[];
i.push("Recs_mbox");
i.push("entity.path="+h);
i.push("entity.id= "+c);
i.push("entity.categoryId="+e);
i.push("entity.type="+d);
var f=0;
if(typeof targetPageParamsAll!="undefined"){targetPageParamsAll()
}$.each(b.EntityAttr,function(l,m){f++;
if(typeof(m)==="object"){var j=m.attrId+"="+m.attrVal;
i.push("entity."+m.attrId+"="+m.attrVal)
}else{i.push("entity."+m.attrId+"="+m.attrVal)
}});
if(typeof targetPageParamsAll!="undefined"){$.each(targetPageParamsAll(),function(j,l){if(typeof(l)==="object"){$.each(l,function(m,k){i.push(m+"="+k)
})
}else{i.push(j+"="+l)
}})
}if(b.entityId!=""&&h!=""){mboxDefine("dynamicElement","Recs_mbox",i);
mboxUpdate.apply("Recs_mbox",i)
}}}).fail(function(b,d,c){console.log("failed")
})
}if(author==="false"&&author!=undefined&&author!=""){$(document).on("click","a[href$='.pdf']",function(){var a=$(this).attr("href")!=undefined?$(this).attr("href"):"";
if(a!=""){createEntityAssetMbox(a)
}})
};