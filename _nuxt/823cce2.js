(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{385:function(e,t,n){"use strict";n.r(t);n(46),n(35),n(45),n(13),n(70),n(39),n(71);var r=n(30);n(366);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(1).default.extend({name:"VueNode",props:{node:{type:[Object,String,Number],default:null}},render:function(){if(this.node.componentOptions&&(this.node.componentOptions.listeners=this.$listeners,this.node.componentOptions.propsData=c(c({},this.node.componentOptions.propsData),this.$attrs)),this.node.componentInstance){var e=c({},this.node.componentInstance._props);for(var t in this.$attrs)t in e&&(e[t]=this.$attrs[t]);this.node.componentInstance._props=e}return this.node}}),l=n(54),component=Object(l.a)(d,undefined,undefined,!1,null,null,null);t.default=component.exports},392:function(e,t,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("2f0b6936",content,!0,{sourceMap:!1})},423:function(e,t,n){"use strict";n(392)},424:function(e,t,n){var r=n(113)(!1);r.push([e.i,".wrapper[data-v-69d8fe9f]{height:100%;display:flex;flex-direction:column}.header[data-v-69d8fe9f]{font-size:16px;font-weight:700;height:60px;flex-shrink:0;flex-grow:0}.header-content[data-v-69d8fe9f]{display:flex;padding:20px;font-size:16px}.header .watch-all[data-v-69d8fe9f]{margin-left:auto}.slider-wrapper[data-v-69d8fe9f]{flex-grow:1;flex-shrink:1;height:calc(100% - 76px)}.reels[data-v-69d8fe9f]{height:100%}.reels-item[data-v-69d8fe9f]{padding-left:20px;box-sizing:border-box;height:100%}.reels-item>div[data-v-69d8fe9f]{height:calc(100% - 20px);width:calc(100% - 18px);background-color:var(--color-bg);overflow:hidden;border-radius:16px;margin:2px 8px 16px;box-shadow:0 4px 10px rgba(0,0,0,.1)}.reels[data-v-69d8fe9f] ul.hooper-track{flex-direction:row;height:100%}",""]),e.exports=r},434:function(e,t,n){"use strict";n.r(t);n(45),n(13),n(366);var r=n(1),o=n(406),c=n(385),d=r.default.extend({name:"ReelsFeed",components:{Hooper:o.a,Slide:o.c,VueNode:c.default},props:{itemsToShow:{type:Number,default:1.25},caption:{type:String,default:""}}}),l=(n(423),n(54)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[t("div",{staticClass:"header-content"},[t("div",{staticClass:"caption"},[e._v("\n        "+e._s(e.caption)+"\n      ")])])]),e._v(" "),t("div",{staticClass:"slider-wrapper",on:{wheel:function(e){e.stopPropagation()},mousedown:function(e){e.stopPropagation()},mousemove:function(e){e.stopPropagation()}}},[t("Hooper",{staticClass:"reels",attrs:{progress:"true",vertical:!1,"items-to-show":e.itemsToShow}},e._l((e.$slots.default||[]).filter((function(slot){return void 0!==slot.tag})),(function(e,i){return t("Slide",{key:i,staticClass:"reels-item"},[t("div",[t("VueNode",{attrs:{node:e}})],1)])})),1)],1)])}),[],!1,null,"69d8fe9f",null);t.default=component.exports;installComponents(component,{VueNode:n(385).default})},437:function(e,t,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("59c083e8",content,!0,{sourceMap:!1})},439:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(48),n(440),n(13),n(28),n(447),n(449),n(450),n(451),n(452),n(453),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(29),n(57),n(69),n(73),n(45),n(1)),c=n(462),d=n.n(c),l=n(434),f=n(139),E=Object(f.a)(),O=o.default.extend({name:"ClientsResults",components:{RichTextRenderer:d.a,ReelsFeed:l.default},data:function(){return{items:[],assetsUrls:new Map,programTitles:new Map}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getEntries({content_type:"cases"});case 2:n=t.sent,e.items=n.items,e.assetsUrls=new Map((n.includes.Asset||[]).map((function(e){return[e.sys.id,e.fields.file.url]}))),e.programTitles=new Map((n.includes.Entry||[]).filter((function(e){return"programs"===e.sys.contentType.sys.id})).map((function(e){return[e.sys.id,e.fields.title]})));case 6:case"end":return t.stop()}}),t)})))()},fetchOnServer:!0}),L=(n(463),n(54)),component=Object(L.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"clients-results"},[t("ReelsFeed",{attrs:{caption:"Результаты тренировок со мной"}},e._l(e.items,(function(n){return t("div",{key:n.sys.id,staticClass:"user-case"},[t("div",{staticClass:"image"},[t("div",{staticClass:"image-bg",style:{backgroundImage:"url(".concat(e.assetsUrls.get(n.fields.photo.sys.id),")")}}),e._v(" "),t("img",{attrs:{src:e.assetsUrls.get(n.fields.photo.sys.id),alt:""}})]),e._v(" "),t("div",{staticClass:"desc"},[t("div",{staticClass:"desc-header"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(n.fields.terms)+"\n          ")]),e._v(" "),t("div",{staticClass:"subtitle"},[e._v("\n            "+e._s(e.programTitles.get(n.fields.program.sys.id))+"\n          ")])]),e._v(" "),t("div",{staticClass:"desc-content"},[t("div",{on:{wheel:function(e){e.stopPropagation()},touchstart:function(e){e.stopPropagation()}}},[t("RichTextRenderer",{attrs:{document:n.fields.desc}})],1)]),e._v(" "),t("div",{staticClass:"bar"})])])})),0)],1)}),[],!1,null,"74c11cda",null);t.default=component.exports;installComponents(component,{ReelsFeed:n(434).default})},462:function(e,t,n){(function(t){var n;n=function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function r(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(n){e(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function f(e,t){return e(t={exports:{}},t.exports),t.exports}var E=f((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}));l(E),E.BLOCKS;var O=f((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"}));l(O),O.INLINES;var L=f((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));l(L);var _=f((function(e,t){var n,r=d&&d.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[E.BLOCKS.TABLE,E.BLOCKS.TABLE_ROW,E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[E.BLOCKS.HR,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[E.BLOCKS.OL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.UL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[E.BLOCKS.QUOTE]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE]=[E.BLOCKS.TABLE_ROW],n[E.BLOCKS.TABLE_ROW]=[E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],n[E.BLOCKS.TABLE_CELL]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE_HEADER_CELL]=[E.BLOCKS.PARAGRAPH],n),t.HEADINGS=[E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([E.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[E.BLOCKS.DOCUMENT,E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.LIST_ITEM,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,O.INLINES.HYPERLINK,O.INLINES.ENTRY_HYPERLINK,O.INLINES.ASSET_HYPERLINK,O.INLINES.EMBEDDED_ENTRY,"text"]}));l(_),_.V1_NODE_TYPES,_.TEXT_CONTAINERS,_.HEADINGS,_.CONTAINERS,_.VOID_BLOCKS,_.TABLE_BLOCKS,_.LIST_ITEM_BLOCKS,_.TOP_LEVEL_BLOCKS;var S=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));l(S);var v=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));l(v);var C=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:E.BLOCKS.DOCUMENT,data:{},content:[{nodeType:E.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));l(C);var y=f((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++)if(t===e[r[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(O.INLINES,e.nodeType)},t.isBlock=function(e){return n(E.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));l(y),y.isText,y.isBlock,y.isInline;var B=f((function(e,t){var n=d&&d.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var desc=Object.getOwnPropertyDescriptor(t,n);desc&&!("get"in desc?!t.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,desc)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=d&&d.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=d&&d.__exportStar||function(e,t){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(t,p)||n(t,e,p)},c=d&&d.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},l=d&&d.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return E.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return O.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(L).default}}),o(_,t),o(S,t),o(v,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(C).default}});var f=c(y);t.helpers=f}));l(B);var T=B.helpers;B.EMPTY_DOCUMENT;var h,I,A=B.MARKS,N=B.INLINES,D=B.BLOCKS,m=function(e,t,n,r){return r("span",{key:n,style:{margin:"0px 5px",padding:"0 .25rem 0 .75rem",border:"1px solid #d3dce0",fontFamily:"monospace"}},"inline: ".concat(e,", sys.id: ").concat(t.data.target.sys.id))},K=(e(h={},A.BOLD,(function(e,t,n){return n("strong",{key:t},e)})),e(h,A.ITALIC,(function(e,t,n){return n("em",{key:t},e)})),e(h,A.UNDERLINE,(function(e,t,n){return n("u",{key:t},e)})),e(h,A.CODE,(function(e,t,n){return n("code",{key:t},e)})),h),x=(e(I={},D.PARAGRAPH,(function(e,t,n,r){return n("p",{key:t},r(e.content,t,n,r))})),e(I,D.HEADING_1,(function(e,t,n,r){return n("h1",{key:t},r(e.content,t,n,r))})),e(I,D.HEADING_2,(function(e,t,n,r){return n("h2",{key:t},r(e.content,t,n,r))})),e(I,D.HEADING_3,(function(e,t,n,r){return n("h3",{key:t},r(e.content,t,n,r))})),e(I,D.HEADING_4,(function(e,t,n,r){return n("h4",{key:t},r(e.content,t,n,r))})),e(I,D.HEADING_5,(function(e,t,n,r){return n("h5",{key:t},r(e.content,t,n,r))})),e(I,D.HEADING_6,(function(e,t,n,r){return n("h6",{key:t},r(e.content,t,n,r))})),e(I,D.EMBEDDED_ENTRY,(function(e,t,n,r){return n("div",{key:t},r(e.content,t,n,r))})),e(I,D.UL_LIST,(function(e,t,n,r){return n("ul",{key:t},r(e.content,t,n,r))})),e(I,D.OL_LIST,(function(e,t,n,r){return n("ol",{key:t},r(e.content,t,n,r))})),e(I,D.LIST_ITEM,(function(e,t,n,r){return n("li",{key:t},r(e.content,t,n,r))})),e(I,D.QUOTE,(function(e,t,n,r){return n("blockquote",{key:t},r(e.content,t,n,r))})),e(I,D.TABLE,(function(e,t,n,r){return n("table",{key:t},r(e.content,t,n,r))})),e(I,D.TABLE_ROW,(function(e,t,n,r){return n("tr",{key:t},r(e.content,t,n,r))})),e(I,D.TABLE_CELL,(function(e,t,n,r){return n("td",{key:t},r(e.content,t,n,r))})),e(I,D.TABLE_HEADER_CELL,(function(e,t,n,r){return n("th",{key:t},r(e.content,t,n,r))})),e(I,D.HR,(function(e,t,n){return n("hr",{key:t},{})})),e(I,N.ASSET_HYPERLINK,(function(e,t,n){return m(N.ASSET_HYPERLINK,e,t,n)})),e(I,N.ENTRY_HYPERLINK,(function(e,t,n){return m(N.ENTRY_HYPERLINK,e,t,n)})),e(I,N.EMBEDDED_ENTRY,(function(e,t,n){return m(N.EMBEDDED_ENTRY,e,t,n)})),e(I,N.HYPERLINK,(function(e,t,n,r){return n("a",{key:t,attrs:{href:e.data.uri}},r(e.content,t,n,r))})),e(I,"text",(function(e,t,n,r){var c=e.marks,d=e.value;return c.length?o(c).reverse().reduce((function(e,mark,i){return r[mark.type]([e],"".concat(t,"-").concat(i),n)}),d):d})),I),R=function(e,t,n){return e.map((function(e,i){return P(e,"".concat(t,"-").concat(i),n)}))},P=function(e,t,n){var r=n.node,o=n.createElement;if(T.isText(e)){var c=n.mark;return r.text(e,t,o,c)}return r?e.nodeType&&r[e.nodeType]?r[e.nodeType](e,t,o,(function(e){return R(e,t,n)})):"(Unrecognized node type) "+(e.nodeType||"empty"):o("div","".concat(t," ;lost nodeRenderer"))};return{functional:!0,props:["document","nodeRenderers","markRenderers"],render:function(e,t){var n={node:r(r({},x),t.props.nodeRenderers),mark:r(r({},K),t.props.markRenderers),createElement:e};return R(t.props.document.content,"RichText-",n)}}},e.exports=n()}).call(this,n(36))},463:function(e,t,n){"use strict";n(437)},464:function(e,t,n){var r=n(113)(!1);r.push([e.i,'.user-case[data-v-74c11cda]{display:flex;width:auto;max-height:100%;height:100%}.user-case .image[data-v-74c11cda]{max-height:480px;max-width:45%;flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.user-case .image-bg[data-v-74c11cda]{content:"";top:0;left:0;position:absolute;background-image:attr(data-bg);height:100%;width:100%;background-size:cover;filter:blur(10px) grayscale(20%)}.user-case .bar[data-v-74c11cda]{flex-shrink:0;flex-grow:0}.image img[data-v-74c11cda]{position:relative;max-height:100%;max-width:100%}.desc[data-v-74c11cda]{flex-grow:1;flex-shrink:1;font-size:14px;display:flex;flex-direction:column}.desc-header[data-v-74c11cda]{flex-grow:0;flex-shrink:0;border-bottom:1px solid var(--color-border);padding:10px 16px}.desc .title[data-v-74c11cda]{font-weight:700;font-size:15px}.desc .subtitle[data-v-74c11cda]{font-size:12px}.desc-content[data-v-74c11cda]{flex-grow:1;flex-shrink:1;overflow:auto;flex-basis:0px;padding:8px 16px}@media (orientation:portrait){.user-case[data-v-74c11cda]{flex-direction:column}.user-case .image[data-v-74c11cda]{max-width:100%}}@media (orientation:landscape) and (min-height:500px){.clients-results[data-v-74c11cda]{max-height:560px}.clients-results[data-v-74c11cda] .reels-item>div{height:auto}}',""]),e.exports=r}}]);