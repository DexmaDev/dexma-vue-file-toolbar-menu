(function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],m=0,d=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e9b":function(t,e,n){},2670:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-menu"},[n("div",{staticClass:"extended-hover-zone"}),n("div",{staticClass:"bar-menu-items",style:{width:t.width+"px",minWidth:t.width+"px",maxHeight:t.height+"px",overflow:t.height?"auto":"visible"}},t._l(t.menu,(function(e,o){return n(t.get_component(e.is),{key:"menu-"+o,tag:"component",class:e.class,attrs:{item:e}})})),1)])},i=[],r=(n("a9e3"),n("53ca")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-menu-item",class:{disabled:t.item.disabled,active:t.item.active},style:{height:t.item.height+"px"},attrs:{title:t.item.title},on:{mousedown:function(t){return t.preventDefault()},click:t.click}},[t.item.icon?n("span",{staticClass:"material-icons icon"},[t._v(t._s(t.item.icon))]):t._e(),t.item.emoji?n("span",{staticClass:"emoji"},[t._v(t._s(t.get_emoji(t.item.emoji)))]):t._e(),t.item.text?n("span",{staticClass:"label"},[t._v(t._s(t.item.text))]):t._e(),t.item.html?n("span",{staticClass:"label",domProps:{innerHTML:t._s(t.item.html)}}):t._e(),t.item.hotkey?n("span",{staticClass:"hotkey"},[t._v(t._s(t.hotkey))]):t._e(),t.item.menu&&t.item.custom_chevron?n("span",{staticClass:"chevron",domProps:{innerHTML:t._s(t.item.custom_chevron)}}):t.item.menu?n("span",{staticClass:"material-icons chevron"},[t._v("chevron_right")]):t._e(),t.item.menu?n(t.get_component(t.item.menu),{ref:"menu",tag:"component",staticClass:"menu",class:t.item.menu_class,attrs:{menu:t.item.menu,width:t.item.menu_width,height:t.item.menu_height}}):t._e()],1)},c=[],s=(n("caad"),n("d3b7"),n("2532"),n("b90b")),u=n.n(s),l=n("de35"),m={mixins:[l["a"]],components:{BarMenu:function(){return Promise.resolve().then(n.bind(null,"2670"))}},props:{item:{type:Object,required:!0}},methods:{click:function(t){this.item.click?this.item.click(t):this.$refs.menu&&t.composedPath&&t.composedPath().includes(this.$refs.menu.$el)||t.stopPropagation()},get_emoji:function(t){return u.a.get(t)},get_component:function(t){return t&&!Array.isArray(t)&&"object"==Object(r["a"])(t)?t:"bar-menu"}}},d=m,p=n("2877"),b=Object(p["a"])(d,a,c,!1,null,null,null),h=b.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-menu-separator"})},_=[],g={},x=Object(p["a"])(g,f,_,!1,null,null,null),v=x.exports,k={components:{BarMenuItem:h,BarMenuSeparator:v},props:{menu:{type:Array,required:!0},width:Number,height:Number},methods:{get_component:function(t){return"object"==Object(r["a"])(t)?t:"string"==typeof t?"bar-menu-"+t:"bar-menu-item"}}},y=k,C=Object(p["a"])(y,o,i,!1,null,null,null);e["default"]=C.exports},"35bc":function(t,e,n){"use strict";var o=n("6e59"),i=n.n(o);i.a},"54a7":function(t,e,n){"use strict";var o=n("b566"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"title"},[t._v("vue-file-toolbar-menu")]),n("div",{staticClass:"subtitle"},[n("svg",{staticClass:"github",attrs:{width:"20",height:"20",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M500,10C236.3,10,22.6,229.4,22.6,500c0,270.6,213.8,490,477.4,490c263.7,0,477.4-219.4,477.4-490C977.4,229.4,763.7,10,500,10z M643.3,940.1c-23,4.6-31.1-9.9-31.1-22.3c0-15.2,0.5-65.2,0.5-127.2c0-43.3-14.5-71.6-30.7-86c100.8-11.4,206.5-50.7,206.5-228.8c0-50.6-17.5-92.1-46.5-124.5c4.6-11.7,20.2-58.8-4.5-122.7c0,0-37.9-12.5-124.3,47.6c-36.1-10.3-74.8-15.5-113.2-15.7c-38.5,0.2-77.2,5.3-113.2,15.7c-86.4-60-124.4-47.6-124.4-47.6c-24.6,63.9-9.1,111-4.4,122.7c-28.9,32.4-46.5,73.8-46.5,124.5c0,177.7,105.6,217.5,206,229.2c-12.9,11.6-24.6,32-28.7,62c-25.8,11.8-91.3,32.3-131.6-38.6c0,0-23.9-44.5-69.3-47.8c0,0-44.2-0.6-3.1,28.2c0,0,29.7,14.2,50.2,67.8c0,0,26.6,90.2,152.4,62.2c0.2,38.7,0.6,67.9,0.6,78.9c0,12.3-8.2,26.6-30.9,22.3c-179.8-61.3-309.3-235.1-309.3-440C47.7,244,250.2,36.4,500,36.4c249.8,0,452.3,207.6,452.3,463.8C952.3,705,822.8,878.7,643.3,940.1z"}})]),n("a",{attrs:{href:"https://github.com/motla/vue-file-toolbar-menu"}},[t._v("view docs on github")])]),n("div",{staticClass:"styles"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.theme=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"default"}},[t._v("Default style (Vue.js)")]),n("option",{attrs:{value:"google-docs"}},[t._v('"Google Docs"-like style')]),n("option",{attrs:{value:"mac-os"}},[t._v('"macOS"-like style')])])]),"google-docs"==t.theme?n("v-style",[t._v(" body { background-color: rgb(248, 249, 250); box-shadow: none; } ::selection { background-color: rgb(186, 212, 253); } :root { --demo-font-color: #222; --demo-bars-bkg: rgb(255, 255, 255); --demo-bars-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.15); --demo-bars-padding: 5px; --demo-bars-border-radius: 1px; --demo-text-bkg-color: white; --demo-text-box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.15); --bar-font-color: rgb(32, 33, 36); --bar-font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; --bar-font-size: 15px; --bar-font-weight: 500; --bar-letter-spacing: 0.2px; --bar-padding: 3px; --bar-button-icon-size: 20px; --bar-button-padding: 4px 6px; --bar-button-radius: 4px; --bar-button-hover-bkg: rgb(241, 243, 244); --bar-button-active-color: rgb(26, 115, 232); --bar-button-active-bkg: rgb(232, 240, 254); --bar-button-open-color: rgb(32, 33, 36); --bar-button-open-bkg: rgb(232, 240, 254); --bar-menu-bkg: white; --bar-menu-border-radius: 0 0 3px 3px; --bar-menu-item-chevron-margin: 0; --bar-menu-item-hover-bkg: rgb(241, 243, 244); --bar-menu-item-padding: 5px 8px 5px 35px; --bar-menu-item-icon-size: 15px; --bar-menu-item-icon-margin: 0 9px 0 -25px; --bar-menu-padding: 6px 1px; --bar-menu-shadow: 0 2px 6px 2px rgba(60, 64, 67, 0.15); --bar-menu-separator-height: 1px; --bar-menu-separator-margin: 5px 0 5px 34px; --bar-menu-separator-color: rgb(227, 229, 233); --bar-separator-color: rgb(218, 220, 224); --bar-separator-width: 1px; --bar-sub-menu-border-radius: 3px; } .bars > .bar:first-child { border-bottom: 1px solid rgb(218, 220, 224); margin-bottom: 3px; } ")]):"mac-os"==t.theme?n("v-style",[t._v(' body { background-color: rgb(215, 215, 215); box-shadow: none; } ::selection { background-color: rgb(179, 215, 255); } :root { --demo-font-color: #222; --demo-bars-bkg: rgb(239, 239, 239); --demo-bars-shadow: none; --demo-bars-padding: 0 0 2px 0; --demo-text-bkg-color: rgba(0, 0, 0, 0.04); --bar-font-color: rgba(0, 0, 0, 0.75); --bar-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; --bar-font-size: 15.5px; --bar-button-icon-size: 20px; --bar-button-padding: 4px 7px 5px 7px; --bar-button-radius: 0; --bar-button-hover-bkg: none; --bar-button-active-color: white; --bar-button-active-bkg: rgba(41, 122, 255, 0.9); --bar-button-open-color: white; --bar-button-open-bkg: rgba(41, 122, 255, 0.9); --bar-menu-bkg: rgba(255, 255, 255, 0.95); --bar-menu-backdrop-filter: saturate(180%) blur(20px); --bar-menu-backdrop-filter-bkg: rgba(255, 255, 255, 0.3); --bar-menu-border: solid 1px #BBB; --bar-menu-border-radius: 0 0 6px 6px; --bar-menu-item-chevron-margin: 0; --bar-menu-item-hover-color: white; --bar-menu-item-hover-bkg: rgba(41, 122, 255, 0.9); --bar-menu-item-padding: 1px 12px 2px 25px; --bar-menu-item-icon-size: 16px; --bar-menu-item-icon-margin: 0 4px 0 -20px; --bar-menu-padding: 3px 0; --bar-menu-shadow: 0 6px 13px 0 rgba(60, 60, 60, 0.4); --bar-menu-separator-height: 2px; --bar-menu-separator-margin: 5px 0; --bar-menu-separator-color: rgba(0, 0, 0, 0.08); --bar-separator-color: rgba(0, 0, 0, 0.1); --bar-separator-width: 2px; --bar-separator-margin: 5px 7px; --bar-sub-menu-border-radius: 6px; } .bars > .bar:not(:first-child) { padding: 5px; } .bars > .bar:first-child { border-bottom: solid 1px #CCC; margin-bottom: 3px; } .bars > .bar:first-child > .bar-button:first-child { margin-left: 10px; } ')]):t._e(),n("div",{staticClass:"experiment"},[n("div",{staticClass:"bars"},t._l(t.bars_content,(function(t,e){return n("vue-file-toolbar-menu",{key:"bar-"+e,attrs:{content:t}})})),1),n("div",{ref:"text",staticClass:"text",attrs:{contenteditable:t.edit_mode,spellcheck:"false"},domProps:{innerHTML:t._s(t.initial_html)}})])],1)},r=[],a=(n("99af"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar"},t._l(t.content,(function(e,o){return n(t.get_component(e.is),{key:"bar-item-"+o,ref:"bar-item-"+o,refInFor:!0,tag:"component",class:e.class,attrs:{item:e,is_open:t.menu_open},on:{click:function(e){return t.toggle_menu("bar-item-"+o,e)}}})})),1)}),c=[],s=n("53ca"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({staticClass:"bar-button",class:t.button_class,attrs:{title:t.title},on:{mousedown:function(t){return t.preventDefault()},click:function(e){return t.item.click?t.item.click(e):e.stopPropagation()}}},t.$listeners),[t.item.icon?n("span",{staticClass:"material-icons icon"},[t._v(t._s(t.item.icon))]):t._e(),t.item.emoji?n("span",{staticClass:"emoji"},[t._v(t._s(t.get_emoji(t.item.emoji)))]):t._e(),t.item.text?n("span",{staticClass:"label"},[t._v(t._s(t.item.text))]):t._e(),t.item.html?n("span",{staticClass:"label",domProps:{innerHTML:t._s(t.item.html)}}):t._e(),!0===t.item.chevron?n("span",{staticClass:"material-icons chevron"},[t._v("expand_more")]):t.item.chevron?n("span",{staticClass:"chevron",domProps:{innerHTML:t._s(t.item.chevron)}}):t._e(),t.item.menu?n(t.get_component(t.item.menu),{tag:"component",staticClass:"menu",class:t.item.menu_class,attrs:{menu:t.item.menu,width:t.item.menu_width,height:t.item.menu_height}}):t._e()],1)},l=[],m=n("b90b"),d=n.n(m),p=n("2670"),b=n("de35"),h={mixins:[b["a"]],components:{BarMenu:p["default"]},props:{item:{type:Object,required:!0},is_open:Boolean},computed:{is_menu:function(){return!!this.item.menu},button_class:function(){var t=this.is_open&&this.is_menu,e=this.item.active,n=this.item.disabled;return{open:t,active:e,disabled:n}},title:function(){if(this.item.title){var t=this.item.title;return this.hotkey&&(t+=" ("+this.hotkey+")"),t}return!1}},methods:{get_emoji:function(t){return d.a.get(t)},get_component:function(t){return t&&!Array.isArray(t)&&"object"==Object(s["a"])(t)?t:"bar-menu"}}},f=h,_=n("2877"),g=Object(_["a"])(f,u,l,!1,null,null,null),x=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({staticClass:"bar-button",class:t.button_class,attrs:{title:t.title},on:{mousedown:t.mousedown_handler}},t.$listeners),[n("div",{staticClass:"color-square",style:{"background-color":t.css_color}}),n("div",{staticClass:"menu",class:t.item.menu_class,on:{click:function(e){return!t.item.stay_open||e.stopPropagation()}}},[n(t.item.type||"compact",{tag:"component",model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])},k=[],y=n("5530"),C=n("c345"),w=n.n(C),j={mixins:[x],components:Object(y["a"])({},w.a),data:function(){return{color:this.item.color}},computed:{is_menu:function(){return!0},css_color:function(){return this.color.hex8||this.color||"#000"}},methods:{mousedown_handler:function(t){"input"!=t.target.tagName.toLowerCase()&&t.preventDefault()}},watch:{color:function(t){this.item.update_color&&this.item.update_color(t)},"item.color":function(t){this.color=t}}},O=j,M=(n("75bf"),Object(_["a"])(O,v,k,!1,null,"beab8e3e",null)),P=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-separator"})},A=[],B={},H=Object(_["a"])(B,L,A,!1,null,null,null),$=H.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-spacer"})},S=[],T={},D=Object(_["a"])(T,E,S,!1,null,null,null),I=D.exports,N=(n("619b"),{components:{BarButtonGeneric:x,BarButtonColor:P,BarSeparator:$,BarSpacer:I},props:{content:{type:Array,required:!0}},data:function(){return{menu_open:!1}},methods:{clickaway:function(t){this.$el.contains(t.target)||(this.menu_open=!1)},toggle_menu:function(t,e){e.stopPropagation();var n=this.$refs[t][0],o=n.item&&n.item.disabled,i=e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents;this.menu_open=!(!n.is_menu||o)&&(!!i||!this.menu_open)},get_component:function(t){return t&&!Array.isArray(t)&&"object"==Object(s["a"])(t)?t:"string"==typeof t?"bar-"+t:"bar-button-generic"}},mounted:function(){document.addEventListener("click",this.clickaway)},beforeDestroy:function(){document.removeEventListener("click",this.clickaway)}}),z=N,R=(n("54a7"),Object(_["a"])(z,a,c,!1,null,"797333a2",null)),q=R.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-button",on:{mousedown:function(t){return t.preventDefault()},click:function(e){return t.item.click?t.item.click(e):e.stopPropagation()}}},[n("div",{staticClass:"label"},[t._v(t._s(t.item.text))])])},G=[],U={props:{item:Object}},Y=U,J=(n("35bc"),Object(_["a"])(Y,F,G,!1,null,"43ce8576",null)),V=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-menu-item",on:{mousedown:function(t){return t.preventDefault()},click:function(e){return t.item.click?t.item.click(e):e.stopPropagation()}}},[n("div",{staticClass:"label"},[t._v(t._s(t.item.text))])])},Q=[],Z={props:{item:Object}},K=Z,X=(n("f03b"),Object(_["a"])(K,W,Q,!1,null,"276f6af6",null)),tt=X.exports;o["a"].component("v-style",{render:function(t){return t("style",this.$slots.default)}});var et={components:{VueFileToolbarMenu:q},data:function(){return{initial_html:"Try me! Here is some <strong>contenteditable</strong> &lt;div&gt; for the demo.",color:"rgb(74, 238, 164)",font:"Avenir",theme:"default",edit_mode:!0,check1:!1,check2:!1,check3:!0}},computed:{bars_content:function(){var t=this,e="mac-os"==this.theme?[{html:'<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--bar-font-color, black)" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/></svg>',menu:[{text:"Log Out",hotkey:"shift+command+q",click:function(){return alert("No way!")}}]},{html:'<span style="font-weight:700">YourApp</span>',menu:[{text:"Quit",hotkey:"command+q",click:function(){return alert("No way!")}}]}]:[];return[[].concat(e,[{text:"File",menu:[{text:"New",click:function(){t.$refs.text.innerHTML=t.initial_html,t.focus_text()}},{text:"Save...",click:function(){return alert("You're amazing, "+(prompt("What's your name?")||"friend")+"!")}},{is:"separator"},{text:"Print...",click:function(){return window.print()}},{is:"separator"},{text:"Close",click:function(){confirm("Do you want to close the page?")&&window.close()}}]},{text:"Edit",menu:[{text:"Cut",click:function(){return document.execCommand("cut")}},{text:"Copy",click:function(){return document.execCommand("copy")}},{text:"Paste",click:function(){navigator.clipboard.readText().then((function(t){document.execCommand("insertText",!1,t)}))}}]},{text:"Formats",menu:[{text:"Basic"},{text:"Disabled",disabled:!0},{text:"Sub-menus",custom_chevron:"default"!=this.theme&&"►",menu:[{text:"Hello!"},{text:"I'm a sub-menu",custom_chevron:"default"!=this.theme&&"►",menu:[{text:"And I'm another sub-menu!"}],menu_width:240}],menu_width:200},{text:"Hotkey",hotkey:this.isMacLike?"command+e":"ctrl+e",click:function(){alert("Hotkey menu triggered either via clicking or shortcut.")}},{text:"Material icon",icon:"shopping_cart",click:function(){return window.open("https://material.io/resources/icons","_blank")}},{text:"Platform emoji",emoji:"call_me_hand",click:function(){return window.open("https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json","_blank")}},{text:"Menu text is wrapped when it is too long"},{is:tt,text:"Your component",click:function(){return alert("Your custom action!")}},{is:"separator"},{text:"Option 1",icon:this.check1?"radio_button_unchecked":"radio_button_checked",click:function(e){e.stopPropagation(),t.check1=!1}},{text:"Option 2",icon:this.check1?"radio_button_checked":"radio_button_unchecked",click:function(e){e.stopPropagation(),t.check1=!0}},{is:"separator"},{text:"Option 3",icon:this.check2?"check_box":"check_box_outline_blank",click:function(e){e.stopPropagation(),t.check2=!t.check2}},{text:"Option 4",icon:this.check3?"check_box":"check_box_outline_blank",click:function(e){e.stopPropagation(),t.check3=!t.check3}}],menu_width:220},{text:"Help",menu:[{text:"About",icon:"help",click:function(){return alert("vue-file-toolbar-menu\nhttps://github.com/motla/vue-file-toolbar-menu\nby @motla\nMIT License")}},{is:"separator"},{text:"Repository",icon:"exit_to_app",click:function(){return window.open("https://github.com/motla/vue-file-toolbar-menu")}},{text:"API",icon:"exit_to_app",click:function(){return window.open("https://github.com/motla/vue-file-toolbar-menu/blob/master/API.md")}},{text:"Report Issue",icon:"exit_to_app",click:function(){return window.open("https://github.com/motla/vue-file-toolbar-menu/issues")}},{text:"Release Notes",icon:"exit_to_app",click:function(){return window.open("https://github.com/motla/vue-file-toolbar-menu/blob/master/CHANGELOG.md")}}],menu_width:220},{is:"spacer"},{icon:this.edit_mode?"lock_open":"lock",title:"Toggle edit mode",active:!this.edit_mode,click:function(){t.edit_mode=!t.edit_mode}}]),[{icon:"format_align_left",title:"Align left",hotkey:this.isMacLike?"shift+command+l":"ctrl+shift+l",click:function(){return document.execCommand("justifyLeft")}},{icon:"format_align_center",title:"Align center",hotkey:this.isMacLike?"shift+command+e":"ctrl+shift+e",click:function(){return document.execCommand("justifyCenter")}},{icon:"format_align_right",title:"Align right",hotkey:this.isMacLike?"shift+command+r":"ctrl+shift+r",click:function(){return document.execCommand("justifyRight")}},{icon:"format_align_justify",title:"Justify content",hotkey:this.isMacLike?"shift+command+j":"ctrl+shift+j",click:function(){return document.execCommand("justifyFull")}},{is:"separator"},{icon:"format_bold",title:"Bold",hotkey:this.isMacLike?"command+b":"ctrl+b",click:function(){return document.execCommand("bold")}},{icon:"format_italic",title:"Italic",hotkey:this.isMacLike?"command+i":"ctrl+i",click:function(){return document.execCommand("italic")}},{icon:"format_underline",title:"Underline",hotkey:this.isMacLike?"command+u":"ctrl+u",click:function(){return document.execCommand("underline")}},{icon:"format_strikethrough",title:"Strike through",click:function(){return document.execCommand("strikethrough")}},{is:"button-color",type:"compact",menu_class:"align-center",stay_open:!1,color:this.color,update_color:function(e){t.color=e,document.execCommand("foreColor",!1,e.hex8)}},{is:"separator"},{html:'<div class="ellipsis" style="width: 80px; font-size: 95%;">'+this.font+"</div>",title:"Font",chevron:!0,menu:this.font_menu,menu_height:200},{is:"separator"},{icon:"format_list_numbered",title:"Numbered list",click:function(){return document.execCommand("insertOrderedList")}},{icon:"format_list_bulleted",title:"Bulleted list",click:function(){return document.execCommand("insertUnorderedList")}},{is:"separator"},{icon:"format_indent_increase",title:"Increase indent",click:function(){return document.execCommand("indent")}},{icon:"format_indent_decrease",title:"Decrease indent",click:function(){return document.execCommand("outdent")}},{is:"separator"},{is:V,text:"Your component",click:function(){return alert("Your custom action!")}},{is:"separator"},{html:"<b>H1</b>",title:"Header 1",click:function(){return document.execCommand("formatBlock",!1,"<h1>")}},{html:"<b>H2</b>",title:"Header 2",click:function(){return document.execCommand("formatBlock",!1,"<h2>")}},{html:"<b>H3</b>",title:"Header 3",click:function(){return document.execCommand("formatBlock",!1,"<h3>")}},{icon:"format_clear",text:"Clear",title:"Clear format",click:function(){document.execCommand("removeFormat"),document.execCommand("formatBlock",!1,"<div>")}}]]},isMacLike:function(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)},font_menu:function(){var t=this;return this.font_list.map((function(e){return{html:'<span class="ellipsis" style="font-family:'+e+'">'+e+"</span>",icon:"default"!=t.theme&&t.font==e&&"check",active:t.font==e,height:20,click:function(){document.execCommand("fontName",!1,e),t.font=e}}}))},font_list:function(){return["Arial","Avenir","Courier New","Garamond","Georgia","Impact","Helvetica","Palatino","Roboto","Times New Roman","Verdana"]},is_touch_device:function(){return"ontouchstart"in window||window.navigator.msMaxTouchPoints>0}},methods:{focus_text:function(){this.$refs.text.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()}},mounted:function(){this.is_touch_device||this.focus_text()}},nt=et,ot=(n("bfab"),n("a2b9"),Object(_["a"])(nt,i,r,!1,null,"52fe8aac",null)),it=ot.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(it)}}).$mount("#app")},"6e59":function(t,e,n){},"75bf":function(t,e,n){"use strict";var o=n("b411"),i=n.n(o);i.a},a2b9:function(t,e,n){"use strict";var o=n("e564"),i=n.n(o);i.a},b411:function(t,e,n){},b566:function(t,e,n){},bfab:function(t,e,n){"use strict";var o=n("1e9b"),i=n.n(o);i.a},db0f:function(t,e,n){},de35:function(t,e,n){"use strict";n("4de4"),n("ac1f"),n("5319");var o=n("9b6a");o["a"].filter=function(){return!0},e["a"]={props:{item:{type:Object,required:!0}},computed:{isMacLike:function(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)},hotkey:function(){var t=this.item.hotkey;return"string"==typeof t&&(t=t.toUpperCase(),t=t.replace(/(shift|⇧)\+/gi,this.isMacLike?"⇧":"Shift+"),t=t.replace(/(control|ctrl|⌃)\+/gi,this.isMacLike?"⌃":"Ctrl+"),t=t.replace(/(option|alt|⌥)\+/gi,this.isMacLike?"⌥":"Alt+"),t=t.replace(/(cmd|command|⌘)\+/gi,this.isMacLike?"⌘":"Cmd+"),t)}},methods:{update_hotkey:function(t,e){e&&o["a"].unbind(e,this.hotkey_fn),t&&Object(o["a"])(t,this.hotkey_fn)},hotkey_fn:function(t,e){t.preventDefault(),this.item.click&&this.item.click(t,e)}},watch:{"item.hotkey":{handler:"update_hotkey",immediate:!0}},beforeDestroy:function(){this.item.hotkey&&o["a"].unbind(this.item.hotkey,this.hotkey_fn)}}},e564:function(t,e,n){},f03b:function(t,e,n){"use strict";var o=n("db0f"),i=n.n(o);i.a}});
//# sourceMappingURL=app.88e94ce0.js.map