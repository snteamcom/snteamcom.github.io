(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{366:function(e,t,n){"use strict";var r=n(10),o=n(4),c=n(5),l=n(115),d=n(19),h=n(12),f=n(227),m=n(44),v=n(87),x=n(228),w=n(3),_=n(86).f,y=n(38).f,E=n(18).f,N=n(371),M=n(372).trim,k="Number",I=o.Number,j=I.prototype,C=o.TypeError,$=c("".slice),L=c("".charCodeAt),A=function(e){var t=x(e,"number");return"bigint"==typeof t?t:F(t)},F=function(e){var t,n,r,o,c,l,d,code,h=x(e,"number");if(v(h))throw C("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=M(h),43===(t=L(h,0))||45===t){if(88===(n=L(h,2))||120===n)return NaN}else if(48===t){switch(L(h,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(l=(c=$(h,2)).length,d=0;d<l;d++)if((code=L(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+h};if(l(k,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var S,P=function(e){var t=arguments.length<1?0:I(A(e)),n=this;return m(j,n)&&w((function(){N(n)}))?f(Object(t),n,P):t},X=r?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;X.length>R;R++)h(I,S=X[R])&&!h(P,S)&&E(P,S,y(I,S));P.prototype=j,j.constructor=P,d(o,k,P,{constructor:!0})}},367:function(e,t,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("6737d458",content,!0,{sourceMap:!1})},368:function(e,t,n){"use strict";n.r(t);n(366),n(68);var r=n(1),o=n(386);function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(e=Math.ceil(e),t=Math.floor(t));var r=Math.random()*(t-e)+e;return n?Math.floor(r):r}var l=r.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return c(30,60)},generateY:function(){var element=this.$refs.el;return element?c(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?c(-30,element.clientWidth):0},beforeEnter:function(e){var t=this.generateSize();e.style.opacity="1",e.style.width=t+"px",e.style.height=t+"px",e.style.left=this.generateX()+"px",e.style.bottom=this.generateY()-t+"px"},enter:function(e,t){var n=this;Object(o.a)({targets:e,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:c(0,this.maxDelay),complete:function(){t()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),d=(n(377),n(54)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{ref:"el",staticClass:"wrapper"},[t("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},e._l(e.amount,(function(i){return t("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[e._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);t.default=component.exports},369:function(e,t,n){e.exports=n.p+"img/thumbs-up.827ac8b.svg"},370:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},371:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},372:function(e,t,n){var r=n(5),o=n(27),c=n(15),l=n(373),d=r("".replace),h="["+l+"]",f=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),v=function(e){return function(t){var n=c(o(t));return 1&e&&(n=d(n,f,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},373:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},374:function(e,t,n){e.exports=n.p+"img/biceps.8cc1521.svg"},375:function(e,t,n){e.exports=n.p+"img/fire.92687bb.svg"},377:function(e,t,n){"use strict";n(367)},378:function(e,t,n){var r=n(113)(!1);r.push([e.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),e.exports=r},380:function(e,t,n){e.exports=n.p+"img/heart-eyes.6e66e91.svg"},381:function(e,t,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("45f6790b",content,!0,{sourceMap:!1})},383:function(e,t,n){e.exports=n.p+"img/hundred.e08fdf2.svg"},389:function(e,t,n){"use strict";n(381)},390:function(e,t,n){var r=n(113),o=n(370),c=n(375),l=n(380),d=n(391),h=n(369),f=n(374),m=r(!1),v=o(c),x=o(l),w=o(d),_=o(h),y=o(f);m.push([e.i,".sticker[data-v-a108ac0c]{padding:24px;min-width:180px}.caption[data-v-a108ac0c]{color:#000;font-size:16px;text-align:center;margin-bottom:16px}.meter-wrapper[data-v-a108ac0c]{position:relative}.meter-line[data-v-a108ac0c],.meter-path[data-v-a108ac0c]{border-radius:20px;height:8px}.meter-path[data-v-a108ac0c]{position:relative;background-color:var(--color-gray)}.meter-line[data-v-a108ac0c]{background-color:var(--color-pink);position:relative}.meter-handle[data-v-a108ac0c]{position:absolute;background-size:100% auto;background-repeat:no-repeat;height:30px;width:30px;cursor:pointer;right:-6px;top:-16px}.meter-handle.fire[data-v-a108ac0c]{background-image:url("+v+")}.meter-handle.heart-eyes[data-v-a108ac0c]{top:-12px;background-image:url("+x+")}.meter-handle.hundred[data-v-a108ac0c]{top:-12px;background-image:url("+w+")}.meter-handle.thumbs-up[data-v-a108ac0c]{background-image:url("+_+")}.meter-handle.biceps[data-v-a108ac0c]{background-image:url("+y+")}",""]),e.exports=m},391:function(e,t,n){e.exports=n.p+"img/hundred2.3dc3ded.svg"},408:function(e,t,n){"use strict";n.r(t);var r=n(30),o=(n(69),n(1).default.extend({name:"StickerMeter",props:{caption:{type:String,default:""},animate:{type:Boolean,default:!1},emoji:{validator:function(e){return["fire","heart-eyes","hundred","thumbs-up","biceps"].includes(e)},default:"fire"}},data:function(){return{value:12,captured:0,amount:0}},watch:{value:function(e){this.$emit("change",e),this.animate&&100===e&&this.handle100Perc()}},methods:{handle100Perc:function(){this.amount=30},handleFloodComplete:function(){this.amount=0},handleHold:function(e){if(!e.target)return!1;var t=0;e.clientX&&(t=e.clientX),e.touches&&(t=e.touches[0].clientX);var n=e.target;this.captured=t-n.offsetLeft-n.clientWidth,window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("touchmove",this.handleMove),window.addEventListener("touchend",this.handleRelease)},handleMove:function(e){if(!this.$refs.line)return!1;var t=this.$refs.line,n=this.$refs.handle,r=0;e.clientX&&(r=e.pageX),e.touches&&(r=e.touches[0].pageX);var o=t.clientWidth,c=n.clientWidth,l=r-this.captured;this.value=Math.max(Math.min(o,l),c/2)/o*100},handleRelease:function(){window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleRelease),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleRelease)}}})),c=(n(389),n(54)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"sticker",on:{touchstart:function(e){e.stopPropagation()}}},[t("div",{staticClass:"meter-wrapper"},[e.caption?t("div",{staticClass:"caption"},[e._v("\n      "+e._s(e.caption)+"\n    ")]):e._e(),e._v(" "),t("div",{ref:"line",staticClass:"meter-path"},[t("div",{staticClass:"meter-line",style:{width:e.value+"%"}},[t("div",{ref:"handle",staticClass:"meter-handle",class:Object(r.a)({},e.emoji,!!e.emoji),on:{mousedown:function(t){return t.stopPropagation(),e.handleHold.apply(null,arguments)},touchstart:function(t){return t.stopPropagation(),e.handleHold.apply(null,arguments)}}})])])]),e._v(" "),e.animate?t("Portal",{attrs:{to:"emotions"}},[t("FloodAnimation",{attrs:{amount:e.amount},on:{complete:e.handleFloodComplete}},["fire"===e.emoji?t("img",{attrs:{src:n(375)}}):e._e(),e._v(" "),"heart-eyes"===e.emoji?t("img",{attrs:{src:n(380)}}):e._e(),e._v(" "),"hundred"===e.emoji?t("img",{attrs:{src:n(383)}}):e._e(),e._v(" "),"thumbs-up"===e.emoji?t("img",{attrs:{src:n(369)}}):e._e(),e._v(" "),"biceps"===e.emoji?t("img",{attrs:{src:n(374)}}):e._e()])],1):e._e()],1)}),[],!1,null,"a108ac0c",null);t.default=component.exports;installComponents(component,{FloodAnimation:n(368).default})}}]);