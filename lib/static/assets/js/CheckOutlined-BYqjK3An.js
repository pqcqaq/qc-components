import { _ as l, I as d } from "./styleChecker-DxpCOgAe.js";
import { createVNode as u } from "vue";
const p = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, m = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, r = `${p} ${m}`.split(/[\s\n]+/), g = "aria-", h = "data-";
function s(o, e) {
  return o.indexOf(e) === 0;
}
function C(o) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  e === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? n = {
    aria: !0
  } : n = l({}, e);
  const a = {};
  return Object.keys(o).forEach((t) => {
    // Aria
    (n.aria && (t === "role" || s(t, g)) || // Data
    n.data && s(t, h) || // Attr
    n.attr && (r.includes(t) || r.includes(t.toLowerCase()))) && (a[t] = o[t]);
  }), a;
}
var f = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
function c(o) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable;
    }))), a.forEach(function(t) {
      b(o, t, n[t]);
    });
  }
  return o;
}
function b(o, e, n) {
  return e in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
}
var i = function(e, n) {
  var a = c({}, e, n.attrs);
  return u(d, c({}, a, {
    icon: f
  }), null);
};
i.displayName = "CheckOutlined";
i.inheritAttrs = !1;
export {
  i as C,
  C as p
};
