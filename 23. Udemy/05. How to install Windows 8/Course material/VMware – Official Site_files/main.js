/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-flexwrap-setclasses !*/
;
!function(aa,R,K){function N(a,b){return typeof a===b
}function Q(){var h,p,f,m,g,d,c;
for(var b in F){if(F.hasOwnProperty(b)){if(h=[],p=F[b],p.name&&(h.push(p.name.toLowerCase()),p.options&&p.options.aliases&&p.options.aliases.length)){for(f=0;
f<p.options.aliases.length;
f++){h.push(p.options.aliases[f].toLowerCase())
}}for(m=N(p.fn,"function")?p.fn():p.fn,g=0;
g<h.length;
g++){d=h[g],c=d.split("."),1===c.length?A[c[0]]=m:(!A[c[0]]||A[c[0]] instanceof Boolean||(A[c[0]]=new Boolean(A[c[0]])),A[c[0]][c[1]]=m),Y.push((m?"":"no-")+c.join("-"))
}}}}function L(c){var d=G.className,a=A._config.classPrefix||"";
if(af&&(d=d.baseVal),A._config.enableJSClass){var b=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");
d=d.replace(b,"$1"+a+"js$2")
}A._config.enableClasses&&(d+=" "+a+c.join(" "+a),af?G.className.baseVal=d:G.className=d)
}function W(a,b){return !!~(""+a).indexOf(b)
}function ae(){return"function"!=typeof R.createElement?R.createElement(arguments[0]):af?R.createElementNS.call(R,"http://www.w3.org/2000/svg",arguments[0]):R.createElement.apply(R,arguments)
}function V(a){return a.replace(/([a-z])-([a-z])/g,function(c,d,b){return d+b.toUpperCase()
}).replace(/^-/,"")
}function Z(a,b){return function(){return a.apply(b,arguments)
}
}function I(c,f,a){var d;
for(var b in c){if(c[b] in f){return a===!1?c[b]:(d=f[c[b]],N(d,"function")?Z(d,a||f):d)
}}return !1
}function ab(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()
}).replace(/^ms-/,"-ms-")
}function O(){var a=R.body;
return a||(a=ae(af?"svg":"body"),a.fake=!0),a
}function ac(n,x,a,b){var y,h,g,m,w="modernizr",p=ae("div"),v=O();
if(parseInt(a,10)){for(;
a--;
){g=ae("div"),g.id=b?b[a]:w+(a+1),p.appendChild(g)
}}return y=ae("style"),y.type="text/css",y.id="s"+w,(v.fake?v:p).appendChild(y),v.appendChild(p),y.styleSheet?y.styleSheet.cssText=n:y.appendChild(R.createTextNode(n)),p.id=w,v.fake&&(v.style.background="",v.style.overflow="hidden",m=G.style.overflow,G.style.overflow="hidden",G.appendChild(v)),h=x(p,n),v.fake?(v.parentNode.removeChild(v),G.style.overflow=m,G.offsetHeight):p.parentNode.removeChild(p),!!h
}function U(d,b){var c=d.length;
if("CSS" in aa&&"supports" in aa.CSS){for(;
c--;
){if(aa.CSS.supports(ab(d[c]),b)){return !0
}}return !1
}if("CSSSupportsRule" in aa){for(var a=[];
c--;
){a.push("("+ab(d[c])+":"+b+")")
}return a=a.join(" or "),ac("@supports ("+a+") { #modernizr { position: absolute; } }",function(f){return"absolute"==getComputedStyle(f,null).position
})
}return K
}function X(t,i,b,P){function r(){w&&(delete q.style,delete q.modElem)
}if(P=N(P,"undefined")?!1:P,!N(b,"undefined")){var E=U(t,b);
if(!N(E,"undefined")){return E
}}for(var w,a,x,l,C,z=["modernizr","tspan"];
!q.style;
){w=!0,q.modElem=ae(z.shift()),q.style=q.modElem.style
}for(x=t.length,a=0;
x>a;
a++){if(l=t[a],C=q.style[l],W(l,"-")&&(l=V(l)),q.style[l]!==K){if(P||N(b,"undefined")){return r(),"pfx"==i?l:!0
}try{q.style[l]=b
}catch(m){}if(q.style[l]!=C){return r(),"pfx"==i?l:!0
}}}return r(),!1
}function H(g,l,d,h,f){var c=g.charAt(0).toUpperCase()+g.slice(1),b=(g+" "+k.join(c+" ")+c).split(" ");
return N(l,"string")||N(l,"undefined")?X(b,l,h,f):(b=(g+" "+j.join(c+" ")+c).split(" "),I(b,l,d))
}function D(b,c,a){return H(b,K,K,c,a)
}var Y=[],F=[],M={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(b,c){var a=this;
setTimeout(function(){c(a[b])
},0)
},addTest:function(b,c,a){F.push({name:b,fn:c,options:a})
},addAsyncTest:function(a){F.push({name:null,fn:a})
}},A=function(){};
A.prototype=M,A=new A;
var G=R.documentElement,af="svg"===G.nodeName.toLowerCase(),ad="Moz O ms Webkit",k=M._config.usePrefixes?ad.split(" "):[];
M._cssomPrefixes=k;
var j=M._config.usePrefixes?ad.toLowerCase().split(" "):[];
M._domPrefixes=j;
var J={elem:ae("modernizr")};
A._q.push(function(){delete J.elem
});
var q={style:J.elem.style};
A._q.unshift(function(){delete q.style
}),M.testAllProps=H,M.testAllProps=D,A.addTest("flexbox",D("flexBasis","1px",!0)),A.addTest("flexboxlegacy",D("boxDirection","reverse",!0)),A.addTest("flexboxtweener",D("flexAlign","end",!0)),A.addTest("flexwrap",D("flexWrap","wrap",!0)),Q(),L(Y),delete M.addTest,delete M.addAsyncTest;
for(var B=0;
B<A._q.length;
B++){A._q[B]()
}aa.Modernizr=A
}(window,document);
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g(k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.5",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")?(j.prop("checked")&&(i=!1),d.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==j.prop("type")&&(j.prop("checked")!==this.$element.hasClass("active")&&(i=!1),this.$element.toggleClass("active")),j.prop("checked",this.$element.hasClass("active")),i&&j.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);
a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),f(b.target).is('input[type="radio"]')||f(b.target).is('input[type="checkbox"]')||b.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.5",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var p=this.getItemIndex(k),o="prev"==l&&0===p||"next"==l&&p==this.$items.length-1;
if(o&&!this.options.wrap){return k
}var n="prev"==l?-1:1,m=(p+n)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},j.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},j.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.5",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":k.data();
j.call(c,a)
})
}(jQuery),+function(j){function i(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function p(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=i(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&j.contains(c[0],a.target)||(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",b))))
}))
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.5",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=i(q),b=c.hasClass("open");
if(p(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click",p);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger("shown.bs.dropdown",a)
}return !1
}},l.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var s=j(this);
if(t.preventDefault(),t.stopPropagation(),!s.is(".disabled, :disabled")){var r=i(s),q=r.hasClass("open");
if(!q&&27!=t.which||q&&27==t.which){return 27==t.which&&r.find(m).trigger("focus"),s.trigger("click")
}var f=" li:not(.disabled):visible a",b=r.find(".dropdown-menu"+f);
if(b.length){var a=b.index(t.target);
38==t.which&&a>0&&a--,40==t.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",p).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.5",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(i.$element)&&(i.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var d=window.innerWidth;
if(!d){var c=document.documentElement.getBoundingClientRect();
d=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
(c||!/destroy|hide/.test(a))&&(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.5",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){if(this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusin"==a.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusout"==a.type?"focus":"hover"]=!1),d.isInStateTrue()?void 0:(clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide())
},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=f(this.$tip),c=f.Event("hide.bs."+this.type);
return this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this)
},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var n=a[0],m="BODY"==n.tagName,l=n.getBoundingClientRect();
null==l.width&&(l=f.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));
var k=m?{top:0,left:0}:a.offset(),j={scroll:m?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},i=m?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},l,j,i,k)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.right&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),a?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
(c||!/destroy|hide/.test(a))&&(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.5",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.5",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,j="offset",i=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(j="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),k=c.data("target")||c.attr("href"),d=/^#./.test(k)&&f(k);
return d&&d.length&&d.is(":visible")&&[[d[j]().top+i,k]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(void 0===m[j+1]||i<m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.5",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.5",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return r>p?"top":!1
}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&r>=p?"top":null!=q&&l+k>=t-q?"bottom":!1
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
/*! jQuery UI - v1.12.1 - 2017-07-23
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)
})(function(k){function G(a){for(var c=a.css("visibility");
"inherit"===c;
){a=a.parent(),c=a.css("visibility")
}return"hidden"!==c
}function C(c){for(var d,a;
c.length&&c[0]!==document;
){if(d=c.css("position"),("absolute"===d||"relative"===d||"fixed"===d)&&(a=parseInt(c.css("zIndex"),10),!isNaN(a)&&0!==a)){return a
}c=c.parent()
}return 0
}function q(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.regional.en=k.extend(!0,{},this.regional[""]),this.regional["en-US"]=k.extend(!0,{},this.regional.en),this.dpDiv=z(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function z(c){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return c.on("mouseout",a,function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")
}).on("mouseover",a,y)
}function y(){k.datepicker._isDisabledDatepicker(x.inline?x.dpDiv.parent()[0]:x.input[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))
}function J(d,a){k.extend(d,a);
for(var c in a){null==a[c]&&(d[c]=a[c])
}return d
}function w(a){return function(){var c=this.element.val();
a.apply(this,arguments),this._refresh(),c!==this.element.val()&&this._trigger("change")
}
}k.ui=k.ui||{},k.ui.version="1.12.1";
var D=0,B=Array.prototype.slice;
k.cleanData=function(a){return function(d){var e,g,f;
for(f=0;
null!=(g=d[f]);
f++){try{e=k._data(g,"events"),e&&e.remove&&k(g).triggerHandler("remove")
}catch(c){}}a(d)
}
}(k.cleanData),k.widget=function(t,m,v){var f,d,u,c={},p=t.split(".")[0];
t=t.split(".")[1];
var g=p+"-"+t;
return v||(v=m,m=k.Widget),k.isArray(v)&&(v=k.extend.apply(null,[{}].concat(v))),k.expr[":"][g.toLowerCase()]=function(a){return !!k.data(a,g)
},k[p]=k[p]||{},f=k[p][t],d=k[p][t]=function(a,h){return this._createWidget?(arguments.length&&this._createWidget(a,h),void 0):new d(a,h)
},k.extend(d,f,{version:v.version,_proto:k.extend({},v),_childConstructors:[]}),u=new m,u.options=k.widget.extend({},u.options),k.each(v,function(h,a){return k.isFunction(a)?(c[h]=function(){function e(){return m.prototype[h].apply(this,arguments)
}function i(l){return m.prototype[h].apply(this,l)
}return function(){var n,l=this._super,r=this._superApply;
return this._super=e,this._superApply=i,n=a.apply(this,arguments),this._super=l,this._superApply=r,n
}
}(),void 0):(c[h]=a,void 0)
}),d.prototype=k.widget.extend(u,{widgetEventPrefix:f?u.widgetEventPrefix||t:t},c,{constructor:d,namespace:p,widgetName:t,widgetFullName:g}),f?(k.each(f._childConstructors,function(l,a){var h=a.prototype;
k.widget(h.namespace+"."+h.widgetName,d,a._proto)
}),delete f._childConstructors):m._childConstructors.push(d),k.widget.bridge(t,d),d
},k.widget.extend=function(g){for(var d,f,l=B.call(arguments,1),h=0,c=l.length;
c>h;
h++){for(d in l[h]){f=l[h][d],l[h].hasOwnProperty(d)&&void 0!==f&&(g[d]=k.isPlainObject(f)?k.isPlainObject(g[d])?k.widget.extend({},g[d],f):k.widget.extend({},f):f)
}}return g
},k.widget.bridge=function(d,a){var c=a.prototype.widgetFullName||d;
k.fn[d]=function(h){var g="string"==typeof h,e=B.call(arguments,1),f=this;
return g?this.length||"instance"!==h?this.each(function(){var l,m=k.data(this,c);
return"instance"===h?(f=m,!1):m?k.isFunction(m[h])&&"_"!==h.charAt(0)?(l=m[h].apply(m,e),l!==m&&void 0!==l?(f=l&&l.jquery?f.pushStack(l.get()):l,!1):void 0):k.error("no such method '"+h+"' for "+d+" widget instance"):k.error("cannot call methods on "+d+" prior to initialization; attempted to call method '"+h+"'")
}):f=void 0:(e.length&&(h=k.widget.extend.apply(null,[h].concat(e))),this.each(function(){var i=k.data(this,c);
i?(i.option(h||{}),i._init&&i._init()):k.data(this,c,new a(h,this))
})),f
}
},k.Widget=function(){},k.Widget._childConstructors=[],k.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,a){a=k(a||this.defaultElement||this)[0],this.element=k(a),this.uuid=D++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=k(),this.hoverable=k(),this.focusable=k(),this.classesElementLookup={},a!==this&&(k.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(d){d.target===a&&this.destroy()
}}),this.document=k(a.style?a.ownerDocument:a.document||a),this.window=k(this.document[0].defaultView||this.document[0].parentWindow)),this.options=k.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:k.noop,_create:k.noop,_init:k.noop,destroy:function(){var a=this;
this._destroy(),k.each(this.classesElementLookup,function(d,c){a._removeClass(c,d)
}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)
},_destroy:k.noop,widget:function(){return this.element
},option:function(g,d){var f,l,h,c=g;
if(0===arguments.length){return k.widget.extend({},this.options)
}if("string"==typeof g){if(c={},f=g.split("."),g=f.shift(),f.length){for(l=c[g]=k.widget.extend({},this.options[g]),h=0;
f.length-1>h;
h++){l[f[h]]=l[f[h]]||{},l=l[f[h]]
}if(g=f.pop(),1===arguments.length){return void 0===l[g]?null:l[g]
}l[g]=d
}else{if(1===arguments.length){return void 0===this.options[g]?null:this.options[g]
}c[g]=d
}}return this._setOptions(c),this
},_setOptions:function(a){var c;
for(c in a){this._setOption(c,a[c])
}return this
},_setOption:function(a,c){return"classes"===a&&this._setOptionClasses(c),this.options[a]=c,"disabled"===a&&this._setOptionDisabled(c),this
},_setOptionClasses:function(d){var a,c,f;
for(a in d){f=this.classesElementLookup[a],d[a]!==this.options.classes[a]&&f&&f.length&&(c=k(f.get()),this._removeClass(f,a),c.addClass(this._classes({element:c,keys:a,classes:d,add:!0})))
}},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))
},enable:function(){return this._setOptions({disabled:!1})
},disable:function(){return this._setOptions({disabled:!0})
},_classes:function(d){function a(g,l){var e,h;
for(h=0;
g.length>h;
h++){e=f.classesElementLookup[g[h]]||k(),e=d.add?k(k.unique(e.get().concat(d.element.get()))):k(e.not(d.element).get()),f.classesElementLookup[g[h]]=e,c.push(g[h]),l&&d.classes[g[h]]&&c.push(d.classes[g[h]])
}}var c=[],f=this;
return d=k.extend({element:this.element,classes:this.options.classes||{}},d),this._on(d.element,{remove:"_untrackClassesElement"}),d.keys&&a(d.keys.match(/\S+/g)||[],!0),d.extra&&a(d.extra.match(/\S+/g)||[]),c.join(" ")
},_untrackClassesElement:function(c){var a=this;
k.each(a.classesElementLookup,function(d,e){-1!==k.inArray(c.target,e)&&(a.classesElementLookup[d]=k(e.not(c.target).get()))
})
},_removeClass:function(c,d,a){return this._toggleClass(c,d,a,!1)
},_addClass:function(c,d,a){return this._toggleClass(c,d,a,!0)
},_toggleClass:function(c,f,a,d){d="boolean"==typeof d?d:a;
var h="string"==typeof c||null===c,g={extra:h?f:a,keys:h?c:f,element:h?this.element:c,add:d};
return g.element.toggleClass(this._classes(g),d),this
},_on:function(d,a,c){var g,f=this;
"boolean"!=typeof d&&(c=a,a=d,d=!1),c?(a=g=k(a),this.bindings=this.bindings.add(a)):(c=a,a=this.element,g=this.widget()),k.each(c,function(n,i){function o(){return d||f.options.disabled!==!0&&!k(this).hasClass("ui-state-disabled")?("string"==typeof i?f[i]:i).apply(f,arguments):void 0
}"string"!=typeof i&&(o.guid=i.guid=i.guid||o.guid||k.guid++);
var m=n.match(/^([\w:-]*)\s*(.*)$/),e=m[1]+f.eventNamespace,p=m[2];
p?g.on(e,p,o):a.on(e,o)
})
},_off:function(c,a){a=(a||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,c.off(a).off(a),this.bindings=k(this.bindings.not(c).get()),this.focusable=k(this.focusable.not(c).get()),this.hoverable=k(this.hoverable.not(c).get())
},_delay:function(c,f){function a(){return("string"==typeof c?d[c]:c).apply(d,arguments)
}var d=this;
return setTimeout(a,f||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(c){this._addClass(k(c.currentTarget),null,"ui-state-hover")
},mouseleave:function(c){this._removeClass(k(c.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(c){this._addClass(k(c.currentTarget),null,"ui-state-focus")
},focusout:function(c){this._removeClass(k(c.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(g,d,f){var l,h,c=this.options[g];
if(f=f||{},d=k.Event(d),d.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase(),d.target=this.element[0],h=d.originalEvent){for(l in h){l in d||(d[l]=h[l])
}}return this.element.trigger(d,f),!(k.isFunction(c)&&c.apply(this.element[0],[d].concat(f))===!1||d.isDefaultPrevented())
}},k.each({show:"fadeIn",hide:"fadeOut"},function(c,a){k.Widget.prototype["_"+c]=function(e,h,g){"string"==typeof h&&(h={effect:h});
var d,f=h?h===!0||"number"==typeof h?a:h.effect||a:c;
h=h||{},"number"==typeof h&&(h={duration:h}),d=!k.isEmptyObject(h),h.complete=g,h.delay&&e.delay(h.delay),d&&k.effects&&k.effects.effect[f]?e[c](h):f!==c&&e[f]?e[f](h.duration,h.easing,g):e.queue(function(l){k(this)[c](),g&&g.call(e[0]),l()
})
}
}),k.widget,function(){function L(c,d,a){return[parseFloat(c[0])*(P.test(c[0])?d/100:1),parseFloat(c[1])*(P.test(c[1])?a/100:1)]
}function t(c,a){return parseInt(k.css(c,a),10)||0
}function Q(c){var a=c[0];
return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:k.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}
}var m,g=Math.max,O=Math.abs,f=/left|center|right/,v=/top|center|bottom/,p=/[\+\-]\d+(\.[\d]+)?%?/,N=/^\w+/,P=/%$/,M=k.fn.position;
k.position={scrollbarWidth:function(){if(void 0!==m){return m
}var d,a,c=k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),h=c.children()[0];
return k("body").append(c),d=h.offsetWidth,c.css("overflow","scroll"),a=h.offsetWidth,d===a&&(a=c[0].clientWidth),c.remove(),m=d-a
},getScrollInfo:function(d){var a=d.isWindow||d.isDocument?"":d.element.css("overflow-x"),c=d.isWindow||d.isDocument?"":d.element.css("overflow-y"),l="scroll"===a||"auto"===a&&d.width<d.element[0].scrollWidth,h="scroll"===c||"auto"===c&&d.height<d.element[0].scrollHeight;
return{width:h?k.position.scrollbarWidth():0,height:l?k.position.scrollbarWidth():0}
},getWithinInfo:function(d){var a=k(d||window),c=k.isWindow(a[0]),l=!!a[0]&&9===a[0].nodeType,h=!c&&!l;
return{element:a,isWindow:c,isDocument:l,offset:h?k(d).offset():{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:a.outerWidth(),height:a.outerHeight()}
}},k.fn.position=function(c){if(!c||!c.of){return M.apply(this,arguments)
}c=k.extend({},c);
var S,a,i,h,d,s,R=k(c.of),o=k.position.getWithinInfo(c.within),l=k.position.getScrollInfo(o),r=(c.collision||"flip").split(" "),e={};
return s=Q(R),R[0].preventDefault&&(c.at="left top"),a=s.width,i=s.height,h=s.offset,d=k.extend({},h),k.each(["my","at"],function(){var u,T,n=(c[this]||"").split(" ");
1===n.length&&(n=f.test(n[0])?n.concat(["center"]):v.test(n[0])?["center"].concat(n):["center","center"]),n[0]=f.test(n[0])?n[0]:"center",n[1]=v.test(n[1])?n[1]:"center",u=p.exec(n[0]),T=p.exec(n[1]),e[this]=[u?u[0]:0,T?T[0]:0],c[this]=[N.exec(n[0])[0],N.exec(n[1])[0]]
}),1===r.length&&(r[1]=r[0]),"right"===c.at[0]?d.left+=a:"center"===c.at[0]&&(d.left+=a/2),"bottom"===c.at[1]?d.top+=i:"center"===c.at[1]&&(d.top+=i/2),S=L(e.at,a,i),d.left+=S[0],d.top+=S[1],this.each(function(){var ab,u,V=k(this),U=V.outerWidth(),X=V.outerHeight(),W=t(this,"marginLeft"),aa=t(this,"marginTop"),Y=U+W+t(this,"marginRight")+l.width,T=X+aa+t(this,"marginBottom")+l.height,n=k.extend({},d),Z=L(e.my,V.outerWidth(),V.outerHeight());
"right"===c.my[0]?n.left-=U:"center"===c.my[0]&&(n.left-=U/2),"bottom"===c.my[1]?n.top-=X:"center"===c.my[1]&&(n.top-=X/2),n.left+=Z[0],n.top+=Z[1],ab={marginLeft:W,marginTop:aa},k.each(["left","top"],function(ad,ac){k.ui.position[r[ad]]&&k.ui.position[r[ad]][ac](n,{targetWidth:a,targetHeight:i,elemWidth:U,elemHeight:X,collisionPosition:ab,collisionWidth:Y,collisionHeight:T,offset:[S[0]+Z[0],S[1]+Z[1]],my:c.my,at:c.at,within:o,elem:V})
}),c.using&&(u=function(ae){var ah=h.left-n.left,ad=ah+a-U,af=h.top-n.top,ag=af+i-X,ac={target:{element:R,left:h.left,top:h.top,width:a,height:i},element:{element:V,left:n.left,top:n.top,width:U,height:X},horizontal:0>ad?"left":ah>0?"right":"center",vertical:0>ag?"top":af>0?"bottom":"middle"};
U>a&&a>O(ah+ad)&&(ac.horizontal="center"),X>i&&i>O(af+ag)&&(ac.vertical="middle"),ac.important=g(O(ah),O(ad))>g(O(af),O(ag))?"horizontal":"vertical",c.using.call(this,ae,ac)
}),V.offset(k.extend(n,{using:u}))
})
},k.ui.position={fit:{left:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollLeft:V.offset.left,T=V.width,c=U.left-S.collisionPosition.marginLeft,R=d-c,o=c+S.collisionWidth-T-d;
S.collisionWidth>T?R>0&&0>=o?(u=U.left+R+S.collisionWidth-T-d,U.left+=R-u):U.left=o>0&&0>=R?d:R>o?d+T-S.collisionWidth:d:R>0?U.left+=R:o>0?U.left-=o:U.left=g(U.left-c,U.left)
},top:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollTop:V.offset.top,T=S.within.height,c=U.top-S.collisionPosition.marginTop,R=d-c,o=c+S.collisionHeight-T-d;
S.collisionHeight>T?R>0&&0>=o?(u=U.top+R+S.collisionHeight-T-d,U.top+=R-u):U.top=o>0&&0>=R?d:R>o?d+T-S.collisionHeight:d:R>0?U.top+=R:o>0?U.top-=o:U.top=g(U.top-c,U.top)
}},flip:{left:function(ac,Y){var V,ad,T=Y.within,S=T.offset.left+T.scrollLeft,a=T.width,W=T.isWindow?T.scrollLeft:T.offset.left,U=ac.left-Y.collisionPosition.marginLeft,aa=U-W,ab=U+Y.collisionWidth-a-W,Z="left"===Y.my[0]?-Y.elemWidth:"right"===Y.my[0]?Y.elemWidth:0,R="left"===Y.at[0]?Y.targetWidth:"right"===Y.at[0]?-Y.targetWidth:0,X=-2*Y.offset[0];
0>aa?(V=ac.left+Z+R+X+Y.collisionWidth-a-S,(0>V||O(aa)>V)&&(ac.left+=Z+R+X)):ab>0&&(ad=ac.left-Y.collisionPosition.marginLeft+Z+R+X-W,(ad>0||ab>O(ad))&&(ac.left+=Z+R+X))
},top:function(ad,Z){var V,ae,T=Z.within,S=T.offset.top+T.scrollTop,a=T.height,W=T.isWindow?T.scrollTop:T.offset.top,U=ad.top-Z.collisionPosition.marginTop,ab=U-W,ac=U+Z.collisionHeight-a-W,aa="top"===Z.my[1],R=aa?-Z.elemHeight:"bottom"===Z.my[1]?Z.elemHeight:0,Y="top"===Z.at[1]?Z.targetHeight:"bottom"===Z.at[1]?-Z.targetHeight:0,X=-2*Z.offset[1];
0>ab?(ae=ad.top+R+Y+X+Z.collisionHeight-a-S,(0>ae||O(ab)>ae)&&(ad.top+=R+Y+X)):ac>0&&(V=ad.top-Z.collisionPosition.marginTop+R+Y+X-W,(V>0||ac>O(V))&&(ad.top+=R+Y+X))
}},flipfit:{left:function(){k.ui.position.flip.left.apply(this,arguments),k.ui.position.fit.left.apply(this,arguments)
},top:function(){k.ui.position.flip.top.apply(this,arguments),k.ui.position.fit.top.apply(this,arguments)
}}}
}(),k.ui.position,k.extend(k.expr[":"],{data:k.expr.createPseudo?k.expr.createPseudo(function(a){return function(c){return !!k.data(c,a)
}
}):function(d,a,c){return !!k.data(d,c[3])
}}),k.fn.extend({disableSelection:function(){var a="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(a+".ui-disableSelection",function(c){c.preventDefault()
})
}
}(),enableSelection:function(){return this.off(".ui-disableSelection")
}}),k.ui.focusable=function(e,g){var t,p,d,m,f,c=e.nodeName.toLowerCase();
return"area"===c?(t=e.parentNode,p=t.name,e.href&&p&&"map"===t.nodeName.toLowerCase()?(d=k("img[usemap='#"+p+"']"),d.length>0&&d.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(c)?(m=!e.disabled,m&&(f=k(e).closest("fieldset")[0],f&&(m=!f.disabled))):m="a"===c?e.href||g:g,m&&k(e).is(":visible")&&G(k(e)))
},k.extend(k.expr[":"],{focusable:function(a){return k.ui.focusable(a,null!=k.attr(a,"tabindex"))
}}),k.ui.focusable,k.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):k(this[0].form)
},k.ui.formResetMixin={_formResetHandler:function(){var a=k(this);
setTimeout(function(){var c=a.data("ui-form-reset-instances");
k.each(c,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];
a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)
}},_unbindFormResetHandler:function(){if(this.form.length){var a=this.form.data("ui-form-reset-instances");
a.splice(k.inArray(this,a),1),a.length?this.form.data("ui-form-reset-instances",a):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}},"1.7"===k.fn.jquery.substring(0,3)&&(k.each(["Width","Height"],function(g,d){function f(n,a,m,p){return k.each(l,function(){a-=parseFloat(k.css(n,"padding"+this))||0,m&&(a-=parseFloat(k.css(n,"border"+this+"Width"))||0),p&&(a-=parseFloat(k.css(n,"margin"+this))||0)
}),a
}var l="Width"===d?["Left","Right"]:["Top","Bottom"],h=d.toLowerCase(),c={innerWidth:k.fn.innerWidth,innerHeight:k.fn.innerHeight,outerWidth:k.fn.outerWidth,outerHeight:k.fn.outerHeight};
k.fn["inner"+d]=function(a){return void 0===a?c["inner"+d].call(this):this.each(function(){k(this).css(h,f(this,a)+"px")
})
},k.fn["outer"+d]=function(a,i){return"number"!=typeof a?c["outer"+d].call(this,a):this.each(function(){k(this).css(h,f(this,a,!0,i)+"px")
})
}
}),k.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),k.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},k.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(c){return c.replace(a,"\\$1")
}
}(),k.fn.labels=function(){var d,a,c,g,f;
return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(g=this.eq(0).parents("label"),c=this.attr("id"),c&&(d=this.eq(0).parents().last(),f=d.add(d.length?d.siblings():this.siblings()),a="label[for='"+k.ui.escapeSelector(c)+"']",g=g.add(f.find(a).addBack(a))),this.pushStack(g))
},k.fn.scrollParent=function(d){var a=this.css("position"),c="absolute"===a,g=d?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var h=k(this);
return c&&"static"===h.css("position")?!1:g.test(h.css("overflow")+h.css("overflow-y")+h.css("overflow-x"))
}).eq(0);
return"fixed"!==a&&f.length?f:k(this[0].ownerDocument||document)
},k.extend(k.expr[":"],{tabbable:function(d){var a=k.attr(d,"tabindex"),c=null!=a;
return(!c||a>=0)&&k.ui.focusable(d,c)
}}),k.fn.extend({uniqueId:function(){var a=0;
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)
})
}
}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&k(this).removeAttr("id")
})
}}),k.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var I=!1;
k(document).on("mouseup",function(){I=!1
}),k.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.on("mousedown."+this.widgetName,function(c){return a._mouseDown(c)
}).on("click."+this.widgetName,function(c){return !0===k.data(c.target,a.widgetName+".preventClickEvent")?(k.removeData(c.target,a.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0
}),this.started=!1
},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(d){if(!I){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(d),this._mouseDownEvent=d;
var a=this,c=1===d.which,f="string"==typeof this.options.cancel&&d.target.nodeName?k(d.target).closest(this.options.cancel).length:!1;
return c&&!f&&this._mouseCapture(d)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){a.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(d)!==!1,!this._mouseStarted)?(d.preventDefault(),!0):(!0===k.data(d.target,this.widgetName+".preventClickEvent")&&k.removeData(d.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return a._mouseMove(e)
},this._mouseUpDelegate=function(e){return a._mouseUp(e)
},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),d.preventDefault(),I=!0,!0)):!0
}},_mouseMove:function(a){if(this._mouseMoved){if(k.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button){return this._mouseUp(a)
}if(!a.which){if(a.originalEvent.altKey||a.originalEvent.ctrlKey||a.originalEvent.metaKey||a.originalEvent.shiftKey){this.ignoreMissingWhich=!0
}else{if(!this.ignoreMissingWhich){return this._mouseUp(a)
}}}}return(a.which||a.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(a),a.preventDefault()):(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==!1,this._mouseStarted?this._mouseDrag(a):this._mouseUp(a)),!this._mouseStarted)
},_mouseUp:function(a){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&k.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,I=!1,a.preventDefault()
},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}}),k.ui.plugin={add:function(d,a,c){var g,f=k.ui[d].prototype;
for(g in c){f.plugins[g]=f.plugins[g]||[],f.plugins[g].push([a,c[g]])
}},call:function(c,f,a,d){var h,g=c.plugins[f];
if(g&&(d||c.element[0].parentNode&&11!==c.element[0].parentNode.nodeType)){for(h=0;
g.length>h;
h++){c.options[g[h][0]]&&g[h][1].apply(c.element,a)
}}}},k.ui.safeActiveElement=function(c){var d;
try{d=c.activeElement
}catch(a){d=c.body
}return d||(d=c.body),d.nodeName||(d=c.body),d
},k.ui.safeBlur=function(a){a&&"body"!==a.nodeName.toLowerCase()&&k(a).trigger("blur")
},k.widget("ui.draggable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()
},_setOption:function(a,c){this._super(a,c),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())
},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)
},_mouseCapture:function(c){var a=this.options;
return this.helper||a.disabled||k(c.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(c),this.handle?(this._blurActiveElement(c),this._blockFrames(a.iframeFix===!0?"iframe":a.iframeFix),!0):!1)
},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var c=k(this);
return k("<div>").css("position","absolute").appendTo(c.parent()).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).offset(c.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_blurActiveElement:function(d){var a=k.ui.safeActiveElement(this.document[0]),c=k(d.target);
c.closest(a).length||k.ui.safeBlur(a)
},_mouseStart:function(c){var a=this.options;
return this.helper=this._createHelper(c),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),k.ui.ddmanager&&(k.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===k(this).css("position")
}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(c),this.originalPosition=this.position=this._generatePosition(c,!1),this.originalPageX=c.pageX,this.originalPageY=c.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this._setContainment(),this._trigger("start",c)===!1?(this._clear(),!1):(this._cacheHelperProportions(),k.ui.ddmanager&&!a.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,c),this._mouseDrag(c,!0),k.ui.ddmanager&&k.ui.ddmanager.dragStart(this,c),!0)
},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}
},_mouseDrag:function(d,a){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(d,!0),this.positionAbs=this._convertPositionTo("absolute"),!a){var c=this._uiHash();
if(this._trigger("drag",d,c)===!1){return this._mouseUp(new k.Event("mouseup",d)),!1
}this.position=c.position
}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",k.ui.ddmanager&&k.ui.ddmanager.drag(this,d),!1
},_mouseStop:function(d){var a=this,c=!1;
return k.ui.ddmanager&&!this.options.dropBehaviour&&(c=k.ui.ddmanager.drop(this,d)),this.dropped&&(c=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!c||"valid"===this.options.revert&&c||this.options.revert===!0||k.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)?k(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){a._trigger("stop",d)!==!1&&a._clear()
}):this._trigger("stop",d)!==!1&&this._clear(),!1
},_mouseUp:function(a){return this._unblockFrames(),k.ui.ddmanager&&k.ui.ddmanager.dragStop(this,a),this.handleElement.is(a.target)&&this.element.trigger("focus"),k.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new k.Event("mouseup",{target:this.element[0]})):this._clear(),this
},_getHandle:function(a){return this.options.handle?!!k(a.target).closest(this.element.find(this.options.handle)).length:!0
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(d){var a=this.options,c=k.isFunction(a.helper),f=c?k(a.helper.apply(this.element[0],[d])):"clone"===a.helper?this.element.clone().removeAttr("id"):this.element;
return f.parents("body").length||f.appendTo("parent"===a.appendTo?this.element[0].parentNode:a.appendTo),c&&f[0]===this.element[0]&&this._setPositionRelative(),f[0]===this.element[0]||/(fixed|absolute)/.test(f.css("position"))||f.css("position","absolute"),f
},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),k.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]
},_getParentOffset:function(){var c=this.offsetParent.offset(),a=this.document[0];
return"absolute"===this.cssPosition&&this.scrollParent[0]!==a&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(c.left+=this.scrollParent.scrollLeft(),c.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(c={top:0,left:0}),{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"!==this.cssPosition){return{top:0,left:0}
}var a=this.element.position(),c=this._isRootNode(this.scrollParent[0]);
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(c?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(c?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,a,c,g=this.options,f=this.document[0];
return this.relativeContainer=null,g.containment?"window"===g.containment?(this.containment=[k(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,k(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,k(window).scrollLeft()+k(window).width()-this.helperProportions.width-this.margins.left,k(window).scrollTop()+(k(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===g.containment?(this.containment=[0,0,k(f).width()-this.helperProportions.width-this.margins.left,(k(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):g.containment.constructor===Array?(this.containment=g.containment,void 0):("parent"===g.containment&&(g.containment=this.helper[0].parentNode),a=k(g.containment),c=a[0],c&&(d=/(scroll|auto)/.test(a.css("overflow")),this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=a),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(c,f){f||(f=this.position);
var a="absolute"===c?1:-1,d=this._isRootNode(this.scrollParent[0]);
return{top:f.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*a,left:f.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*a}
},_generatePosition:function(L,u){var m,M,f,d,v=this.options,c=this._isRootNode(this.scrollParent[0]),p=L.pageX,g=L.pageY;
return c&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),u&&(this.containment&&(this.relativeContainer?(M=this.relativeContainer.offset(),m=[this.containment[0]+M.left,this.containment[1]+M.top,this.containment[2]+M.left,this.containment[3]+M.top]):m=this.containment,L.pageX-this.offset.click.left<m[0]&&(p=m[0]+this.offset.click.left),L.pageY-this.offset.click.top<m[1]&&(g=m[1]+this.offset.click.top),L.pageX-this.offset.click.left>m[2]&&(p=m[2]+this.offset.click.left),L.pageY-this.offset.click.top>m[3]&&(g=m[3]+this.offset.click.top)),v.grid&&(f=v.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/v.grid[1])*v.grid[1]:this.originalPageY,g=m?f-this.offset.click.top>=m[1]||f-this.offset.click.top>m[3]?f:f-this.offset.click.top>=m[1]?f-v.grid[1]:f+v.grid[1]:f,d=v.grid[0]?this.originalPageX+Math.round((p-this.originalPageX)/v.grid[0])*v.grid[0]:this.originalPageX,p=m?d-this.offset.click.left>=m[0]||d-this.offset.click.left>m[2]?d:d-this.offset.click.left>=m[0]?d-v.grid[0]:d+v.grid[0]:d),"y"===v.axis&&(p=this.originalPageX),"x"===v.axis&&(g=this.originalPageY)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()
},_trigger:function(d,a,c){return c=c||this._uiHash(),k.ui.plugin.call(this,d,[a,c,this],!0),/^(drag|start|stop)/.test(d)&&(this.positionAbs=this._convertPositionTo("absolute"),c.offset=this.positionAbs),k.Widget.prototype._trigger.call(this,d,a,c)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),k.ui.plugin.add("draggable","connectToSortable",{start:function(d,a,c){var f=k.extend({},a,{item:c.element});
c.sortables=[],k(c.options.connectToSortable).each(function(){var e=k(this).sortable("instance");
e&&!e.options.disabled&&(c.sortables.push(e),e.refreshPositions(),e._trigger("activate",d,f))
})
},stop:function(d,a,c){var f=k.extend({},a,{item:c.element});
c.cancelHelperRemoval=!1,k.each(c.sortables,function(){var e=this;
e.isOver?(e.isOver=0,c.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(d),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",d,f))
})
},drag:function(d,a,c){k.each(c.sortables,function(){var f=!1,e=this;
e.positionAbs=c.positionAbs,e.helperProportions=c.helperProportions,e.offset.click=c.offset.click,e._intersectsWith(e.containerCache)&&(f=!0,k.each(c.sortables,function(){return this.positionAbs=c.positionAbs,this.helperProportions=c.helperProportions,this.offset.click=c.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&k.contains(e.element[0],this.element[0])&&(f=!1),f
})),f?(e.isOver||(e.isOver=1,c._parent=a.helper.parent(),e.currentItem=a.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return a.helper[0]
},d.target=e.currentItem[0],e._mouseCapture(d,!0),e._mouseStart(d,!0,!0),e.offset.click.top=c.offset.click.top,e.offset.click.left=c.offset.click.left,e.offset.parent.left-=c.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=c.offset.parent.top-e.offset.parent.top,c._trigger("toSortable",d),c.dropped=e.element,k.each(c.sortables,function(){this.refreshPositions()
}),c.currentItem=c.element,e.fromOutside=c),e.currentItem&&(e._mouseDrag(d),a.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",d,e._uiHash(e)),e._mouseStop(d,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),a.helper.appendTo(c._parent),c._refreshOffsets(d),a.position=c._generatePosition(d,!0),c._trigger("fromSortable",d),c.dropped=!1,k.each(c.sortables,function(){this.refreshPositions()
}))
})
}}),k.ui.plugin.add("draggable","cursor",{start:function(d,a,c){var g=k("body"),f=c.options;
g.css("cursor")&&(f._cursor=g.css("cursor")),g.css("cursor",f.cursor)
},stop:function(d,a,c){var f=c.options;
f._cursor&&k("body").css("cursor",f._cursor)
}}),k.ui.plugin.add("draggable","opacity",{start:function(d,a,c){var g=k(a.helper),f=c.options;
g.css("opacity")&&(f._opacity=g.css("opacity")),g.css("opacity",f.opacity)
},stop:function(d,a,c){var f=c.options;
f._opacity&&k(a.helper).css("opacity",f._opacity)
}}),k.ui.plugin.add("draggable","scroll",{start:function(c,d,a){a.scrollParentNotHidden||(a.scrollParentNotHidden=a.helper.scrollParent(!1)),a.scrollParentNotHidden[0]!==a.document[0]&&"HTML"!==a.scrollParentNotHidden[0].tagName&&(a.overflowOffset=a.scrollParentNotHidden.offset())
},drag:function(h,d,f){var m=f.options,l=!1,c=f.scrollParentNotHidden[0],g=f.document[0];
c!==g&&"HTML"!==c.tagName?(m.axis&&"x"===m.axis||(f.overflowOffset.top+c.offsetHeight-h.pageY<m.scrollSensitivity?c.scrollTop=l=c.scrollTop+m.scrollSpeed:h.pageY-f.overflowOffset.top<m.scrollSensitivity&&(c.scrollTop=l=c.scrollTop-m.scrollSpeed)),m.axis&&"y"===m.axis||(f.overflowOffset.left+c.offsetWidth-h.pageX<m.scrollSensitivity?c.scrollLeft=l=c.scrollLeft+m.scrollSpeed:h.pageX-f.overflowOffset.left<m.scrollSensitivity&&(c.scrollLeft=l=c.scrollLeft-m.scrollSpeed))):(m.axis&&"x"===m.axis||(h.pageY-k(g).scrollTop()<m.scrollSensitivity?l=k(g).scrollTop(k(g).scrollTop()-m.scrollSpeed):k(window).height()-(h.pageY-k(g).scrollTop())<m.scrollSensitivity&&(l=k(g).scrollTop(k(g).scrollTop()+m.scrollSpeed))),m.axis&&"y"===m.axis||(h.pageX-k(g).scrollLeft()<m.scrollSensitivity?l=k(g).scrollLeft(k(g).scrollLeft()-m.scrollSpeed):k(window).width()-(h.pageX-k(g).scrollLeft())<m.scrollSensitivity&&(l=k(g).scrollLeft(k(g).scrollLeft()+m.scrollSpeed)))),l!==!1&&k.ui.ddmanager&&!m.dropBehaviour&&k.ui.ddmanager.prepareOffsets(f,h)
}}),k.ui.plugin.add("draggable","snap",{start:function(d,a,c){var f=c.options;
c.snapElements=[],k(f.snap.constructor!==String?f.snap.items||":data(ui-draggable)":f.snap).each(function(){var h=k(this),g=h.offset();
this!==c.element[0]&&c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
})
},drag:function(X,T,M){var Q,P,ab,N,U,S,Z,L,Y,O,W=M.options,V=W.snapTolerance,R=T.offset.left,ac=R+M.helperProportions.width,t=T.offset.top,aa=t+M.helperProportions.height;
for(Y=M.snapElements.length-1;
Y>=0;
Y--){U=M.snapElements[Y].left-M.margins.left,S=U+M.snapElements[Y].width,Z=M.snapElements[Y].top-M.margins.top,L=Z+M.snapElements[Y].height,U-V>ac||R>S+V||Z-V>aa||t>L+V||!k.contains(M.snapElements[Y].item.ownerDocument,M.snapElements[Y].item)?(M.snapElements[Y].snapping&&M.options.snap.release&&M.options.snap.release.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=!1):("inner"!==W.snapMode&&(Q=V>=Math.abs(Z-aa),P=V>=Math.abs(L-t),ab=V>=Math.abs(U-ac),N=V>=Math.abs(S-R),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z-M.helperProportions.height,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U-M.helperProportions.width}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S}).left)),O=Q||P||ab||N,"outer"!==W.snapMode&&(Q=V>=Math.abs(Z-t),P=V>=Math.abs(L-aa),ab=V>=Math.abs(U-R),N=V>=Math.abs(S-ac),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L-M.helperProportions.height,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S-M.helperProportions.width}).left)),!M.snapElements[Y].snapping&&(Q||P||ab||N||O)&&M.options.snap.snap&&M.options.snap.snap.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=Q||P||ab||N||O)
}}}),k.ui.plugin.add("draggable","stack",{start:function(g,d,f){var l,h=f.options,c=k.makeArray(k(h.stack)).sort(function(m,a){return(parseInt(k(m).css("zIndex"),10)||0)-(parseInt(k(a).css("zIndex"),10)||0)
});
c.length&&(l=parseInt(k(c[0]).css("zIndex"),10)||0,k(c).each(function(a){k(this).css("zIndex",l+a)
}),this.css("zIndex",l+c.length))
}}),k.ui.plugin.add("draggable","zIndex",{start:function(d,a,c){var g=k(a.helper),f=c.options;
g.css("zIndex")&&(f._zIndex=g.css("zIndex")),g.css("zIndex",f.zIndex)
},stop:function(d,a,c){var f=c.options;
f._zIndex&&k(a.helper).css("zIndex",f._zIndex)
}}),k.ui.draggable,k.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var d,a=this.options,c=a.accept;
this.isover=!1,this.isout=!0,this.accept=k.isFunction(c)?c:function(e){return e.is(c)
},this.proportions=function(){return arguments.length?(d=arguments[0],void 0):d?d:d={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
},this._addToManager(a.scope),a.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(a){k.ui.ddmanager.droppables[a]=k.ui.ddmanager.droppables[a]||[],k.ui.ddmanager.droppables[a].push(this)
},_splice:function(a){for(var c=0;
a.length>c;
c++){a[c]===this&&a.splice(c,1)
}},_destroy:function(){var a=k.ui.ddmanager.droppables[this.options.scope];
this._splice(a)
},_setOption:function(d,a){if("accept"===d){this.accept=k.isFunction(a)?a:function(e){return e.is(a)
}
}else{if("scope"===d){var c=k.ui.ddmanager.droppables[this.options.scope];
this._splice(c),this._addToManager(a)
}}this._super(d,a)
},_activate:function(c){var a=k.ui.ddmanager.current;
this._addActiveClass(),a&&this._trigger("activate",c,this.ui(a))
},_deactivate:function(c){var a=k.ui.ddmanager.current;
this._removeActiveClass(),a&&this._trigger("deactivate",c,this.ui(a))
},_over:function(c){var a=k.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._addHoverClass(),this._trigger("over",c,this.ui(a)))
},_out:function(c){var a=k.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._removeHoverClass(),this._trigger("out",c,this.ui(a)))
},_drop:function(d,a){var c=a||k.ui.ddmanager.current,f=!1;
return c&&(c.currentItem||c.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=k(this).droppable("instance");
return e.options.greedy&&!e.options.disabled&&e.options.scope===c.options.scope&&e.accept.call(e.element[0],c.currentItem||c.element)&&j(c,k.extend(e,{offset:e.element.offset()}),e.options.tolerance,d)?(f=!0,!1):void 0
}),f?!1:this.accept.call(this.element[0],c.currentItem||c.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",d,this.ui(c)),this.element):!1):!1
},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var j=k.ui.intersect=function(){function a(d,f,c){return d>=f&&f+c>d
}return function(L,t,Q,m){if(!t.offset){return !1
}var g=(L.positionAbs||L.position.absolute).left+L.margins.left,O=(L.positionAbs||L.position.absolute).top+L.margins.top,f=g+L.helperProportions.width,v=O+L.helperProportions.height,p=t.offset.left,N=t.offset.top,P=p+t.proportions().width,M=N+t.proportions().height;
switch(Q){case"fit":return g>=p&&P>=f&&O>=N&&M>=v;
case"intersect":return g+L.helperProportions.width/2>p&&P>f-L.helperProportions.width/2&&O+L.helperProportions.height/2>N&&M>v-L.helperProportions.height/2;
case"pointer":return a(m.pageY,N,t.proportions().height)&&a(m.pageX,p,t.proportions().width);
case"touch":return(O>=N&&M>=O||v>=N&&M>=v||N>O&&v>M)&&(g>=p&&P>=g||f>=p&&P>=f||p>g&&f>P);
default:return !1
}}
}();
k.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,d){var f,m,l=k.ui.ddmanager.droppables[h.options.scope]||[],c=d?d.type:null,g=(h.currentItem||h.element).find(":data(ui-droppable)").addBack();
k:for(f=0;
l.length>f;
f++){if(!(l[f].options.disabled||h&&!l[f].accept.call(l[f].element[0],h.currentItem||h.element))){for(m=0;
g.length>m;
m++){if(g[m]===l[f].element[0]){l[f].proportions().height=0;
continue k
}}l[f].visible="none"!==l[f].element.css("display"),l[f].visible&&("mousedown"===c&&l[f]._activate.call(l[f],d),l[f].offset=l[f].element.offset(),l[f].proportions({width:l[f].element[0].offsetWidth,height:l[f].element[0].offsetHeight}))
}}},drop:function(d,a){var c=!1;
return k.each((k.ui.ddmanager.droppables[d.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&j(d,this,this.options.tolerance,a)&&(c=this._drop.call(this,a)||c),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||d.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,a)))
}),c
},dragStart:function(c,a){c.element.parentsUntil("body").on("scroll.droppable",function(){c.options.refreshPositions||k.ui.ddmanager.prepareOffsets(c,a)
})
},drag:function(c,a){c.options.refreshPositions&&k.ui.ddmanager.prepareOffsets(c,a),k.each(k.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var e,h,g,d=j(c,this,this.options.tolerance,a),f=!d&&this.isover?"isout":d&&!this.isover?"isover":null;
f&&(this.options.greedy&&(h=this.options.scope,g=this.element.parents(":data(ui-droppable)").filter(function(){return k(this).droppable("instance").options.scope===h
}),g.length&&(e=k(g[0]).droppable("instance"),e.greedyChild="isover"===f)),e&&"isover"===f&&(e.isover=!1,e.isout=!0,e._out.call(e,a)),this[f]=!0,this["isout"===f?"isover":"isout"]=!1,this["isover"===f?"_over":"_out"].call(this,a),e&&"isout"===f&&(e.isout=!1,e.isover=!0,e._over.call(e,a)))
}})
},dragStop:function(c,a){c.element.parentsUntil("body").off("scroll.droppable"),c.options.refreshPositions||k.ui.ddmanager.prepareOffsets(c,a)
}},k.uiBackCompat!==!1&&k.widget("ui.droppable",k.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)
},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)
},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
}}),k.ui.droppable,k.widget("ui.resizable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0
},_isNumber:function(a){return !isNaN(parseFloat(a))
},_hasScroll:function(d,a){if("hidden"===k(d).css("overflow")){return !1
}var c=a&&"left"===a?"scrollLeft":"scrollTop",f=!1;
return d[c]>0?!0:(d[c]=1,f=d[c]>0,d[c]=0,f)
},_create:function(){var d,a=this.options,c=this;
this._addClass("ui-resizable"),k.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,d={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(d),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(d),this._proportionallyResize()),this._setupHandles(),a.autoHide&&k(this.element).on("mouseenter",function(){a.disabled||(c._removeClass("ui-resizable-autohide"),c._handles.show())
}).on("mouseleave",function(){a.disabled||c.resizing||(c._addClass("ui-resizable-autohide"),c._handles.hide())
}),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var c,a=function(d){k(d).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(a(this.element),c=this.element,this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")}).insertAfter(c),c.remove()),this.originalElement.css("resize",this.originalResizeStyle),a(this.originalElement),this
},_setOption:function(a,c){switch(this._super(a,c),a){case"handles":this._removeHandles(),this._setupHandles();
break;
default:}},_setupHandles:function(){var h,d,f,m,l,c=this.options,g=this;
if(this.handles=c.handles||(k(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=k(),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),f=this.handles.split(","),this.handles={},d=0;
f.length>d;
d++){h=k.trim(f[d]),m="ui-resizable-"+h,l=k("<div>"),this._addClass(l,"ui-resizable-handle "+m),l.css({zIndex:c.zIndex}),this.handles[h]=".ui-resizable-"+h,this.element.append(l)
}}this._renderAxis=function(r){var a,p,u,t;
r=r||this.element;
for(a in this.handles){this.handles[a].constructor===String?this.handles[a]=this.element.children(this.handles[a]).first().show():(this.handles[a].jquery||this.handles[a].nodeType)&&(this.handles[a]=k(this.handles[a]),this._on(this.handles[a],{mousedown:g._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(p=k(this.handles[a],this.element),t=/sw|ne|nw|se|n|s/.test(a)?p.outerHeight():p.outerWidth(),u=["padding",/ne|nw|n/.test(a)?"Top":/se|sw|s/.test(a)?"Bottom":/^e$/.test(a)?"Right":"Left"].join(""),r.css(u,t),this._proportionallyResize()),this._handles=this._handles.add(this.handles[a])
}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){g.resizing||(this.className&&(l=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=l&&l[1]?l[1]:"se")
}),c.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))
},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(d){var a,c,f=!1;
for(a in this.handles){c=k(this.handles[a])[0],(c===d.target||k.contains(c,d.target))&&(f=!0)
}return !this.options.disabled&&f
},_mouseStart:function(g){var d,f,l,h=this.options,c=this.element;
return this.resizing=!0,this._renderProxy(),d=this._num(this.helper.css("left")),f=this._num(this.helper.css("top")),h.containment&&(d+=k(h.containment).scrollLeft()||0,f+=k(h.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:f},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:c.width(),height:c.height()},this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()},this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()},this.originalPosition={left:d,top:f},this.originalMousePosition={left:g.pageX,top:g.pageY},this.aspectRatio="number"==typeof h.aspectRatio?h.aspectRatio:this.originalSize.width/this.originalSize.height||1,l=k(".ui-resizable-"+this.axis).css("cursor"),k("body").css("cursor","auto"===l?this.axis+"-resize":l),this._addClass("ui-resizable-resizing"),this._propagate("start",g),!0
},_mouseDrag:function(m){var d,g,t=this.originalMousePosition,p=this.axis,c=m.pageX-t.left||0,l=m.pageY-t.top||0,f=this._change[p];
return this._updatePrevProperties(),f?(d=f.apply(this,[m,c,l]),this._updateVirtualBoundaries(m.shiftKey),(this._aspectRatio||m.shiftKey)&&(d=this._updateRatio(d,m)),d=this._respectSize(d,m),this._updateCache(d),this._propagate("resize",m),g=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),k.isEmptyObject(g)||(this._updatePrevProperties(),this._trigger("resize",m,this.ui()),this._applyChanges()),!1):!1
},_mouseStop:function(u){this.resizing=!1;
var p,M,g,f,L,d,t,m=this.options,v=this;
return this._helper&&(p=this._proportionallyResizeElements,M=p.length&&/textarea/i.test(p[0].nodeName),g=M&&this._hasScroll(p[0],"left")?0:v.sizeDiff.height,f=M?0:v.sizeDiff.width,L={width:v.helper.width()-f,height:v.helper.height()-g},d=parseFloat(v.element.css("left"))+(v.position.left-v.originalPosition.left)||null,t=parseFloat(v.element.css("top"))+(v.position.top-v.originalPosition.top)||null,m.animate||this.element.css(k.extend(L,{top:t,left:d})),v.helper.height(v.size.height),v.helper.width(v.size.width),this._helper&&!m.animate&&this._proportionallyResize()),k("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",u),this._helper&&this.helper.remove(),!1
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var a={};
return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a
},_updateVirtualBoundaries:function(f){var h,d,g,m,l,c=this.options;
l={minWidth:this._isNumber(c.minWidth)?c.minWidth:0,maxWidth:this._isNumber(c.maxWidth)?c.maxWidth:1/0,minHeight:this._isNumber(c.minHeight)?c.minHeight:0,maxHeight:this._isNumber(c.maxHeight)?c.maxHeight:1/0},(this._aspectRatio||f)&&(h=l.minHeight*this.aspectRatio,g=l.minWidth/this.aspectRatio,d=l.maxHeight*this.aspectRatio,m=l.maxWidth/this.aspectRatio,h>l.minWidth&&(l.minWidth=h),g>l.minHeight&&(l.minHeight=g),l.maxWidth>d&&(l.maxWidth=d),l.maxHeight>m&&(l.maxHeight=m)),this._vBoundaries=l
},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)
},_updateRatio:function(c){var f=this.position,a=this.size,d=this.axis;
return this._isNumber(c.height)?c.width=c.height*this.aspectRatio:this._isNumber(c.width)&&(c.height=c.width/this.aspectRatio),"sw"===d&&(c.left=f.left+(a.width-c.width),c.top=null),"nw"===d&&(c.top=f.top+(a.height-c.height),c.left=f.left+(a.width-c.width)),c
},_respectSize:function(N){var v=this._vBoundaries,p=this.axis,O=this._isNumber(N.width)&&v.maxWidth&&v.maxWidth<N.width,g=this._isNumber(N.height)&&v.maxHeight&&v.maxHeight<N.height,f=this._isNumber(N.width)&&v.minWidth&&v.minWidth>N.width,M=this._isNumber(N.height)&&v.minHeight&&v.minHeight>N.height,d=this.originalPosition.left+this.originalSize.width,u=this.originalPosition.top+this.originalSize.height,m=/sw|nw|w/.test(p),L=/nw|ne|n/.test(p);
return f&&(N.width=v.minWidth),M&&(N.height=v.minHeight),O&&(N.width=v.maxWidth),g&&(N.height=v.maxHeight),f&&m&&(N.left=d-v.minWidth),O&&m&&(N.left=d-v.maxWidth),M&&L&&(N.top=u-v.minHeight),g&&L&&(N.top=u-v.maxHeight),N.width||N.height||N.left||!N.top?N.width||N.height||N.top||!N.left||(N.left=null):N.top=null,N
},_getPaddingPlusBorderDimensions:function(c){for(var f=0,a=[],d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],g=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];
4>f;
f++){a[f]=parseFloat(d[f])||0,a[f]+=parseFloat(g[f])||0
}return{height:a[0]+a[2],width:a[1]+a[3]}
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var c,d=0,a=this.helper||this.element;
this._proportionallyResizeElements.length>d;
d++){c=this._proportionallyResizeElements[d],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(c)),c.css({height:a.height()-this.outerDimensions.height||0,width:a.width()-this.outerDimensions.width||0})
}}},_renderProxy:function(){var c=this.element,a=this.options;
this.elementOffset=c.offset(),this._helper?(this.helper=this.helper||k("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(a,c){return{width:this.originalSize.width+c}
},w:function(c,f){var a=this.originalSize,d=this.originalPosition;
return{left:d.left+f,width:a.width-f}
},n:function(c,f,a){var d=this.originalSize,g=this.originalPosition;
return{top:g.top+a,height:d.height-a}
},s:function(c,d,a){return{height:this.originalSize.height+a}
},se:function(d,a,c){return k.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[d,a,c]))
},sw:function(d,a,c){return k.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[d,a,c]))
},ne:function(d,a,c){return k.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[d,a,c]))
},nw:function(d,a,c){return k.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[d,a,c]))
}},_propagate:function(c,a){k.ui.plugin.call(this,c,[a,this.ui()]),"resize"!==c&&this._trigger(c,a,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),k.ui.plugin.add("resizable","animate",{stop:function(u){var p=k(this).resizable("instance"),M=p.options,g=p._proportionallyResizeElements,f=g.length&&/textarea/i.test(g[0].nodeName),L=f&&p._hasScroll(g[0],"left")?0:p.sizeDiff.height,d=f?0:p.sizeDiff.width,t={width:p.size.width-d,height:p.size.height-L},m=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,v=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null;
p.element.animate(k.extend(t,v&&m?{top:v,left:m}:{}),{duration:M.animateDuration,easing:M.animateEasing,step:function(){var a={width:parseFloat(p.element.css("width")),height:parseFloat(p.element.css("height")),top:parseFloat(p.element.css("top")),left:parseFloat(p.element.css("left"))};
g&&g.length&&k(g[0]).css({width:a.width,height:a.height}),p._updateCache(a),p._propagate("resize",u)
}})
}}),k.ui.plugin.add("resizable","containment",{start:function(){var L,t,Q,m,g,O,f,v=k(this).resizable("instance"),p=v.options,N=v.element,P=p.containment,M=P instanceof k?P.get(0):/parent/.test(P)?N.parent().get(0):P;
M&&(v.containerElement=k(M),/document/.test(P)||P===document?(v.containerOffset={left:0,top:0},v.containerPosition={left:0,top:0},v.parentData={element:k(document),left:0,top:0,width:k(document).width(),height:k(document).height()||document.body.parentNode.scrollHeight}):(L=k(M),t=[],k(["Top","Right","Left","Bottom"]).each(function(a,c){t[a]=v._num(L.css("padding"+c))
}),v.containerOffset=L.offset(),v.containerPosition=L.position(),v.containerSize={height:L.innerHeight()-t[3],width:L.innerWidth()-t[1]},Q=v.containerOffset,m=v.containerSize.height,g=v.containerSize.width,O=v._hasScroll(M,"left")?M.scrollWidth:g,f=v._hasScroll(M)?M.scrollHeight:m,v.parentData={element:M,left:Q.left,top:Q.top,width:O,height:f}))
},resize:function(N){var L,S,t,m,Q=k(this).resizable("instance"),f=Q.options,M=Q.containerOffset,v=Q.position,P=Q._aspectRatio||N.shiftKey,R={top:0,left:0},O=Q.containerElement,g=!0;
O[0]!==document&&/static/.test(O.css("position"))&&(R=M),v.left<(Q._helper?M.left:0)&&(Q.size.width=Q.size.width+(Q._helper?Q.position.left-M.left:Q.position.left-R.left),P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1),Q.position.left=f.helper?M.left:0),v.top<(Q._helper?M.top:0)&&(Q.size.height=Q.size.height+(Q._helper?Q.position.top-M.top:Q.position.top),P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1),Q.position.top=Q._helper?M.top:0),t=Q.containerElement.get(0)===Q.element.parent().get(0),m=/relative|absolute/.test(Q.containerElement.css("position")),t&&m?(Q.offset.left=Q.parentData.left+Q.position.left,Q.offset.top=Q.parentData.top+Q.position.top):(Q.offset.left=Q.element.offset().left,Q.offset.top=Q.element.offset().top),L=Math.abs(Q.sizeDiff.width+(Q._helper?Q.offset.left-R.left:Q.offset.left-M.left)),S=Math.abs(Q.sizeDiff.height+(Q._helper?Q.offset.top-R.top:Q.offset.top-M.top)),L+Q.size.width>=Q.parentData.width&&(Q.size.width=Q.parentData.width-L,P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1)),S+Q.size.height>=Q.parentData.height&&(Q.size.height=Q.parentData.height-S,P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1)),g||(Q.position.left=Q.prevPosition.left,Q.position.top=Q.prevPosition.top,Q.size.width=Q.prevSize.width,Q.size.height=Q.prevSize.height)
},stop:function(){var t=k(this).resizable("instance"),m=t.options,v=t.containerOffset,f=t.containerPosition,d=t.containerElement,u=k(t.helper),c=u.offset(),p=u.outerWidth()-t.sizeDiff.width,g=u.outerHeight()-t.sizeDiff.height;
t._helper&&!m.animate&&/relative/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g}),t._helper&&!m.animate&&/static/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g})
}}),k.ui.plugin.add("resizable","alsoResize",{start:function(){var c=k(this).resizable("instance"),a=c.options;
k(a.alsoResize).each(function(){var d=k(this);
d.data("ui-resizable-alsoresize",{width:parseFloat(d.width()),height:parseFloat(d.height()),left:parseFloat(d.css("left")),top:parseFloat(d.css("top"))})
})
},resize:function(h,d){var f=k(this).resizable("instance"),m=f.options,l=f.originalSize,c=f.originalPosition,g={height:f.size.height-l.height||0,width:f.size.width-l.width||0,top:f.position.top-c.top||0,left:f.position.left-c.left||0};
k(m.alsoResize).each(function(){var i=k(this),a=k(this).data("ui-resizable-alsoresize"),r={},p=i.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
k.each(p,function(o,s){var n=(a[s]||0)+(g[s]||0);
n&&n>=0&&(r[s]=n||null)
}),i.css(r)
})
},stop:function(){k(this).removeData("ui-resizable-alsoresize")
}}),k.ui.plugin.add("resizable","ghost",{start:function(){var c=k(this).resizable("instance"),a=c.size;
c.ghost=c.originalElement.clone(),c.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}),c._addClass(c.ghost,"ui-resizable-ghost"),k.uiBackCompat!==!1&&"string"==typeof c.options.ghost&&c.ghost.addClass(this.options.ghost),c.ghost.appendTo(c.helper)
},resize:function(){var a=k(this).resizable("instance");
a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
},stop:function(){var a=k(this).resizable("instance");
a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))
}}),k.ui.plugin.add("resizable","grid",{resize:function(){var X,T=k(this).resizable("instance"),M=T.options,Q=T.size,P=T.originalSize,aa=T.originalPosition,N=T.axis,U="number"==typeof M.grid?[M.grid,M.grid]:M.grid,S=U[0]||1,Z=U[1]||1,L=Math.round((Q.width-P.width)/S)*S,Y=Math.round((Q.height-P.height)/Z)*Z,O=P.width+L,W=P.height+Y,V=M.maxWidth&&O>M.maxWidth,R=M.maxHeight&&W>M.maxHeight,ab=M.minWidth&&M.minWidth>O,t=M.minHeight&&M.minHeight>W;
M.grid=U,ab&&(O+=S),t&&(W+=Z),V&&(O-=S),R&&(W-=Z),/^(se|s|e)$/.test(N)?(T.size.width=O,T.size.height=W):/^(ne)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.top=aa.top-Y):/^(sw)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.left=aa.left-L):((0>=W-Z||0>=O-S)&&(X=T._getPaddingPlusBorderDimensions(this)),W-Z>0?(T.size.height=W,T.position.top=aa.top-Y):(W=Z-X.height,T.size.height=W,T.position.top=aa.top+P.height-W),O-S>0?(T.size.width=O,T.position.left=aa.left-L):(O=S-X.width,T.size.width=O,T.position.left=aa.left+P.width-O))
}}),k.ui.resizable,k.widget("ui.selectable",k.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a=this;
this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){a.elementPos=k(a.element[0]).offset(),a.selectees=k(a.options.filter,a.element[0]),a._addClass(a.selectees,"ui-selectee"),a.selectees.each(function(){var c=k(this),d=c.offset(),e={left:d.left-a.elementPos.left,top:d.top-a.elementPos.top};
k.data(this,"selectable-item",{element:this,$element:c,left:e.left,top:e.top,right:e.left+c.outerWidth(),bottom:e.top+c.outerHeight(),startselected:!1,selected:c.hasClass("ui-selected"),selecting:c.hasClass("ui-selecting"),unselecting:c.hasClass("ui-unselecting")})
})
},this.refresh(),this._mouseInit(),this.helper=k("<div>"),this._addClass(this.helper,"ui-selectable-helper")
},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()
},_mouseStart:function(d){var a=this,c=this.options;
this.opos=[d.pageX,d.pageY],this.elementPos=k(this.element[0]).offset(),this.options.disabled||(this.selectees=k(c.filter,this.element[0]),this._trigger("start",d),k(c.appendTo).append(this.helper),this.helper.css({left:d.pageX,top:d.pageY,width:0,height:0}),c.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var e=k.data(this,"selectable-item");
e.startselected=!0,d.metaKey||d.ctrlKey||(a._removeClass(e.$element,"ui-selected"),e.selected=!1,a._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,a._trigger("unselecting",d,{unselecting:e.element}))
}),k(d.target).parents().addBack().each(function(){var e,f=k.data(this,"selectable-item");
return f?(e=!d.metaKey&&!d.ctrlKey||!f.$element.hasClass("ui-selected"),a._removeClass(f.$element,e?"ui-unselecting":"ui-selected")._addClass(f.$element,e?"ui-selecting":"ui-unselecting"),f.unselecting=!e,f.selecting=e,f.selected=e,e?a._trigger("selecting",d,{selecting:f.element}):a._trigger("unselecting",d,{unselecting:f.element}),!1):void 0
}))
},_mouseDrag:function(m){if(this.dragged=!0,!this.options.disabled){var d,g=this,t=this.options,p=this.opos[0],c=this.opos[1],l=m.pageX,f=m.pageY;
return p>l&&(d=l,l=p,p=d),c>f&&(d=f,f=c,c=d),this.helper.css({left:p,top:c,width:l-p,height:f-c}),this.selectees.each(function(){var e=k.data(this,"selectable-item"),a=!1,h={};
e&&e.element!==g.element[0]&&(h.left=e.left+g.elementPos.left,h.right=e.right+g.elementPos.left,h.top=e.top+g.elementPos.top,h.bottom=e.bottom+g.elementPos.top,"touch"===t.tolerance?a=!(h.left>l||p>h.right||h.top>f||c>h.bottom):"fit"===t.tolerance&&(a=h.left>p&&l>h.right&&h.top>c&&f>h.bottom),a?(e.selected&&(g._removeClass(e.$element,"ui-selected"),e.selected=!1),e.unselecting&&(g._removeClass(e.$element,"ui-unselecting"),e.unselecting=!1),e.selecting||(g._addClass(e.$element,"ui-selecting"),e.selecting=!0,g._trigger("selecting",m,{selecting:e.element}))):(e.selecting&&((m.metaKey||m.ctrlKey)&&e.startselected?(g._removeClass(e.$element,"ui-selecting"),e.selecting=!1,g._addClass(e.$element,"ui-selected"),e.selected=!0):(g._removeClass(e.$element,"ui-selecting"),e.selecting=!1,e.startselected&&(g._addClass(e.$element,"ui-unselecting"),e.unselecting=!0),g._trigger("unselecting",m,{unselecting:e.element}))),e.selected&&(m.metaKey||m.ctrlKey||e.startselected||(g._removeClass(e.$element,"ui-selected"),e.selected=!1,g._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,g._trigger("unselecting",m,{unselecting:e.element})))))
}),!1
}},_mouseStop:function(c){var a=this;
return this.dragged=!1,k(".ui-unselecting",this.element[0]).each(function(){var d=k.data(this,"selectable-item");
a._removeClass(d.$element,"ui-unselecting"),d.unselecting=!1,d.startselected=!1,a._trigger("unselected",c,{unselected:d.element})
}),k(".ui-selecting",this.element[0]).each(function(){var d=k.data(this,"selectable-item");
a._removeClass(d.$element,"ui-selecting")._addClass(d.$element,"ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,a._trigger("selected",c,{selected:d.element})
}),this._trigger("stop",c),this.helper.remove(),!1
}}),k.widget("ui.sortable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(c,d,a){return c>=d&&d+a>c
},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))
},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0
},_setOption:function(a,c){this._super(a,c),"handle"===a&&this._setHandleClassName()
},_setHandleClassName:function(){var a=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),k.each(this.items,function(){a._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")
})
},_destroy:function(){this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(d,a){var c=null,g=!1,f=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(d),k(d.target).parents().each(function(){return k.data(this,f.widgetName+"-item")===f?(c=k(this),!1):void 0
}),k.data(d.target,f.widgetName+"-item")===f&&(c=k(d.target)),c?!this.options.handle||a||(k(this.options.handle,c).find("*").addBack().each(function(){this===d.target&&(g=!0)
}),g)?(this.currentItem=c,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart:function(g,d,f){var l,h,c=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(g),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},k.extend(this.offset,{click:{left:g.pageX-this.offset.left,top:g.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(g),this.originalPageX=g.pageX,this.originalPageY=g.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),c.containment&&this._setContainment(),c.cursor&&"auto"!==c.cursor&&(h=this.document.find("body"),this.storedCursor=h.css("cursor"),h.css("cursor",c.cursor),this.storedStylesheet=k("<style>*{ cursor: "+c.cursor+" !important; }</style>").appendTo(h)),c.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",c.opacity)),c.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",c.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",g,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!f){for(l=this.containers.length-1;
l>=0;
l--){this.containers[l]._trigger("activate",g,this._uiHash(this))
}}return k.ui.ddmanager&&(k.ui.ddmanager.current=this),k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,g),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(g),!0
},_mouseDrag:function(h){var d,f,m,l,c=this.options,g=!1;
for(this.position=this._generatePosition(h),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-h.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+c.scrollSpeed:h.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-h.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+c.scrollSpeed:h.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(h.pageY-this.document.scrollTop()<c.scrollSensitivity?g=this.document.scrollTop(this.document.scrollTop()-c.scrollSpeed):this.window.height()-(h.pageY-this.document.scrollTop())<c.scrollSensitivity&&(g=this.document.scrollTop(this.document.scrollTop()+c.scrollSpeed)),h.pageX-this.document.scrollLeft()<c.scrollSensitivity?g=this.document.scrollLeft(this.document.scrollLeft()-c.scrollSpeed):this.window.width()-(h.pageX-this.document.scrollLeft())<c.scrollSensitivity&&(g=this.document.scrollLeft(this.document.scrollLeft()+c.scrollSpeed))),g!==!1&&k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,h)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),d=this.items.length-1;
d>=0;
d--){if(f=this.items[d],m=f.item[0],l=this._intersectsWithPointer(f),l&&f.instance===this.currentContainer&&m!==this.currentItem[0]&&this.placeholder[1===l?"next":"prev"]()[0]!==m&&!k.contains(this.placeholder[0],m)&&("semi-dynamic"===this.options.type?!k.contains(this.element[0],m):!0)){if(this.direction=1===l?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(f)){break
}this._rearrange(h,f),this._trigger("change",h,this._uiHash());
break
}}return this._contactContainers(h),k.ui.ddmanager&&k.ui.ddmanager.drag(this,h),this._trigger("sort",h,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(g,d){if(g){if(k.ui.ddmanager&&!this.options.dropBehaviour&&k.ui.ddmanager.drop(this,g),this.options.revert){var f=this,l=this.placeholder.offset(),h=this.options.axis,c={};
h&&"x"!==h||(c.left=l.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),h&&"y"!==h||(c.top=l.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,k(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){f._clear(g)
})
}else{this._clear(g,d)
}return !1
}},cancel:function(){if(this.dragging){this._mouseUp(new k.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();
for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),k.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?k(this.domPosition.prev).after(this.currentItem):k(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(d){var a=this._getItemsAsjQuery(d&&d.connected),c=[];
return d=d||{},k(a).each(function(){var e=(k(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[\-=_](.+)/);
e&&c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))
}),!c.length&&d.key&&c.push(d.key+"="),c.join("&")
},toArray:function(d){var a=this._getItemsAsjQuery(d&&d.connected),c=[];
return d=d||{},a.each(function(){c.push(k(d.item||this).attr(d.attribute||"id")||"")
}),c
},_intersectsWith:function(T){var O=this.positionAbs.left,M=O+this.helperProportions.width,U=this.positionAbs.top,v=U+this.helperProportions.height,m=T.left,R=m+T.width,f=T.top,N=f+T.height,L=this.offset.click.top,Q=this.offset.click.left,S="x"===this.options.axis||U+L>f&&N>U+L,P="y"===this.options.axis||O+Q>m&&R>O+Q,g=S&&P;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>T[this.floating?"width":"height"]?g:O+this.helperProportions.width/2>m&&R>M-this.helperProportions.width/2&&U+this.helperProportions.height/2>f&&N>v-this.helperProportions.height/2
},_intersectsWithPointer:function(c){var f,a,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,c.top,c.height),h="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,c.left,c.width),g=d&&h;
return g?(f=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection(),this.floating?"right"===a||"down"===f?2:1:f&&("down"===f?2:1)):!1
},_intersectsWithSides:function(c){var f=this._isOverAxis(this.positionAbs.top+this.offset.click.top,c.top+c.height/2,c.height),a=this._isOverAxis(this.positionAbs.left+this.offset.click.left,c.left+c.width/2,c.width),d=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
return this.floating&&g?"right"===g&&a||"left"===g&&!a:d&&("down"===d&&f||"up"===d&&!f)
},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==a&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==a&&(a>0?"right":"left")
},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(t){function m(){c.push(this)
}var v,f,d,u,c=[],p=[],g=this._connectWith();
if(g&&t){for(v=g.length-1;
v>=0;
v--){for(d=k(g[v],this.document[0]),f=d.length-1;
f>=0;
f--){u=k.data(d[f],this.widgetFullName),u&&u!==this&&!u.options.disabled&&p.push([k.isFunction(u.options.items)?u.options.items.call(u.element):k(u.options.items,u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),u])
}}}for(p.push([k.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):k(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),v=p.length-1;
v>=0;
v--){p[v][0].each(m)
}return k(c)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=k.grep(this.items,function(d){for(var c=0;
a.length>c;
c++){if(a[c]===d.item[0]){return !1
}}return !0
})
},_refreshItems:function(L){this.items=[],this.containers=[this];
var t,Q,m,g,O,f,v,p,N=this.items,P=[[k.isFunction(this.options.items)?this.options.items.call(this.element[0],L,{item:this.currentItem}):k(this.options.items,this.element),this]],M=this._connectWith();
if(M&&this.ready){for(t=M.length-1;
t>=0;
t--){for(m=k(M[t],this.document[0]),Q=m.length-1;
Q>=0;
Q--){g=k.data(m[Q],this.widgetFullName),g&&g!==this&&!g.options.disabled&&(P.push([k.isFunction(g.options.items)?g.options.items.call(g.element[0],L,{item:this.currentItem}):k(g.options.items,g.element),g]),this.containers.push(g))
}}}for(t=P.length-1;
t>=0;
t--){for(O=P[t][1],f=P[t][0],Q=0,p=f.length;
p>Q;
Q++){v=k(f[Q]),v.data(this.widgetName+"-item",O),N.push({item:v,instance:O,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(d){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var a,c,g,f;
for(a=this.items.length-1;
a>=0;
a--){c=this.items[a],c.instance!==this.currentContainer&&this.currentContainer&&c.item[0]!==this.currentItem[0]||(g=this.options.toleranceElement?k(this.options.toleranceElement,c.item):c.item,d||(c.width=g.outerWidth(),c.height=g.outerHeight()),f=g.offset(),c.left=f.left,c.top=f.top)
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(a=this.containers.length-1;
a>=0;
a--){f=this.containers[a].element.offset(),this.containers[a].containerCache.left=f.left,this.containers[a].containerCache.top=f.top,this.containers[a].containerCache.width=this.containers[a].element.outerWidth(),this.containers[a].containerCache.height=this.containers[a].element.outerHeight()
}}return this
},_createPlaceholder:function(d){d=d||this;
var a,c=d.options;
c.placeholder&&c.placeholder.constructor!==String||(a=c.placeholder,c.placeholder={element:function(){var e=d.currentItem[0].nodeName.toLowerCase(),f=k("<"+e+">",d.document[0]);
return d._addClass(f,"ui-sortable-placeholder",a||d.currentItem[0].className)._removeClass(f,"ui-sortable-helper"),"tbody"===e?d._createTrPlaceholder(d.currentItem.find("tr").eq(0),k("<tr>",d.document[0]).appendTo(f)):"tr"===e?d._createTrPlaceholder(d.currentItem,f):"img"===e&&f.attr("src",d.currentItem.attr("src")),a||f.css("visibility","hidden"),f
},update:function(e,f){(!a||c.forcePlaceholderSize)&&(f.height()||f.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10)),f.width()||f.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10)))
}}),d.placeholder=k(c.placeholder.element.call(d.element,d.currentItem)),d.currentItem.after(d.placeholder),c.placeholder.update(d,d.placeholder)
},_createTrPlaceholder:function(d,a){var c=this;
d.children().each(function(){k("<td>&#160;</td>",c.document[0]).attr("colspan",k(this).attr("colspan")||1).appendTo(a)
})
},_contactContainers:function(N){var L,S,t,m,Q,f,M,v,P,R,O=null,g=null;
for(L=this.containers.length-1;
L>=0;
L--){if(!k.contains(this.currentItem[0],this.containers[L].element[0])){if(this._intersectsWith(this.containers[L].containerCache)){if(O&&k.contains(this.containers[L].element[0],O.element[0])){continue
}O=this.containers[L],g=L
}else{this.containers[L].containerCache.over&&(this.containers[L]._trigger("out",N,this._uiHash(this)),this.containers[L].containerCache.over=0)
}}}if(O){if(1===this.containers.length){this.containers[g].containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1)
}else{for(t=10000,m=null,P=O.floating||this._isFloating(this.currentItem),Q=P?"left":"top",f=P?"width":"height",R=P?"pageX":"pageY",S=this.items.length-1;
S>=0;
S--){k.contains(this.containers[g].element[0],this.items[S].item[0])&&this.items[S].item[0]!==this.currentItem[0]&&(M=this.items[S].item.offset()[Q],v=!1,N[R]-M>this.items[S][f]/2&&(v=!0),t>Math.abs(N[R]-M)&&(t=Math.abs(N[R]-M),m=this.items[S],this.direction=v?"up":"down"))
}if(!m&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[g]){return this.currentContainer.containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash()),this.currentContainer.containerCache.over=1),void 0
}m?this._rearrange(N,m,null,!0):this._rearrange(N,null,this.containers[g].element,!0),this._trigger("change",N,this._uiHash()),this.containers[g]._trigger("change",N,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1
}}},_createHelper:function(d){var a=this.options,c=k.isFunction(a.helper)?k(a.helper.apply(this.element[0],[d,this.currentItem])):"clone"===a.helper?this.currentItem.clone():this.currentItem;
return c.parents("body").length||k("parent"!==a.appendTo?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0]),c[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!c[0].style.width||a.forceHelperSize)&&c.width(this.currentItem.width()),(!c[0].style.height||a.forceHelperSize)&&c.height(this.currentItem.height()),c
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),k.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&k.ui.ie)&&(a={top:0,left:0}),{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,a,c,f=this.options;
"parent"===f.containment&&(f.containment=this.helper[0].parentNode),("document"===f.containment||"window"===f.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===f.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===f.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(f.containment)||(d=k(f.containment)[0],a=k(f.containment).offset(),c="hidden"!==k(d).css("overflow"),this.containment=[a.left+(parseInt(k(d).css("borderLeftWidth"),10)||0)+(parseInt(k(d).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(k(d).css("borderTopWidth"),10)||0)+(parseInt(k(d).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(k(d).css("borderLeftWidth"),10)||0)-(parseInt(k(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(k(d).css("borderTopWidth"),10)||0)-(parseInt(k(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(d,a){a||(a=this.position);
var c="absolute"===d?1:-1,g="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(g[0].tagName);
return{top:a.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:g.scrollTop())*c,left:a.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())*c}
},_generatePosition:function(m){var d,g,t=this.options,p=m.pageX,c=m.pageY,l="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(l[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(m.pageX-this.offset.click.left<this.containment[0]&&(p=this.containment[0]+this.offset.click.left),m.pageY-this.offset.click.top<this.containment[1]&&(c=this.containment[1]+this.offset.click.top),m.pageX-this.offset.click.left>this.containment[2]&&(p=this.containment[2]+this.offset.click.left),m.pageY-this.offset.click.top>this.containment[3]&&(c=this.containment[3]+this.offset.click.top)),t.grid&&(d=this.originalPageY+Math.round((c-this.originalPageY)/t.grid[1])*t.grid[1],c=this.containment?d-this.offset.click.top>=this.containment[1]&&d-this.offset.click.top<=this.containment[3]?d:d-this.offset.click.top>=this.containment[1]?d-t.grid[1]:d+t.grid[1]:d,g=this.originalPageX+Math.round((p-this.originalPageX)/t.grid[0])*t.grid[0],p=this.containment?g-this.offset.click.left>=this.containment[0]&&g-this.offset.click.left<=this.containment[2]?g:g-this.offset.click.left>=this.containment[0]?g-t.grid[0]:g+t.grid[0]:g)),{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:l.scrollTop()),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:l.scrollLeft())}
},_rearrange:function(c,f,a,d){a?a[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?f.item[0]:f.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var g=this.counter;
this._delay(function(){g===this.counter&&this.refreshPositions(!d)
})
},_clear:function(c,f){function a(l,m,h){return function(e){h._trigger(l,e,m._uiHash(m))
}
}this.reverting=!1;
var d,g=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){("auto"===this._storedCSS[d]||"static"===this._storedCSS[d])&&(this._storedCSS[d]="")
}this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}for(this.fromOutside&&!f&&g.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||f||g.push(function(e){this._trigger("update",e,this._uiHash())
}),this!==this.currentContainer&&(f||(g.push(function(e){this._trigger("remove",e,this._uiHash())
}),g.push(function(e){return function(h){e._trigger("receive",h,this._uiHash(this))
}
}.call(this,this.currentContainer)),g.push(function(e){return function(h){e._trigger("update",h,this._uiHash(this))
}
}.call(this,this.currentContainer)))),d=this.containers.length-1;
d>=0;
d--){f||g.push(a("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(g.push(a("out",this,this.containers[d])),this.containers[d].containerCache.over=0)
}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,f||this._trigger("beforeStop",c,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!f){for(d=0;
g.length>d;
d++){g[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}return this.fromOutside=!1,!this.cancelHelperRemoval
},_trigger:function(){k.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(c){var a=c||this;
return{helper:a.helper,placeholder:a.placeholder||k([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:c?c.element:null}
}}),k.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var a=this.options;
this.prevShow=this.prevHide=k(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),a.collapsible||a.active!==!1&&null!=a.active||(a.active=0),this._processPanels(),0>a.active&&(a.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():k()}
},_createIcons:function(){var d,a,c=this.options.icons;
c&&(d=k("<span>"),this._addClass(d,"ui-accordion-header-icon","ui-icon "+c.header),d.prependTo(this.headers),a=this.active.children(".ui-accordion-header-icon"),this._removeClass(a,c.header)._addClass(a,null,c.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")
},_setOption:function(a,c){return"active"===a?(this._activate(c),void 0):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(c)),this._super(a,c),"collapsible"!==a||c||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),c&&this._createIcons()),void 0)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!a)
},_keydown:function(d){if(!d.altKey&&!d.ctrlKey){var a=k.ui.keyCode,c=this.headers.length,g=this.headers.index(d.target),f=!1;
switch(d.keyCode){case a.RIGHT:case a.DOWN:f=this.headers[(g+1)%c];
break;
case a.LEFT:case a.UP:f=this.headers[(g-1+c)%c];
break;
case a.SPACE:case a.ENTER:this._eventHandler(d);
break;
case a.HOME:f=this.headers[0];
break;
case a.END:f=this.headers[c-1]
}f&&(k(d.target).attr("tabIndex",-1),k(f).attr("tabIndex",0),k(f).trigger("focus"),d.preventDefault())
}},_panelKeyDown:function(a){a.keyCode===k.ui.keyCode.UP&&a.ctrlKey&&k(a.currentTarget).prev().trigger("focus")
},refresh:function(){var a=this.options;
this._processPanels(),a.active===!1&&a.collapsible===!0||!this.headers.length?(a.active=!1,this.active=k()):a.active===!1?this._activate(0):this.active.length&&!k.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=k()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){var a=this.headers,c=this.panels;
this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),c&&(this._off(a.not(this.headers)),this._off(c.not(this.panels)))
},_refresh:function(){var d,a=this.options,c=a.heightStyle,f=this.element.parent();
this.active=this._findActive(a.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var l=k(this),g=l.uniqueId().attr("id"),h=l.next(),m=h.uniqueId().attr("id");
l.attr("aria-controls",m),h.attr("aria-labelledby",g)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===c?(d=f.height(),this.element.siblings(":visible").each(function(){var e=k(this),g=e.css("position");
"absolute"!==g&&"fixed"!==g&&(d-=e.outerHeight(!0))
}),this.headers.each(function(){d-=k(this).outerHeight(!0)
}),this.headers.next().each(function(){k(this).height(Math.max(0,d-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===c&&(d=0,this.headers.next().each(function(){var e=k(this).is(":visible");
e||k(this).show(),d=Math.max(d,k(this).css("height","").height()),e||k(this).hide()
}).height(d))
},_activate:function(c){var a=this._findActive(c)[0];
a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:k.noop}))
},_findActive:function(a){return"number"==typeof a?this.headers.eq(a):k()
},_setupEvents:function(c){var a={keydown:"_keydown"};
c&&k.each(c.split(" "),function(d,f){a[f]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,a),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(v){var p,O,g=this.options,f=this.active,M=k(v.currentTarget),d=M[0]===f[0],t=d&&g.collapsible,m=t?k():M.next(),L=f.next(),N={oldHeader:f,oldPanel:L,newHeader:t?k():M,newPanel:m};
v.preventDefault(),d&&!g.collapsible||this._trigger("beforeActivate",v,N)===!1||(g.active=t?!1:this.headers.index(M),this.active=d?k():M,this._toggle(N),this._removeClass(f,"ui-accordion-header-active","ui-state-active"),g.icons&&(p=f.children(".ui-accordion-header-icon"),this._removeClass(p,null,g.icons.activeHeader)._addClass(p,null,g.icons.header)),d||(this._removeClass(M,"ui-accordion-header-collapsed")._addClass(M,"ui-accordion-header-active","ui-state-active"),g.icons&&(O=M.children(".ui-accordion-header-icon"),this._removeClass(O,null,g.icons.header)._addClass(O,null,g.icons.activeHeader)),this._addClass(M.next(),"ui-accordion-content-active")))
},_toggle:function(d){var a=d.newPanel,c=this.prevShow.length?this.prevShow:d.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=a,this.prevHide=c,this.options.animate?this._animate(a,c,d):(c.hide(),a.show(),this._toggleComplete(d)),c.attr({"aria-hidden":"true"}),c.prev().attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&c.length?c.prev().attr({tabIndex:-1,"aria-expanded":"false"}):a.length&&this.headers.filter(function(){return 0===parseInt(k(this).attr("tabIndex"),10)
}).attr("tabIndex",-1),a.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(R,M,v){var S,m,g,P=this,f=0,L=R.css("box-sizing"),p=R.length&&(!M.length||R.index()<M.index()),O=this.options.animate||{},Q=p&&O.down||O,N=function(){P._toggleComplete(v)
};
return"number"==typeof Q&&(g=Q),"string"==typeof Q&&(m=Q),m=m||Q.easing||O.easing,g=g||Q.duration||O.duration,M.length?R.length?(S=R.show().outerHeight(),M.animate(this.hideProps,{duration:g,easing:m,step:function(a,c){c.now=Math.round(a)
}}),R.hide().animate(this.showProps,{duration:g,easing:m,complete:N,step:function(c,a){a.now=Math.round(c),"height"!==a.prop?"content-box"===L&&(f+=a.now):"content"!==P.options.heightStyle&&(a.now=Math.round(S-M.outerHeight()-f),f=0)
}}),void 0):M.animate(this.hideProps,g,m,N):R.animate(this.showProps,g,m,N)
},_toggleComplete:function(c){var d=c.oldPanel,a=d.prev();
this._removeClass(d,"ui-accordion-content-active"),this._removeClass(a,"ui-accordion-header-active")._addClass(a,"ui-accordion-header-collapsed"),d.length&&(d.parent()[0].className=d.parent()[0].className),this._trigger("activate",null,c)
}}),k.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()
},"click .ui-menu-item":function(d){var a=k(d.target),c=k(k.ui.safeActiveElement(this.document[0]));
!this.mouseHandled&&a.not(".ui-state-disabled").length&&(this.select(d),d.isPropagationStopped()||(this.mouseHandled=!0),a.has(".ui-menu").length?this.expand(d):!this.element.is(":focus")&&c.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(d){if(!this.previousFilter){var a=k(d.target).closest(".ui-menu-item"),c=k(d.currentTarget);
a[0]===c[0]&&(this._removeClass(c.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(d,c))
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(c,d){var a=this.active||this.element.find(this.options.items).eq(0);
d||this.focus(c,a)
},blur:function(a){this._delay(function(){var c=!k.contains(this.element[0],k.ui.safeActiveElement(this.document[0]));
c&&this.collapseAll(a)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1
}})
},_destroy:function(){var c=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),a=c.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),a.children().each(function(){var d=k(this);
d.data("ui-menu-submenu-caret")&&d.remove()
})
},_keydown:function(g){var d,f,l,h,c=!0;
switch(g.keyCode){case k.ui.keyCode.PAGE_UP:this.previousPage(g);
break;
case k.ui.keyCode.PAGE_DOWN:this.nextPage(g);
break;
case k.ui.keyCode.HOME:this._move("first","first",g);
break;
case k.ui.keyCode.END:this._move("last","last",g);
break;
case k.ui.keyCode.UP:this.previous(g);
break;
case k.ui.keyCode.DOWN:this.next(g);
break;
case k.ui.keyCode.LEFT:this.collapse(g);
break;
case k.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(g);
break;
case k.ui.keyCode.ENTER:case k.ui.keyCode.SPACE:this._activate(g);
break;
case k.ui.keyCode.ESCAPE:this.collapse(g);
break;
default:c=!1,f=this.previousFilter||"",h=!1,l=g.keyCode>=96&&105>=g.keyCode?""+(g.keyCode-96):String.fromCharCode(g.keyCode),clearTimeout(this.filterTimer),l===f?h=!0:l=f+l,d=this._filterMenuItems(l),d=h&&-1!==d.index(this.active.next())?this.active.nextAll(".ui-menu-item"):d,d.length||(l=String.fromCharCode(g.keyCode),d=this._filterMenuItems(l)),d.length?(this.focus(g,d),this.previousFilter=l,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter
}c&&g.preventDefault()
},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))
},refresh:function(){var m,d,g,t,p,c=this,l=this.options.icons.submenu,f=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),g=f.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var n=k(this),a=n.prev(),h=k("<span>").data("ui-menu-submenu-caret",!0);
c._addClass(h,"ui-menu-icon","ui-icon "+l),a.attr("aria-haspopup","true").prepend(h),n.attr("aria-labelledby",a.attr("id"))
}),this._addClass(g,"ui-menu","ui-widget ui-widget-content ui-front"),m=f.add(this.element),d=m.find(this.options.items),d.not(".ui-menu-item").each(function(){var a=k(this);
c._isDivider(a)&&c._addClass(a,"ui-menu-divider","ui-widget-content")
}),t=d.not(".ui-menu-item, .ui-menu-divider"),p=t.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(t,"ui-menu-item")._addClass(p,"ui-menu-item-wrapper"),d.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!k.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(c,d){if("icons"===c){var a=this.element.find(".ui-menu-icon");
this._removeClass(a,null,this.options.icons.submenu)._addClass(a,null,d.submenu)
}this._super(c,d)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a+""),this._toggleClass(null,"ui-state-disabled",!!a)
},focus:function(c,f){var a,d,g;
this.blur(c,c&&"focus"===c.type),this._scrollIntoView(f),this.active=f.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),g=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(g,null,"ui-state-active"),c&&"keydown"===c.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),a=f.children(".ui-menu"),a.length&&c&&/^mouse/.test(c.type)&&this._startOpening(a),this.activeMenu=f.parent(),this._trigger("focus",c,{item:f})
},_scrollIntoView:function(h){var d,f,m,l,c,g;
this._hasScroll()&&(d=parseFloat(k.css(this.activeMenu[0],"borderTopWidth"))||0,f=parseFloat(k.css(this.activeMenu[0],"paddingTop"))||0,m=h.offset().top-this.activeMenu.offset().top-d-f,l=this.activeMenu.scrollTop(),c=this.activeMenu.height(),g=h.outerHeight(),0>m?this.activeMenu.scrollTop(l+m):m+g>c&&this.activeMenu.scrollTop(l+m-c+g))
},blur:function(a,c){c||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)
},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)
},this.delay))
},_open:function(c){var a=k.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden","true"),c.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(a)
},collapseAll:function(c,a){clearTimeout(this.timer),this.timer=this._delay(function(){var d=a?this.element:k(c&&c.target).closest(this.element.find(".ui-menu"));
d.length||(d=this.element),this._close(d),this.blur(c),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d
},this.delay)
},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")
},_closeOnDocumentClick:function(a){return !k(a.target).closest(".ui-menu").length
},_isDivider:function(a){return !/[^\-\u2014\u2013\s]/.test(a.text())
},collapse:function(a){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
c&&c.length&&(this._close(),this.focus(a,c))
},expand:function(a){var c=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
c&&c.length&&(this._open(c.parent()),this._delay(function(){this.focus(a,c)
}))
},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(c,f,a){var d;
this.active&&(d="first"===c||"last"===c?this.active["first"===c?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[c+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[f]()),this.focus(a,d)
},nextPage:function(d){var a,c,f;
return this.active?(this.isLastItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return a=k(this),0>a.offset().top-c-f
}),this.focus(d,a)):this.focus(d,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(d),void 0)
},previousPage:function(d){var a,c,f;
return this.active?(this.isFirstItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return a=k(this),a.offset().top-c+f>0
}),this.focus(d,a)):this.focus(d,this.activeMenu.find(this.options.items).first())),void 0):(this.next(d),void 0)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||k(c.target).closest(".ui-menu-item");
var a={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(c,!0),this._trigger("select",c,a)
},_filterMenuItems:function(d){var a=d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),c=RegExp("^"+a,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return c.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
})
}}),k.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var g,d,f,l=this.element[0].nodeName.toLowerCase(),h="textarea"===l,c="input"===l;
this.isMultiLine=h||!c&&this._isContentEditable(this.element),this.valueMethod=this.element[h||c?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly")){return g=!0,f=!0,d=!0,void 0
}g=!1,f=!1,d=!1;
var a=k.ui.keyCode;
switch(e.keyCode){case a.PAGE_UP:g=!0,this._move("previousPage",e);
break;
case a.PAGE_DOWN:g=!0,this._move("nextPage",e);
break;
case a.UP:g=!0,this._keyEvent("previous",e);
break;
case a.DOWN:g=!0,this._keyEvent("next",e);
break;
case a.ENTER:this.menu.active&&(g=!0,e.preventDefault(),this.menu.select(e));
break;
case a.TAB:this.menu.active&&this.menu.select(e);
break;
case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());
break;
default:d=!0,this._searchTimeout(e)
}},keypress:function(a){if(g){return g=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&a.preventDefault(),void 0
}if(!d){var e=k.ui.keyCode;
switch(a.keyCode){case e.PAGE_UP:this._move("previousPage",a);
break;
case e.PAGE_DOWN:this._move("nextPage",a);
break;
case e.UP:this._keyEvent("previous",a);
break;
case e.DOWN:this._keyEvent("next",a)
}}},input:function(a){return f?(f=!1,a.preventDefault(),void 0):(this._searchTimeout(a),void 0)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(a),this._change(a),void 0)
}}),this._initSource(),this.menu=k("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(a){a.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==k.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")
})
},menufocus:function(o,a){var m,p;
return this.isNewMenu&&(this.isNewMenu=!1,o.originalEvent&&/^mouse/.test(o.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){k(o.target).trigger(o.originalEvent)
}),void 0):(p=a.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",o,{item:p})&&o.originalEvent&&/^key/.test(o.originalEvent.type)&&this._value(p.value),m=a.item.attr("aria-label")||p.value,m&&k.trim(m).length&&(this.liveRegion.children().hide(),k("<div>").text(m).appendTo(this.liveRegion)),void 0)
},menuselect:function(o,a){var m=a.item.data("ui-autocomplete-item"),p=this.previous;
this.element[0]!==k.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=p,this._delay(function(){this.previous=p,this.selectedItem=m
})),!1!==this._trigger("select",o,{item:m})&&this._value(m.value),this.term=this._value(),this.close(o),this.selectedItem=m
}}),this.liveRegion=k("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(a,c){this._super(a,c),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&c&&this.xhr&&this.xhr.abort()
},_isEventTargetInWidget:function(c){var a=this.menu.element[0];
return c.target===this.element[0]||c.target===a||k.contains(a,c.target)
},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?k(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a
},_initSource:function(){var d,a,c=this;
k.isArray(this.options.source)?(d=this.options.source,this.source=function(e,f){f(k.ui.autocomplete.filter(d,e.term))
}):"string"==typeof this.options.source?(a=this.options.source,this.source=function(f,g){c.xhr&&c.xhr.abort(),c.xhr=k.ajax({url:a,data:f,dataType:"json",success:function(e){g(e)
},error:function(){g([])
}})
}):this.source=this.options.source
},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var f=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;
(!f||f&&!c&&!d)&&(this.selectedItem=null,this.search(null,a))
},this.options.delay)
},search:function(a,c){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(c):this._trigger("search",c)!==!1?this._search(a):void 0
},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return k.proxy(function(c){a===this.requestIndex&&this.__response(c),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")
},this)
},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()
},close:function(a){this.cancelSearch=!0,this._close(a)
},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))
},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})
},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:k.map(a,function(c){return"string"==typeof c?{label:c,value:c}:k.extend({},c,{label:c.label||c.value,value:c.value||c.label})
})
},_suggest:function(c){var a=this.menu.element.empty();
this._renderMenu(a,c),this.isNewMenu=!0,this.menu.refresh(),a.show(),this._resizeMenu(),a.position(k.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})
},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(d,a){var c=this;
k.each(a,function(f,e){c._renderItemData(d,e)
})
},_renderItemData:function(a,c){return this._renderItem(a,c).data("ui-autocomplete-item",c)
},_renderItem:function(c,a){return k("<li>").append(k("<div>").text(a.label)).appendTo(c)
},_move:function(a,c){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[a](c),void 0):(this.search(null,c),void 0)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(a,c){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(a,c),c.preventDefault())
},_isContentEditable:function(a){if(!a.length){return !1
}var c=a.prop("contentEditable");
return"inherit"===c?this._isContentEditable(a.parent()):"true"===c
}}),k.extend(k.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(d,a){var c=RegExp(k.ui.autocomplete.escapeRegex(a),"i");
return k.grep(d,function(e){return c.test(e.label||e.value||e)
})
}}),k.widget("ui.autocomplete",k.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(c){var a;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(a=c&&c.length?this.options.messages.results(c.length):this.options.messages.noResults,this.liveRegion.children().hide(),k("<div>").text(a).appendTo(this.liveRegion))
}}),k.ui.autocomplete;
var H=/ui-corner-([a-z]){2,6}/g;
k.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()
},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
},_initWidgets:function(){var c=this,a=[];
k.each(this.options.items,function(e,g){var f,d={};
return g?"controlgroupLabel"===e?(f=c.element.find(g),f.each(function(){var h=k(this);
h.children(".ui-controlgroup-label-contents").length||h.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
}),c._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),a=a.concat(f.get()),void 0):(k.fn[e]&&(d=c["_"+e+"Options"]?c["_"+e+"Options"]("middle"):{classes:{}},c.element.find(g).each(function(){var p=k(this),m=p[e]("instance"),l=k.widget.extend({},d);
if("button"!==e||!p.parent(".ui-spinner").length){m||(m=p[e]()[e]("instance")),m&&(l.classes=c._resolveClassesValues(l.classes,m)),p[e](l);
var i=p[e]("widget");
k.data(i[0],"ui-controlgroup-data",m?m:p[e]("instance")),a.push(i[0])
}})),void 0):void 0
}),this.childWidgets=k(k.unique(a)),this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(a){this.childWidgets.each(function(){var c=k(this),d=c.data("ui-controlgroup-data");
d&&d[a]&&d[a]()
})
},_updateCornerClass:function(c,f){var a="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(f,"label").classes.label;
this._removeClass(c,null,a),this._addClass(c,null,d)
},_buildSimpleOptions:function(c,f){var a="vertical"===this.options.direction,d={classes:{}};
return d.classes[f]={middle:"",first:"ui-corner-"+(a?"top":"left"),last:"ui-corner-"+(a?"bottom":"right"),only:"ui-corner-all"}[c],d
},_spinnerOptions:function(a){var c=this._buildSimpleOptions(a,"ui-spinner");
return c.classes["ui-spinner-up"]="",c.classes["ui-spinner-down"]="",c
},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")
},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")
},_selectmenuOptions:function(a){var c="vertical"===this.options.direction;
return{width:c?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(c?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(c?"top":"left")},last:{"ui-selectmenu-button-open":c?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(c?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}
},_resolveClassesValues:function(d,a){var c={};
return k.each(d,function(f){var e=a.options.classes[f]||"";
e=k.trim(e.replace(H,"")),c[f]=(e+" "+d[f]).replace(/\s+/g," ")
}),c
},_setOption:function(a,c){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,c),"disabled"===a?(this._callChildMethod(c?"disable":"enable"),void 0):(this.refresh(),void 0)
},refresh:function(){var c,a=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),c=this.childWidgets,this.options.onlyVisible&&(c=c.filter(":visible")),c.length&&(k.each(["first","last"],function(d,e){var g=c[e]().data("ui-controlgroup-data");
if(g&&a["_"+g.widgetName+"Options"]){var f=a["_"+g.widgetName+"Options"](1===c.length?"only":e);
f.classes=a._resolveClassesValues(f.classes,g),g.element[g.widgetName](f)
}else{a._updateCornerClass(c[e](),e)
}}),this._callChildMethod("refresh"))
}}),k.widget("ui.checkboxradio",[k.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var d,a,c=this,f=this._super()||{};
return this._readType(),a=this.element.labels(),this.label=k(a[a.length-1]),this.label.length||k.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){c.originalLabel+=3===this.nodeType?k(this).text():this.outerHTML
}),this.originalLabel&&(f.label=this.originalLabel),d=this.element[0].disabled,null!=d&&(f.disabled=d),f
},_create:function(){var a=this.element[0].checked;
this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var a=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type,"input"===a&&/radio|checkbox/.test(this.type)||k.error("Can't create checkboxradio on element.nodeName="+a+" and element.type="+this.type)
},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var d,a=this.element[0].name,c="input[name='"+k.ui.escapeSelector(a)+"']";
return a?(d=this.form.length?k(this.form[0].elements).filter(c):k(c).filter(function(){return 0===k(this).form().length
}),d.not(this.element)):k([])
},_toggleClasses:function(){var a=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",a)._toggleClass(this.icon,null,"ui-icon-blank",!a),"radio"===this.type&&this._getRadioGroup().each(function(){var c=k(this).checkboxradio("instance");
c&&c._removeClass(c.label,"ui-checkboxradio-checked","ui-state-active")
})
},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())
},_setOption:function(a,c){return"label"!==a||c?(this._super(a,c),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",c),this.element[0].disabled=c,void 0):(this.refresh(),void 0)):void 0
},_updateIcon:function(c){var a="ui-icon ui-icon-background ";
this.options.icon?(this.icon||(this.icon=k("<span>"),this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(a+=c?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,c?"ui-icon-blank":"ui-icon-check")):a+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",a),c||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);
this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)
},refresh:function(){var a=this.element[0].checked,c=this.element[0].disabled;
this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),c!==this.options.disabled&&this._setOptions({disabled:c})
}}]),k.ui.checkboxradio,k.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,c=this._super()||{};
return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(c.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(c.label=this.originalLabel),c
},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(a){a.keyCode===k.ui.keyCode.SPACE&&(a.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))
}})
},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())
},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)
},_updateIcon:function(d,a){var c="iconPosition"!==d,g=c?this.options.iconPosition:a,f="top"===g||"bottom"===g;
this.icon?c&&this._removeClass(this.icon,null,this.options.icon):(this.icon=k("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),c&&this._addClass(this.icon,null,a),this._attachIcon(g),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(g))
},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")
},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)
},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)
},_setOptions:function(c){var d=void 0===c.showLabel?this.options.showLabel:c.showLabel,a=void 0===c.icon?this.options.icon:c.icon;
d||a||(c.showLabel=!0),this._super(c)
},_setOption:function(a,c){"icon"===a&&(c?this._updateIcon(a,c):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,c),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!c),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(c):(this.element.html(c),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,c),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",c),this.element[0].disabled=c,c&&this.element.blur())
},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()
}}),k.uiBackCompat!==!1&&(k.widget("ui.button",k.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()
},_setOption:function(a,c){return"text"===a?(this._super("showLabel",c),void 0):("showLabel"===a&&(this.options.text=c),"icon"===a&&(this.options.icons.primary=c),"icons"===a&&(c.primary?(this._super("icon",c.primary),this._super("iconPosition","beginning")):c.secondary&&(this._super("icon",c.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)
}}),k.fn.button=function(a){return function(){return !this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?a.apply(this,arguments):(k.ui.checkboxradio||k.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))
}
}(k.fn.button),k.fn.buttonset=function(){return k.ui.controlgroup||k.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))
}),k.ui.button,k.extend(k.ui,{datepicker:{version:"1.12.1"}});
var x;
k.extend(q.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return J(this._defaults,a||{}),this
},_attachDatepicker:function(d,a){var c,g,f;
c=d.nodeName.toLowerCase(),g="div"===c||"span"===c,d.id||(this.uuid+=1,d.id="dp"+this.uuid),f=this._newInst(k(d),g),f.settings=k.extend({},a||{}),"input"===c?this._connectDatepicker(d,f):g&&this._inlineDatepicker(d,f)
},_newInst:function(d,a){var c=d[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:c,input:d,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?z(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(d,a){var c=k(d);
a.append=k([]),a.trigger=k([]),c.hasClass(this.markerClassName)||(this._attachments(c,a),c.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(a),k.data(d,"datepicker",a),a.settings.disabled&&this._disableDatepicker(d))
},_attachments:function(h,d){var f,m,l,c=this._get(d,"appendText"),g=this._get(d,"isRTL");
d.append&&d.append.remove(),c&&(d.append=k("<span class='"+this._appendClass+"'>"+c+"</span>"),h[g?"before":"after"](d.append)),h.off("focus",this._showDatepicker),d.trigger&&d.trigger.remove(),f=this._get(d,"showOn"),("focus"===f||"both"===f)&&h.on("focus",this._showDatepicker),("button"===f||"both"===f)&&(m=this._get(d,"buttonText"),l=this._get(d,"buttonImage"),d.trigger=k(this._get(d,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:l,alt:m,title:m}):k("<button type='button'></button>").addClass(this._triggerClass).html(l?k("<img/>").attr({src:l,alt:m,title:m}):m)),h[g?"before":"after"](d.trigger),d.trigger.on("click",function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===h[0]?k.datepicker._hideDatepicker():k.datepicker._datepickerShowing&&k.datepicker._lastInput!==h[0]?(k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(h[0])):k.datepicker._showDatepicker(h[0]),!1
}))
},_autoSize:function(f){if(this._get(f,"autoSize")&&!f.inline){var h,d,g,m,l=new Date(2009,11,20),c=this._get(f,"dateFormat");
c.match(/[DM]/)&&(h=function(a){for(d=0,g=0,m=0;
a.length>m;
m++){a[m].length>d&&(d=a[m].length,g=m)
}return g
},l.setMonth(h(this._get(f,c.match(/MM/)?"monthNames":"monthNamesShort"))),l.setDate(h(this._get(f,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-l.getDay())),f.input.attr("size",this._formatDate(f,l).length)
}},_inlineDatepicker:function(d,a){var c=k(d);
c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(a.dpDiv),k.data(d,"datepicker",a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(d),a.dpDiv.css("display","block"))
},_dialogDatepicker:function(v,p,O,g,f){var a,t,m,M,N,L=this._dialogInst;
return L||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),k("body").append(this._dialogInput),L=this._dialogInst=this._newInst(this._dialogInput,!1),L.settings={},k.data(this._dialogInput[0],"datepicker",L)),J(L.settings,g||{}),p=p&&p.constructor===Date?this._formatDate(L,p):p,this._dialogInput.val(p),this._pos=f?f.length?f:[f.pageX,f.pageY]:null,this._pos||(t=document.documentElement.clientWidth,m=document.documentElement.clientHeight,M=document.documentElement.scrollLeft||document.body.scrollLeft,N=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[t/2-100+M,m/2-150+N]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),L.settings.onSelect=O,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],"datepicker",L),this
},_destroyDatepicker:function(d){var a,c=k(d),f=k.data(d,"datepicker");
c.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),k.removeData(d,"datepicker"),"input"===a?(f.append.remove(),f.trigger.remove(),c.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===a||"span"===a)&&c.removeClass(this.markerClassName).empty(),x===f&&(x=null))
},_enableDatepicker:function(d){var a,c,g=k(d),f=k.data(d,"datepicker");
g.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),"input"===a?(d.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===a||"span"===a)&&(c=g.children("."+this._inlineClass),c.children().removeClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===d?null:e
}))
},_disableDatepicker:function(d){var a,c,g=k(d),f=k.data(d,"datepicker");
g.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),"input"===a?(d.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===a||"span"===a)&&(c=g.children("."+this._inlineClass),c.children().addClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===d?null:e
}),this._disabledInputs[this._disabledInputs.length]=d)
},_isDisabledDatepicker:function(a){if(!a){return !1
}for(var c=0;
this._disabledInputs.length>c;
c++){if(this._disabledInputs[c]===a){return !0
}}return !1
},_getInst:function(c){try{return k.data(c,"datepicker")
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(m,c,f){var t,p,g,d,a=this._getInst(m);
return 2===arguments.length&&"string"==typeof c?"defaults"===c?k.extend({},k.datepicker._defaults):a?"all"===c?k.extend({},a.settings):this._get(a,c):null:(t=c||{},"string"==typeof c&&(t={},t[c]=f),a&&(this._curInst===a&&this._hideDatepicker(),p=this._getDateDatepicker(m,!0),g=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),J(a.settings,t),null!==g&&void 0!==t.dateFormat&&void 0===t.minDate&&(a.settings.minDate=this._formatDate(a,g)),null!==d&&void 0!==t.dateFormat&&void 0===t.maxDate&&(a.settings.maxDate=this._formatDate(a,d)),"disabled" in t&&(t.disabled?this._disableDatepicker(m):this._enableDatepicker(m)),this._attachments(k(m),a),this._autoSize(a),this._setDate(a,p),this._updateAlternate(a),this._updateDatepicker(a)),void 0)
},_changeDatepicker:function(c,d,a){this._optionDatepicker(c,d,a)
},_refreshDatepicker:function(a){var c=this._getInst(a);
c&&this._updateDatepicker(c)
},_setDateDatepicker:function(c,d){var a=this._getInst(c);
a&&(this._setDate(a,d),this._updateDatepicker(a),this._updateAlternate(a))
},_getDateDatepicker:function(c,d){var a=this._getInst(c);
return a&&!a.inline&&this._setDateFromField(a,d),a?this._getDate(a):null
},_doKeyDown:function(h){var d,f,m,l=k.datepicker._getInst(h.target),c=!0,g=l.dpDiv.is(".ui-datepicker-rtl");
if(l._keyEvent=!0,k.datepicker._datepickerShowing){switch(h.keyCode){case 9:k.datepicker._hideDatepicker(),c=!1;
break;
case 13:return m=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",l.dpDiv),m[0]&&k.datepicker._selectDay(h.target,l.selectedMonth,l.selectedYear,m[0]),d=k.datepicker._get(l,"onSelect"),d?(f=k.datepicker._formatDate(l),d.apply(l.input?l.input[0]:null,[f,l])):k.datepicker._hideDatepicker(),!1;
case 27:k.datepicker._hideDatepicker();
break;
case 33:k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 34:k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 35:(h.ctrlKey||h.metaKey)&&k.datepicker._clearDate(h.target),c=h.ctrlKey||h.metaKey;
break;
case 36:(h.ctrlKey||h.metaKey)&&k.datepicker._gotoToday(h.target),c=h.ctrlKey||h.metaKey;
break;
case 37:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?1:-1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 38:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,-7,"D"),c=h.ctrlKey||h.metaKey;
break;
case 39:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?-1:1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 40:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,7,"D"),c=h.ctrlKey||h.metaKey;
break;
default:c=!1
}}else{36===h.keyCode&&h.ctrlKey?k.datepicker._showDatepicker(this):c=!1
}c&&(h.preventDefault(),h.stopPropagation())
},_doKeyPress:function(d){var a,c,f=k.datepicker._getInst(d.target);
return k.datepicker._get(f,"constrainInput")?(a=k.datepicker._possibleChars(k.datepicker._get(f,"dateFormat")),c=String.fromCharCode(null==d.charCode?d.keyCode:d.charCode),d.ctrlKey||d.metaKey||" ">c||!a||a.indexOf(c)>-1):void 0
},_doKeyUp:function(d){var a,c=k.datepicker._getInst(d.target);
if(c.input.val()!==c.lastVal){try{a=k.datepicker.parseDate(k.datepicker._get(c,"dateFormat"),c.input?c.input.val():null,k.datepicker._getFormatConfig(c)),a&&(k.datepicker._setDateFromField(c),k.datepicker._updateAlternate(c),k.datepicker._updateDatepicker(c))
}catch(f){}}return !0
},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=k("input",i.parentNode)[0]),!k.datepicker._isDisabledDatepicker(i)&&k.datepicker._lastInput!==i){var f,t,m,g,d,a,p;
f=k.datepicker._getInst(i),k.datepicker._curInst&&k.datepicker._curInst!==f&&(k.datepicker._curInst.dpDiv.stop(!0,!0),f&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),t=k.datepicker._get(f,"beforeShow"),m=t?t.apply(i,[i,f]):{},m!==!1&&(J(f.settings,m),f.lastVal=null,k.datepicker._lastInput=i,k.datepicker._setDateFromField(f),k.datepicker._inDialog&&(i.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(i),k.datepicker._pos[1]+=i.offsetHeight),g=!1,k(i).parents().each(function(){return g|="fixed"===k(this).css("position"),!g
}),d={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,f.dpDiv.empty(),f.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(f),d=k.datepicker._checkOffset(f,d,g),f.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":g?"fixed":"absolute",display:"none",left:d.left+"px",top:d.top+"px"}),f.inline||(a=k.datepicker._get(f,"showAnim"),p=k.datepicker._get(f,"duration"),f.dpDiv.css("z-index",C(k(i))+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[a]?f.dpDiv.show(a,k.datepicker._get(f,"showOptions"),p):f.dpDiv[a||"show"](a?p:null),k.datepicker._shouldFocusInput(f)&&f.input.trigger("focus"),k.datepicker._curInst=f))
}},_updateDatepicker:function(h){this.maxRows=4,x=h,h.dpDiv.empty().append(this._generateHTML(h)),this._attachHandlers(h);
var d,f=this._getNumberOfMonths(h),l=f[1],c=17,g=h.dpDiv.find("."+this._dayOverClass+" a");
g.length>0&&y.apply(g.get(0)),h.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),l>1&&h.dpDiv.addClass("ui-datepicker-multi-"+l).css("width",c*l+"em"),h.dpDiv[(1!==f[0]||1!==f[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),h.dpDiv[(this._get(h,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),h===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(h)&&h.input.trigger("focus"),h.yearshtml&&(d=h.yearshtml,setTimeout(function(){d===h.yearshtml&&h.yearshtml&&h.dpDiv.find("select.ui-datepicker-year:first").replaceWith(h.yearshtml),d=h.yearshtml=null
},0))
},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(t,m,v){var f=t.dpDiv.outerWidth(),d=t.dpDiv.outerHeight(),u=t.input?t.input.outerWidth():0,c=t.input?t.input.outerHeight():0,p=document.documentElement.clientWidth+(v?0:k(document).scrollLeft()),g=document.documentElement.clientHeight+(v?0:k(document).scrollTop());
return m.left-=this._get(t,"isRTL")?f-u:0,m.left-=v&&m.left===t.input.offset().left?k(document).scrollLeft():0,m.top-=v&&m.top===t.input.offset().top+c?k(document).scrollTop():0,m.left-=Math.min(m.left,m.left+f>p&&p>f?Math.abs(m.left+f-p):0),m.top-=Math.min(m.top,m.top+d>g&&g>d?Math.abs(d+c):0),m
},_findPos:function(d){for(var a,c=this._getInst(d),f=this._get(c,"isRTL");
d&&("hidden"===d.type||1!==d.nodeType||k.expr.filters.hidden(d));
){d=d[f?"previousSibling":"nextSibling"]
}return a=k(d).offset(),[a.left,a.top]
},_hideDatepicker:function(g){var d,f,l,h,c=this._curInst;
!c||g&&c!==k.data(g,"datepicker")||this._datepickerShowing&&(d=this._get(c,"showAnim"),f=this._get(c,"duration"),l=function(){k.datepicker._tidyDialog(c)
},k.effects&&(k.effects.effect[d]||k.effects[d])?c.dpDiv.hide(d,k.datepicker._get(c,"showOptions"),f,l):c.dpDiv["slideDown"===d?"slideUp":"fadeIn"===d?"fadeOut":"hide"](d?f:null,l),d||l(),this._datepickerShowing=!1,h=this._get(c,"onClose"),h&&h.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},_checkExternalClick:function(d){if(k.datepicker._curInst){var a=k(d.target),c=k.datepicker._getInst(a[0]);
(a[0].id!==k.datepicker._mainDivId&&0===a.parents("#"+k.datepicker._mainDivId).length&&!a.hasClass(k.datepicker.markerClassName)&&!a.closest("."+k.datepicker._triggerClass).length&&k.datepicker._datepickerShowing&&(!k.datepicker._inDialog||!k.blockUI)||a.hasClass(k.datepicker.markerClassName)&&k.datepicker._curInst!==c)&&k.datepicker._hideDatepicker()
}},_adjustDate:function(d,a,c){var g=k(d),f=this._getInst(g[0]);
this._isDisabledDatepicker(g[0])||(this._adjustInstDate(f,a+("M"===c?this._get(f,"showCurrentAtPos"):0),c),this._updateDatepicker(f))
},_gotoToday:function(d){var a,c=k(d),f=this._getInst(c[0]);
this._get(f,"gotoCurrent")&&f.currentDay?(f.selectedDay=f.currentDay,f.drawMonth=f.selectedMonth=f.currentMonth,f.drawYear=f.selectedYear=f.currentYear):(a=new Date,f.selectedDay=a.getDate(),f.drawMonth=f.selectedMonth=a.getMonth(),f.drawYear=f.selectedYear=a.getFullYear()),this._notifyChange(f),this._adjustDate(c)
},_selectMonthYear:function(d,a,c){var g=k(d),f=this._getInst(g[0]);
f["selected"+("M"===c?"Month":"Year")]=f["draw"+("M"===c?"Month":"Year")]=parseInt(a.options[a.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(g)
},_selectDay:function(g,d,f,l){var h,c=k(g);
k(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(c[0])||(h=this._getInst(c[0]),h.selectedDay=h.currentDay=k("a",l).html(),h.selectedMonth=h.currentMonth=d,h.selectedYear=h.currentYear=f,this._selectDate(g,this._formatDate(h,h.currentDay,h.currentMonth,h.currentYear)))
},_clearDate:function(c){var a=k(c);
this._selectDate(a,"")
},_selectDate:function(d,a){var c,g=k(d),f=this._getInst(g[0]);
a=null!=a?a:this._formatDate(f),f.input&&f.input.val(a),this._updateAlternate(f),c=this._get(f,"onSelect"),c?c.apply(f.input?f.input[0]:null,[a,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.trigger("focus"),this._lastInput=null)
},_updateAlternate:function(d){var a,c,g,f=this._get(d,"altField");
f&&(a=this._get(d,"altFormat")||this._get(d,"dateFormat"),c=this._getDate(d),g=this.formatDate(a,c,this._getFormatConfig(d)),k(f).val(g))
},noWeekends:function(a){var c=a.getDay();
return[c>0&&6>c,""]
},iso8601Week:function(c){var d,a=new Date(c.getTime());
return a.setDate(a.getDate()+4-(a.getDay()||7)),d=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((d-a)/86400000)/7)+1
},parseDate:function(ab,X,P){if(null==ab||null==X){throw"Invalid arguments"
}if(X="object"==typeof X?""+X:X+"",""===X){return null
}var T,S,af,Q,Y=0,V=(P?P.shortYearCutoff:null)||this._defaults.shortYearCutoff,ad="string"!=typeof V?V:(new Date).getFullYear()%100+parseInt(V,10),O=(P?P.dayNamesShort:null)||this._defaults.dayNamesShort,ac=(P?P.dayNames:null)||this._defaults.dayNames,R=(P?P.monthNamesShort:null)||this._defaults.monthNamesShort,aa=(P?P.monthNames:null)||this._defaults.monthNames,Z=-1,U=-1,ag=-1,N=-1,ae=!1,t=function(c){var a=ab.length>T+1&&ab.charAt(T+1)===c;
return a&&T++,a
},M=function(d){var g=t(d),f="@"===d?14:"!"===d?20:"y"===d&&g?4:"o"===d?3:2,i="y"===d?f:1,h=RegExp("^\\d{"+i+","+f+"}"),c=X.substring(Y).match(h);
if(!c){throw"Missing number at position "+Y
}return Y+=c[0].length,parseInt(c[0],10)
},W=function(f,d,h){var g=-1,c=k.map(t(f)?h:d,function(a,i){return[[i,a]]
}).sort(function(a,i){return -(a[1].length-i[1].length)
});
if(k.each(c,function(a,l){var i=l[1];
return X.substr(Y,i.length).toLowerCase()===i.toLowerCase()?(g=l[0],Y+=i.length,!1):void 0
}),-1!==g){return g+1
}throw"Unknown name at position "+Y
},L=function(){if(X.charAt(Y)!==ab.charAt(T)){throw"Unexpected literal at position "+Y
}Y++
};
for(T=0;
ab.length>T;
T++){if(ae){"'"!==ab.charAt(T)||t("'")?L():ae=!1
}else{switch(ab.charAt(T)){case"d":ag=M("d");
break;
case"D":W("D",O,ac);
break;
case"o":N=M("o");
break;
case"m":U=M("m");
break;
case"M":U=W("M",R,aa);
break;
case"y":Z=M("y");
break;
case"@":Q=new Date(M("@")),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"!":Q=new Date((M("!")-this._ticksTo1970)/10000),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"'":t("'")?L():ae=!0;
break;
default:L()
}}}if(X.length>Y&&(af=X.substr(Y),!/^\s+/.test(af))){throw"Extra/unparsed characters found in date: "+af
}if(-1===Z?Z=(new Date).getFullYear():100>Z&&(Z+=(new Date).getFullYear()-(new Date).getFullYear()%100+(ad>=Z?0:-100)),N>-1){for(U=1,ag=N;
;
){if(S=this._getDaysInMonth(Z,U-1),S>=ag){break
}U++,ag-=S
}}if(Q=this._daylightSavingAdjust(new Date(Z,U-1,ag)),Q.getFullYear()!==Z||Q.getMonth()+1!==U||Q.getDate()!==ag){throw"Invalid date"
}return Q
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(R,M,v){if(!M){return""
}var S,m=(v?v.dayNamesShort:null)||this._defaults.dayNamesShort,g=(v?v.dayNames:null)||this._defaults.dayNames,P=(v?v.monthNamesShort:null)||this._defaults.monthNamesShort,f=(v?v.monthNames:null)||this._defaults.monthNames,L=function(c){var a=R.length>S+1&&R.charAt(S+1)===c;
return a&&S++,a
},p=function(c,h,a){var d=""+h;
if(L(c)){for(;
a>d.length;
){d="0"+d
}}return d
},O=function(c,h,a,d){return L(c)?d[h]:a[h]
},Q="",N=!1;
if(M){for(S=0;
R.length>S;
S++){if(N){"'"!==R.charAt(S)||L("'")?Q+=R.charAt(S):N=!1
}else{switch(R.charAt(S)){case"d":Q+=p("d",M.getDate(),2);
break;
case"D":Q+=O("D",M.getDay(),m,g);
break;
case"o":Q+=p("o",Math.round((new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime()-new Date(M.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":Q+=p("m",M.getMonth()+1,2);
break;
case"M":Q+=O("M",M.getMonth(),P,f);
break;
case"y":Q+=L("y")?M.getFullYear():(10>M.getFullYear()%100?"0":"")+M.getFullYear()%100;
break;
case"@":Q+=M.getTime();
break;
case"!":Q+=10000*M.getTime()+this._ticksTo1970;
break;
case"'":L("'")?Q+="'":N=!0;
break;
default:Q+=R.charAt(S)
}}}}return Q
},_possibleChars:function(c){var f,a="",d=!1,g=function(e){var h=c.length>f+1&&c.charAt(f+1)===e;
return h&&f++,h
};
for(f=0;
c.length>f;
f++){if(d){"'"!==c.charAt(f)||g("'")?a+=c.charAt(f):d=!1
}else{switch(c.charAt(f)){case"d":case"m":case"y":case"@":a+="0123456789";
break;
case"D":case"M":return null;
case"'":g("'")?a+="'":d=!0;
break;
default:a+=c.charAt(f)
}}}return a
},_get:function(a,c){return void 0!==a.settings[c]?a.settings[c]:this._defaults[c]
},_setDateFromField:function(f,l){if(f.input.val()!==f.lastVal){var d=this._get(f,"dateFormat"),g=f.lastVal=f.input?f.input.val():null,p=this._getDefaultDate(f),m=p,c=this._getFormatConfig(f);
try{m=this.parseDate(d,g,c)||p
}catch(h){g=l?"":g
}f.selectedDay=m.getDate(),f.drawMonth=f.selectedMonth=m.getMonth(),f.drawYear=f.selectedYear=m.getFullYear(),f.currentDay=g?m.getDate():0,f.currentMonth=g?m.getMonth():0,f.currentYear=g?m.getFullYear():0,this._adjustInstDate(f)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(g,d,f){var l=function(a){var i=new Date;
return i.setDate(i.getDate()+a),i
},h=function(p){try{return k.datepicker.parseDate(k.datepicker._get(g,"dateFormat"),p,k.datepicker._getFormatConfig(g))
}catch(u){}for(var M=(p.toLowerCase().match(/^c/)?k.datepicker._getDate(g):null)||new Date,L=M.getFullYear(),m=M.getMonth(),v=M.getDate(),t=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,e=t.exec(p);
e;
){switch(e[2]||"d"){case"d":case"D":v+=parseInt(e[1],10);
break;
case"w":case"W":v+=7*parseInt(e[1],10);
break;
case"m":case"M":m+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m));
break;
case"y":case"Y":L+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m))
}e=t.exec(p)
}return new Date(L,m,v)
},c=null==d||""===d?f:"string"==typeof d?h(d):"number"==typeof d?isNaN(d)?f:l(d):new Date(d.getTime());
return c=c&&"Invalid Date"==""+c?f:c,c&&(c.setHours(0),c.setMinutes(0),c.setSeconds(0),c.setMilliseconds(0)),this._daylightSavingAdjust(c)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(f,h,d){var g=!h,m=f.selectedMonth,l=f.selectedYear,c=this._restrictMinMax(f,this._determineDate(f,h,new Date));
f.selectedDay=f.currentDay=c.getDate(),f.drawMonth=f.selectedMonth=f.currentMonth=c.getMonth(),f.drawYear=f.selectedYear=f.currentYear=c.getFullYear(),m===f.selectedMonth&&l===f.selectedYear||d||this._notifyChange(f),this._adjustInstDate(f),f.input&&f.input.val(g?"":this._formatDate(f))
},_getDate:function(a){var c=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return c
},_attachHandlers:function(d){var a=this._get(d,"stepMonths"),c="#"+d.id.replace(/\\\\/g,"\\");
d.dpDiv.find("[data-handler]").map(function(){var f={prev:function(){k.datepicker._adjustDate(c,-a,"M")
},next:function(){k.datepicker._adjustDate(c,+a,"M")
},hide:function(){k.datepicker._hideDatepicker()
},today:function(){k.datepicker._gotoToday(c)
},selectDay:function(){return k.datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return k.datepicker._selectMonthYear(c,this,"M"),!1
},selectYear:function(){return k.datepicker._selectMonthYear(c,this,"Y"),!1
}};
k(this).on(this.getAttribute("data-event"),f[this.getAttribute("data-handler")])
})
},_generateHTML:function(aJ){var aY,aU,aK,aP,aO,a2,aL,aV,aR,a0,aI,aZ,aN,aX,aW,aQ,a3,aH,a1,aE,aG,aS,aF,az,ay,at,ah,al,ao,ai,au,aD,am,aB,an,ae,ax,aw,ap,aj=new Date,aA=this._daylightSavingAdjust(new Date(aj.getFullYear(),aj.getMonth(),aj.getDate())),ab=this._get(aJ,"isRTL"),aT=this._get(aJ,"showButtonPanel"),aM=this._get(aJ,"hideIfNoPrevNext"),aq=this._get(aJ,"navigationAsDateFormat"),ag=this._getNumberOfMonths(aJ),af=this._get(aJ,"showCurrentAtPos"),aC=this._get(aJ,"stepMonths"),ac=1!==ag[0]||1!==ag[1],av=this._daylightSavingAdjust(aJ.currentDay?new Date(aJ.currentYear,aJ.currentMonth,aJ.currentDay):new Date(9999,9,9)),ak=this._getMinMaxDate(aJ,"min"),ar=this._getMinMaxDate(aJ,"max"),aa=aJ.drawMonth-af,ad=aJ.drawYear;
if(0>aa&&(aa+=12,ad--),ar){for(aY=this._daylightSavingAdjust(new Date(ar.getFullYear(),ar.getMonth()-ag[0]*ag[1]+1,ar.getDate())),aY=ak&&ak>aY?ak:aY;
this._daylightSavingAdjust(new Date(ad,aa,1))>aY;
){aa--,0>aa&&(aa=11,ad--)
}}for(aJ.drawMonth=aa,aJ.drawYear=ad,aU=this._get(aJ,"prevText"),aU=aq?this.formatDate(aU,this._daylightSavingAdjust(new Date(ad,aa-aC,1)),this._getFormatConfig(aJ)):aU,aK=this._canAdjustMonth(aJ,-1,ad,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":aM?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",aP=this._get(aJ,"nextText"),aP=aq?this.formatDate(aP,this._daylightSavingAdjust(new Date(ad,aa+aC,1)),this._getFormatConfig(aJ)):aP,aO=this._canAdjustMonth(aJ,1,ad,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>":aM?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>",a2=this._get(aJ,"currentText"),aL=this._get(aJ,"gotoCurrent")&&aJ.currentDay?av:aA,a2=aq?this.formatDate(a2,aL,this._getFormatConfig(aJ)):a2,aV=aJ.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aJ,"closeText")+"</button>",aR=aT?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aJ,aL)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a2+"</button>":"")+(ab?"":aV)+"</div>":"",a0=parseInt(this._get(aJ,"firstDay"),10),a0=isNaN(a0)?0:a0,aI=this._get(aJ,"showWeek"),aZ=this._get(aJ,"dayNames"),aN=this._get(aJ,"dayNamesMin"),aX=this._get(aJ,"monthNames"),aW=this._get(aJ,"monthNamesShort"),aQ=this._get(aJ,"beforeShowDay"),a3=this._get(aJ,"showOtherMonths"),aH=this._get(aJ,"selectOtherMonths"),a1=this._getDefaultDate(aJ),aE="",aS=0;
ag[0]>aS;
aS++){for(aF="",this.maxRows=4,az=0;
ag[1]>az;
az++){if(ay=this._daylightSavingAdjust(new Date(ad,aa,aJ.selectedDay)),at=" ui-corner-all",ah="",ac){if(ah+="<div class='ui-datepicker-group",ag[1]>1){switch(az){case 0:ah+=" ui-datepicker-group-first",at=" ui-corner-"+(ab?"right":"left");
break;
case ag[1]-1:ah+=" ui-datepicker-group-last",at=" ui-corner-"+(ab?"left":"right");
break;
default:ah+=" ui-datepicker-group-middle",at=""
}}ah+="'>"
}for(ah+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+at+"'>"+(/all|left/.test(at)&&0===aS?ab?aO:aK:"")+(/all|right/.test(at)&&0===aS?ab?aK:aO:"")+this._generateMonthYearHeader(aJ,aa,ad,ak,ar,aS>0||az>0,aX,aW)+"</div><table class='ui-datepicker-calendar'><thead><tr>",al=aI?"<th class='ui-datepicker-week-col'>"+this._get(aJ,"weekHeader")+"</th>":"",aG=0;
7>aG;
aG++){ao=(aG+a0)%7,al+="<th scope='col'"+((aG+a0+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aZ[ao]+"'>"+aN[ao]+"</span></th>"
}for(ah+=al+"</tr></thead><tbody>",ai=this._getDaysInMonth(ad,aa),ad===aJ.selectedYear&&aa===aJ.selectedMonth&&(aJ.selectedDay=Math.min(aJ.selectedDay,ai)),au=(this._getFirstDayOfMonth(ad,aa)-a0+7)%7,aD=Math.ceil((au+ai)/7),am=ac?this.maxRows>aD?this.maxRows:aD:aD,this.maxRows=am,aB=this._daylightSavingAdjust(new Date(ad,aa,1-au)),an=0;
am>an;
an++){for(ah+="<tr>",ae=aI?"<td class='ui-datepicker-week-col'>"+this._get(aJ,"calculateWeek")(aB)+"</td>":"",aG=0;
7>aG;
aG++){ax=aQ?aQ.apply(aJ.input?aJ.input[0]:null,[aB]):[!0,""],aw=aB.getMonth()!==aa,ap=aw&&!aH||!ax[0]||ak&&ak>aB||ar&&aB>ar,ae+="<td class='"+((aG+a0+6)%7>=5?" ui-datepicker-week-end":"")+(aw?" ui-datepicker-other-month":"")+(aB.getTime()===ay.getTime()&&aa===aJ.selectedMonth&&aJ._keyEvent||a1.getTime()===aB.getTime()&&a1.getTime()===ay.getTime()?" "+this._dayOverClass:"")+(ap?" "+this._unselectableClass+" ui-state-disabled":"")+(aw&&!a3?"":" "+ax[1]+(aB.getTime()===av.getTime()?" "+this._currentClass:"")+(aB.getTime()===aA.getTime()?" ui-datepicker-today":""))+"'"+(aw&&!a3||!ax[2]?"":" title='"+ax[2].replace(/'/g,"&#39;")+"'")+(ap?"":" data-handler='selectDay' data-event='click' data-month='"+aB.getMonth()+"' data-year='"+aB.getFullYear()+"'")+">"+(aw&&!a3?"&#xa0;":ap?"<span class='ui-state-default'>"+aB.getDate()+"</span>":"<a class='ui-state-default"+(aB.getTime()===aA.getTime()?" ui-state-highlight":"")+(aB.getTime()===av.getTime()?" ui-state-active":"")+(aw?" ui-priority-secondary":"")+"' href='#'>"+aB.getDate()+"</a>")+"</td>",aB.setDate(aB.getDate()+1),aB=this._daylightSavingAdjust(aB)
}ah+=ae+"</tr>"
}aa++,aa>11&&(aa=0,ad++),ah+="</tbody></table>"+(ac?"</div>"+(ag[0]>0&&az===ag[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aF+=ah
}aE+=aF
}return aE+=aR,aJ._keyEvent=!1,aE
},_generateMonthYearHeader:function(O,aa,W,P,T,S,ae,Q){var X,V,ac,N,ab,R,Z,Y,U=this._get(O,"changeMonth"),af=this._get(O,"changeYear"),M=this._get(O,"showMonthAfterYear"),ad="<div class='ui-datepicker-title'>",L="";
if(S||!U){L+="<span class='ui-datepicker-month'>"+ae[aa]+"</span>"
}else{for(X=P&&P.getFullYear()===W,V=T&&T.getFullYear()===W,L+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",ac=0;
12>ac;
ac++){(!X||ac>=P.getMonth())&&(!V||T.getMonth()>=ac)&&(L+="<option value='"+ac+"'"+(ac===aa?" selected='selected'":"")+">"+Q[ac]+"</option>")
}L+="</select>"
}if(M||(ad+=L+(!S&&U&&af?"":"&#xa0;")),!O.yearshtml){if(O.yearshtml="",S||!af){ad+="<span class='ui-datepicker-year'>"+W+"</span>"
}else{for(N=this._get(O,"yearRange").split(":"),ab=(new Date).getFullYear(),R=function(a){var c=a.match(/c[+\-].*/)?W+parseInt(a.substring(1),10):a.match(/[+\-].*/)?ab+parseInt(a,10):parseInt(a,10);
return isNaN(c)?ab:c
},Z=R(N[0]),Y=Math.max(Z,R(N[1]||"")),Z=P?Math.max(Z,P.getFullYear()):Z,Y=T?Math.min(Y,T.getFullYear()):Y,O.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
Y>=Z;
Z++){O.yearshtml+="<option value='"+Z+"'"+(Z===W?" selected='selected'":"")+">"+Z+"</option>"
}O.yearshtml+="</select>",ad+=O.yearshtml,O.yearshtml=null
}}return ad+=this._get(O,"yearSuffix"),M&&(ad+=(!S&&U&&af?"":"&#xa0;")+L),ad+="</div>"
},_adjustInstDate:function(f,h,d){var g=f.selectedYear+("Y"===d?h:0),m=f.selectedMonth+("M"===d?h:0),l=Math.min(f.selectedDay,this._getDaysInMonth(g,m))+("D"===d?h:0),c=this._restrictMinMax(f,this._daylightSavingAdjust(new Date(g,m,l)));
f.selectedDay=c.getDate(),f.drawMonth=f.selectedMonth=c.getMonth(),f.drawYear=f.selectedYear=c.getFullYear(),("M"===d||"Y"===d)&&this._notifyChange(f)
},_restrictMinMax:function(c,f){var a=this._getMinMaxDate(c,"min"),d=this._getMinMaxDate(c,"max"),g=a&&a>f?a:f;
return d&&g>d?d:g
},_notifyChange:function(a){var c=this._get(a,"onChangeMonthYear");
c&&c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
},_getNumberOfMonths:function(a){var c=this._get(a,"numberOfMonths");
return null==c?[1,1]:"number"==typeof c?[1,c]:c
},_getMinMaxDate:function(a,c){return this._determineDate(a,this._get(a,c+"Date"),null)
},_getDaysInMonth:function(a,c){return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()
},_getFirstDayOfMonth:function(a,c){return new Date(a,c,1).getDay()
},_canAdjustMonth:function(c,f,a,d){var h=this._getNumberOfMonths(c),g=this._daylightSavingAdjust(new Date(a,d+(0>f?f:h[0]*h[1]),1));
return 0>f&&g.setDate(this._getDaysInMonth(g.getFullYear(),g.getMonth())),this._isInRange(c,g)
},_isInRange:function(u,m){var g,v,f=this._getMinMaxDate(u,"min"),d=this._getMinMaxDate(u,"max"),p=null,c=null,l=this._get(u,"yearRange");
return l&&(g=l.split(":"),v=(new Date).getFullYear(),p=parseInt(g[0],10),c=parseInt(g[1],10),g[0].match(/[+\-].*/)&&(p+=v),g[1].match(/[+\-].*/)&&(c+=v)),(!f||m.getTime()>=f.getTime())&&(!d||m.getTime()<=d.getTime())&&(!p||m.getFullYear()>=p)&&(!c||c>=m.getFullYear())
},_getFormatConfig:function(a){var c=this._get(a,"shortYearCutoff");
return c="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),{shortYearCutoff:c,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(c,f,a,d){f||(c.currentDay=c.selectedDay,c.currentMonth=c.selectedMonth,c.currentYear=c.selectedYear);
var g=f?"object"==typeof f?f:this._daylightSavingAdjust(new Date(d,a,f)):this._daylightSavingAdjust(new Date(c.currentYear,c.currentMonth,c.currentDay));
return this.formatDate(this._get(c,"dateFormat"),g,this._getFormatConfig(c))
}}),k.fn.datepicker=function(c){if(!this.length){return this
}k.datepicker.initialized||(k(document).on("mousedown",k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);
var a=Array.prototype.slice.call(arguments,1);
return"string"!=typeof c||"isDisabled"!==c&&"getDate"!==c&&"widget"!==c?"option"===c&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof c?k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this].concat(a)):k.datepicker._attachDatepicker(this,c)
}):k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this[0]].concat(a))
},k.datepicker=new q,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.12.1",k.datepicker,k.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(c){var a=k(this).css(c).offset().top;
0>a&&k(this).css("top",c.top-a)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&k.fn.draggable&&this._makeDraggable(),this.options.resizable&&k.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a.jquery||a.nodeType)?k(a):this.document.find(a||"body").eq(0)
},_destroy:function(){var a,c=this.originalPosition;
this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=c.parent.children().eq(c.index),a.length&&a[0]!==this.element[0]?a.before(this.element):c.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:k.noop,enable:k.noop,close:function(c){var a=this;
this._isOpen&&this._trigger("beforeClose",c)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){a._trigger("close",c)
}))
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(d,a){var c=!1,g=this.uiDialog.siblings(".ui-front:visible").map(function(){return +k(this).css("z-index")
}).get(),f=Math.max.apply(null,g);
return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),c=!0),c&&!a&&this._trigger("focus",d),c
},open:function(){var a=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=k(k.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){a._focusTabbable(),a._trigger("focus")
}),this._makeFocusTarget(),this._trigger("open"),void 0)
},_focusTabbable:function(){var a=this._focusedElement;
a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")
},_keepFocus:function(c){function a(){var f=k.ui.safeActiveElement(this.document[0]),d=this.uiDialog[0]===f||k.contains(this.uiDialog[0],f);
d||this._focusTabbable()
}c.preventDefault(),a.call(this),this._delay(a)
},_createWrapper:function(){this.uiDialog=k("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(d){if(this.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===k.ui.keyCode.ESCAPE){return d.preventDefault(),this.close(d),void 0
}if(d.keyCode===k.ui.keyCode.TAB&&!d.isDefaultPrevented()){var a=this.uiDialog.find(":tabbable"),c=a.filter(":first"),f=a.filter(":last");
d.target!==f[0]&&d.target!==this.uiDialog[0]||d.shiftKey?d.target!==c[0]&&d.target!==this.uiDialog[0]||!d.shiftKey||(this._delay(function(){f.trigger("focus")
}),d.preventDefault()):(this._delay(function(){c.trigger("focus")
}),d.preventDefault())
}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var a;
this.uiDialogTitlebar=k("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(c){k(c.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")
}}),this.uiDialogTitlebarClose=k("<button type='button'></button>").button({label:k("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(c){c.preventDefault(),this.close(c)
}}),a=k("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(a,"ui-dialog-title"),this._title(a),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")
},_createButtonPane:function(){this.uiDialogButtonPane=k("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=k("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()
},_createButtons:function(){var c=this,a=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),k.isEmptyObject(a)||k.isArray(a)&&!a.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(k.each(a,function(d,e){var g,f;
e=k.isFunction(e)?{click:e,text:d}:e,e=k.extend({type:"button"},e),g=e.click,f={icon:e.icon,iconPosition:e.iconPosition,showLabel:e.showLabel,icons:e.icons,text:e.text},delete e.click,delete e.icon,delete e.iconPosition,delete e.showLabel,delete e.icons,"boolean"==typeof e.text&&delete e.text,k("<button></button>",e).button(f).appendTo(c.uiButtonSet).on("click",function(){g.apply(c.element[0],arguments)
})
}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)
},_makeDraggable:function(){function d(e){return{position:e.position,offset:e.offset}
}var a=this,c=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,f){a._addClass(k(this),"ui-dialog-dragging"),a._blockFrames(),a._trigger("dragStart",e,d(f))
},drag:function(e,f){a._trigger("drag",e,d(f))
},stop:function(h,g){var e=g.offset.left-a.document.scrollLeft(),f=g.offset.top-a.document.scrollTop();
c.position={my:"left top",at:"left"+(e>=0?"+":"")+e+" top"+(f>=0?"+":"")+f,of:a.window},a._removeClass(k(this),"ui-dialog-dragging"),a._unblockFrames(),a._trigger("dragStop",h,d(g))
}})
},_makeResizable:function(){function g(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}
}var d=this,f=this.options,l=f.resizable,h=this.uiDialog.css("position"),c="string"==typeof l?l:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:this._minHeight(),handles:c,start:function(a,e){d._addClass(k(this),"ui-dialog-resizing"),d._blockFrames(),d._trigger("resizeStart",a,g(e))
},resize:function(a,e){d._trigger("resize",a,g(e))
},stop:function(s,p){var e=d.uiDialog.offset(),m=e.left-d.document.scrollLeft(),i=e.top-d.document.scrollTop();
f.height=d.uiDialog.height(),f.width=d.uiDialog.width(),f.position={my:"left top",at:"left"+(m>=0?"+":"")+m+" top"+(i>=0?"+":"")+i,of:d.window},d._removeClass(k(this),"ui-dialog-resizing"),d._unblockFrames(),d._trigger("resizeStop",s,g(p))
}}).css("position",h)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(a){this._makeFocusTarget(),this._focusedElement=k(a.target)
}})
},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)
},_untrackInstance:function(){var c=this._trackingInstances(),a=k.inArray(this,c);
-1!==a&&c.splice(a,1)
},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");
return a||(a=[],this.document.data("ui-dialog-instances",a)),a
},_minHeight:function(){var a=this.options;
return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()
},_setOptions:function(d){var a=this,c=!1,f={};
k.each(d,function(g,h){a._setOption(g,h),g in a.sizeRelatedOptions&&(c=!0),g in a.resizableRelatedOptions&&(f[g]=h)
}),c&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",f)
},_setOption:function(d,a){var c,g,f=this.uiDialog;
"disabled"!==d&&(this._super(d,a),"appendTo"===d&&this.uiDialog.appendTo(this._appendTo()),"buttons"===d&&this._createButtons(),"closeText"===d&&this.uiDialogTitlebarClose.button({label:k("<a>").text(""+this.options.closeText).html()}),"draggable"===d&&(c=f.is(":data(ui-draggable)"),c&&!a&&f.draggable("destroy"),!c&&a&&this._makeDraggable()),"position"===d&&this._position(),"resizable"===d&&(g=f.is(":data(ui-resizable)"),g&&!a&&f.resizable("destroy"),g&&"string"==typeof a&&f.resizable("option","handles",a),g||a===!1||this._makeResizable()),"title"===d&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var c,f,a,d=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),c=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),f=Math.max(0,d.minHeight-c),a="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-c):"none","auto"===d.height?this.element.css({minHeight:f,maxHeight:a,height:"auto"}):this.element.height(Math.max(0,d.height-c)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=k(this);
return k("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(a){return k(a.target).closest(".ui-dialog").length?!0:!!k(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var a=!0;
this._delay(function(){a=!1
}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(c){a||this._allowInteraction(c)||(c.preventDefault(),this._trackingInstances()[0]._focusTabbable())
}}),this.overlay=k("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;
a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null
}}}),k.uiBackCompat!==!1&&k.widget("ui.dialog",k.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(a,c){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(c),this._superApply(arguments)
}}),k.ui.dialog,k.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=k("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()
},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()
},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),this._refreshValue(),void 0)
},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(a){var c=a.value;
delete a.value,this._super(a),this.options.value=this._constrainedValue(c),this._refreshValue()
},_setOption:function(a,c){"max"===a&&(c=Math.max(this.min,c)),this._super(a,c)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var c=this.options.value,a=this._percentage();
this.valueDiv.toggle(this.indeterminate||c>this.min).width(a.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,c===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=k("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":c}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==c&&(this.oldValue=c,this._trigger("change")),c===this.options.max&&this._trigger("complete")
}}),k.widget("ui.selectmenu",[k.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var a=this.element.uniqueId().attr("id");
this.ids={element:a,button:a+"-button",menu:a+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=k()
},_drawButton:function(){var d,a=this,c=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(e){this.button.focus(),e.preventDefault()
}}),this.element.hide(),this.button=k("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),d=k("<span>").appendTo(this.button),this._addClass(d,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(c).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){a._rendered||a._refreshMenu()
})
},_drawMenu:function(){var a=this;
this.menu=k("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=k("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(d,c){d.preventDefault(),a._setSelection(),a._select(c.item.data("ui-selectmenu-item"),d)
},focus:function(d,c){var e=c.item.data("ui-selectmenu-item");
null!=a.focusIndex&&e.index!==a.focusIndex&&(a._trigger("focus",d,{item:e}),a.isOpen||a._select(e,d)),a.focusIndex=e.index,a.button.attr("aria-activedescendant",a.menuItems.eq(e.index).attr("id"))
}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return !1
},this.menuInstance._isDivider=function(){return !1
}
},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()
},_refreshMenu:function(){var a,c=this.element.find("option");
this.menu.empty(),this._parseOptions(c),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,c.length&&(a=this._getSelectedItem(),this.menuInstance.focus(null,a),this._setAria(a.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))
},open:function(a){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a)))
},_position:function(){this.menuWrap.position(k.extend({of:this.button},this.options.position))
},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderButtonItem:function(c){var a=k("<span>");
return this._setText(a,c.label),this._addClass(a,"ui-selectmenu-text"),a
},_renderMenu:function(d,a){var c=this,f="";
k.each(a,function(g,h){var e;
h.optgroup!==f&&(e=k("<li>",{text:h.optgroup}),c._addClass(e,"ui-selectmenu-optgroup","ui-menu-divider"+(h.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),e.appendTo(d),f=h.optgroup),c._renderItemData(d,h)
})
},_renderItemData:function(a,c){return this._renderItem(a,c).data("ui-selectmenu-item",c)
},_renderItem:function(d,a){var c=k("<li>"),f=k("<div>",{title:a.element.attr("title")});
return a.disabled&&this._addClass(c,null,"ui-state-disabled"),this._setText(f,a.label),c.append(f).appendTo(d)
},_setText:function(a,c){c?a.text(c):a.html("&#160;")
},_move:function(c,f){var a,d,g=".ui-menu-item";
this.isOpen?a=this.menuItems.eq(this.focusIndex).parent("li"):(a=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),g+=":not(.ui-state-disabled)"),d="first"===c||"last"===c?a["first"===c?"prevAll":"nextAll"](g).eq(-1):a[c+"All"](g).eq(0),d.length&&this.menuInstance.focus(f,d)
},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
},_toggle:function(a){this[this.isOpen?"close":"open"](a)
},_setSelection:function(){var a;
this.range&&(window.getSelection?(a=window.getSelection(),a.removeAllRanges(),a.addRange(this.range)):this.range.select(),this.button.focus())
},_documentClick:{mousedown:function(a){this.isOpen&&(k(a.target).closest(".ui-selectmenu-menu, #"+k.ui.escapeSelector(this.ids.button)).length||this.close(a))
}},_buttonEvents:{mousedown:function(){var a;
window.getSelection?(a=window.getSelection(),a.rangeCount&&(this.range=a.getRangeAt(0))):this.range=document.selection.createRange()
},click:function(a){this._setSelection(),this._toggle(a)
},keydown:function(c){var a=!0;
switch(c.keyCode){case k.ui.keyCode.TAB:case k.ui.keyCode.ESCAPE:this.close(c),a=!1;
break;
case k.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(c);
break;
case k.ui.keyCode.UP:c.altKey?this._toggle(c):this._move("prev",c);
break;
case k.ui.keyCode.DOWN:c.altKey?this._toggle(c):this._move("next",c);
break;
case k.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(c):this._toggle(c);
break;
case k.ui.keyCode.LEFT:this._move("prev",c);
break;
case k.ui.keyCode.RIGHT:this._move("next",c);
break;
case k.ui.keyCode.HOME:case k.ui.keyCode.PAGE_UP:this._move("first",c);
break;
case k.ui.keyCode.END:case k.ui.keyCode.PAGE_DOWN:this._move("last",c);
break;
default:this.menu.trigger(c),a=!1
}a&&c.preventDefault()
}},_selectFocusedItem:function(a){var c=this.menuItems.eq(this.focusIndex).parent("li");
c.hasClass("ui-state-disabled")||this._select(c.data("ui-selectmenu-item"),a)
},_select:function(c,d){var a=this.element[0].selectedIndex;
this.element[0].selectedIndex=c.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(c)),this._setAria(c),this._trigger("select",d,{item:c}),c.index!==a&&this._trigger("change",d,{item:c}),this.close(d)
},_setAria:function(a){var c=this.menuItems.eq(a.index).attr("id");
this.button.attr({"aria-labelledby":c,"aria-activedescendant":c}),this.menu.attr("aria-activedescendant",c)
},_setOption:function(c,d){if("icons"===c){var a=this.button.find("span.ui-icon");
this._removeClass(a,null,this.options.icons.button)._addClass(a,null,d.button)
}this._super(c,d),"appendTo"===c&&this.menuWrap.appendTo(this._appendTo()),"width"===c&&this._resizeButton()
},_setOptionDisabled:function(a){this._super(a),this.menuInstance.option("disabled",a),this.button.attr("aria-disabled",a),this._toggleClass(this.button,null,"ui-state-disabled",a),this.element.prop("disabled",a),a?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?k(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a
},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var a=this.options.width;
return a===!1?(this.button.css("width",""),void 0):(null===a&&(a=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(a),void 0)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){var a=this._super();
return a.disabled=this.element.prop("disabled"),a
},_parseOptions:function(d){var a=this,c=[];
d.each(function(f,g){c.push(a._parseOption(k(g),f))
}),this.items=c
},_parseOption:function(c,d){var a=c.parent("optgroup");
return{element:c,index:d,value:c.val(),label:c.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||c.prop("disabled")}
},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)
}}]),k.widget("ui.slider",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var g,d,f=this.options,l=this.element.find(".ui-slider-handle"),h="<span tabindex='0'></span>",c=[];
for(d=f.values&&f.values.length||1,l.length>d&&(l.slice(d).remove(),l=l.slice(0,d)),g=l.length;
d>g;
g++){c.push(h)
}this.handles=l.add(k(c.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(a){k(this).data("ui-slider-handle-index",a).attr("tabIndex",0)
})
},_createRange:function(){var a=this.options;
a.range?(a.range===!0&&(a.values?a.values.length&&2!==a.values.length?a.values=[a.values[0],a.values[0]]:k.isArray(a.values)&&(a.values=a.values.slice(0)):a.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=k("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===a.range||"max"===a.range)&&this._addClass(this.range,"ui-slider-range-"+a.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()
},_mouseCapture:function(v){var p,O,g,f,M,d,t,m,L=this,N=this.options;
return N.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),p={x:v.pageX,y:v.pageY},O=this._normValueFromMouse(p),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(c){var a=Math.abs(O-L.values(c));
(g>a||g===a&&(c===L._lastChangedValue||L.values(c)===N.min))&&(g=a,f=k(this),M=c)
}),d=this._start(v,M),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=M,this._addClass(f,null,"ui-state-active"),f.trigger("focus"),t=f.offset(),m=!k(v.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=m?{left:0,top:0}:{left:v.pageX-t.left-f.width()/2,top:v.pageY-t.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(v,M,O),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(c){var d={x:c.pageX,y:c.pageY},a=this._normValueFromMouse(d);
return this._slide(c,this._handleIndex,a),!1
},_mouseStop:function(a){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(c){var f,a,d,h,g;
return"horizontal"===this.orientation?(f=this.elementSize.width,a=c.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(f=this.elementSize.height,a=c.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=a/f,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),h=this._valueMax()-this._valueMin(),g=this._valueMin()+d*h,this._trimAlignValue(g)
},_uiHash:function(c,f,a){var d={handle:this.handles[c],handleIndex:c,value:void 0!==f?f:this.value()};
return this._hasMultipleValues()&&(d.value=void 0!==f?f:this.values(c),d.values=a||this.values()),d
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(a,c){return this._trigger("start",a,this._uiHash(c))
},_slide:function(f,h,d){var g,m,l=this.value(),c=this.values();
this._hasMultipleValues()&&(m=this.values(h?0:1),l=this.values(h),2===this.options.values.length&&this.options.range===!0&&(d=0===h?Math.min(m,d):Math.max(m,d)),c[h]=d),d!==l&&(g=this._trigger("slide",f,this._uiHash(h,d,c)),g!==!1&&(this._hasMultipleValues()?this.values(h,d):this.value(d)))
},_stop:function(a,c){this._trigger("stop",a,this._uiHash(c))
},_change:function(a,c){this._keySliding||this._mouseSliding||(this._lastChangedValue=c,this._trigger("change",a,this._uiHash(c)))
},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0),void 0):this._value()
},values:function(d,a){var c,g,f;
if(arguments.length>1){return this.options.values[d]=this._trimAlignValue(a),this._refreshValue(),this._change(null,d),void 0
}if(!arguments.length){return this._values()
}if(!k.isArray(arguments[0])){return this._hasMultipleValues()?this._values(d):this.value()
}for(c=this.options.values,g=arguments[0],f=0;
c.length>f;
f+=1){c[f]=this._trimAlignValue(g[f]),this._change(null,f)
}this._refreshValue()
},_setOption:function(d,a){var c,f=0;
switch("range"===d&&this.options.range===!0&&("min"===a?(this.options.value=this._values(0),this.options.values=null):"max"===a&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),k.isArray(this.options.values)&&(f=this.options.values.length),this._super(d,a),d){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(a),this.handles.css("horizontal"===a?"bottom":"left","");
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),c=f-1;
c>=0;
c--){this._change(null,c)
}this._animateOff=!1;
break;
case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_setOptionDisabled:function(a){this._super(a),this._toggleClass(null,"ui-state-disabled",!!a)
},_value:function(){var a=this.options.value;
return a=this._trimAlignValue(a)
},_values:function(c){var f,a,d;
if(arguments.length){return f=this.options.values[c],f=this._trimAlignValue(f)
}if(this._hasMultipleValues()){for(a=this.options.values.slice(),d=0;
a.length>d;
d+=1){a[d]=this._trimAlignValue(a[d])
}return a
}return[]
},_trimAlignValue:function(c){if(this._valueMin()>=c){return this._valueMin()
}if(c>=this._valueMax()){return this._valueMax()
}var f=this.options.step>0?this.options.step:1,a=(c-this._valueMin())%f,d=c-a;
return 2*Math.abs(a)>=f&&(d+=a>0?f:-f),parseFloat(d.toFixed(5))
},_calculateNewMax:function(){var c=this.options.max,f=this._valueMin(),a=this.options.step,d=Math.round((c-f)/a)*a;
c=d+f,c>this.options.max&&(c-=a),this.max=parseFloat(c.toFixed(this._precision()))
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var d=""+c,a=d.indexOf(".");
return -1===a?0:d.length-a-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(a){"vertical"===a&&this.range.css({width:"",left:""}),"horizontal"===a&&this.range.css({height:"",bottom:""})
},_refreshValue:function(){var u,p,M,g,f,L=this.options.range,d=this.options,t=this,m=this._animateOff?!1:d.animate,v={};
this._hasMultipleValues()?this.handles.each(function(a){p=100*((t.values(a)-t._valueMin())/(t._valueMax()-t._valueMin())),v["horizontal"===t.orientation?"left":"bottom"]=p+"%",k(this).stop(1,1)[m?"animate":"css"](v,d.animate),t.options.range===!0&&("horizontal"===t.orientation?(0===a&&t.range.stop(1,1)[m?"animate":"css"]({left:p+"%"},d.animate),1===a&&t.range[m?"animate":"css"]({width:p-u+"%"},{queue:!1,duration:d.animate})):(0===a&&t.range.stop(1,1)[m?"animate":"css"]({bottom:p+"%"},d.animate),1===a&&t.range[m?"animate":"css"]({height:p-u+"%"},{queue:!1,duration:d.animate}))),u=p
}):(M=this.value(),g=this._valueMin(),f=this._valueMax(),p=f!==g?100*((M-g)/(f-g)):0,v["horizontal"===this.orientation?"left":"bottom"]=p+"%",this.handle.stop(1,1)[m?"animate":"css"](v,d.animate),"min"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:p+"%"},d.animate),"max"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:100-p+"%"},d.animate),"min"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:p+"%"},d.animate),"max"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:100-p+"%"},d.animate))
},_handleEvents:{keydown:function(g){var d,f,l,h,c=k(g.target).data("ui-slider-handle-index");
switch(g.keyCode){case k.ui.keyCode.HOME:case k.ui.keyCode.END:case k.ui.keyCode.PAGE_UP:case k.ui.keyCode.PAGE_DOWN:case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(g.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(k(g.target),null,"ui-state-active"),d=this._start(g,c),d===!1)){return
}}switch(h=this.options.step,f=l=this._hasMultipleValues()?this.values(c):this.value(),g.keyCode){case k.ui.keyCode.HOME:l=this._valueMin();
break;
case k.ui.keyCode.END:l=this._valueMax();
break;
case k.ui.keyCode.PAGE_UP:l=this._trimAlignValue(f+(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.PAGE_DOWN:l=this._trimAlignValue(f-(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}l=this._trimAlignValue(f+h);
break;
case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(f===this._valueMin()){return
}l=this._trimAlignValue(f-h)
}this._slide(g,c,l)
},keyup:function(c){var a=k(c.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(c,a),this._change(c,a),this._removeClass(k(c.target),null,"ui-state-active"))
}}}),k.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c=this._super(),a=this.element;
return k.each(["min","max","step"],function(d,e){var f=a.attr(e);
null!=f&&f.length&&(c[e]=f)
}),c
},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()
},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",a),void 0)
},mousewheel:function(a,c){if(c){if(!this.spinning&&!this._start(a)){return !1
}this._spin((c>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)
},100),a.preventDefault()
}},"mousedown .ui-spinner-button":function(d){function a(){var f=this.element[0]===k.ui.safeActiveElement(this.document[0]);
f||(this.element.trigger("focus"),this.previous=c,this._delay(function(){this.previous=c
}))
}var c;
c=this.element[0]===k.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),d.preventDefault(),a.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,a.call(this)
}),this._start(d)!==!1&&this._repeat(null,k(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){return k(a.currentTarget).hasClass("ui-state-active")?this._start(a)===!1?!1:(this._repeat(null,k(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a),void 0):void 0
},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")
},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(0.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())
},_keydown:function(d){var a=this.options,c=k.ui.keyCode;
switch(d.keyCode){case c.UP:return this._repeat(null,1,d),!0;
case c.DOWN:return this._repeat(null,-1,d),!0;
case c.PAGE_UP:return this._repeat(null,a.page,d),!0;
case c.PAGE_DOWN:return this._repeat(null,-a.page,d),!0
}return !1
},_start:function(a){return this.spinning||this._trigger("start",a)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1
},_repeat:function(c,d,a){c=c||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,d,a)
},c),this._spin(d*this.options.step,a)
},_spin:function(c,d){var a=this.value()||0;
this.counter||(this.counter=1),a=this._adjustValue(a+c*this._increment(this.counter)),this.spinning&&this._trigger("spin",d,{value:a})===!1||(this._value(a),this.counter++)
},_increment:function(c){var a=this.options.incremental;
return a?k.isFunction(a)?a(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1):1
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var d=""+c,a=d.indexOf(".");
return -1===a?0:d.length-a-1
},_adjustValue:function(c){var f,a,d=this.options;
return f=null!==d.min?d.min:0,a=c-f,a=Math.round(a/d.step)*d.step,c=f+a,c=parseFloat(c.toFixed(this._precision())),null!==d.max&&c>d.max?d.max:null!==d.min&&d.min>c?d.min:c
},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))
},_setOption:function(c,f){var a,d,g;
return"culture"===c||"numberFormat"===c?(a=this._parse(this.element.val()),this.options[c]=f,this.element.val(this._format(a)),void 0):(("max"===c||"min"===c||"step"===c)&&"string"==typeof f&&(f=this._parse(f)),"icons"===c&&(d=this.buttons.first().find(".ui-icon"),this._removeClass(d,null,this.options.icons.up),this._addClass(d,null,f.up),g=this.buttons.last().find(".ui-icon"),this._removeClass(g,null,this.options.icons.down),this._addClass(g,null,f.down)),this._super(c,f),void 0)
},_setOptionDisabled:function(a){this._super(a),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!a),this.element.prop("disabled",!!a),this.buttons.button(a?"disable":"enable")
},_setOptions:w(function(a){this._super(a)
}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a
},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var a=this.value();
return null===a?!1:a===this._adjustValue(a)
},_value:function(c,d){var a;
""!==c&&(a=this._parse(c),null!==a&&(d||(a=this._adjustValue(a)),c=this._format(a))),this.element.val(c),this._refresh()
},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)
},stepUp:w(function(a){this._stepUp(a)
}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())
},stepDown:w(function(a){this._stepDown(a)
}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())
},pageUp:w(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:w(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){return arguments.length?(w(this._value).call(this,a),void 0):this._parse(this.element.val())
},widget:function(){return this.uiSpinner
}}),k.uiBackCompat!==!1&&k.widget("ui.spinner",k.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
},_uiSpinnerHtml:function(){return"<span>"
},_buttonHtml:function(){return"<a></a><a></a>"
}}),k.ui.spinner,k.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;
return function(f){var c,d;
c=f.href.replace(a,""),d=location.href.replace(a,"");
try{c=decodeURIComponent(c)
}catch(g){}try{d=decodeURIComponent(d)
}catch(g){}return f.hash.length>1&&c===d
}
}(),_create:function(){var c=this,a=this.options;
this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,a.collapsible),this._processTabs(),a.active=this._initialActive(),k.isArray(a.disabled)&&(a.disabled=k.unique(a.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"),function(d){return c.tabs.index(d)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):k(),this._refresh(),this.active.length&&this.load(a.active)
},_initialActive:function(){var d=this.options.active,a=this.options.collapsible,c=location.hash.substring(1);
return null===d&&(c&&this.tabs.each(function(e,f){return k(f).attr("aria-controls")===c?(d=e,!1):void 0
}),null===d&&(d=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===d||-1===d)&&(d=this.tabs.length?0:!1)),d!==!1&&(d=this.tabs.index(this.tabs.eq(d)),-1===d&&(d=a?!1:0)),!a&&d===!1&&this.anchors.length&&(d=0),d
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):k()}
},_tabKeydown:function(d){var a=k(k.ui.safeActiveElement(this.document[0])).closest("li"),c=this.tabs.index(a),f=!0;
if(!this._handlePageNav(d)){switch(d.keyCode){case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:c++;
break;
case k.ui.keyCode.UP:case k.ui.keyCode.LEFT:f=!1,c--;
break;
case k.ui.keyCode.END:c=this.anchors.length-1;
break;
case k.ui.keyCode.HOME:c=0;
break;
case k.ui.keyCode.SPACE:return d.preventDefault(),clearTimeout(this.activating),this._activate(c),void 0;
case k.ui.keyCode.ENTER:return d.preventDefault(),clearTimeout(this.activating),this._activate(c===this.options.active?!1:c),void 0;
default:return
}d.preventDefault(),clearTimeout(this.activating),c=this._focusNextTab(c,f),d.ctrlKey||d.metaKey||(a.attr("aria-selected","false"),this.tabs.eq(c).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",c)
},this.delay))
}},_panelKeydown:function(a){this._handlePageNav(a)||a.ctrlKey&&a.keyCode===k.ui.keyCode.UP&&(a.preventDefault(),this.active.trigger("focus"))
},_handlePageNav:function(a){return a.altKey&&a.keyCode===k.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===k.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0
},_findNextTab:function(d,a){function c(){return d>f&&(d=0),0>d&&(d=f),d
}for(var f=this.tabs.length-1;
-1!==k.inArray(c(),this.options.disabled);
){d=a?d+1:d-1
}return d
},_focusNextTab:function(a,c){return a=this._findNextTab(a,c),this.tabs.eq(a).trigger("focus"),a
},_setOption:function(a,c){return"active"===a?(this._activate(c),void 0):(this._super(a,c),"collapsible"===a&&(this._toggleClass("ui-tabs-collapsible",null,c),c||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(c),"heightStyle"===a&&this._setupHeightStyle(c),void 0)
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var c=this.options,a=this.tablist.children(":has(a[href])");
c.disabled=k.map(a.filter(".ui-state-disabled"),function(d){return a.index(d)
}),this._processTabs(),c.active!==!1&&this.anchors.length?this.active.length&&!k.contains(this.tablist[0],this.active[0])?this.tabs.length===c.disabled.length?(c.active=!1,this.active=k()):this._activate(this._findNextTab(Math.max(0,c.active-1),!1)):c.active=this.tabs.index(this.active):(c.active=!1,this.active=k()),this._refresh()
},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var d=this,a=this.tabs,c=this.anchors,f=this.panels;
this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(g){k(this).is(".ui-state-disabled")&&g.preventDefault()
}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){k(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return k("a",this)[0]
}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=k(),this.anchors.each(function(m,t){var L,v,g,u=k(t).uniqueId().attr("id"),p=k(t).closest("li"),e=p.attr("aria-controls");
d._isLocal(t)?(L=t.hash,g=L.substring(1),v=d.element.find(d._sanitizeSelector(L))):(g=p.attr("aria-controls")||k({}).uniqueId()[0].id,L="#"+g,v=d.element.find(L),v.length||(v=d._createPanel(g),v.insertAfter(d.panels[m-1]||d.tablist)),v.attr("aria-live","polite")),v.length&&(d.panels=d.panels.add(v)),e&&p.data("ui-tabs-aria-controls",e),p.attr({"aria-controls":g,"aria-labelledby":u}),v.attr("aria-labelledby",u)
}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),a&&(this._off(a.not(this.tabs)),this._off(c.not(this.anchors)),this._off(f.not(this.panels)))
},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)
},_createPanel:function(a){return k("<div>").attr("id",a).data("ui-tabs-destroy",!0)
},_setOptionDisabled:function(d){var a,c,f;
for(k.isArray(d)&&(d.length?d.length===this.anchors.length&&(d=!0):d=!1),f=0;
c=this.tabs[f];
f++){a=k(c),d===!0||-1!==k.inArray(f,d)?(a.attr("aria-disabled","true"),this._addClass(a,null,"ui-state-disabled")):(a.removeAttr("aria-disabled"),this._removeClass(a,null,"ui-state-disabled"))
}this.options.disabled=d,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,d===!0)
},_setupEvents:function(c){var a={};
c&&k.each(c.split(" "),function(d,f){a[f]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(d){d.preventDefault()
}}),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(d){var a,c=this.element.parent();
"fill"===d?(a=c.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var g=k(this),f=g.css("position");
"absolute"!==f&&"fixed"!==f&&(a-=g.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){a-=k(this).outerHeight(!0)
}),this.panels.each(function(){k(this).height(Math.max(0,a-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===d&&(a=0,this.panels.each(function(){a=Math.max(a,k(this).height("").height())
}).height(a))
},_eventHandler:function(u){var p=this.options,M=this.active,g=k(u.currentTarget),f=g.closest("li"),L=f[0]===M[0],d=L&&p.collapsible,t=d?k():this._getPanelForTab(f),m=M.length?this._getPanelForTab(M):k(),v={oldTab:M,oldPanel:m,newTab:d?k():f,newPanel:t};
u.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||L&&!p.collapsible||this._trigger("beforeActivate",u,v)===!1||(p.active=d?!1:this.tabs.index(f),this.active=L?k():f,this.xhr&&this.xhr.abort(),m.length||t.length||k.error("jQuery UI Tabs: Mismatching fragment identifier."),t.length&&this.load(this.tabs.index(f),u),this._toggle(u,v))
},_toggle:function(h,d){function f(){l.running=!1,l._trigger("activate",h,d)
}function m(){l._addClass(d.newTab.closest("li"),"ui-tabs-active","ui-state-active"),c.length&&l.options.show?l._show(c,l.options.show,f):(c.show(),f())
}var l=this,c=d.newPanel,g=d.oldPanel;
this.running=!0,g.length&&this.options.hide?this._hide(g,this.options.hide,function(){l._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),m()
}):(this._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),g.hide(),m()),g.attr("aria-hidden","true"),d.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&g.length?d.oldTab.attr("tabIndex",-1):c.length&&this.tabs.filter(function(){return 0===k(this).attr("tabIndex")
}).attr("tabIndex",-1),c.attr("aria-hidden","false"),d.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(d){var a,c=this._findActive(d);
c[0]!==this.active[0]&&(c.length||(c=this.active),a=c.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:k.noop}))
},_findActive:function(a){return a===!1?k():this.tabs.eq(a)
},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+k.ui.escapeSelector(a)+"']"))),a
},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){k.data(this,"ui-tabs-destroy")?k(this).remove():k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
}),this.tabs.each(function(){var c=k(this),a=c.data("ui-tabs-aria-controls");
a?c.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):c.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(c){var a=this.options.disabled;
a!==!1&&(void 0===c?a=!1:(c=this._getIndex(c),a=k.isArray(a)?k.map(a,function(d){return d!==c?d:null
}):k.map(this.tabs,function(e,d){return d!==c?d:null
})),this._setOptionDisabled(a))
},disable:function(c){var a=this.options.disabled;
if(a!==!0){if(void 0===c){a=!0
}else{if(c=this._getIndex(c),-1!==k.inArray(c,a)){return
}a=k.isArray(a)?k.merge([c],a).sort():[c]
}this._setOptionDisabled(a)
}},load:function(m,d){m=this._getIndex(m);
var g=this,t=this.tabs.eq(m),p=t.find(".ui-tabs-anchor"),c=this._getPanelForTab(t),l={tab:t,panel:c},f=function(a,h){"abort"===h&&g.panels.stop(!1,!0),g._removeClass(t,"ui-tabs-loading"),c.removeAttr("aria-busy"),a===g.xhr&&delete g.xhr
};
this._isLocal(p[0])||(this.xhr=k.ajax(this._ajaxSettings(p,d,l)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(t,"ui-tabs-loading"),c.attr("aria-busy","true"),this.xhr.done(function(a,h,i){setTimeout(function(){c.html(a),g._trigger("load",d,l),f(i,h)
},1)
}).fail(function(a,h){setTimeout(function(){f(a,h)
},1)
})))
},_ajaxSettings:function(d,a,c){var f=this;
return{url:d.attr("href").replace(/#.*$/,""),beforeSend:function(g,h){return f._trigger("beforeLoad",a,k.extend({jqXHR:g,ajaxSettings:h},c))
}}
},_getPanelForTab:function(c){var a=k(c).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}}),k.uiBackCompat!==!1&&k.widget("ui.tabs",k.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")
}}),k.ui.tabs,k.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var a=k(this).attr("title")||"";
return k("<a>").text(a).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(d,a){var c=(d.attr("aria-describedby")||"").split(/\s+/);
c.push(a),d.data("ui-tooltip-id",a).attr("aria-describedby",k.trim(c.join(" ")))
},_removeDescribedBy:function(d){var a=d.data("ui-tooltip-id"),c=(d.attr("aria-describedby")||"").split(/\s+/),f=k.inArray(a,c);
-1!==f&&c.splice(f,1),d.removeData("ui-tooltip-id"),c=k.trim(c.join(" ")),c?d.attr("aria-describedby",c):d.removeAttr("aria-describedby")
},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=k("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=k([])
},_setOption:function(d,a){var c=this;
this._super(d,a),"content"===d&&k.each(this.tooltips,function(f,g){c._updateContent(g.element)
})
},_setOptionDisabled:function(a){this[a?"_disable":"_enable"]()
},_disable:function(){var a=this;
k.each(this.tooltips,function(c,d){var e=k.Event("blur");
e.target=e.currentTarget=d.element[0],a.close(e,!0)
}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var c=k(this);
return c.is("[title]")?c.data("ui-tooltip-title",c.attr("title")).removeAttr("title"):void 0
}))
},_enable:function(){this.disabledTitles.each(function(){var a=k(this);
a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title"))
}),this.disabledTitles=k([])
},open:function(d){var a=this,c=k(d?d.target:this.element).closest(this.options.items);
c.length&&!c.data("ui-tooltip-id")&&(c.attr("title")&&c.data("ui-tooltip-title",c.attr("title")),c.data("ui-tooltip-open",!0),d&&"mouseover"===d.type&&c.parents().each(function(){var g,f=k(this);
f.data("ui-tooltip-open")&&(g=k.Event("blur"),g.target=g.currentTarget=this,a.close(g,!0)),f.attr("title")&&(f.uniqueId(),a.parents[this.id]={element:this,title:f.attr("title")},f.attr("title",""))
}),this._registerCloseHandlers(d,c),this._updateContent(c,d))
},_updateContent:function(c,f){var a,d=this.options.content,h=this,g=f?f.type:null;
return"string"==typeof d||d.nodeType||d.jquery?this._open(f,c,d):(a=d.call(c[0],function(e){h._delay(function(){c.data("ui-tooltip-open")&&(f&&(f.type=g),this._open(f,c,e))
})
}),a&&this._open(f,c,a),void 0)
},_open:function(t,m,v){function f(a){g.of=a,u.is(":hidden")||u.position(g)
}var d,u,c,p,g=k.extend({},this.options.position);
if(v){if(d=this._find(m)){return d.tooltip.find(".ui-tooltip-content").html(v),void 0
}m.is("[title]")&&(t&&"mouseover"===t.type?m.attr("title",""):m.removeAttr("title")),d=this._tooltip(m),u=d.tooltip,this._addDescribedBy(m,u.attr("id")),u.find(".ui-tooltip-content").html(v),this.liveRegion.children().hide(),p=k("<div>").html(u.find(".ui-tooltip-content").html()),p.removeAttr("name").find("[name]").removeAttr("name"),p.removeAttr("id").find("[id]").removeAttr("id"),p.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):u.position(k.extend({of:m},this.options.position)),u.hide(),this._show(u,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(c=this.delayedShow=setInterval(function(){u.is(":visible")&&(f(g.of),clearInterval(c))
},k.fx.interval)),this._trigger("open",t,{tooltip:u})
}},_registerCloseHandlers:function(d,a){var c={keyup:function(g){if(g.keyCode===k.ui.keyCode.ESCAPE){var f=k.Event(g);
f.currentTarget=a[0],this.close(f,!0)
}}};
a[0]!==this.element[0]&&(c.remove=function(){this._removeTooltip(this._find(a).tooltip)
}),d&&"mouseover"!==d.type||(c.mouseleave="close"),d&&"focusin"!==d.type||(c.focusout="close"),this._on(!0,a,c)
},close:function(d){var a,c=this,g=k(d?d.currentTarget:this.element),f=this._find(g);
return f?(a=f.tooltip,f.closing||(clearInterval(this.delayedShow),g.data("ui-tooltip-title")&&!g.attr("title")&&g.attr("title",g.data("ui-tooltip-title")),this._removeDescribedBy(g),f.hiding=!0,a.stop(!0),this._hide(a,this.options.hide,function(){c._removeTooltip(k(this))
}),g.removeData("ui-tooltip-open"),this._off(g,"mouseleave focusout keyup"),g[0]!==this.element[0]&&this._off(g,"remove"),this._off(this.document,"mousemove"),d&&"mouseleave"===d.type&&k.each(this.parents,function(l,h){k(h.element).attr("title",h.title),delete c.parents[l]
}),f.closing=!0,this._trigger("close",d,{tooltip:a}),f.hiding||(f.closing=!1)),void 0):(g.removeData("ui-tooltip-open"),void 0)
},_tooltip:function(d){var a=k("<div>").attr("role","tooltip"),c=k("<div>").appendTo(a),f=a.uniqueId().attr("id");
return this._addClass(c,"ui-tooltip-content"),this._addClass(a,"ui-tooltip","ui-widget ui-widget-content"),a.appendTo(this._appendTo(d)),this.tooltips[f]={element:d,tooltip:a}
},_find:function(a){var c=a.data("ui-tooltip-id");
return c?this.tooltips[c]:null
},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]
},_appendTo:function(a){var c=a.closest(".ui-front, dialog");
return c.length||(c=this.document[0].body),c
},_destroy:function(){var a=this;
k.each(this.tooltips,function(c,d){var f=k.Event("blur"),e=d.element;
f.target=f.currentTarget=e[0],a.close(f,!0),k("#"+c).remove(),e.data("ui-tooltip-title")&&(e.attr("title")||e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))
}),this.liveRegion.remove()
}}),k.uiBackCompat!==!1&&k.widget("ui.tooltip",k.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var a=this._superApply(arguments);
return this.options.tooltipClass&&a.tooltip.addClass(this.options.tooltipClass),a
}}),k.ui.tooltip;
var F="ui-effects-",E="ui-effects-style",A="ui-effects-animated",K=k;
k.effects={effect:{}},function(V,Q){function N(c,f,a){var d=U[f.type]||{};
return null==c?a||!f.def?null:f.def:(c=d.floor?~~c:parseFloat(c),isNaN(c)?f.def:d.mod?(c+d.mod)%d.mod:0>c?0:c>d.max?d.max:c)
}function W(a){var c=M(),d=c._rgba=[];
return a=a.toLowerCase(),P(O,function(i,s){var f,p=s.re.exec(a),n=p&&s.parse(p),e=s.space||"rgba";
return n?(f=c[e](n),c[S[e].cache]=f[S[e].cache],d=c._rgba=f._rgba,!1):Q
}),d.length?("0,0,0,0"===d.join()&&V.extend(d,v.transparent),c):v[a]
}function L(c,d,a){return a=(a+1)%1,1>6*a?c+6*(d-c)*a:1>2*a?d:2>3*a?c+6*(d-c)*(2/3-a):c
}var v,T="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",g=/^([\-+])=\s*(\d+\.?\d*)/,O=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]
}}],M=V.Color=function(d,a,c,f){return new V.Color.fn.parse(d,a,c,f)
},S={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},U={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},R=M.support={},m=V("<p>")[0],P=V.each;
m.style.cssText="background-color:rgba(1,1,1,.5)",R.rgba=m.style.backgroundColor.indexOf("rgba")>-1,P(S,function(a,c){c.cache="_"+a,c.props.alpha={idx:3,type:"percent",def:1}
}),M.fn=V.extend(M.prototype,{parse:function(s,c,i,f){if(s===Q){return this._rgba=[null,null,null,null],this
}(s.jquery||s.nodeType)&&(s=V(s).css(c),c=Q);
var e=this,o=V.type(s),l=this._rgba=[];
return c!==Q&&(s=[s,c,i,f],o="array"),"string"===o?this.parse(W(s)||v._default):"array"===o?(P(S.rgba.props,function(a,d){l[d.idx]=N(s[d.idx],d)
}),this):"object"===o?(s instanceof M?P(S,function(a,d){s[d.cache]&&(e[d.cache]=s[d.cache].slice())
}):P(S,function(d,a){var h=a.cache;
P(a.props,function(n,p){if(!e[h]&&a.to){if("alpha"===n||null==s[n]){return
}e[h]=a.to(e._rgba)
}e[h][p.idx]=N(s[n],p,!0)
}),e[h]&&0>V.inArray(null,e[h].slice(0,3))&&(e[h][3]=1,a.from&&(e._rgba=a.from(e[h])))
}),this):Q
},is:function(c){var a=M(c),d=!0,e=this;
return P(S,function(h,l){var f,i=a[l.cache];
return i&&(f=e[l.cache]||l.to&&l.to(e._rgba)||[],P(l.props,function(o,n){return null!=i[n.idx]?d=i[n.idx]===f[n.idx]:Q
})),d
}),d
},_space:function(){var a=[],c=this;
return P(S,function(d,e){c[e.cache]&&a.push(d)
}),a.pop()
},transition:function(d,p){var i=M(d),X=i._space(),u=S[X],c=0===this.alpha()?M("transparent"):this,l=c[u.cache]||u.to(c._rgba),f=l.slice();
return i=i[u.cache],P(u.props,function(r,Z){var s=Z.idx,h=l[s],e=i[s],Y=U[Z.type]||{};
null!==e&&(null===h?f[s]=e:(Y.mod&&(e-h>Y.mod/2?h+=Y.mod:h-e>Y.mod/2&&(h-=Y.mod)),f[s]=N((e-h)*p+h,Z)))
}),this[X](f)
},blend:function(d){if(1===this._rgba[3]){return this
}var a=this._rgba.slice(),c=a.pop(),f=M(d)._rgba;
return M(V.map(a,function(h,i){return(1-c)*f[i]+c*h
}))
},toRgbaString:function(){var c="rgba(",a=V.map(this._rgba,function(d,f){return null==d?f>2?1:0:d
});
return 1===a[3]&&(a.pop(),c="rgb("),c+a.join()+")"
},toHslaString:function(){var c="hsla(",a=V.map(this.hsla(),function(d,f){return null==d&&(d=f>2?1:0),f&&3>f&&(d=Math.round(100*d)+"%"),d
});
return 1===a[3]&&(a.pop(),c="hsl("),c+a.join()+")"
},toHexString:function(d){var a=this._rgba.slice(),c=a.pop();
return d&&a.push(~~(255*c)),"#"+V.map(a,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e
}).join("")
},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()
}}),M.fn.parse.prototype=M.fn,S.hsla.to=function(ae){if(null==ae[0]||null==ae[1]||null==ae[2]){return[null,null,null,ae[3]]
}var aa,Y,af=ae[0]/255,p=ae[1]/255,f=ae[2]/255,ac=ae[3],d=Math.max(af,p,f),Z=Math.min(af,p,f),X=d-Z,ab=d+Z,ad=0.5*ab;
return aa=Z===d?0:af===d?60*(p-f)/X+360:p===d?60*(f-af)/X+120:60*(af-p)/X+240,Y=0===X?0:0.5>=ad?X/ab:X/(2-ab),[Math.round(aa)%360,Y,ad,null==ac?1:ac]
},S.hsla.from=function(f){if(null==f[0]||null==f[1]||null==f[2]){return[null,null,null,f[3]]
}var n=f[0]/360,d=f[1],h=f[2],p=f[3],c=0.5>=h?h*(1+d):h+d-h*d,l=2*h-c;
return[Math.round(255*L(l,c,n+1/3)),Math.round(255*L(l,c,n)),Math.round(255*L(l,c,n-1/3)),p]
},P(S,function(f,p){var i=p.props,d=p.cache,e=p.to,l=p.from;
M.fn[f]=function(c){if(e&&!this[d]&&(this[d]=e(this._rgba)),c===Q){return this[d].slice()
}var t,h=V.type(c),a="array"===h||"object"===h?c:arguments,o=this[d].slice();
return P(i,function(n,u){var r=a["object"===h?n:u.idx];
null==r&&(r=o[u.idx]),o[u.idx]=N(r,u)
}),l?(t=M(l(o)),t[d]=o,t):M(o)
},P(i,function(c,a){M.fn[c]||(M.fn[c]=function(Y){var u,s=V.type(Y),t="alpha"===c?this._hsla?"hsla":"rgba":f,r=this[t](),X=r[a.idx];
return"undefined"===s?X:("function"===s&&(Y=Y.call(this,X),s=V.type(Y)),null==Y&&a.empty?this:("string"===s&&(u=g.exec(Y),u&&(Y=X+parseFloat(u[2])*("+"===u[1]?1:-1))),r[a.idx]=Y,this[t](r)))
})
})
}),M.hook=function(c){var a=c.split(" ");
P(a,function(f,d){V.cssHooks[d]={set:function(s,u){var t,i,p="";
if("transparent"!==u&&("string"!==V.type(u)||(t=W(u)))){if(u=M(t||u),!R.rgba&&1!==u._rgba[3]){for(i="backgroundColor"===d?s.parentNode:s;
(""===p||"transparent"===p)&&i&&i.style;
){try{p=V.css(i,"backgroundColor"),i=i.parentNode
}catch(l){}}u=u.blend(p&&"transparent"!==p?p:"_default")
}u=u.toRgbaString()
}try{s.style[d]=u
}catch(l){}}},V.fx.step[d]=function(h){h.colorInit||(h.start=M(h.elem,d),h.end=M(h.end),h.colorInit=!0),V.cssHooks[d].set(h.elem,h.start.transition(h.end,h.pos))
}
})
},M.hook(T),V.cssHooks.borderColor={expand:function(a){var c={};
return P(["Top","Right","Bottom","Left"],function(d,e){c["border"+e+"Color"]=a
}),c
}},v=V.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
}(K),function(){function d(l){var g,h,p=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,m={};
if(p&&p.length&&p[0]&&p[p[0]]){for(h=p.length;
h--;
){g=p[h],"string"==typeof p[g]&&(m[k.camelCase(g)]=p[g])
}}else{for(g in p){"string"==typeof p[g]&&(m[g]=p[g])
}}return m
}function a(m,h){var l,n,g={};
for(l in h){n=h[l],m[l]!==n&&(f[l]||(k.fx.step[l]||!isNaN(parseFloat(n)))&&(g[l]=n))
}return g
}var c=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
k.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,g){k.fx.step[g]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(K.style(e.elem,g,e.end),e.setAttr=!0)
}
}),k.fn.addBack||(k.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}),k.effects.animateClass=function(m,l,e,i){var g=k.speed(l,e,i);
return this.queue(function(){var s,n=k(this),p=n.attr("class")||"",h=g.children?n.find("*").addBack():n;
h=h.map(function(){var o=k(this);
return{el:o,start:d(this)}
}),s=function(){k.each(c,function(o,r){m[r]&&n[r+"Class"](m[r])
})
},s(),h=h.map(function(){return this.end=d(this.el[0]),this.diff=a(this.start,this.end),this
}),n.attr("class",p),h=h.map(function(){var t=this,o=k.Deferred(),r=k.extend({},g,{queue:!1,complete:function(){o.resolve(t)
}});
return this.el.animate(this.diff,r),o.promise()
}),k.when.apply(k,h.get()).done(function(){s(),k.each(arguments,function(){var o=this.el;
k.each(this.diff,function(r){o.css(r,"")
})
}),g.complete.call(n[0])
})
})
},k.fn.extend({addClass:function(g){return function(e,h,m,l){return h?k.effects.animateClass.call(this,{add:e},h,m,l):g.apply(this,arguments)
}
}(k.fn.addClass),removeClass:function(g){return function(e,h,m,l){return arguments.length>1?k.effects.animateClass.call(this,{remove:e},h,m,l):g.apply(this,arguments)
}
}(k.fn.removeClass),toggleClass:function(g){return function(h,l,p,m,e){return"boolean"==typeof l||void 0===l?p?k.effects.animateClass.call(this,l?{add:h}:{remove:h},p,m,e):g.apply(this,arguments):k.effects.animateClass.call(this,{toggle:h},l,p,m)
}
}(k.fn.toggleClass),switchClass:function(l,g,h,p,m){return k.effects.animateClass.call(this,{add:g,remove:l},h,p,m)
}})
}(),function(){function d(h,f,g,l){return k.isPlainObject(h)&&(f=h,h=h.effect),h={effect:h},null==f&&(f={}),k.isFunction(f)&&(l=f,g=null,f={}),("number"==typeof f||k.fx.speeds[f])&&(l=g,g=f,f={}),k.isFunction(g)&&(l=g,g=null),f&&k.extend(h,f),g=g||f.duration,h.duration=k.fx.off?0:"number"==typeof g?g:g in k.fx.speeds?k.fx.speeds[g]:k.fx.speeds._default,h.complete=l||f.complete,h
}function a(f){return !f||"number"==typeof f||k.fx.speeds[f]?!0:"string"!=typeof f||k.effects.effect[f]?k.isFunction(f)?!0:"object"!=typeof f||f.effect?!1:!0:!0
}function c(g,l){var f=l.outerWidth(),h=l.outerHeight(),p=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,m=p.exec(g)||["",0,f,h,0];
return{top:parseFloat(m[1])||0,right:"auto"===m[2]?f:parseFloat(m[2]),bottom:"auto"===m[3]?h:parseFloat(m[3]),left:parseFloat(m[4])||0}
}k.expr&&k.expr.filters&&k.expr.filters.animated&&(k.expr.filters.animated=function(f){return function(e){return !!k(e).data(A)||f(e)
}
}(k.expr.filters.animated)),k.uiBackCompat!==!1&&k.extend(k.effects,{save:function(g,l){for(var f=0,h=l.length;
h>f;
f++){null!==l[f]&&g.data(F+l[f],g[0].style[l[f]])
}},restore:function(g,l){for(var f,h=0,m=l.length;
m>h;
h++){null!==l[h]&&(f=g.data(F+l[h]),g.css(l[h],f))
}},setMode:function(f,g){return"toggle"===g&&(g=f.is(":hidden")?"show":"hide"),g
},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper")){return l.parent()
}var g={width:l.outerWidth(!0),height:l.outerHeight(!0),"float":l.css("float")},h=k("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),p={width:l.width(),height:l.height()},m=document.activeElement;
try{m.id
}catch(f){m=document.body
}return l.wrap(h),(l[0]===m||k.contains(l[0],m))&&k(m).trigger("focus"),h=l.parent(),"static"===l.css("position")?(h.css({position:"relative"}),l.css({position:"relative"})):(k.extend(g,{position:l.css("position"),zIndex:l.css("z-index")}),k.each(["top","left","bottom","right"],function(e,i){g[i]=l.css(i),isNaN(parseInt(g[i],10))&&(g[i]="auto")
}),l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),l.css(p),h.css(g).show()
},removeWrapper:function(g){var f=document.activeElement;
return g.parent().is(".ui-effects-wrapper")&&(g.parent().replaceWith(g),(g[0]===f||k.contains(g[0],f))&&k(f).trigger("focus")),g
}}),k.extend(k.effects,{version:"1.12.1",define:function(h,f,g){return g||(g=f,f="effect"),k.effects.effect[h]=g,k.effects.effect[h].mode=f,g
},scaledDimensions:function(g,l,f){if(0===l){return{height:0,width:0,outerHeight:0,outerWidth:0}
}var h="horizontal"!==f?(l||100)/100:1,m="vertical"!==f?(l||100)/100:1;
return{height:g.height()*m,width:g.width()*h,outerHeight:g.outerHeight()*m,outerWidth:g.outerWidth()*h}
},clipToBox:function(e){return{width:e.clip.right-e.clip.left,height:e.clip.bottom-e.clip.top,left:e.clip.left,top:e.clip.top}
},unshift:function(g,l,f){var h=g.queue();
l>1&&h.splice.apply(h,[1,0].concat(h.splice(l,f))),g.dequeue()
},saveStyle:function(e){e.data(E,e[0].style.cssText)
},restoreStyle:function(e){e[0].style.cssText=e.data(E)||"",e.removeData(E)
},mode:function(g,h){var f=g.is(":hidden");
return"toggle"===h&&(h=f?"show":"hide"),(f?"hide"===h:"show"===h)&&(h="none"),h
},getBaseline:function(g,l){var f,h;
switch(g[0]){case"top":f=0;
break;
case"middle":f=0.5;
break;
case"bottom":f=1;
break;
default:f=g[0]/l.height
}switch(g[1]){case"left":h=0;
break;
case"center":h=0.5;
break;
case"right":h=1;
break;
default:h=g[1]/l.width
}return{x:h,y:f}
},createPlaceholder:function(h){var f,g=h.css("position"),l=h.position();
return h.css({marginTop:h.css("marginTop"),marginBottom:h.css("marginBottom"),marginLeft:h.css("marginLeft"),marginRight:h.css("marginRight")}).outerWidth(h.outerWidth()).outerHeight(h.outerHeight()),/^(static|relative)/.test(g)&&(g="absolute",f=k("<"+h[0].nodeName+">").insertAfter(h).css({display:/^(inline|ruby)/.test(h.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:h.css("marginTop"),marginBottom:h.css("marginBottom"),marginLeft:h.css("marginLeft"),marginRight:h.css("marginRight"),"float":h.css("float")}).outerWidth(h.outerWidth()).outerHeight(h.outerHeight()).addClass("ui-effects-placeholder"),h.data(F+"placeholder",f)),h.css({position:g,left:l.left,top:l.top}),f
},removePlaceholder:function(g){var h=F+"placeholder",f=g.data(h);
f&&(f.remove(),g.removeData(h))
},cleanUp:function(f){k.effects.restoreStyle(f),k.effects.removePlaceholder(f)
},setTransition:function(h,f,g,l){return l=l||{},k.each(f,function(m,e){var n=h.cssUnit(e);
n[0]>0&&(l[e]=n[0]*g+n[1])
}),l
}}),k.fn.extend({effect:function(){function p(o){function l(){n.removeData(A),k.effects.cleanUp(n),"hide"===N.mode&&n.hide(),h()
}function h(){k.isFunction(t)&&t.call(n[0]),k.isFunction(o)&&o()
}var n=k(this);
N.mode=v.shift(),k.uiBackCompat===!1||f?"none"===N.mode?(n[m](),h()):g.call(n[0],N,l):(n.is(":hidden")?"hide"===m:"show"===m)?(n[m](),h()):g.call(n[0],N,h)
}var N=d.apply(this,arguments),g=k.effects.effect[N.effect],f=g.mode,L=N.queue,e=L||"fx",t=N.complete,m=N.mode,v=[],M=function(n){var h=k(this),l=k.effects.mode(h,m)||f;
h.data(A,!0),v.push(l),f&&("show"===l||l===f&&"hide"===l)&&h.show(),f&&"none"===l||k.effects.saveStyle(h),k.isFunction(n)&&n()
};
return k.fx.off||!g?m?this[m](N.duration,t):this.each(function(){t&&t.call(this)
}):L===!1?this.each(M).each(p):this.queue(e,M).queue(e,p)
},show:function(e){return function(f){if(a(f)){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="show",this.effect.call(this,g)
}
}(k.fn.show),hide:function(e){return function(f){if(a(f)){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="hide",this.effect.call(this,g)
}
}(k.fn.hide),toggle:function(e){return function(f){if(a(f)||"boolean"==typeof f){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="toggle",this.effect.call(this,g)
}
}(k.fn.toggle),cssUnit:function(h){var f=this.css(h),g=[];
return k.each(["em","px","%","pt"],function(i,l){f.indexOf(l)>0&&(g=[parseFloat(f),l])
}),g
},cssClip:function(e){return e?this.css("clip","rect("+e.top+"px "+e.right+"px "+e.bottom+"px "+e.left+"px)"):c(this.css("clip"),this)
},transfer:function(L,t){var Q=k(this),m=k(L.to),g="fixed"===m.css("position"),O=k("body"),f=g?O.scrollTop():0,v=g?O.scrollLeft():0,p=m.offset(),N={top:p.top-f,left:p.left-v,height:m.innerHeight(),width:m.innerWidth()},P=Q.offset(),M=k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(L.className).css({top:P.top-f,left:P.left-v,height:Q.innerHeight(),width:Q.innerWidth(),position:g?"fixed":"absolute"}).animate(N,L.duration,L.easing,function(){M.remove(),k.isFunction(t)&&t()
})
}}),k.fx.step.clip=function(f){f.clipInit||(f.start=k(f.elem).cssClip(),"string"==typeof f.end&&(f.end=c(f.end,f.elem)),f.clipInit=!0),k(f.elem).cssClip({top:f.pos*(f.end.top-f.start.top)+f.start.top,right:f.pos*(f.end.right-f.start.right)+f.start.right,bottom:f.pos*(f.end.bottom-f.start.bottom)+f.start.bottom,left:f.pos*(f.end.left-f.start.left)+f.start.left})
}
}(),function(){var a={};
k.each(["Quad","Cubic","Quart","Quint","Expo"],function(d,c){a[c]=function(f){return Math.pow(f,d+2)
}
}),k.extend(a,{Sine:function(c){return 1-Math.cos(c*Math.PI/2)
},Circ:function(c){return 1-Math.sqrt(1-c*c)
},Elastic:function(c){return 0===c||1===c?c:-Math.pow(2,8*(c-1))*Math.sin((80*(c-1)-7.5)*Math.PI/15)
},Back:function(c){return c*c*(3*c-2)
},Bounce:function(d){for(var f,c=4;
((f=Math.pow(2,--c))-1)/11>d;
){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*f-2)/22-d,2)
}}),k.each(a,function(d,c){k.easing["easeIn"+d]=c,k.easing["easeOut"+d]=function(e){return 1-c(1-e)
},k.easing["easeInOut"+d]=function(e){return 0.5>e?c(2*e)/2:1-c(-2*e+2)/2
}
})
}();
var b=k.effects;
k.effects.define("blind","hide",function(m,d){var g={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},t=k(this),p=m.direction||"up",c=t.cssClip(),l={clip:k.extend({},c)},f=k.effects.createPlaceholder(t);
l.clip[g[p][0]]=l.clip[g[p][1]],"show"===m.mode&&(t.cssClip(l.clip),f&&f.css(k.effects.clipToBox(l)),l.clip=c),f&&f.animate(k.effects.clipToBox(l),m.duration,m.easing),t.animate(l,{queue:!1,duration:m.duration,easing:m.easing,complete:d})
}),k.effects.define("bounce",function(X,T){var M,Q,P,ab=k(this),N=X.mode,U="hide"===N,S="show"===N,Z=X.direction||"up",L=X.distance,Y=X.times||5,O=2*Y+(S||U?1:0),W=X.duration/O,V=X.easing,R="up"===Z||"down"===Z?"top":"left",ac="up"===Z||"left"===Z,t=0,aa=ab.queue().length;
for(k.effects.createPlaceholder(ab),P=ab.css(R),L||(L=ab["top"===R?"outerHeight":"outerWidth"]()/3),S&&(Q={opacity:1},Q[R]=P,ab.css("opacity",0).css(R,ac?2*-L:2*L).animate(Q,W,V)),U&&(L/=Math.pow(2,Y-1)),Q={},Q[R]=P;
Y>t;
t++){M={},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V).animate(Q,W,V),L=U?2*L:L/2
}U&&(M={opacity:0},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V)),ab.queue(T),k.effects.unshift(ab,aa,O+1)
}),k.effects.define("clip","hide",function(t,m){var v,f={},d=k(this),u=t.direction||"vertical",c="both"===u,p=c||"horizontal"===u,g=c||"vertical"===u;
v=d.cssClip(),f.clip={top:g?(v.bottom-v.top)/2:v.top,right:p?(v.right-v.left)/2:v.right,bottom:g?(v.bottom-v.top)/2:v.bottom,left:p?(v.right-v.left)/2:v.left},k.effects.createPlaceholder(d),"show"===t.mode&&(d.cssClip(f.clip),f.clip=v),d.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:m})
}),k.effects.define("drop","hide",function(v,p){var O,g=k(this),f=v.mode,M="show"===f,d=v.direction||"left",t="up"===d||"down"===d?"top":"left",m="up"===d||"left"===d?"-=":"+=",L="+="===m?"-=":"+=",N={opacity:0};
k.effects.createPlaceholder(g),O=v.distance||g["top"===t?"outerHeight":"outerWidth"](!0)/2,N[t]=m+O,M&&(g.css(N),N[t]=L+O,N.opacity=1),g.animate(N,{queue:!1,duration:v.duration,easing:v.easing,complete:p})
}),k.effects.define("explode","hide",function(X,T){function M(){aa.push(this),aa.length===L*Y&&Q()
}function Q(){O.css({visibility:"visible"}),k(aa).remove(),T()
}var P,ab,N,U,S,Z,L=X.pieces?Math.round(Math.sqrt(X.pieces)):3,Y=L,O=k(this),W=X.mode,V="show"===W,R=O.show().css("visibility","hidden").offset(),ac=Math.ceil(O.outerWidth()/Y),t=Math.ceil(O.outerHeight()/L),aa=[];
for(P=0;
L>P;
P++){for(U=R.top+P*t,Z=P-(L-1)/2,ab=0;
Y>ab;
ab++){N=R.left+ab*ac,S=ab-(Y-1)/2,O.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-ab*ac,top:-P*t}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:ac,height:t,left:N+(V?S*ac:0),top:U+(V?Z*t:0),opacity:V?0:1}).animate({left:N+(V?0:S*ac),top:U+(V?0:Z*t),opacity:V?1:0},X.duration||500,X.easing,M)
}}}),k.effects.define("fade","toggle",function(d,a){var c="show"===d.mode;
k(this).css("opacity",c?0:1).animate({opacity:c?1:0},{queue:!1,duration:d.duration,easing:d.easing,complete:a})
}),k.effects.define("fold","hide",function(T,P){var Z=k(this),M=T.mode,L="show"===M,W="hide"===M,t=T.size||15,Q=/([0-9]+)%/.exec(t),O=!!T.horizFirst,V=O?["right","bottom"]:["bottom","right"],Y=T.duration/2,U=k.effects.createPlaceholder(Z),v=Z.cssClip(),S={clip:k.extend({},v)},R={clip:k.extend({},v)},N=[v[V[0]],v[V[1]]],X=Z.queue().length;
Q&&(t=parseInt(Q[1],10)/100*N[W?0:1]),S.clip[V[0]]=t,R.clip[V[0]]=t,R.clip[V[1]]=0,L&&(Z.cssClip(R.clip),U&&U.css(k.effects.clipToBox(R)),R.clip=v),Z.queue(function(a){U&&U.animate(k.effects.clipToBox(S),Y,T.easing).animate(k.effects.clipToBox(R),Y,T.easing),a()
}).animate(S,Y,T.easing).animate(R,Y,T.easing).queue(P),k.effects.unshift(Z,X,4)
}),k.effects.define("highlight","show",function(d,a){var c=k(this),f={backgroundColor:c.css("backgroundColor")};
"hide"===d.mode&&(f.opacity=0),k.effects.saveStyle(c),c.css({backgroundImage:"none",backgroundColor:d.color||"#ffff99"}).animate(f,{queue:!1,duration:d.duration,easing:d.easing,complete:a})
}),k.effects.define("size",function(X,T){var M,Q,P,aa=k(this),N=["fontSize"],U=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],S=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],Z=X.mode,L="effect"!==Z,Y=X.scale||"both",O=X.origin||["middle","center"],W=aa.css("position"),V=aa.position(),R=k.effects.scaledDimensions(aa),ab=X.from||R,t=X.to||k.effects.scaledDimensions(aa,0);
k.effects.createPlaceholder(aa),"show"===Z&&(P=ab,ab=t,t=P),Q={from:{y:ab.height/R.height,x:ab.width/R.width},to:{y:t.height/R.height,x:t.width/R.width}},("box"===Y||"both"===Y)&&(Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,U,Q.from.y,ab),t=k.effects.setTransition(aa,U,Q.to.y,t)),Q.from.x!==Q.to.x&&(ab=k.effects.setTransition(aa,S,Q.from.x,ab),t=k.effects.setTransition(aa,S,Q.to.x,t))),("content"===Y||"both"===Y)&&Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,N,Q.from.y,ab),t=k.effects.setTransition(aa,N,Q.to.y,t)),O&&(M=k.effects.getBaseline(O,R),ab.top=(R.outerHeight-ab.outerHeight)*M.y+V.top,ab.left=(R.outerWidth-ab.outerWidth)*M.x+V.left,t.top=(R.outerHeight-t.outerHeight)*M.y+V.top,t.left=(R.outerWidth-t.outerWidth)*M.x+V.left),aa.css(ab),("content"===Y||"both"===Y)&&(U=U.concat(["marginTop","marginBottom"]).concat(N),S=S.concat(["marginLeft","marginRight"]),aa.find("*[width]").each(function(){var d=k(this),e=k.effects.scaledDimensions(d),f={height:e.height*Q.from.y,width:e.width*Q.from.x,outerHeight:e.outerHeight*Q.from.y,outerWidth:e.outerWidth*Q.from.x},c={height:e.height*Q.to.y,width:e.width*Q.to.x,outerHeight:e.height*Q.to.y,outerWidth:e.width*Q.to.x};
Q.from.y!==Q.to.y&&(f=k.effects.setTransition(d,U,Q.from.y,f),c=k.effects.setTransition(d,U,Q.to.y,c)),Q.from.x!==Q.to.x&&(f=k.effects.setTransition(d,S,Q.from.x,f),c=k.effects.setTransition(d,S,Q.to.x,c)),L&&k.effects.saveStyle(d),d.css(f),d.animate(c,X.duration,X.easing,function(){L&&k.effects.restoreStyle(d)
})
})),aa.animate(t,{queue:!1,duration:X.duration,easing:X.easing,complete:function(){var a=aa.offset();
0===t.opacity&&aa.css("opacity",ab.opacity),L||(aa.css("position","static"===W?"relative":W).offset(a),k.effects.saveStyle(aa)),T()
}})
}),k.effects.define("scale",function(g,d){var f=k(this),l=g.mode,h=parseInt(g.percent,10)||(0===parseInt(g.percent,10)?0:"effect"!==l?0:100),c=k.extend(!0,{from:k.effects.scaledDimensions(f),to:k.effects.scaledDimensions(f,h,g.direction||"both"),origin:g.origin||["middle","center"]},g);
g.fade&&(c.from.opacity=1,c.to.opacity=0),k.effects.effect.size.call(this,c,d)
}),k.effects.define("puff","hide",function(d,a){var c=k.extend(!0,{},d,{fade:!0,percent:parseInt(d.percent,10)||150});
k.effects.effect.scale.call(this,c,a)
}),k.effects.define("pulsate","show",function(L,t){var Q=k(this),m=L.mode,g="show"===m,O="hide"===m,f=g||O,v=2*(L.times||5)+(f?1:0),p=L.duration/v,N=0,P=1,M=Q.queue().length;
for((g||!Q.is(":visible"))&&(Q.css("opacity",0).show(),N=1);
v>P;
P++){Q.animate({opacity:N},p,L.easing),N=1-N
}Q.animate({opacity:N},p,L.easing),Q.queue(t),k.effects.unshift(Q,M,v+1)
}),k.effects.define("shake",function(R,N){var W=1,L=k(this),v=R.direction||"left",U=R.distance||20,m=R.times||3,O=2*m+1,M=Math.round(R.duration/O),T="up"===v||"down"===v?"top":"left",V="up"===v||"left"===v,S={},t={},Q={},P=L.queue().length;
for(k.effects.createPlaceholder(L),S[T]=(V?"-=":"+=")+U,t[T]=(V?"+=":"-=")+2*U,Q[T]=(V?"-=":"+=")+2*U,L.animate(S,M,R.easing);
m>W;
W++){L.animate(t,M,R.easing).animate(Q,M,R.easing)
}L.animate(t,M,R.easing).animate(S,M/2,R.easing).queue(N),k.effects.unshift(L,P,O+1)
}),k.effects.define("slide","show",function(L,t){var Q,m,g=k(this),O={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},f=L.mode,v=L.direction||"left",p="up"===v||"down"===v?"top":"left",N="up"===v||"left"===v,P=L.distance||g["top"===p?"outerHeight":"outerWidth"](!0),M={};
k.effects.createPlaceholder(g),Q=g.cssClip(),m=g.position()[p],M[p]=(N?-1:1)*P+m,M.clip=g.cssClip(),M.clip[O[v][1]]=M.clip[O[v][0]],"show"===f&&(g.cssClip(M.clip),g.css(p,M[p]),M.clip=Q,M[p]=m),g.animate(M,{queue:!1,duration:L.duration,easing:L.easing,complete:t})
});
var b;
k.uiBackCompat!==!1&&(b=k.effects.define("transfer",function(c,a){k(this).transfer(c,a)
}))
});
window.VMW={init:function(){var a=this;
a.mobileBreak=1023;
if($(".carouselWrapper.home").length){a.mobileBreak=900
}if($(".alerts-contain").length){a.initAlerts();
$(".alerts-contain").accordion({collapsible:true,active:true,animate:false,header:"h4",heightStyle:"content"})
}},initAlerts:function(){var b=this,a=$(".l-alerts"),c=$(".close-btn"),d=$(".alerts-contain");
b.alertsVisible=true;
a.click(function(f){if(!b.alertsVisible){f.preventDefault();
d.show();
a.addClass("active");
b.alertsVisible=true
}else{f.preventDefault();
d.hide();
a.removeClass("active");
b.alertsVisible=false
}});
c.click(function(f){f.preventDefault();
d.hide();
a.removeClass("active");
if(b.alertsVisible===true){b.alertsVisible=false
}})
}};
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
},get:function(d,e,j,h,g,f){var i={type:"GET",url:d,data:e,success:j,error:h,complete:g};
if(f){i.timeout=f
}jQuery.ajax(i)
},post:function(g,i,h,f,e,d){var j={type:"POST",url:g,data:i,success:h,error:f,complete:e};
if(d){j.timeout=d
}jQuery.ajax(j)
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
/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(b(c))
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}}(this,function(a){(function(e){if(!String.prototype.includes){(function(){var k={}.toString;
var h=(function(){try{var o={};
var n=Object.defineProperty;
var l=n(o,o,o)&&n
}catch(m){}return l
}());
var j="".indexOf;
var i=function(q){if(this==null){throw new TypeError()
}var o=String(this);
if(q&&k.call(q)=="[object RegExp]"){throw new TypeError()
}var m=o.length;
var n=String(q);
var p=n.length;
var l=arguments.length>1?arguments[1]:undefined;
var s=l?Number(l):0;
if(s!=s){s=0
}var r=Math.min(Math.max(s,0),m);
if(p+r>m){return false
}return j.call(o,n,s)!=-1
};
if(h){h(String.prototype,"includes",{value:i,configurable:true,writable:true})
}else{String.prototype.includes=i
}}())
}if(!String.prototype.startsWith){(function(){var h=(function(){try{var n={};
var m=Object.defineProperty;
var k=m(n,n,n)&&m
}catch(l){}return k
}());
var j={}.toString;
var i=function(r){if(this==null){throw new TypeError()
}var o=String(this);
if(r&&j.call(r)=="[object RegExp]"){throw new TypeError()
}var k=o.length;
var s=String(r);
var m=s.length;
var n=arguments.length>1?arguments[1]:undefined;
var q=n?Number(n):0;
if(q!=q){q=0
}var l=Math.min(Math.max(q,0),k);
if(m+l>k){return false
}var p=-1;
while(++p<m){if(o.charCodeAt(l+p)!=s.charCodeAt(p)){return false
}}return true
};
if(h){h(String.prototype,"startsWith",{value:i,configurable:true,writable:true})
}else{String.prototype.startsWith=i
}}())
}if(!Object.keys){Object.keys=function(j,h,i){i=[];
for(h in j){i.hasOwnProperty.call(j,h)&&i.push(h)
}return i
}
}e.fn.triggerNative=function(h){var i=this[0],j;
if(i.dispatchEvent){if(typeof Event==="function"){j=new Event(h,{bubbles:true})
}else{j=document.createEvent("Event");
j.initEvent(h,true,false)
}i.dispatchEvent(j)
}else{if(i.fireEvent){j=document.createEventObject();
j.eventType=h;
i.fireEvent("on"+h,j)
}this.trigger(h)
}};
e.expr[":"].icontains=function(k,h,j){var l=e(k);
var i=(l.data("tokens")||l.text()).toUpperCase();
return i.includes(j[3].toUpperCase())
};
e.expr[":"].ibegins=function(k,h,j){var l=e(k);
var i=(l.data("tokens")||l.text()).toUpperCase();
return i.startsWith(j[3].toUpperCase())
};
e.expr[":"].aicontains=function(k,h,j){var l=e(k);
var i=(l.data("tokens")||l.data("normalizedText")||l.text()).toUpperCase();
return i.includes(j[3].toUpperCase())
};
e.expr[":"].aibegins=function(k,h,j){var l=e(k);
var i=(l.data("tokens")||l.data("normalizedText")||l.text()).toUpperCase();
return i.startsWith(j[3].toUpperCase())
};
function g(i){var h=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];
e.each(h,function(){i=i.replace(this.re,this.ch)
});
return i
}function f(i){var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var m="(?:"+Object.keys(k).join("|")+")",l=new RegExp(m),j=new RegExp(m,"g"),h=i==null?"":""+i;
return l.test(h)?h.replace(j,function(n){return k[n]
}):h
}var c=function(i,h,j){if(j){j.stopPropagation();
j.preventDefault()
}this.$element=e(i);
this.$newElement=null;
this.$button=null;
this.$menu=null;
this.$lis=null;
this.options=h;
if(this.options.title===null){this.options.title=this.$element.attr("title")
}this.val=c.prototype.val;
this.render=c.prototype.render;
this.refresh=c.prototype.refresh;
this.setStyle=c.prototype.setStyle;
this.selectAll=c.prototype.selectAll;
this.deselectAll=c.prototype.deselectAll;
this.destroy=c.prototype.destroy;
this.remove=c.prototype.remove;
this.show=c.prototype.show;
this.hide=c.prototype.hide;
this.init()
};
c.VERSION="1.10.0";
c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(i,h){return(i==1)?"{0} item selected":"{0} items selected"
},maxOptionsText:function(h,i){return[(h==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(i==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]
},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:false,template:{caret:'<span class="caret"></span>'},maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false};
c.prototype={constructor:c,init:function(){var h=this,i=this.$element.attr("id");
this.$element.addClass("bs-select-hidden");
this.liObj={};
this.multiple=this.$element.prop("multiple");
this.autofocus=this.$element.prop("autofocus");
this.$newElement=this.createView();
this.$element.after(this.$newElement).appendTo(this.$newElement);
this.$button=this.$newElement.children("button");
this.$menu=this.$newElement.children(".dropdown-menu");
this.$menuInner=this.$menu.children(".inner");
this.$searchbox=this.$menu.find("input");
this.$element.removeClass("bs-select-hidden");
if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")
}if(typeof i!=="undefined"){this.$button.attr("data-id",i);
e('label[for="'+i+'"]').click(function(j){j.preventDefault();
h.$button.focus()
})
}this.checkDisabled();
this.clickListener();
if(this.options.liveSearch){this.liveSearchListener()
}this.render();
this.setStyle();
this.setWidth();
if(this.options.container){this.selectPosition()
}this.$menu.data("this",this);
this.$newElement.data("this",this);
if(this.options.mobile){this.mobile()
}this.$newElement.on({"hide.bs.dropdown":function(j){h.$element.trigger("hide.bs.select",j)
},"hidden.bs.dropdown":function(j){h.$element.trigger("hidden.bs.select",j)
},"show.bs.dropdown":function(j){h.$element.trigger("show.bs.select",j)
},"shown.bs.dropdown":function(j){h.$element.trigger("shown.bs.select",j)
}});
if(h.$element[0].hasAttribute("required")){this.$element.on("invalid",function(){h.$button.addClass("bs-invalid").focus();
h.$element.on({"focus.bs.select":function(){h.$button.focus();
h.$element.off("focus.bs.select")
},"shown.bs.select":function(){h.$element.val(h.$element.val()).off("shown.bs.select")
},"rendered.bs.select":function(){if(this.validity.valid){h.$button.removeClass("bs-invalid")
}h.$element.off("rendered.bs.select")
}})
})
}setTimeout(function(){h.$element.trigger("loaded.bs.select")
})
},createDropdown:function(){var m=(this.multiple||this.options.showTick)?" show-tick":"",i=this.$element.parent().hasClass("input-group")?" input-group-btn":"",o=this.autofocus?" autofocus":"";
var n=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";
var l=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+f(this.options.liveSearchPlaceholder)+'"')+"></div>":"";
var k=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"";
var h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"";
var j='<div class="btn-group bootstrap-select'+m+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+o+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+n+l+k+'<ul class="dropdown-menu inner" role="menu"></ul>'+h+"</div></div>";
return e(j)
},createView:function(){var i=this.createDropdown(),h=this.createLi();
i.find("ul")[0].innerHTML=h;
return i
},reloadLi:function(){this.destroyLi();
var h=this.createLi();
this.$menuInner[0].innerHTML=h
},destroyLi:function(){this.$menu.find("li").remove()
},createLi:function(){var n=this,m=[],o=0,j=document.createElement("option"),i=-1;
var h=function(s,q,r,p){return"<li"+((typeof r!=="undefined"&""!==r)?' class="'+r+'"':"")+((typeof q!=="undefined"&null!==q)?' data-original-index="'+q+'"':"")+((typeof p!=="undefined"&null!==p)?'data-optgroup="'+p+'"':"")+">"+s+"</li>"
};
var l=function(s,p,r,q){return'<a tabindex="0"'+(typeof p!=="undefined"?' class="'+p+'"':"")+(typeof r!=="undefined"?' style="'+r+'"':"")+(n.options.liveSearchNormalize?' data-normalized-text="'+g(f(s))+'"':"")+(typeof q!=="undefined"||q!==null?' data-tokens="'+q+'"':"")+">"+s+'<span class="'+n.options.iconBase+" "+n.options.tickIcon+' check-mark"></span></a>'
};
if(this.options.title&&!this.multiple){i--;
if(!this.$element.find(".bs-title-option").length){var k=this.$element[0];
j.className="bs-title-option";
j.appendChild(document.createTextNode(this.options.title));
j.value="";
k.insertBefore(j,k.firstChild);
if(e(k.options[k.selectedIndex]).attr("selected")===undefined){j.selected=true
}}}this.$element.find("option").each(function(s){var u=e(this);
i++;
if(u.hasClass("bs-title-option")){return
}var q=this.className||"",t=this.style.cssText,B=u.data("content")?u.data("content"):u.html(),v=u.data("tokens")?u.data("tokens"):null,y=typeof u.data("subtext")!=="undefined"?'<small class="text-muted">'+u.data("subtext")+"</small>":"",w=typeof u.data("icon")!=="undefined"?'<span class="'+n.options.iconBase+" "+u.data("icon")+'"></span> ':"",A=this.parentNode.tagName==="OPTGROUP",z=this.disabled||(A&&this.parentNode.disabled);
if(w!==""&&z){w="<span>"+w+"</span>"
}if(n.options.hideDisabled&&z&&!A){i--;
return
}if(!u.data("content")){B=w+'<span class="text">'+B+y+"</span>"
}if(A&&u.data("divider")!==true){var r=" "+this.parentNode.className||"";
if(u.index()===0){o+=1;
var x=this.parentNode.label,C=typeof u.parent().data("subtext")!=="undefined"?'<small class="text-muted">'+u.parent().data("subtext")+"</small>":"",p=u.parent().data("icon")?'<span class="'+n.options.iconBase+" "+u.parent().data("icon")+'"></span> ':"";
x=p+'<span class="text">'+x+C+"</span>";
if(s!==0&&m.length>0){i++;
m.push(h("",null,"divider",o+"div"))
}i++;
m.push(h(x,null,"dropdown-header"+r,o))
}if(n.options.hideDisabled&&z){i--;
return
}m.push(h(l(B,"opt "+q+r,t,v),s,"",o))
}else{if(u.data("divider")===true){m.push(h("",s,"divider"))
}else{if(u.data("hidden")===true){m.push(h(l(B,q,t,v),s,"hidden is-hidden"))
}else{if(this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP"){i++;
m.push(h("",null,"divider",o+"div"))
}m.push(h(l(B,q,t,v),s))
}}}n.liObj[s]=i
});
if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")
}return m.join("")
},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")
}return this.$lis
},render:function(k){var j=this,m;
if(k!==false){this.$element.find("option").each(function(p){var q=j.findLis().eq(j.liObj[p]);
j.setDisabled(p,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,q);
j.setSelected(p,this.selected,q)
})
}this.tabIndex();
var o=this.$element.find("option").map(function(){if(this.selected){if(j.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled)){return
}var r=e(this),q=r.data("icon")&&j.options.showIcon?'<i class="'+j.options.iconBase+" "+r.data("icon")+'"></i> ':"",p;
if(j.options.showSubtext&&r.data("subtext")&&!j.multiple){p=' <small class="text-muted">'+r.data("subtext")+"</small>"
}else{p=""
}if(typeof r.attr("title")!=="undefined"){return r.attr("title")
}else{if(r.data("content")&&j.options.showContent){return r.data("content")
}else{return q+r.html()+p
}}}}).toArray();
var l=!this.multiple?o[0]:o.join(this.options.multipleSeparator);
if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");
if((h.length>1&&o.length>h[1])||(h.length==1&&o.length>=2)){m=this.options.hideDisabled?", [disabled]":"";
var i=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+m).length,n=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(o.length,i):this.options.countSelectedText;
l=n.replace("{0}",o.length.toString()).replace("{1}",i.toString())
}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")
}if(this.options.selectedTextFormat=="static"){l=this.options.title
}if(!l){l=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText
}this.$button.attr("title",e.trim(l.replace(/<[^>]*>?/g,"")));
this.$button.children(".filter-option").html(l);
this.$element.trigger("rendered.bs.select")
},setStyle:function(j,i){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))
}var h=j?j:this.options.style;
if(i=="add"){this.$button.addClass(h)
}else{if(i=="remove"){this.$button.removeClass(h)
}else{this.$button.removeClass(this.options.style);
this.$button.addClass(h)
}}},liHeight:function(n){if(!n&&(this.options.size===false||this.sizeInfo)){return
}var l=document.createElement("div"),h=document.createElement("div"),r=document.createElement("ul"),z=document.createElement("li"),y=document.createElement("li"),D=document.createElement("a"),x=document.createElement("span"),C=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(true):null,s=this.options.liveSearch?document.createElement("div"):null,t=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,k=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;
x.className="text";
l.className=this.$menu[0].parentNode.className+" open";
h.className="dropdown-menu open";
r.className="dropdown-menu inner";
z.className="divider";
x.appendChild(document.createTextNode("Inner text"));
D.appendChild(x);
y.appendChild(D);
r.appendChild(y);
r.appendChild(z);
if(C){h.appendChild(C)
}if(s){var v=document.createElement("span");
s.className="bs-searchbox";
v.className="form-control";
s.appendChild(v);
h.appendChild(s)
}if(t){h.appendChild(t)
}h.appendChild(r);
if(k){h.appendChild(k)
}l.appendChild(h);
document.body.appendChild(l);
var j=D.offsetHeight,B=C?C.offsetHeight:0,u=s?s.offsetHeight:0,q=t?t.offsetHeight:0,m=k?k.offsetHeight:0,w=e(z).outerHeight(true),i=typeof getComputedStyle==="function"?getComputedStyle(h):false,o=i?null:e(h),A=parseInt(i?i.paddingTop:o.css("paddingTop"))+parseInt(i?i.paddingBottom:o.css("paddingBottom"))+parseInt(i?i.borderTopWidth:o.css("borderTopWidth"))+parseInt(i?i.borderBottomWidth:o.css("borderBottomWidth")),p=A+parseInt(i?i.marginTop:o.css("marginTop"))+parseInt(i?i.marginBottom:o.css("marginBottom"))+2;
document.body.removeChild(l);
this.sizeInfo={liHeight:j,headerHeight:B,searchHeight:u,actionsHeight:q,doneButtonHeight:m,dividerHeight:w,menuPadding:A,menuExtras:p}
},setSize:function(){this.findLis();
this.liHeight();
if(this.options.header){this.$menu.css("padding-top",0)
}if(this.options.size===false){return
}var p=this,m=this.$menu,j=this.$menuInner,v=e(window),B=this.$newElement[0].offsetHeight,k=this.sizeInfo.liHeight,z=this.sizeInfo.headerHeight,s=this.sizeInfo.searchHeight,o=this.sizeInfo.actionsHeight,l=this.sizeInfo.doneButtonHeight,r=this.sizeInfo.dividerHeight,y=this.sizeInfo.menuPadding,n=this.sizeInfo.menuExtras,w=this.options.hideDisabled?".disabled":"",x,t,C,A,q=function(){C=p.$newElement.offset().top-v.scrollTop();
A=v.height()-C-B
};
q();
if(this.options.size==="auto"){var i=function(){var G,F=function(J,I){return function(K){if(I){return(K.classList?K.classList.contains(J):e(K).hasClass(J))
}else{return !(K.classList?K.classList.contains(J):e(K).hasClass(J))
}}
},E=p.$menuInner[0].getElementsByTagName("li"),D=Array.prototype.filter?Array.prototype.filter.call(E,F("hidden",false)):p.$lis.not(".hidden"),H=Array.prototype.filter?Array.prototype.filter.call(D,F("dropdown-header",true)):D.filter(".dropdown-header");
q();
x=A-n;
if(p.options.container){if(!m.data("height")){m.data("height",m.height())
}t=m.data("height")
}else{t=m.height()
}if(p.options.dropupAuto){p.$newElement.toggleClass("dropup",C>A&&(x-n)<t)
}if(p.$newElement.hasClass("dropup")){x=C-n
}if((D.length+H.length)>3){G=k*3+n-2
}else{G=0
}m.css({"max-height":x+"px",overflow:"hidden","min-height":G+z+s+o+l+"px"});
j.css({"max-height":x-z-s-o-l-y+"px","overflow-y":"auto","min-height":Math.max(G-y,0)+"px"})
};
i();
this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",i);
v.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",i)
}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(w).length>this.options.size){var u=this.$lis.not(".divider").not(w).children().slice(0,this.options.size).last().parent().index(),h=this.$lis.slice(0,u+1).filter(".divider").length;
x=k*this.options.size+h*r+y;
if(p.options.container){if(!m.data("height")){m.data("height",m.height())
}t=m.data("height")
}else{t=m.height()
}if(p.options.dropupAuto){this.$newElement.toggleClass("dropup",C>A&&(x-n)<t)
}m.css({"max-height":x+z+s+o+l+"px",overflow:"hidden","min-height":""});
j.css({"max-height":x-y+"px","overflow-y":"auto","min-height":""})
}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");
var i=this.$menu.parent().clone().appendTo("body"),h=this.options.container?this.$newElement.clone().appendTo("body"):i,j=i.children(".dropdown-menu").outerWidth(),k=h.css("width","auto").children("button").outerWidth();
i.remove();
h.remove();
this.$newElement.css("width",Math.max(j,k)+"px")
}else{if(this.options.width==="fit"){this.$menu.css("min-width","");
this.$newElement.css("width","").addClass("fit-width")
}else{if(this.options.width){this.$menu.css("min-width","");
this.$newElement.css("width",this.options.width)
}else{this.$menu.css("min-width","");
this.$newElement.css("width","")
}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")
}},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');
var i=this,k,j,h=function(l){i.$bsContainer.addClass(l.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",l.hasClass("dropup"));
k=l.offset();
j=l.hasClass("dropup")?0:l[0].offsetHeight;
i.$bsContainer.css({top:k.top+j,left:k.left,width:l[0].offsetWidth})
};
this.$button.on("click",function(){var l=e(this);
if(i.isDisabled()){return
}h(i.$newElement);
i.$bsContainer.appendTo(i.options.container).toggleClass("open",!l.hasClass("open")).append(i.$menu)
});
e(window).on("resize scroll",function(){h(i.$newElement)
});
this.$element.on("hide.bs.select",function(){i.$menu.data("height",i.$menu.height());
i.$bsContainer.detach()
})
},setSelected:function(h,j,i){if(!i){i=this.findLis().eq(this.liObj[h])
}i.toggleClass("selected",j)
},setDisabled:function(h,j,i){if(!i){i=this.findLis().eq(this.liObj[h])
}if(j){i.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1)
}else{i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)
}},isDisabled:function(){return this.$element[0].disabled
},checkDisabled:function(){var h=this;
if(this.isDisabled()){this.$newElement.addClass("disabled");
this.$button.addClass("disabled").attr("tabindex",-1)
}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");
this.$button.removeClass("disabled")
}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")
}}this.$button.click(function(){return !h.isDisabled()
})
},tabIndex:function(){if(this.$element.data("tabindex")!==this.$element.attr("tabindex")&&(this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98")){this.$element.data("tabindex",this.$element.attr("tabindex"));
this.$button.attr("tabindex",this.$element.data("tabindex"))
}this.$element.attr("tabindex",-98)
},clickListener:function(){var h=this,i=e(document);
this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(j){j.stopPropagation()
});
i.data("spaceSelect",false);
this.$button.on("keyup",function(j){if(/(32)/.test(j.keyCode.toString(10))&&i.data("spaceSelect")){j.preventDefault();
i.data("spaceSelect",false)
}});
this.$button.on("click",function(){h.setSize()
});
this.$element.on("shown.bs.select",function(){if(!h.options.liveSearch&&!h.multiple){h.$menuInner.find(".selected a").focus()
}else{if(!h.multiple){var j=h.liObj[h.$element[0].selectedIndex];
if(typeof j!=="number"||h.options.size===false){return
}var k=h.$lis.eq(j)[0].offsetTop-h.$menuInner[0].offsetTop;
k=k-h.$menuInner[0].offsetHeight/2+h.sizeInfo.liHeight/2;
h.$menuInner[0].scrollTop=k
}}});
this.$menuInner.on("click","li a",function(y){var o=e(this),j=o.parent().data("originalIndex"),w=h.$element.val(),q=h.$element.prop("selectedIndex");
if(h.multiple){y.stopPropagation()
}y.preventDefault();
if(!h.isDisabled()&&!o.parent().hasClass("disabled")){var u=h.$element.find("option"),v=u.eq(j),l=v.prop("selected"),t=v.parent("optgroup"),A=h.options.maxOptions,r=t.data("maxOptions")||false;
if(!h.multiple){u.prop("selected",false);
v.prop("selected",true);
h.$menuInner.find(".selected").removeClass("selected");
h.setSelected(j,true)
}else{v.prop("selected",!l);
h.setSelected(j,!l);
o.blur();
if(A!==false||r!==false){var k=A<u.filter(":selected").length,n=r<t.find("option:selected").length;
if((A&&k)||(r&&n)){if(A&&A==1){u.prop("selected",false);
v.prop("selected",true);
h.$menuInner.find(".selected").removeClass("selected");
h.setSelected(j,true)
}else{if(r&&r==1){t.find("option:selected").prop("selected",false);
v.prop("selected",true);
var x=o.parent().data("optgroup");
h.$menuInner.find('[data-optgroup="'+x+'"]').removeClass("selected");
h.setSelected(j,true)
}else{var m=(typeof h.options.maxOptionsText==="function")?h.options.maxOptionsText(A,r):h.options.maxOptionsText,z=m[0].replace("{n}",A),p=m[1].replace("{n}",r),s=e('<div class="notify"></div>');
if(m[2]){z=z.replace("{var}",m[2][A>1?0:1]);
p=p.replace("{var}",m[2][r>1?0:1])
}v.prop("selected",false);
h.$menu.append(s);
if(A&&k){s.append(e("<div>"+z+"</div>"));
h.$element.trigger("maxReached.bs.select")
}if(r&&n){s.append(e("<div>"+p+"</div>"));
h.$element.trigger("maxReachedGrp.bs.select")
}setTimeout(function(){h.setSelected(j,false)
},10);
s.delay(750).fadeOut(300,function(){e(this).remove()
})
}}}}}if(!h.multiple){h.$button.focus()
}else{if(h.options.liveSearch){h.$searchbox.focus()
}}if((w!=h.$element.val()&&h.multiple)||(q!=h.$element.prop("selectedIndex")&&!h.multiple)){h.$element.trigger("changed.bs.select",[j,v.prop("selected"),l]).triggerNative("change")
}}});
this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(j){if(j.currentTarget==this){j.preventDefault();
j.stopPropagation();
if(h.options.liveSearch&&!e(j.target).hasClass("close")){h.$searchbox.focus()
}else{h.$button.focus()
}}});
this.$menuInner.on("click",".divider, .dropdown-header",function(j){j.preventDefault();
j.stopPropagation();
if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}});
this.$menu.on("click",".popover-title .close",function(){h.$button.click()
});
this.$searchbox.on("click",function(j){j.stopPropagation()
});
this.$menu.on("click",".actions-btn",function(j){if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}j.preventDefault();
j.stopPropagation();
if(e(this).hasClass("bs-select-all")){h.selectAll()
}else{h.deselectAll()
}});
this.$element.change(function(){h.render(false)
})
},liveSearchListener:function(){var i=this,h=e('<li class="no-results"></li>');
this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){i.$menuInner.find(".active").removeClass("active");
if(!!i.$searchbox.val()){i.$searchbox.val("");
i.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}if(!i.multiple){i.$menuInner.find(".selected").addClass("active")
}setTimeout(function(){i.$searchbox.focus()
},10)
});
this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(j){j.stopPropagation()
});
this.$searchbox.on("input propertychange",function(){if(i.$searchbox.val()){var j=i.$lis.not(".is-hidden").removeClass("hidden").children("a");
if(i.options.liveSearchNormalize){j=j.not(":a"+i._searchStyle()+'("'+g(i.$searchbox.val())+'")')
}else{j=j.not(":"+i._searchStyle()+'("'+i.$searchbox.val()+'")')
}j.parent().addClass("hidden");
i.$lis.filter(".dropdown-header").each(function(){var m=e(this),l=m.data("optgroup");
if(i.$lis.filter("[data-optgroup="+l+"]").not(m).not(".hidden").length===0){m.addClass("hidden");
i.$lis.filter("[data-optgroup="+l+"div]").addClass("hidden")
}});
var k=i.$lis.not(".hidden");
k.each(function(l){var m=e(this);
if(m.hasClass("divider")&&(m.index()===k.first().index()||m.index()===k.last().index()||k.eq(l+1).hasClass("divider"))){m.addClass("hidden")
}});
if(!i.$lis.not(".hidden, .no-results").length){if(!!h.parent().length){h.remove()
}h.html(i.options.noneResultsText.replace("{0}",'"'+f(i.$searchbox.val())+'"')).show();
i.$menuInner.append(h)
}else{if(!!h.parent().length){h.remove()
}}}else{i.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}i.$lis.filter(".active").removeClass("active");
if(i.$searchbox.val()){i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus()
}e(this).focus()
})
},_searchStyle:function(){var h={begins:"ibegins",startsWith:"ibegins"};
return h[this.options.liveSearchStyle]||"icontains"
},val:function(h){if(typeof h!=="undefined"){this.$element.val(h);
this.render();
return this.$element
}else{return this.$element.val()
}},changeAll:function(j){if(typeof j==="undefined"){j=true
}this.findLis();
var h=this.$element.find("option"),o=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",j),k=o.length,n=[];
for(var l=0;
l<k;
l++){var m=o[l].getAttribute("data-original-index");
n[n.length]=h.eq(m)[0]
}e(n).prop("selected",j);
this.render(false);
this.$element.trigger("changed.bs.select").triggerNative("change")
},selectAll:function(){return this.changeAll(true)
},deselectAll:function(){return this.changeAll(false)
},toggle:function(h){h=h||window.event;
if(h){h.stopPropagation()
}this.$button.trigger("click")
},keydown:function(y){var j=e(this),s=j.is("input")?j.parent().parent():j.parent(),i,n=s.data("this"),k,u,m,q,t,h,o,w,v=":not(.disabled, .hidden, .dropdown-header, .divider)",r={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};
if(n.options.liveSearch){s=j.parent().parent()
}if(n.options.container){s=n.$menu
}i=e("[role=menu] li",s);
w=n.$newElement.hasClass("open");
if(!w&&(y.keyCode>=48&&y.keyCode<=57||y.keyCode>=96&&y.keyCode<=105||y.keyCode>=65&&y.keyCode<=90)){if(!n.options.container){n.setSize();
n.$menu.parent().addClass("open");
w=true
}else{n.$button.trigger("click")
}n.$searchbox.focus()
}if(n.options.liveSearch){if(/(^9$|27)/.test(y.keyCode.toString(10))&&w&&n.$menu.find(".active").length===0){y.preventDefault();
n.$menu.parent().removeClass("open");
if(n.options.container){n.$newElement.removeClass("open")
}n.$button.focus()
}i=e("[role=menu] li"+v,s);
if(!j.val()&&!/(38|40)/.test(y.keyCode.toString(10))){if(i.filter(".active").length===0){i=n.$menuInner.find("li");
if(n.options.liveSearchNormalize){i=i.filter(":a"+n._searchStyle()+"("+g(r[y.keyCode])+")")
}else{i=i.filter(":"+n._searchStyle()+"("+r[y.keyCode]+")")
}}}}if(!i.length){return
}if(/(38|40)/.test(y.keyCode.toString(10))){k=i.index(i.find("a").filter(":focus").parent());
m=i.filter(v).first().index();
q=i.filter(v).last().index();
u=i.eq(k).nextAll(v).eq(0).index();
t=i.eq(k).prevAll(v).eq(0).index();
h=i.eq(u).prevAll(v).eq(0).index();
if(n.options.liveSearch){i.each(function(A){if(!e(this).hasClass("disabled")){e(this).data("index",A)
}});
k=i.index(i.filter(".active"));
m=i.first().data("index");
q=i.last().data("index");
u=i.eq(k).nextAll().eq(0).data("index");
t=i.eq(k).prevAll().eq(0).data("index");
h=i.eq(u).prevAll().eq(0).data("index")
}o=j.data("prevIndex");
if(y.keyCode==38){if(n.options.liveSearch){k--
}if(k!=h&&k>t){k=t
}if(k<m){k=m
}if(k==o){k=q
}}else{if(y.keyCode==40){if(n.options.liveSearch){k++
}if(k==-1){k=0
}if(k!=h&&k<u){k=u
}if(k>q){k=q
}if(k==o){k=m
}}}j.data("prevIndex",k);
if(!n.options.liveSearch){i.eq(k).children("a").focus()
}else{y.preventDefault();
if(!j.hasClass("dropdown-toggle")){i.removeClass("active").eq(k).addClass("active").children("a").focus();
j.focus()
}}}else{if(!j.is("input")){var p=[],l,z;
i.each(function(){if(!e(this).hasClass("disabled")){if(e.trim(e(this).children("a").text().toLowerCase()).substring(0,1)==r[y.keyCode]){p.push(e(this).index())
}}});
l=e(document).data("keycount");
l++;
e(document).data("keycount",l);
z=e.trim(e(":focus").text().toLowerCase()).substring(0,1);
if(z!=r[y.keyCode]){l=1;
e(document).data("keycount",l)
}else{if(l>=p.length){e(document).data("keycount",0);
if(l>p.length){l=1
}}}i.eq(p[l-1]).children("a").focus()
}}if((/(13|32)/.test(y.keyCode.toString(10))||(/(^9$)/.test(y.keyCode.toString(10))&&n.options.selectOnTab))&&w){if(!/(32)/.test(y.keyCode.toString(10))){y.preventDefault()
}if(!n.options.liveSearch){var x=e(":focus");
x.click();
x.focus();
y.preventDefault();
e(document).data("spaceSelect",true)
}else{if(!/(32)/.test(y.keyCode.toString(10))){n.$menuInner.find(".active a").click();
j.focus()
}}e(document).data("keycount",0)
}if((/(^9$|27)/.test(y.keyCode.toString(10))&&w&&(n.multiple||n.options.liveSearch))||(/(27)/.test(y.keyCode.toString(10))&&!w)){n.$menu.parent().removeClass("open");
if(n.options.container){n.$newElement.removeClass("open")
}n.$button.focus()
}},mobile:function(){this.$element.addClass("mobile-device")
},refresh:function(){this.$lis=null;
this.liObj={};
this.reloadLi();
this.render();
this.checkDisabled();
this.liHeight(true);
this.setStyle();
this.setWidth();
if(this.$lis){this.$searchbox.trigger("propertychange")
}this.$element.trigger("refreshed.bs.select")
},hide:function(){this.$newElement.hide()
},show:function(){this.$newElement.show()
},remove:function(){this.$newElement.remove();
this.$element.remove()
},destroy:function(){this.$newElement.before(this.$element).remove();
if(this.$bsContainer){this.$bsContainer.remove()
}else{this.$menu.remove()
}this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
}};
function d(k,l){var i=arguments;
var n=k,h=l;
[].shift.apply(i);
var m;
var j=this.each(function(){var s=e(this);
if(s.is("select")){var r=s.data("selectpicker"),p=typeof n=="object"&&n;
if(!r){var o=e.extend({},c.DEFAULTS,e.fn.selectpicker.defaults||{},s.data(),p);
o.template=e.extend({},c.DEFAULTS.template,(e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{}),s.data().template,p.template);
s.data("selectpicker",(r=new c(this,o,h)))
}else{if(p){for(var q in p){if(p.hasOwnProperty(q)){r.options[q]=p[q]
}}}}if(typeof n=="string"){if(r[n] instanceof Function){m=r[n].apply(r,i)
}else{m=r.options[n]
}}}});
if(typeof m!=="undefined"){return m
}else{return j
}}var b=e.fn.selectpicker;
e.fn.selectpicker=d;
e.fn.selectpicker.Constructor=c;
e.fn.selectpicker.noConflict=function(){e.fn.selectpicker=b;
return this
};
e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(h){h.stopPropagation()
});
e(window).on("load.bs.select.data-api",function(){e(".selectpicker").each(function(){var h=e(this);
d.call(h,h.data())
})
})
})(a)
}));