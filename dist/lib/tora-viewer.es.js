(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".tora-viewer.tora-viewer-root{--default-width: 840;--default-wide-width: 1680;--default-height: 1188}.tora-viewer.tora-viewer-root{font-family:sans-serif;height:100%;margin:0;padding:0;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root *,.tora-viewer.tora-viewer-root :before,.tora-viewer.tora-viewer-root :after{box-sizing:border-box;margin:0;padding:0}.tora-viewer.tora-viewer-root .modal-bg{position:absolute;width:100%;height:100%;inset:0;background-color:#000;opacity:.7}.tora-viewer.tora-viewer-root .modal-bg.viewer-bg{display:none}.tora-viewer.tora-viewer-root button{cursor:pointer}.tora-viewer.tora-viewer-root .viewer-main{width:100%;position:relative;inset:0;display:flex;justify-content:center;pointer-events:none}.tora-viewer.tora-viewer-root .viewer-main>*{pointer-events:auto}.tora-viewer.tora-viewer-root .viewer-thumbnails{overflow:hidden;max-width:25%;max-height:25%;display:flex;align-items:stretch;flex-direction:column;background-color:#fff;aspect-ratio:var(--default-width)/var(--default-height)}.tora-viewer.tora-viewer-root .viewer-thumbnails .viewer-page-thumbnail{width:100%;height:100%;background-color:#fff;display:flex;align-items:center;justify-content:center;aspect-ratio:var(--default-width)/var(--default-height)}.tora-viewer.tora-viewer-root .viewer-thumbnails .viewer-page-thumbnail .viewer-page-thumbnail-content{display:none;width:auto;height:auto;max-width:100%;max-height:100%}.tora-viewer.tora-viewer-root .viewer-thumbnails .viewer-page-thumbnail .viewer-page-thumbnail-content.viewer-page-thumbnail-content{display:block}.tora-viewer.tora-viewer-root svg.viewer-fa-icon{height:1em}.tora-viewer.tora-viewer-root .viewer-pages{scroll-behavior:smooth;display:flex;align-items:stretch;flex-direction:column;scrollbar-width:none;aspect-ratio:var(--default-width)/var(--default-height)}.tora-viewer.tora-viewer-root .viewer-pages::-webkit-scrollbar{display:none}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page{position:relative;width:100%;height:100%;background-color:#fff;aspect-ratio:var(--default-width)/var(--default-height)}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-content{width:auto;height:auto;max-width:100%;max-height:100%}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-content.viewer-page-vertically-long{width:auto;height:100%}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .empty-page-inner{width:100%;height:100%}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .embed-page-inner{width:100%;height:100%;overflow:hidden}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .embed-page-inner .embed-page-default{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-loading{position:absolute;display:none;margin:auto;width:56px;height:56px;border:12px solid rgba(0,0,0,.4);border-top:12px solid transparent;border-radius:40px;-webkit-animation:rolling 1s linear infinite;animation:rolling 1s linear infinite}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-loading.viewer-page-loading-active{display:block}@-webkit-keyframes rolling{0%{transform:rotate(0);transform-origin:center}to{transform:rotate(360deg);transform-origin:center}}@keyframes rolling{0%{transform:rotate(0);transform-origin:center}to{transform:rotate(360deg);transform-origin:center}}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-tap-area{position:absolute;display:none;top:0;width:30%;height:100%;cursor:pointer}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-tap-area.viewer-page-area-left{left:0}.tora-viewer.tora-viewer-root .viewer-pages .viewer-page .viewer-page-tap-area.viewer-page-area-right{right:0}.tora-viewer.tora-viewer-root .viewer-close-button{color:#fff;font-weight:400;font-size:34px;line-height:45px;background-color:#303134;border-width:0;border-radius:50%;position:absolute;width:36px;height:36px;top:2px;right:2px}.tora-viewer.tora-viewer-root .embed-page-default-close{font-weight:400;font-size:24px;width:60%;min-width:200px;max-width:360px;height:60px;border-width:0;border-radius:30px;color:#fff;background-color:#ea4c89}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-main{align-items:center}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-pages{width:100%;height:100%;align-items:center;flex-direction:row-reverse;overflow-x:scroll;scroll-snap-type:x mandatory;aspect-ratio:var(--default-width)/var(--default-height)}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-pages .viewer-page{scroll-snap-align:end;scroll-snap-stop:always;margin:0 20px;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-pages .viewer-page.empty-page{display:none;scroll-snap-align:none}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-pages .viewer-page.embed-page .viewer-page-tap-area{display:none}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-pages .viewer-page .viewer-page-tap-area{display:block}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-thumbnails{flex-direction:row-reverse;scroll-snap-type:x mandatory}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-thumbnails .viewer-page-thumbnail{scroll-snap-align:end;margin:0 10px}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-rtl .viewer-pages .viewer-page:first-child .viewer-page-tap-area.viewer-page-area-right{display:none}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-pages{flex-direction:row}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-pages .viewer-page{scroll-snap-align:start}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-pages .viewer-page:first-child .viewer-page-tap-area.viewer-page-area-left{display:none}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-pages .viewer-page.empty-page{scroll-snap-align:none}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-thumbnails{flex-direction:row}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-thumbnails .viewer-page-thumbnail{scroll-snap-align:start}.tora-viewer.tora-viewer-root.modal-viewer{position:fixed;top:0;left:0;width:100%;height:100%}.tora-viewer.tora-viewer-root.modal-viewer .modal-bg.viewer-bg{display:block}.tora-viewer.tora-viewer-root.modal-viewer .viewer-main{position:absolute}.tora-viewer.tora-viewer-root.modal-viewer .viewer-main .viewer-pages{width:auto}.tora-viewer.tora-viewer-root .page-style-checker{position:absolute;display:none}.tora-viewer.tora-viewer-root.page-style-spread .viewer-main{padding-top:50px;padding-bottom:50px}.tora-viewer.tora-viewer-root.page-style-spread .viewer-close-button{font-size:34px;line-height:45px;background-color:transparent}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(odd){margin-left:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(odd) .viewer-page-area-left{display:none}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(even),.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-pages .viewer-page.empty-page{margin-right:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(even) .viewer-page-area-right,.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-pages .viewer-page.empty-page .viewer-page-area-right{display:none}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-thumbnails .viewer-page-thumbnail:nth-child(odd){margin-left:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-rtl .viewer-thumbnails .viewer-page-thumbnail:nth-child(even){margin-right:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(odd){margin-right:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(odd) .viewer-page-area-right{display:none}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(even),.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-pages .viewer-page.empty-page{margin-left:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(even) .viewer-page-area-left,.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-pages .viewer-page.empty-page .viewer-page-area-left{display:none}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-thumbnails .viewer-page-thumbnail:nth-child(odd){margin-right:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-ltr .viewer-thumbnails .viewer-page-thumbnail:nth-child(even){margin-left:0}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages{aspect-ratio:var(--default-wide-width)/var(--default-height)}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages .viewer-page.regular-page,.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages .viewer-page.empty-page{max-width:50%}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages .viewer-page.regular-page:nth-child(even){scroll-snap-align:none}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages .viewer-page.embed-page{aspect-ratio:var(--default-wide-width)/var(--default-height)}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages .viewer-page.empty-page:nth-child(even){display:flex}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-pages .viewer-page-tap-area{width:60%}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-thumbnails{aspect-ratio:var(--default-wide-width)/var(--default-height)}.tora-viewer.tora-viewer-root.page-style-spread.horizontal-viewer .viewer-thumbnails .viewer-page-thumbnail:nth-child(even){scroll-snap-align:none}.tora-viewer.tora-viewer-root.page-style-spread .page-style-checker{display:block}@media (min-width: 640px) and (orientation: landscape){.tora-viewer.tora-viewer-root.page-style-auto .viewer-main{padding-top:50px;padding-bottom:50px}.tora-viewer.tora-viewer-root.page-style-auto .viewer-close-button{font-size:34px;line-height:45px;background-color:transparent}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(odd){margin-left:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(odd) .viewer-page-area-left{display:none}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(even),.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-pages .viewer-page.empty-page{margin-right:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-pages .viewer-page.regular-page:nth-child(even) .viewer-page-area-right,.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-pages .viewer-page.empty-page .viewer-page-area-right{display:none}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-thumbnails .viewer-page-thumbnail:nth-child(odd){margin-left:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-rtl .viewer-thumbnails .viewer-page-thumbnail:nth-child(even){margin-right:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(odd){margin-right:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(odd) .viewer-page-area-right{display:none}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(even),.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-pages .viewer-page.empty-page{margin-left:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-pages .viewer-page.regular-page:nth-child(even) .viewer-page-area-left,.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-pages .viewer-page.empty-page .viewer-page-area-left{display:none}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-thumbnails .viewer-page-thumbnail:nth-child(odd){margin-right:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-ltr .viewer-thumbnails .viewer-page-thumbnail:nth-child(even){margin-left:0}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages{aspect-ratio:var(--default-wide-width)/var(--default-height)}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages .viewer-page.regular-page,.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages .viewer-page.empty-page{max-width:50%}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages .viewer-page.regular-page:nth-child(even){scroll-snap-align:none}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages .viewer-page.embed-page{aspect-ratio:var(--default-wide-width)/var(--default-height)}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages .viewer-page.empty-page:nth-child(even){display:flex}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-pages .viewer-page-tap-area{width:60%}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-thumbnails{aspect-ratio:var(--default-wide-width)/var(--default-height)}.tora-viewer.tora-viewer-root.page-style-auto.horizontal-viewer .viewer-thumbnails .viewer-page-thumbnail:nth-child(even){scroll-snap-align:none}.tora-viewer.tora-viewer-root.page-style-auto .page-style-checker{display:block}}.tora-viewer.tora-viewer-root .viewer-control-area{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0;visibility:hidden;transition:opacity 1s,visibility 1s;background:linear-gradient(180deg,rgba(255,255,255,0) 70%,rgba(48,49,52,.4290309874) 85%,#1f2021 100%)}.tora-viewer.tora-viewer-root .viewer-control-area.viewer-control-area-visible{opacity:1;visibility:visible}.tora-viewer.tora-viewer-root .viewer-control-area>*{pointer-events:auto}.tora-viewer.tora-viewer-root .viewer-header-ctrl{position:absolute;width:100%;height:50px;inset:0 0 auto;margin:auto;display:flex;align-items:center;justify-content:center;background:#303134}.tora-viewer.tora-viewer-root .viewer-title{display:flex;align-items:center;justify-content:center;width:calc(100% - 72px);font-weight:700;font-size:16px;color:#fff}.tora-viewer.tora-viewer-root .viewer-title .viewer-title-inner{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tora-viewer.tora-viewer-root .arrow-button{position:absolute;top:50%;transform:translateY(-50%);width:100px;height:200px;border-width:0;background-color:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root .arrow-button .arrow-button-inner{display:block;width:32px;height:32px;border:10px solid;border-color:transparent;filter:drop-shadow(0px 0px 10px rgba(0,0,0,.5))}@media only screen and (min-width: 480px){.tora-viewer.tora-viewer-root .arrow-button .arrow-button-inner{width:50px;height:50px}}.tora-viewer.tora-viewer-root .arrow-button.arrow-button-left{left:0}.tora-viewer.tora-viewer-root .arrow-button.arrow-button-left .arrow-button-inner{margin-left:-40px;border-bottom-color:#fff;border-left-color:#fff;transform:scaleX(.8) translate(35.4%) rotate(45deg)}.tora-viewer.tora-viewer-root .arrow-button.arrow-button-right{right:0}.tora-viewer.tora-viewer-root .arrow-button.arrow-button-right .arrow-button-inner{margin-right:-40px;border-top-color:#fff;border-right-color:#fff;transform:scaleX(.8) translate(-35.4%) rotate(45deg)}.tora-viewer.tora-viewer-root .viewer-footer-ctrl{position:absolute;width:100%;height:50px;inset:auto 0 0;margin:auto;overflow:hidden;overscroll-behavior:none;background:#303134;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root .viewer-page-selector{--viewer-page-selector-bg-color: #fff;--viewer-page-selector-active-bg-color: #3aa3e3;pointer-events:all;display:none;width:80%;height:10px;margin:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;background:var(--viewer-page-selector-bg-color);border-radius:5px;cursor:pointer}.tora-viewer.tora-viewer-root .viewer-page-selector::-webkit-slider-thumb{-webkit-appearance:none;background:#3aa3e3;width:20px;height:20px;border-radius:50%}.tora-viewer.tora-viewer-root .viewer-page-selector::-moz-range-thumb{background:#3aa3e3;width:20px;height:20px;border-radius:50%}.tora-viewer.tora-viewer-root .viewer-page-selector::-moz-focus-outer{border:0}.tora-viewer.tora-viewer-root .view-settings-button{color:#fff;font-weight:400;font-size:32px;line-height:50px;background-color:transparent;border-width:0;width:42px;height:42px}.tora-viewer.tora-viewer-root.horizontal-viewer .viewer-page-selector{display:block;direction:rtl}.tora-viewer.tora-viewer-root.horizontal-viewer.horizontal-ltr .viewer-page-selector{display:block;direction:ltr}.tora-viewer.tora-viewer-root.viewer-first-page-shown.horizontal-rtl .arrow-button-right,.tora-viewer.tora-viewer-root.viewer-first-page-shown.horizontal-ltr .arrow-button-left,.tora-viewer.tora-viewer-root.viewer-last-page-shown.horizontal-rtl .arrow-button-left,.tora-viewer.tora-viewer-root.viewer-last-page-shown.horizontal-ltr .arrow-button-right{display:none}.tora-viewer.tora-viewer-root .viewer-preview{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;height:calc(100% - 50px);position:absolute;bottom:50px;display:none;flex-direction:column;align-items:center;justify-content:flex-end}.tora-viewer.tora-viewer-root .viewer-preview.viewer-preview-show{display:flex}.tora-viewer.tora-viewer-root .viewer-preview-page-count{font-weight:400;font-size:20px;color:#fff;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root .view-settings{width:100%;height:100%;position:absolute;justify-content:center;font-weight:400;font-size:16px;opacity:0;visibility:hidden;transition:opacity .5s,visibility .5s}.tora-viewer.tora-viewer-root .view-settings.show-settings{opacity:1;visibility:visible}.tora-viewer.tora-viewer-root .view-settings .view-settings-title{width:100%;height:48px;padding:14px;font-weight:400;font-size:20px;color:#fff;background-color:#303134;border-bottom:1px solid #dddddd;display:flex;align-items:center;justify-content:center}.tora-viewer.tora-viewer-root .view-settings .view-settings-main{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;min-width:320px;max-width:560px;height:315px;background-color:#fff;overflow:auto}.tora-viewer.tora-viewer-root .view-settings .view-settings-main .view-settings-close-button{color:#fff;font-weight:400;font-size:30px;line-height:48px;background-color:transparent;border-width:0;position:absolute;width:36px;height:36px;top:2px;right:2px}.tora-viewer.tora-viewer-root .view-settings .view-settings-content{margin:0 auto;padding:32px 12px 0}@media only screen and (min-width: 480px){.tora-viewer.tora-viewer-root .view-settings .view-settings-content{padding:32px 24px 0}}.tora-viewer.tora-viewer-root .view-settings .view-settings-content-title{display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;margin-bottom:16px}.tora-viewer.tora-viewer-root .view-settings .view-settings-radio-groups{display:flex;justify-content:space-around;align-content:center;align-items:stretch;border:unset;border-radius:4px;background-color:#ddd;min-height:40px;overflow:hidden}.tora-viewer.tora-viewer-root .view-settings .view-settings-radio-groups .view-settings-label{display:inline-block;flex:1;border-left:1px solid #b6b6b6;cursor:pointer}.tora-viewer.tora-viewer-root .view-settings .view-settings-radio-groups .view-settings-label:first-child{border-left-width:0px}.tora-viewer.tora-viewer-root .view-settings .view-settings-radio-groups .view-settings-label .view-settings-radio{display:none}.tora-viewer.tora-viewer-root .view-settings .view-settings-radio-groups .view-settings-label .view-settings-radio:checked+.view-settings-label-text{color:#fff;background-color:#ea4c89}.tora-viewer.tora-viewer-root .view-settings .view-settings-radio-groups .view-settings-label .view-settings-label-text{display:inline-flex;justify-content:center;align-items:center;width:100%;height:100%;font-weight:400}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _props, _loading, _pageRef, _thumbnailPageRef, _loadingRef, _tapAreaLeftRef, _tapAreaRightRef, _size, _pageRatio, _pageContent, _contentLoaded, _contentLoadedSuccess, _canvasRef, _drawPageImage, drawPageImage_fn, _element, _closeButtonRef, _props2, _currentIndex, _visible, _controlAreaRef, _leftButtonRef, _rightButtonRef, _pageSelectorRef, _settingsButtonRef, _previewRef, _previewPageCountRef, _updatePageSelectorBgColor, updatePageSelectorBgColor_fn, _props3, _settings, _rootRef, _modalBgRef, _pageStyleRefs, _directionRefs, _closeButtonRef2, _blankPage, _lastPage, _allPages, _controlArea, _viewSettings, _props4, _currentIndexChangedHandlers, _currentIndexes, _showSettings, _isSpreadStyle, _rootRef2, _mainRef, _viewerPagesRef, _pageStyleCheckerRef, _closeButtonRef3, _updateRootClasses, updateRootClasses_fn, _rootClasses, rootClasses_fn, _setupCurrentIndexes, setupCurrentIndexes_fn, _emitCurrentIndexChanged, emitCurrentIndexChanged_fn, _reflectCurrentIndexes, reflectCurrentIndexes_fn, _main, _parentElement, _current, _disposed, _keydownEvents;
const index = "";
const appName = "tora-viewer";
const pageStyles = ["normal", "spread", "auto"];
const viewerDirections = ["horizontal-ltr", "horizontal-rtl"];
const defaultPageWidth = 840;
const defaultPageHeight = 1188;
const defaultLoadImageLimit = 20;
var faXmark = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var prefix = "fas";
  var iconName = "xmark";
  var width = 320;
  var height = 512;
  var aliases = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"];
  var unicode = "f00d";
  var svgPathData = "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z";
  exports.definition = {
    prefix,
    iconName,
    icon: [
      width,
      height,
      aliases,
      unicode,
      svgPathData
    ]
  };
  exports.faXmark = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = aliases;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  exports.aliases = aliases;
})(faXmark);
const jsxFactory = {
  h(tag, props, ...children) {
    return { tag, props, children };
  },
  fragment({ children }) {
    return children;
  }
};
class ComponentBase {
  createRef(setup) {
    return {
      current: null,
      setup
    };
  }
}
class PageBase extends ComponentBase {
  constructor(props) {
    super();
    __publicField(this, "index");
    __privateAdd(this, _props, void 0);
    __privateAdd(this, _loading, false);
    __privateAdd(this, _pageRef, void 0);
    __privateAdd(this, _thumbnailPageRef, void 0);
    __privateAdd(this, _loadingRef, void 0);
    __privateAdd(this, _tapAreaLeftRef, void 0);
    __privateAdd(this, _tapAreaRightRef, void 0);
    this.index = props.index;
    __privateSet(this, _props, props);
    __privateSet(this, _pageRef, this.createRef());
    __privateSet(this, _thumbnailPageRef, this.createRef());
    __privateSet(this, _loadingRef, this.createRef());
    __privateSet(this, _tapAreaLeftRef, this.createRef((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        __privateGet(this, _props).onTapLeft();
      });
    }));
    __privateSet(this, _tapAreaRightRef, this.createRef((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        __privateGet(this, _props).onTapRight();
      });
    }));
  }
  get element() {
    return __privateGet(this, _pageRef).current;
  }
  get thumbnailElement() {
    return __privateGet(this, _thumbnailPageRef).current;
  }
  setup(func) {
    __privateGet(this, _pageRef).setup = func;
    if (__privateGet(this, _pageRef).current) {
      func(__privateGet(this, _pageRef).current);
    }
  }
  showLoading() {
    var _a;
    __privateSet(this, _loading, true);
    (_a = __privateGet(this, _loadingRef).current) == null ? void 0 : _a.classList.add("viewer-page-loading-active");
  }
  hideLoading() {
    var _a;
    __privateSet(this, _loading, false);
    (_a = __privateGet(this, _loadingRef).current) == null ? void 0 : _a.classList.remove("viewer-page-loading-active");
  }
  createElement() {
    return /* @__PURE__ */ jsxFactory.h("p", {
      ref: __privateGet(this, _pageRef),
      classNames: ["viewer-page", ...this.pageClasses()]
    }, this.createElementPage(), /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _loadingRef),
      classNames: __privateGet(this, _loading) ? ["viewer-page-loading", "viewer-page-loading-active"] : ["viewer-page-loading"]
    }), /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _tapAreaLeftRef),
      classNames: ["viewer-page-tap-area", "viewer-page-area-left"]
    }), /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _tapAreaRightRef),
      classNames: ["viewer-page-tap-area", "viewer-page-area-right"]
    }));
  }
  createThumbnailElement() {
    return /* @__PURE__ */ jsxFactory.h("p", {
      classNames: ["viewer-page-thumbnail"],
      ref: __privateGet(this, _thumbnailPageRef)
    }, this.createThumbnailElementPage());
  }
  pageClasses() {
    return [];
  }
  createThumbnailElementPage() {
    const div = document.createElement("div");
    div.classList.add("viewer-page-thumbnail-inner");
    return div;
  }
}
_props = new WeakMap();
_loading = new WeakMap();
_pageRef = new WeakMap();
_thumbnailPageRef = new WeakMap();
_loadingRef = new WeakMap();
_tapAreaLeftRef = new WeakMap();
_tapAreaRightRef = new WeakMap();
class Page extends PageBase {
  constructor(pageContent, props) {
    super(props);
    __privateAdd(this, _drawPageImage);
    __privateAdd(this, _size, void 0);
    __privateAdd(this, _pageRatio, void 0);
    __privateAdd(this, _pageContent, void 0);
    __privateAdd(this, _contentLoaded, false);
    __privateAdd(this, _contentLoadedSuccess, false);
    __privateAdd(this, _canvasRef, void 0);
    __privateSet(this, _size, props.size);
    __privateSet(this, _pageRatio, props.size.width / props.size.height);
    __privateSet(this, _pageContent, pageContent);
    __privateSet(this, _canvasRef, this.createRef());
    this.showLoading();
  }
  pageClasses() {
    return ["regular-page"];
  }
  createElementPage() {
    return /* @__PURE__ */ jsxFactory.h("canvas", {
      width: __privateGet(this, _size).width,
      height: __privateGet(this, _size).height,
      classNames: ["viewer-page-content"],
      ref: __privateGet(this, _canvasRef)
    });
  }
  createThumbnailElementPage() {
    const img = new Image();
    __privateGet(this, _pageContent).then((content) => {
      const thumbnailUrl = typeof content === "string" ? content : content.thumbnailUrl || content.url;
      img.src = thumbnailUrl;
      img.addEventListener("load", () => {
        img.classList.add("viewer-page-thumbnail-content-loaded");
      });
    });
    img.classList.add("viewer-page-thumbnail-content");
    return img;
  }
  get loaded() {
    return __privateGet(this, _contentLoaded);
  }
  async contentLoad() {
    var _a;
    if (__privateGet(this, _contentLoaded)) {
      return Promise.resolve();
    }
    const ctx = (_a = __privateGet(this, _canvasRef).current) == null ? void 0 : _a.getContext("2d");
    if (!ctx) {
      return Promise.reject("The rendering context is not ready.");
    }
    __privateSet(this, _contentLoaded, true);
    const content = await __privateGet(this, _pageContent);
    const img = new Image();
    img.src = typeof content === "string" ? content : content.url;
    const recoverContentLoaded = () => {
      window.setTimeout(() => {
        if (__privateGet(this, _contentLoadedSuccess)) {
          return;
        }
        __privateSet(this, _contentLoaded, false);
      }, 3e4);
    };
    return new Promise((resolve, reject) => {
      img.addEventListener("load", () => {
        this.hideLoading();
        __privateMethod(this, _drawPageImage, drawPageImage_fn).call(this, ctx, img, content);
        __privateSet(this, _contentLoadedSuccess, true);
        resolve();
      });
      img.addEventListener("abort", reject);
      img.addEventListener("error", reject);
      img.addEventListener("abort", recoverContentLoaded);
      img.addEventListener("error", recoverContentLoaded);
    });
  }
}
_size = new WeakMap();
_pageRatio = new WeakMap();
_pageContent = new WeakMap();
_contentLoaded = new WeakMap();
_contentLoadedSuccess = new WeakMap();
_canvasRef = new WeakMap();
_drawPageImage = new WeakSet();
drawPageImage_fn = function(ctx, img, content) {
  var _a, _b;
  const imgWidth = typeof content === "string" ? img.width : (_a = content.width) != null ? _a : img.width;
  const imgHeight = typeof content === "string" ? img.height : (_b = content.height) != null ? _b : img.height;
  if (__privateGet(this, _canvasRef).current) {
    __privateGet(this, _canvasRef).current.setAttribute("width", `${imgWidth}`);
    __privateGet(this, _canvasRef).current.setAttribute("height", `${imgHeight}`);
    const imgRatio = imgWidth / imgHeight;
    if (imgRatio < __privateGet(this, _pageRatio)) {
      __privateGet(this, _canvasRef).current.classList.add("viewer-page-vertically-long");
    }
  }
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight, 0, 0, imgWidth, imgHeight);
};
class EmptyPage extends PageBase {
  constructor(props) {
    super(props);
    __publicField(this, "index");
    this.index = props.index;
  }
  pageClasses() {
    return ["empty-page"];
  }
  createElementPage() {
    return /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["empty-page-inner"]
    });
  }
}
class EmbedPage extends PageBase {
  constructor(props) {
    super(props);
    __publicField(this, "index");
    __privateAdd(this, _element, void 0);
    __privateAdd(this, _closeButtonRef, void 0);
    this.index = props.index;
    __privateSet(this, _element, props.element);
    __privateSet(this, _closeButtonRef, this.createRef((el) => {
      el.addEventListener("click", () => props.onDispose());
    }));
  }
  pageClasses() {
    return ["embed-page"];
  }
  createElementPage() {
    return /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["embed-page-inner"]
    }, __privateGet(this, _element) ? __privateGet(this, _element) : /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["embed-page-default"]
    }, /* @__PURE__ */ jsxFactory.h("button", {
      classNames: ["embed-page-default-close"],
      ref: __privateGet(this, _closeButtonRef)
    }, "\u9589\u3058\u308B")));
  }
}
_element = new WeakMap();
_closeButtonRef = new WeakMap();
/*!
 * Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
const NAMESPACE_SVG = "http://www.w3.org/2000/svg";
function createFaIcon(iconDef) {
  const [width, height, , , svgPathData] = iconDef.icon;
  const icon = document.createElement("i");
  icon.classList.add(`${iconDef.prefix}-${iconDef.iconName}`);
  const svg = icon.appendChild(document.createElementNS(NAMESPACE_SVG, "svg"));
  svg.classList.add("viewer-fa-icon");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const iconPathList = Array.isArray(svgPathData) ? svgPathData : [svgPathData];
  for (const iconPath of iconPathList) {
    const path = svg.appendChild(
      document.createElementNS(NAMESPACE_SVG, "path")
    );
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", iconPath);
  }
  return icon;
}
var faGear = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var prefix = "fas";
  var iconName = "gear";
  var width = 512;
  var height = 512;
  var aliases = [9881, "cog"];
  var unicode = "f013";
  var svgPathData = "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z";
  exports.definition = {
    prefix,
    iconName,
    icon: [
      width,
      height,
      aliases,
      unicode,
      svgPathData
    ]
  };
  exports.faGear = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = aliases;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  exports.aliases = aliases;
})(faGear);
const CONTROL_VISIBLE_CLASS = "viewer-control-area-visible";
class ControlArea extends ComponentBase {
  constructor(props) {
    super();
    __privateAdd(this, _updatePageSelectorBgColor);
    __privateAdd(this, _props2, void 0);
    __privateAdd(this, _currentIndex, 0);
    __privateAdd(this, _visible, true);
    __privateAdd(this, _controlAreaRef, void 0);
    __privateAdd(this, _leftButtonRef, void 0);
    __privateAdd(this, _rightButtonRef, void 0);
    __privateAdd(this, _pageSelectorRef, void 0);
    __privateAdd(this, _settingsButtonRef, void 0);
    __privateAdd(this, _previewRef, void 0);
    __privateAdd(this, _previewPageCountRef, void 0);
    __privateSet(this, _props2, props);
    __privateSet(this, _controlAreaRef, this.createRef());
    __privateSet(this, _leftButtonRef, this.createRef((el) => {
      el.addEventListener("click", __privateGet(this, _props2).onClickLeft);
    }));
    __privateSet(this, _rightButtonRef, this.createRef((el) => {
      el.addEventListener("click", __privateGet(this, _props2).onClickRight);
    }));
    __privateSet(this, _pageSelectorRef, this.createRef((el) => {
      el.value = `${__privateGet(this, _currentIndex)}`;
      const updatePreviewPageCount = () => {
        if (!__privateGet(this, _previewPageCountRef).current)
          return;
        let currentPage = Math.round(parseFloat(el.value)) + 1;
        const pageLength = __privateGet(this, _props2).pageLength;
        if (pageLength < currentPage) {
          currentPage = pageLength;
        }
        __privateGet(this, _previewPageCountRef).current.innerHTML = `${currentPage} / ${pageLength}`;
      };
      el.addEventListener("input", () => {
        var _a;
        updatePreviewPageCount();
        (_a = __privateGet(this, _previewRef).current) == null ? void 0 : _a.classList.add("viewer-preview-show");
        const index2 = Math.round(parseFloat(el.value));
        __privateGet(this, _props2).onThumbnailChanged(index2);
      });
      const hidePreview = () => {
        var _a;
        (_a = __privateGet(this, _previewRef).current) == null ? void 0 : _a.classList.remove("viewer-preview-show");
      };
      el.addEventListener("input", () => {
        __privateMethod(this, _updatePageSelectorBgColor, updatePageSelectorBgColor_fn).call(this);
      });
      el.addEventListener("focusout", hidePreview);
      el.addEventListener("mouseup", hidePreview);
      el.addEventListener("touchend", hidePreview);
      el.addEventListener("touchmove", (e) => {
        e.stopPropagation();
      });
      el.addEventListener("change", () => {
        hidePreview();
        const index2 = Math.round(parseFloat(el.value));
        __privateSet(this, _currentIndex, index2);
        __privateGet(this, _props2).onPageSelectorChanged(index2);
      });
    }));
    __privateSet(this, _settingsButtonRef, this.createRef((el) => {
      el.addEventListener("click", () => {
        __privateGet(this, _props2).onOpenSettings();
      });
    }));
    __privateSet(this, _previewRef, this.createRef());
    __privateSet(this, _previewPageCountRef, this.createRef());
  }
  get direction() {
    return __privateGet(this, _props2).direction;
  }
  set direction(direction) {
    const prev = __privateGet(this, _props2).direction;
    if (prev === direction) {
      return;
    }
    __privateGet(this, _props2).direction = direction;
    __privateMethod(this, _updatePageSelectorBgColor, updatePageSelectorBgColor_fn).call(this);
  }
  get currentIndex() {
    return __privateGet(this, _currentIndex);
  }
  set currentIndex(value) {
    __privateSet(this, _currentIndex, value);
    const pageSelector = __privateGet(this, _pageSelectorRef).current;
    if (!pageSelector) {
      return;
    }
    pageSelector.value = `${value}`;
    __privateMethod(this, _updatePageSelectorBgColor, updatePageSelectorBgColor_fn).call(this);
  }
  updatePageSelector(isSpreadStyle) {
    const pageSelector = __privateGet(this, _pageSelectorRef).current;
    if (!pageSelector) {
      return;
    }
    const value = Math.round(parseFloat(pageSelector.value));
    const max = Math.round(parseFloat(pageSelector.max));
    const pageLength = __privateGet(this, _props2).pageLength;
    const maxValue = pageLength + (pageLength % 2 === 0 ? 0 : isSpreadStyle ? 1 : 0);
    pageSelector.setAttribute("max", `${maxValue}`);
    pageSelector.setAttribute("step", `${isSpreadStyle ? 2 : 1}`);
    if (maxValue !== max && value === max) {
      pageSelector.value = `${maxValue}`;
    }
    __privateMethod(this, _updatePageSelectorBgColor, updatePageSelectorBgColor_fn).call(this);
  }
  get visible() {
    return __privateGet(this, _visible);
  }
  show() {
    var _a;
    __privateSet(this, _visible, true);
    (_a = __privateGet(this, _controlAreaRef).current) == null ? void 0 : _a.classList.add(CONTROL_VISIBLE_CLASS);
  }
  hide() {
    var _a;
    __privateSet(this, _visible, false);
    (_a = __privateGet(this, _controlAreaRef).current) == null ? void 0 : _a.classList.remove(CONTROL_VISIBLE_CLASS);
  }
  createElement() {
    return /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["viewer-control-area", CONTROL_VISIBLE_CLASS],
      ref: __privateGet(this, _controlAreaRef)
    }, /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["viewer-header-ctrl"]
    }, __privateGet(this, _props2).title && /* @__PURE__ */ jsxFactory.h("h1", {
      classNames: ["viewer-title"]
    }, /* @__PURE__ */ jsxFactory.h("span", {
      classNames: ["viewer-title-inner"]
    }, __privateGet(this, _props2).title))), /* @__PURE__ */ jsxFactory.h("button", {
      ref: __privateGet(this, _leftButtonRef),
      classNames: ["arrow-button", "arrow-button-left"]
    }, /* @__PURE__ */ jsxFactory.h("i", {
      classNames: ["arrow-button-inner"]
    })), /* @__PURE__ */ jsxFactory.h("button", {
      ref: __privateGet(this, _rightButtonRef),
      classNames: ["arrow-button", "arrow-button-right"]
    }, /* @__PURE__ */ jsxFactory.h("i", {
      classNames: ["arrow-button-inner"]
    })), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["viewer-footer-ctrl"]
    }, /* @__PURE__ */ jsxFactory.h("input", {
      ref: __privateGet(this, _pageSelectorRef),
      classNames: ["viewer-page-selector"],
      type: "range",
      min: 0,
      max: 1,
      step: 1,
      value: 0
    }), /* @__PURE__ */ jsxFactory.h("button", {
      ref: __privateGet(this, _settingsButtonRef),
      classNames: ["view-settings-button"]
    }, createFaIcon(faGear.faGear))), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["viewer-preview"],
      ref: __privateGet(this, _previewRef)
    }, /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["viewer-thumbnails"]
    }, __privateGet(this, _props2).thumbnailElements), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["viewer-preview-page-count"],
      ref: __privateGet(this, _previewPageCountRef)
    }, "0 / 0")));
  }
}
_props2 = new WeakMap();
_currentIndex = new WeakMap();
_visible = new WeakMap();
_controlAreaRef = new WeakMap();
_leftButtonRef = new WeakMap();
_rightButtonRef = new WeakMap();
_pageSelectorRef = new WeakMap();
_settingsButtonRef = new WeakMap();
_previewRef = new WeakMap();
_previewPageCountRef = new WeakMap();
_updatePageSelectorBgColor = new WeakSet();
updatePageSelectorBgColor_fn = function() {
  const pageSelector = __privateGet(this, _pageSelectorRef).current;
  if (!pageSelector) {
    return;
  }
  const value = Math.round(parseFloat(pageSelector.value));
  const max = Math.round(parseFloat(pageSelector.max));
  const ratio = value * 100 / max;
  const bgColor = getComputedStyle(pageSelector).getPropertyValue(
    "--viewer-page-selector-bg-color"
  );
  const activeBgColor = getComputedStyle(pageSelector).getPropertyValue(
    "--viewer-page-selector-active-bg-color"
  );
  const direction = __privateGet(this, _props2).direction === "horizontal-rtl" ? "left" : "right";
  pageSelector.style.background = `linear-gradient(to ${direction},${activeBgColor} ${ratio}%,${bgColor} ${ratio}%)`;
};
const PAGE_STYLE_LABELS = {
  normal: "1\u30DA\u30FC\u30B8",
  spread: "\u898B\u958B\u304D",
  auto: "\u81EA\u52D5"
};
const VIEWER_DIRECTION_LABELS = {
  "horizontal-ltr": "\u5DE6\u304B\u3089\u53F3 \u2192",
  "horizontal-rtl": "\u2190 \u53F3\u304B\u3089\u5DE6"
};
class ViewSettings extends ComponentBase {
  constructor(props) {
    super();
    __privateAdd(this, _props3, void 0);
    __privateAdd(this, _settings, null);
    __privateAdd(this, _rootRef, void 0);
    __privateAdd(this, _modalBgRef, void 0);
    __privateAdd(this, _pageStyleRefs, void 0);
    __privateAdd(this, _directionRefs, void 0);
    __privateAdd(this, _closeButtonRef2, void 0);
    __privateSet(this, _props3, props);
    __privateSet(this, _rootRef, this.createRef());
    __privateSet(this, _modalBgRef, this.createRef((el) => {
      el.addEventListener("click", () => {
        this.close();
      });
    }));
    __privateSet(this, _pageStyleRefs, pageStyles.reduce((prev, pageStyle) => {
      prev[pageStyle] = this.createRef((el) => {
        el.addEventListener("change", () => {
          if (!__privateGet(this, _settings)) {
            return;
          }
          __privateGet(this, _settings).pageStyle = el.value;
        });
      });
      return prev;
    }, {}));
    __privateSet(this, _directionRefs, viewerDirections.reduce((prev, viewerDirection) => {
      prev[viewerDirection] = this.createRef((el) => {
        el.addEventListener("change", () => {
          if (!__privateGet(this, _settings)) {
            return;
          }
          __privateGet(this, _settings).direction = el.value;
        });
      });
      return prev;
    }, {}));
    __privateSet(this, _closeButtonRef2, this.createRef((el) => {
      el.addEventListener("click", () => {
        this.close();
      });
    }));
  }
  show(settings) {
    var _a;
    __privateSet(this, _settings, settings);
    for (const pageStyle of Object.keys(__privateGet(this, _pageStyleRefs))) {
      const elm = __privateGet(this, _pageStyleRefs)[pageStyle].current;
      if (!elm) {
        continue;
      }
      if (settings.pageStyle === pageStyle) {
        elm.setAttribute("checked", "true");
      } else {
        elm.removeAttribute("checked");
      }
    }
    for (const direction of Object.keys(__privateGet(this, _directionRefs))) {
      const elm = __privateGet(this, _directionRefs)[direction].current;
      if (!elm) {
        continue;
      }
      if (settings.direction === direction) {
        elm.setAttribute("checked", "true");
      } else {
        elm.removeAttribute("checked");
      }
    }
    (_a = __privateGet(this, _rootRef).current) == null ? void 0 : _a.classList.add("show-settings");
  }
  close() {
    var _a;
    (_a = __privateGet(this, _rootRef).current) == null ? void 0 : _a.classList.remove("show-settings");
    if (__privateGet(this, _settings)) {
      __privateGet(this, _props3).onSettingsChange(__privateGet(this, _settings));
    }
  }
  createElement() {
    return /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _rootRef),
      classNames: ["view-settings"]
    }, /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _modalBgRef),
      classNames: ["modal-bg"]
    }), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["view-settings-main"]
    }, /* @__PURE__ */ jsxFactory.h("h1", {
      classNames: ["view-settings-title"]
    }, "Settings"), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["view-settings-content"]
    }, /* @__PURE__ */ jsxFactory.h("h2", {
      classNames: ["view-settings-content-title"]
    }, "\u30DA\u30FC\u30B8\u8868\u793A"), /* @__PURE__ */ jsxFactory.h("group", {
      classNames: ["view-settings-radio-groups"]
    }, pageStyles.map((pageStyle) => /* @__PURE__ */ jsxFactory.h("label", {
      classNames: ["view-settings-label"]
    }, /* @__PURE__ */ jsxFactory.h("input", {
      ref: __privateGet(this, _pageStyleRefs)[pageStyle],
      classNames: ["view-settings-radio"],
      type: "radio",
      name: "pageStyle",
      value: pageStyle,
      checked: false
    }), /* @__PURE__ */ jsxFactory.h("span", {
      classNames: ["view-settings-label-text"]
    }, PAGE_STYLE_LABELS[pageStyle] || pageStyle))))), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["view-settings-content"]
    }, /* @__PURE__ */ jsxFactory.h("h2", {
      classNames: ["view-settings-content-title"]
    }, "\u8AAD\u3080\u65B9\u5411"), /* @__PURE__ */ jsxFactory.h("group", {
      classNames: ["view-settings-radio-groups"]
    }, viewerDirections.map((viewerDirection) => /* @__PURE__ */ jsxFactory.h("label", {
      classNames: ["view-settings-label"]
    }, /* @__PURE__ */ jsxFactory.h("input", {
      ref: __privateGet(this, _directionRefs)[viewerDirection],
      classNames: ["view-settings-radio"],
      type: "radio",
      name: "direction",
      value: viewerDirection,
      checked: false
    }), /* @__PURE__ */ jsxFactory.h("span", {
      classNames: ["view-settings-label-text"]
    }, VIEWER_DIRECTION_LABELS[viewerDirection] || viewerDirection))))), /* @__PURE__ */ jsxFactory.h("button", {
      ref: __privateGet(this, _closeButtonRef2),
      classNames: ["view-settings-close-button"]
    }, createFaIcon(faXmark.faXmark))));
  }
}
_props3 = new WeakMap();
_settings = new WeakMap();
_rootRef = new WeakMap();
_modalBgRef = new WeakMap();
_pageStyleRefs = new WeakMap();
_directionRefs = new WeakMap();
_closeButtonRef2 = new WeakMap();
const FIRST_PAGE_SHOWN = "viewer-first-page-shown";
const LAST_PAGE_SHOWN = "viewer-last-page-shown";
class Main extends ComponentBase {
  constructor(pageContents, props) {
    super();
    __privateAdd(this, _updateRootClasses);
    __privateAdd(this, _rootClasses);
    __privateAdd(this, _setupCurrentIndexes);
    __privateAdd(this, _emitCurrentIndexChanged);
    __privateAdd(this, _reflectCurrentIndexes);
    __publicField(this, "pages");
    __privateAdd(this, _blankPage, void 0);
    __privateAdd(this, _lastPage, void 0);
    __privateAdd(this, _allPages, void 0);
    __privateAdd(this, _controlArea, void 0);
    __privateAdd(this, _viewSettings, void 0);
    __privateAdd(this, _props4, void 0);
    __privateAdd(this, _currentIndexChangedHandlers, []);
    __privateAdd(this, _currentIndexes, []);
    __privateAdd(this, _showSettings, false);
    __privateAdd(this, _isSpreadStyle, void 0);
    __privateAdd(this, _rootRef2, void 0);
    __privateAdd(this, _mainRef, void 0);
    __privateAdd(this, _viewerPagesRef, void 0);
    __privateAdd(this, _pageStyleCheckerRef, void 0);
    __privateAdd(this, _closeButtonRef3, void 0);
    __privateSet(this, _props4, props);
    let hideMainVisibleId;
    let autoFadeout = true;
    __privateSet(this, _isSpreadStyle, props.pageStyle === "spread");
    const visibleControlEver = __privateGet(this, _props4).controlShowTime <= 0;
    const autoFadeoutCtrl = () => {
      if (visibleControlEver) {
        return;
      }
      if (!autoFadeout)
        return;
      window.clearTimeout(hideMainVisibleId);
      __privateGet(this, _controlArea).show();
      hideMainVisibleId = window.setTimeout(() => {
        __privateGet(this, _controlArea).hide();
      }, __privateGet(this, _props4).controlShowTime);
    };
    const disableAutoFadeout = () => {
      autoFadeout = false;
      if (visibleControlEver) {
        return;
      }
      window.clearTimeout(hideMainVisibleId);
      __privateGet(this, _controlArea).show();
    };
    const enableAutoFadeout = () => {
      autoFadeout = true;
      autoFadeoutCtrl();
    };
    __privateSet(this, _rootRef2, this.createRef((el) => {
      el.style.setProperty("--default-width", `${__privateGet(this, _props4).pageSize.width}`);
      el.style.setProperty(
        "--default-wide-width",
        `${__privateGet(this, _props4).pageSize.width * 2}`
      );
      el.style.setProperty(
        "--default-height",
        `${__privateGet(this, _props4).pageSize.height}`
      );
      el.addEventListener("click", autoFadeoutCtrl);
      enableAutoFadeout();
    }));
    __privateSet(this, _mainRef, this.createRef());
    this.pages = pageContents.map(
      (content, index2) => new Page(content, {
        index: index2,
        size: __privateGet(this, _props4).pageSize,
        onTapLeft: () => this.goLeft(),
        onTapRight: () => this.goRight()
      })
    );
    __privateSet(this, _blankPage, new EmptyPage({
      index: this.pages.length,
      onTapLeft: () => this.goLeft(),
      onTapRight: () => this.goRight()
    }));
    __privateSet(this, _lastPage, new EmbedPage({
      index: this.pages.length + 1,
      element: __privateGet(this, _props4).lastPageElement,
      onTapLeft: () => this.goLeft(),
      onTapRight: () => this.goRight(),
      onDispose: () => __privateGet(this, _props4).onDispose()
    }));
    __privateSet(this, _allPages, [...this.pages, __privateGet(this, _blankPage), __privateGet(this, _lastPage)]);
    __privateSet(this, _controlArea, new ControlArea({
      title: __privateGet(this, _props4).title,
      pageLength: this.pages.length,
      direction: __privateGet(this, _props4).direction,
      thumbnailElements: __privateGet(this, _allPages).map((p) => p.createThumbnailElement()),
      onOpenSettings: () => {
        disableAutoFadeout();
        __privateGet(this, _viewSettings).show({
          direction: this.direction,
          pageStyle: this.pageStyle
        });
      },
      onClickLeft: () => this.goLeft(),
      onClickRight: () => this.goRight(),
      onThumbnailChanged: (index2) => {
        autoFadeoutCtrl();
        const page = __privateGet(this, _allPages).find((p) => p.index === index2);
        const element = page === __privateGet(this, _blankPage) ? __privateGet(this, _lastPage).thumbnailElement : page == null ? void 0 : page.thumbnailElement;
        element == null ? void 0 : element.scrollIntoView();
      },
      onPageSelectorChanged: (index2) => this.goTo(index2)
    }));
    __privateSet(this, _viewSettings, new ViewSettings({
      onSettingsChange: (settings) => {
        this.direction = settings.direction;
        this.pageStyle = settings.pageStyle;
        __privateMethod(this, _reflectCurrentIndexes, reflectCurrentIndexes_fn).call(this);
        enableAutoFadeout();
      }
    }));
    __privateSet(this, _pageStyleCheckerRef, this.createRef((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const isSpreadStyle = entry.isIntersecting;
            __privateSet(this, _isSpreadStyle, isSpreadStyle);
            __privateGet(this, _controlArea).updatePageSelector(isSpreadStyle);
          }
        },
        {
          root: __privateGet(this, _rootRef2).current
        }
      );
      observer.observe(el);
    }));
    __privateSet(this, _closeButtonRef3, this.createRef((el) => {
      el.addEventListener("click", () => {
        __privateGet(this, _props4).onDispose();
      });
    }));
    __privateSet(this, _viewerPagesRef, this.createRef((el) => {
      __privateMethod(this, _setupCurrentIndexes, setupCurrentIndexes_fn).call(this, el, __privateGet(this, _allPages));
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        if (visibleControlEver) {
          return;
        }
        if (__privateGet(this, _controlArea).visible) {
          window.clearTimeout(hideMainVisibleId);
          __privateGet(this, _controlArea).hide();
        } else {
          autoFadeoutCtrl();
        }
      });
    }));
  }
  get pageStyle() {
    return __privateGet(this, _props4).pageStyle;
  }
  set pageStyle(pageStyle) {
    const prev = __privateGet(this, _props4).pageStyle;
    if (prev === pageStyle) {
      return;
    }
    __privateGet(this, _props4).pageStyle = pageStyle;
    __privateMethod(this, _updateRootClasses, updateRootClasses_fn).call(this);
  }
  get direction() {
    return __privateGet(this, _props4).direction;
  }
  set direction(direction) {
    const prev = __privateGet(this, _props4).direction;
    if (prev === direction) {
      return;
    }
    __privateGet(this, _props4).direction = direction;
    __privateGet(this, _controlArea).direction = direction;
    __privateMethod(this, _updateRootClasses, updateRootClasses_fn).call(this);
  }
  openSettings() {
    if (!__privateGet(this, _showSettings)) {
      return;
    }
    __privateSet(this, _showSettings, false);
  }
  closeSettings() {
    if (__privateGet(this, _showSettings)) {
      return;
    }
    __privateSet(this, _showSettings, true);
  }
  createElement() {
    const rootClasses = __privateMethod(this, _rootClasses, rootClasses_fn).call(this);
    return /* @__PURE__ */ jsxFactory.h("div", {
      classNames: rootClasses,
      ref: __privateGet(this, _rootRef2)
    }, /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["modal-bg", "viewer-bg"]
    }), /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _mainRef),
      classNames: ["viewer-main"]
    }, /* @__PURE__ */ jsxFactory.h("div", {
      ref: __privateGet(this, _viewerPagesRef),
      classNames: ["viewer-pages"]
    }, __privateGet(this, _allPages).map((p) => p.createElement())), __privateGet(this, _controlArea).createElement()), /* @__PURE__ */ jsxFactory.h("button", {
      ref: __privateGet(this, _closeButtonRef3),
      classNames: ["viewer-close-button"]
    }, createFaIcon(faXmark.faXmark)), __privateGet(this, _viewSettings).createElement(), /* @__PURE__ */ jsxFactory.h("div", {
      classNames: ["page-style-checker"],
      ref: __privateGet(this, _pageStyleCheckerRef)
    }));
  }
  get currentIndex() {
    if (__privateGet(this, _currentIndexes).length === 0) {
      return 0;
    }
    return Math.min(...__privateGet(this, _currentIndexes));
  }
  get isLastPage() {
    const page = __privateGet(this, _allPages).find((p) => p.index === this.currentIndex);
    return (page == null ? void 0 : page.element) === __privateGet(this, _lastPage).element;
  }
  onCurrentIndexChanged(handler) {
    __privateGet(this, _currentIndexChangedHandlers).push(handler);
  }
  goBack() {
    this.goTo(
      this.currentIndex - (__privateGet(this, _isSpreadStyle) || this.isLastPage ? 2 : 1)
    );
  }
  goNext() {
    this.goTo(this.currentIndex + (__privateGet(this, _isSpreadStyle) ? 2 : 1));
  }
  goLeft() {
    __privateGet(this, _props4).direction === "horizontal-rtl" ? this.goNext() : this.goBack();
  }
  goRight() {
    __privateGet(this, _props4).direction === "horizontal-rtl" ? this.goBack() : this.goNext();
  }
  goTo(index2) {
    const page = __privateGet(this, _allPages).find((p) => p.index === index2);
    const element = page === __privateGet(this, _blankPage) ? __privateGet(this, _lastPage).element : page == null ? void 0 : page.element;
    window.setTimeout(() => {
      element == null ? void 0 : element.scrollIntoView();
    }, 1);
  }
}
_blankPage = new WeakMap();
_lastPage = new WeakMap();
_allPages = new WeakMap();
_controlArea = new WeakMap();
_viewSettings = new WeakMap();
_props4 = new WeakMap();
_currentIndexChangedHandlers = new WeakMap();
_currentIndexes = new WeakMap();
_showSettings = new WeakMap();
_isSpreadStyle = new WeakMap();
_rootRef2 = new WeakMap();
_mainRef = new WeakMap();
_viewerPagesRef = new WeakMap();
_pageStyleCheckerRef = new WeakMap();
_closeButtonRef3 = new WeakMap();
_updateRootClasses = new WeakSet();
updateRootClasses_fn = function() {
  const rootElm = __privateGet(this, _rootRef2).current;
  if (!rootElm) {
    return;
  }
  rootElm.setAttribute("class", "");
  rootElm.classList.add(...__privateMethod(this, _rootClasses, rootClasses_fn).call(this));
};
_rootClasses = new WeakSet();
rootClasses_fn = function() {
  const defaultRootClasses = [appName, `${appName}-root`];
  if (__privateGet(this, _props4).direction.startsWith("horizontal-")) {
    defaultRootClasses.push("horizontal-viewer");
  }
  defaultRootClasses.push(__privateGet(this, _props4).direction);
  defaultRootClasses.push(`page-style-${__privateGet(this, _props4).pageStyle}`);
  if (__privateGet(this, _props4).modal) {
    defaultRootClasses.push("modal-viewer");
  }
  return defaultRootClasses;
};
_setupCurrentIndexes = new WeakSet();
setupCurrentIndexes_fn = function(viewerPagesElm, pages) {
  const currentIndexes = /* @__PURE__ */ new Set();
  let pendingCurrentIndexes = false;
  let scrolling = void 0;
  viewerPagesElm.addEventListener("scroll", () => {
    scrolling != null && window.clearTimeout(scrolling);
    scrolling = window.setTimeout(() => {
      scrolling = void 0;
      if (pendingCurrentIndexes) {
        pendingCurrentIndexes = false;
        __privateMethod(this, _emitCurrentIndexChanged, emitCurrentIndexChanged_fn).call(this, [...currentIndexes]);
      }
    }, 100);
  });
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const page = pages.find((p) => p.element === entry.target);
        if (!page) {
          continue;
        }
        if (entry.isIntersecting) {
          currentIndexes.add(page.index);
        } else {
          currentIndexes.delete(page.index);
        }
        if (scrolling != null) {
          pendingCurrentIndexes = true;
        } else {
          pendingCurrentIndexes = false;
          __privateMethod(this, _emitCurrentIndexChanged, emitCurrentIndexChanged_fn).call(this, [...currentIndexes]);
        }
      }
    },
    {
      root: viewerPagesElm,
      threshold: 0.6
    }
  );
  for (const page of pages) {
    page.setup((el) => {
      observer.observe(el);
    });
  }
};
_emitCurrentIndexChanged = new WeakSet();
emitCurrentIndexChanged_fn = function(indexes) {
  __privateSet(this, _currentIndexes, indexes);
  __privateGet(this, _controlArea).currentIndex = this.currentIndex;
  __privateMethod(this, _reflectCurrentIndexes, reflectCurrentIndexes_fn).call(this);
  for (const handler of __privateGet(this, _currentIndexChangedHandlers)) {
    handler(this.currentIndex);
  }
};
_reflectCurrentIndexes = new WeakSet();
reflectCurrentIndexes_fn = function() {
  var _a, _b, _c, _d;
  if (__privateGet(this, _currentIndexes).includes(0)) {
    (_a = __privateGet(this, _rootRef2).current) == null ? void 0 : _a.classList.add(FIRST_PAGE_SHOWN);
  } else {
    (_b = __privateGet(this, _rootRef2).current) == null ? void 0 : _b.classList.remove(FIRST_PAGE_SHOWN);
  }
  if (__privateGet(this, _currentIndexes).includes(__privateGet(this, _lastPage).index)) {
    (_c = __privateGet(this, _rootRef2).current) == null ? void 0 : _c.classList.add(LAST_PAGE_SHOWN);
  } else {
    (_d = __privateGet(this, _rootRef2).current) == null ? void 0 : _d.classList.remove(LAST_PAGE_SHOWN);
  }
};
class Viewer {
  constructor(pageContents, { parent, ...props }) {
    __privateAdd(this, _main, void 0);
    __privateAdd(this, _parentElement, void 0);
    __privateAdd(this, _current, void 0);
    __privateAdd(this, _disposed, false);
    __privateAdd(this, _keydownEvents, (ev) => {
      if (ev.key === "ArrowLeft" || ev.key === "Left") {
        __privateGet(this, _main).goLeft();
      } else if (ev.key === "ArrowRight" || ev.key === "Right") {
        __privateGet(this, _main).goRight();
      }
    });
    __privateSet(this, _main, new Main(pageContents, {
      ...props,
      onDispose: () => this.dispose()
    }));
    __privateSet(this, _parentElement, parent);
    __privateSet(this, _current, render(__privateGet(this, _main).createElement(), __privateGet(this, _parentElement)));
    const loadRange = 4;
    __privateGet(this, _main).onCurrentIndexChanged((index2) => {
      const nextTargets = __privateGet(this, _main).pages.filter(
        (p) => !p.loaded && p.index >= index2 && p.index < index2 + loadRange
      );
      for (const target of nextTargets) {
        target.contentLoad();
      }
    });
    let promise = Promise.resolve();
    for (const page of __privateGet(this, _main).pages) {
      promise = promise.then(async () => {
        try {
          await page.contentLoad();
        } catch (e) {
          console.error(e);
        }
      });
    }
    document.addEventListener("keydown", __privateGet(this, _keydownEvents));
  }
  get pages() {
    return __privateGet(this, _main).pages;
  }
  get disposed() {
    return __privateGet(this, _disposed);
  }
  goBack() {
    __privateGet(this, _main).goBack();
  }
  goNext() {
    __privateGet(this, _main).goNext();
  }
  goLeft() {
    __privateGet(this, _main).goLeft();
  }
  goRight() {
    __privateGet(this, _main).goRight();
  }
  goTo(index2) {
    __privateGet(this, _main).goTo(index2);
  }
  dispose() {
    if (__privateGet(this, _disposed)) {
      return;
    }
    document.removeEventListener("keydown", __privateGet(this, _keydownEvents));
    __privateGet(this, _current) && __privateGet(this, _parentElement).removeChild(__privateGet(this, _current));
    __privateSet(this, _disposed, true);
  }
}
_main = new WeakMap();
_parentElement = new WeakMap();
_current = new WeakMap();
_disposed = new WeakMap();
_keydownEvents = new WeakMap();
function render(jsxElement, container) {
  var _a;
  const { tag, props, children } = jsxElement;
  if (typeof tag === "function") {
    throw "Not support";
  }
  const element = container.appendChild(document.createElement(tag));
  for (const child of children.flat()) {
    if (child instanceof HTMLElement) {
      element.appendChild(child);
    } else if (typeof child === "string") {
      element.append(child);
    } else {
      render(child, element);
    }
  }
  if (props) {
    const { ref, classNames, ...attrs } = props;
    element.classList.add(...classNames);
    for (const key of Object.keys(attrs)) {
      const value = `${attrs[key]}`;
      if (key === "checked" && value === "false") {
        continue;
      }
      element.setAttribute(key, value);
    }
    if (ref) {
      ref.current = element;
      (_a = ref.setup) == null ? void 0 : _a.call(ref, element);
    }
  }
  return element;
}
function asyncLoadBuilder(load) {
  return new AsyncLoadBuilder(load);
}
class AsyncLoadBuilder {
  constructor(load) {
    __publicField(this, "loadLimit", defaultLoadImageLimit);
    this.load = load;
  }
  limit(value) {
    this.loadLimit = value;
    return this;
  }
  build(pageCount) {
    const load = this.load;
    const limit = this.loadLimit;
    let seriesPromise = Promise.resolve([]);
    const pageContents = [];
    for (let offset = 0; offset < pageCount; offset += limit) {
      const l = pageCount - offset >= limit ? limit : pageCount - offset;
      const current = seriesPromise = seriesPromise.then(
        () => load(l, offset)
      );
      pageContents.push(
        Array(l).fill(0).map((_, i) => current.then((contents) => contents[i]))
      );
    }
    return pageContents.flat();
  }
}
function main(pageContents, options) {
  const opt = normalizeOptions(options);
  const insertTarget = options == null ? void 0 : options.insertTarget;
  let parent;
  if (opt.modal) {
    parent = document.body;
  } else {
    parent = typeof insertTarget === "string" ? document.querySelector(insertTarget) : insertTarget;
  }
  if (parent == null) {
    throw `Missing element: ${insertTarget}`;
  }
  return new Viewer(
    pageContents.map((c) => Promise.resolve(c)),
    {
      parent,
      ...opt
    }
  );
}
main.asyncLoadBuilder = asyncLoadBuilder;
function normalizeOptions(options) {
  var _a, _b, _c;
  const pageSize = (options == null ? void 0 : options.pageSize) || {
    width: defaultPageWidth,
    height: defaultPageHeight
  };
  const pageStyle = (options == null ? void 0 : options.pageStyle) || "auto";
  const direction = (options == null ? void 0 : options.direction) || "horizontal-rtl";
  const modal = (_a = options == null ? void 0 : options.modal) != null ? _a : (options == null ? void 0 : options.insertTarget) === void 0 ? true : false;
  return {
    pageSize,
    pageStyle,
    direction,
    modal,
    title: (_b = options == null ? void 0 : options.title) != null ? _b : "",
    controlShowTime: (_c = options == null ? void 0 : options.controlShowTime) != null ? _c : 3e3,
    lastPageElement: options == null ? void 0 : options.lastPageElement
  };
}
export {
  main as default
};
