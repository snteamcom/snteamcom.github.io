(window.webpackJsonp=window.webpackJsonp||[]).push([[10,13],{366:function(e,t,r){"use strict";var n=r(10),o=r(4),c=r(5),l=r(115),d=r(19),f=r(12),h=r(227),v=r(44),m=r(87),x=r(228),w=r(3),O=r(86).f,N=r(38).f,y=r(18).f,I=r(371),_=r(372).trim,E="Number",j=o.Number,S=j.prototype,P=o.TypeError,k=c("".slice),C=c("".charCodeAt),T=function(e){var t=x(e,"number");return"bigint"==typeof t?t:A(t)},A=function(e){var t,r,n,o,c,l,d,code,f=x(e,"number");if(m(f))throw P("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=_(f),43===(t=C(f,0))||45===t){if(88===(r=C(f,2))||120===r)return NaN}else if(48===t){switch(C(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=k(f,2)).length,d=0;d<l;d++)if((code=C(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(E,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var V,F=function(e){var t=arguments.length<1?0:j(T(e)),r=this;return v(S,r)&&w((function(){I(r)}))?h(Object(t),r,F):t},D=n?O(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;D.length>M;M++)f(j,V=D[M])&&!f(F,V)&&y(F,V,N(j,V));F.prototype=S,S.constructor=F,d(o,E,F,{constructor:!0})}},371:function(e,t,r){var n=r(5);e.exports=n(1..valueOf)},372:function(e,t,r){var n=r(5),o=r(27),c=r(15),l=r(373),d=n("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(e){return function(t){var r=c(o(t));return 1&e&&(r=d(r,h,"")),2&e&&(r=d(r,v,"")),r}};e.exports={start:m(1),end:m(2),trim:m(3)}},373:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},385:function(e,t,r){"use strict";r.r(t);r(46),r(35),r(45),r(13),r(70),r(39),r(71);var n=r(30);r(366);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=r(1).default.extend({name:"VueNode",props:{node:{type:[Object,String,Number],default:null}},render:function(){if(this.node.componentOptions&&(this.node.componentOptions.listeners=this.$listeners,this.node.componentOptions.propsData=c(c({},this.node.componentOptions.propsData),this.$attrs)),this.node.componentInstance){var e=c({},this.node.componentInstance._props);for(var t in this.$attrs)t in e&&(e[t]=this.$attrs[t]);this.node.componentInstance._props=e}return this.node}}),d=r(54),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports},392:function(e,t,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(114).default)("371f2f6a",content,!0,{sourceMap:!1})},423:function(e,t,r){"use strict";r(392)},424:function(e,t,r){var n=r(113)(!1);n.push([e.i,".wrapper[data-v-199161d2]{height:100%;display:flex;flex-direction:column}.header[data-v-199161d2]{display:flex;padding:20px;font-size:16px;font-weight:700;height:60px}.header .watch-all[data-v-199161d2]{margin-left:auto}.slider-wrapper[data-v-199161d2]{flex-grow:1;flex-shrink:1;max-height:520px;height:100%;padding-bottom:20px}.reels[data-v-199161d2]{height:calc(100% - 60px)}.reels-item[data-v-199161d2]{padding-left:20px;box-sizing:border-box;box-shadow:0 4px 12px rgba(0,0,0,.1);height:100%}.reels-item>div[data-v-199161d2]{height:100%;width:100%;background-color:var(--color-bg);overflow:hidden;border-radius:16px}.reels[data-v-199161d2] ul.hooper-track{flex-direction:row;height:100%}",""]),e.exports=n},434:function(e,t,r){"use strict";r.r(t);r(45),r(13),r(366);var n=r(1),o=r(406),c=r(385),l=n.default.extend({name:"ReelsFeed",components:{Hooper:o.a,Slide:o.c,VueNode:c.default},props:{itemsToShow:{type:Number,default:1.25},caption:{type:String,default:""}}}),d=(r(423),r(54)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[t("div",{staticClass:"caption"},[e._v("\n      "+e._s(e.caption)+"\n    ")])]),e._v(" "),t("div",{staticClass:"slider-wrapper",on:{wheel:function(e){e.stopPropagation()},mousedown:function(e){e.stopPropagation()},mousemove:function(e){e.stopPropagation()}}},[t("Hooper",{staticClass:"reels",attrs:{progress:"true",vertical:!1,"items-to-show":e.itemsToShow}},e._l((e.$slots.default||[]).filter((function(slot){return void 0!==slot.tag})),(function(e,i){return t("Slide",{key:i,staticClass:"reels-item"},[t("div",[t("VueNode",{attrs:{node:e}})],1)])})),1)],1)])}),[],!1,null,"199161d2",null);t.default=component.exports;installComponents(component,{VueNode:r(385).default})}}]);