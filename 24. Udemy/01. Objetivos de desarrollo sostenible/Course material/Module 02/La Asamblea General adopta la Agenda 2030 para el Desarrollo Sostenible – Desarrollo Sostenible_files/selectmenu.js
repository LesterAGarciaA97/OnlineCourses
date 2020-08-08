/*!
 * jQuery UI Selectmenu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectmenu
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position","./menu"],e):e(jQuery)}(function(o){return o.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var e=this;this.label=o("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=o("<span>",{class:"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),o("<span>",{class:"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=o("<span>",{class:"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){e.menuItems||e._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var n=this;this.menu=o("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=o("<div>",{class:"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,t){e.preventDefault(),n._setSelection(),n._select(t.item.data("ui-selectmenu-item"),e)},focus:function(e,t){var i=t.item.data("ui-selectmenu-item");null!=n.focusIndex&&i.index!==n.focusIndex&&(n._trigger("focus",e,{item:i}),n.isOpen||n._select(i,e)),n.focusIndex=i.index,n.button.attr("aria-activedescendant",n.menuItems.eq(i.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(o.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(i,e){var n=this,s="";o.each(e,function(e,t){t.optgroup!==s&&(o("<li>",{class:"ui-selectmenu-optgroup ui-menu-divider"+(t.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:t.optgroup}).appendTo(i),s=t.optgroup),n._renderItemData(i,t)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(e,t){var i=o("<li>");return t.disabled&&i.addClass("ui-state-disabled"),this._setText(i,t.label),i.appendTo(e)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),s+=":not(.ui-state-disabled)"),(n="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](s).eq(-1):i[e+"All"](s).eq(0)).length&&this.menuInstance.focus(t,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?((e=window.getSelection()).removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(o(e.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(e))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection()).rangeCount&&(this.range=e.getRangeAt(0)):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(e){var t=!0;switch(e.keyCode){case o.ui.keyCode.TAB:case o.ui.keyCode.ESCAPE:this.close(e),t=!1;break;case o.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case o.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case o.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case o.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case o.ui.keyCode.LEFT:this._move("prev",e);break;case o.ui.keyCode.RIGHT:this._move("next",e);break;case o.ui.keyCode.HOME:case o.ui.keyCode.PAGE_UP:this._move("first",e);break;case o.ui.keyCode.END:case o.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),t=!1}t&&e.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var e=this.options.appendTo;return(e=e&&(e.jquery||e.nodeType?o(e):this.document.find(e).eq(0)))&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(e){var s=[];e.each(function(e,t){var i=o(t),n=i.parent("optgroup");s.push({element:i,index:e,value:i.val(),label:i.text(),optgroup:n.attr("label")||"",disabled:n.prop("disabled")||i.prop("disabled")})}),this.items=s},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}})});