(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6,11],{371:function(e,t,n){"use strict";var r=n(10),o=n(4),l=n(7),c=n(117),d=n(19),h=n(12),f=n(230),m=n(44),v=n(88),w=n(231),x=n(3),_=n(87).f,y=n(38).f,E=n(18).f,N=n(374),M=n(375).trim,k="Number",I=o.Number,j=I.prototype,C=o.TypeError,$=l("".slice),L=l("".charCodeAt),A=function(e){var t=w(e,"number");return"bigint"==typeof t?t:F(t)},F=function(e){var t,n,r,o,l,c,d,code,h=w(e,"number");if(v(h))throw C("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=M(h),43===(t=L(h,0))||45===t){if(88===(n=L(h,2))||120===n)return NaN}else if(48===t){switch(L(h,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(c=(l=$(h,2)).length,d=0;d<c;d++)if((code=L(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+h};if(c(k,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var P,S=function(e){var t=arguments.length<1?0:I(A(e)),n=this;return m(j,n)&&x((function(){N(n)}))?f(Object(t),n,S):t},X=r?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;X.length>R;R++)h(I,P=X[R])&&!h(S,P)&&E(S,P,y(I,P));S.prototype=j,j.constructor=S,d(o,k,S,{constructor:!0})}},372:function(e,t,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(116).default)("6737d458",content,!0,{sourceMap:!1})},373:function(e,t,n){"use strict";n.r(t);n(371),n(68);var r=n(0),o=n(391);function l(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(e=Math.ceil(e),t=Math.floor(t));var r=Math.random()*(t-e)+e;return n?Math.floor(r):r}var c=r.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return l(30,60)},generateY:function(){var element=this.$refs.el;return element?l(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?l(-30,element.clientWidth):0},beforeEnter:function(e){var t=this.generateSize();e.style.opacity="1",e.style.width=t+"px",e.style.height=t+"px",e.style.left=this.generateX()+"px",e.style.bottom=this.generateY()-t+"px"},enter:function(e,t){var n=this;Object(o.a)({targets:e,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:l(0,this.maxDelay),complete:function(){t()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),d=(n(377),n(54)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{ref:"el",staticClass:"wrapper"},[t("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},e._l(e.amount,(function(i){return t("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[e._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);t.default=component.exports},374:function(e,t,n){var r=n(7);e.exports=r(1..valueOf)},375:function(e,t,n){var r=n(7),o=n(27),l=n(15),c=n(376),d=r("".replace),h="["+c+"]",f=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),v=function(e){return function(t){var n=l(o(t));return 1&e&&(n=d(n,f,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},376:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(e,t,n){"use strict";n(372)},378:function(e,t,n){var r=n(115)(!1);r.push([e.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),e.exports=r},390:function(e,t,n){e.exports=n.p+"img/fire.92687bb.svg"},398:function(e,t,n){e.exports=n.p+"img/thumbs-up.827ac8b.svg"},400:function(e,t,n){e.exports=n.p+"img/biceps.8cc1521.svg"},410:function(e,t,n){e.exports=n.p+"img/heart-eyes.6e66e91.svg"},411:function(e,t,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(116).default)("44ce232e",content,!0,{sourceMap:!1})},414:function(e,t,n){e.exports=n.p+"img/hundred.e08fdf2.svg"},435:function(e,t,n){"use strict";n(411)},436:function(e,t,n){var r=n(115),o=n(232),l=n(390),c=n(410),d=n(437),h=n(398),f=n(400),m=r(!1),v=o(l),w=o(c),x=o(d),_=o(h),y=o(f);m.push([e.i,".sticker[data-v-b2b030a6]{padding:24px;min-width:180px}.caption[data-v-b2b030a6]{color:#000;font-size:16px;text-align:center;margin-bottom:16px}.meter-wrapper[data-v-b2b030a6]{position:relative}.meter-line[data-v-b2b030a6],.meter-path[data-v-b2b030a6]{border-radius:20px;height:8px}.meter-path[data-v-b2b030a6]{position:relative;background-color:var(--color-gray)}.meter-line[data-v-b2b030a6]{background-color:var(--color-pink);position:relative}.meter-handle[data-v-b2b030a6]{position:absolute;background-size:100% auto;background-repeat:no-repeat;height:30px;width:30px;cursor:pointer;right:-6px;top:-16px}.meter-handle.fire[data-v-b2b030a6]{background-image:url("+v+")}.meter-handle.heart-eyes[data-v-b2b030a6]{top:-12px;background-image:url("+w+")}.meter-handle.hundred[data-v-b2b030a6]{top:-12px;background-image:url("+x+")}.meter-handle.thumbs-up[data-v-b2b030a6]{background-image:url("+_+")}.meter-handle.biceps[data-v-b2b030a6]{background-image:url("+y+")}",""]),e.exports=m},437:function(e,t,n){e.exports=n.p+"img/hundred2.3dc3ded.svg"},461:function(e,t,n){"use strict";n.r(t);var r=n(36),o=(n(69),n(0).default.extend({name:"StickerMeter",props:{animate:{type:Boolean,default:!1},emoji:{validator:function(e){return["fire","heart-eyes","hundred","thumbs-up","biceps"].includes(e)},default:"fire"}},data:function(){return{value:12,captured:0,amount:0}},watch:{value:function(e){this.$emit("change",e),this.animate&&100===e&&this.handle100Perc()}},methods:{handle100Perc:function(){this.amount=30},handleFloodComplete:function(){this.amount=0},handleHold:function(e){if(!e.target)return!1;var t=0;e.clientX&&(t=e.clientX),e.touches&&(t=e.touches[0].clientX);var n=e.target;this.captured=t-n.offsetLeft-n.clientWidth,window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("touchmove",this.handleMove),window.addEventListener("touchend",this.handleRelease)},handleMove:function(e){if(!this.$refs.line)return!1;var t=this.$refs.line,n=this.$refs.handle,r=0;e.clientX&&(r=e.pageX),e.touches&&(r=e.touches[0].pageX);var o=t.clientWidth,l=n.clientWidth,c=r-this.captured;this.value=Math.max(Math.min(o,c),l/2)/o*100},handleRelease:function(){window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleRelease),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleRelease)}}})),l=(n(435),n(54)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"sticker",on:{touchstart:function(e){e.stopPropagation()}}},[t("div",{staticClass:"meter-wrapper"},[e.$slots.default?t("div",{staticClass:"caption"},[e._t("default")],2):e._e(),e._v(" "),t("div",{ref:"line",staticClass:"meter-path"},[t("div",{staticClass:"meter-line",style:{width:e.value+"%"}},[t("div",{ref:"handle",staticClass:"meter-handle",class:Object(r.a)({},e.emoji,!!e.emoji),on:{mousedown:function(t){return t.stopPropagation(),e.handleHold.apply(null,arguments)},touchstart:function(t){return t.stopPropagation(),e.handleHold.apply(null,arguments)}}})])])]),e._v(" "),e.animate?t("Portal",{attrs:{to:"emotions"}},[t("FloodAnimation",{attrs:{amount:e.amount},on:{complete:e.handleFloodComplete}},["fire"===e.emoji?t("img",{attrs:{src:n(390)}}):e._e(),e._v(" "),"heart-eyes"===e.emoji?t("img",{attrs:{src:n(410)}}):e._e(),e._v(" "),"hundred"===e.emoji?t("img",{attrs:{src:n(414)}}):e._e(),e._v(" "),"thumbs-up"===e.emoji?t("img",{attrs:{src:n(398)}}):e._e(),e._v(" "),"biceps"===e.emoji?t("img",{attrs:{src:n(400)}}):e._e()])],1):e._e()],1)}),[],!1,null,"b2b030a6",null);t.default=component.exports;installComponents(component,{FloodAnimation:n(373).default})}}]);