(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{365:function(t,e,o){t.exports=o.p+"img/avatar.7356f33.webp"},370:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},382:function(t,e,o){var content=o(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(114).default)("93ab2cb0",content,!0,{sourceMap:!1})},384:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"short-info"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),e("div",[e("div",{staticClass:"name"},[t._v("\n          Станислав Никитин\n        ")]),t._v(" "),e("div",{staticClass:"major"},[t._v("\n          Тренер\n        ")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"profile"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),e("div",{staticClass:"name"},[t._v("\n        Станислав Никитин\n      ")]),t._v(" "),e("ul",[e("li",[t._v("Телефон: +7 (111) 222-33-44")]),t._v(" "),e("li",[t._v("Whatsapp: +7 (111) 222-33-44")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),e("div",{staticClass:"text"},[t._v("\n        Всем привет! Меня зовут Станислав Никитин и я занимаюсь тем что помогаю людям строить фигуру, о которой они всегда мечтали!\n\n        Накопив огромный опыт и багаж знаний, я могу помочь вам построить действительно впечатляющую, гармоничную и красивую фигуру! И что самое главное в гораздо более короткие сроки, чем это удалось сделать мне самому!\n        Образование Институт физической культуры и спорта, бакалавриат и магистратура с отличием.\n      ")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text"},[t._v("\n          Мой WhatsApp "),e("a",{attrs:{href:"https://wa.me/71112223344"}},[t._v("+7 (111) 222-33-44")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text"},[t._v("\n          Мой номер телефона "),e("a",{attrs:{href:"tel:+71112223344"}},[t._v("+7 (111) 222-33-44")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text"},[t._v("\n          Мой Telegram "),e("a",{attrs:{href:"https://t.me/username"}},[t._v("@username")])])}],n=(o(68),o(1).default.extend({name:"ContactsDialog",data:function(){return{isTyping:!1,messageType:void 0}},methods:{showMessage:function(t){var e=this;this.isTyping=!0,this.messageType=t,window.setTimeout((function(){var t=e.$refs.messageBox;if(e.isTyping=!1,t){var o=t.scrollHeight;t.scrollTo({left:0,top:o,behavior:"smooth"}),t.scrollTo(0,o)}}),1e3)}}})),c=(o(395),o(54)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"contacts"},[e("div",{staticClass:"header"},[e("button",{staticClass:"back",on:{click:function(e){return t.$emit("back")}}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"actions"},[e("button",{staticClass:"telegram",on:{click:function(e){return t.showMessage("telegram")}}}),t._v(" "),e("button",{staticClass:"whatsapp",on:{click:function(e){return t.showMessage("whatsapp")}}}),t._v(" "),e("button",{staticClass:"phone",on:{click:function(e){return t.showMessage("phone")}}})])]),t._v(" "),e("div",{ref:"messageBox",staticClass:"message-box"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isTyping,expression:"isTyping"}],staticClass:"message"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),e("img",{staticClass:"typing",attrs:{src:o(394)}})]),t._v(" "),t.isTyping?t._e():["whatsapp"===t.messageType?e("div",{staticClass:"message"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),t._m(3)]):t._e(),t._v(" "),"phone"===t.messageType?e("div",{staticClass:"message"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),t._m(4)]):t._e(),t._v(" "),"telegram"===t.messageType?e("div",{staticClass:"message"},[e("img",{staticClass:"avatar",attrs:{src:o(365),alt:""}}),t._v(" "),t._m(5)]):t._e()]],2)])}),r,!1,null,"7b85b444",null);e.default=component.exports},394:function(t,e,o){t.exports=o.p+"img/typing.424952a.svg"},395:function(t,e,o){"use strict";o(382)},396:function(t,e,o){var r=o(113),n=o(370),c=o(397),l=o(398),d=o(399),v=o(400),f=o(401),m=o(402),h=o(403),x=o(404),_=r(!1),w=n(c),k=n(l),C=n(d),y=n(v),T=n(f),z=n(m),M=n(h),P=n(x);_.push([t.i,".contacts[data-v-7b85b444]{flex-direction:column}.contacts[data-v-7b85b444],.header[data-v-7b85b444]{background-color:var(--color-bg);display:flex}.header[data-v-7b85b444]{align-items:center;width:100%;height:50px;padding:0 20px;flex-grow:0;flex-shrink:0;border-bottom:1px solid var(--color-border)}.header button[data-v-7b85b444]{background-repeat:no-repeat;background-size:auto 100%;height:24px;width:24px;padding:8px;flex-shrink:0}button.back[data-v-7b85b444]{background-image:url("+w+")}@media (prefers-color-scheme:dark){button.back[data-v-7b85b444]{background-image:url("+k+")}}button.phone[data-v-7b85b444]{background-image:url("+C+")}@media (prefers-color-scheme:dark){button.phone[data-v-7b85b444]{background-image:url("+y+")}}button.whatsapp[data-v-7b85b444]{background-image:url("+T+")}@media (prefers-color-scheme:dark){button.whatsapp[data-v-7b85b444]{background-image:url("+z+")}}button.telegram[data-v-7b85b444]{background-image:url("+M+")}@media (prefers-color-scheme:dark){button.telegram[data-v-7b85b444]{background-image:url("+P+")}}.avatar[data-v-7b85b444]{border-radius:50%}.name[data-v-7b85b444]{font-weight:700;color:var(--color-accent-text)}.short-info[data-v-7b85b444]{flex-grow:1;flex-shrink:1;display:flex;align-items:center;padding-left:24px;box-sizing:border-box}.short-info .avatar[data-v-7b85b444]{height:40px;width:40px;margin-right:16px}.short-info .name[data-v-7b85b444]{font-size:14px;height:1.25em;overflow:hidden}.short-info .major[data-v-7b85b444]{font-size:12px}.actions[data-v-7b85b444]{display:flex;grid-gap:12px;gap:12px}.message-box[data-v-7b85b444]{flex-grow:1;flex-shrink:1;overflow:auto;padding:0 20px;scroll-behavior:smooth}.profile[data-v-7b85b444]{padding:40px;text-align:center}.profile .avatar[data-v-7b85b444]{width:160px;height:160px;margin-bottom:20px}.profile .name[data-v-7b85b444]{font-size:18px}.profile ul[data-v-7b85b444]{list-style-type:none;padding:8px 0;margin:0;font-size:12px;color:grey;line-height:1.5em}.message[data-v-7b85b444]{display:flex;align-items:flex-end;margin-bottom:20px}.message .avatar[data-v-7b85b444]{margin-right:16px;height:40px;width:40px}.message .text[data-v-7b85b444]{padding:14px;border-radius:22px;color:#fff;background-color:#3962e1;max-width:70%;font-size:16px}.message .text a[data-v-7b85b444]{color:#fff;font-weight:700}.message .typing[data-v-7b85b444]{height:32px}",""]),t.exports=_},397:function(t,e,o){t.exports=o.p+"img/arrow-left-black.e273e2c.svg"},398:function(t,e,o){t.exports=o.p+"img/arrow-left-white.ae620f2.svg"},399:function(t,e,o){t.exports=o.p+"img/phone-black.5da8016.svg"},400:function(t,e,o){t.exports=o.p+"img/phone-white.b791984.svg"},401:function(t,e,o){t.exports=o.p+"img/whatsapp-black.20fab38.svg"},402:function(t,e,o){t.exports=o.p+"img/whatsapp-white.e6037de.svg"},403:function(t,e,o){t.exports=o.p+"img/tg-black.3998a8f.svg"},404:function(t,e,o){t.exports=o.p+"img/tg-white.c7ac67b.svg"},405:function(t,e,o){var content=o(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(114).default)("4a93bccc",content,!0,{sourceMap:!1})},427:function(t,e,o){"use strict";o(405)},428:function(t,e,o){var r=o(113),n=o(370),c=o(429),l=o(430),d=o(431),v=o(432),f=r(!1),m=n(c),h=n(l),x=n(d),_=n(v);f.push([t.i,".header-wrapper[data-v-22656ab0]{width:100%;background-color:var(--color-bg);border-bottom:1px solid var(--color-border)}header[data-v-22656ab0]{display:flex;max-width:1024px;width:100%;height:50px;box-sizing:border-box;z-index:1;background-image:url("+m+");background-repeat:no-repeat;background-size:auto 40px;background-position:10px;margin:0 auto}@media (prefers-color-scheme:dark){header[data-v-22656ab0]{background-image:url("+h+")}}.contacts[data-v-22656ab0]{position:absolute;top:0;bottom:0;right:0;left:0;transform:translateX(100%);transition:.3s;z-index:2}.contacts.visible[data-v-22656ab0]{transform:translateX(0)}.buttons[data-v-22656ab0]{display:flex;align-items:center;grid-gap:24px;gap:24px;margin-left:auto;height:100%;padding:0 20px}.buttons button[data-v-22656ab0]{background-repeat:no-repeat;background-size:auto 100%;height:24px;width:24px;padding:8px}.buttons .message[data-v-22656ab0]{background-image:url("+x+")}@media (prefers-color-scheme:dark){.buttons .message[data-v-22656ab0]{background-image:url("+_+")}}",""]),t.exports=f},429:function(t,e,o){t.exports=o.p+"img/logo-short-black.0831043.svg"},430:function(t,e,o){t.exports=o.p+"img/logo-short-white.3a1e45f.svg"},431:function(t,e,o){t.exports=o.p+"img/message-question-black.f9cb9dd.svg"},432:function(t,e,o){t.exports=o.p+"img/message-question-white.586c63d.svg"},435:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(384),c=r.default.extend({name:"PageHeader",components:{ContactsDialog:n.default},data:function(){return{isContactsViewVisible:!1}},methods:{toggleContacts:function(t){this.isContactsViewVisible=t}}}),l=(o(427),o(54)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"header-wrapper"},[e("header",[e("div",{staticClass:"buttons"},[e("button",{staticClass:"message",attrs:{type:"button"},on:{click:function(e){return t.toggleContacts(!0)}}})]),t._v(" "),e("portal",{attrs:{to:"contacts-wrapper"}},[e("ContactsDialog",{staticClass:"contacts",class:{visible:t.isContactsViewVisible},on:{back:function(e){return t.toggleContacts(!1)}}})],1)],1)])}),[],!1,null,"22656ab0",null);e.default=component.exports;installComponents(component,{ContactsDialog:o(384).default})}}]);