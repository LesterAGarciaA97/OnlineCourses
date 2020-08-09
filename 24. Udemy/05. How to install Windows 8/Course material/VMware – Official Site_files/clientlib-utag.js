var pagecontenttype="";
var designversion="";
var journeystage="";
var internalengagementchannel="";
var score="";
var personas="";
var entitlementtype="";
var destinationURL=document.location.toString();
var referringURL=document.referrer.toString();
var SysEnv=navigator.userAgent.toString();
var variant="";
var AEMversion="";
var issueDate="";
var effectiveDate="";
var breadCrumbs='["home"';
var industryCodes="";
var publisher="";
var accumatedScore="";
var isLoggedIn=false;
var pageID=document.location.pathname;
var countrycode=",us,de,fr,cn,jp,es,latam,ru,tw,at,br,it,kr,ap,cz,nl,pl,ch,se,be,caen,cafr,uk,au,in,nz,hu,mena,eu,il,tr,mx,co,ar,pe,cl,ve,sa,ae,za,cr,pt,sg,id,my,dk,no,fi,ca,asean,baltics,ca-fr,";
var country="";
var pagesubcategory="";
var pagesubsubcategory="";
var pagesubsubsubcategory="";
var pagesubsubsubsubcategory="";
var pagesubsubsubsubsubcategory="";
var pagesubsubsubsubsubsubcategory="";
var pagecategory="";
var language=$("html").attr("lang");
var pathname=$('[name="pagePath"]').attr("content");
var pageDetail="";
var pageSubDetail="";
var pageName="";
var pageInstanceID="";
var tagnamespace="";
if(location.host.indexOf("localhost")!=-1||location.host.indexOf("dev")!=-1){pageInstanceID="Development"
}else{if(location.host.indexOf("test")!=-1){pageInstanceID="QA"
}else{if(location.host.indexOf("prod")!=-1){pageInstanceID="Production"
}}}if(location.host.indexOf("auth")!=-1){pageInstanceID=pageInstanceID+" - Author"
}else{if(location.host.indexOf("pub")!=-1){pageInstanceID=pageInstanceID+" - publish"
}}var pathmd5="";
pageInstanceID=pathmd5+" - "+pageInstanceID;
if(typeof pathname!="undefined"){if(pathname.split("/vmware/")[1]!=undefined&&countrycode.indexOf(pathname.split("/vmware/")[1].split("/")[1])!=undefined&&countrycode.indexOf(","+pathname.split("/vmware/")[1].split("/")[1]+",")!=-1&&pathname.split("/vmware/")[1].split("/")[0].length>0){country=pathname.split("/vmware/")[1].split("/")[1];
console.log(pathname);
if(pathname.split("/"+country+"/")[1]!=undefined&&pathname.split("/"+country+"/")[1].split("/")[0]!=undefined&&pathname.split("/"+country+"/")[1].split("/")[0].length>0){pagesubcategory=pathname.split("/"+country+"/")[1].split("/")[0].replace(".html","");
breadCrumbs=breadCrumbs+',"'+pagesubcategory+'"';
if(pathname.split("/"+country+"/")[1].split("/")[1]!=undefined&&pathname.split("/"+country+"/")[1].split("/")[1].length>0){pagesubsubcategory=pathname.split("/"+country+"/")[1].split("/")[1].replace(".html","");
breadCrumbs=breadCrumbs+',"'+pagesubsubcategory+'"';
if(pathname.split("/"+pagesubcategory+"/"+pagesubsubcategory+"/")[1]!=undefined){var temp=pathname.split("/"+pagesubcategory+"/"+pagesubsubcategory+"/")[1].split("/");
for(i=0;
i<temp.length;
i++){if(temp[i].length>0){breadCrumbs=breadCrumbs+',"'+temp[i].replace(".html","")+'"';
if(i==0){pagesubsubsubcategory=temp[i].replace(".html","")
}else{if(i==1){pagesubsubsubsubcategory=temp[i].replace(".html","")
}else{if(i==2){pagesubsubsubsubsubcategory=temp[i].replace(".html","")
}else{if(i==3){pagesubsubsubsubsubsubcategory=temp[i].replace(".html","")
}}}}}}}}}pagecategory="vmware"
}else{country=pathname.split("/vmware/")[1].split("/")[1];
pagecategory="vmware"
}}digitalData.page.pageInfo.breadCrumbs=breadCrumbs+"]";
temp="page";
for(i=0;
i<digitalData.page.pageInfo.breadCrumbs.split(",").length-1;
i++){temp=temp+"sub"
}temp=temp+"category";
if(digitalData.page.pageInfo.breadCrumbs.split(",").length-1!=0){pageDetail=eval(temp);
this[temp]=""
}digitalData.version="1.0";
digitalData.page.attributes.isLoggedIn=isLoggedIn;
digitalData.page.pageInfo.destinationURL=destinationURL;
digitalData.page.pageInfo.referringURL=referringURL;
digitalData.page.pageInfo.SysEnv=SysEnv;
digitalData.page.pageInfo.variant=variant;
if(language!=undefined){digitalData.page.pageInfo.language=language
}if(country=="ca-fr"){country="ca"
}digitalData.page.pageInfo.geoRegion=country;
digitalData.page.pageInfo.industryCodes=industryCodes;
digitalData.page.pageInfo.publisher=publisher;
digitalData.page.pageInfo.pageName=pageName;
if(digitalData.page.category.primaryCategory==""){digitalData.page.category.primaryCategory=pagecategory;
digitalData.page.category.pageSubCategory=pagesubcategory;
digitalData.page.category.pageSubSubCategory=pagesubsubcategory;
digitalData.page.category.pageSubSubSubCategory=pagesubsubsubcategory;
digitalData.page.category.pageSubSubSubSubCategory=pagesubsubsubsubcategory;
digitalData.page.category.pageSubSubSubSubSubCategory=pagesubsubsubsubsubcategory
}digitalData.page.category.pageDetail=pageDetail;
digitalData.page.category.pageTitle=document.title;
$(document).ready(function(){if($(".secondary-nav ul li a").length>0&&$(".secondary-nav ul li a")[0]!="undefined"){window[temp]=pageDetail;
pageDetail=$(".secondary-nav ul li a")[0].innerText;
if(digitalData.page.category.primaryCategory==""){digitalData.page.category.primaryCategory=pagecategory;
digitalData.page.category.pageSubCategory=pagesubcategory;
digitalData.page.category.pageSubSubCategory=pagesubsubcategory;
digitalData.page.category.pageSubSubSubCategory=pagesubsubsubcategory;
digitalData.page.category.pageSubSubSubSubCategory=pagesubsubsubsubcategory;
digitalData.page.category.pageSubSubSubSubSubCategory=pagesubsubsubsubsubcategory
}digitalData.page.category.pageDetail=pageDetail
}});
$(document).on("click",".secondary-nav ul li a",function(){digitalData.page.category.pageDetail=$(this)[0].innerText
});