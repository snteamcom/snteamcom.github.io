(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{382:function(e,t,n){(function(t){var n;n=function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function r(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(n){e(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function E(e,t){return e(t={exports:{}},t.exports),t.exports}var f=E((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}));d(f),f.BLOCKS;var L=E((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"}));d(L),L.INLINES;var O=E((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));d(O);var _=E((function(e,t){var n,r=l&&l.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET,f.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[f.BLOCKS.TABLE,f.BLOCKS.TABLE_ROW,f.BLOCKS.TABLE_CELL,f.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[f.BLOCKS.HR,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[f.BLOCKS.OL_LIST]=[f.BLOCKS.LIST_ITEM],n[f.BLOCKS.UL_LIST]=[f.BLOCKS.LIST_ITEM],n[f.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[f.BLOCKS.QUOTE]=[f.BLOCKS.PARAGRAPH],n[f.BLOCKS.TABLE]=[f.BLOCKS.TABLE_ROW],n[f.BLOCKS.TABLE_ROW]=[f.BLOCKS.TABLE_CELL,f.BLOCKS.TABLE_HEADER_CELL],n[f.BLOCKS.TABLE_CELL]=[f.BLOCKS.PARAGRAPH],n[f.BLOCKS.TABLE_HEADER_CELL]=[f.BLOCKS.PARAGRAPH],n),t.HEADINGS=[f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([f.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[f.BLOCKS.DOCUMENT,f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.LIST_ITEM,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET,L.INLINES.HYPERLINK,L.INLINES.ENTRY_HYPERLINK,L.INLINES.ASSET_HYPERLINK,L.INLINES.EMBEDDED_ENTRY,"text"]}));d(_),_.V1_NODE_TYPES,_.TEXT_CONTAINERS,_.HEADINGS,_.CONTAINERS,_.VOID_BLOCKS,_.TABLE_BLOCKS,_.LIST_ITEM_BLOCKS,_.TOP_LEVEL_BLOCKS;var S=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));d(S);var B=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));d(B);var C=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:f.BLOCKS.DOCUMENT,data:{},content:[{nodeType:f.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));d(C);var T=E((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++)if(t===e[r[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(L.INLINES,e.nodeType)},t.isBlock=function(e){return n(f.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));d(T),T.isText,T.isBlock,T.isInline;var v=E((function(e,t){var n=l&&l.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var desc=Object.getOwnPropertyDescriptor(t,n);desc&&!("get"in desc?!t.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,desc)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=l&&l.__exportStar||function(e,t){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(t,p)||n(t,e,p)},c=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},d=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return f.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return L.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return d(O).default}}),o(_,t),o(S,t),o(B,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return d(C).default}});var E=c(T);t.helpers=E}));d(v);var I=v.helpers;v.EMPTY_DOCUMENT;var A,y,N=v.MARKS,D=v.INLINES,K=v.BLOCKS,m=function(e,t,n,r){return r("span",{key:n,style:{margin:"0px 5px",padding:"0 .25rem 0 .75rem",border:"1px solid #d3dce0",fontFamily:"monospace"}},"inline: ".concat(e,", sys.id: ").concat(t.data.target.sys.id))},x=(e(A={},N.BOLD,(function(e,t,n){return n("strong",{key:t},e)})),e(A,N.ITALIC,(function(e,t,n){return n("em",{key:t},e)})),e(A,N.UNDERLINE,(function(e,t,n){return n("u",{key:t},e)})),e(A,N.CODE,(function(e,t,n){return n("code",{key:t},e)})),A),R=(e(y={},K.PARAGRAPH,(function(e,t,n,r){return n("p",{key:t},r(e.content,t,n,r))})),e(y,K.HEADING_1,(function(e,t,n,r){return n("h1",{key:t},r(e.content,t,n,r))})),e(y,K.HEADING_2,(function(e,t,n,r){return n("h2",{key:t},r(e.content,t,n,r))})),e(y,K.HEADING_3,(function(e,t,n,r){return n("h3",{key:t},r(e.content,t,n,r))})),e(y,K.HEADING_4,(function(e,t,n,r){return n("h4",{key:t},r(e.content,t,n,r))})),e(y,K.HEADING_5,(function(e,t,n,r){return n("h5",{key:t},r(e.content,t,n,r))})),e(y,K.HEADING_6,(function(e,t,n,r){return n("h6",{key:t},r(e.content,t,n,r))})),e(y,K.EMBEDDED_ENTRY,(function(e,t,n,r){return n("div",{key:t},r(e.content,t,n,r))})),e(y,K.UL_LIST,(function(e,t,n,r){return n("ul",{key:t},r(e.content,t,n,r))})),e(y,K.OL_LIST,(function(e,t,n,r){return n("ol",{key:t},r(e.content,t,n,r))})),e(y,K.LIST_ITEM,(function(e,t,n,r){return n("li",{key:t},r(e.content,t,n,r))})),e(y,K.QUOTE,(function(e,t,n,r){return n("blockquote",{key:t},r(e.content,t,n,r))})),e(y,K.TABLE,(function(e,t,n,r){return n("table",{key:t},r(e.content,t,n,r))})),e(y,K.TABLE_ROW,(function(e,t,n,r){return n("tr",{key:t},r(e.content,t,n,r))})),e(y,K.TABLE_CELL,(function(e,t,n,r){return n("td",{key:t},r(e.content,t,n,r))})),e(y,K.TABLE_HEADER_CELL,(function(e,t,n,r){return n("th",{key:t},r(e.content,t,n,r))})),e(y,K.HR,(function(e,t,n){return n("hr",{key:t},{})})),e(y,D.ASSET_HYPERLINK,(function(e,t,n){return m(D.ASSET_HYPERLINK,e,t,n)})),e(y,D.ENTRY_HYPERLINK,(function(e,t,n){return m(D.ENTRY_HYPERLINK,e,t,n)})),e(y,D.EMBEDDED_ENTRY,(function(e,t,n){return m(D.EMBEDDED_ENTRY,e,t,n)})),e(y,D.HYPERLINK,(function(e,t,n,r){return n("a",{key:t,attrs:{href:e.data.uri}},r(e.content,t,n,r))})),e(y,"text",(function(e,t,n,r){var c=e.marks,l=e.value;return c.length?o(c).reverse().reduce((function(e,mark,i){return r[mark.type]([e],"".concat(t,"-").concat(i),n)}),l):l})),y),h=function(e,t,n){return e.map((function(e,i){return H(e,"".concat(t,"-").concat(i),n)}))},H=function(e,t,n){var r=n.node,o=n.createElement;if(I.isText(e)){var c=n.mark;return r.text(e,t,o,c)}return r?e.nodeType&&r[e.nodeType]?r[e.nodeType](e,t,o,(function(e){return h(e,t,n)})):"(Unrecognized node type) "+(e.nodeType||"empty"):o("div","".concat(t," ;lost nodeRenderer"))};return{functional:!0,props:["document","nodeRenderers","markRenderers"],render:function(e,t){var n={node:r(r({},R),t.props.nodeRenderers),mark:r(r({},x),t.props.markRenderers),createElement:e};return h(t.props.document.content,"RichText-",n)}}},e.exports=n()}).call(this,n(28))},391:function(e,t,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(116).default)("71108f29",content,!0,{sourceMap:!1})},412:function(e,t,n){"use strict";n(391)},413:function(e,t,n){var r=n(115)(!1);r.push([e.i,".wrapper[data-v-76a8ab72]{position:relative;overflow:auto;display:flex;flex-direction:column;max-height:100%;background-color:var(--color-bg);color:var(--color-primary-text)}.wrapper[data-v-76a8ab72]:nth-child(2n){background-color:var(--color-black);color:var(--color-white)}.content[data-v-76a8ab72]{width:100%;height:100%;max-width:1360px;margin:auto;position:relative}@media(min-width:768px){.content[data-v-76a8ab72]{padding:40px 0;display:flex}}.text-content[data-v-76a8ab72]{flex-basis:50%}@media(min-width:768px){.text-content[data-v-76a8ab72]{display:flex;flex-direction:column;justify-content:center}}.title[data-v-76a8ab72]{font-family:var(--font-rubik);margin-bottom:0;padding:0 20px;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;word-spacing:0;display:flex;align-items:center;flex:0 0 auto}.title span[data-v-76a8ab72]{background-clip:text;background-image:linear-gradient(90deg,var(--color-purple),var(--color-pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media(min-width:768px){.title[data-v-76a8ab72]{font-size:44px}}.program-desc[data-v-76a8ab72]{justify-items:center;justify-content:space-evenly;flex-direction:column;flex:1 1 auto;overflow:auto;padding:0 20px 20px;font-family:var(--font-rubik)}@media(min-width:768px){.program-desc[data-v-76a8ab72]{flex:initial;flex-shrink:1;font-size:20px;margin-top:20px}}p{margin:8px 0}.program-desc[data-v-76a8ab72] :empty{display:none}.condition-label[data-v-76a8ab72]{display:block;margin-bottom:1em;font-weight:700;text-transform:uppercase;font-family:var(--font-rubik)}.program-pricelist[data-v-76a8ab72]{flex-grow:1;display:flex;flex-direction:column;text-align:center;flex-wrap:wrap;padding:20px;align-items:flex-end;justify-content:center;grid-gap:5vh;gap:5vh}.price-caption[data-v-76a8ab72]{flex-basis:100%;text-align:left}.price-value>span[data-v-76a8ab72]{vertical-align:middle}.price[data-v-76a8ab72]{font-size:28px;cursor:default}@media(min-width:768px){.price[data-v-76a8ab72]{font-size:50px}}.price.sticker[data-v-76a8ab72]{transform:rotate(-3deg)}.button-sticker[data-v-76a8ab72]{position:absolute;width:64px;height:64px;bottom:20px;right:20px;transform:rotate(4deg)}[data-theme=vip][data-v-76a8ab72]{background-size:50vh auto;background-color:#daa520;background:linear-gradient(135deg,gold 20%,#daa520);color:#000}[data-theme=vip] .title[data-v-76a8ab72]{color:#000;background-clip:border-box;background-clip:initial;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;-webkit-text-fill-color:initial}[data-theme=vip] .program-desc>*[data-v-76a8ab72]{color:#000}",""]),e.exports=r},441:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(382),c=n.n(o),l=r.default.extend({name:"ProgramDetails",components:{RichTextRenderer:c.a},props:{program:{type:Object,required:!0}}}),d=(n(412),n(54)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper",attrs:{"data-theme":e.program.fields.theme}},[t("div",{staticClass:"content"},[t("div",{staticClass:"text-content"},[t("h2",{staticClass:"title"},[t("span",[e._v(e._s(e.program.fields.title))])]),e._v(" "),t("div",{directives:[{name:"content-scroll",rawName:"v-content-scroll"}],staticClass:"program-desc"},[t("RichTextRenderer",{attrs:{document:e.program.fields.desc}})],1)]),e._v(" "),t("div",{staticClass:"program-pricelist"},e._l(e.program.fields.price,(function(n,r){var o;return t("div",{key:r,staticClass:"price-value"},[n[1]?e._e():t("span",{staticClass:"condition-label"},[e._v("Стоимость: ")]),e._v(" "),n[1]?t("span",{staticClass:"condition-label"},[e._v("\n          "+e._s(n[1])+"\n        ")]):e._e(),e._v(" "),t("span",{staticClass:"price sticker sticker-link"},[e._v("\n          "+e._s(null===(o=n[0])||void 0===o?void 0:o.toLocaleString())+" ₽\n        ")])])})),0)])])}),[],!1,null,"76a8ab72",null);t.default=component.exports}}]);