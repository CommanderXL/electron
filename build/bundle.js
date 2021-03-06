/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./modules/entry.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by XRene on 16/4/2.
	 */
	__webpack_require__(/*! mainCss/angular-material.min.css */ 2);
	__webpack_require__(/*! mainCss/demo.less */ 6);
	__webpack_require__(/*! mainCss/public.less */ 8);
	__webpack_require__(/*! mainCss/common-directive.less */ 10);
	__webpack_require__(/*! mainCss/record.less */ 12);
	__webpack_require__(/*! mainCss/todo.less */ 14);
	
	__webpack_require__(/*! ./main */ 16);

/***/ },
/* 1 */,
/* 2 */
/*!*****************************************************!*\
  !*** ./modules/asset/less/angular-material.min.css ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./angular-material.min.css */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./angular-material.min.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./angular-material.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!********************************************************************!*\
  !*** ./~/css-loader!./modules/asset/less/angular-material.min.css ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Angular Material Design\n * https://github.com/angular/material\n * @license MIT\n * v1.1.0-rc4-master-06e7e99\n */body,html{height:100%;position:relative}body{margin:0;padding:0}[tabindex='-1']:focus{outline:0}.inset{padding:10px}a._md-no-style,button._md-no-style{font-weight:400;background-color:inherit;text-align:left;border:none;padding:0;margin:0}button,input,select,textarea{vertical-align:baseline}button,html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}button[disabled],html input[type=button][disabled],input[type=reset][disabled],input[type=submit][disabled]{cursor:default}textarea{vertical-align:top;overflow:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box;-webkit-box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input:-webkit-autofill{text-shadow:none}._md-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;text-transform:none;width:1px}.md-shadow{position:absolute;top:0;left:0;bottom:0;right:0;border-radius:inherit;pointer-events:none}.md-shadow-bottom-z-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.md-shadow-bottom-z-2{box-shadow:0 4px 8px 0 rgba(0,0,0,.4)}.md-shadow-animated.md-shadow{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.md-ripple-container{pointer-events:none;position:absolute;overflow:hidden;left:0;top:0;width:100%;height:100%;transition:all .55s cubic-bezier(.25,.8,.25,1)}.md-ripple{position:absolute;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;opacity:0;border-radius:50%}.md-ripple.md-ripple-placed{transition:margin .9s cubic-bezier(.25,.8,.25,1),border .9s cubic-bezier(.25,.8,.25,1),width .9s cubic-bezier(.25,.8,.25,1),height .9s cubic-bezier(.25,.8,.25,1),opacity .9s cubic-bezier(.25,.8,.25,1),-webkit-transform .9s cubic-bezier(.25,.8,.25,1);transition:margin .9s cubic-bezier(.25,.8,.25,1),border .9s cubic-bezier(.25,.8,.25,1),width .9s cubic-bezier(.25,.8,.25,1),height .9s cubic-bezier(.25,.8,.25,1),opacity .9s cubic-bezier(.25,.8,.25,1),transform .9s cubic-bezier(.25,.8,.25,1)}.md-ripple.md-ripple-scaled{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.md-ripple.md-ripple-active,.md-ripple.md-ripple-full,.md-ripple.md-ripple-visible{opacity:.2}.md-padding{padding:8px}.md-margin{margin:8px}.md-scroll-mask{position:absolute;background-color:transparent;top:0;right:0;bottom:0;left:0}.md-scroll-mask>.md-scroll-mask-bar{display:block;position:absolute;background-color:#fafafa;right:0;top:0;bottom:0;z-index:65;box-shadow:inset 0 0 1px rgba(0,0,0,.3)}@media (min-width:960px){.md-padding{padding:16px}}body[dir=ltr],body[dir=rtl],html[dir=ltr],html[dir=rtl]{unicode-bidi:embed}bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}body,html{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;min-height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.md-display-4{font-size:112px;font-weight:300;letter-spacing:-.010em;line-height:112px}.md-display-3{font-size:56px;font-weight:400;letter-spacing:-.005em;line-height:56px}.md-display-2{font-size:45px;font-weight:400;line-height:64px}.md-display-1{font-size:34px;font-weight:400;line-height:40px}.md-headline{font-size:24px;font-weight:400;line-height:32px}.md-title{font-size:20px;font-weight:500;letter-spacing:.005em}.md-subhead{font-size:16px;font-weight:400;letter-spacing:.010em;line-height:24px}.md-body-1{font-size:14px;font-weight:400;letter-spacing:.010em;line-height:20px}.md-body-2{font-size:14px;font-weight:500;letter-spacing:.010em;line-height:24px}.md-caption{font-size:12px;letter-spacing:.020em}.md-button{letter-spacing:.010em}button,html,input,select,textarea{font-family:Roboto,\"Helvetica Neue\",sans-serif}button,input,select,textarea{font-size:100%}@-webkit-keyframes md-autocomplete-list-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear}50%{opacity:0;height:40px;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{height:0;opacity:0}}@keyframes md-autocomplete-list-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear}50%{opacity:0;height:40px;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{height:0;opacity:0}}@-webkit-keyframes md-autocomplete-list-in{0%{opacity:0;height:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{opacity:0;height:40px}100%{opacity:1;height:40px}}@keyframes md-autocomplete-list-in{0%{opacity:0;height:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{opacity:0;height:40px}100%{opacity:1;height:40px}}md-autocomplete{border-radius:2px;display:block;height:40px;position:relative;overflow:visible;min-width:190px}md-autocomplete[disabled] input{cursor:default}md-autocomplete[md-floating-label]{border-radius:0;background:0 0;height:auto}md-autocomplete[md-floating-label] md-input-container{padding-bottom:0}md-autocomplete[md-floating-label] md-autocomplete-wrap{height:auto}md-autocomplete[md-floating-label] button{position:absolute;top:auto;bottom:0;right:0;width:30px;height:30px}md-autocomplete md-autocomplete-wrap{display:block;position:relative;overflow:visible;height:40px}md-autocomplete md-autocomplete-wrap.md-menu-showing{z-index:51}md-autocomplete md-autocomplete-wrap md-progress-linear{position:absolute;bottom:-2px;left:0}md-autocomplete md-autocomplete-wrap md-progress-linear.md-inline{bottom:40px;right:2px;left:2px;width:auto}md-autocomplete md-autocomplete-wrap md-progress-linear ._md-mode-indeterminate{position:absolute;top:0;left:0;width:100%;height:3px;transition:none}md-autocomplete md-autocomplete-wrap md-progress-linear ._md-mode-indeterminate .md-container{transition:none;height:3px}md-autocomplete md-autocomplete-wrap md-progress-linear ._md-mode-indeterminate.ng-enter{transition:opacity .15s linear}md-autocomplete md-autocomplete-wrap md-progress-linear ._md-mode-indeterminate.ng-enter.ng-enter-active{opacity:1}md-autocomplete md-autocomplete-wrap md-progress-linear ._md-mode-indeterminate.ng-leave{transition:opacity .15s linear}md-autocomplete md-autocomplete-wrap md-progress-linear ._md-mode-indeterminate.ng-leave.ng-leave-active{opacity:0}md-autocomplete input:not(.md-input){font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background:0 0;width:100%;padding:0 15px;line-height:40px;height:40px}md-autocomplete input:not(.md-input)::-ms-clear{display:none}md-autocomplete button{position:relative;line-height:20px;text-align:center;width:30px;height:30px;cursor:pointer;border:none;border-radius:50%;padding:0;font-size:12px;background:0 0;margin:auto 5px}md-autocomplete button:after{content:'';position:absolute;top:-6px;right:-6px;bottom:-6px;left:-6px;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}md-autocomplete button:focus{outline:0}md-autocomplete button:focus:after{-webkit-transform:scale(1);transform:scale(1);opacity:1}md-autocomplete button md-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}md-autocomplete button md-icon path{stroke-width:0}md-autocomplete button.ng-enter{-webkit-transform:scale(0);transform:scale(0);transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out}md-autocomplete button.ng-enter.ng-enter-active{-webkit-transform:scale(1);transform:scale(1)}md-autocomplete button.ng-leave{transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out}md-autocomplete button.ng-leave.ng-leave-active{-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){md-autocomplete input{border:1px solid #fff}md-autocomplete li:focus{color:#fff}}.md-virtual-repeat-container.md-autocomplete-suggestions-container{position:absolute;box-shadow:0 2px 5px rgba(0,0,0,.25);height:225.5px;max-height:225.5px;z-index:100}.md-virtual-repeat-container.md-not-found{height:48px}.md-autocomplete-suggestions{margin:0;list-style:none;padding:0}.md-autocomplete-suggestions li{font-size:14px;overflow:hidden;padding:0 15px;line-height:48px;height:48px;transition:background .15s linear;margin:0;white-space:nowrap;text-overflow:ellipsis}.md-autocomplete-suggestions li:focus{outline:0}.md-autocomplete-suggestions li:not(.md-not-found-wrapper){cursor:pointer}@media screen and (-ms-high-contrast:active){.md-autocomplete-suggestions,md-autocomplete{border:1px solid #fff}}md-backdrop{transition:opacity 450ms;position:absolute;top:0;bottom:0;left:0;right:0;z-index:50}md-backdrop._md-menu-backdrop{position:fixed!important;z-index:99}md-backdrop._md-select-backdrop{z-index:81;transition-duration:0}md-backdrop._md-dialog-backdrop{z-index:79}md-backdrop._md-bottom-sheet-backdrop{z-index:69}md-backdrop._md-sidenav-backdrop{z-index:59}md-backdrop._md-click-catcher{position:absolute}md-backdrop.md-opaque{opacity:.48}md-backdrop.md-opaque.ng-enter{opacity:0}md-backdrop.md-opaque.ng-enter.md-opaque.ng-enter-active{opacity:.48}md-backdrop.md-opaque.ng-leave{opacity:.48;transition:opacity 400ms}md-backdrop.md-opaque.ng-leave.md-opaque.ng-leave-active{opacity:0}md-bottom-sheet{position:absolute;left:0;right:0;bottom:0;padding:8px 16px 88px;z-index:70;border-top-width:1px;border-top-style:solid;-webkit-transform:translate3d(0,80px,0);transform:translate3d(0,80px,0);transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:-webkit-transform;transition-property:transform}md-bottom-sheet.md-has-header{padding-top:0}md-bottom-sheet.ng-enter{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}md-bottom-sheet.ng-enter-active{opacity:1;display:block;-webkit-transform:translate3d(0,80px,0)!important;transform:translate3d(0,80px,0)!important}md-bottom-sheet.ng-leave-active{-webkit-transform:translate3d(0,100%,0)!important;transform:translate3d(0,100%,0)!important;transition:all .3s cubic-bezier(.55,0,.55,.2)}md-bottom-sheet .md-subheader{background-color:transparent;font-family:Roboto,\"Helvetica Neue\",sans-serif;line-height:56px;padding:0;white-space:nowrap}md-bottom-sheet md-inline-icon{display:inline-block;height:24px;width:24px;fill:#444}md-bottom-sheet md-list-item{display:-webkit-flex;display:-ms-flexbox;display:flex;outline:0}md-bottom-sheet md-list-item:hover{cursor:pointer}md-bottom-sheet.md-list md-list-item{padding:0;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:48px}md-bottom-sheet.md-grid{padding-left:24px;padding-right:24px;padding-top:0}md-bottom-sheet.md-grid md-list{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;transition:all .5s;-webkit-align-items:center;-ms-flex-align:center;align-items:center}md-bottom-sheet.md-grid md-list-item{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;transition:all .5s;height:96px;margin-top:8px;margin-bottom:8px}@media (max-width:960px){md-bottom-sheet.md-grid md-list-item{-webkit-flex:1 1 33.33333%;-ms-flex:1 1 33.33333%;flex:1 1 33.33333%;max-width:33.33333%}md-bottom-sheet.md-grid md-list-item:nth-of-type(3n+1){-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}md-bottom-sheet.md-grid md-list-item:nth-of-type(3n){-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}}@media (min-width:960px) and (max-width:1279px){md-bottom-sheet.md-grid md-list-item{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}}@media (min-width:1280px) and (max-width:1919px){md-bottom-sheet.md-grid md-list-item{-webkit-flex:1 1 16.66667%;-ms-flex:1 1 16.66667%;flex:1 1 16.66667%;max-width:16.66667%}}@media (min-width:1920px){md-bottom-sheet.md-grid md-list-item{-webkit-flex:1 1 14.28571%;-ms-flex:1 1 14.28571%;flex:1 1 14.28571%;max-width:14.28571%}}md-bottom-sheet.md-grid md-list-item .md-list-item-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:48px;padding-bottom:16px}md-bottom-sheet.md-grid md-list-item .md-grid-item-content{border:1px solid transparent;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:80px}md-bottom-sheet.md-grid md-list-item .md-grid-text{font-weight:400;line-height:16px;font-size:13px;margin:0;white-space:nowrap;width:64px;text-align:center;text-transform:none;padding-top:8px}@media screen and (-ms-high-contrast:active){md-bottom-sheet{border:1px solid #fff}}button.md-button::-moz-focus-inner{border:0}.md-button{border-radius:3px;box-sizing:border-box;color:currentColor;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;outline:0;border:0;display:inline-block;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;background:0 0;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-weight:500;font-size:14px;font-style:inherit;font-variant:inherit;font-family:inherit;text-decoration:none;cursor:pointer;overflow:hidden;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.md-button:focus{outline:0}.md-button:focus,.md-button:hover{text-decoration:none}.md-button.ng-hide,.md-button.ng-leave{transition:none}.md-button.md-cornered{border-radius:0}.md-button.md-icon{padding:0;background:0 0}.md-button.md-raised:not([disabled]){box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.md-button.md-icon-button{margin:0 6px;height:40px;min-width:0;line-height:24px;padding:8px;width:40px;border-radius:50%}.md-button.md-icon-button .md-ripple-container{border-radius:50%;background-clip:padding-box;overflow:hidden;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)}.md-button.md-fab{z-index:20;line-height:56px;min-width:0;width:56px;height:56px;vertical-align:middle;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);border-radius:50%;background-clip:padding-box;overflow:hidden;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-property:background-color,box-shadow,-webkit-transform;transition-property:background-color,box-shadow,transform}.md-button.md-fab.md-fab-bottom-right{top:auto;right:20px;bottom:20px;left:auto;position:absolute}.md-button.md-fab.md-fab-bottom-left{top:auto;right:auto;bottom:20px;left:20px;position:absolute}.md-button.md-fab.md-fab-top-right{top:20px;right:20px;bottom:auto;left:auto;position:absolute}.md-button.md-fab.md-fab-top-left{top:20px;right:auto;bottom:auto;left:20px;position:absolute}.md-button.md-fab .md-ripple-container{border-radius:50%;background-clip:padding-box;overflow:hidden;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)}.md-button.md-fab.md-mini{line-height:40px;width:40px;height:40px}.md-button.md-fab.ng-hide,.md-button.md-fab.ng-leave{transition:none}.md-button:not([disabled]).md-fab.md-focused,.md-button:not([disabled]).md-raised.md-focused{box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.md-button:not([disabled]).md-fab:active,.md-button:not([disabled]).md-raised:active{box-shadow:0 4px 8px 0 rgba(0,0,0,.4)}.md-button .md-ripple-container{border-radius:3px;background-clip:padding-box;overflow:hidden;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)}._md-toast-open-top .md-button.md-fab-top-left,._md-toast-open-top .md-button.md-fab-top-right{transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate3d(0,42px,0);transform:translate3d(0,42px,0)}._md-toast-open-top .md-button.md-fab-top-left:not([disabled]).md-focused,._md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,._md-toast-open-top .md-button.md-fab-top-right:not([disabled]).md-focused,._md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover{-webkit-transform:translate3d(0,41px,0);transform:translate3d(0,41px,0)}._md-toast-open-bottom .md-button.md-fab-bottom-left,._md-toast-open-bottom .md-button.md-fab-bottom-right{transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate3d(0,-42px,0);transform:translate3d(0,-42px,0)}._md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]).md-focused,._md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,._md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]).md-focused,._md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover{-webkit-transform:translate3d(0,-43px,0);transform:translate3d(0,-43px,0)}.md-button-group{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.md-button-group>.md-button{-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden;width:0;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-group>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-group>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}@media screen and (-ms-high-contrast:active){.md-button.md-fab,.md-button.md-raised{border:1px solid #fff}}md-card{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:8px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}md-card md-card-header{padding:16px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-card md-card-header:first-child md-card-avatar{margin-right:12px}[dir=rtl] md-card md-card-header:first-child md-card-avatar{margin-right:auto;margin-right:initial;margin-left:12px}md-card md-card-header:last-child md-card-avatar{margin-left:12px}[dir=rtl] md-card md-card-header:last-child md-card-avatar{margin-left:auto;margin-left:initial;margin-right:12px}md-card md-card-header md-card-avatar{width:40px;height:40px}md-card md-card-header md-card-avatar .md-user-avatar,md-card md-card-header md-card-avatar md-icon{border-radius:50%}md-card md-card-header md-card-avatar md-icon{padding:8px}md-card md-card-header md-card-avatar+md-card-header-text{max-height:40px}md-card md-card-header md-card-avatar+md-card-header-text .md-title{font-size:14px}md-card md-card-header md-card-header-text{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-card md-card-header md-card-header-text .md-subhead{font-size:14px}md-card>:not(md-card-content) img,md-card>img{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:100%;height:100%!important}md-card md-card-title{padding:24px 16px 16px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-card md-card-title+md-card-content{padding-top:0}md-card md-card-title md-card-title-text{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-flex;display:-ms-flexbox;display:flex}md-card md-card-title md-card-title-text .md-subhead{padding-top:0;font-size:14px}md-card md-card-title md-card-title-text:only-child .md-subhead{padding-top:12px}md-card md-card-title md-card-title-media{margin-top:-8px}md-card md-card-title md-card-title-media .md-media-sm{height:80px;width:80px}md-card md-card-title md-card-title-media .md-media-md{height:112px;width:112px}md-card md-card-title md-card-title-media .md-media-lg{height:152px;width:152px}md-card md-card-content{display:block;padding:16px}md-card md-card-content>p:first-child{margin-top:0}md-card md-card-content>p:last-child{margin-bottom:0}md-card md-card-content .md-media-xl{height:240px;width:240px}md-card .md-actions,md-card md-card-actions{margin:8px}md-card .md-actions.layout-column .md-button:not(.md-icon-button),md-card md-card-actions.layout-column .md-button:not(.md-icon-button){margin:2px 0}md-card .md-actions.layout-column .md-button:not(.md-icon-button):first-of-type,md-card md-card-actions.layout-column .md-button:not(.md-icon-button):first-of-type{margin-top:0}md-card .md-actions.layout-column .md-button:not(.md-icon-button):last-of-type,md-card md-card-actions.layout-column .md-button:not(.md-icon-button):last-of-type{margin-bottom:0}md-card .md-actions.layout-column .md-button.md-icon-button,md-card md-card-actions.layout-column .md-button.md-icon-button{margin-top:6px;margin-bottom:6px}md-card .md-actions md-card-icon-actions,md-card md-card-actions md-card-icon-actions{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button),md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button){margin:0 4px}md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type,md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type{margin-left:0}[dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type,[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type{margin-left:auto;margin-left:initial;margin-right:0}md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type,md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type{margin-right:0}[dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type,[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type{margin-right:auto;margin-right:initial;margin-left:0}md-card .md-actions:not(.layout-column) .md-button.md-icon-button,md-card md-card-actions:not(.layout-column) .md-button.md-icon-button{margin-left:6px;margin-right:6px}md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type,md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type{margin-left:12px}[dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type,[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type{margin-left:auto;margin-left:initial;margin-right:12px}md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type,md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type{margin-right:12px}[dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type,[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type{margin-right:auto;margin-right:initial;margin-left:12px}md-card .md-actions:not(.layout-column) .md-button+md-card-icon-actions,md-card md-card-actions:not(.layout-column) .md-button+md-card-icon-actions{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-card md-card-footer{margin-top:auto;padding:16px}@media screen and (-ms-high-contrast:active){md-card{border:1px solid #fff}}.md-inline-form md-checkbox{margin:19px 0 18px}md-checkbox{box-sizing:border-box;display:inline-block;margin-bottom:16px;white-space:nowrap;cursor:pointer;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;min-width:20px;min-height:20px;margin-left:0;margin-right:16px}[dir=rtl] md-checkbox{margin-left:16px;margin-right:0}md-checkbox:last-of-type{margin-left:0;margin-right:0}md-checkbox.md-focused:not([disabled]) ._md-container:before{left:-8px;top:-8px;right:-8px;bottom:-8px}md-checkbox.md-focused:not([disabled]):not(.md-checked) ._md-container:before{background-color:rgba(0,0,0,.12)}md-checkbox.md-align-top-left>div._md-container{top:12px}md-checkbox ._md-container{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);box-sizing:border-box;display:inline-block;width:20px;height:20px;left:0;right:auto}[dir=rtl] md-checkbox ._md-container{left:auto;right:0}md-checkbox ._md-container:before{box-sizing:border-box;background-color:transparent;border-radius:50%;content:'';position:absolute;display:block;height:auto;left:0;top:0;right:0;bottom:0;transition:all .5s;width:auto}md-checkbox ._md-container:after{box-sizing:border-box;content:'';position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px}md-checkbox ._md-container .md-ripple-container{position:absolute;display:block;width:auto;height:auto;left:-15px;top:-15px;right:-15px;bottom:-15px}md-checkbox ._md-icon{box-sizing:border-box;transition:240ms;position:absolute;top:0;left:0;width:20px;height:20px;border-width:2px;border-style:solid;border-radius:2px}md-checkbox.md-checked ._md-icon{border:none}md-checkbox.md-checked ._md-icon:after{box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;left:6.67px;top:2.22px;display:table;width:6.67px;height:13.33px;border-width:2px;border-style:solid;border-top:0;border-left:0;content:''}md-checkbox[disabled]{cursor:default}md-checkbox.md-indeterminate ._md-icon:after{box-sizing:border-box;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:table;width:12px;height:2px;border-width:2px;border-style:solid;border-top:0;border-left:0;content:''}md-checkbox ._md-label{box-sizing:border-box;position:relative;display:inline-block;vertical-align:middle;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;margin-left:30px;margin-right:0}[dir=rtl] md-checkbox ._md-label{margin-left:0;margin-right:30px}.md-contact-chips .md-chips md-chip{padding:0 25px 0 0}[dir=rtl] .md-contact-chips .md-chips md-chip{padding:0 0 0 25px}.md-contact-chips .md-chips md-chip .md-contact-avatar{float:left}[dir=rtl] .md-contact-chips .md-chips md-chip .md-contact-avatar{float:right}.md-contact-chips .md-chips md-chip .md-contact-avatar img{height:32px;border-radius:16px}.md-contact-chips .md-chips md-chip .md-contact-name{display:inline-block;height:32px;margin-left:8px}[dir=rtl] .md-contact-chips .md-chips md-chip .md-contact-name{margin-left:auto;margin-left:initial;margin-right:8px}.md-contact-suggestion{height:56px}.md-contact-suggestion img{height:40px;border-radius:20px;margin-top:8px}.md-contact-suggestion .md-contact-name{margin-left:8px;width:120px}[dir=rtl] .md-contact-suggestion .md-contact-name{margin-left:auto;margin-left:initial;margin-right:8px}.md-contact-suggestion .md-contact-email,.md-contact-suggestion .md-contact-name{display:inline-block;overflow:hidden;text-overflow:ellipsis}.md-contact-chips-suggestions li{height:100%}.md-chips{display:block;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;padding:0 0 8px 3px;vertical-align:middle}.md-chips:after{content:'';display:table;clear:both}[dir=rtl] .md-chips{padding:0 3px 8px 0}.md-chips.md-readonly ._md-chip-input-container{min-height:32px}.md-chips:not(.md-readonly){cursor:text}.md-chips:not(.md-readonly) md-chip:not(.md-readonly){padding-right:22px}[dir=rtl] .md-chips:not(.md-readonly) md-chip:not(.md-readonly){padding-right:auto;padding-right:initial;padding-left:22px}.md-chips:not(.md-readonly) md-chip:not(.md-readonly) ._md-chip-content{padding-right:4px}[dir=rtl] .md-chips:not(.md-readonly) md-chip:not(.md-readonly) ._md-chip-content{padding-right:auto;padding-right:initial;padding-left:4px}.md-chips md-chip{cursor:default;border-radius:16px;display:block;height:32px;line-height:32px;margin:8px 8px 0 0;padding:0 12px;float:left;box-sizing:border-box;max-width:100%;position:relative}[dir=rtl] .md-chips md-chip{margin:8px 0 0 8px;float:right}.md-chips md-chip ._md-chip-content{display:block;float:left;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}[dir=rtl] .md-chips md-chip ._md-chip-content{float:right}.md-chips md-chip ._md-chip-content:focus{outline:0}.md-chips md-chip._md-chip-content-edit-is-enabled{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.md-chips md-chip ._md-chip-remove-container{position:absolute;right:0;line-height:22px}[dir=rtl] .md-chips md-chip ._md-chip-remove-container{right:0;right:auto;right:initial;left:0}.md-chips md-chip ._md-chip-remove{text-align:center;width:32px;height:32px;min-width:0;padding:0;background:0 0;border:none;box-shadow:none;margin:0;position:relative}.md-chips md-chip ._md-chip-remove md-icon{height:18px;width:18px;position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.md-chips ._md-chip-input-container{display:block;line-height:32px;margin:8px 8px 0 0;padding:0;float:left}[dir=rtl] .md-chips ._md-chip-input-container{margin:8px 0 0 8px;float:right}.md-chips ._md-chip-input-container input:not([type]),.md-chips ._md-chip-input-container input[type=url],.md-chips ._md-chip-input-container input[type=text],.md-chips ._md-chip-input-container input[type=email],.md-chips ._md-chip-input-container input[type=number],.md-chips ._md-chip-input-container input[type=tel]{border:0;height:32px;line-height:32px;padding:0}.md-chips ._md-chip-input-container input:not([type]):focus,.md-chips ._md-chip-input-container input[type=url]:focus,.md-chips ._md-chip-input-container input[type=text]:focus,.md-chips ._md-chip-input-container input[type=email]:focus,.md-chips ._md-chip-input-container input[type=number]:focus,.md-chips ._md-chip-input-container input[type=tel]:focus{outline:0}.md-chips ._md-chip-input-container md-autocomplete,.md-chips ._md-chip-input-container md-autocomplete-wrap{background:0 0}.md-chips ._md-chip-input-container md-autocomplete md-autocomplete-wrap{box-shadow:none}.md-chips ._md-chip-input-container input{border:0;height:32px;line-height:32px;padding:0}.md-chips ._md-chip-input-container input:focus{outline:0}.md-chips ._md-chip-input-container md-autocomplete,.md-chips ._md-chip-input-container md-autocomplete-wrap{height:32px}.md-chips ._md-chip-input-container md-autocomplete{box-shadow:none}.md-chips ._md-chip-input-container md-autocomplete input{position:relative}.md-chips ._md-chip-input-container:not(:first-child){margin:8px 8px 0 0}[dir=rtl] .md-chips ._md-chip-input-container:not(:first-child){margin:8px 0 0 8px}.md-chips ._md-chip-input-container input{background:0 0;border-width:0}.md-chips md-autocomplete button{display:none}@media screen and (-ms-high-contrast:active){._md-chip-input-container,md-chip{border:1px solid #fff}._md-chip-input-container md-autocomplete{border:none}}md-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}md-content[md-scroll-y]{overflow-y:auto;overflow-x:hidden}md-content[md-scroll-x]{overflow-x:auto;overflow-y:hidden}md-content.md-no-momentum{-webkit-overflow-scrolling:auto}@media print{md-content{overflow:visible!important}}md-calendar{font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-calendar-scroll-mask{display:inline-block;overflow:hidden;height:308px}.md-calendar-scroll-mask .md-virtual-repeat-scroller{overflow-y:scroll;-webkit-overflow-scrolling:touch}.md-calendar-scroll-mask .md-virtual-repeat-scroller::-webkit-scrollbar{display:none}.md-calendar-scroll-mask .md-virtual-repeat-offsetter{width:100%}.md-calendar-scroll-container{box-shadow:inset -3px 3px 6px rgba(0,0,0,.2);display:inline-block;height:308px;width:346px}.md-calendar-date{height:44px;width:44px;text-align:center;padding:0;border:none}.md-calendar-date:first-child{padding-left:16px}[dir=rtl] .md-calendar-date:first-child{padding-left:auto;padding-left:initial;padding-right:16px}.md-calendar-date:last-child{padding-right:16px}[dir=rtl] .md-calendar-date:last-child{padding-right:auto;padding-right:initial;padding-left:16px}.md-calendar-date.md-calendar-date-disabled{cursor:default}.md-calendar-date-selection-indicator{transition:background-color,color .4s cubic-bezier(.25,.8,.25,1);border-radius:50%;display:inline-block;width:40px;height:40px;line-height:40px}.md-calendar-date:not(.md-disabled) .md-calendar-date-selection-indicator{cursor:pointer}.md-calendar-month-label{height:44px;font-size:14px;font-weight:500;padding:0 0 0 24px}[dir=rtl] .md-calendar-month-label{padding:0 24px 0 0}.md-calendar-day-header{table-layout:fixed;border-spacing:0;border-collapse:collapse}.md-calendar-day-header th{width:44px;text-align:center;padding:0;border:none;font-weight:400;height:40px}.md-calendar-day-header th:first-child{padding-left:16px}[dir=rtl] .md-calendar-day-header th:first-child{padding-left:auto;padding-left:initial;padding-right:16px}.md-calendar-day-header th:last-child{padding-right:16px}[dir=rtl] .md-calendar-day-header th:last-child{padding-right:auto;padding-right:initial;padding-left:16px}.md-calendar{table-layout:fixed;border-spacing:0;border-collapse:collapse}.md-calendar tr:last-child td{border-bottom-width:1px;border-bottom-style:solid}.md-calendar:first-child{border-top:1px solid transparent}.md-calendar tbody,.md-calendar td,.md-calendar tr{vertical-align:middle}md-datepicker{white-space:nowrap;overflow:hidden;padding-right:18px;margin-right:-18px;vertical-align:middle}[dir=rtl] md-datepicker{padding-right:auto;padding-right:initial;padding-left:18px;margin-right:auto;margin-right:initial;margin-left:-18px}.md-inline-form md-datepicker{margin-top:12px}.md-datepicker-button{display:inline-block;box-sizing:border-box;background:0 0}.md-datepicker-input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background:0 0;min-width:120px;max-width:328px}.md-datepicker-input::-ms-clear{display:none}.md-datepicker-input-container{position:relative;padding-bottom:5px;border-bottom-width:1px;border-bottom-style:solid;display:inline-block;width:auto;margin-left:12px}[dir=rtl] .md-datepicker-input-container{margin-left:auto;margin-left:initial;margin-right:12px}.md-datepicker-input-container.md-datepicker-focused{border-bottom-width:2px}.md-datepicker-calendar-pane{position:absolute;top:0;left:0;z-index:100;border-width:1px;border-style:solid;background:0 0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;transition:-webkit-transform .2s cubic-bezier(.25,.8,.25,1);transition:transform .2s cubic-bezier(.25,.8,.25,1)}.md-datepicker-calendar-pane.md-pane-open{-webkit-transform:scale(1);transform:scale(1)}.md-datepicker-input-mask{height:40px;width:340px;position:relative;background:0 0;pointer-events:none;cursor:text}.md-datepicker-input-mask-opaque{position:absolute;right:0;left:120px;height:100%;margin-left:-1px}.md-datepicker-calendar{opacity:0;transition:opacity .2s cubic-bezier(.5,0,.25,1)}.md-pane-open .md-datepicker-calendar{opacity:1}.md-datepicker-calendar md-calendar:focus{outline:0}.md-datepicker-expand-triangle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid}.md-datepicker-triangle-button{position:absolute;right:0;top:0;-webkit-transform:translateY(-25%) translateX(45%);transform:translateY(-25%) translateX(45%)}[dir=rtl] .md-datepicker-triangle-button{right:0;right:auto;right:initial;left:0;-webkit-transform:translateY(-25%) translateX(-45%);transform:translateY(-25%) translateX(-45%)}.md-datepicker-triangle-button.md-button.md-icon-button{height:100%;width:36px;position:absolute}md-datepicker[disabled] .md-datepicker-input-container{border-bottom-color:transparent}md-datepicker[disabled] .md-datepicker-triangle-button{display:none}.md-datepicker-open .md-datepicker-input-container{margin-left:-12px;margin-bottom:-5px;border:none}[dir=rtl] .md-datepicker-open .md-datepicker-input-container{margin-left:auto;margin-left:initial;margin-right:-12px}.md-datepicker-open .md-datepicker-input{margin-left:24px;height:40px}[dir=rtl] .md-datepicker-open .md-datepicker-input{margin-left:auto;margin-left:initial;margin-right:24px}.md-datepicker-open .md-datepicker-triangle-button,.md-datepicker-pos-adjusted .md-datepicker-input-mask{display:none}.md-datepicker-calendar-pane .md-calendar{-webkit-transform:translateY(-85px);transform:translateY(-85px);transition:-webkit-transform .65s cubic-bezier(.25,.8,.25,1);transition:transform .65s cubic-bezier(.25,.8,.25,1);transition-delay:.125s}.md-datepicker-calendar-pane.md-pane-open .md-calendar{-webkit-transform:translateY(0);transform:translateY(0)}.md-dialog-is-showing{max-height:100%}.md-dialog-container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;z-index:80;overflow:hidden}md-dialog{opacity:0;min-width:240px;max-width:80%;max-height:80%;position:relative;overflow:auto;box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-dialog._md-transition-in{opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate(0,0) scale(1);transform:translate(0,0) scale(1)}md-dialog._md-transition-out{opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate(0,100%) scale(.2);transform:translate(0,100%) scale(.2)}md-dialog>form{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:auto}md-dialog .md-dialog-content{padding:24px}md-dialog md-dialog-content{-webkit-order:1;-ms-flex-order:1;order:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:auto;-webkit-overflow-scrolling:touch}md-dialog md-dialog-content:not([layout=row])>:first-child:not(.md-subheader){margin-top:0}md-dialog md-dialog-content:focus{outline:0}md-dialog md-dialog-content .md-subheader{margin:0}md-dialog md-dialog-content ._md-dialog-content-body{width:100%}md-dialog md-dialog-content .md-prompt-input-container{width:100%;box-sizing:border-box}md-dialog .md-actions,md-dialog md-dialog-actions{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-order:2;-ms-flex-order:2;order:2;box-sizing:border-box;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:0;padding-right:8px;padding-left:16px;min-height:52px;overflow:hidden}[dir=rtl] md-dialog .md-actions,[dir=rtl] md-dialog md-dialog-actions{padding-right:16px;padding-left:8px}md-dialog .md-actions .md-button,md-dialog md-dialog-actions .md-button{margin:8px 0 8px 8px}[dir=rtl] md-dialog .md-actions .md-button,[dir=rtl] md-dialog md-dialog-actions .md-button{margin-left:0;margin-right:8px}md-dialog.md-content-overflow .md-actions,md-dialog.md-content-overflow md-dialog-actions{border-top-width:1px;border-top-style:solid}@media screen and (-ms-high-contrast:active){md-dialog{border:1px solid #fff}}@media (max-width:959px){md-dialog.md-dialog-fullscreen{min-height:100%;min-width:100%;border-radius:0}}md-divider{display:block;border-top-width:1px;border-top-style:solid;margin:0}md-divider[md-inset]{margin-left:80px}[dir=rtl] md-divider[md-inset]{margin-left:auto;margin-left:initial;margin-right:80px}.layout-gt-lg-row>md-divider,.layout-gt-md-row>md-divider,.layout-gt-sm-row>md-divider,.layout-gt-xs-row>md-divider,.layout-lg-row>md-divider,.layout-md-row>md-divider,.layout-row>md-divider,.layout-sm-row>md-divider,.layout-xl-row>md-divider,.layout-xs-row>md-divider{border-top-width:0;border-right-width:1px;border-right-style:solid}md-fab-speed-dial{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:20}md-fab-speed-dial.md-fab-bottom-right{top:auto;right:20px;bottom:20px;left:auto;position:absolute}md-fab-speed-dial.md-fab-bottom-left{top:auto;right:auto;bottom:20px;left:20px;position:absolute}md-fab-speed-dial.md-fab-top-right{top:20px;right:20px;bottom:auto;left:auto;position:absolute}md-fab-speed-dial.md-fab-top-left{top:20px;right:auto;bottom:auto;left:20px;position:absolute}md-fab-speed-dial:not(.md-hover-full){pointer-events:none}md-fab-speed-dial:not(.md-hover-full) .md-fab-action-item,md-fab-speed-dial:not(.md-hover-full) md-fab-trigger,md-fab-speed-dial:not(.md-hover-full).md-is-open{pointer-events:auto}md-fab-speed-dial ._md-css-variables{z-index:20}md-fab-speed-dial.md-is-open .md-fab-action-item{-webkit-align-items:center;-ms-flex-align:center;align-items:center}md-fab-speed-dial md-fab-actions{display:-webkit-flex;display:-ms-flexbox;display:flex;height:auto}md-fab-speed-dial md-fab-actions .md-fab-action-item{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-fab-speed-dial.md-down{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-fab-speed-dial.md-down md-fab-trigger{-webkit-order:1;-ms-flex-order:1;order:1}md-fab-speed-dial.md-down md-fab-actions{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-order:2;-ms-flex-order:2;order:2}md-fab-speed-dial.md-up{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-fab-speed-dial.md-up md-fab-trigger{-webkit-order:2;-ms-flex-order:2;order:2}md-fab-speed-dial.md-up md-fab-actions{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-order:1;-ms-flex-order:1;order:1}md-fab-speed-dial.md-left{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-fab-speed-dial.md-left md-fab-trigger{-webkit-order:2;-ms-flex-order:2;order:2}md-fab-speed-dial.md-left md-fab-actions{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-order:1;-ms-flex-order:1;order:1}md-fab-speed-dial.md-left md-fab-actions .md-fab-action-item{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-fab-speed-dial.md-right{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-fab-speed-dial.md-right md-fab-trigger{-webkit-order:1;-ms-flex-order:1;order:1}md-fab-speed-dial.md-right md-fab-actions{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-order:2;-ms-flex-order:2;order:2}md-fab-speed-dial.md-right md-fab-actions .md-fab-action-item{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-fab-speed-dial.md-fling-remove .md-fab-action-item>*,md-fab-speed-dial.md-scale-remove .md-fab-action-item>*{visibility:hidden}md-fab-speed-dial.md-fling .md-fab-action-item{opacity:1}md-fab-speed-dial.md-fling._md-animations-waiting .md-fab-action-item{opacity:0;transition-duration:0s}md-fab-speed-dial.md-scale .md-fab-action-item{-webkit-transform:scale(0);transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}md-fab-toolbar{display:block}md-fab-toolbar.md-fab-bottom-right{top:auto;right:20px;bottom:20px;left:auto;position:absolute}md-fab-toolbar.md-fab-bottom-left{top:auto;right:auto;bottom:20px;left:20px;position:absolute}md-fab-toolbar.md-fab-top-right{top:20px;right:20px;bottom:auto;left:auto;position:absolute}md-fab-toolbar.md-fab-top-left{top:20px;right:auto;bottom:auto;left:20px;position:absolute}md-fab-toolbar ._md-fab-toolbar-wrapper{display:block;position:relative;overflow:hidden;height:68px}md-fab-toolbar md-fab-trigger{position:absolute;z-index:20}md-fab-toolbar md-fab-trigger button{overflow:visible!important}md-fab-toolbar md-fab-trigger ._md-fab-toolbar-background{display:block;position:absolute;z-index:21;opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2)}md-fab-toolbar md-fab-trigger md-icon{position:relative;z-index:22;opacity:1;transition:all 200ms ease-in}md-fab-toolbar.md-left md-fab-trigger{right:0}[dir=rtl] md-fab-toolbar.md-left md-fab-trigger{right:0;right:auto;right:initial;left:0}md-fab-toolbar.md-left .md-toolbar-tools{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child{margin-right:.6rem}md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child{margin-left:-.8rem}[dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child{margin-left:auto;margin-left:initial;margin-right:-.8rem}md-fab-toolbar.md-left .md-toolbar-tools>.md-button:last-child{margin-right:8px}[dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools>.md-button:last-child{margin-right:auto;margin-right:initial;margin-left:8px}md-fab-toolbar.md-right md-fab-trigger{left:0}[dir=rtl] md-fab-toolbar.md-right md-fab-trigger{left:0;left:auto;left:initial;right:0}md-fab-toolbar.md-right .md-toolbar-tools{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-fab-toolbar md-toolbar{background-color:transparent!important;pointer-events:none;z-index:23}md-fab-toolbar md-toolbar .md-toolbar-tools{padding:0 20px;margin-top:3px}md-fab-toolbar md-toolbar .md-fab-action-item{opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s}md-fab-toolbar.md-is-open md-fab-trigger>button{box-shadow:none}md-fab-toolbar.md-is-open md-fab-trigger>button md-icon{opacity:0}md-fab-toolbar.md-is-open .md-fab-action-item{opacity:1;-webkit-transform:scale(1);transform:scale(1)}md-grid-list{box-sizing:border-box;display:block;position:relative}md-grid-list md-grid-tile,md-grid-list md-grid-tile-footer,md-grid-list md-grid-tile-header,md-grid-list md-grid-tile>figure{box-sizing:border-box}md-grid-list md-grid-tile{display:block;position:absolute}md-grid-list md-grid-tile figure{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;padding:0;margin:0}md-grid-list md-grid-tile md-grid-tile-footer,md-grid-list md-grid-tile md-grid-tile-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.18);overflow:hidden;position:absolute;left:0;right:0}md-grid-list md-grid-tile md-grid-tile-footer h3,md-grid-list md-grid-tile md-grid-tile-footer h4,md-grid-list md-grid-tile md-grid-tile-header h3,md-grid-list md-grid-tile md-grid-tile-header h4{font-weight:400;margin:0 0 0 16px}md-grid-list md-grid-tile md-grid-tile-footer h3,md-grid-list md-grid-tile md-grid-tile-header h3{font-size:14px}md-grid-list md-grid-tile md-grid-tile-footer h4,md-grid-list md-grid-tile md-grid-tile-header h4{font-size:12px}md-grid-list md-grid-tile md-grid-tile-header{top:0}md-grid-list md-grid-tile md-grid-tile-footer{bottom:0}@media screen and (-ms-high-contrast:active){md-grid-tile{border:1px solid #fff}md-grid-tile-footer{border-top:1px solid #fff}}md-icon{margin:auto;background-repeat:no-repeat no-repeat;display:inline-block;vertical-align:middle;fill:currentColor;height:24px;width:24px;min-height:24px;min-width:24px}md-icon svg{pointer-events:none;display:block}md-icon[md-font-icon]{line-height:24px;width:auto}md-input-container{display:inline-block;position:relative;padding:2px;margin:18px 0;vertical-align:middle}md-input-container:after{content:'';display:table;clear:both}md-input-container.md-block{display:block}md-input-container .md-errors-spacer{float:right;min-height:24px;min-width:1px}[dir=rtl] md-input-container .md-errors-spacer{float:left}md-input-container>md-icon{position:absolute;top:8px;left:2px;right:auto}[dir=rtl] md-input-container>md-icon{left:auto;right:2px}md-input-container input[type=url],md-input-container input[type=text],md-input-container input[type=password],md-input-container input[type=datetime],md-input-container input[type=datetime-local],md-input-container input[type=date],md-input-container input[type=month],md-input-container input[type=time],md-input-container input[type=week],md-input-container input[type=color],md-input-container input[type=search],md-input-container input[type=email],md-input-container input[type=number],md-input-container input[type=tel],md-input-container textarea{-moz-appearance:none;-webkit-appearance:none}md-input-container input[type=datetime-local],md-input-container input[type=date],md-input-container input[type=month],md-input-container input[type=time],md-input-container input[type=week]{min-height:26px}md-input-container textarea{resize:none;overflow:hidden}md-input-container textarea.md-input{min-height:26px;-ms-flex-preferred-size:auto}md-input-container textarea._md-textarea-scrollable,md-input-container textarea[md-no-autogrow]{overflow:auto}md-input-container textarea[md-no-autogrow]{height:auto}md-input-container label:not(._md-container-ignore){position:absolute;bottom:100%;left:0;right:auto}[dir=rtl] md-input-container label:not(._md-container-ignore){left:auto;right:0}md-input-container label:not(._md-container-ignore).md-required:after{content:' *';font-size:13px;vertical-align:top}md-input-container ._md-placeholder,md-input-container label:not(.md-no-float):not(._md-container-ignore){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;-webkit-order:1;-ms-flex-order:1;order:1;pointer-events:none;-webkit-font-smoothing:antialiased;padding-left:3px;padding-right:0;z-index:1;-webkit-transform:translate3d(0,28px,0) scale(1);transform:translate3d(0,28px,0) scale(1);transition:-webkit-transform .4s cubic-bezier(.25,.8,.25,1);transition:transform .4s cubic-bezier(.25,.8,.25,1);max-width:100%;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] md-input-container ._md-placeholder,[dir=rtl] md-input-container label:not(.md-no-float):not(._md-container-ignore){padding-left:0;padding-right:3px;-webkit-transform-origin:right top;transform-origin:right top}md-input-container ._md-placeholder{position:absolute;top:0;opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}md-input-container.md-input-focused ._md-placeholder{opacity:1;-webkit-transform:translate3d(0,24px,0);transform:translate3d(0,24px,0)}md-input-container.md-input-has-value ._md-placeholder{transition:none;opacity:0}md-input-container:not(.md-input-has-value) input:not(:focus),md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field{color:transparent}md-input-container .md-input{-webkit-order:2;-ms-flex-order:2;order:2;display:block;margin-top:0;background:0 0;padding:2px 2px 1px;border-width:0 0 1px;line-height:26px;height:30px;-ms-flex-preferred-size:26px;border-radius:0;border-style:solid;width:100%;box-sizing:border-box;float:left}[dir=rtl] md-input-container .md-input{float:right}md-input-container .md-input:focus{outline:0}md-input-container .md-input:invalid{outline:0;box-shadow:none}md-input-container .md-input.md-no-flex{-webkit-flex:none!important;-ms-flex:none!important;flex:none!important}md-input-container .md-char-counter{text-align:right;padding-right:2px;padding-left:0}[dir=rtl] md-input-container .md-char-counter{text-align:left;padding-right:0;padding-left:2px}md-input-container .md-input-messages-animation{position:relative;-webkit-order:4;-ms-flex-order:4;order:4;overflow:hidden;clear:left}[dir=rtl] md-input-container .md-input-messages-animation{clear:right}md-input-container .md-input-messages-animation.ng-enter .md-input-message-animation{opacity:0;margin-top:-100px}md-input-container .md-char-counter,md-input-container .md-input-message-animation{font-size:12px;line-height:14px;overflow:hidden;transition:all .3s cubic-bezier(.55,0,.55,.2);opacity:1;margin-top:0;padding-top:5px}md-input-container .md-char-counter:not(.md-char-counter),md-input-container .md-input-message-animation:not(.md-char-counter){padding-right:5px;padding-left:0}[dir=rtl] md-input-container .md-char-counter:not(.md-char-counter),[dir=rtl] md-input-container .md-input-message-animation:not(.md-char-counter){padding-right:0;padding-left:5px}md-input-container .md-auto-hide .md-input-message-animation:not(.ng-animate),md-input-container .md-input-message-animation.ng-enter,md-input-container:not(.md-input-invalid) .md-auto-hide .md-input-message-animation{opacity:0;margin-top:-100px}md-input-container.md-input-focused label:not(.md-no-float),md-input-container.md-input-has-placeholder label:not(.md-no-float),md-input-container.md-input-has-value label:not(.md-no-float){-webkit-transform:translate3d(0,6px,0) scale(.75);transform:translate3d(0,6px,0) scale(.75);transition:-webkit-transform cubic-bezier(.25,.8,.25,1) .4s,width cubic-bezier(.25,.8,.25,1) .4s;transition:transform cubic-bezier(.25,.8,.25,1) .4s,width cubic-bezier(.25,.8,.25,1) .4s;width:calc((100% - 18px) / .75)}md-input-container.md-input-has-value label{transition:none}md-input-container .md-input.ng-invalid.ng-dirty,md-input-container.md-input-focused .md-input{padding-bottom:0;border-width:0 0 2px}[disabled] md-input-container .md-input,md-input-container .md-input[disabled]{background-position:bottom -1px left 0;background-size:4px 1px;background-repeat:repeat-x}md-input-container.md-icon-float{transition:margin-top .4s cubic-bezier(.25,.8,.25,1)}md-input-container.md-icon-float>label{pointer-events:none;position:absolute}md-input-container.md-icon-float>md-icon{top:8px;left:2px;right:auto}[dir=rtl] md-input-container.md-icon-float>md-icon{left:auto;right:2px}md-input-container.md-icon-left>label .md-placeholder,md-input-container.md-icon-left>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-right>label .md-placeholder,md-input-container.md-icon-right>label:not(.md-no-float):not(._md-container-ignore){width:calc(100% - 36px - 18px)}md-input-container.md-icon-left.md-input-focused>label .md-placeholder,md-input-container.md-icon-left.md-input-focused>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-left.md-input-has-placeholder>label .md-placeholder,md-input-container.md-icon-left.md-input-has-placeholder>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-left.md-input-has-value>label .md-placeholder,md-input-container.md-icon-left.md-input-has-value>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-right.md-input-focused>label .md-placeholder,md-input-container.md-icon-right.md-input-focused>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-right.md-input-has-placeholder>label .md-placeholder,md-input-container.md-icon-right.md-input-has-placeholder>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-right.md-input-has-value>label .md-placeholder,md-input-container.md-icon-right.md-input-has-value>label:not(.md-no-float):not(._md-container-ignore){width:calc((100% - 36px - 18px) / .75)}md-input-container.md-icon-left{padding-left:36px;padding-right:0}[dir=rtl] md-input-container.md-icon-left{padding-left:0;padding-right:36px}md-input-container.md-icon-left>label{left:36px;right:auto}[dir=rtl] md-input-container.md-icon-left>label{left:auto;right:36px}md-input-container.md-icon-right{padding-left:0;padding-right:36px}[dir=rtl] md-input-container.md-icon-right{padding-left:36px;padding-right:0}md-input-container.md-icon-right>md-icon:last-of-type{margin:0;right:2px;left:auto}[dir=rtl] md-input-container.md-icon-right>md-icon:last-of-type{right:auto;left:2px}md-input-container.md-icon-left.md-icon-right{padding-left:36px;padding-right:36px}md-input-container.md-icon-left.md-icon-right>label .md-placeholder,md-input-container.md-icon-left.md-icon-right>label:not(.md-no-float):not(._md-container-ignore){width:calc(100% - (36px * 2))}md-input-container.md-icon-left.md-icon-right.md-input-focused>label .md-placeholder,md-input-container.md-icon-left.md-icon-right.md-input-focused>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-left.md-icon-right.md-input-has-placeholder>label .md-placeholder,md-input-container.md-icon-left.md-icon-right.md-input-has-placeholder>label:not(.md-no-float):not(._md-container-ignore),md-input-container.md-icon-left.md-icon-right.md-input-has-value>label .md-placeholder,md-input-container.md-icon-left.md-icon-right.md-input-has-value>label:not(.md-no-float):not(._md-container-ignore){width:calc((100% - (36px * 2)) / .75)}@media screen and (-ms-high-contrast:active){md-input-container.md-default-theme>md-icon{fill:#fff}}md-list{display:block;padding:8px 0}md-list .md-subheader{font-size:14px;font-weight:500;letter-spacing:.010em;line-height:1.2em}md-list.md-dense md-list-item,md-list.md-dense md-list-item ._md-list-item-inner{min-height:48px}md-list.md-dense md-list-item ._md-list-item-inner md-icon:first-child,md-list.md-dense md-list-item md-icon:first-child{width:20px;height:20px}md-list.md-dense md-list-item ._md-list-item-inner>md-icon:first-child:not(.md-avatar-icon),md-list.md-dense md-list-item>md-icon:first-child:not(.md-avatar-icon){margin-right:36px}[dir=rtl] md-list.md-dense md-list-item ._md-list-item-inner>md-icon:first-child:not(.md-avatar-icon),[dir=rtl] md-list.md-dense md-list-item>md-icon:first-child:not(.md-avatar-icon){margin-right:auto;margin-right:initial;margin-left:36px}md-list.md-dense md-list-item ._md-list-item-inner .md-avatar,md-list.md-dense md-list-item ._md-list-item-inner .md-avatar-icon,md-list.md-dense md-list-item .md-avatar,md-list.md-dense md-list-item .md-avatar-icon{margin-right:20px}[dir=rtl] md-list.md-dense md-list-item ._md-list-item-inner .md-avatar,[dir=rtl] md-list.md-dense md-list-item ._md-list-item-inner .md-avatar-icon,[dir=rtl] md-list.md-dense md-list-item .md-avatar,[dir=rtl] md-list.md-dense md-list-item .md-avatar-icon{margin-right:auto;margin-right:initial;margin-left:20px}md-list.md-dense md-list-item ._md-list-item-inner .md-avatar,md-list.md-dense md-list-item .md-avatar{-webkit-flex:none;-ms-flex:none;flex:none;width:36px;height:36px}md-list.md-dense md-list-item.md-2-line .md-list-item-text.md-offset,md-list.md-dense md-list-item.md-2-line>._md-no-style .md-list-item-text.md-offset,md-list.md-dense md-list-item.md-3-line .md-list-item-text.md-offset,md-list.md-dense md-list-item.md-3-line>._md-no-style .md-list-item-text.md-offset{margin-left:56px}[dir=rtl] md-list.md-dense md-list-item.md-2-line .md-list-item-text.md-offset,[dir=rtl] md-list.md-dense md-list-item.md-2-line>._md-no-style .md-list-item-text.md-offset,[dir=rtl] md-list.md-dense md-list-item.md-3-line .md-list-item-text.md-offset,[dir=rtl] md-list.md-dense md-list-item.md-3-line>._md-no-style .md-list-item-text.md-offset{margin-left:auto;margin-left:initial;margin-right:56px}md-list.md-dense md-list-item.md-2-line .md-list-item-text h3,md-list.md-dense md-list-item.md-2-line .md-list-item-text h4,md-list.md-dense md-list-item.md-2-line .md-list-item-text p,md-list.md-dense md-list-item.md-2-line>._md-no-style .md-list-item-text h3,md-list.md-dense md-list-item.md-2-line>._md-no-style .md-list-item-text h4,md-list.md-dense md-list-item.md-2-line>._md-no-style .md-list-item-text p,md-list.md-dense md-list-item.md-3-line .md-list-item-text h3,md-list.md-dense md-list-item.md-3-line .md-list-item-text h4,md-list.md-dense md-list-item.md-3-line .md-list-item-text p,md-list.md-dense md-list-item.md-3-line>._md-no-style .md-list-item-text h3,md-list.md-dense md-list-item.md-3-line>._md-no-style .md-list-item-text h4,md-list.md-dense md-list-item.md-3-line>._md-no-style .md-list-item-text p{line-height:1.05;font-size:12px}md-list.md-dense md-list-item.md-2-line .md-list-item-text h3,md-list.md-dense md-list-item.md-2-line>._md-no-style .md-list-item-text h3,md-list.md-dense md-list-item.md-3-line .md-list-item-text h3,md-list.md-dense md-list-item.md-3-line>._md-no-style .md-list-item-text h3{font-size:13px}md-list.md-dense md-list-item.md-2-line,md-list.md-dense md-list-item.md-2-line>._md-no-style{min-height:60px}md-list.md-dense md-list-item.md-2-line div.md-button:first-child::before,md-list.md-dense md-list-item.md-2-line>._md-no-style div.md-button:first-child::before{content:'';min-height:60px;visibility:hidden}md-list.md-dense md-list-item.md-2-line .md-avatar-icon,md-list.md-dense md-list-item.md-2-line>._md-no-style .md-avatar-icon,md-list.md-dense md-list-item.md-2-line>._md-no-style>.md-avatar,md-list.md-dense md-list-item.md-2-line>.md-avatar{margin-top:12px}md-list.md-dense md-list-item.md-3-line,md-list.md-dense md-list-item.md-3-line>._md-no-style{min-height:76px}md-list.md-dense md-list-item.md-3-line div.md-button:first-child::before,md-list.md-dense md-list-item.md-3-line>._md-no-style div.md-button:first-child::before{content:'';min-height:76px;visibility:hidden}md-list.md-dense md-list-item.md-3-line>._md-no-style>.md-avatar,md-list.md-dense md-list-item.md-3-line>._md-no-style>md-icon:first-child,md-list.md-dense md-list-item.md-3-line>.md-avatar,md-list.md-dense md-list-item.md-3-line>md-icon:first-child{margin-top:16px}md-list-item{position:relative}md-list-item._md-proxy-focus.md-focused ._md-no-style{transition:background-color .15s linear}md-list-item._md-button-wrap{position:relative}md-list-item._md-button-wrap>div.md-button:first-child{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:0 16px;margin:0;background-color:initial;font-weight:400;text-align:left;border:none}[dir=rtl] md-list-item._md-button-wrap>div.md-button:first-child{text-align:right}md-list-item._md-button-wrap>div.md-button:first-child>.md-button:first-child{position:absolute;top:0;left:0;height:100%;margin:0;padding:0}md-list-item._md-button-wrap>div.md-button:first-child ._md-list-item-inner{width:100%;height:100%}md-list-item ._md-no-style,md-list-item._md-no-proxy{position:relative;padding:0 16px;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}md-list-item ._md-no-style.md-button,md-list-item._md-no-proxy.md-button{font-size:inherit;height:inherit;text-align:left;text-transform:none;width:100%;white-space:normal;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;border-radius:0;margin:0}[dir=rtl] md-list-item ._md-no-style.md-button,[dir=rtl] md-list-item._md-no-proxy.md-button{text-align:right}md-list-item ._md-no-style.md-button>.md-ripple-container,md-list-item._md-no-proxy.md-button>.md-ripple-container{border-radius:0}md-list-item ._md-no-style:focus,md-list-item._md-no-proxy:focus{outline:0}md-list-item.md-clickable:hover{cursor:pointer}md-list-item md-divider{position:absolute;bottom:0;left:0;width:100%}[dir=rtl] md-list-item md-divider{left:0;left:auto;left:initial;right:0}md-list-item md-divider[md-inset]{left:72px;width:calc(100% - 72px);margin:0!important}[dir=rtl] md-list-item md-divider[md-inset]{left:0;left:auto;left:initial;right:72px}md-list-item,md-list-item ._md-list-item-inner{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:48px;height:auto}md-list-item ._md-list-item-inner>div.md-primary>md-icon:not(.md-avatar-icon),md-list-item ._md-list-item-inner>div.md-secondary>md-icon:not(.md-avatar-icon),md-list-item ._md-list-item-inner>md-icon.md-secondary:not(.md-avatar-icon),md-list-item ._md-list-item-inner>md-icon:first-child:not(.md-avatar-icon),md-list-item>div.md-primary>md-icon:not(.md-avatar-icon),md-list-item>div.md-secondary>md-icon:not(.md-avatar-icon),md-list-item>md-icon.md-secondary:not(.md-avatar-icon),md-list-item>md-icon:first-child:not(.md-avatar-icon){width:24px;margin-top:16px;margin-bottom:12px;box-sizing:content-box}md-list-item ._md-list-item-inner md-checkbox.md-secondary,md-list-item ._md-list-item-inner>div.md-primary>md-checkbox,md-list-item ._md-list-item-inner>div.md-secondary>md-checkbox,md-list-item ._md-list-item-inner>md-checkbox,md-list-item md-checkbox.md-secondary,md-list-item>div.md-primary>md-checkbox,md-list-item>div.md-secondary>md-checkbox,md-list-item>md-checkbox{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}md-list-item ._md-list-item-inner md-checkbox.md-secondary .md-label,md-list-item ._md-list-item-inner>div.md-primary>md-checkbox .md-label,md-list-item ._md-list-item-inner>div.md-secondary>md-checkbox .md-label,md-list-item ._md-list-item-inner>md-checkbox .md-label,md-list-item md-checkbox.md-secondary .md-label,md-list-item>div.md-primary>md-checkbox .md-label,md-list-item>div.md-secondary>md-checkbox .md-label,md-list-item>md-checkbox .md-label{display:none}md-list-item ._md-list-item-inner>md-icon:first-child:not(.md-avatar-icon),md-list-item>md-icon:first-child:not(.md-avatar-icon){margin-right:32px}[dir=rtl] md-list-item ._md-list-item-inner>md-icon:first-child:not(.md-avatar-icon),[dir=rtl] md-list-item>md-icon:first-child:not(.md-avatar-icon){margin-right:auto;margin-right:initial;margin-left:32px}md-list-item ._md-list-item-inner .md-avatar,md-list-item ._md-list-item-inner .md-avatar-icon,md-list-item .md-avatar,md-list-item .md-avatar-icon{margin-top:8px;margin-bottom:8px;margin-right:16px;border-radius:50%;box-sizing:content-box}[dir=rtl] md-list-item ._md-list-item-inner .md-avatar,[dir=rtl] md-list-item ._md-list-item-inner .md-avatar-icon,[dir=rtl] md-list-item .md-avatar,[dir=rtl] md-list-item .md-avatar-icon{margin-right:auto;margin-right:initial;margin-left:16px}md-list-item ._md-list-item-inner .md-avatar,md-list-item .md-avatar{-webkit-flex:none;-ms-flex:none;flex:none;width:40px;height:40px}md-list-item ._md-list-item-inner .md-avatar-icon,md-list-item .md-avatar-icon{padding:8px}md-list-item ._md-list-item-inner .md-avatar-icon svg,md-list-item .md-avatar-icon svg{width:24px;height:24px}md-list-item ._md-list-item-inner>md-checkbox,md-list-item>md-checkbox{width:24px;margin-left:3px;margin-right:29px;margin-top:16px}[dir=rtl] md-list-item ._md-list-item-inner>md-checkbox,[dir=rtl] md-list-item>md-checkbox{margin-left:29px;margin-right:3px}md-list-item ._md-list-item-inner ._md-secondary-container,md-list-item ._md-secondary-container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;margin:auto}md-list-item ._md-list-item-inner ._md-secondary-container .md-button:last-of-type,md-list-item ._md-list-item-inner ._md-secondary-container .md-icon-button:last-of-type,md-list-item ._md-secondary-container .md-button:last-of-type,md-list-item ._md-secondary-container .md-icon-button:last-of-type{margin-right:0}[dir=rtl] md-list-item ._md-list-item-inner ._md-secondary-container .md-button:last-of-type,[dir=rtl] md-list-item ._md-list-item-inner ._md-secondary-container .md-icon-button:last-of-type,[dir=rtl] md-list-item ._md-secondary-container .md-button:last-of-type,[dir=rtl] md-list-item ._md-secondary-container .md-icon-button:last-of-type{margin-right:auto;margin-right:initial;margin-left:0}md-list-item ._md-list-item-inner ._md-secondary-container md-checkbox,md-list-item ._md-secondary-container md-checkbox{margin-top:0;margin-bottom:0}md-list-item ._md-list-item-inner ._md-secondary-container md-checkbox:last-child,md-list-item ._md-secondary-container md-checkbox:last-child{width:24px;margin-right:0}[dir=rtl] md-list-item ._md-list-item-inner ._md-secondary-container md-checkbox:last-child,[dir=rtl] md-list-item ._md-secondary-container md-checkbox:last-child{margin-right:auto;margin-right:initial;margin-left:0}md-list-item ._md-list-item-inner ._md-secondary-container md-switch,md-list-item ._md-secondary-container md-switch{margin-top:0;margin-bottom:0;margin-right:-6px}[dir=rtl] md-list-item ._md-list-item-inner ._md-secondary-container md-switch,[dir=rtl] md-list-item ._md-secondary-container md-switch{margin-right:auto;margin-right:initial;margin-left:-6px}md-list-item ._md-list-item-inner>._md-list-item-inner>p,md-list-item ._md-list-item-inner>p,md-list-item>._md-list-item-inner>p,md-list-item>p{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0}md-list-item.md-2-line,md-list-item.md-2-line>._md-no-style,md-list-item.md-3-line,md-list-item.md-3-line>._md-no-style{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}md-list-item.md-2-line.md-long-text,md-list-item.md-2-line>._md-no-style.md-long-text,md-list-item.md-3-line.md-long-text,md-list-item.md-3-line>._md-no-style.md-long-text{margin-top:8px;margin-bottom:8px}md-list-item.md-2-line .md-list-item-text,md-list-item.md-2-line>._md-no-style .md-list-item-text,md-list-item.md-3-line .md-list-item-text,md-list-item.md-3-line>._md-no-style .md-list-item-text{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:auto;text-overflow:ellipsis;overflow:hidden}md-list-item.md-2-line .md-list-item-text.md-offset,md-list-item.md-2-line>._md-no-style .md-list-item-text.md-offset,md-list-item.md-3-line .md-list-item-text.md-offset,md-list-item.md-3-line>._md-no-style .md-list-item-text.md-offset{margin-left:56px}[dir=rtl] md-list-item.md-2-line .md-list-item-text.md-offset,[dir=rtl] md-list-item.md-2-line>._md-no-style .md-list-item-text.md-offset,[dir=rtl] md-list-item.md-3-line .md-list-item-text.md-offset,[dir=rtl] md-list-item.md-3-line>._md-no-style .md-list-item-text.md-offset{margin-left:auto;margin-left:initial;margin-right:56px}md-list-item.md-2-line .md-list-item-text h3,md-list-item.md-2-line>._md-no-style .md-list-item-text h3,md-list-item.md-3-line .md-list-item-text h3,md-list-item.md-3-line>._md-no-style .md-list-item-text h3{font-size:16px;font-weight:400;letter-spacing:.010em;margin:0;line-height:1.2em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}md-list-item.md-2-line .md-list-item-text h4,md-list-item.md-2-line>._md-no-style .md-list-item-text h4,md-list-item.md-3-line .md-list-item-text h4,md-list-item.md-3-line>._md-no-style .md-list-item-text h4{font-size:14px;letter-spacing:.010em;margin:3px 0 1px;font-weight:400;line-height:1.2em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}md-list-item.md-2-line .md-list-item-text p,md-list-item.md-2-line>._md-no-style .md-list-item-text p,md-list-item.md-3-line .md-list-item-text p,md-list-item.md-3-line>._md-no-style .md-list-item-text p{font-size:14px;font-weight:500;letter-spacing:.010em;margin:0;line-height:1.6em}md-list-item.md-2-line,md-list-item.md-2-line>._md-no-style{height:auto;min-height:72px}md-list-item.md-2-line div.md-button:first-child::before,md-list-item.md-2-line>._md-no-style div.md-button:first-child::before{content:'';min-height:72px;visibility:hidden}md-list-item.md-2-line .md-avatar-icon,md-list-item.md-2-line>._md-no-style .md-avatar-icon,md-list-item.md-2-line>._md-no-style>.md-avatar,md-list-item.md-2-line>.md-avatar{margin-top:12px}md-list-item.md-2-line>._md-no-style>md-icon:first-child,md-list-item.md-2-line>md-icon:first-child{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}md-list-item.md-2-line .md-list-item-text,md-list-item.md-2-line>._md-no-style .md-list-item-text{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}md-list-item.md-3-line,md-list-item.md-3-line>._md-no-style{height:auto;min-height:88px}md-list-item.md-3-line div.md-button:first-child::before,md-list-item.md-3-line>._md-no-style div.md-button:first-child::before{content:'';min-height:88px;visibility:hidden}md-list-item.md-3-line>._md-no-style>.md-avatar,md-list-item.md-3-line>._md-no-style>md-icon:first-child,md-list-item.md-3-line>.md-avatar,md-list-item.md-3-line>md-icon:first-child{margin-top:16px}._md-open-menu-container{position:fixed;left:0;top:0;z-index:100;opacity:0;border-radius:2px}._md-open-menu-container md-menu-divider{margin-top:4px;margin-bottom:4px;height:1px;min-height:1px;max-height:1px;width:100%}._md-open-menu-container md-menu-content>*{opacity:0}._md-open-menu-container:not(._md-clickable){pointer-events:none}._md-open-menu-container._md-active{opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:200ms}._md-open-menu-container._md-active>md-menu-content>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:200ms;transition-delay:100ms}._md-open-menu-container._md-leave{opacity:0;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:250ms}md-menu-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px 0;max-height:304px;overflow-y:auto}md-menu-content.md-dense{max-height:208px}md-menu-content.md-dense md-menu-item{height:32px;min-height:0}md-menu-item{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-height:48px;height:48px;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}md-menu-item>*{width:100%;margin:auto 0;padding-left:16px;padding-right:16px}md-menu-item>.md-button{border-radius:0;margin:auto 0;font-size:15px;text-transform:none;font-weight:400;height:100%;padding-left:16px;padding-right:16px;text-align:left;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;width:100%}[dir=rtl] md-menu-item>.md-button{text-align:right}md-menu-item>.md-button md-icon{margin:auto 16px auto 0}[dir=rtl] md-menu-item>.md-button md-icon{margin:auto 0 auto 16px}md-menu-item>.md-button p{display:inline-block;margin:auto}md-menu-item>.md-button span{margin-top:auto;margin-bottom:auto}md-menu-item>.md-button .md-ripple-container{border-radius:inherit}.md-menu{padding:8px 0}md-toolbar .md-menu{height:auto;margin:auto;padding:0}@media (max-width:959px){md-menu-content{min-width:112px}md-menu-content[width=\"3\"]{min-width:168px}md-menu-content[width=\"4\"]{min-width:224px}md-menu-content[width=\"5\"]{min-width:280px}md-menu-content[width=\"6\"]{min-width:336px}md-menu-content[width=\"7\"]{min-width:392px}}@media (min-width:960px){md-menu-content{min-width:96px}md-menu-content[width=\"3\"]{min-width:192px}md-menu-content[width=\"4\"]{min-width:256px}md-menu-content[width=\"5\"]{min-width:320px}md-menu-content[width=\"6\"]{min-width:384px}md-menu-content[width=\"7\"]{min-width:448px}}md-toolbar.md-menu-toolbar h2.md-toolbar-tools{line-height:1rem;height:auto;padding:28px 28px 12px}md-menu-bar{padding:0 20px;display:block;position:relative;z-index:2}md-menu-bar .md-menu{display:inline-block;padding:0;position:relative}md-menu-bar button{font-size:14px;padding:0 10px;margin:0;border:0;background-color:transparent;height:40px}md-menu-bar md-backdrop._md-menu-backdrop{z-index:-2}md-menu-content._md-menu-bar-menu.md-dense{max-height:none;padding:16px 0}md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent{position:relative}md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent>md-icon{position:absolute;padding:0;width:24px;top:6px;left:24px}[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent>md-icon{left:0;left:auto;left:initial;right:24px}md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu>.md-button,md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent>.md-button{padding:0 32px 0 64px}[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu>.md-button,[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense md-menu-item.md-indent>.md-button{padding:0 64px 0 32px}md-menu-content._md-menu-bar-menu.md-dense .md-button{min-height:0;height:32px;display:-webkit-flex;display:-ms-flexbox;display:flex}md-menu-content._md-menu-bar-menu.md-dense .md-button span{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}md-menu-content._md-menu-bar-menu.md-dense .md-button span.md-alt-text{-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin:0 8px}md-menu-content._md-menu-bar-menu.md-dense md-menu-divider{margin:8px 0}md-menu-content._md-menu-bar-menu.md-dense .md-menu>.md-button,md-menu-content._md-menu-bar-menu.md-dense md-menu-item>.md-button{text-align:left;text-align:start}[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense .md-menu>.md-button,[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense md-menu-item>.md-button{text-align:right}md-menu-content._md-menu-bar-menu.md-dense .md-menu{padding:0}md-menu-content._md-menu-bar-menu.md-dense .md-menu>.md-button{position:relative;margin:0;width:100%;text-transform:none;font-weight:400;border-radius:0;padding-left:16px}[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense .md-menu>.md-button{padding-left:auto;padding-left:initial;padding-right:16px}md-menu-content._md-menu-bar-menu.md-dense .md-menu>.md-button:after{display:block;content:'\\25BC';position:absolute;top:0;speak:none;-webkit-transform:rotate(270deg) scaleY(.45) scaleX(.9);transform:rotate(270deg) scaleY(.45) scaleX(.9);right:28px}[dir=rtl] md-menu-content._md-menu-bar-menu.md-dense .md-menu>.md-button:after{-webkit-transform:rotate(90deg) scaleY(.45) scaleX(.9);transform:rotate(90deg) scaleY(.45) scaleX(.9);right:0;right:auto;right:initial;left:28px}.md-nav-bar{border-style:solid;border-width:0 0 1px;height:48px;position:relative}._md-nav-bar-list{outline:0;list-style:none;margin:0;padding:0}.md-nav-item:first-of-type{margin-left:8px}.md-button._md-nav-button{line-height:24px;margin:0 4px;padding:12px 16px;transition:background-color .35s cubic-bezier(.35,0,.25,1)}.md-button._md-nav-button:focus{outline:0}.md-button._md-nav-button:hover{background-color:inherit}md-nav-ink-bar{bottom:0;height:2px;left:auto;position:absolute;right:auto;background-color:#000}md-nav-ink-bar._md-left{transition:left .125s cubic-bezier(.35,0,.25,1),right .25s cubic-bezier(.35,0,.25,1)}md-nav-ink-bar._md-right{transition:left .25s cubic-bezier(.35,0,.25,1),right .125s cubic-bezier(.35,0,.25,1)}md-nav-extra-content{min-height:48px;padding-right:12px}.md-panel-outer-wrapper{height:100%;left:0;position:absolute;top:0;width:100%}._md-panel-hidden{display:none}._md-panel-fullscreen{border-radius:0;left:0;min-height:100%;min-width:100%;position:fixed;top:0}._md-panel-shown .md-panel{opacity:1;transition:none}.md-panel{opacity:0;position:fixed}.md-panel._md-panel-shown{opacity:1;transition:none}.md-panel._md-panel-animate-enter{opacity:1;transition:all .3s cubic-bezier(0,0,.2,1)}.md-panel._md-panel-animate-leave{opacity:1;transition:all .3s cubic-bezier(.4,0,1,1)}.md-panel._md-panel-animate-fade-out,.md-panel._md-panel-animate-scale-out{opacity:0}.md-panel._md-panel-backdrop{height:100%;position:absolute;width:100%}.md-panel._md-opaque-enter{opacity:.48;transition:opacity .3s cubic-bezier(0,0,.2,1)}.md-panel._md-opaque-leave{transition:opacity .3s cubic-bezier(.4,0,1,1)}@-webkit-keyframes indeterminate-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes indeterminate-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}md-progress-circular{position:relative}md-progress-circular._md-progress-circular-disabled{visibility:hidden}md-progress-circular._md-mode-indeterminate svg{-webkit-animation:indeterminate-rotate 2.9s linear infinite;animation:indeterminate-rotate 2.9s linear infinite}md-progress-circular svg{position:absolute;overflow:visible;top:0;left:0}md-progress-linear{display:block;position:relative;width:100%;height:5px;padding-top:0!important;margin-bottom:0!important}md-progress-linear._md-progress-linear-disabled{visibility:hidden}md-progress-linear ._md-container{display:block;position:relative;overflow:hidden;width:100%;height:5px;-webkit-transform:translate(0,0) scale(1,1);transform:translate(0,0) scale(1,1)}md-progress-linear ._md-container ._md-bar{position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}md-progress-linear ._md-container ._md-dashed:before{content:\"\";display:none;position:absolute;margin-top:0;height:5px;width:100%;background-color:transparent;background-size:10px 10px!important;background-position:0 -23px}md-progress-linear ._md-container ._md-bar1,md-progress-linear ._md-container ._md-bar2{transition:-webkit-transform .2s linear;transition:transform .2s linear}md-progress-linear ._md-container._md-mode-query ._md-bar1{display:none}md-progress-linear ._md-container._md-mode-query ._md-bar2{transition:all .2s linear;-webkit-animation:query .8s infinite cubic-bezier(.39,.575,.565,1);animation:query .8s infinite cubic-bezier(.39,.575,.565,1)}md-progress-linear ._md-container._md-mode-determinate ._md-bar1{display:none}md-progress-linear ._md-container._md-mode-indeterminate ._md-bar1{-webkit-animation:md-progress-linear-indeterminate-scale-1 4s infinite,md-progress-linear-indeterminate-1 4s infinite;animation:md-progress-linear-indeterminate-scale-1 4s infinite,md-progress-linear-indeterminate-1 4s infinite}md-progress-linear ._md-container._md-mode-indeterminate ._md-bar2{-webkit-animation:md-progress-linear-indeterminate-scale-2 4s infinite,md-progress-linear-indeterminate-2 4s infinite;animation:md-progress-linear-indeterminate-scale-2 4s infinite,md-progress-linear-indeterminate-2 4s infinite}md-progress-linear ._md-container.ng-hide ._md-progress-linear-disabled md-progress-linear ._md-container{-webkit-animation:none;animation:none}md-progress-linear ._md-container.ng-hide ._md-progress-linear-disabled md-progress-linear ._md-container ._md-bar1,md-progress-linear ._md-container.ng-hide ._md-progress-linear-disabled md-progress-linear ._md-container ._md-bar2{-webkit-animation-name:none;animation-name:none}md-progress-linear ._md-container._md-mode-buffer{background-color:transparent!important;transition:all .2s linear}md-progress-linear ._md-container._md-mode-buffer ._md-dashed:before{display:block;-webkit-animation:buffer 3s infinite linear;animation:buffer 3s infinite linear}@-webkit-keyframes query{0%{opacity:1;-webkit-transform:translateX(35%) scale(.3,1);transform:translateX(35%) scale(.3,1)}100%{opacity:0;-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;-webkit-transform:translateX(35%) scale(.3,1);transform:translateX(35%) scale(.3,1)}100%{opacity:0;-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}}@-webkit-keyframes buffer{0%{opacity:1;background-position:0 -23px}50%{opacity:0}100%{opacity:1;background-position:-200px -23px}}@keyframes buffer{0%{opacity:1;background-position:0 -23px}50%{opacity:0}100%{opacity:1;background-position:-200px -23px}}@-webkit-keyframes md-progress-linear-indeterminate-scale-1{0%{-webkit-transform:scaleX(.1);transform:scaleX(.1);-webkit-animation-timing-function:linear;animation-timing-function:linear}36.6%{-webkit-transform:scaleX(.1);transform:scaleX(.1);-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1)}69.15%{-webkit-transform:scaleX(.83);transform:scaleX(.83);-webkit-animation-timing-function:cubic-bezier(.22573,0,.23365,1.37098);animation-timing-function:cubic-bezier(.22573,0,.23365,1.37098)}100%{-webkit-transform:scaleX(.1);transform:scaleX(.1)}}@keyframes md-progress-linear-indeterminate-scale-1{0%{-webkit-transform:scaleX(.1);transform:scaleX(.1);-webkit-animation-timing-function:linear;animation-timing-function:linear}36.6%{-webkit-transform:scaleX(.1);transform:scaleX(.1);-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1)}69.15%{-webkit-transform:scaleX(.83);transform:scaleX(.83);-webkit-animation-timing-function:cubic-bezier(.22573,0,.23365,1.37098);animation-timing-function:cubic-bezier(.22573,0,.23365,1.37098)}100%{-webkit-transform:scaleX(.1);transform:scaleX(.1)}}@-webkit-keyframes md-progress-linear-indeterminate-1{0%{left:-105.16667%;-webkit-animation-timing-function:linear;animation-timing-function:linear}20%{left:-105.16667%;-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582)}69.15%{left:21.5%;-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635)}100%{left:95.44444%}}@keyframes md-progress-linear-indeterminate-1{0%{left:-105.16667%;-webkit-animation-timing-function:linear;animation-timing-function:linear}20%{left:-105.16667%;-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582)}69.15%{left:21.5%;-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635)}100%{left:95.44444%}}@-webkit-keyframes md-progress-linear-indeterminate-scale-2{0%{-webkit-transform:scaleX(.1);transform:scaleX(.1);-webkit-animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397)}19.15%{-webkit-transform:scaleX(.57);transform:scaleX(.57);-webkit-animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432)}44.15%{-webkit-transform:scaleX(.91);transform:scaleX(.91);-webkit-animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179)}100%{-webkit-transform:scaleX(.1);transform:scaleX(.1)}}@keyframes md-progress-linear-indeterminate-scale-2{0%{-webkit-transform:scaleX(.1);transform:scaleX(.1);-webkit-animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397)}19.15%{-webkit-transform:scaleX(.57);transform:scaleX(.57);-webkit-animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432)}44.15%{-webkit-transform:scaleX(.91);transform:scaleX(.91);-webkit-animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179)}100%{-webkit-transform:scaleX(.1);transform:scaleX(.1)}}@-webkit-keyframes md-progress-linear-indeterminate-2{0%{left:-54.88889%;-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40968);animation-timing-function:cubic-bezier(.15,0,.51506,.40968)}25%{left:-17.25%;-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73372);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73372)}48.35%{left:29.5%;-webkit-animation-timing-function:cubic-bezier(.4,.62703,.6,.90203);animation-timing-function:cubic-bezier(.4,.62703,.6,.90203)}100%{left:117.38889%}}@keyframes md-progress-linear-indeterminate-2{0%{left:-54.88889%;-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40968);animation-timing-function:cubic-bezier(.15,0,.51506,.40968)}25%{left:-17.25%;-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73372);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73372)}48.35%{left:29.5%;-webkit-animation-timing-function:cubic-bezier(.4,.62703,.6,.90203);animation-timing-function:cubic-bezier(.4,.62703,.6,.90203)}100%{left:117.38889%}}md-radio-button{box-sizing:border-box;display:block;margin-bottom:16px;white-space:nowrap;cursor:pointer;position:relative}md-radio-button[disabled],md-radio-button[disabled] ._md-container{cursor:default}md-radio-button ._md-container{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);box-sizing:border-box;display:inline-block;width:20px;height:20px;cursor:pointer;left:0;right:auto}[dir=rtl] md-radio-button ._md-container{left:auto;right:0}md-radio-button ._md-container .md-ripple-container{position:absolute;display:block;width:auto;height:auto;left:-15px;top:-15px;right:-15px;bottom:-15px}md-radio-button ._md-container:before{box-sizing:border-box;background-color:transparent;border-radius:50%;content:'';position:absolute;display:block;height:auto;left:0;top:0;right:0;bottom:0;transition:all .5s;width:auto}md-radio-button.md-align-top-left>div._md-container{top:12px}md-radio-button ._md-off{box-sizing:border-box;position:absolute;top:0;left:0;width:20px;height:20px;border-style:solid;border-width:2px;border-radius:50%;transition:border-color ease .28s}md-radio-button ._md-on{box-sizing:border-box;position:absolute;top:0;left:0;width:20px;height:20px;border-radius:50%;transition:-webkit-transform ease .28s;transition:transform ease .28s;-webkit-transform:scale(0);transform:scale(0)}md-radio-button.md-checked ._md-on{-webkit-transform:scale(.5);transform:scale(.5)}md-radio-button ._md-label{box-sizing:border-box;position:relative;display:inline-block;margin-left:30px;margin-right:0;vertical-align:middle;white-space:normal;pointer-events:none;width:auto}[dir=rtl] md-radio-button ._md-label{margin-left:0;margin-right:30px}md-radio-group.layout-column md-radio-button,md-radio-group.layout-gt-lg-column md-radio-button,md-radio-group.layout-gt-md-column md-radio-button,md-radio-group.layout-gt-sm-column md-radio-button,md-radio-group.layout-gt-xs-column md-radio-button,md-radio-group.layout-lg-column md-radio-button,md-radio-group.layout-md-column md-radio-button,md-radio-group.layout-sm-column md-radio-button,md-radio-group.layout-xl-column md-radio-button,md-radio-group.layout-xs-column md-radio-button{margin-bottom:16px}md-radio-group.layout-gt-lg-row md-radio-button,md-radio-group.layout-gt-md-row md-radio-button,md-radio-group.layout-gt-sm-row md-radio-button,md-radio-group.layout-gt-xs-row md-radio-button,md-radio-group.layout-lg-row md-radio-button,md-radio-group.layout-md-row md-radio-button,md-radio-group.layout-row md-radio-button,md-radio-group.layout-sm-row md-radio-button,md-radio-group.layout-xl-row md-radio-button,md-radio-group.layout-xs-row md-radio-button{margin:0 16px 0 0}[dir=rtl] md-radio-group.layout-gt-lg-row md-radio-button,[dir=rtl] md-radio-group.layout-gt-md-row md-radio-button,[dir=rtl] md-radio-group.layout-gt-sm-row md-radio-button,[dir=rtl] md-radio-group.layout-gt-xs-row md-radio-button,[dir=rtl] md-radio-group.layout-lg-row md-radio-button,[dir=rtl] md-radio-group.layout-md-row md-radio-button,[dir=rtl] md-radio-group.layout-row md-radio-button,[dir=rtl] md-radio-group.layout-sm-row md-radio-button,[dir=rtl] md-radio-group.layout-xl-row md-radio-button,[dir=rtl] md-radio-group.layout-xs-row md-radio-button{margin-left:16px;margin-right:0}md-radio-group.layout-gt-lg-row md-radio-button:last-of-type,md-radio-group.layout-gt-md-row md-radio-button:last-of-type,md-radio-group.layout-gt-sm-row md-radio-button:last-of-type,md-radio-group.layout-gt-xs-row md-radio-button:last-of-type,md-radio-group.layout-lg-row md-radio-button:last-of-type,md-radio-group.layout-md-row md-radio-button:last-of-type,md-radio-group.layout-row md-radio-button:last-of-type,md-radio-group.layout-sm-row md-radio-button:last-of-type,md-radio-group.layout-xl-row md-radio-button:last-of-type,md-radio-group.layout-xs-row md-radio-button:last-of-type{margin-left:0;margin-right:0}md-radio-group:focus{outline:0}md-radio-group.md-focused .md-checked ._md-container:before{left:-8px;top:-8px;right:-8px;bottom:-8px}.md-inline-form md-radio-group{margin:18px 0 19px}.md-inline-form md-radio-group md-radio-button{display:inline-block;height:30px;padding:2px;box-sizing:border-box;margin-top:0;margin-bottom:0}@media screen and (-ms-high-contrast:active){md-radio-button.md-default-theme ._md-on{background-color:#fff}}._md-select-menu-container{position:fixed;left:0;top:0;z-index:90;opacity:0;display:none}._md-select-menu-container:not(._md-clickable){pointer-events:none}._md-select-menu-container md-progress-circular{display:table;margin:24px auto!important}._md-select-menu-container._md-active{display:block;opacity:1}._md-select-menu-container._md-active md-select-menu{transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:150ms}._md-select-menu-container._md-active md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:150ms;transition-delay:100ms}._md-select-menu-container._md-leave{opacity:0;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:250ms}md-input-container>md-select{margin:0;-webkit-order:2;-ms-flex-order:2;order:2}md-select{display:-webkit-flex;display:-ms-flexbox;display:flex;margin:20px 0 26px}md-select[disabled] ._md-select-value{background-position:0 bottom;background-size:4px 1px;background-repeat:repeat-x;margin-bottom:-1px}md-select:focus{outline:0}md-select[disabled]:hover{cursor:default}md-select:not([disabled]):hover{cursor:pointer}md-select:not([disabled]).ng-invalid.ng-dirty ._md-select-value{border-bottom:2px solid;padding-bottom:0}md-select:not([disabled]):focus ._md-select-value{border-bottom-width:2px;border-bottom-style:solid;padding-bottom:0}._md-select-value{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:2px 2px 1px;border-bottom-width:1px;border-bottom-style:solid;background-color:transparent;position:relative;box-sizing:content-box;min-width:64px;min-height:26px;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._md-select-value>span:not(._md-select-icon){max-width:100%;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}._md-select-value>span:not(._md-select-icon) ._md-text{display:inline}._md-select-value ._md-select-icon{display:block;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;text-align:end;width:24px;margin:0 4px;-webkit-transform:translate3d(0,1px,0);transform:translate3d(0,1px,0)}._md-select-value ._md-select-icon:after{display:block;content:'\\25BC';position:relative;top:2px;speak:none;-webkit-transform:scaleY(.6) scaleX(1);transform:scaleY(.6) scaleX(1)}._md-select-value._md-select-placeholder{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-order:1;-ms-flex-order:1;order:1;pointer-events:none;-webkit-font-smoothing:antialiased;padding-left:2px;z-index:1}md-select-menu{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);max-height:256px;min-height:48px;overflow-y:hidden;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(1);transform:scale(1)}md-select-menu.md-reverse{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}md-select-menu:not(._md-overflow) md-content{padding-top:8px;padding-bottom:8px}[dir=rtl] md-select-menu{-webkit-transform-origin:right top;transform-origin:right top}md-select-menu md-content{min-width:136px;min-height:48px;max-height:256px;overflow-y:auto}md-select-menu>*{opacity:0}md-option{cursor:pointer;position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:auto;transition:background .15s linear;padding:0 16px;height:48px}md-option[disabled]{cursor:default}md-option:focus{outline:0}md-option ._md-text{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px}md-optgroup{display:block}md-optgroup label{display:block;font-size:14px;text-transform:uppercase;padding:16px;font-weight:500}md-optgroup md-option{padding-left:32px;padding-right:32px}@media screen and (-ms-high-contrast:active){._md-select-backdrop{background-color:transparent}md-select-menu{border:1px solid #fff}}md-select-menu[multiple] md-option._md-checkbox-enabled{padding-left:40px;padding-right:16px}[dir=rtl] md-select-menu[multiple] md-option._md-checkbox-enabled{padding-left:16px;padding-right:40px}md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);box-sizing:border-box;display:inline-block;width:20px;height:20px;left:0;right:auto}[dir=rtl] md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container{left:auto;right:0}md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container:before{box-sizing:border-box;background-color:transparent;border-radius:50%;content:'';position:absolute;display:block;height:auto;left:0;top:0;right:0;bottom:0;transition:all .5s;width:auto}md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container:after{box-sizing:border-box;content:'';position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px}md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container .md-ripple-container{position:absolute;display:block;width:auto;height:auto;left:-15px;top:-15px;right:-15px;bottom:-15px}md-select-menu[multiple] md-option._md-checkbox-enabled ._md-icon{box-sizing:border-box;transition:240ms;position:absolute;top:0;left:0;width:20px;height:20px;border-width:2px;border-style:solid;border-radius:2px}md-select-menu[multiple] md-option._md-checkbox-enabled[selected] ._md-icon{border:none}md-select-menu[multiple] md-option._md-checkbox-enabled[selected] ._md-icon:after{box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;left:6.67px;top:2.22px;display:table;width:6.67px;height:13.33px;border-width:2px;border-style:solid;border-top:0;border-left:0;content:''}md-select-menu[multiple] md-option._md-checkbox-enabled[disabled]{cursor:default}md-select-menu[multiple] md-option._md-checkbox-enabled.md-indeterminate ._md-icon:after{box-sizing:border-box;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:table;width:12px;height:2px;border-width:2px;border-style:solid;border-top:0;border-left:0;content:''}md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container{margin-left:10.67px;margin-right:auto}[dir=rtl] md-select-menu[multiple] md-option._md-checkbox-enabled ._md-container{margin-left:auto;margin-right:10.67px}md-sidenav{box-sizing:border-box;position:absolute;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:60;width:320px;max-width:320px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch}md-sidenav ul{list-style:none}md-sidenav._md-closed{display:none}md-sidenav._md-closed-add,md-sidenav._md-closed-remove{display:-webkit-flex;display:-ms-flexbox;display:flex;transition:.2s ease-in all}md-sidenav._md-closed-add._md-closed-add-active,md-sidenav._md-closed-remove._md-closed-remove-active{transition:all .4s cubic-bezier(.25,.8,.25,1)}md-sidenav._md-locked-open,md-sidenav._md-locked-open-add,md-sidenav._md-locked-open-remove,md-sidenav._md-locked-open-remove._md-closed,md-sidenav._md-locked-open._md-closed,md-sidenav._md-locked-open._md-closed.md-sidenav-left,md-sidenav._md-locked-open._md-closed.md-sidenav-right{position:static;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav._md-locked-open-remove-active{transition:width .3s cubic-bezier(.55,0,.55,.2),min-width .3s cubic-bezier(.55,0,.55,.2);width:0!important;min-width:0!important}md-sidenav._md-closed._md-locked-open-add{width:0!important;min-width:0!important;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav._md-closed._md-locked-open-add-active{transition:width .3s cubic-bezier(.55,0,.55,.2),min-width .3s cubic-bezier(.55,0,.55,.2);width:320px;min-width:320px;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}._md-sidenav-backdrop._md-locked-open{display:none}.md-sidenav-left,md-sidenav{left:0;top:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.md-sidenav-left._md-closed,md-sidenav._md-closed{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.md-sidenav-right{left:100%;top:0;-webkit-transform:translate(-100%,0);transform:translate(-100%,0)}.md-sidenav-right._md-closed{-webkit-transform:translate(0,0);transform:translate(0,0)}@media (min-width:600px){md-sidenav{max-width:400px}}@media (max-width:456px){md-sidenav{width:calc(100% - 56px);min-width:calc(100% - 56px);max-width:calc(100% - 56px)}}@media screen and (-ms-high-contrast:active){.md-sidenav-left,md-sidenav{border-right:1px solid #fff}.md-sidenav-right{border-left:1px solid #fff}}@-webkit-keyframes sliderFocusThumb{0%{-webkit-transform:scale(.7);transform:scale(.7)}30%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(.7);transform:scale(.7)}}@keyframes sliderFocusThumb{0%{-webkit-transform:scale(.7);transform:scale(.7)}30%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(.7);transform:scale(.7)}}@-webkit-keyframes sliderDiscreteFocusThumb{0%{-webkit-transform:scale(.7);transform:scale(.7)}50%{-webkit-transform:scale(.8);transform:scale(.8)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes sliderDiscreteFocusThumb{0%{-webkit-transform:scale(.7);transform:scale(.7)}50%{-webkit-transform:scale(.8);transform:scale(.8)}100%{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes sliderDiscreteFocusRing{0%{-webkit-transform:scale(.7);transform:scale(.7);opacity:0}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes sliderDiscreteFocusRing{0%{-webkit-transform:scale(.7);transform:scale(.7);opacity:0}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0)}}md-slider{height:48px;min-width:128px;position:relative;margin-left:4px;margin-right:4px;padding:0;display:block;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-slider *,md-slider :after{box-sizing:border-box}md-slider ._md-slider-wrapper{outline:0;width:100%;height:100%}md-slider ._md-slider-content{position:relative}md-slider ._md-track-container{width:100%;position:absolute;top:23px;height:2px}md-slider ._md-track{position:absolute;left:0;right:0;height:100%}md-slider ._md-track-fill{transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:width,height}md-slider ._md-track-ticks{position:absolute;left:0;right:0;height:100%}md-slider ._md-track-ticks canvas{width:100%;height:100%}md-slider ._md-thumb-container{position:absolute;left:0;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:left,bottom}md-slider ._md-thumb{z-index:1;position:absolute;left:-10px;top:14px;width:20px;height:20px;border-radius:20px;-webkit-transform:scale(.7);transform:scale(.7);transition:all .4s cubic-bezier(.25,.8,.25,1)}md-slider ._md-thumb:after{content:'';position:absolute;width:20px;height:20px;border-radius:20px;border-width:3px;border-style:solid;transition:inherit}md-slider ._md-sign{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;left:-14px;top:-17px;width:28px;height:28px;border-radius:28px;-webkit-transform:scale(.4) translate3d(0,67.5px,0);transform:scale(.4) translate3d(0,67.5px,0);transition:all .3s cubic-bezier(.35,0,.25,1)}md-slider ._md-sign:after{position:absolute;content:'';left:0;border-radius:16px;top:19px;border-left:14px solid transparent;border-right:14px solid transparent;border-top-width:16px;border-top-style:solid;opacity:0;-webkit-transform:translate3d(0,-8px,0);transform:translate3d(0,-8px,0);transition:all .2s cubic-bezier(.35,0,.25,1)}md-slider ._md-sign ._md-thumb-text{z-index:1;font-size:12px;font-weight:700}md-slider ._md-focus-ring{position:absolute;left:-17px;top:7px;width:34px;height:34px;border-radius:34px;-webkit-transform:scale(.7);transform:scale(.7);opacity:0;transition:all .35s cubic-bezier(.35,0,.25,1)}md-slider ._md-disabled-thumb{position:absolute;left:-14px;top:10px;width:28px;height:28px;border-radius:28px;-webkit-transform:scale(.5);transform:scale(.5);border-width:4px;border-style:solid;display:none}md-slider._md-min ._md-sign{opacity:0}md-slider:focus{outline:0}md-slider._md-dragging ._md-thumb-container,md-slider._md-dragging ._md-track-fill{transition:none}md-slider:not([md-discrete]) ._md-sign,md-slider:not([md-discrete]) ._md-track-ticks{display:none}md-slider:not([md-discrete]):not([disabled]) ._md-slider-wrapper ._md-thumb:hover{-webkit-transform:scale(.8);transform:scale(.8)}md-slider:not([md-discrete]):not([disabled]) ._md-slider-wrapper.md-focused ._md-focus-ring{-webkit-transform:scale(1);transform:scale(1);opacity:1}md-slider:not([md-discrete]):not([disabled]) ._md-slider-wrapper.md-focused ._md-thumb{-webkit-animation:sliderFocusThumb .7s cubic-bezier(.35,0,.25,1);animation:sliderFocusThumb .7s cubic-bezier(.35,0,.25,1)}md-slider:not([md-discrete]):not([disabled])._md-active ._md-slider-wrapper ._md-thumb{-webkit-transform:scale(1);transform:scale(1)}md-slider[md-discrete]:not([disabled]) ._md-slider-wrapper.md-focused ._md-focus-ring{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:sliderDiscreteFocusRing .5s cubic-bezier(.35,0,.25,1);animation:sliderDiscreteFocusRing .5s cubic-bezier(.35,0,.25,1)}md-slider[md-discrete]:not([disabled]) ._md-slider-wrapper.md-focused ._md-thumb{-webkit-animation:sliderDiscreteFocusThumb .5s cubic-bezier(.35,0,.25,1);animation:sliderDiscreteFocusThumb .5s cubic-bezier(.35,0,.25,1)}md-slider[md-discrete]:not([disabled]) ._md-slider-wrapper.md-focused ._md-thumb,md-slider[md-discrete]:not([disabled])._md-active ._md-thumb{-webkit-transform:scale(0);transform:scale(0)}md-slider[md-discrete]:not([disabled]) ._md-slider-wrapper.md-focused ._md-sign,md-slider[md-discrete]:not([disabled]) ._md-slider-wrapper.md-focused ._md-sign:after,md-slider[md-discrete]:not([disabled])._md-active ._md-sign,md-slider[md-discrete]:not([disabled])._md-active ._md-sign:after{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}md-slider[md-discrete][disabled][readonly] ._md-thumb{-webkit-transform:scale(0);transform:scale(0)}md-slider[md-discrete][disabled][readonly] ._md-sign,md-slider[md-discrete][disabled][readonly] ._md-sign:after{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}md-slider[disabled] ._md-track-fill{display:none}md-slider[disabled] ._md-track-ticks,md-slider[disabled]:not([readonly]) ._md-sign{opacity:0}md-slider[disabled] ._md-thumb{-webkit-transform:scale(.5);transform:scale(.5)}md-slider[disabled] ._md-disabled-thumb{display:block}md-slider[md-vertical]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:128px;min-width:0}md-slider[md-vertical] ._md-slider-wrapper{-webkit-flex:1;-ms-flex:1;flex:1;padding-top:12px;padding-bottom:12px;width:48px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}md-slider[md-vertical] ._md-track-container{height:100%;width:2px;top:0;left:calc(50% - (2px / 2))}md-slider[md-vertical] ._md-thumb-container{top:auto;margin-bottom:23px;left:calc(50% - 1px);bottom:0}md-slider[md-vertical] ._md-thumb-container ._md-thumb:after{left:1px}md-slider[md-vertical] ._md-thumb-container ._md-focus-ring{left:-16px}md-slider[md-vertical] ._md-track-fill{bottom:0}md-slider[md-vertical][md-discrete] ._md-sign{left:-40px;top:9.5px;-webkit-transform:scale(.4) translate3d(67.5px,0,0);transform:scale(.4) translate3d(67.5px,0,0)}md-slider[md-vertical][md-discrete] ._md-sign:after{top:9.5px;left:19px;border-top:14px solid transparent;border-right:0;border-bottom:14px solid transparent;border-left-width:16px;border-left-style:solid;opacity:0;-webkit-transform:translate3d(0,-8px,0);transform:translate3d(0,-8px,0);transition:all .2s ease-in-out}md-slider[md-vertical][md-discrete] ._md-sign ._md-thumb-text{z-index:1;font-size:12px;font-weight:700}md-slider[md-vertical][md-discrete] .md-focused ._md-sign:after,md-slider[md-vertical][md-discrete]._md-active ._md-sign:after,md-slider[md-vertical][md-discrete][disabled][readonly] ._md-sign:after{top:0}md-slider[md-vertical][disabled][readonly] ._md-thumb{-webkit-transform:scale(0);transform:scale(0)}md-slider[md-vertical][disabled][readonly] ._md-sign,md-slider[md-vertical][disabled][readonly] ._md-sign:after{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}md-slider-container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-slider-container>:first-child:not(md-slider),md-slider-container>:last-child:not(md-slider){min-width:25px;max-width:42px;height:25px;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:color,max-width}md-slider-container>:first-child:not(md-slider){margin-right:16px}md-slider-container>:last-child:not(md-slider){margin-left:16px}md-slider-container[md-vertical]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-slider-container[md-vertical]>:first-child:not(md-slider),md-slider-container[md-vertical]>:last-child:not(md-slider){margin-right:0;margin-left:0;text-align:center}md-slider-container md-input-container input[type=number]{text-align:center;padding-left:15px;height:50px;margin-top:-25px}@media screen and (-ms-high-contrast:active){md-slider.md-default-theme ._md-track{border-bottom:1px solid #fff}}._md-sticky-clone{z-index:2;top:0;left:0;right:0;position:absolute!important;-webkit-transform:translate3d(-9999px,-9999px,0);transform:translate3d(-9999px,-9999px,0)}._md-sticky-clone[sticky-state=active]{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}._md-sticky-clone[sticky-state=active]:not(.md-sticky-no-effect) ._md-subheader-inner{-webkit-animation:subheaderStickyHoverIn .3s ease-out both;animation:subheaderStickyHoverIn .3s ease-out both}@-webkit-keyframes subheaderStickyHoverIn{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}}@keyframes subheaderStickyHoverIn{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}}@-webkit-keyframes subheaderStickyHoverOut{0%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}100%{box-shadow:0 0 0 0 transparent}}@keyframes subheaderStickyHoverOut{0%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}100%{box-shadow:0 0 0 0 transparent}}._md-subheader-wrapper:not(.md-sticky-no-effect){transition:.2s ease-out margin}._md-subheader-wrapper:not(.md-sticky-no-effect) .md-subheader{margin:0}._md-subheader-wrapper:not(.md-sticky-no-effect).md-sticky-clone{z-index:2}._md-subheader-wrapper:not(.md-sticky-no-effect)[sticky-state=active]{margin-top:-2px}._md-subheader-wrapper:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state=active] ._md-subheader-inner:after{-webkit-animation:subheaderStickyHoverOut .3s ease-out both;animation:subheaderStickyHoverOut .3s ease-out both}.md-subheader{display:block;font-size:14px;font-weight:500;line-height:1em;margin:0;position:relative}.md-subheader ._md-subheader-inner{display:block;padding:16px}.md-subheader ._md-subheader-content{display:block;z-index:1;position:relative}.md-inline-form md-switch{margin-top:18px;margin-bottom:19px}md-switch{margin:16px;margin-left:inherit;white-space:nowrap;cursor:pointer;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:30px;line-height:28px;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex}[dir=rtl] md-switch{margin-left:16px;margin-right:inherit}md-switch:last-of-type{margin-left:inherit;margin-right:0}[dir=rtl] md-switch:last-of-type{margin-left:0;margin-right:inherit}md-switch[disabled],md-switch[disabled] ._md-container{cursor:default}md-switch ._md-container{cursor:-webkit-grab;cursor:grab;width:36px;height:24px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:8px;float:left}[dir=rtl] md-switch ._md-container{margin-right:auto;margin-right:initial;margin-left:8px}md-switch:not([disabled]) ._md-dragging,md-switch:not([disabled])._md-dragging ._md-container{cursor:-webkit-grabbing;cursor:grabbing}md-switch.md-focused:not([disabled]) ._md-thumb:before{left:-8px;top:-8px;right:-8px;bottom:-8px}md-switch.md-focused:not([disabled]):not(.md-checked) ._md-thumb:before{background-color:rgba(0,0,0,.12)}md-switch ._md-label{border-color:transparent;border-width:0;float:left}md-switch ._md-bar{left:1px;width:34px;top:5px;height:14px;border-radius:8px;position:absolute}md-switch ._md-thumb-container{top:2px;left:0;width:16px;position:absolute;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:1}md-switch.md-checked ._md-thumb-container{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}md-switch ._md-thumb{position:absolute;margin:0;left:0;top:0;outline:0;height:20px;width:20px;border-radius:50%;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}md-switch ._md-thumb:before{background-color:transparent;border-radius:50%;content:'';position:absolute;display:block;height:auto;left:0;top:0;right:0;bottom:0;transition:all .5s;width:auto}md-switch ._md-thumb .md-ripple-container{position:absolute;display:block;width:auto;height:auto;left:-20px;top:-20px;right:-20px;bottom:-20px}md-switch:not(._md-dragging) ._md-bar,md-switch:not(._md-dragging) ._md-thumb,md-switch:not(._md-dragging) ._md-thumb-container{transition:all .08s linear;transition-property:-webkit-transform,background-color;transition-property:transform,background-color}md-switch:not(._md-dragging) ._md-bar,md-switch:not(._md-dragging) ._md-thumb{transition-delay:.05s}@media screen and (-ms-high-contrast:active){md-switch.md-default-theme ._md-bar{background-color:#666}md-switch.md-default-theme.md-checked ._md-bar{background-color:#9E9E9E}md-switch.md-default-theme ._md-thumb{background-color:#fff}}@-webkit-keyframes md-tab-content-hide{0%,50%{opacity:1}100%{opacity:0}}@keyframes md-tab-content-hide{0%,50%{opacity:1}100%{opacity:0}}md-tab-data{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;opacity:0}md-tabs{display:block;margin:0;border-radius:2px;overflow:hidden;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}md-tabs:not(.md-no-tab-content):not(.md-dynamic-height){min-height:248px}md-tabs[md-align-tabs=bottom]{padding-bottom:48px}md-tabs[md-align-tabs=bottom] md-tabs-wrapper{position:absolute;bottom:0;left:0;right:0;height:48px;z-index:2}md-tabs[md-align-tabs=bottom] md-tabs-content-wrapper{top:0;bottom:48px}md-tabs.md-dynamic-height md-tabs-content-wrapper{min-height:0;position:relative;top:auto;left:auto;right:auto;bottom:auto;overflow:visible}md-tabs.md-dynamic-height md-tab-content.md-active{position:relative}md-tabs[md-border-bottom] md-tabs-wrapper{border-width:0 0 1px;border-style:solid}md-tabs[md-border-bottom]:not(.md-dynamic-height) md-tabs-content-wrapper{top:49px}md-tabs-wrapper{display:block;position:relative;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-tabs-wrapper md-next-button,md-tabs-wrapper md-prev-button{height:100%;width:32px;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);line-height:1em;z-index:2;cursor:pointer;font-size:16px;background:center center no-repeat;transition:all .5s cubic-bezier(.35,0,.25,1)}md-tabs-wrapper md-next-button:focus,md-tabs-wrapper md-prev-button:focus{outline:0}md-tabs-wrapper md-next-button.md-disabled,md-tabs-wrapper md-prev-button.md-disabled{opacity:.25;cursor:default}md-tabs-wrapper md-next-button.ng-leave,md-tabs-wrapper md-prev-button.ng-leave{transition:none}md-tabs-wrapper md-next-button md-icon,md-tabs-wrapper md-prev-button md-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}md-tabs-wrapper md-prev-button{left:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==)}[dir=rtl] md-tabs-wrapper md-prev-button{left:0;left:auto;left:initial;right:0}md-tabs-wrapper md-next-button{right:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K)}[dir=rtl] md-tabs-wrapper md-next-button{right:0;right:auto;right:initial;left:0}md-tabs-wrapper md-next-button md-icon{-webkit-transform:translate3d(-50%,-50%,0) rotate(180deg);transform:translate3d(-50%,-50%,0) rotate(180deg)}md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper{width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper md-tab-item{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}md-tabs-canvas{position:relative;overflow:hidden;display:block;height:48px}md-tabs-canvas:after{content:'';display:table;clear:both}md-tabs-canvas .md-dummy-wrapper{position:absolute;top:0;left:0}[dir=rtl] md-tabs-canvas .md-dummy-wrapper{left:0;left:auto;left:initial;right:0}md-tabs-canvas.md-paginated{margin:0 32px}md-tabs-canvas.md-center-tabs{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center}md-tabs-canvas.md-center-tabs .md-tab{float:none;display:inline-block}md-pagination-wrapper{height:48px;display:block;transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1);position:absolute;width:999999px;left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-pagination-wrapper:after{content:'';display:table;clear:both}[dir=rtl] md-pagination-wrapper{left:0;left:auto;left:initial;right:0}md-pagination-wrapper.md-center-tabs{position:relative;width:initial;margin:0 auto}md-tabs-content-wrapper{display:block;position:absolute;top:48px;left:0;right:0;bottom:0;overflow:hidden}md-tab-content{display:block;position:absolute;top:0;left:0;right:0;bottom:0;transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1);overflow:auto;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-tab-content.md-no-scroll{bottom:auto;overflow:hidden}md-tab-content.md-no-transition,md-tab-content.ng-leave{transition:none}md-tab-content.md-left:not(.md-active){-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation:1s md-tab-content-hide;animation:1s md-tab-content-hide;opacity:0}[dir=rtl] md-tab-content.md-left:not(.md-active){-webkit-transform:translateX(100%);transform:translateX(100%)}md-tab-content.md-left:not(.md-active) *{transition:visibility 0s linear;transition-delay:.5s;visibility:hidden}md-tab-content.md-right:not(.md-active){-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation:1s md-tab-content-hide;animation:1s md-tab-content-hide;opacity:0}[dir=rtl] md-tab-content.md-right:not(.md-active){-webkit-transform:translateX(-100%);transform:translateX(-100%)}md-tab-content.md-right:not(.md-active) *{transition:visibility 0s linear;transition-delay:.5s;visibility:hidden}md-tab-content>div.ng-leave{-webkit-animation:1s md-tab-content-hide;animation:1s md-tab-content-hide}md-ink-bar{position:absolute;left:auto;right:auto;bottom:0;height:2px}md-ink-bar.md-left{transition:left .125s cubic-bezier(.35,0,.25,1),right .25s cubic-bezier(.35,0,.25,1)}md-ink-bar.md-right{transition:left .25s cubic-bezier(.35,0,.25,1),right .125s cubic-bezier(.35,0,.25,1)}md-tab{position:absolute;z-index:-1;left:-9999px}.md-tab{font-size:14px;text-align:center;line-height:24px;padding:12px 24px;transition:background-color .35s cubic-bezier(.35,0,.25,1);cursor:pointer;white-space:nowrap;position:relative;text-transform:uppercase;float:left;font-weight:500;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}[dir=rtl] .md-tab{float:right}.md-tab.md-focused{box-shadow:none;outline:0}.md-tab.md-active{cursor:default}.md-tab.md-disabled{pointer-events:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;opacity:.5;cursor:default}.md-tab.ng-leave{transition:none}md-toolbar+md-tabs{border-top-left-radius:0;border-top-right-radius:0}.md-toast-text{padding:0 6px}md-toast{position:absolute;z-index:105;box-sizing:border-box;cursor:default;overflow:hidden;padding:8px;opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1)}md-toast .md-toast-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:0;max-height:168px;max-width:100%;min-height:48px;padding:0 18px;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);border-radius:2px;font-size:14px;overflow:hidden;-webkit-transform:translate3d(0,0,0) rotateZ(0deg);transform:translate3d(0,0,0) rotateZ(0deg);transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] md-toast .md-toast-content{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}md-toast.md-capsule,md-toast.md-capsule .md-toast-content{border-radius:24px}md-toast.ng-leave-active .md-toast-content{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-toast._md-swipedown .md-toast-content,md-toast._md-swipeleft .md-toast-content,md-toast._md-swiperight .md-toast-content,md-toast._md-swipeup .md-toast-content{transition:all .4s cubic-bezier(.25,.8,.25,1)}md-toast.ng-enter{opacity:0}md-toast.ng-enter .md-toast-content{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}md-toast.ng-enter._md-top .md-toast-content{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}md-toast.ng-enter.ng-enter-active{opacity:1}md-toast.ng-enter.ng-enter-active .md-toast-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-toast.ng-leave.ng-leave-active .md-toast-content{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}md-toast.ng-leave.ng-leave-active._md-swipeup .md-toast-content{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}md-toast.ng-leave.ng-leave-active._md-swipedown .md-toast-content{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}md-toast.ng-leave.ng-leave-active._md-top .md-toast-content{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}md-toast .md-action{line-height:19px;margin-left:24px;margin-right:0;cursor:pointer;text-transform:uppercase;float:right}md-toast .md-button{min-width:0;margin-right:0;margin-left:12px}[dir=rtl] md-toast .md-button{margin-right:12px;margin-left:0}@media (max-width:959px){md-toast{left:0;right:0;width:100%;max-width:100%;min-width:0;border-radius:0;bottom:0;padding:0}md-toast.ng-leave.ng-leave-active._md-swipeup .md-toast-content{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}md-toast.ng-leave.ng-leave-active._md-swipedown .md-toast-content{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}}@media (min-width:960px){md-toast{min-width:304px}md-toast._md-bottom{bottom:0}md-toast._md-left{left:0}md-toast._md-right{right:0}md-toast._md-top{top:0}md-toast.ng-leave.ng-leave-active._md-swipeleft .md-toast-content{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}md-toast.ng-leave.ng-leave-active._md-swiperight .md-toast-content{-webkit-transform:translate3d(50%,0,0);transform:translate3d(50%,0,0)}}@media (min-width:1920px){md-toast .md-toast-content{max-width:568px}}@media screen and (-ms-high-contrast:active){md-toast{border:1px solid #fff}}._md-toast-animating{overflow:hidden!important}md-toolbar{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:2;font-size:20px;min-height:64px;width:100%;transition-duration:.5s;transition-timing-function:cubic-bezier(.35,0,.25,1);transition-property:background-color,fill,color}md-toolbar.md-whiteframe-z1-add,md-toolbar.md-whiteframe-z1-remove{transition:box-shadow .5s linear}md-toolbar md-toolbar-filler{width:72px}md-toolbar *,md-toolbar :after,md-toolbar :before{box-sizing:border-box}md-toolbar.ng-animate{transition:none}md-toolbar.md-tall{height:128px;min-height:128px;max-height:128px}md-toolbar.md-medium-tall{height:88px;min-height:88px;max-height:88px}md-toolbar.md-medium-tall .md-toolbar-tools{height:48px;min-height:48px;max-height:48px}md-toolbar>.md-indent{margin-left:64px}[dir=rtl] md-toolbar>.md-indent{margin-left:auto;margin-left:initial;margin-right:64px}md-toolbar~md-content>md-list{padding:0}md-toolbar~md-content>md-list md-list-item:last-child md-divider{display:none}.md-toolbar-tools{font-size:20px;letter-spacing:.005em;box-sizing:border-box;font-weight:400;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:64px;max-height:64px;padding:0 16px;margin:0}.md-toolbar-tools h1,.md-toolbar-tools h2,.md-toolbar-tools h3{font-size:inherit;font-weight:inherit;margin:inherit}.md-toolbar-tools a{color:inherit;text-decoration:none}.md-toolbar-tools .fill-height{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.md-toolbar-tools .md-button{margin-top:0;margin-bottom:0}.md-toolbar-tools .md-button,.md-toolbar-tools .md-button.md-icon-button md-icon{transition-duration:.5s;transition-timing-function:cubic-bezier(.35,0,.25,1);transition-property:background-color,fill,color}.md-toolbar-tools .md-button.md-icon-button md-icon.ng-animate,.md-toolbar-tools .md-button.ng-animate{transition:none}.md-toolbar-tools>.md-button:first-child{margin-left:-8px}[dir=rtl] .md-toolbar-tools>.md-button:first-child{margin-left:auto;margin-left:initial;margin-right:-8px}.md-toolbar-tools>.md-button:last-child{margin-right:-8px}[dir=rtl] .md-toolbar-tools>.md-button:last-child{margin-right:auto;margin-right:initial;margin-left:-8px}.md-toolbar-tools>md-menu:last-child{margin-right:-8px}[dir=rtl] .md-toolbar-tools>md-menu:last-child{margin-right:auto;margin-right:initial;margin-left:-8px}.md-toolbar-tools>md-menu:last-child>.md-button{margin-right:0}[dir=rtl] .md-toolbar-tools>md-menu:last-child>.md-button{margin-right:auto;margin-right:initial;margin-left:0}@media screen and (-ms-high-contrast:active){.md-toolbar-tools{border-bottom:1px solid #fff}}@media (min-width:0) and (max-width:959px) and (orientation:portrait){md-toolbar{min-height:56px}.md-toolbar-tools{height:56px;max-height:56px}}@media (min-width:0) and (max-width:959px) and (orientation:landscape){md-toolbar{min-height:48px}.md-toolbar-tools{height:48px;max-height:48px}}md-tooltip{position:absolute;z-index:100;overflow:hidden;pointer-events:none;border-radius:4px;font-weight:500;font-size:14px}@media (min-width:960px){md-tooltip{font-size:10px}}md-tooltip ._md-content{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:center top;transform-origin:center top;-webkit-transform:scale(0);transform:scale(0);opacity:0;height:32px;line-height:32px;padding-left:16px;padding-right:16px}@media (min-width:960px){md-tooltip ._md-content{height:22px;line-height:22px;padding-left:8px;padding-right:8px}}md-tooltip ._md-content._md-show-add{transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.2s;-webkit-transform:scale(0);transform:scale(0);opacity:0}md-tooltip ._md-content._md-show,md-tooltip ._md-content._md-show-add-active{-webkit-transform:scale(1);transform:scale(1);opacity:1;-webkit-transform-origin:center top;transform-origin:center top}md-tooltip ._md-content._md-show-remove{transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.2s}md-tooltip ._md-content._md-show-remove._md-show-remove-active{-webkit-transform:scale(0);transform:scale(0);opacity:0}md-tooltip._md-hide{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-tooltip._md-show{transition:all .4s cubic-bezier(.25,.8,.25,1);pointer-events:auto}.md-virtual-repeat-container{box-sizing:border-box;display:block;margin:0;overflow:hidden;padding:0;position:relative}.md-virtual-repeat-container .md-virtual-repeat-scroller{bottom:0;box-sizing:border-box;left:0;margin:0;overflow-x:hidden;padding:0;position:absolute;right:0;top:0}.md-virtual-repeat-container .md-virtual-repeat-sizer{box-sizing:border-box;height:1px;display:block;margin:0;padding:0;width:1px}.md-virtual-repeat-container .md-virtual-repeat-offsetter{box-sizing:border-box;left:0;margin:0;padding:0;position:absolute;right:0;top:0}.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller{overflow-x:auto;overflow-y:hidden}.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter{bottom:16px;right:auto;white-space:nowrap}[dir=rtl] .md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter{right:0;right:auto;right:initial;left:auto}.md-whiteframe-1dp,.md-whiteframe-z1{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp,.md-whiteframe-z2{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.md-whiteframe-7dp,.md-whiteframe-z3{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp,.md-whiteframe-z4{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp,.md-whiteframe-z5{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){md-whiteframe{border:1px solid #fff}}.ng-cloak,.x-ng-cloak,[data-ng-cloak],[ng-cloak],[ng\\:cloak],[x-ng-cloak]{display:none!important}@-moz-document url-prefix(){.layout-fill{margin:0;width:100%;min-height:100%;height:100%}}.flex-order{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-0,.offset-0{margin-left:0}[dir=rtl] .flex-offset-0,[dir=rtl] .offset-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-5,.offset-5{margin-left:5%}[dir=rtl] .flex-offset-5,[dir=rtl] .offset-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-10,.offset-10{margin-left:10%}[dir=rtl] .flex-offset-10,[dir=rtl] .offset-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-15,.offset-15{margin-left:15%}[dir=rtl] .flex-offset-15,[dir=rtl] .offset-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-20,.offset-20{margin-left:20%}[dir=rtl] .flex-offset-20,[dir=rtl] .offset-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-25,.offset-25{margin-left:25%}[dir=rtl] .flex-offset-25,[dir=rtl] .offset-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-30,.offset-30{margin-left:30%}[dir=rtl] .flex-offset-30,[dir=rtl] .offset-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-35,.offset-35{margin-left:35%}[dir=rtl] .flex-offset-35,[dir=rtl] .offset-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-40,.offset-40{margin-left:40%}[dir=rtl] .flex-offset-40,[dir=rtl] .offset-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-45,.offset-45{margin-left:45%}[dir=rtl] .flex-offset-45,[dir=rtl] .offset-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-50,.offset-50{margin-left:50%}[dir=rtl] .flex-offset-50,[dir=rtl] .offset-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-55,.offset-55{margin-left:55%}[dir=rtl] .flex-offset-55,[dir=rtl] .offset-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-60,.offset-60{margin-left:60%}[dir=rtl] .flex-offset-60,[dir=rtl] .offset-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-65,.offset-65{margin-left:65%}[dir=rtl] .flex-offset-65,[dir=rtl] .offset-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-70,.offset-70{margin-left:70%}[dir=rtl] .flex-offset-70,[dir=rtl] .offset-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-75,.offset-75{margin-left:75%}[dir=rtl] .flex-offset-75,[dir=rtl] .offset-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-80,.offset-80{margin-left:80%}[dir=rtl] .flex-offset-80,[dir=rtl] .offset-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-85,.offset-85{margin-left:85%}[dir=rtl] .flex-offset-85,[dir=rtl] .offset-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-90,.offset-90{margin-left:90%}[dir=rtl] .flex-offset-90,[dir=rtl] .offset-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-95,.offset-95{margin-left:95%}[dir=rtl] .flex-offset-95,[dir=rtl] .offset-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-33,.offset-33{margin-left:calc(100% / 3)}.flex-offset-66,.offset-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-66,[dir=rtl] .offset-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-start,.layout-align-start-center,.layout-align-start-end,.layout-align-start-start,.layout-align-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-center,.layout-align-center-center,.layout-align-center-end,.layout-align-center-start,.layout-align-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-end,.layout-align-end-center,.layout-align-end-end,.layout-align-end-start,.layout-align-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-space-around,.layout-align-space-around-center,.layout-align-space-around-end,.layout-align-space-around-start,.layout-align-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-space-between,.layout-align-space-between-center,.layout-align-space-between-end,.layout-align-space-between-start,.layout-align-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-center-start,.layout-align-end-start,.layout-align-space-around-start,.layout-align-space-between-start,.layout-align-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-center-center,.layout-align-end-center,.layout-align-space-around-center,.layout-align-space-between-center,.layout-align-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-center-center>*,.layout-align-end-center>*,.layout-align-space-around-center>*,.layout-align-space-between-center>*,.layout-align-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-center-end,.layout-align-end-end,.layout-align-space-around-end,.layout-align-space-between-end,.layout-align-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-center-stretch,.layout-align-end-stretch,.layout-align-space-around-stretch,.layout-align-space-between-stretch,.layout-align-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-row>.flex-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-5,.layout-row>.flex-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-10,.layout-row>.flex-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-15,.layout-row>.flex-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-20,.layout-row>.flex-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-25,.layout-row>.flex-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-30,.layout-row>.flex-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-35,.layout-row>.flex-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-40,.layout-row>.flex-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-45,.layout-row>.flex-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-50,.layout-row>.flex-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-55,.layout-row>.flex-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-60,.layout-row>.flex-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-65,.layout-row>.flex-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-70,.layout-row>.flex-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-75,.layout-row>.flex-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-80,.layout-row>.flex-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-85,.layout-row>.flex-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-90,.layout-row>.flex-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-95,.layout-row>.flex-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-100,.layout-column>.flex-100,.layout-row>.flex-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-row>.flex-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-row>.flex-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-row>.flex{min-width:0}.layout-column>.flex-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex{min-height:0}.layout,.layout-column,.layout-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.layout-padding-sm>*,.layout-padding>.flex-sm{padding:4px}.layout-padding,.layout-padding-gt-sm,.layout-padding-gt-sm>*,.layout-padding-md,.layout-padding-md>*,.layout-padding>*,.layout-padding>.flex,.layout-padding>.flex-gt-sm,.layout-padding>.flex-md{padding:8px}.layout-padding-gt-lg>*,.layout-padding-gt-md>*,.layout-padding-lg>*,.layout-padding>.flex-gt-lg,.layout-padding>.flex-gt-md,.layout-padding>.flex-lg{padding:16px}.layout-margin-sm>*,.layout-margin>.flex-sm{margin:4px}.layout-margin,.layout-margin-gt-sm,.layout-margin-gt-sm>*,.layout-margin-md,.layout-margin-md>*,.layout-margin>*,.layout-margin>.flex,.layout-margin>.flex-gt-sm,.layout-margin>.flex-md{margin:8px}.layout-margin-gt-lg>*,.layout-margin-gt-md>*,.layout-margin-lg>*,.layout-margin>.flex-gt-lg,.layout-margin>.flex-gt-md,.layout-margin>.flex-lg{margin:16px}.layout-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.layout-fill{margin:0;width:100%;min-height:100%;height:100%}@media (max-width:599px){.hide-xs:not(.show-xs):not(.show),.hide:not(.show-xs):not(.show){display:none}.flex-order-xs--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-xs--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-xs--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-xs--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-xs--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-xs--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-xs--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-xs--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-xs--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-xs--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-xs--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-xs--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-xs--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-xs--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-xs--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-xs--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-xs--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-xs--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-xs--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-xs--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-xs-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-xs-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-xs-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-xs-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-xs-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-xs-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-xs-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-xs-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-xs-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-xs-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-xs-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-xs-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-xs-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-xs-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-xs-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-xs-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-xs-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-xs-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-xs-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-xs-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-xs-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-xs-0,.offset-xs-0{margin-left:0}[dir=rtl] .flex-offset-xs-0,[dir=rtl] .offset-xs-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-xs-5,.offset-xs-5{margin-left:5%}[dir=rtl] .flex-offset-xs-5,[dir=rtl] .offset-xs-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-xs-10,.offset-xs-10{margin-left:10%}[dir=rtl] .flex-offset-xs-10,[dir=rtl] .offset-xs-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-xs-15,.offset-xs-15{margin-left:15%}[dir=rtl] .flex-offset-xs-15,[dir=rtl] .offset-xs-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-xs-20,.offset-xs-20{margin-left:20%}[dir=rtl] .flex-offset-xs-20,[dir=rtl] .offset-xs-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-xs-25,.offset-xs-25{margin-left:25%}[dir=rtl] .flex-offset-xs-25,[dir=rtl] .offset-xs-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-xs-30,.offset-xs-30{margin-left:30%}[dir=rtl] .flex-offset-xs-30,[dir=rtl] .offset-xs-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-xs-35,.offset-xs-35{margin-left:35%}[dir=rtl] .flex-offset-xs-35,[dir=rtl] .offset-xs-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-xs-40,.offset-xs-40{margin-left:40%}[dir=rtl] .flex-offset-xs-40,[dir=rtl] .offset-xs-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-xs-45,.offset-xs-45{margin-left:45%}[dir=rtl] .flex-offset-xs-45,[dir=rtl] .offset-xs-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-xs-50,.offset-xs-50{margin-left:50%}[dir=rtl] .flex-offset-xs-50,[dir=rtl] .offset-xs-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-xs-55,.offset-xs-55{margin-left:55%}[dir=rtl] .flex-offset-xs-55,[dir=rtl] .offset-xs-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-xs-60,.offset-xs-60{margin-left:60%}[dir=rtl] .flex-offset-xs-60,[dir=rtl] .offset-xs-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-xs-65,.offset-xs-65{margin-left:65%}[dir=rtl] .flex-offset-xs-65,[dir=rtl] .offset-xs-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-xs-70,.offset-xs-70{margin-left:70%}[dir=rtl] .flex-offset-xs-70,[dir=rtl] .offset-xs-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-xs-75,.offset-xs-75{margin-left:75%}[dir=rtl] .flex-offset-xs-75,[dir=rtl] .offset-xs-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-xs-80,.offset-xs-80{margin-left:80%}[dir=rtl] .flex-offset-xs-80,[dir=rtl] .offset-xs-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-xs-85,.offset-xs-85{margin-left:85%}[dir=rtl] .flex-offset-xs-85,[dir=rtl] .offset-xs-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-xs-90,.offset-xs-90{margin-left:90%}[dir=rtl] .flex-offset-xs-90,[dir=rtl] .offset-xs-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-xs-95,.offset-xs-95{margin-left:95%}[dir=rtl] .flex-offset-xs-95,[dir=rtl] .offset-xs-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-xs-33,.offset-xs-33{margin-left:calc(100% / 3)}.flex-offset-xs-66,.offset-xs-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-xs-66,[dir=rtl] .offset-xs-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-xs{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-xs-start,.layout-align-xs-start-center,.layout-align-xs-start-end,.layout-align-xs-start-start,.layout-align-xs-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-xs-center,.layout-align-xs-center-center,.layout-align-xs-center-end,.layout-align-xs-center-start,.layout-align-xs-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-xs-end,.layout-align-xs-end-center,.layout-align-xs-end-end,.layout-align-xs-end-start,.layout-align-xs-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-xs-space-around,.layout-align-xs-space-around-center,.layout-align-xs-space-around-end,.layout-align-xs-space-around-start,.layout-align-xs-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-xs-space-between,.layout-align-xs-space-between-center,.layout-align-xs-space-between-end,.layout-align-xs-space-between-start,.layout-align-xs-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-xs-center-start,.layout-align-xs-end-start,.layout-align-xs-space-around-start,.layout-align-xs-space-between-start,.layout-align-xs-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-xs-center-center,.layout-align-xs-end-center,.layout-align-xs-space-around-center,.layout-align-xs-space-between-center,.layout-align-xs-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-xs-center-center>*,.layout-align-xs-end-center>*,.layout-align-xs-space-around-center>*,.layout-align-xs-space-between-center>*,.layout-align-xs-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-xs-center-end,.layout-align-xs-end-end,.layout-align-xs-space-around-end,.layout-align-xs-space-between-end,.layout-align-xs-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-xs-center-stretch,.layout-align-xs-end-stretch,.layout-align-xs-space-around-stretch,.layout-align-xs-space-between-stretch,.layout-align-xs-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-xs{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-xs-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-xs-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-xs-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-xs-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-xs-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-xs-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-xs-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-row>.flex-xs-0,.layout-xs-row>.flex-xs-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-xs-0,.layout-xs-column>.flex-xs-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-xs-5,.layout-row>.flex-xs-5,.layout-xs-row>.flex-xs-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-5,.layout-xs-column>.flex-xs-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-xs-10,.layout-row>.flex-xs-10,.layout-xs-row>.flex-xs-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-10,.layout-xs-column>.flex-xs-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-xs-15,.layout-row>.flex-xs-15,.layout-xs-row>.flex-xs-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-15,.layout-xs-column>.flex-xs-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-xs-20,.layout-row>.flex-xs-20,.layout-xs-row>.flex-xs-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-20,.layout-xs-column>.flex-xs-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-xs-25,.layout-row>.flex-xs-25,.layout-xs-row>.flex-xs-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-25,.layout-xs-column>.flex-xs-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-xs-30,.layout-row>.flex-xs-30,.layout-xs-row>.flex-xs-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-30,.layout-xs-column>.flex-xs-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-xs-35,.layout-row>.flex-xs-35,.layout-xs-row>.flex-xs-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-35,.layout-xs-column>.flex-xs-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-xs-40,.layout-row>.flex-xs-40,.layout-xs-row>.flex-xs-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-40,.layout-xs-column>.flex-xs-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-xs-45,.layout-row>.flex-xs-45,.layout-xs-row>.flex-xs-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-45,.layout-xs-column>.flex-xs-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-xs-50,.layout-row>.flex-xs-50,.layout-xs-row>.flex-xs-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-50,.layout-xs-column>.flex-xs-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-xs-55,.layout-row>.flex-xs-55,.layout-xs-row>.flex-xs-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-55,.layout-xs-column>.flex-xs-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-xs-60,.layout-row>.flex-xs-60,.layout-xs-row>.flex-xs-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-60,.layout-xs-column>.flex-xs-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-xs-65,.layout-row>.flex-xs-65,.layout-xs-row>.flex-xs-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-65,.layout-xs-column>.flex-xs-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-xs-70,.layout-row>.flex-xs-70,.layout-xs-row>.flex-xs-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-70,.layout-xs-column>.flex-xs-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-xs-75,.layout-row>.flex-xs-75,.layout-xs-row>.flex-xs-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-75,.layout-xs-column>.flex-xs-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-xs-80,.layout-row>.flex-xs-80,.layout-xs-row>.flex-xs-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-80,.layout-xs-column>.flex-xs-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-xs-85,.layout-row>.flex-xs-85,.layout-xs-row>.flex-xs-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-85,.layout-xs-column>.flex-xs-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-xs-90,.layout-row>.flex-xs-90,.layout-xs-row>.flex-xs-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-90,.layout-xs-column>.flex-xs-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-xs-95,.layout-row>.flex-xs-95,.layout-xs-row>.flex-xs-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xs-95,.layout-xs-column>.flex-xs-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-xs-100,.layout-column>.flex-xs-100,.layout-row>.flex-xs-100,.layout-xs-column>.flex-xs-100,.layout-xs-row>.flex-xs-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-row>.flex-xs-33,.layout-xs-row>.flex-xs-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-row>.flex-xs-66,.layout-xs-row>.flex-xs-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-row>.flex,.layout-xs-row>.flex{min-width:0}.layout-column>.flex-xs-33,.layout-xs-column>.flex-xs-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-xs-66,.layout-xs-column>.flex-xs-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-xs-column>.flex{min-height:0}.layout-xs,.layout-xs-column,.layout-xs-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-xs-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-xs-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:600px){.flex-order-gt-xs--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-gt-xs--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-gt-xs--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-gt-xs--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-gt-xs--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-gt-xs--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-gt-xs--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-gt-xs--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-gt-xs--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-gt-xs--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-gt-xs--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-gt-xs--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-gt-xs--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-gt-xs--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-gt-xs--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-gt-xs--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-gt-xs--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-gt-xs--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-gt-xs--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-gt-xs--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-gt-xs-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-gt-xs-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-gt-xs-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-gt-xs-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-gt-xs-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-gt-xs-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-gt-xs-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-gt-xs-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-gt-xs-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-gt-xs-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-gt-xs-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-gt-xs-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-gt-xs-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-gt-xs-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-gt-xs-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-gt-xs-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-gt-xs-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-gt-xs-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-gt-xs-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-gt-xs-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-gt-xs-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-gt-xs-0,.offset-gt-xs-0{margin-left:0}[dir=rtl] .flex-offset-gt-xs-0,[dir=rtl] .offset-gt-xs-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-gt-xs-5,.offset-gt-xs-5{margin-left:5%}[dir=rtl] .flex-offset-gt-xs-5,[dir=rtl] .offset-gt-xs-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-gt-xs-10,.offset-gt-xs-10{margin-left:10%}[dir=rtl] .flex-offset-gt-xs-10,[dir=rtl] .offset-gt-xs-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-gt-xs-15,.offset-gt-xs-15{margin-left:15%}[dir=rtl] .flex-offset-gt-xs-15,[dir=rtl] .offset-gt-xs-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-gt-xs-20,.offset-gt-xs-20{margin-left:20%}[dir=rtl] .flex-offset-gt-xs-20,[dir=rtl] .offset-gt-xs-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-gt-xs-25,.offset-gt-xs-25{margin-left:25%}[dir=rtl] .flex-offset-gt-xs-25,[dir=rtl] .offset-gt-xs-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-gt-xs-30,.offset-gt-xs-30{margin-left:30%}[dir=rtl] .flex-offset-gt-xs-30,[dir=rtl] .offset-gt-xs-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-gt-xs-35,.offset-gt-xs-35{margin-left:35%}[dir=rtl] .flex-offset-gt-xs-35,[dir=rtl] .offset-gt-xs-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-gt-xs-40,.offset-gt-xs-40{margin-left:40%}[dir=rtl] .flex-offset-gt-xs-40,[dir=rtl] .offset-gt-xs-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-gt-xs-45,.offset-gt-xs-45{margin-left:45%}[dir=rtl] .flex-offset-gt-xs-45,[dir=rtl] .offset-gt-xs-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-gt-xs-50,.offset-gt-xs-50{margin-left:50%}[dir=rtl] .flex-offset-gt-xs-50,[dir=rtl] .offset-gt-xs-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-gt-xs-55,.offset-gt-xs-55{margin-left:55%}[dir=rtl] .flex-offset-gt-xs-55,[dir=rtl] .offset-gt-xs-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-gt-xs-60,.offset-gt-xs-60{margin-left:60%}[dir=rtl] .flex-offset-gt-xs-60,[dir=rtl] .offset-gt-xs-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-gt-xs-65,.offset-gt-xs-65{margin-left:65%}[dir=rtl] .flex-offset-gt-xs-65,[dir=rtl] .offset-gt-xs-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-gt-xs-70,.offset-gt-xs-70{margin-left:70%}[dir=rtl] .flex-offset-gt-xs-70,[dir=rtl] .offset-gt-xs-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-gt-xs-75,.offset-gt-xs-75{margin-left:75%}[dir=rtl] .flex-offset-gt-xs-75,[dir=rtl] .offset-gt-xs-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-gt-xs-80,.offset-gt-xs-80{margin-left:80%}[dir=rtl] .flex-offset-gt-xs-80,[dir=rtl] .offset-gt-xs-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-gt-xs-85,.offset-gt-xs-85{margin-left:85%}[dir=rtl] .flex-offset-gt-xs-85,[dir=rtl] .offset-gt-xs-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-gt-xs-90,.offset-gt-xs-90{margin-left:90%}[dir=rtl] .flex-offset-gt-xs-90,[dir=rtl] .offset-gt-xs-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-gt-xs-95,.offset-gt-xs-95{margin-left:95%}[dir=rtl] .flex-offset-gt-xs-95,[dir=rtl] .offset-gt-xs-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-gt-xs-33,.offset-gt-xs-33{margin-left:calc(100% / 3)}.flex-offset-gt-xs-66,.offset-gt-xs-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-gt-xs-66,[dir=rtl] .offset-gt-xs-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-gt-xs{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-gt-xs-start,.layout-align-gt-xs-start-center,.layout-align-gt-xs-start-end,.layout-align-gt-xs-start-start,.layout-align-gt-xs-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-gt-xs-center,.layout-align-gt-xs-center-center,.layout-align-gt-xs-center-end,.layout-align-gt-xs-center-start,.layout-align-gt-xs-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-gt-xs-end,.layout-align-gt-xs-end-center,.layout-align-gt-xs-end-end,.layout-align-gt-xs-end-start,.layout-align-gt-xs-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-gt-xs-space-around,.layout-align-gt-xs-space-around-center,.layout-align-gt-xs-space-around-end,.layout-align-gt-xs-space-around-start,.layout-align-gt-xs-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-gt-xs-space-between,.layout-align-gt-xs-space-between-center,.layout-align-gt-xs-space-between-end,.layout-align-gt-xs-space-between-start,.layout-align-gt-xs-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-gt-xs-center-start,.layout-align-gt-xs-end-start,.layout-align-gt-xs-space-around-start,.layout-align-gt-xs-space-between-start,.layout-align-gt-xs-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-gt-xs-center-center,.layout-align-gt-xs-end-center,.layout-align-gt-xs-space-around-center,.layout-align-gt-xs-space-between-center,.layout-align-gt-xs-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-gt-xs-center-center>*,.layout-align-gt-xs-end-center>*,.layout-align-gt-xs-space-around-center>*,.layout-align-gt-xs-space-between-center>*,.layout-align-gt-xs-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-gt-xs-center-end,.layout-align-gt-xs-end-end,.layout-align-gt-xs-space-around-end,.layout-align-gt-xs-space-between-end,.layout-align-gt-xs-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-gt-xs-center-stretch,.layout-align-gt-xs-end-stretch,.layout-align-gt-xs-space-around-stretch,.layout-align-gt-xs-space-between-stretch,.layout-align-gt-xs-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-gt-xs{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-gt-xs-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-gt-xs-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-xs-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-gt-xs-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-gt-xs-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-gt-xs-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-xs-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-gt-xs-row>.flex-gt-xs-0,.layout-row>.flex-gt-xs-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-gt-xs-0,.layout-gt-xs-column>.flex-gt-xs-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-gt-xs-5,.layout-gt-xs-row>.flex-gt-xs-5,.layout-row>.flex-gt-xs-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-5,.layout-gt-xs-column>.flex-gt-xs-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-gt-xs-10,.layout-gt-xs-row>.flex-gt-xs-10,.layout-row>.flex-gt-xs-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-10,.layout-gt-xs-column>.flex-gt-xs-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-gt-xs-15,.layout-gt-xs-row>.flex-gt-xs-15,.layout-row>.flex-gt-xs-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-15,.layout-gt-xs-column>.flex-gt-xs-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-gt-xs-20,.layout-gt-xs-row>.flex-gt-xs-20,.layout-row>.flex-gt-xs-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-20,.layout-gt-xs-column>.flex-gt-xs-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-gt-xs-25,.layout-gt-xs-row>.flex-gt-xs-25,.layout-row>.flex-gt-xs-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-25,.layout-gt-xs-column>.flex-gt-xs-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-gt-xs-30,.layout-gt-xs-row>.flex-gt-xs-30,.layout-row>.flex-gt-xs-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-30,.layout-gt-xs-column>.flex-gt-xs-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-gt-xs-35,.layout-gt-xs-row>.flex-gt-xs-35,.layout-row>.flex-gt-xs-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-35,.layout-gt-xs-column>.flex-gt-xs-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-gt-xs-40,.layout-gt-xs-row>.flex-gt-xs-40,.layout-row>.flex-gt-xs-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-40,.layout-gt-xs-column>.flex-gt-xs-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-gt-xs-45,.layout-gt-xs-row>.flex-gt-xs-45,.layout-row>.flex-gt-xs-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-45,.layout-gt-xs-column>.flex-gt-xs-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-gt-xs-50,.layout-gt-xs-row>.flex-gt-xs-50,.layout-row>.flex-gt-xs-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-50,.layout-gt-xs-column>.flex-gt-xs-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-gt-xs-55,.layout-gt-xs-row>.flex-gt-xs-55,.layout-row>.flex-gt-xs-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-55,.layout-gt-xs-column>.flex-gt-xs-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-gt-xs-60,.layout-gt-xs-row>.flex-gt-xs-60,.layout-row>.flex-gt-xs-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-60,.layout-gt-xs-column>.flex-gt-xs-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-gt-xs-65,.layout-gt-xs-row>.flex-gt-xs-65,.layout-row>.flex-gt-xs-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-65,.layout-gt-xs-column>.flex-gt-xs-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-gt-xs-70,.layout-gt-xs-row>.flex-gt-xs-70,.layout-row>.flex-gt-xs-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-70,.layout-gt-xs-column>.flex-gt-xs-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-gt-xs-75,.layout-gt-xs-row>.flex-gt-xs-75,.layout-row>.flex-gt-xs-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-75,.layout-gt-xs-column>.flex-gt-xs-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-gt-xs-80,.layout-gt-xs-row>.flex-gt-xs-80,.layout-row>.flex-gt-xs-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-80,.layout-gt-xs-column>.flex-gt-xs-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-gt-xs-85,.layout-gt-xs-row>.flex-gt-xs-85,.layout-row>.flex-gt-xs-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-85,.layout-gt-xs-column>.flex-gt-xs-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-gt-xs-90,.layout-gt-xs-row>.flex-gt-xs-90,.layout-row>.flex-gt-xs-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-90,.layout-gt-xs-column>.flex-gt-xs-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-gt-xs-95,.layout-gt-xs-row>.flex-gt-xs-95,.layout-row>.flex-gt-xs-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-xs-95,.layout-gt-xs-column>.flex-gt-xs-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-gt-xs-100,.layout-column>.flex-gt-xs-100,.layout-gt-xs-column>.flex-gt-xs-100,.layout-gt-xs-row>.flex-gt-xs-100,.layout-row>.flex-gt-xs-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-gt-xs-row>.flex-gt-xs-33,.layout-row>.flex-gt-xs-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-gt-xs-row>.flex-gt-xs-66,.layout-row>.flex-gt-xs-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-gt-xs-row>.flex,.layout-row>.flex{min-width:0}.layout-column>.flex-gt-xs-33,.layout-gt-xs-column>.flex-gt-xs-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-gt-xs-66,.layout-gt-xs-column>.flex-gt-xs-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-gt-xs-column>.flex{min-height:0}.layout-gt-xs,.layout-gt-xs-column,.layout-gt-xs-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-gt-xs-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-gt-xs-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:600px) and (max-width:959px){.hide-gt-xs:not(.show-gt-xs):not(.show-sm):not(.show),.hide-sm:not(.show-gt-xs):not(.show-sm):not(.show),.hide:not(.show-gt-xs):not(.show-sm):not(.show){display:none}.flex-order-sm--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-sm--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-sm--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-sm--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-sm--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-sm--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-sm--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-sm--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-sm--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-sm--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-sm--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-sm--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-sm--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-sm--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-sm--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-sm--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-sm--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-sm--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-sm--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-sm--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-sm-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-sm-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-sm-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-sm-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-sm-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-sm-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-sm-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-sm-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-sm-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-sm-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-sm-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-sm-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-sm-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-sm-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-sm-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-sm-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-sm-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-sm-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-sm-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-sm-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-sm-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-sm-0,.offset-sm-0{margin-left:0}[dir=rtl] .flex-offset-sm-0,[dir=rtl] .offset-sm-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-sm-5,.offset-sm-5{margin-left:5%}[dir=rtl] .flex-offset-sm-5,[dir=rtl] .offset-sm-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-sm-10,.offset-sm-10{margin-left:10%}[dir=rtl] .flex-offset-sm-10,[dir=rtl] .offset-sm-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-sm-15,.offset-sm-15{margin-left:15%}[dir=rtl] .flex-offset-sm-15,[dir=rtl] .offset-sm-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-sm-20,.offset-sm-20{margin-left:20%}[dir=rtl] .flex-offset-sm-20,[dir=rtl] .offset-sm-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-sm-25,.offset-sm-25{margin-left:25%}[dir=rtl] .flex-offset-sm-25,[dir=rtl] .offset-sm-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-sm-30,.offset-sm-30{margin-left:30%}[dir=rtl] .flex-offset-sm-30,[dir=rtl] .offset-sm-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-sm-35,.offset-sm-35{margin-left:35%}[dir=rtl] .flex-offset-sm-35,[dir=rtl] .offset-sm-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-sm-40,.offset-sm-40{margin-left:40%}[dir=rtl] .flex-offset-sm-40,[dir=rtl] .offset-sm-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-sm-45,.offset-sm-45{margin-left:45%}[dir=rtl] .flex-offset-sm-45,[dir=rtl] .offset-sm-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-sm-50,.offset-sm-50{margin-left:50%}[dir=rtl] .flex-offset-sm-50,[dir=rtl] .offset-sm-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-sm-55,.offset-sm-55{margin-left:55%}[dir=rtl] .flex-offset-sm-55,[dir=rtl] .offset-sm-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-sm-60,.offset-sm-60{margin-left:60%}[dir=rtl] .flex-offset-sm-60,[dir=rtl] .offset-sm-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-sm-65,.offset-sm-65{margin-left:65%}[dir=rtl] .flex-offset-sm-65,[dir=rtl] .offset-sm-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-sm-70,.offset-sm-70{margin-left:70%}[dir=rtl] .flex-offset-sm-70,[dir=rtl] .offset-sm-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-sm-75,.offset-sm-75{margin-left:75%}[dir=rtl] .flex-offset-sm-75,[dir=rtl] .offset-sm-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-sm-80,.offset-sm-80{margin-left:80%}[dir=rtl] .flex-offset-sm-80,[dir=rtl] .offset-sm-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-sm-85,.offset-sm-85{margin-left:85%}[dir=rtl] .flex-offset-sm-85,[dir=rtl] .offset-sm-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-sm-90,.offset-sm-90{margin-left:90%}[dir=rtl] .flex-offset-sm-90,[dir=rtl] .offset-sm-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-sm-95,.offset-sm-95{margin-left:95%}[dir=rtl] .flex-offset-sm-95,[dir=rtl] .offset-sm-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-sm-33,.offset-sm-33{margin-left:calc(100% / 3)}.flex-offset-sm-66,.offset-sm-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-sm-66,[dir=rtl] .offset-sm-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-sm{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-sm-start,.layout-align-sm-start-center,.layout-align-sm-start-end,.layout-align-sm-start-start,.layout-align-sm-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-sm-center,.layout-align-sm-center-center,.layout-align-sm-center-end,.layout-align-sm-center-start,.layout-align-sm-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-sm-end,.layout-align-sm-end-center,.layout-align-sm-end-end,.layout-align-sm-end-start,.layout-align-sm-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-sm-space-around,.layout-align-sm-space-around-center,.layout-align-sm-space-around-end,.layout-align-sm-space-around-start,.layout-align-sm-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-sm-space-between,.layout-align-sm-space-between-center,.layout-align-sm-space-between-end,.layout-align-sm-space-between-start,.layout-align-sm-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-sm-center-start,.layout-align-sm-end-start,.layout-align-sm-space-around-start,.layout-align-sm-space-between-start,.layout-align-sm-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-sm-center-center,.layout-align-sm-end-center,.layout-align-sm-space-around-center,.layout-align-sm-space-between-center,.layout-align-sm-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-sm-center-center>*,.layout-align-sm-end-center>*,.layout-align-sm-space-around-center>*,.layout-align-sm-space-between-center>*,.layout-align-sm-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-sm-center-end,.layout-align-sm-end-end,.layout-align-sm-space-around-end,.layout-align-sm-space-between-end,.layout-align-sm-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-sm-center-stretch,.layout-align-sm-end-stretch,.layout-align-sm-space-around-stretch,.layout-align-sm-space-between-stretch,.layout-align-sm-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-sm{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-sm-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-sm-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-sm-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-sm-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-sm-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-sm-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-sm-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-row>.flex-sm-0,.layout-sm-row>.flex-sm-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-sm-0,.layout-sm-column>.flex-sm-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-sm-5,.layout-row>.flex-sm-5,.layout-sm-row>.flex-sm-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-5,.layout-sm-column>.flex-sm-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-sm-10,.layout-row>.flex-sm-10,.layout-sm-row>.flex-sm-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-10,.layout-sm-column>.flex-sm-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-sm-15,.layout-row>.flex-sm-15,.layout-sm-row>.flex-sm-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-15,.layout-sm-column>.flex-sm-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-sm-20,.layout-row>.flex-sm-20,.layout-sm-row>.flex-sm-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-20,.layout-sm-column>.flex-sm-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-sm-25,.layout-row>.flex-sm-25,.layout-sm-row>.flex-sm-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-25,.layout-sm-column>.flex-sm-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-sm-30,.layout-row>.flex-sm-30,.layout-sm-row>.flex-sm-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-30,.layout-sm-column>.flex-sm-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-sm-35,.layout-row>.flex-sm-35,.layout-sm-row>.flex-sm-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-35,.layout-sm-column>.flex-sm-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-sm-40,.layout-row>.flex-sm-40,.layout-sm-row>.flex-sm-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-40,.layout-sm-column>.flex-sm-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-sm-45,.layout-row>.flex-sm-45,.layout-sm-row>.flex-sm-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-45,.layout-sm-column>.flex-sm-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-sm-50,.layout-row>.flex-sm-50,.layout-sm-row>.flex-sm-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-50,.layout-sm-column>.flex-sm-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-sm-55,.layout-row>.flex-sm-55,.layout-sm-row>.flex-sm-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-55,.layout-sm-column>.flex-sm-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-sm-60,.layout-row>.flex-sm-60,.layout-sm-row>.flex-sm-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-60,.layout-sm-column>.flex-sm-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-sm-65,.layout-row>.flex-sm-65,.layout-sm-row>.flex-sm-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-65,.layout-sm-column>.flex-sm-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-sm-70,.layout-row>.flex-sm-70,.layout-sm-row>.flex-sm-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-70,.layout-sm-column>.flex-sm-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-sm-75,.layout-row>.flex-sm-75,.layout-sm-row>.flex-sm-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-75,.layout-sm-column>.flex-sm-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-sm-80,.layout-row>.flex-sm-80,.layout-sm-row>.flex-sm-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-80,.layout-sm-column>.flex-sm-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-sm-85,.layout-row>.flex-sm-85,.layout-sm-row>.flex-sm-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-85,.layout-sm-column>.flex-sm-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-sm-90,.layout-row>.flex-sm-90,.layout-sm-row>.flex-sm-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-90,.layout-sm-column>.flex-sm-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-sm-95,.layout-row>.flex-sm-95,.layout-sm-row>.flex-sm-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-sm-95,.layout-sm-column>.flex-sm-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-sm-100,.layout-column>.flex-sm-100,.layout-row>.flex-sm-100,.layout-sm-column>.flex-sm-100,.layout-sm-row>.flex-sm-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-row>.flex-sm-33,.layout-sm-row>.flex-sm-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-row>.flex-sm-66,.layout-sm-row>.flex-sm-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-row>.flex,.layout-sm-row>.flex{min-width:0}.layout-column>.flex-sm-33,.layout-sm-column>.flex-sm-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-sm-66,.layout-sm-column>.flex-sm-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-sm-column>.flex{min-height:0}.layout-sm,.layout-sm-column,.layout-sm-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-sm-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-sm-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:960px){.flex-order-gt-sm--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-gt-sm--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-gt-sm--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-gt-sm--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-gt-sm--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-gt-sm--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-gt-sm--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-gt-sm--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-gt-sm--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-gt-sm--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-gt-sm--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-gt-sm--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-gt-sm--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-gt-sm--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-gt-sm--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-gt-sm--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-gt-sm--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-gt-sm--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-gt-sm--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-gt-sm--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-gt-sm-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-gt-sm-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-gt-sm-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-gt-sm-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-gt-sm-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-gt-sm-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-gt-sm-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-gt-sm-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-gt-sm-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-gt-sm-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-gt-sm-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-gt-sm-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-gt-sm-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-gt-sm-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-gt-sm-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-gt-sm-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-gt-sm-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-gt-sm-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-gt-sm-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-gt-sm-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-gt-sm-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-gt-sm-0,.offset-gt-sm-0{margin-left:0}[dir=rtl] .flex-offset-gt-sm-0,[dir=rtl] .offset-gt-sm-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-gt-sm-5,.offset-gt-sm-5{margin-left:5%}[dir=rtl] .flex-offset-gt-sm-5,[dir=rtl] .offset-gt-sm-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-gt-sm-10,.offset-gt-sm-10{margin-left:10%}[dir=rtl] .flex-offset-gt-sm-10,[dir=rtl] .offset-gt-sm-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-gt-sm-15,.offset-gt-sm-15{margin-left:15%}[dir=rtl] .flex-offset-gt-sm-15,[dir=rtl] .offset-gt-sm-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-gt-sm-20,.offset-gt-sm-20{margin-left:20%}[dir=rtl] .flex-offset-gt-sm-20,[dir=rtl] .offset-gt-sm-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-gt-sm-25,.offset-gt-sm-25{margin-left:25%}[dir=rtl] .flex-offset-gt-sm-25,[dir=rtl] .offset-gt-sm-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-gt-sm-30,.offset-gt-sm-30{margin-left:30%}[dir=rtl] .flex-offset-gt-sm-30,[dir=rtl] .offset-gt-sm-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-gt-sm-35,.offset-gt-sm-35{margin-left:35%}[dir=rtl] .flex-offset-gt-sm-35,[dir=rtl] .offset-gt-sm-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-gt-sm-40,.offset-gt-sm-40{margin-left:40%}[dir=rtl] .flex-offset-gt-sm-40,[dir=rtl] .offset-gt-sm-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-gt-sm-45,.offset-gt-sm-45{margin-left:45%}[dir=rtl] .flex-offset-gt-sm-45,[dir=rtl] .offset-gt-sm-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-gt-sm-50,.offset-gt-sm-50{margin-left:50%}[dir=rtl] .flex-offset-gt-sm-50,[dir=rtl] .offset-gt-sm-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-gt-sm-55,.offset-gt-sm-55{margin-left:55%}[dir=rtl] .flex-offset-gt-sm-55,[dir=rtl] .offset-gt-sm-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-gt-sm-60,.offset-gt-sm-60{margin-left:60%}[dir=rtl] .flex-offset-gt-sm-60,[dir=rtl] .offset-gt-sm-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-gt-sm-65,.offset-gt-sm-65{margin-left:65%}[dir=rtl] .flex-offset-gt-sm-65,[dir=rtl] .offset-gt-sm-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-gt-sm-70,.offset-gt-sm-70{margin-left:70%}[dir=rtl] .flex-offset-gt-sm-70,[dir=rtl] .offset-gt-sm-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-gt-sm-75,.offset-gt-sm-75{margin-left:75%}[dir=rtl] .flex-offset-gt-sm-75,[dir=rtl] .offset-gt-sm-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-gt-sm-80,.offset-gt-sm-80{margin-left:80%}[dir=rtl] .flex-offset-gt-sm-80,[dir=rtl] .offset-gt-sm-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-gt-sm-85,.offset-gt-sm-85{margin-left:85%}[dir=rtl] .flex-offset-gt-sm-85,[dir=rtl] .offset-gt-sm-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-gt-sm-90,.offset-gt-sm-90{margin-left:90%}[dir=rtl] .flex-offset-gt-sm-90,[dir=rtl] .offset-gt-sm-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-gt-sm-95,.offset-gt-sm-95{margin-left:95%}[dir=rtl] .flex-offset-gt-sm-95,[dir=rtl] .offset-gt-sm-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-gt-sm-33,.offset-gt-sm-33{margin-left:calc(100% / 3)}.flex-offset-gt-sm-66,.offset-gt-sm-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-gt-sm-66,[dir=rtl] .offset-gt-sm-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-gt-sm{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-gt-sm-start,.layout-align-gt-sm-start-center,.layout-align-gt-sm-start-end,.layout-align-gt-sm-start-start,.layout-align-gt-sm-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-gt-sm-center,.layout-align-gt-sm-center-center,.layout-align-gt-sm-center-end,.layout-align-gt-sm-center-start,.layout-align-gt-sm-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-gt-sm-end,.layout-align-gt-sm-end-center,.layout-align-gt-sm-end-end,.layout-align-gt-sm-end-start,.layout-align-gt-sm-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-gt-sm-space-around,.layout-align-gt-sm-space-around-center,.layout-align-gt-sm-space-around-end,.layout-align-gt-sm-space-around-start,.layout-align-gt-sm-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-gt-sm-space-between,.layout-align-gt-sm-space-between-center,.layout-align-gt-sm-space-between-end,.layout-align-gt-sm-space-between-start,.layout-align-gt-sm-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-gt-sm-center-start,.layout-align-gt-sm-end-start,.layout-align-gt-sm-space-around-start,.layout-align-gt-sm-space-between-start,.layout-align-gt-sm-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-gt-sm-center-center,.layout-align-gt-sm-end-center,.layout-align-gt-sm-space-around-center,.layout-align-gt-sm-space-between-center,.layout-align-gt-sm-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-gt-sm-center-center>*,.layout-align-gt-sm-end-center>*,.layout-align-gt-sm-space-around-center>*,.layout-align-gt-sm-space-between-center>*,.layout-align-gt-sm-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-gt-sm-center-end,.layout-align-gt-sm-end-end,.layout-align-gt-sm-space-around-end,.layout-align-gt-sm-space-between-end,.layout-align-gt-sm-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-gt-sm-center-stretch,.layout-align-gt-sm-end-stretch,.layout-align-gt-sm-space-around-stretch,.layout-align-gt-sm-space-between-stretch,.layout-align-gt-sm-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-gt-sm{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-gt-sm-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-gt-sm-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-sm-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-gt-sm-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-gt-sm-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-gt-sm-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-sm-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-gt-sm-row>.flex-gt-sm-0,.layout-row>.flex-gt-sm-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-gt-sm-0,.layout-gt-sm-column>.flex-gt-sm-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-gt-sm-5,.layout-gt-sm-row>.flex-gt-sm-5,.layout-row>.flex-gt-sm-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-5,.layout-gt-sm-column>.flex-gt-sm-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-gt-sm-10,.layout-gt-sm-row>.flex-gt-sm-10,.layout-row>.flex-gt-sm-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-10,.layout-gt-sm-column>.flex-gt-sm-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-gt-sm-15,.layout-gt-sm-row>.flex-gt-sm-15,.layout-row>.flex-gt-sm-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-15,.layout-gt-sm-column>.flex-gt-sm-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-gt-sm-20,.layout-gt-sm-row>.flex-gt-sm-20,.layout-row>.flex-gt-sm-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-20,.layout-gt-sm-column>.flex-gt-sm-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-gt-sm-25,.layout-gt-sm-row>.flex-gt-sm-25,.layout-row>.flex-gt-sm-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-25,.layout-gt-sm-column>.flex-gt-sm-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-gt-sm-30,.layout-gt-sm-row>.flex-gt-sm-30,.layout-row>.flex-gt-sm-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-30,.layout-gt-sm-column>.flex-gt-sm-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-gt-sm-35,.layout-gt-sm-row>.flex-gt-sm-35,.layout-row>.flex-gt-sm-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-35,.layout-gt-sm-column>.flex-gt-sm-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-gt-sm-40,.layout-gt-sm-row>.flex-gt-sm-40,.layout-row>.flex-gt-sm-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-40,.layout-gt-sm-column>.flex-gt-sm-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-gt-sm-45,.layout-gt-sm-row>.flex-gt-sm-45,.layout-row>.flex-gt-sm-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-45,.layout-gt-sm-column>.flex-gt-sm-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-gt-sm-50,.layout-gt-sm-row>.flex-gt-sm-50,.layout-row>.flex-gt-sm-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-50,.layout-gt-sm-column>.flex-gt-sm-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-gt-sm-55,.layout-gt-sm-row>.flex-gt-sm-55,.layout-row>.flex-gt-sm-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-55,.layout-gt-sm-column>.flex-gt-sm-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-gt-sm-60,.layout-gt-sm-row>.flex-gt-sm-60,.layout-row>.flex-gt-sm-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-60,.layout-gt-sm-column>.flex-gt-sm-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-gt-sm-65,.layout-gt-sm-row>.flex-gt-sm-65,.layout-row>.flex-gt-sm-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-65,.layout-gt-sm-column>.flex-gt-sm-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-gt-sm-70,.layout-gt-sm-row>.flex-gt-sm-70,.layout-row>.flex-gt-sm-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-70,.layout-gt-sm-column>.flex-gt-sm-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-gt-sm-75,.layout-gt-sm-row>.flex-gt-sm-75,.layout-row>.flex-gt-sm-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-75,.layout-gt-sm-column>.flex-gt-sm-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-gt-sm-80,.layout-gt-sm-row>.flex-gt-sm-80,.layout-row>.flex-gt-sm-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-80,.layout-gt-sm-column>.flex-gt-sm-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-gt-sm-85,.layout-gt-sm-row>.flex-gt-sm-85,.layout-row>.flex-gt-sm-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-85,.layout-gt-sm-column>.flex-gt-sm-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-gt-sm-90,.layout-gt-sm-row>.flex-gt-sm-90,.layout-row>.flex-gt-sm-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-90,.layout-gt-sm-column>.flex-gt-sm-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-gt-sm-95,.layout-gt-sm-row>.flex-gt-sm-95,.layout-row>.flex-gt-sm-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-sm-95,.layout-gt-sm-column>.flex-gt-sm-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-gt-sm-100,.layout-column>.flex-gt-sm-100,.layout-gt-sm-column>.flex-gt-sm-100,.layout-gt-sm-row>.flex-gt-sm-100,.layout-row>.flex-gt-sm-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-gt-sm-row>.flex-gt-sm-33,.layout-row>.flex-gt-sm-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-gt-sm-row>.flex-gt-sm-66,.layout-row>.flex-gt-sm-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-gt-sm-row>.flex,.layout-row>.flex{min-width:0}.layout-column>.flex-gt-sm-33,.layout-gt-sm-column>.flex-gt-sm-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-gt-sm-66,.layout-gt-sm-column>.flex-gt-sm-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-gt-sm-column>.flex{min-height:0}.layout-gt-sm,.layout-gt-sm-column,.layout-gt-sm-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-gt-sm-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-gt-sm-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:960px) and (max-width:1279px){.hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show),.hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show),.hide-md:not(.show-md):not(.show-gt-sm):not(.show-gt-xs):not(.show),.hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show){display:none}.flex-order-md--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-md--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-md--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-md--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-md--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-md--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-md--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-md--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-md--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-md--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-md--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-md--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-md--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-md--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-md--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-md--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-md--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-md--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-md--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-md--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-md-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-md-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-md-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-md-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-md-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-md-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-md-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-md-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-md-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-md-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-md-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-md-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-md-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-md-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-md-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-md-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-md-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-md-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-md-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-md-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-md-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-md-0,.offset-md-0{margin-left:0}[dir=rtl] .flex-offset-md-0,[dir=rtl] .offset-md-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-md-5,.offset-md-5{margin-left:5%}[dir=rtl] .flex-offset-md-5,[dir=rtl] .offset-md-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-md-10,.offset-md-10{margin-left:10%}[dir=rtl] .flex-offset-md-10,[dir=rtl] .offset-md-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-md-15,.offset-md-15{margin-left:15%}[dir=rtl] .flex-offset-md-15,[dir=rtl] .offset-md-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-md-20,.offset-md-20{margin-left:20%}[dir=rtl] .flex-offset-md-20,[dir=rtl] .offset-md-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-md-25,.offset-md-25{margin-left:25%}[dir=rtl] .flex-offset-md-25,[dir=rtl] .offset-md-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-md-30,.offset-md-30{margin-left:30%}[dir=rtl] .flex-offset-md-30,[dir=rtl] .offset-md-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-md-35,.offset-md-35{margin-left:35%}[dir=rtl] .flex-offset-md-35,[dir=rtl] .offset-md-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-md-40,.offset-md-40{margin-left:40%}[dir=rtl] .flex-offset-md-40,[dir=rtl] .offset-md-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-md-45,.offset-md-45{margin-left:45%}[dir=rtl] .flex-offset-md-45,[dir=rtl] .offset-md-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-md-50,.offset-md-50{margin-left:50%}[dir=rtl] .flex-offset-md-50,[dir=rtl] .offset-md-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-md-55,.offset-md-55{margin-left:55%}[dir=rtl] .flex-offset-md-55,[dir=rtl] .offset-md-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-md-60,.offset-md-60{margin-left:60%}[dir=rtl] .flex-offset-md-60,[dir=rtl] .offset-md-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-md-65,.offset-md-65{margin-left:65%}[dir=rtl] .flex-offset-md-65,[dir=rtl] .offset-md-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-md-70,.offset-md-70{margin-left:70%}[dir=rtl] .flex-offset-md-70,[dir=rtl] .offset-md-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-md-75,.offset-md-75{margin-left:75%}[dir=rtl] .flex-offset-md-75,[dir=rtl] .offset-md-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-md-80,.offset-md-80{margin-left:80%}[dir=rtl] .flex-offset-md-80,[dir=rtl] .offset-md-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-md-85,.offset-md-85{margin-left:85%}[dir=rtl] .flex-offset-md-85,[dir=rtl] .offset-md-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-md-90,.offset-md-90{margin-left:90%}[dir=rtl] .flex-offset-md-90,[dir=rtl] .offset-md-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-md-95,.offset-md-95{margin-left:95%}[dir=rtl] .flex-offset-md-95,[dir=rtl] .offset-md-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-md-33,.offset-md-33{margin-left:calc(100% / 3)}.flex-offset-md-66,.offset-md-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-md-66,[dir=rtl] .offset-md-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-md{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-md-start,.layout-align-md-start-center,.layout-align-md-start-end,.layout-align-md-start-start,.layout-align-md-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-md-center,.layout-align-md-center-center,.layout-align-md-center-end,.layout-align-md-center-start,.layout-align-md-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-md-end,.layout-align-md-end-center,.layout-align-md-end-end,.layout-align-md-end-start,.layout-align-md-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-md-space-around,.layout-align-md-space-around-center,.layout-align-md-space-around-end,.layout-align-md-space-around-start,.layout-align-md-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-md-space-between,.layout-align-md-space-between-center,.layout-align-md-space-between-end,.layout-align-md-space-between-start,.layout-align-md-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-md-center-start,.layout-align-md-end-start,.layout-align-md-space-around-start,.layout-align-md-space-between-start,.layout-align-md-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-md-center-center,.layout-align-md-end-center,.layout-align-md-space-around-center,.layout-align-md-space-between-center,.layout-align-md-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-md-center-center>*,.layout-align-md-end-center>*,.layout-align-md-space-around-center>*,.layout-align-md-space-between-center>*,.layout-align-md-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-md-center-end,.layout-align-md-end-end,.layout-align-md-space-around-end,.layout-align-md-space-between-end,.layout-align-md-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-md-center-stretch,.layout-align-md-end-stretch,.layout-align-md-space-around-stretch,.layout-align-md-space-between-stretch,.layout-align-md-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-md{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-md-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-md-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-md-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-md-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-md-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-md-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-md-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-md-row>.flex-md-0,.layout-row>.flex-md-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-md-0,.layout-md-column>.flex-md-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-md-5,.layout-md-row>.flex-md-5,.layout-row>.flex-md-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-5,.layout-md-column>.flex-md-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-md-10,.layout-md-row>.flex-md-10,.layout-row>.flex-md-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-10,.layout-md-column>.flex-md-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-md-15,.layout-md-row>.flex-md-15,.layout-row>.flex-md-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-15,.layout-md-column>.flex-md-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-md-20,.layout-md-row>.flex-md-20,.layout-row>.flex-md-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-20,.layout-md-column>.flex-md-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-md-25,.layout-md-row>.flex-md-25,.layout-row>.flex-md-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-25,.layout-md-column>.flex-md-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-md-30,.layout-md-row>.flex-md-30,.layout-row>.flex-md-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-30,.layout-md-column>.flex-md-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-md-35,.layout-md-row>.flex-md-35,.layout-row>.flex-md-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-35,.layout-md-column>.flex-md-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-md-40,.layout-md-row>.flex-md-40,.layout-row>.flex-md-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-40,.layout-md-column>.flex-md-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-md-45,.layout-md-row>.flex-md-45,.layout-row>.flex-md-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-45,.layout-md-column>.flex-md-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-md-50,.layout-md-row>.flex-md-50,.layout-row>.flex-md-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-50,.layout-md-column>.flex-md-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-md-55,.layout-md-row>.flex-md-55,.layout-row>.flex-md-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-55,.layout-md-column>.flex-md-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-md-60,.layout-md-row>.flex-md-60,.layout-row>.flex-md-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-60,.layout-md-column>.flex-md-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-md-65,.layout-md-row>.flex-md-65,.layout-row>.flex-md-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-65,.layout-md-column>.flex-md-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-md-70,.layout-md-row>.flex-md-70,.layout-row>.flex-md-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-70,.layout-md-column>.flex-md-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-md-75,.layout-md-row>.flex-md-75,.layout-row>.flex-md-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-75,.layout-md-column>.flex-md-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-md-80,.layout-md-row>.flex-md-80,.layout-row>.flex-md-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-80,.layout-md-column>.flex-md-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-md-85,.layout-md-row>.flex-md-85,.layout-row>.flex-md-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-85,.layout-md-column>.flex-md-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-md-90,.layout-md-row>.flex-md-90,.layout-row>.flex-md-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-90,.layout-md-column>.flex-md-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-md-95,.layout-md-row>.flex-md-95,.layout-row>.flex-md-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-md-95,.layout-md-column>.flex-md-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-md-100,.layout-column>.flex-md-100,.layout-md-column>.flex-md-100,.layout-md-row>.flex-md-100,.layout-row>.flex-md-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-md-row>.flex-md-33,.layout-row>.flex-md-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-md-row>.flex-md-66,.layout-row>.flex-md-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-md-row>.flex,.layout-row>.flex{min-width:0}.layout-column>.flex-md-33,.layout-md-column>.flex-md-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-md-66,.layout-md-column>.flex-md-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-md-column>.flex{min-height:0}.layout-md,.layout-md-column,.layout-md-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-md-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-md-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:1280px){.flex-order-gt-md--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-gt-md--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-gt-md--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-gt-md--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-gt-md--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-gt-md--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-gt-md--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-gt-md--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-gt-md--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-gt-md--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-gt-md--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-gt-md--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-gt-md--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-gt-md--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-gt-md--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-gt-md--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-gt-md--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-gt-md--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-gt-md--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-gt-md--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-gt-md-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-gt-md-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-gt-md-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-gt-md-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-gt-md-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-gt-md-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-gt-md-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-gt-md-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-gt-md-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-gt-md-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-gt-md-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-gt-md-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-gt-md-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-gt-md-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-gt-md-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-gt-md-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-gt-md-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-gt-md-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-gt-md-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-gt-md-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-gt-md-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-gt-md-0,.offset-gt-md-0{margin-left:0}[dir=rtl] .flex-offset-gt-md-0,[dir=rtl] .offset-gt-md-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-gt-md-5,.offset-gt-md-5{margin-left:5%}[dir=rtl] .flex-offset-gt-md-5,[dir=rtl] .offset-gt-md-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-gt-md-10,.offset-gt-md-10{margin-left:10%}[dir=rtl] .flex-offset-gt-md-10,[dir=rtl] .offset-gt-md-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-gt-md-15,.offset-gt-md-15{margin-left:15%}[dir=rtl] .flex-offset-gt-md-15,[dir=rtl] .offset-gt-md-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-gt-md-20,.offset-gt-md-20{margin-left:20%}[dir=rtl] .flex-offset-gt-md-20,[dir=rtl] .offset-gt-md-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-gt-md-25,.offset-gt-md-25{margin-left:25%}[dir=rtl] .flex-offset-gt-md-25,[dir=rtl] .offset-gt-md-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-gt-md-30,.offset-gt-md-30{margin-left:30%}[dir=rtl] .flex-offset-gt-md-30,[dir=rtl] .offset-gt-md-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-gt-md-35,.offset-gt-md-35{margin-left:35%}[dir=rtl] .flex-offset-gt-md-35,[dir=rtl] .offset-gt-md-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-gt-md-40,.offset-gt-md-40{margin-left:40%}[dir=rtl] .flex-offset-gt-md-40,[dir=rtl] .offset-gt-md-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-gt-md-45,.offset-gt-md-45{margin-left:45%}[dir=rtl] .flex-offset-gt-md-45,[dir=rtl] .offset-gt-md-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-gt-md-50,.offset-gt-md-50{margin-left:50%}[dir=rtl] .flex-offset-gt-md-50,[dir=rtl] .offset-gt-md-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-gt-md-55,.offset-gt-md-55{margin-left:55%}[dir=rtl] .flex-offset-gt-md-55,[dir=rtl] .offset-gt-md-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-gt-md-60,.offset-gt-md-60{margin-left:60%}[dir=rtl] .flex-offset-gt-md-60,[dir=rtl] .offset-gt-md-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-gt-md-65,.offset-gt-md-65{margin-left:65%}[dir=rtl] .flex-offset-gt-md-65,[dir=rtl] .offset-gt-md-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-gt-md-70,.offset-gt-md-70{margin-left:70%}[dir=rtl] .flex-offset-gt-md-70,[dir=rtl] .offset-gt-md-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-gt-md-75,.offset-gt-md-75{margin-left:75%}[dir=rtl] .flex-offset-gt-md-75,[dir=rtl] .offset-gt-md-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-gt-md-80,.offset-gt-md-80{margin-left:80%}[dir=rtl] .flex-offset-gt-md-80,[dir=rtl] .offset-gt-md-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-gt-md-85,.offset-gt-md-85{margin-left:85%}[dir=rtl] .flex-offset-gt-md-85,[dir=rtl] .offset-gt-md-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-gt-md-90,.offset-gt-md-90{margin-left:90%}[dir=rtl] .flex-offset-gt-md-90,[dir=rtl] .offset-gt-md-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-gt-md-95,.offset-gt-md-95{margin-left:95%}[dir=rtl] .flex-offset-gt-md-95,[dir=rtl] .offset-gt-md-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-gt-md-33,.offset-gt-md-33{margin-left:calc(100% / 3)}.flex-offset-gt-md-66,.offset-gt-md-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-gt-md-66,[dir=rtl] .offset-gt-md-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-gt-md{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-gt-md-start,.layout-align-gt-md-start-center,.layout-align-gt-md-start-end,.layout-align-gt-md-start-start,.layout-align-gt-md-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-gt-md-center,.layout-align-gt-md-center-center,.layout-align-gt-md-center-end,.layout-align-gt-md-center-start,.layout-align-gt-md-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-gt-md-end,.layout-align-gt-md-end-center,.layout-align-gt-md-end-end,.layout-align-gt-md-end-start,.layout-align-gt-md-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-gt-md-space-around,.layout-align-gt-md-space-around-center,.layout-align-gt-md-space-around-end,.layout-align-gt-md-space-around-start,.layout-align-gt-md-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-gt-md-space-between,.layout-align-gt-md-space-between-center,.layout-align-gt-md-space-between-end,.layout-align-gt-md-space-between-start,.layout-align-gt-md-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-gt-md-center-start,.layout-align-gt-md-end-start,.layout-align-gt-md-space-around-start,.layout-align-gt-md-space-between-start,.layout-align-gt-md-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-gt-md-center-center,.layout-align-gt-md-end-center,.layout-align-gt-md-space-around-center,.layout-align-gt-md-space-between-center,.layout-align-gt-md-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-gt-md-center-center>*,.layout-align-gt-md-end-center>*,.layout-align-gt-md-space-around-center>*,.layout-align-gt-md-space-between-center>*,.layout-align-gt-md-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-gt-md-center-end,.layout-align-gt-md-end-end,.layout-align-gt-md-space-around-end,.layout-align-gt-md-space-between-end,.layout-align-gt-md-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-gt-md-center-stretch,.layout-align-gt-md-end-stretch,.layout-align-gt-md-space-around-stretch,.layout-align-gt-md-space-between-stretch,.layout-align-gt-md-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-gt-md{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-gt-md-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-gt-md-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-md-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-gt-md-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-gt-md-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-gt-md-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-md-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-gt-md-row>.flex-gt-md-0,.layout-row>.flex-gt-md-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-gt-md-0,.layout-gt-md-column>.flex-gt-md-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-gt-md-5,.layout-gt-md-row>.flex-gt-md-5,.layout-row>.flex-gt-md-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-5,.layout-gt-md-column>.flex-gt-md-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-gt-md-10,.layout-gt-md-row>.flex-gt-md-10,.layout-row>.flex-gt-md-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-10,.layout-gt-md-column>.flex-gt-md-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-gt-md-15,.layout-gt-md-row>.flex-gt-md-15,.layout-row>.flex-gt-md-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-15,.layout-gt-md-column>.flex-gt-md-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-gt-md-20,.layout-gt-md-row>.flex-gt-md-20,.layout-row>.flex-gt-md-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-20,.layout-gt-md-column>.flex-gt-md-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-gt-md-25,.layout-gt-md-row>.flex-gt-md-25,.layout-row>.flex-gt-md-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-25,.layout-gt-md-column>.flex-gt-md-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-gt-md-30,.layout-gt-md-row>.flex-gt-md-30,.layout-row>.flex-gt-md-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-30,.layout-gt-md-column>.flex-gt-md-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-gt-md-35,.layout-gt-md-row>.flex-gt-md-35,.layout-row>.flex-gt-md-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-35,.layout-gt-md-column>.flex-gt-md-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-gt-md-40,.layout-gt-md-row>.flex-gt-md-40,.layout-row>.flex-gt-md-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-40,.layout-gt-md-column>.flex-gt-md-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-gt-md-45,.layout-gt-md-row>.flex-gt-md-45,.layout-row>.flex-gt-md-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-45,.layout-gt-md-column>.flex-gt-md-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-gt-md-50,.layout-gt-md-row>.flex-gt-md-50,.layout-row>.flex-gt-md-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-50,.layout-gt-md-column>.flex-gt-md-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-gt-md-55,.layout-gt-md-row>.flex-gt-md-55,.layout-row>.flex-gt-md-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-55,.layout-gt-md-column>.flex-gt-md-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-gt-md-60,.layout-gt-md-row>.flex-gt-md-60,.layout-row>.flex-gt-md-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-60,.layout-gt-md-column>.flex-gt-md-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-gt-md-65,.layout-gt-md-row>.flex-gt-md-65,.layout-row>.flex-gt-md-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-65,.layout-gt-md-column>.flex-gt-md-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-gt-md-70,.layout-gt-md-row>.flex-gt-md-70,.layout-row>.flex-gt-md-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-70,.layout-gt-md-column>.flex-gt-md-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-gt-md-75,.layout-gt-md-row>.flex-gt-md-75,.layout-row>.flex-gt-md-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-75,.layout-gt-md-column>.flex-gt-md-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-gt-md-80,.layout-gt-md-row>.flex-gt-md-80,.layout-row>.flex-gt-md-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-80,.layout-gt-md-column>.flex-gt-md-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-gt-md-85,.layout-gt-md-row>.flex-gt-md-85,.layout-row>.flex-gt-md-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-85,.layout-gt-md-column>.flex-gt-md-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-gt-md-90,.layout-gt-md-row>.flex-gt-md-90,.layout-row>.flex-gt-md-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-90,.layout-gt-md-column>.flex-gt-md-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-gt-md-95,.layout-gt-md-row>.flex-gt-md-95,.layout-row>.flex-gt-md-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-md-95,.layout-gt-md-column>.flex-gt-md-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-gt-md-100,.layout-column>.flex-gt-md-100,.layout-gt-md-column>.flex-gt-md-100,.layout-gt-md-row>.flex-gt-md-100,.layout-row>.flex-gt-md-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-gt-md-row>.flex-gt-md-33,.layout-row>.flex-gt-md-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-gt-md-row>.flex-gt-md-66,.layout-row>.flex-gt-md-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-gt-md-row>.flex,.layout-row>.flex{min-width:0}.layout-column>.flex-gt-md-33,.layout-gt-md-column>.flex-gt-md-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-gt-md-66,.layout-gt-md-column>.flex-gt-md-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-gt-md-column>.flex{min-height:0}.layout-gt-md,.layout-gt-md-column,.layout-gt-md-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-gt-md-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-gt-md-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:1280px) and (max-width:1919px){.hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show),.hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show),.hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show),.hide-lg:not(.show-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show),.hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show){display:none}.flex-order-lg--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-lg--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-lg--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-lg--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-lg--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-lg--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-lg--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-lg--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-lg--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-lg--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-lg--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-lg--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-lg--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-lg--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-lg--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-lg--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-lg--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-lg--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-lg--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-lg--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-lg-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-lg-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-lg-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-lg-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-lg-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-lg-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-lg-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-lg-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-lg-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-lg-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-lg-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-lg-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-lg-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-lg-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-lg-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-lg-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-lg-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-lg-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-lg-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-lg-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-lg-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-lg-0,.offset-lg-0{margin-left:0}[dir=rtl] .flex-offset-lg-0,[dir=rtl] .offset-lg-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-lg-5,.offset-lg-5{margin-left:5%}[dir=rtl] .flex-offset-lg-5,[dir=rtl] .offset-lg-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-lg-10,.offset-lg-10{margin-left:10%}[dir=rtl] .flex-offset-lg-10,[dir=rtl] .offset-lg-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-lg-15,.offset-lg-15{margin-left:15%}[dir=rtl] .flex-offset-lg-15,[dir=rtl] .offset-lg-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-lg-20,.offset-lg-20{margin-left:20%}[dir=rtl] .flex-offset-lg-20,[dir=rtl] .offset-lg-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-lg-25,.offset-lg-25{margin-left:25%}[dir=rtl] .flex-offset-lg-25,[dir=rtl] .offset-lg-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-lg-30,.offset-lg-30{margin-left:30%}[dir=rtl] .flex-offset-lg-30,[dir=rtl] .offset-lg-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-lg-35,.offset-lg-35{margin-left:35%}[dir=rtl] .flex-offset-lg-35,[dir=rtl] .offset-lg-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-lg-40,.offset-lg-40{margin-left:40%}[dir=rtl] .flex-offset-lg-40,[dir=rtl] .offset-lg-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-lg-45,.offset-lg-45{margin-left:45%}[dir=rtl] .flex-offset-lg-45,[dir=rtl] .offset-lg-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-lg-50,.offset-lg-50{margin-left:50%}[dir=rtl] .flex-offset-lg-50,[dir=rtl] .offset-lg-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-lg-55,.offset-lg-55{margin-left:55%}[dir=rtl] .flex-offset-lg-55,[dir=rtl] .offset-lg-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-lg-60,.offset-lg-60{margin-left:60%}[dir=rtl] .flex-offset-lg-60,[dir=rtl] .offset-lg-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-lg-65,.offset-lg-65{margin-left:65%}[dir=rtl] .flex-offset-lg-65,[dir=rtl] .offset-lg-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-lg-70,.offset-lg-70{margin-left:70%}[dir=rtl] .flex-offset-lg-70,[dir=rtl] .offset-lg-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-lg-75,.offset-lg-75{margin-left:75%}[dir=rtl] .flex-offset-lg-75,[dir=rtl] .offset-lg-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-lg-80,.offset-lg-80{margin-left:80%}[dir=rtl] .flex-offset-lg-80,[dir=rtl] .offset-lg-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-lg-85,.offset-lg-85{margin-left:85%}[dir=rtl] .flex-offset-lg-85,[dir=rtl] .offset-lg-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-lg-90,.offset-lg-90{margin-left:90%}[dir=rtl] .flex-offset-lg-90,[dir=rtl] .offset-lg-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-lg-95,.offset-lg-95{margin-left:95%}[dir=rtl] .flex-offset-lg-95,[dir=rtl] .offset-lg-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-lg-33,.offset-lg-33{margin-left:calc(100% / 3)}.flex-offset-lg-66,.offset-lg-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-lg-66,[dir=rtl] .offset-lg-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-lg{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-lg-start,.layout-align-lg-start-center,.layout-align-lg-start-end,.layout-align-lg-start-start,.layout-align-lg-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-lg-center,.layout-align-lg-center-center,.layout-align-lg-center-end,.layout-align-lg-center-start,.layout-align-lg-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-lg-end,.layout-align-lg-end-center,.layout-align-lg-end-end,.layout-align-lg-end-start,.layout-align-lg-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-lg-space-around,.layout-align-lg-space-around-center,.layout-align-lg-space-around-end,.layout-align-lg-space-around-start,.layout-align-lg-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-lg-space-between,.layout-align-lg-space-between-center,.layout-align-lg-space-between-end,.layout-align-lg-space-between-start,.layout-align-lg-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-lg-center-start,.layout-align-lg-end-start,.layout-align-lg-space-around-start,.layout-align-lg-space-between-start,.layout-align-lg-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-lg-center-center,.layout-align-lg-end-center,.layout-align-lg-space-around-center,.layout-align-lg-space-between-center,.layout-align-lg-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-lg-center-center>*,.layout-align-lg-end-center>*,.layout-align-lg-space-around-center>*,.layout-align-lg-space-between-center>*,.layout-align-lg-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-lg-center-end,.layout-align-lg-end-end,.layout-align-lg-space-around-end,.layout-align-lg-space-between-end,.layout-align-lg-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-lg-center-stretch,.layout-align-lg-end-stretch,.layout-align-lg-space-around-stretch,.layout-align-lg-space-between-stretch,.layout-align-lg-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-lg{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-lg-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-lg-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-lg-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-lg-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-lg-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-lg-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-lg-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-lg-row>.flex-lg-0,.layout-row>.flex-lg-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-lg-0,.layout-lg-column>.flex-lg-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-lg-5,.layout-lg-row>.flex-lg-5,.layout-row>.flex-lg-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-5,.layout-lg-column>.flex-lg-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-lg-10,.layout-lg-row>.flex-lg-10,.layout-row>.flex-lg-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-10,.layout-lg-column>.flex-lg-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-lg-15,.layout-lg-row>.flex-lg-15,.layout-row>.flex-lg-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-15,.layout-lg-column>.flex-lg-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-lg-20,.layout-lg-row>.flex-lg-20,.layout-row>.flex-lg-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-20,.layout-lg-column>.flex-lg-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-lg-25,.layout-lg-row>.flex-lg-25,.layout-row>.flex-lg-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-25,.layout-lg-column>.flex-lg-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-lg-30,.layout-lg-row>.flex-lg-30,.layout-row>.flex-lg-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-30,.layout-lg-column>.flex-lg-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-lg-35,.layout-lg-row>.flex-lg-35,.layout-row>.flex-lg-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-35,.layout-lg-column>.flex-lg-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-lg-40,.layout-lg-row>.flex-lg-40,.layout-row>.flex-lg-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-40,.layout-lg-column>.flex-lg-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-lg-45,.layout-lg-row>.flex-lg-45,.layout-row>.flex-lg-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-45,.layout-lg-column>.flex-lg-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-lg-50,.layout-lg-row>.flex-lg-50,.layout-row>.flex-lg-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-50,.layout-lg-column>.flex-lg-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-lg-55,.layout-lg-row>.flex-lg-55,.layout-row>.flex-lg-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-55,.layout-lg-column>.flex-lg-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-lg-60,.layout-lg-row>.flex-lg-60,.layout-row>.flex-lg-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-60,.layout-lg-column>.flex-lg-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-lg-65,.layout-lg-row>.flex-lg-65,.layout-row>.flex-lg-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-65,.layout-lg-column>.flex-lg-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-lg-70,.layout-lg-row>.flex-lg-70,.layout-row>.flex-lg-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-70,.layout-lg-column>.flex-lg-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-lg-75,.layout-lg-row>.flex-lg-75,.layout-row>.flex-lg-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-75,.layout-lg-column>.flex-lg-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-lg-80,.layout-lg-row>.flex-lg-80,.layout-row>.flex-lg-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-80,.layout-lg-column>.flex-lg-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-lg-85,.layout-lg-row>.flex-lg-85,.layout-row>.flex-lg-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-85,.layout-lg-column>.flex-lg-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-lg-90,.layout-lg-row>.flex-lg-90,.layout-row>.flex-lg-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-90,.layout-lg-column>.flex-lg-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-lg-95,.layout-lg-row>.flex-lg-95,.layout-row>.flex-lg-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-lg-95,.layout-lg-column>.flex-lg-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-lg-100,.layout-column>.flex-lg-100,.layout-lg-column>.flex-lg-100,.layout-lg-row>.flex-lg-100,.layout-row>.flex-lg-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-lg-row>.flex-lg-33,.layout-row>.flex-lg-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-lg-row>.flex-lg-66,.layout-row>.flex-lg-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-lg-row>.flex,.layout-row>.flex{min-width:0}.layout-column>.flex-lg-33,.layout-lg-column>.flex-lg-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-lg-66,.layout-lg-column>.flex-lg-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-lg-column>.flex{min-height:0}.layout-lg,.layout-lg-column,.layout-lg-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-lg-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-lg-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media (min-width:1920px){.flex-order-gt-lg--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-gt-lg--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-gt-lg--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-gt-lg--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-gt-lg--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-gt-lg--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-gt-lg--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-gt-lg--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-gt-lg--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-gt-lg--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-gt-lg--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-gt-lg--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-gt-lg--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-gt-lg--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-gt-lg--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-gt-lg--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-gt-lg--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-gt-lg--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-gt-lg--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-gt-lg--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-gt-lg-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-gt-lg-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-gt-lg-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-gt-lg-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-gt-lg-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-gt-lg-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-gt-lg-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-gt-lg-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-gt-lg-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-gt-lg-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-gt-lg-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-gt-lg-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-gt-lg-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-gt-lg-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-gt-lg-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-gt-lg-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-gt-lg-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-gt-lg-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-gt-lg-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-gt-lg-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-gt-lg-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-gt-lg-0,.offset-gt-lg-0{margin-left:0}[dir=rtl] .flex-offset-gt-lg-0,[dir=rtl] .offset-gt-lg-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-gt-lg-5,.offset-gt-lg-5{margin-left:5%}[dir=rtl] .flex-offset-gt-lg-5,[dir=rtl] .offset-gt-lg-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-gt-lg-10,.offset-gt-lg-10{margin-left:10%}[dir=rtl] .flex-offset-gt-lg-10,[dir=rtl] .offset-gt-lg-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-gt-lg-15,.offset-gt-lg-15{margin-left:15%}[dir=rtl] .flex-offset-gt-lg-15,[dir=rtl] .offset-gt-lg-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-gt-lg-20,.offset-gt-lg-20{margin-left:20%}[dir=rtl] .flex-offset-gt-lg-20,[dir=rtl] .offset-gt-lg-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-gt-lg-25,.offset-gt-lg-25{margin-left:25%}[dir=rtl] .flex-offset-gt-lg-25,[dir=rtl] .offset-gt-lg-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-gt-lg-30,.offset-gt-lg-30{margin-left:30%}[dir=rtl] .flex-offset-gt-lg-30,[dir=rtl] .offset-gt-lg-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-gt-lg-35,.offset-gt-lg-35{margin-left:35%}[dir=rtl] .flex-offset-gt-lg-35,[dir=rtl] .offset-gt-lg-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-gt-lg-40,.offset-gt-lg-40{margin-left:40%}[dir=rtl] .flex-offset-gt-lg-40,[dir=rtl] .offset-gt-lg-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-gt-lg-45,.offset-gt-lg-45{margin-left:45%}[dir=rtl] .flex-offset-gt-lg-45,[dir=rtl] .offset-gt-lg-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-gt-lg-50,.offset-gt-lg-50{margin-left:50%}[dir=rtl] .flex-offset-gt-lg-50,[dir=rtl] .offset-gt-lg-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-gt-lg-55,.offset-gt-lg-55{margin-left:55%}[dir=rtl] .flex-offset-gt-lg-55,[dir=rtl] .offset-gt-lg-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-gt-lg-60,.offset-gt-lg-60{margin-left:60%}[dir=rtl] .flex-offset-gt-lg-60,[dir=rtl] .offset-gt-lg-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-gt-lg-65,.offset-gt-lg-65{margin-left:65%}[dir=rtl] .flex-offset-gt-lg-65,[dir=rtl] .offset-gt-lg-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-gt-lg-70,.offset-gt-lg-70{margin-left:70%}[dir=rtl] .flex-offset-gt-lg-70,[dir=rtl] .offset-gt-lg-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-gt-lg-75,.offset-gt-lg-75{margin-left:75%}[dir=rtl] .flex-offset-gt-lg-75,[dir=rtl] .offset-gt-lg-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-gt-lg-80,.offset-gt-lg-80{margin-left:80%}[dir=rtl] .flex-offset-gt-lg-80,[dir=rtl] .offset-gt-lg-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-gt-lg-85,.offset-gt-lg-85{margin-left:85%}[dir=rtl] .flex-offset-gt-lg-85,[dir=rtl] .offset-gt-lg-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-gt-lg-90,.offset-gt-lg-90{margin-left:90%}[dir=rtl] .flex-offset-gt-lg-90,[dir=rtl] .offset-gt-lg-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-gt-lg-95,.offset-gt-lg-95{margin-left:95%}[dir=rtl] .flex-offset-gt-lg-95,[dir=rtl] .offset-gt-lg-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-gt-lg-33,.offset-gt-lg-33{margin-left:calc(100% / 3)}.flex-offset-gt-lg-66,.offset-gt-lg-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-gt-lg-66,[dir=rtl] .offset-gt-lg-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-gt-lg{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-gt-lg-start,.layout-align-gt-lg-start-center,.layout-align-gt-lg-start-end,.layout-align-gt-lg-start-start,.layout-align-gt-lg-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-gt-lg-center,.layout-align-gt-lg-center-center,.layout-align-gt-lg-center-end,.layout-align-gt-lg-center-start,.layout-align-gt-lg-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-gt-lg-end,.layout-align-gt-lg-end-center,.layout-align-gt-lg-end-end,.layout-align-gt-lg-end-start,.layout-align-gt-lg-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-gt-lg-space-around,.layout-align-gt-lg-space-around-center,.layout-align-gt-lg-space-around-end,.layout-align-gt-lg-space-around-start,.layout-align-gt-lg-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-gt-lg-space-between,.layout-align-gt-lg-space-between-center,.layout-align-gt-lg-space-between-end,.layout-align-gt-lg-space-between-start,.layout-align-gt-lg-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-gt-lg-center-start,.layout-align-gt-lg-end-start,.layout-align-gt-lg-space-around-start,.layout-align-gt-lg-space-between-start,.layout-align-gt-lg-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-gt-lg-center-center,.layout-align-gt-lg-end-center,.layout-align-gt-lg-space-around-center,.layout-align-gt-lg-space-between-center,.layout-align-gt-lg-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-gt-lg-center-center>*,.layout-align-gt-lg-end-center>*,.layout-align-gt-lg-space-around-center>*,.layout-align-gt-lg-space-between-center>*,.layout-align-gt-lg-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-gt-lg-center-end,.layout-align-gt-lg-end-end,.layout-align-gt-lg-space-around-end,.layout-align-gt-lg-space-between-end,.layout-align-gt-lg-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-gt-lg-center-stretch,.layout-align-gt-lg-end-stretch,.layout-align-gt-lg-space-around-stretch,.layout-align-gt-lg-space-between-stretch,.layout-align-gt-lg-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-gt-lg{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-gt-lg-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-gt-lg-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-lg-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-gt-lg-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-gt-lg-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-gt-lg-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-gt-lg-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-gt-lg-row>.flex-gt-lg-0,.layout-row>.flex-gt-lg-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-gt-lg-0,.layout-gt-lg-column>.flex-gt-lg-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-gt-lg-5,.layout-gt-lg-row>.flex-gt-lg-5,.layout-row>.flex-gt-lg-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-5,.layout-gt-lg-column>.flex-gt-lg-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-gt-lg-10,.layout-gt-lg-row>.flex-gt-lg-10,.layout-row>.flex-gt-lg-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-10,.layout-gt-lg-column>.flex-gt-lg-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-gt-lg-15,.layout-gt-lg-row>.flex-gt-lg-15,.layout-row>.flex-gt-lg-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-15,.layout-gt-lg-column>.flex-gt-lg-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-gt-lg-20,.layout-gt-lg-row>.flex-gt-lg-20,.layout-row>.flex-gt-lg-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-20,.layout-gt-lg-column>.flex-gt-lg-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-gt-lg-25,.layout-gt-lg-row>.flex-gt-lg-25,.layout-row>.flex-gt-lg-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-25,.layout-gt-lg-column>.flex-gt-lg-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-gt-lg-30,.layout-gt-lg-row>.flex-gt-lg-30,.layout-row>.flex-gt-lg-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-30,.layout-gt-lg-column>.flex-gt-lg-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-gt-lg-35,.layout-gt-lg-row>.flex-gt-lg-35,.layout-row>.flex-gt-lg-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-35,.layout-gt-lg-column>.flex-gt-lg-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-gt-lg-40,.layout-gt-lg-row>.flex-gt-lg-40,.layout-row>.flex-gt-lg-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-40,.layout-gt-lg-column>.flex-gt-lg-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-gt-lg-45,.layout-gt-lg-row>.flex-gt-lg-45,.layout-row>.flex-gt-lg-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-45,.layout-gt-lg-column>.flex-gt-lg-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-gt-lg-50,.layout-gt-lg-row>.flex-gt-lg-50,.layout-row>.flex-gt-lg-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-50,.layout-gt-lg-column>.flex-gt-lg-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-gt-lg-55,.layout-gt-lg-row>.flex-gt-lg-55,.layout-row>.flex-gt-lg-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-55,.layout-gt-lg-column>.flex-gt-lg-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-gt-lg-60,.layout-gt-lg-row>.flex-gt-lg-60,.layout-row>.flex-gt-lg-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-60,.layout-gt-lg-column>.flex-gt-lg-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-gt-lg-65,.layout-gt-lg-row>.flex-gt-lg-65,.layout-row>.flex-gt-lg-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-65,.layout-gt-lg-column>.flex-gt-lg-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-gt-lg-70,.layout-gt-lg-row>.flex-gt-lg-70,.layout-row>.flex-gt-lg-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-70,.layout-gt-lg-column>.flex-gt-lg-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-gt-lg-75,.layout-gt-lg-row>.flex-gt-lg-75,.layout-row>.flex-gt-lg-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-75,.layout-gt-lg-column>.flex-gt-lg-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-gt-lg-80,.layout-gt-lg-row>.flex-gt-lg-80,.layout-row>.flex-gt-lg-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-80,.layout-gt-lg-column>.flex-gt-lg-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-gt-lg-85,.layout-gt-lg-row>.flex-gt-lg-85,.layout-row>.flex-gt-lg-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-85,.layout-gt-lg-column>.flex-gt-lg-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-gt-lg-90,.layout-gt-lg-row>.flex-gt-lg-90,.layout-row>.flex-gt-lg-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-90,.layout-gt-lg-column>.flex-gt-lg-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-gt-lg-95,.layout-gt-lg-row>.flex-gt-lg-95,.layout-row>.flex-gt-lg-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-gt-lg-95,.layout-gt-lg-column>.flex-gt-lg-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-gt-lg-100,.layout-column>.flex-gt-lg-100,.layout-gt-lg-column>.flex-gt-lg-100,.layout-gt-lg-row>.flex-gt-lg-100,.layout-row>.flex-gt-lg-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-gt-lg-row>.flex-gt-lg-33,.layout-row>.flex-gt-lg-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-gt-lg-row>.flex-gt-lg-66,.layout-row>.flex-gt-lg-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-gt-lg-row>.flex,.layout-row>.flex{min-width:0}.layout-column>.flex-gt-lg-33,.layout-gt-lg-column>.flex-gt-lg-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-gt-lg-66,.layout-gt-lg-column>.flex-gt-lg-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-gt-lg-column>.flex{min-height:0}.layout-gt-lg,.layout-gt-lg-column,.layout-gt-lg-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-gt-lg-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-gt-lg-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex-order-xl--20{-webkit-order:-20;-ms-flex-order:-20;order:-20}.flex-order-xl--19{-webkit-order:-19;-ms-flex-order:-19;order:-19}.flex-order-xl--18{-webkit-order:-18;-ms-flex-order:-18;order:-18}.flex-order-xl--17{-webkit-order:-17;-ms-flex-order:-17;order:-17}.flex-order-xl--16{-webkit-order:-16;-ms-flex-order:-16;order:-16}.flex-order-xl--15{-webkit-order:-15;-ms-flex-order:-15;order:-15}.flex-order-xl--14{-webkit-order:-14;-ms-flex-order:-14;order:-14}.flex-order-xl--13{-webkit-order:-13;-ms-flex-order:-13;order:-13}.flex-order-xl--12{-webkit-order:-12;-ms-flex-order:-12;order:-12}.flex-order-xl--11{-webkit-order:-11;-ms-flex-order:-11;order:-11}.flex-order-xl--10{-webkit-order:-10;-ms-flex-order:-10;order:-10}.flex-order-xl--9{-webkit-order:-9;-ms-flex-order:-9;order:-9}.flex-order-xl--8{-webkit-order:-8;-ms-flex-order:-8;order:-8}.flex-order-xl--7{-webkit-order:-7;-ms-flex-order:-7;order:-7}.flex-order-xl--6{-webkit-order:-6;-ms-flex-order:-6;order:-6}.flex-order-xl--5{-webkit-order:-5;-ms-flex-order:-5;order:-5}.flex-order-xl--4{-webkit-order:-4;-ms-flex-order:-4;order:-4}.flex-order-xl--3{-webkit-order:-3;-ms-flex-order:-3;order:-3}.flex-order-xl--2{-webkit-order:-2;-ms-flex-order:-2;order:-2}.flex-order-xl--1{-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-order-xl-0{-webkit-order:0;-ms-flex-order:0;order:0}.flex-order-xl-1{-webkit-order:1;-ms-flex-order:1;order:1}.flex-order-xl-2{-webkit-order:2;-ms-flex-order:2;order:2}.flex-order-xl-3{-webkit-order:3;-ms-flex-order:3;order:3}.flex-order-xl-4{-webkit-order:4;-ms-flex-order:4;order:4}.flex-order-xl-5{-webkit-order:5;-ms-flex-order:5;order:5}.flex-order-xl-6{-webkit-order:6;-ms-flex-order:6;order:6}.flex-order-xl-7{-webkit-order:7;-ms-flex-order:7;order:7}.flex-order-xl-8{-webkit-order:8;-ms-flex-order:8;order:8}.flex-order-xl-9{-webkit-order:9;-ms-flex-order:9;order:9}.flex-order-xl-10{-webkit-order:10;-ms-flex-order:10;order:10}.flex-order-xl-11{-webkit-order:11;-ms-flex-order:11;order:11}.flex-order-xl-12{-webkit-order:12;-ms-flex-order:12;order:12}.flex-order-xl-13{-webkit-order:13;-ms-flex-order:13;order:13}.flex-order-xl-14{-webkit-order:14;-ms-flex-order:14;order:14}.flex-order-xl-15{-webkit-order:15;-ms-flex-order:15;order:15}.flex-order-xl-16{-webkit-order:16;-ms-flex-order:16;order:16}.flex-order-xl-17{-webkit-order:17;-ms-flex-order:17;order:17}.flex-order-xl-18{-webkit-order:18;-ms-flex-order:18;order:18}.flex-order-xl-19{-webkit-order:19;-ms-flex-order:19;order:19}.flex-order-xl-20{-webkit-order:20;-ms-flex-order:20;order:20}.flex-offset-xl-0,.offset-xl-0{margin-left:0}[dir=rtl] .flex-offset-xl-0,[dir=rtl] .offset-xl-0{margin-left:auto;margin-left:initial;margin-right:0}.flex-offset-xl-5,.offset-xl-5{margin-left:5%}[dir=rtl] .flex-offset-xl-5,[dir=rtl] .offset-xl-5{margin-left:auto;margin-left:initial;margin-right:5%}.flex-offset-xl-10,.offset-xl-10{margin-left:10%}[dir=rtl] .flex-offset-xl-10,[dir=rtl] .offset-xl-10{margin-left:auto;margin-left:initial;margin-right:10%}.flex-offset-xl-15,.offset-xl-15{margin-left:15%}[dir=rtl] .flex-offset-xl-15,[dir=rtl] .offset-xl-15{margin-left:auto;margin-left:initial;margin-right:15%}.flex-offset-xl-20,.offset-xl-20{margin-left:20%}[dir=rtl] .flex-offset-xl-20,[dir=rtl] .offset-xl-20{margin-left:auto;margin-left:initial;margin-right:20%}.flex-offset-xl-25,.offset-xl-25{margin-left:25%}[dir=rtl] .flex-offset-xl-25,[dir=rtl] .offset-xl-25{margin-left:auto;margin-left:initial;margin-right:25%}.flex-offset-xl-30,.offset-xl-30{margin-left:30%}[dir=rtl] .flex-offset-xl-30,[dir=rtl] .offset-xl-30{margin-left:auto;margin-left:initial;margin-right:30%}.flex-offset-xl-35,.offset-xl-35{margin-left:35%}[dir=rtl] .flex-offset-xl-35,[dir=rtl] .offset-xl-35{margin-left:auto;margin-left:initial;margin-right:35%}.flex-offset-xl-40,.offset-xl-40{margin-left:40%}[dir=rtl] .flex-offset-xl-40,[dir=rtl] .offset-xl-40{margin-left:auto;margin-left:initial;margin-right:40%}.flex-offset-xl-45,.offset-xl-45{margin-left:45%}[dir=rtl] .flex-offset-xl-45,[dir=rtl] .offset-xl-45{margin-left:auto;margin-left:initial;margin-right:45%}.flex-offset-xl-50,.offset-xl-50{margin-left:50%}[dir=rtl] .flex-offset-xl-50,[dir=rtl] .offset-xl-50{margin-left:auto;margin-left:initial;margin-right:50%}.flex-offset-xl-55,.offset-xl-55{margin-left:55%}[dir=rtl] .flex-offset-xl-55,[dir=rtl] .offset-xl-55{margin-left:auto;margin-left:initial;margin-right:55%}.flex-offset-xl-60,.offset-xl-60{margin-left:60%}[dir=rtl] .flex-offset-xl-60,[dir=rtl] .offset-xl-60{margin-left:auto;margin-left:initial;margin-right:60%}.flex-offset-xl-65,.offset-xl-65{margin-left:65%}[dir=rtl] .flex-offset-xl-65,[dir=rtl] .offset-xl-65{margin-left:auto;margin-left:initial;margin-right:65%}.flex-offset-xl-70,.offset-xl-70{margin-left:70%}[dir=rtl] .flex-offset-xl-70,[dir=rtl] .offset-xl-70{margin-left:auto;margin-left:initial;margin-right:70%}.flex-offset-xl-75,.offset-xl-75{margin-left:75%}[dir=rtl] .flex-offset-xl-75,[dir=rtl] .offset-xl-75{margin-left:auto;margin-left:initial;margin-right:75%}.flex-offset-xl-80,.offset-xl-80{margin-left:80%}[dir=rtl] .flex-offset-xl-80,[dir=rtl] .offset-xl-80{margin-left:auto;margin-left:initial;margin-right:80%}.flex-offset-xl-85,.offset-xl-85{margin-left:85%}[dir=rtl] .flex-offset-xl-85,[dir=rtl] .offset-xl-85{margin-left:auto;margin-left:initial;margin-right:85%}.flex-offset-xl-90,.offset-xl-90{margin-left:90%}[dir=rtl] .flex-offset-xl-90,[dir=rtl] .offset-xl-90{margin-left:auto;margin-left:initial;margin-right:90%}.flex-offset-xl-95,.offset-xl-95{margin-left:95%}[dir=rtl] .flex-offset-xl-95,[dir=rtl] .offset-xl-95{margin-left:auto;margin-left:initial;margin-right:95%}.flex-offset-xl-33,.offset-xl-33{margin-left:calc(100% / 3)}.flex-offset-xl-66,.offset-xl-66{margin-left:calc(200% / 3)}[dir=rtl] .flex-offset-xl-66,[dir=rtl] .offset-xl-66{margin-left:auto;margin-left:initial;margin-right:calc(200% / 3)}.layout-align-xl{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.layout-align-xl-start,.layout-align-xl-start-center,.layout-align-xl-start-end,.layout-align-xl-start-start,.layout-align-xl-start-stretch{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.layout-align-xl-center,.layout-align-xl-center-center,.layout-align-xl-center-end,.layout-align-xl-center-start,.layout-align-xl-center-stretch{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-align-xl-end,.layout-align-xl-end-center,.layout-align-xl-end-end,.layout-align-xl-end-start,.layout-align-xl-end-stretch{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.layout-align-xl-space-around,.layout-align-xl-space-around-center,.layout-align-xl-space-around-end,.layout-align-xl-space-around-start,.layout-align-xl-space-around-stretch{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.layout-align-xl-space-between,.layout-align-xl-space-between-center,.layout-align-xl-space-between-end,.layout-align-xl-space-between-start,.layout-align-xl-space-between-stretch{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.layout-align-xl-center-start,.layout-align-xl-end-start,.layout-align-xl-space-around-start,.layout-align-xl-space-between-start,.layout-align-xl-start-start{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layout-align-xl-center-center,.layout-align-xl-end-center,.layout-align-xl-space-around-center,.layout-align-xl-space-between-center,.layout-align-xl-start-center{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.layout-align-xl-center-center>*,.layout-align-xl-end-center>*,.layout-align-xl-space-around-center>*,.layout-align-xl-space-between-center>*,.layout-align-xl-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-xl-center-end,.layout-align-xl-end-end,.layout-align-xl-space-around-end,.layout-align-xl-space-between-end,.layout-align-xl-start-end{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.layout-align-xl-center-stretch,.layout-align-xl-end-stretch,.layout-align-xl-space-around-stretch,.layout-align-xl-space-between-stretch,.layout-align-xl-start-stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex-xl{-webkit-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.flex-xl-grow{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;box-sizing:border-box}.flex-xl-initial{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-xl-auto{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;box-sizing:border-box}.flex-xl-none{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}.flex-xl-noshrink{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;box-sizing:border-box}.flex-xl-nogrow{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;box-sizing:border-box}.flex-xl-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box}.layout-row>.flex-xl-0,.layout-xl-row>.flex-xl-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:0;max-height:100%;box-sizing:border-box;min-width:0}.layout-column>.flex-xl-0,.layout-xl-column>.flex-xl-0{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;max-width:100%;max-height:0;box-sizing:border-box;min-height:0}.flex-xl-5,.layout-row>.flex-xl-5,.layout-xl-row>.flex-xl-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-5,.layout-xl-column>.flex-xl-5{-webkit-flex:1 1 5%;-ms-flex:1 1 5%;flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-xl-10,.layout-row>.flex-xl-10,.layout-xl-row>.flex-xl-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-10,.layout-xl-column>.flex-xl-10{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-xl-15,.layout-row>.flex-xl-15,.layout-xl-row>.flex-xl-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-15,.layout-xl-column>.flex-xl-15{-webkit-flex:1 1 15%;-ms-flex:1 1 15%;flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-xl-20,.layout-row>.flex-xl-20,.layout-xl-row>.flex-xl-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-20,.layout-xl-column>.flex-xl-20{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-xl-25,.layout-row>.flex-xl-25,.layout-xl-row>.flex-xl-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-25,.layout-xl-column>.flex-xl-25{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-xl-30,.layout-row>.flex-xl-30,.layout-xl-row>.flex-xl-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-30,.layout-xl-column>.flex-xl-30{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-xl-35,.layout-row>.flex-xl-35,.layout-xl-row>.flex-xl-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-35,.layout-xl-column>.flex-xl-35{-webkit-flex:1 1 35%;-ms-flex:1 1 35%;flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-xl-40,.layout-row>.flex-xl-40,.layout-xl-row>.flex-xl-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-40,.layout-xl-column>.flex-xl-40{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-xl-45,.layout-row>.flex-xl-45,.layout-xl-row>.flex-xl-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-45,.layout-xl-column>.flex-xl-45{-webkit-flex:1 1 45%;-ms-flex:1 1 45%;flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-xl-50,.layout-row>.flex-xl-50,.layout-xl-row>.flex-xl-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-50,.layout-xl-column>.flex-xl-50{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-xl-55,.layout-row>.flex-xl-55,.layout-xl-row>.flex-xl-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-55,.layout-xl-column>.flex-xl-55{-webkit-flex:1 1 55%;-ms-flex:1 1 55%;flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-xl-60,.layout-row>.flex-xl-60,.layout-xl-row>.flex-xl-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-60,.layout-xl-column>.flex-xl-60{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-xl-65,.layout-row>.flex-xl-65,.layout-xl-row>.flex-xl-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-65,.layout-xl-column>.flex-xl-65{-webkit-flex:1 1 65%;-ms-flex:1 1 65%;flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-xl-70,.layout-row>.flex-xl-70,.layout-xl-row>.flex-xl-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-70,.layout-xl-column>.flex-xl-70{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-xl-75,.layout-row>.flex-xl-75,.layout-xl-row>.flex-xl-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-75,.layout-xl-column>.flex-xl-75{-webkit-flex:1 1 75%;-ms-flex:1 1 75%;flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-xl-80,.layout-row>.flex-xl-80,.layout-xl-row>.flex-xl-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-80,.layout-xl-column>.flex-xl-80{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-xl-85,.layout-row>.flex-xl-85,.layout-xl-row>.flex-xl-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-85,.layout-xl-column>.flex-xl-85{-webkit-flex:1 1 85%;-ms-flex:1 1 85%;flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-xl-90,.layout-row>.flex-xl-90,.layout-xl-row>.flex-xl-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-90,.layout-xl-column>.flex-xl-90{-webkit-flex:1 1 90%;-ms-flex:1 1 90%;flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-xl-95,.layout-row>.flex-xl-95,.layout-xl-row>.flex-xl-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-xl-95,.layout-xl-column>.flex-xl-95{-webkit-flex:1 1 95%;-ms-flex:1 1 95%;flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-xl-100,.layout-column>.flex-xl-100,.layout-row>.flex-xl-100,.layout-xl-column>.flex-xl-100,.layout-xl-row>.flex-xl-100{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-row>.flex-xl-33,.layout-xl-row>.flex-xl-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-row>.flex-xl-66,.layout-xl-row>.flex-xl-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-row>.flex,.layout-xl-row>.flex{min-width:0}.layout-column>.flex-xl-33,.layout-xl-column>.flex-xl-33{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-xl-66,.layout-xl-column>.flex-xl-66{-webkit-flex:1 1 66.66%;-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex,.layout-xl-column>.flex{min-height:0}.layout-xl,.layout-xl-column,.layout-xl-row{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.layout-xl-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.layout-xl-row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.hide-gt-lg:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),.hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),.hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),.hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),.hide-xl:not(.show-xl):not(.show-gt-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show),.hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show){display:none}}@media print{.hide-print:not(.show-print):not(.show){display:none!important}}", ""]);
	
	// exports


/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./modules/asset/less/demo.less ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./demo.less */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./demo.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./demo.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/*!*********************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./modules/asset/less/demo.less ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 16px;\n}\n.public-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ndiv,\np,\nul,\nli,\nol,\nsection,\ntextarea,\ninput {\n  padding: 0;\n  margin: 0;\n}\nul,\nol {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\na:link,\na:visited,\na:hover,\na:active {\n  color: #ccc;\n}\n.nav-active {\n  background: #106cc8;\n  color: #fff !important;\n  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.clearfix:after,\n.clearfix:before {\n  content: '';\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\ndiv,\ntextarea {\n  box-sizing: border-box;\n}\ncode,\npre {\n  font-family: Source Code Pro, Consolas, Menlo, Monaco, Courier New, monospace;\n}\n.public-btns {\n  margin: 5px 0;\n}\n.public-btns .btn-item {\n  cursor: pointer;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 3px;\n  padding: 6px 12px;\n  float: right;\n  margin-left: 10px;\n}\n.public-btns .confirm-btn {\n  color: #fff;\n  background: #009a61;\n}\n.public-btns .confirm-btn:hover {\n  background: #006741;\n}\n", ""]);
	
	// exports


/***/ },
/* 8 */
/*!****************************************!*\
  !*** ./modules/asset/less/public.less ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./public.less */ 9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./public.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./public.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/*!***********************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./modules/asset/less/public.less ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Created by XRene on 16/5/26.\n */\n.public-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 34px;\n  line-height: 34px;\n  box-sizing: border-box;\n  text-align: center;\n  background: #ccc;\n}\n.public-side {\n  position: absolute;\n  left: 0;\n  width: 150px;\n  top: 34px;\n  bottom: 0;\n  box-sizing: border-box;\n}\n.public-side .public-side-nav a {\n  display: block;\n  padding: 8px 10px;\n  text-align: center;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.public-main {\n  position: absolute;\n  top: 34px;\n  left: 150px;\n  right: 0;\n  bottom: 0;\n  padding: 20px;\n  box-sizing: border-box;\n  background: #fff;\n  overflow-y: auto;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/*!**************************************************!*\
  !*** ./modules/asset/less/common-directive.less ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./common-directive.less */ 11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./common-directive.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./common-directive.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/*!*********************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./modules/asset/less/common-directive.less ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Created by XRene on 16/5/27.\n */\n/**\n * Created by XRene on 16/5/31.\n */\n.public-mark-down {\n  position: relative;\n}\n.public-mark-down .public-contenteditable-write {\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  height: 400px;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n  border-right: none;\n}\n.public-mark-down .public-contenteditable-write .public-write-box {\n  border: none;\n  width: 100%;\n  height: 100%;\n  padding: 6px 12px;\n}\n.public-mark-down .public-contenteditable-show {\n  float: right;\n  width: 50%;\n  height: 400px;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n  padding: 10px 20px;\n}\n.public-mark-down .common-directive-h1,\n.public-mark-down .common-directive-h2 {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.public-mark-down .common-directive-h1:first-child,\n.public-mark-down .common-directive-h2:first-child {\n  margin: 0;\n}\n.public-mark-down .common-directive-p {\n  margin-top: 1.5em;\n}\n.public-mark-down .common-directive-pcode {\n  background: #f6f6f6;\n  padding: 1em;\n  max-height: 35em;\n  margin: 1.5em 0;\n}\n.public-mark-down code {\n  color: #c7254e;\n  border-radius: 3px;\n}\n.public-dropdown {\n  position: relative;\n  display: inline-block;\n  padding: 6px 12px;\n  background: #f8f9fb;\n  color: #646c7b;\n  border-radius: 2px;\n  width: 8rem;\n}\n.public-dropdown .dropdown-title {\n  position: relative;\n  height: 32px;\n  line-height: 32px;\n}\n.public-dropdown .dropdown-title .fa-sort-desc {\n  position: absolute;\n  top: 19%;\n  right: 10px;\n}\n.public-dropdown .dropdown-box {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  display: none;\n  z-index: 500;\n}\n.public-dropdown .dropdown-list .list-item {\n  color: #646c7b;\n  background: #e9f3fd;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n.public-dropdown .dropdown-list .list-item:hover {\n  background: #007fff;\n  color: #f8f9fb;\n}\n.public-top-tips {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-34px);\n  transition: all 0.5s ease-in-out;\n}\n.public-top-tips p {\n  box-sizing: border-box;\n  height: 34px;\n  line-height: 34px;\n  padding-left: 18px;\n  background: #c7254e;\n  color: #fff;\n}\n.top-tips-show {\n  transform: translateY(0);\n}\n.public-side-tips {\n  position: fixed;\n  top: 34px;\n  right: 0;\n  transform: translateX(120px);\n  transition: all 0.5s ease-in-out;\n}\n.public-side-tips p {\n  box-sizing: border-box;\n  height: 34px;\n  line-height: 34px;\n  background: #c7254e;\n  color: #fff;\n  width: 120px;\n  padding: 6px 12px;\n  border-radius: 5px;\n}\n.side-tips-show {\n  transform: translateX(0px);\n}\n.public-loading {\n  position: relative;\n}\n.public-loading .loading-container {\n  width: 55px;\n  margin: 0 auto;\n}\n.public-loading div[class*=\"rect\"] {\n  width: 4px;\n  height: 15px;\n  background: #c7254e;\n  display: inline-block;\n  margin-right: 5px;\n}\n.public-loading .rect1 {\n  animation: loading 1.5s ease .1s;\n  animation-iteration-count: infinite;\n}\n.public-loading .rect2 {\n  animation: loading 1.5s ease .2s;\n  animation-iteration-count: infinite;\n}\n.public-loading .rect3 {\n  animation: loading 1.5s ease .3s;\n  animation-iteration-count: infinite;\n}\n.public-loading .rect4 {\n  animation: loading 1.5s ease .4s;\n  animation-iteration-count: infinite;\n}\n.public-loading .rect5 {\n  animation: loading 1.5s ease .5s;\n  animation-iteration-count: infinite;\n}\n@keyframes loading {\n  0% {\n    transform: scale(1);\n  }\n  20% {\n    transform: scale(1.7);\n  }\n  30% {\n    transfrom: scale(1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
/*!****************************************!*\
  !*** ./modules/asset/less/record.less ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./record.less */ 13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./record.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./record.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/*!***********************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./modules/asset/less/record.less ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Created by XRene on 16/5/31.\n */\n.index-wrapper {\n  position: relative;\n  background: #fff;\n}\n.index-wrapper .index-form {\n  display: flex;\n  margin: 12px 0;\n}\n.index-wrapper .index-form input {\n  flex: 1;\n  padding: 12px;\n  box-sizing: border-box;\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  margin-right: 20px;\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
/*!**************************************!*\
  !*** ./modules/asset/less/todo.less ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./todo.less */ 15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./todo.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./todo.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/*!*********************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./modules/asset/less/todo.less ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Created by XRene on 16/5/31.\n */\n.todo-wrapper .todo-box {\n  width: 75%;\n  margin: 0 auto;\n}\n.todo-wrapper .todo-box .box-title {\n  position: relative;\n}\n.todo-wrapper .todo-box .todo-list {\n  position: relative;\n}\n.todo-wrapper .todo-box .todo-list:before {\n  position: absolute;\n  left: -1rem;\n  top: -8px;\n  bottom: -9px;\n  content: '';\n  border-left: 2px solid #f3f3f3;\n}\n.todo-wrapper .todo-box .todo-list .list-item {\n  display: flex;\n  flex-direction: column;\n  margin: 16px 0;\n}\n.todo-wrapper .todo-box .todo-list .list-item p {\n  display: flex;\n  width: 100%;\n  height: 34px;\n  line-height: 34px;\n  background-color: #f8f9fb;\n  color: #646c7b;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 5px 4px 15px #333;\n  transition: all 0.2s ease-in;\n}\n.todo-wrapper .todo-box .todo-list .list-item p:hover {\n  background: #007fff;\n  color: #f8f9fb;\n  transform: translate(-2px, -2px);\n}\n.todo-wrapper .todo-box .todo-list .list-item p .item-content {\n  flex: 2 0 0;\n  padding-left: 1rem;\n}\n.todo-wrapper .todo-box .todo-list .list-item p .item-time {\n  flex: 1 0 0;\n}\n.todo-wrapper .todo-box .todo-list .list-item .item-box {\n  height: 0;\n  transition: all 1s ease-in-out;\n}\n.todo-wrapper .todo-box .todo-list .list-item .item-box-active {\n  height: 300px;\n  overflow-y: auto;\n  padding: 10px;\n}\n@keyframes move {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-2px, -2px);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/*!*************************!*\
  !*** ./modules/main.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by XRene on 16/4/2.
	 */
	var materialSVG = __webpack_require__(/*! ./lib/material_svg */ 17);
	var commonDirective = __webpack_require__(/*! ./directives/common/common_directive */ 18);
	//var CommonService = require('./services/common/common_service');
	
	module.exports = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'commonService', 'commonDirective']).config(__webpack_require__(/*! ./router */ 20)); //router配置
	
	angular.bootstrap(document, ['myApp']);

/***/ },
/* 17 */
/*!*************************************!*\
  !*** ./modules/lib/material_svg.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict'; /**
	 * Created by XRene on 16/5/26.
	 */var assetMap={'img/icons/ic_euro_24px.svg':'<svg viewBox="0 0 24 24" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="euro" sketch:type="MSLayerGroup" transform="translate(4.928571, 3.000000)"><path d="M13.3295171,13.848956 C12.7717614,14.1408877 11.5268981,14.5372503 10.3117026,14.5372503 C8.98732947,14.5372503 7.74127945,14.1408877 6.89515215,13.1855827 C6.49641614,12.7381914 6.20567113,12.1258468 6.0205437,11.3319349 L12.6685173,11.3319349 L12.6685173,9.45217947 L5.65147555,9.45217947 L5.65147555,9.02852246 C5.65147555,8.73659074 5.65147555,8.47432688 5.67639655,8.20731616 L12.669704,8.20731616 L12.669704,6.32756069 L6.07513256,6.32756069 C6.26263342,5.63926639 6.52371057,5.03048195 6.92363329,4.60682495 C7.74246616,3.62541221 8.91019304,3.17564749 10.1550564,3.17564749 C11.3168497,3.17564749 12.4311744,3.52098135 13.1194687,3.81172636 L13.8587917,0.793911872 C12.9046734,0.371441579 11.4770561,0 9.88685892,0 C7.3722113,0 5.25273954,1.00514702 3.77172009,2.7282562 C2.92559278,3.68118779 2.2634062,4.89994338 1.94418005,6.32874741 L0.168855444,6.32874741 L0.168855444,8.20731616 L1.65343504,8.20731616 C1.65343504,8.47432688 1.62614062,8.73777745 1.62614062,9.00241475 L1.62614062,9.45217947 L0.168855444,9.45217947 L0.168855444,11.3331216 L1.89196462,11.3331216 C2.1304942,12.7393781 2.65858206,13.8750637 3.37417079,14.7745931 C4.85875039,16.7338585 7.21319158,17.7935943 9.83345677,17.7935943 C11.5292715,17.7935943 13.0660666,17.2904275 13.965596,16.789634 L13.3295171,13.848956 L13.3295171,13.848956 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></svg>','img/icons/ic_card_giftcard_24px.svg':'<svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>','img/icons/addShoppingCart.svg':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="addShoppingCart"><g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></g></svg>','img/icons/android.svg':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></g></svg>','img/icons/angular-logo.svg':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120"> <defs> <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%"> <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0"></feOffset> <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3"></feGaussianBlur> <feComponentTransfer in="blurOut" result="opacityOut"> <feFuncA type="linear" slope="0.5"></feFuncA> </feComponentTransfer> <feBlend in="SourceGraphic" in2="opacityOut" mode="normal"></feBlend> </filter> </defs> <path d=" M 5 18.25 L 50 2.25 L 96 18 L 88.5 77 L 50 98.25 L 12 77.25 Z" fill="black" filter="url(#shadow)" class="outline"></path> <path d=" M 5 18.25 L 50 2.25 L 50 98.25 L 12 77.25 Z" fill="#de3641" class="left"></path> <path d=" M 50 2.25 L 96 18 L 88.5 77 L 50 98.25 Z" fill="#b13138" class="right"></path> <path d=" M 50 13 L 79.25 75.5 L 69.25 75.5 L 63 61.25 L 50 61.25 L 50 52.75 L 59.5 52.75 L 50 33.1 L 42 52.75 L 50 52.75 L 50 61.25 L 38.1 61.25 L 32.5 75.5 L 21.75 75.5 Z" fill="white" class="letter"></path></svg>','img/icons/bower-logo.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g> <g id="leaf"> <path fill="#00ACEE" d="M434.625,63.496c-67.822,0-118.399,71.68-95.018,123.167C435.596,186.664,396.518,98.058,434.625,63.496z" /> </g> <path id="body" fill="#FFCC2F" d="M456.534,256.992c0-22.79-108.627-34.129-169.139-37.663 c-60.511-3.533-281.592,38.389-255.42,93.813c26.173,55.426,92.581,114.358,167.313,114.358c38.716,0,83.584-27.284,86.053-77.38 C330.121,335.163,456.534,334.371,456.534,256.992z"/> <path id="wing_tip" fill="#2BAF2B" d="M400.981,272.143c7.02,7.104-15.222,26.295-34.606,17.262 c8.731,19.688-29.676,36.064-48.336,22.026c1.998,15.865-36.122,24.996-48.285,7.292c3.136,8.441,5.757,14.898,8.229,20.209 c-0.029-0.09-0.046-0.149-0.046-0.149c6.324,8.279,14.929,14.939,52.394,14.939c57.727,0,150.97-43.849,150.97-76.039 c0-26.643-9.992-29.14-27.196-27.198c-17.208,1.942-107.17,11.291-126.306,7.534C338.182,260.229,390.54,270.259,400.981,272.143z" /> <path id="head" fill="#EF5734" d="M198.51,48.82c-110.382,0-221.179,109.721-168.451,261.056 c35.817,21.53,83.576,12.995,94.278,1.532c16.178,5.171,30.612,7.347,43.513,7.347c67.047,0,124.34-71.235,124.34-160.257 C292.189,67.196,231.93,48.82,198.51,48.82z"/> <path id="eye_rim" fill="#FFCC2F" d="M153.308,146.522c0,24.632,19.969,44.603,44.603,44.603c24.633,0,44.603-19.971,44.603-44.603 c0-24.633-19.97-44.603-44.603-44.603C173.277,101.92,153.308,121.89,153.308,146.522z"/> <path id="eye" fill="#543729" d="M171.207,146.522c0,14.747,11.956,26.704,26.704,26.704c14.748,0,26.703-11.957,26.703-26.704 c0-14.748-11.955-26.704-26.703-26.704C183.163,119.819,171.207,131.774,171.207,146.522z"/> <ellipse id="pupil_highlight" fill="#FFFFFF" cx="197.91" cy="134.674" rx="15.56" ry="9.675"/> <path id="beak" fill="#CECECE" d="M289.401,123.675c-20.275,11.807-19.604,50.03-10.595,68.681 c17.445-6.466,41.752-19.291,45.527-21.585c3.773-2.293-2.088-10.989,12.559-10.989c20.315,0,38.684,6.348,43.956,8.634 C377.511,161.547,335.758,123.675,289.401,123.675z"/> <path id="outline" fill="#543729" d="M502.214,250.797c-26.335-25.305-158.017-41.1-199.568-45.698 c2.014-4.754,3.726-9.669,5.142-14.731c5.665-2.481,11.776-4.789,18.101-6.716c0.77,2.272,4.397,10.98,6.465,15.112 c83.553,2.305,87.844-62.09,91.24-79.732c3.323-17.25,3.154-33.917,31.812-64.388C412.709,42.201,351.31,73.928,330.742,121.15 c-7.728-2.896-15.474-5.035-23.136-6.357c-5.488-22.146-34.077-83.845-109.097-83.845c-48.585,0-97.581,20.063-134.421,55.045 c-19.852,18.85-35.445,41.234-46.344,66.53C5.97,179.851,0,209.94,0,241.957C0,353.462,76.126,451.18,119.139,451.18 c18.784,0,34.943-14.067,38.736-26.675c3.181,8.645,12.938,35.522,16.142,42.364c4.737,10.117,26.642,18.872,36.229,8.373 c12.326,6.849,34.943,10.973,47.27-7.289c23.739,5.022,44.728-9.135,45.184-26.026c11.649-0.622,17.363-16.978,14.819-30.001 c-1.875-9.591-21.904-44-29.719-55.877c15.468,12.58,54.644,16.142,59.401,0.008c24.936,19.571,63.797,9.301,66.879-6.619 c30.301,7.874,65.054-9.417,59.348-30.359C522.102,315.711,515.872,263.921,502.214,250.797z M375.456,164.958 c-12.821-5.033-29.084-8.217-40.482-8.217c-16.164,0-26.009,9.16-41.218,9.16c-3.193,0-10.812,0.016-16.926-2.162 c4.021,4.217,9.025,6.505,18.725,6.505c5.793,0,17.263-2.958,26.553-5.752c0.129,1.956,0.334,3.898,0.61,5.826 c-17.402,4.161-35.664,15.231-40.949,18.105c-11.755-25.958-1.65-50.505,7.697-61.837 C331.331,126.686,365.144,155.433,375.456,164.958z M393.557,163.001l-6.406-5.979c-6.575-6.159-13.43-11.731-20.469-16.678 c10.483-20.801,23.658-43.514,40.298-57.565c-18.314,7.381-36.397,29.445-47.089,53.03c-5.448-3.464-10.98-6.554-16.561-9.255 c14.913-31.834,49.568-58.42,87.762-60.497C405.509,89.257,415.114,135.563,393.557,163.001z M341.006,184.7 c-2.821-6.114-5.677-16.27-5.328-22.239c4.753-0.112,13.868,1.67,15.335,2.016c-0.557,2.803-0.855,8.944-0.866,9.739 c0.903-1.556,3.41-6.922,4.43-9.029c9.127,1.744,21.126,4.659,28.161,7.938C374.478,178.473,360.439,184.293,341.006,184.7z M283.971,112.911c-33.381,33.832-20.199,76.63-8.046,95.976c-17.29,28.761-51.28,48.437-90.765,57.389 c44.328,0,70.397-11.409,85.563-22.586c9.677-7.131,14.928-14.17,17.608-18.088c65.72,4.251,169.783,25.423,179.935,32.281 c4.074,2.753,8.278,8.842,8.895,14.668c-49.387-6.914-138.407-14.188-161.719-15.424c16.549,2.347,137.241,25.202,158.163,30.552 c-6.368,10.384-20.872,17.715-42.733,12.621c11.812,16.093-11.125,35.399-43.071,24.766c7.032,15.799-21.413,30.021-53.741,13.555 c0.411,15.805-40.105,17.626-56.123,0.162c0.306,2.082,2.207,6.066,3.028,7.809c-5.162,46.15-42.961,74.783-81.677,74.783 c-94.794,0-177.375-76.989-177.375-179.417c0-108.292,80.03-189.096,176.597-189.096 C253.842,52.861,278.836,96.412,283.971,112.911z"/></g></svg>','img/icons/cake.svg':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/></g></svg>','img/icons/codepen-logo.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><path d="M250 0C111.928 0 0 111.927 0 250c0 138.077 111.927 250 250 250 138.073 0 250-111.923 250-250C500 111.928 388.073 0 250 0zm0 458.943C134.79 458.943 41.06 365.21 41.06 250c0-115.207 93.73-208.94 208.94-208.94S458.94 134.793 458.94 250c0 115.21-93.73 208.943-208.94 208.943z"/><path d="M404.462 201.172c-.028-.195-.076-.382-.11-.577-.064-.374-.134-.748-.23-1.114-.058-.22-.14-.43-.207-.64-.106-.327-.212-.652-.342-.97-.09-.22-.196-.438-.297-.65-.14-.3-.285-.593-.452-.877-.122-.212-.25-.416-.377-.618-.18-.277-.362-.546-.562-.806-.146-.195-.3-.39-.454-.578-.21-.243-.43-.487-.663-.716-.174-.178-.346-.357-.528-.52-.245-.22-.497-.432-.753-.634-.198-.155-.395-.31-.602-.456-.078-.05-.146-.114-.22-.163L257.37 97.656c-4.465-2.976-10.275-2.976-14.74 0l-141.294 94.196c-.073.05-.142.114-.22.163-.207.146-.402.3-.597.456-.26.204-.513.416-.753.634-.187.164-.357.342-.533.52-.23.23-.45.474-.658.717-.16.19-.313.384-.46.578-.194.26-.382.53-.556.806-.134.203-.26.406-.382.618-.163.284-.31.577-.45.877-.103.21-.21.43-.298.65-.13.317-.236.642-.34.968-.07.21-.147.422-.21.642-.096.366-.16.74-.23 1.114-.032.195-.08.382-.106.577-.077.57-.122 1.147-.122 1.733V297.1c0 .585.044 1.162.122 1.74.025.188.074.382.106.568.07.374.134.748.23 1.114.063.22.14.432.21.643.104.324.21.65.34.975.09.222.195.433.297.645.143.3.29.592.45.885.123.204.25.406.383.61.174.276.362.545.557.806.146.203.3.39.46.577.207.243.426.488.657.716.175.177.346.356.533.52.24.22.492.43.752.634.194.155.39.31.597.454.077.05.146.115.22.163L242.63 402.35c2.232 1.487 4.803 2.236 7.372 2.236 2.566 0 5.135-.75 7.368-2.236l141.295-94.197c.074-.047.142-.112.22-.162.207-.145.403-.3.602-.454.256-.203.508-.414.752-.635.182-.163.353-.343.527-.52.232-.23.452-.474.664-.717.155-.187.31-.374.455-.577.2-.26.383-.53.562-.806.126-.204.255-.406.377-.61.167-.293.312-.585.452-.885.1-.212.206-.423.297-.645.13-.324.235-.65.342-.975.068-.21.15-.423.206-.643.1-.366.168-.74.233-1.114.033-.187.08-.38.11-.568.072-.578.118-1.155.118-1.74v-94.197c0-.585-.045-1.162-.118-1.73zm-141.176-67.64l104.088 69.388-46.493 31.103-57.594-38.527v-61.963zm-26.57 0v61.964l-57.593 38.527-46.497-31.103 104.09-69.387zm-114.726 94.24L155.228 250l-33.238 22.233V227.77zm114.725 138.7l-104.088-69.39 46.497-31.093 57.592 38.52v61.96zM250 281.43L203.014 250 250 218.574l46.986 31.428L250 281.432zm13.286 85.04v-61.963l57.595-38.52 46.494 31.093-104.088 69.388zm114.724-94.238L344.777 250l33.233-22.23v44.464z"/></svg>','img/icons/copy.svg':'<svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><g><rect fill="none" width="24" height="24"/><path fill="#7d7d7d" d="M16,1H4C2.9,1,2,1.9,2,3v14h2V3h12V1z M19,5H8C6.9,5,6,5.9,6,7v14c0,1.1,0.9,2,2,2h11c1.1,0,2-0.9,2-2V7C21,5.9,20.1,5,19,5z M19,21H8V7h11V21z"/></g></g></svg>','img/icons/copy2.svg':'<svg version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><rect fill="none" width="48" height="48"/><path fill="#7d7d7d" d="M32,2H8C5.8,2,4,3.8,4,6v28h4V6h24V2z M38,10H16c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h22c2.2,0,4-1.8,4-4V14C42,11.8,40.2,10,38,10z M38,42H16V14h22V42z"/></g></g></svg>','img/icons/facebook.svg':'<svg version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><g><path fill="#7d7d7d" d="M40,4H8C5.8,4,4,5.8,4,8l0,32c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V8C44,5.8,42.2,4,40,4z M38,8v6h-4c-1.1,0-2,0.9-2,2v4h6v6h-6v14h-6V26h-4v-6h4v-5c0-3.9,3.1-7,7-7H38z"/></g><g><rect fill="none" width="48" height="48"/></g></g></g></svg>','img/icons/favorite.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24h-24z" fill="none"/> <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"/></svg>','img/icons/github-icon.svg':'<svg height="1024" width="1024" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"> <path d="M512 0C229.252 0 0 229.25199999999995 0 512c0 226.251 146.688 418.126 350.155 485.813 25.593 4.686 34.937-11.125 34.937-24.626 0-12.188-0.469-52.562-0.718-95.314-128.708 23.46-161.707-31.541-172.469-60.373-5.525-14.809-30.407-60.249-52.398-72.263-17.988-9.828-43.26-33.237-0.917-33.735 40.434-0.476 69.348 37.308 78.471 52.75 45.938 77.749 119.876 55.627 148.999 42.5 4.654-32.999 17.902-55.627 32.501-68.373-113.657-12.939-233.22-56.875-233.22-253.063 0-55.94 19.968-101.561 52.658-137.404-5.22-12.999-22.844-65.095 5.063-135.563 0 0 42.937-13.749 140.811 52.501 40.811-11.406 84.594-17.031 128.124-17.22 43.499 0.188 87.314 5.874 128.188 17.28 97.689-66.311 140.686-52.501 140.686-52.501 28 70.532 10.375 122.564 5.124 135.499 32.811 35.844 52.626 81.468 52.626 137.404 0 196.686-119.751 240-233.813 252.686 18.439 15.876 34.748 47.001 34.748 94.748 0 68.437-0.686 123.627-0.686 140.501 0 13.625 9.312 29.561 35.25 24.562C877.436 929.998 1024 738.126 1024 512 1024 229.25199999999995 794.748 0 512 0z" /></svg>','img/icons/github.svg':'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="8 11 33 28"><path fill="#333" d="M11.828,18.179c0,0-3.344,3.499-2.763,9.192 c0.581,5.694,4.186,10.392,16.208,10.392c12.021,0,15.045-6.275,15.116-11.436c0.071-5.159-2.253-7.46-3.344-8.243 c0,0,0.007-3.704-0.343-5.661c0,0-1.85-0.219-5.845,2.07c0,0-5.454-0.533-12.722,0.065c0,0-3.053-2.04-6.129-2.574 C12.006,11.984,11.496,15.196,11.828,18.179z"/><path fill="#E2B89F" d="M17.211,23.815h14.916c0,0,4.227-0.475,4.227,6.44 c0.034,6.086-11.139,5.693-11.139,5.693s-12.236,0.486-12.243-6.269C12.956,23.579,17.211,23.815,17.211,23.815z"/><g> <g> <path fill="#9C584F" d="M30.767,26.591c0.959,0,1.737,1.25,1.737,2.787 c0,1.54-0.778,2.788-1.737,2.788c-0.958,0-1.736-1.248-1.736-2.788C29.03,27.841,29.809,26.591,30.767,26.591z"/> <path fill="#FFFFFF" d="M30.767,32.666c-1.254,0-2.236-1.444-2.236-3.288c0-1.843,0.982-3.287,2.236-3.287 c1.255,0,2.237,1.444,2.237,3.287C33.004,31.222,32.021,32.666,30.767,32.666z M30.767,27.091c-0.585,0-1.236,0.939-1.236,2.287 c0,1.349,0.651,2.288,1.236,2.288s1.237-0.939,1.237-2.288C32.004,28.03,31.352,27.091,30.767,27.091z"/> </g></g><g> <g> <path fill="#9C584F" d="M18.767,26.591c0.959,0,1.737,1.25,1.737,2.787 c0,1.54-0.778,2.788-1.737,2.788c-0.958,0-1.736-1.248-1.736-2.788C17.03,27.841,17.809,26.591,18.767,26.591z"/> <path fill="#FFFFFF" d="M18.767,32.666c-1.254,0-2.236-1.444-2.236-3.288c0-1.843,0.982-3.287,2.236-3.287 c1.254,0,2.237,1.444,2.237,3.287C21.004,31.222,20.021,32.666,18.767,32.666z M18.767,27.091c-0.585,0-1.236,0.939-1.236,2.287 c0,1.349,0.651,2.288,1.236,2.288c0.585,0,1.237-0.939,1.237-2.288C20.004,28.03,19.352,27.091,18.767,27.091z"/> </g></g><path fill="#9C584F" d="M24.076,32.705c0,0,0.499-1.418,1.109-0.089 c0,0-0.457,0.297-0.285,0.996l1.428,0.546h-3.23l1.28-0.575C24.378,33.583,24.562,32.527,24.076,32.705z"/></svg>','img/icons/hangout.svg':'<svg version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><path fill="#159F5C" d="M23,4C13.6,4,6,11.6,6,21s7.6,17,17,17h1v7c9.7-4.7,16-15,16-24C40,11.6,32.4,4,23,4z M22,22l-2,4h-3l2-4h-3v-6h6V22zM30,22l-2,4h-3l2-4h-3v-6h6V22z"/><rect x="0" fill="none" width="48" height="48"/></g></g></svg>','img/icons/ic_access_time_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-440" fill="none" width="1400" height="3600"/> </g></g><g id="Labels"></g><g id="Icon"> <g> <g> <path fill-opacity="0.9" d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 s3.6-8,8-8c4.4,0,8,3.6,8,8S16.4,20,12,20z"/> </g> <rect fill="none" width="24" height="24"/> <polygon fill-opacity="0.9" points="12.5,7 11,7 11,13 16.2,16.2 17,14.9 12.5,12.2 "/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_arrow_back_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-568" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect fill="none" width="24" height="24"/> <path d="M20,11H7.8l5.6-5.6L12,4l-8,8l8,8l1.4-1.4L7.8,13H20V11z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_build_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"/> <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>','img/icons/ic_chevron_right_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-1336" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <polygon points="10,6 8.6,7.4 13.2,12 8.6,16.6 10,18 16,12 "/> <rect fill="none" width="24" height="24"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_close_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>','img/icons/ic_code_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="none" d="M0 0h24v24H0V0z"/> <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>','img/icons/ic_comment_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-1464" fill="none" width="1400" height="3600"/> </g></g><g id="Labels"></g><g id="Icon"> <g> <path d="M22,4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h14l4,4L22,4z M18,14H6v-2h12V14z M18,11H6V9h12V11z M18,8H6 V6h12V8z"/> <rect x="0" fill="none" width="24" height="24"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_email_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"/> <path d="M0 0h24v24h-24z" fill="none"/></svg>','img/icons/ic_insert_drive_file_24px.svg':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g> <path d="M6,2C4.9,2,4,2.9,4,4l0,16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8l-6-6H6z M13,9V3.5L18.5,9H13z"/></g></svg>','img/icons/ic_label_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-568" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect fill="none" width="24" height="24"/> <path d="M17.6,5.8C17.3,5.3,16.7,5,16,5L5,5C3.9,5,3,5.9,3,7v10c0,1.1,0.9,2,2,2l11,0c0.7,0,1.3-0.3,1.6-0.8L22,12L17.6,5.8z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_launch_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-824" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect fill="none" width="24" height="24"/> <path d="M19,19H5V5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-7h-2V19z M14,3v2h3.6l-9.8,9.8l1.4,1.4L19,6.4 V10h2V3H14z" /> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_menu_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-2232" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect fill="none" width="24" height="24"/> <path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_more_vert_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-2488" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect fill="none" width="24" height="24"/> <path d="M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2c-1.1,0-2,0.9-2,2S10.9,8,12,8z M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2 S13.1,10,12,10z M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,16,12,16z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_ondemand_video_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="none" d="M0 0h24v24H0V0z"/> <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"/></svg>','img/icons/ic_people_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-2616" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <g> <rect fill="none" width="24" height="24"/> </g> <path d="M16,11c1.7,0,3-1.3,3-3c0-1.7-1.3-3-3-3c-1.7,0-3,1.3-3,3C13,9.7,14.3,11,16,11z M8,11c1.7,0,3-1.3,3-3c0-1.7-1.3-3-3-3 C6.3,5,5,6.3,5,8C5,9.7,6.3,11,8,11z M8,13c-2.3,0-7,1.2-7,3.5V19h14v-2.5C15,14.2,10.3,13,8,13z M16,13c-0.3,0-0.6,0-1,0.1 c1.2,0.8,2,2,2,3.4V19h6v-2.5C23,14.2,18.3,13,16,13z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_person_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/> <path d="M0 0h24v24h-24z" fill="none"/></svg>','img/icons/ic_phone_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24h-24z" fill="none"/> <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>','img/icons/ic_photo_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-2616" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect x="0" fill="none" width="24" height="24"/> <path d="M21,19V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14C20.1,21,21,20.1,21,19z M8.5,13.5l2.5,3l3.5-4.5l4.5,6 H5L8.5,13.5z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_place_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/> <path d="M0 0h24v24h-24z" fill="none"/></svg>','img/icons/ic_play_arrow_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-2232" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <polygon points="8,5 8,19 19,12 " style="fill:#f3f3f3;" /> <rect fill="none" width="24" height="24"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_play_circle_fill_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>','img/icons/ic_refresh_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-2616" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <path d="M17.6,6.4C16.2,4.9,14.2,4,12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8c3.7,0,6.8-2.6,7.7-6h-2.1c-0.8,2.3-3,4-5.6,4 c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.7,0,3.1,0.7,4.2,1.8L13,11h7V4L17.6,6.4z"/> <rect fill="none" width="24" height="24"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/ic_school_24px.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>','img/icons/ic_visibility_24px.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-1592" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><g id="Icon"> <g> <rect fill="none" width="24" height="24"/> <path d="M12,4.5C7,4.5,2.7,7.6,1,12c1.7,4.4,6,7.5,11,7.5c5,0,9.3-3.1,11-7.5C21.3,7.6,17,4.5,12,4.5z M12,17c-2.8,0-5-2.2-5-5 s2.2-5,5-5c2.8,0,5,2.2,5,5S14.8,17,12,17z M12,9c-1.7,0-3,1.3-3,3s1.3,3,3,3c1.7,0,3-1.3,3-3S13.7,9,12,9z"/> </g></g><g id="Grid" display="none"> <g display="inline"> </g></g></svg>','img/icons/launch.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24h-24z" fill="none"/> <path d="M19 19h-14v-14h7v-2h-7c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zm-5-16v2h3.59l-9.83 9.83 1.41 1.41 9.83-9.83v3.59h2v-7h-7z"/></svg>','img/icons/mail.svg':'<svg version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><path fill="#7d7d7d" d="M40,8H8c-2.2,0-4,1.8-4,4l0,24c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V12C44,9.8,42.2,8,40,8z M40,16L24,26L8,16v-4l16,10l16-10V16z"/><rect fill="none" width="48" height="48"/></g></g></svg>','img/icons/menu.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"> <path d="M0 0h18v18h-18z" fill="none"/> <path d="M2 13.5h14v-1.5h-14v1.5zm0-4h14v-1.5h-14v1.5zm0-5.5v1.5h14v-1.5h-14z"/></svg>','img/icons/message.svg':'<svg version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><path fill="#7d7d7d" d="M40,4H8C5.8,4,4,5.8,4,8l0,36l8-8h28c2.2,0,4-1.8,4-4V8C44,5.8,42.2,4,40,4z M36,28H12v-4h24V28z M36,22H12v-4h24V22zM36,16H12v-4h24V16z"/><rect x="0" fill="none" width="48" height="48"/></g></g></svg>','img/icons/more_vert.svg':'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"> <path d="M0 0h18v18h-18z" fill="none"/> <path d="M9 5.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>','img/icons/npm-logo.svg':'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="540px" height="210px" viewBox="0 0 18 7"><path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/><polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/><path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/><polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/></svg>','img/icons/octicon-repo.svg':'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path d="M21,12h-3v3h3V12z M21,6h-3v3h3V6z M39,0C37.5,0,10.5,0,9,0S6,1.5,6,3s0,34.5,0,36s1.5,3,3,3s6,0,6,0v6l4.5-4.5L24,48v-6 c0,0,13.5,0,15,0s3-1.5,3-3s0-34.5,0-36S40.5,0,39,0z M39,37.5c0,0.75-0.703,1.5-1.5,1.5S24,39,24,39v-3h-9v3c0,0-3.703,0-4.5,0 S9,38.203,9,37.5S9,33,9,33h30C39,33,39,36.75,39,37.5z M39,30H15V3h24.047L39,30z M21,24h-3v3h3V24z M21,18h-3v3h3V18z"/></svg>','img/icons/print.svg':'<svg version="1.1" x="0px" y="0px" width="24px"height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><g><g><path d="M19,8H5c-1.7,0-3,1.3-3,3v6h4v4h12v-4h4v-6C22,9.3,20.7,8,19,8z M16,19H8v-5h8V19z M19,12c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.6,0,1,0.4,1,1S19.6,12,19,12z M18,3H6v4h12V3z" fill="#7d7d7d"/></g><rect fill="none" width="24" height="24"/></g></g></svg>','img/icons/separator.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 4 6" enable-background="new 0 0 4 6" xml:space="preserve"><g> <polygon fill="#FFFFFF" points="3.719,3 0.968,0.25 0.281,0.938 2.344,3 0.281,5.062 0.968,5.75 "/></g></svg>','img/icons/sets/communication-icons.svg':'<svg><defs><g id="business"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></g><g id="call"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></g><g id="call-end"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/></g><g id="call-made"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/></g><g id="call-merge"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/></g><g id="call-missed"><path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/></g><g id="call-received"><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/></g><g id="call-split"><path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/></g><g id="chat"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></g><g id="clear-all"><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/></g><g id="comment"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></g><g id="contacts"><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/></g><g id="dialer-sip"><path d="M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></g><g id="dialpad"><path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></g><g id="dnd-on"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/></g><g id="email"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></g><g id="forum"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></g><g id="import-export"><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/></g><g id="invert-colors-off"><path d="M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z"/></g><g id="invert-colors-on"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/></g><g id="live-help"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></g><g id="location-off"><path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"/></g><g id="location-on"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></g><g id="message"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></g><g id="messenger"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></g><g id="no-sim"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/></g><g id="phone"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></g><g id="portable-wifi-off"><path d="M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z"/></g><g id="quick-contacts-dialer"><path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"/></g><g id="quick-contacts-mail"><path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"/></g><g id="ring-volume"><path d="M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"/></g><g id="stay-current-landscape"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/></g><g id="stay-current-portrait"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></g><g id="stay-primary-landscape"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/></g><g id="stay-primary-portrait"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></g><g id="swap-calls"><path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"/></g><g id="textsms"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></g><g id="voicemail"><path d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z"/></g><g id="vpn-key"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></g></defs></svg>','img/icons/sets/core-icons.svg':'<svg><defs><g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"/></g><g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></g><g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></g><g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></g><g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></g><g id="account-child"><circle cx="12" cy="13.49" r="1.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2.5c1.24 0 2.25 1.01 2.25 2.25S13.24 9 12 9 9.75 7.99 9.75 6.75 10.76 4.5 12 4.5zm5 10.56v2.5c-.45.41-.96.77-1.5 1.05v-.68c0-.34-.17-.65-.46-.92-.65-.62-1.89-1.02-3.04-1.02-.96 0-1.96.28-2.65.73l-.17.12-.21.17c.78.47 1.63.72 2.54.82l1.33.15c.37.04.66.36.66.75 0 .29-.16.53-.4.66-.28.15-.64.09-.95.09-.35 0-.69-.01-1.03-.05-.5-.06-.99-.17-1.46-.33-.49-.16-.97-.38-1.42-.64-.22-.13-.44-.27-.65-.43l-.31-.24c-.04-.02-.28-.18-.28-.23v-4.28c0-1.58 2.63-2.78 5-2.78s5 1.2 5 2.78v1.78z"/></g><g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></g><g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></g><g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></g><g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></g><g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></g><g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></g><g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></g><g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></g><g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"/></g><g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/></g><g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></g><g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></g><g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></g><g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></g><g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></g><g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g><g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"/></g><g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g><g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></g></defs></svg>','img/icons/sets/device-icons.svg':'<svg><defs><g id="access-alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></g><g id="access-alarms"><path d="M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/></g><g id="access-time"><path fill-opacity=".9" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></g><g id="add-alarm"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></g><g id="airplanemode-off"><path d="M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"/></g><g id="airplanemode-on"><path d="M10.18 9"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></g><g id="battery-20"><path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"/><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"/></g><g id="battery-30"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"/><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"/></g><g id="battery-50"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"/><path d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"/></g><g id="battery-60"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"/><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"/></g><g id="battery-80"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"/><path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"/></g><g id="battery-90"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"/><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"/></g><g id="battery-alert"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"/></g><g id="battery-charging-20"><path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"/></g><g id="battery-charging-30"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"/></g><g id="battery-charging-50"><path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"/></g><g id="battery-charging-60"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"/></g><g id="battery-charging-80"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"/></g><g id="battery-charging-90"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"/></g><g id="battery-charging-full"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/></g><g id="battery-full"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></g><g id="battery-std"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></g><g id="battery-unknown"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"/></g><g id="bluetooth"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/></g><g id="bluetooth-connected"><path d="M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z"/></g><g id="bluetooth-disabled"><path d="M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z"/></g><g id="bluetooth-searching"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"/></g><g id="brightness-auto"><path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z"/></g><g id="brightness-high"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></g><g id="brightness-low"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></g><g id="brightness-medium"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/></g><g id="data-usage"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/></g><g id="developer-mode"><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"/></g><g id="devices"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></g><g id="dvr"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"/></g><g id="gps-fixed"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></g><g id="gps-not-fixed"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></g><g id="gps-off"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"/></g><g id="location-disabled"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"/></g><g id="location-searching"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></g><g id="multitrack-audio"><path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"/></g><g id="network-cell"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/></g><g id="network-wifi"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"/></g><g id="nfc"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"/></g><g id="now-wallpaper"><path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"/></g><g id="now-widgets"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/></g><g id="screen-lock-landscape"><path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z"/></g><g id="screen-lock-portrait"><path d="M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/></g><g id="screen-lock-rotation"><path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"/></g><g id="screen-rotation"><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/></g><g id="sd-storage"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/></g><g id="settings-system-daydream"><path d="M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></g><g id="signal-cellular-0-bar"><path fill-opacity=".3" d="M2 22h20V2z"/></g><g id="signal-cellular-1-bar"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/></g><g id="signal-cellular-2-bar"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/></g><g id="signal-cellular-3-bar"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/></g><g id="signal-cellular-4-bar"><path d="M2 22h20V2z"/></g><g id="signal-cellular-connected-no-internet-0-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/></g><g id="signal-cellular-connected-no-internet-1-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"/></g><g id="signal-cellular-connected-no-internet-2-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/></g><g id="signal-cellular-connected-no-internet-3-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/></g><g id="signal-cellular-connected-no-internet-4-bar"><path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/></g><g id="signal-cellular-no-sim"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/></g><g id="signal-cellular-null"><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/></g><g id="signal-cellular-off"><path d="M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"/></g><g id="signal-wifi-0-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></g><g id="signal-wifi-1-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"/></g><g id="signal-wifi-2-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"/></g><g id="signal-wifi-3-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"/></g><g id="signal-wifi-4-bar"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></g><g id="signal-wifi-off"><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></g><g id="storage"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></g><g id="usb"><path d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"/></g><g id="wifi-lock"><path d="M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"/></g><g id="wifi-tethering"><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"/></g></defs></svg>','img/icons/sets/social-icons.svg':'<svg><defs><g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/></g><g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></g><g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></g><g id="group-add"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/></g><g id="location-city"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></g><g id="mood"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></g><g id="notifications"><path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2z"/></g><g id="notifications-none"><path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2zm-2 1H7v-6.5C7 8.01 9.01 6 11.5 6S16 8.01 16 10.5V17z"/></g><g id="notifications-off"><path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM18 10.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-.51.12-.99.32-1.45.56L18 14.18V10.5zm-.27 8.5l2 2L21 19.73 4.27 3 3 4.27l2.92 2.92C5.34 8.16 5 9.29 5 10.5V16l-2 2v1h14.73z"/></g><g id="notifications-on"><path d="M6.58 3.58L5.15 2.15C2.76 3.97 1.18 6.8 1.03 10h2c.15-2.65 1.51-4.97 3.55-6.42zM19.97 10h2c-.15-3.2-1.73-6.03-4.13-7.85l-1.43 1.43c2.05 1.45 3.41 3.77 3.56 6.42zm-1.97.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2v-5.5zM11.5 22c.14 0 .27-.01.4-.04.65-.13 1.19-.58 1.44-1.18.1-.24.16-.5.16-.78h-4c0 1.1.9 2 2 2z"/></g><g id="notifications-paused"><path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2zm-4-6.2l-2.8 3.4H14V15H9v-1.8l2.8-3.4H9V8h5v1.8z"/></g><g id="pages"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"/></g><g id="party-mode"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"/></g><g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></g><g id="people-outline"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></g><g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></g><g id="person-add"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></g><g id="person-outline"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></g><g id="plus-one"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"/></g><g id="poll"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></g><g id="public"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></g><g id="school"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></g><g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></g><g id="whatshot"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></g></defs></svg>','img/icons/share-arrow.svg':'<svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><g><path fill="#7d7d7d" d="M21,11l-7-7v4C7,9,4,14,3,19c2.5-3.5,6-5.1,11-5.1V18L21,11z"/><rect fill="none" width="24" height="24"/></g></g></svg>','img/icons/tabs-arrow.svg':'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Header"> <g> <rect x="-618" y="-1208" fill="none" width="1400" height="3600"/> </g></g><g id="Label"></g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/><g id="Grid" display="none"></g></svg>','img/icons/twitter.svg':'<svg version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><g><path fill="#7d7d7d" d="M40,4H8C5.8,4,4,5.8,4,8l0,32c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V8C44,5.8,42.2,4,40,4z M35.4,18.7c-0.1,9.2-6,15.6-14.8,16c-3.6,0.2-6.3-1-8.6-2.5c2.7,0.4,6-0.6,7.8-2.2c-2.6-0.3-4.2-1.6-4.9-3.8c0.8,0.1,1.6,0.1,2.3-0.1c-2.4-0.8-4.1-2.3-4.2-5.3c0.7,0.3,1.4,0.6,2.3,0.6c-1.8-1-3.1-4.7-1.6-7.2c2.6,2.9,5.8,5.3,11,5.6c-1.3-5.6,6.1-8.6,9.2-4.9c1.3-0.3,2.4-0.8,3.4-1.3c-0.4,1.3-1.2,2.2-2.2,2.9c1.1-0.1,2.1-0.4,2.9-0.8C37.5,16.9,36.4,17.9,35.4,18.7z"/></g><g><rect fill="none" width="48" height="48"/></g></g></g></svg>','img/icons/upload.svg':'<svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><g><rect x="-618" y="-2232" fill="none" width="1400" height="3600"/></g></g><g><g><rect fill="none" width="24" height="24"/><path fill="#7d7d7d" d="M19.4,10c-0.7-3.4-3.7-6-7.4-6C9.1,4,6.6,5.6,5.4,8C2.3,8.4,0,10.9,0,14c0,3.3,2.7,6,6,6h13c2.8,0,5-2.2,5-5C24,12.4,21.9,10.2,19.4,10z M14,13v4h-4v-4H7l5-5l5,5H14z"/></g></g></svg>','icons/avatar-icons.svg':'<svg><defs> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-1" x="128"> <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-10" x="256" y="256"> <path fill="#FFCC80" d="M41.6 123.8s0 .1-.1.1l.3-.4c-.1.2-.1.2-.2.3z"/> <path fill="#8C9EFF" d="M0 0h128v128H0z"/> <path fill="#C2C2C2" d="M34.8 79.5c-2.5-3.4-5.9-6.4-6.9-10.3v-.1l-.6-.5c-.3-1.2.6-2 .5-3l-2.4-1h-6.9s0 17 17.4 17.3c-.9-.9-.7-1.8-1.1-2.4z"/> <path fill="#CFD8DC" d="M21.9 64.2l-.1-.3c0-.1 0-.2-.1-.4v-1l.1-.3c.1-.1.1-.2.1-.3.1-.1.1-.2.1-.2.2-.4.1-.8-.2-1.1-.4-.4-1-.4-1.3 0l-.2.2-.2.2c-.1.1-.2.2-.3.4l-.3.6-.3.6c-.1.2-.2.4-.2.7 0 .2-.1.5-.1.8v.5h3c.2-.2.1-.3 0-.4z"/> <path fill="#eee" d="M116.5 65.2c.1.1.2.1.2.2 0-.1-.1-.2-.2-.2zm8.2 6.1l.6.3c-.3-.1-.4-.2-.6-.3zm1.7 1l.6.3c-.2 0-.4-.1-.6-.3zm-3.4-2.1l.5.3c-.2 0-.4-.2-.5-.3zm-8-6.5zm-.1 64.1c-12-17.2-7.6-52-3.1-67.6v-.1c-3.5-4.2-7.8-11.7-10.2-18.7-1.7-5-4-8.8-6.4-11.8l-1.6-2-10.7 11.8c-1.5 2.1-3.3 1.8-4.1-.6l-7.1-17.3c-.3-.9-.3-1.9 0-2.7.3-1.1-.1-2.1.7-3l-2-.1c-1.3 0-2.5.1-3.7.3-1.7-.3-3.4-.5-5.1-.5-11.9 0-21.9 8.1-24.8 19.2-.5 1.8-.7 3.7-.8 5.6-1.2 3.6-4.2 7.7-11.5 8.4 1.3.4 2.2 1.9 2 3.6l-.5 2.8c-.3 2-1.2 2.4-2.2.9l1.6 8.6.2.9c.1 1.1.3 2.2.6 3.4 1 4 3.2 8.2 7.8 10.9.3.6 1 1.3 2 2.1 8.2 6.7 36 20.7 27.8 46.1h51.3c0-.1-.1-.1-.2-.2zM34.5 59.3c.5 0 1 .4 1 1 0 .5-.4 1-1 1-.5 0-1-.4-1-1s.4-1 1-1zm7.4 3.9c.5 0 1 .4 1 1 0 .5-.4 1-1 1-.5 0-1-.4-1-1 0-.5.5-1 1-1zm-1-8.5c-.5 0-1-.4-1-1 0-.5.4-1 1-1 .5 0 1 .4 1 1s-.5 1-1 1zm3.9-10.9c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zm73.3 22.7c.1.1.2.2.4.3-.2-.1-.3-.2-.4-.3zm3.2 2.6l.5.3-.5-.3zm-1.6-1.3l.4.3c-.1 0-.3-.1-.4-.3z"/> <path fill="#C2C2C2" d="M114.9 127.8l.2.2H128V73.2l-1-.6-.6-.3-1.2-.7-.6-.3-1.2-.7-.5-.3-1.2-.8-.5-.3-1.2-.9-.4-.3-1.2-1c-.1-.1-.2-.2-.4-.3l-1.3-1.2c-.1-.1-.2-.1-.2-.2l-1.5-1.5c-1.5-1.6-3-3.3-4.4-5.1-4.6 15.4-13 52.7 4.3 69.1z"/> <path fill="#646464" d="M26 55.1l.4-2.8c.2-1.8-.6-3.2-2-3.6-.3-.1-.7-.2-1.1-.1-2 .1-2.7 1.9-1.6 3.8l1.8 3.3c.1.2.2.3.3.4 1 1.3 1.9 1 2.2-1z"/> <circle fill="#444" cx="44.8" cy="42.2" r="2"/> <circle fill="#CFD8DC" cx="34.5" cy="60.3" r="1"/> <circle fill="#CFD8DC" cx="40.9" cy="53.7" r="1"/> <circle fill="#CFD8DC" cx="41.9" cy="64.2" r="1"/> <path fill="#646464" d="M70.7 18.8c-.3.8-.3 1.8 0 2.7l8.1 19.3c.8 2.5 2.6 2.7 4.1.6l12.3-11.8 1.4-1.3c.3-.4.5-.9.6-1.3.4-1.2.3-2.4-.1-3.6-1.1-4.3-5.6-8.9-11.2-10.3-5.6-1.4-10.9-.2-13.6 2.7-.8.8-1.3 1.8-1.6 3z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-11" y="128"> <path fill="#FFCC80" d="M41.6 123.8s0 .1-.1.1l.3-.4c-.1.2-.1.2-.2.3z"/> <path fill="#FFFF8D" d="M0 0h128v128H0z"/> <path fill="#F4B400" d="M110.3 91.4l-.5-.5c.1.2.3.4.5.5zm-4.4-4.5l.4.5c-.1-.2-.3-.4-.4-.5zm9.8 9.5c.2.2.4.4.7.6-.3-.2-.5-.4-.7-.6zM104.3 85c.2.2.3.4.5.5-.2-.1-.4-.3-.5-.5zm3.7 4.1zm16.9 14l.9.6c-.3-.3-.6-.4-.9-.6zm-28.5-29l.1.2c-.1 0-.1-.1-.1-.2zm15.2 18.6c.2.2.4.4.7.6l-.7-.6zm10 8.2l.9.6-.9-.6zm-18.8-17.7l.4.5c-.1-.1-.3-.3-.4-.5zm-1.4-1.7c.1.1.1.2.2.2-.1 0-.1-.1-.2-.2zm12.2 13l.7.6c-.2-.1-.5-.4-.7-.6zm-15-16.8c.1.1.1.2.2.2l-.2-.2zm-1.2-1.8l.2.3c0-.1-.1-.2-.2-.3zm28.4 27.7l-.9-.6-2.4-1.5-.9-.6c-1-.7-2.1-1.4-3.1-2.2l-2.2-1.8c-.2-.2-.4-.4-.7-.6-.5-.4-1-.8-1.4-1.2l-.7-.6-1.3-1.2-.7-.6c-.5-.4-.9-.9-1.3-1.3l-.5-.5-1.8-1.8c-.6-.6-1.1-1.2-1.6-1.8l-.4-.5-1.2-1.3c-.2-.2-.3-.4-.5-.5l-1.1-1.3-.4-.5-1.2-1.5c-.1-.1-.1-.2-.2-.2-.9-1.2-1.8-2.4-2.6-3.6-.1-.1-.1-.2-.2-.2l-1-1.5-.2-.3c-.3-.5-.6-1-1-1.5l-.1-.2c-1.1-1.8-2-3.5-2.9-5.2-3.1-6-4.8-11.4-5.7-15.9-.2-.9-.3-1.7-.4-2.6L85 13l-8 10.2c-3.7-2.6-8.2-4.2-13.1-4.2s-9.4 1.5-13.1 4.1L42.7 13l-1.8 29-7.7 71.8h.2c-.1 1-.2 2-.2 3 0 4 .8 7.7 2.1 11.2H128v-23.1c-.7-.4-1.5-.8-2.2-1.3zM55 38.4c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6zm17.9 0c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6z"/> <circle fill="#444" cx="72.9" cy="36.7" r="2"/> <circle fill="#444" cx="55" cy="36.7" r="2"/> <path fill="#444" d="M61.6 39.5c-.5 1-.1 1.7 1 1.7h4.6c1.1 0 1.6-.8 1-1.7l-2.3-4c-.5-1-1.4-1-2 0l-2.3 4z"/> <path fill="#FF5722" d="M92.5 102.7c8.3 11.3 23.6 14.4 35.5 7.8v-5.6l-2.2-1.3-.9-.6-2.4-1.5-.9-.6c-1-.7-2.1-1.4-3.1-2.2l-2.2-1.8c-.2-.2-.4-.4-.7-.6-.5-.4-1-.8-1.4-1.2l-.7-.6-1.3-1.2-.7-.6c-.5-.4-.9-.9-1.3-1.3l-.5-.5-1.8-1.8c-.6-.6-1.1-1.2-1.6-1.8l-.4-.5-1.2-1.3c-.2-.2-.3-.4-.5-.5l-1.1-1.3-.4-.5-1.2-1.5c-.1-.1-.1-.2-.2-.2-.9-1.2-1.8-2.4-2.6-3.6-.1-.1-.1-.2-.2-.2l-1-1.5-.2-.3c-.3-.5-.6-1-1-1.5l-.1-.2c-1.1-1.8-2-3.5-2.9-5.2-7.7 9.4-8.4 23.4-.8 33.7z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-12" x="128" y="128"> <path fill="#B9F6CA" d="M0 0h128v128H0z"/> <path fill="#444" d="M50.4 75.7c-1.6-1.6-3.2-2.9-4.7-4-.9-.6-1-1.7-1.7-2.2-1.8-1-3.2-5.9-5.3-3.4l-.5.8-.4-.9c-1.3-1.2-1-.4-1.3-2.3-.5-4.2 1.2-7.2 5.1-7.8 1-.1 2-.1 2.9.2 9.5-1.8 13.7-7.4 15.2-10 4 5.7 14.3 11.4 38.3 7.8 2.8-4.7 4.5-10.2 4.5-16C102.4 20.8 88.6 7 71.6 7c-6.7 0-12.8 2.1-17.9 5.7L27.9 31C16.3 36.6 8.3 48.5 8.3 62.2c0 19.1 15.5 34.6 34.6 34.6 4.6 0 9-.9 13-2.5.2-8.4-1.4-14.5-5.5-18.6zm-5.9-21.6z"/> <path fill="#8D6E63" d="M73.7 122c6.1.5 13.4-.3 22-3.5-.1-.7-.3-1.4-.5-2.1-.3-1.3-3.8-21.4-4-28.1-.1-7.3.8-11.9 2-14.7h8.7l-2.5-10.1c-.2-2.4-.4-4.7-.7-6.6-.2-1.8-.3-2.3-.8-3.9-24 3.6-34.2-3.7-38.2-9.4-1.4 2.5-5.7 8.8-15.3 10.5-.9-.3-1.9-.3-2.9-.2-3.9.6-6.7 4.5-6.1 8.8.3 2 1.2 3.6 2.5 4.8.2.1 1.5.6 3.3 1.7.7.4 1.6.9 2.4 1.6 1.5 1.1 3.1 2.4 4.7 4 4 4.1 7.6 10.2 7.4 18.5-.1 4.9-1.6 10.6-5.1 17.2.1 0 7.3 10.2 23.1 11.5zM44.5 54.1z"/> <path fill="#FFCC80" d="M41.6 123.8s.1-.2.2-.3c-.1.2-.1.2-.2.3z"/> <circle fill="#444" cx="83.5" cy="63.1" r="2"/> <path fill="#0097A7" d="M73.7 122c-15.9-1.3-23-11.5-23-11.5-2.1 4-5.1 8.4-8.9 13.1l-.3.4c-.5.6-1.1 1.3-1.7 2-.5.6-1 1.3-1.6 2.1h59.7c-.7-3.2-1.5-6.4-2.1-9.5-8.7 3.1-16 3.9-22.1 3.4z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-13" x="256"> <path fill="#448AFF" d="M0 0h128v128H0z"/> <g fill="#00BFA5"> <path d="M73 18.7c-4.8 0-9.7.8-14 2.3-.1.1-.2.2-.4.3l-7.3 4.6c-.6.4-1.4.4-2 .1-.3-.2-.6-.4-.8-.7l-.7-1.1c-.6-1-.3-2.2.6-2.8l7.3-4.6c.4-.2.8-.3 1.2-.3-5.5-3-23.7-10.7-33.7 10.7-11.8 25.4 11 50.2-14.4 62.6 0 0 26.2 13.7 40.9-24.8 3.7 3.2 8.8 5.8 16 7.4-.6-5.6.8-9.8-2.1-12.8-1.3-1.4-2.7-1.5-4-2.4-.7-.5-1.4-.9-2-1.3-1.5-.9-2.6-1.3-2.8-1.4-1.1-1-1.9-2.4-2.1-4.1-.5-3.6-2.2-6.9 1.1-7.4.8-.1 1.6-.1 2.4.2 8-1.5 11.6-6.7 12.8-8.9 3.4 4.8 11.7 9.8 31.9 6.8.3 1.1.6 1.2.8 2.4l.5-1.3c-.1-13-13.2-23.5-29.2-23.5zM56.1 43.2zm5.3 46.5s6 8.6 19.4 9.7c5.1.4 11.3-.3 18.6-2.9-.1-.6-.3-1.2-.4-1.7-.2-1.1-3.2-18-3.4-23.6-.2-6.2.6-10 1.6-12.4h7.3l-2.1-8.5c-.1-2-.4-3.9-.6-5.6 0-.3-.1-.7-.2-1-.2-1.1-.4-2.3-.8-3.4-20.2 3-28.5-2-31.9-6.8-1.2 2.1-4.8 7.4-12.8 8.9-.8-.2-1.6-.3-2.4-.2-3.3.5-5.6 3.8-5.1 7.4.2 1.7 1 3.1 2.1 4.1.2.1 1.3.5 2.8 1.4.6.4 1.3.8 2 1.3 1.3.9 2.6 2 4 3.4 2.9 3 5.6 7.2 6.1 12.8.5 4.5-.6 10.2-4.2 17.1zm27.5-41.2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zm-32.8-5.3c.1-.1 0-.1 0 0zm-2.4 57.7l.2-.2-.2.2z"/> <circle cx="88.9" cy="49.8" r="2"/> <path d="M80.8 99.3c-13.3-1.1-19.4-9.7-19.4-9.7-1.8 3.4-4.3 7.1-7.5 11l-.3.3c-.4.5-.9 1.1-1.4 1.7-.7.9-1.6 2.1-2.8 3.7-2.3 3.2-5.4 7.8-8.8 13.5-1.4 2.4-2.9 5.1-4.4 8 0 0 0 .1-.1.1h71.3c-.6-1.6-1.3-3.2-1.7-4.8-2.2-8.6-4.6-17.9-6.5-26.8-7.2 2.8-13.3 3.5-18.4 3zM55.7 16.7l-7.3 4.6c-1 .6-1.3 1.9-.6 2.8l.7 1.1c.2.3.5.6.8.7.6.3 1.4.3 2-.1l7.3-4.6.4-.3c.7-.7.8-1.7.3-2.5l-.7-1.1c-.4-.6-1-.9-1.6-1-.5 0-1 .1-1.3.4z"/> </g> <path fill="#444" d="M73 18.7c-4.8 0-9.7.8-14 2.3-.1.1-.2.2-.4.3l-7.3 4.6c-.6.4-1.4.4-2 .1-.3-.2-.6-.4-.8-.7l-.7-1.1c-.6-1-.3-2.2.6-2.8l7.3-4.6c.4-.2.8-.3 1.2-.3-5.5-3-23.7-10.7-33.7 10.7-11.8 25.4 11 50.2-14.4 62.6 0 0 26.2 13.7 40.9-24.8 3.7 3.2 8.8 5.8 16 7.4-.6-5.6.8-9.8-2.1-12.8-1.3-1.4-2.7-1.5-4-2.4-.7-.5-1.4-.9-2-1.3-1.5-.9-2.6-1.3-2.8-1.4-1.1-1-1.9-2.4-2.1-4.1-.5-3.6-2.2-6.9 1.1-7.4.8-.1 1.6-.1 2.4.2 8-1.5 11.6-6.7 12.8-8.9 3.4 4.8 11.7 9.8 31.9 6.8.3 1.1.6 1.2.8 2.4l.5-1.3c-.1-13-13.2-23.5-29.2-23.5zM56.1 43.2z"/> <path fill="#FFE0B2" d="M61.4 89.7s6 8.6 19.4 9.7c5.1.4 11.3-.3 18.6-2.9-.1-.6-.3-1.2-.4-1.7-.2-1.1-3.2-18-3.4-23.6-.2-6.2.6-10 1.6-12.4h7.3l-2.1-8.5c-.1-2-.4-3.9-.6-5.6 0-.3-.1-.7-.2-1-.2-1.1-.4-2.3-.8-3.4-20.2 3-28.5-2-31.9-6.8-1.2 2.1-4.8 7.4-12.8 8.9-.8-.2-1.6-.3-2.4-.2-3.3.5-5.6 3.8-5.1 7.4.2 1.7 1 3.1 2.1 4.1.2.1 1.3.5 2.8 1.4.6.4 1.3.8 2 1.3 1.3.9 2.6 2 4 3.4 2.9 3 5.6 7.2 6.1 12.8.5 4.5-.6 10.2-4.2 17.1zm27.5-41.2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zm-32.8-5.3c.1-.1 0-.1 0 0z"/> <path fill="#FFCC80" d="M53.7 100.9l.2-.2-.2.2z"/> <circle fill="#444" cx="88.9" cy="49.8" r="2"/> <path fill="#FF5722" d="M80.8 99.3c-13.3-1.1-19.4-9.7-19.4-9.7-1.8 3.4-4.3 7.1-7.5 11l-.3.3c-.4.5-.9 1.1-1.4 1.7-.7.9-1.6 2.1-2.8 3.7-2.3 3.2-5.4 7.8-8.8 13.5-1.4 2.4-2.9 5.1-4.4 8 0 0 0 .1-.1.1h71.3c-.6-1.6-1.3-3.2-1.7-4.8-2.2-8.6-4.6-17.9-6.5-26.8-7.2 2.8-13.3 3.5-18.4 3z"/> <path fill="#00BFA5" d="M55.7 16.7l-7.3 4.6c-1 .6-1.3 1.9-.6 2.8l.7 1.1c.2.3.5.6.8.7.6.3 1.4.3 2-.1l7.3-4.6.4-.3c.7-.7.8-1.7.3-2.5l-.7-1.1c-.4-.6-1-.9-1.6-1-.5 0-1 .1-1.3.4z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-14" x="256" y="128"> <path fill="#B388FF" d="M0 0h128v128H0z"/> <path fill="#1C3AA9" d="M70.5 128h12.4c-5.1-15.8-6.6-23.9-7.2-28.4-1.9 8.8-4 19.3-5.2 28.4z"/> <path d="M92.9 32.8l-.2.1c.1 0 .2 0 .2-.1zm-1.2.5l-.7.1.7-.1zm.6-.2l-.3.1.3-.1zm-52 .3c-.2 0-.5 0-.7-.1.3 0 .5.1.7.1zm-.9-.2l-.5-.1.5.1zm-.7-.2c-.2-.1-.4-.2-.5-.3.1.1.3.2.5.3z" fill="none"/> <path fill="#2A56C6" d="M82.9 90.8v.2-.2z"/> <path fill="#FFE0B2" d="M31.2 47.2zM45.8 93c5.8 5.5 13.6 9.1 22.3 9.3 2.8-.1 5.4-.5 8-1.2l.8-3.8c4.3-19.3 9.7-37.4 15-52.9h6.9L94 36.2c-.2-1.2-.4-2.5-.7-3.6l-.4.3-.2.1-.4.2-.3.1-.3.1-.7.1H40.3c-.2 0-.5 0-.7-.1-.1 0-.1 0-.2-.1l-.5-.1-.2-.1c-.2-.1-.4-.2-.5-.3 0 0-.1 0-.1-.1-.1.2-.1.4-.1.7-1-.3-2-.4-3-.3-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 0 0 16.3 12.3 3.4 38 .1.2.2.3.3.4zm34.1-51.9c.8 0 1.5.7 1.5 1.6 0 .9-.7 1.6-1.5 1.6s-1.5-.7-1.5-1.6.6-1.6 1.5-1.6z"/> <path fill="#2A56C6" d="M68.1 102.3c-8.7-.2-16.5-3.8-22.3-9.3-.1-.1-.2-.2-.4-.3-3-.2-7.6.2-10.8.6-4.6.6-9.6 1.3-15 2.4-3.6.7-8.1 1.9-19.7 5.3v27h71.4c1.3-9.1 2.9-18.1 4.7-26.9-2.5.7-5.1 1.1-7.9 1.2z"/> <path fill="#6D4C41" d="M61.8 9.8c-7.3 1.1-13.6 5.1-17.9 10.8h43.7C81.5 12.7 71.9 8.3 61.8 9.8z"/> <path fill="#E65100" d="M38.7 33l.2.1c.2.1.3.1.5.1.1 0 .1 0 .2.1l.7.1H91c.2 0 .5 0 .7-.1l.3-.1.3-.1c.1 0 .3-.1.4-.2l.2-.1.4-.3c1-.7 1.6-1.9 1.6-3.2v-4.8c0-2.2-1.8-4-4-4H40.4c-2.2 0-4 1.8-4 4v4.8c0 1.4.7 2.6 1.8 3.3 0 0 .1 0 .1.1s.2.2.4.3z"/> <ellipse fill="#444" cx="79.9" cy="42.7" rx="2" ry="2.2"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-15" y="256"> <path fill="#FF80AB" d="M0 0h128v128H0z"/> <path fill="#5D4037" d="M87.3 11.7c-7.6 0-14.1 4.9-16.4 11.7-2.8-1.6-5.9-2.7-9.1-3.1-13.9-2.1-26.9 7.1-31.1 21.1 5 .8 9.5 3.1 13.4 3.1 1.4-.6 3-.9 4.6-.9 1.1 0 2.2.2 3.3.5 10-1.3 15.2-5.2 17.9-9 .3.5.6 1 1 1.6v.1c2.1 3.1 6.6 7.7 14.7 9.2.9-.3 1.9-.4 3-.2 1.5.2 2.8-1.1 3.8-.1 7-2.2 12.2-8.8 12.2-16.5 0-9.7-7.8-17.5-17.3-17.5z"/> <path d="M70.9 36.6c-.4-.6-.8-1.2-1-1.6.2.5.5 1 1 1.6z" fill="none"/> <path fill="#5D4037" d="M85.6 45.9z"/> <path fill="#FFCC80" d="M48.6 63.8c5.6 0 10.1-4.5 10.1-10.1s-4.5-10.1-10.1-10.1-10.1 4.5-10.1 10.1c.1 5.5 4.6 10.1 10.1 10.1zm-1.7-10.5c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9-.1 1.6.7 1.6 1.6zm38.7-7.4z"/> <path fill="#F9A825" d="M35.6 117.3c0 2.5 2.1 4.6 4.6 4.6s4.6-2.1 4.6-4.6c0-1.7-.9-3.2-2.3-4-.8-.2-1.8-.3-2.7-.6-2.3.3-4.2 2.2-4.2 4.6z"/> <circle fill="#F9A825" cx="64.3" cy="117.1" r="4.6"/> <path fill="#F9A825" d="M83.4 117.3c0 2.5 2.1 4.6 4.6 4.6 1.5 0 2.8-.7 3.7-1.8l-.7-.9-.6-.8c-.6-.7-1.3-1.5-1.8-2.1l-.3-.4c-.4-.5-.8-.9-1.2-1.5-.3-.4-.6-.8-.9-1.3-1.7.8-2.8 2.4-2.8 4.2z"/> <path fill="#FFEE58" d="M91.6 119.8c-.8 1-2.1 1.7-3.5 1.7-2.4 0-4.4-2-4.4-4.4 0-1.8 1-3.3 2.5-4-3-3.9-5.3-7.5-7.2-11 .2.1-7.3 10.6-23.7 12-3.8.3-8 .1-12.8-.8 1.3.8 2.2 2.2 2.2 3.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.8-4.2 4-4.4-2.4-.6-4.8-1.3-7.4-2.2-1.2 5.7-2.6 11.6-4.1 17.5h69c-1.4-2-2.6-3.8-3.7-5.3m-29.4-1.2c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4c0 2.4-2 4.4-4.4 4.4z"/> <path fill="#FFCC80" d="M92.4 45.6c-1-1-2.4-1.7-3.8-1.9-1-.2-2-.1-3 .2-8.1-1.5-12.6-6.1-14.7-9.2-.5-.7-.8-1.2-1.1-1.7-2.7 3.8-7.9 7.7-17.9 9l.9.3-9.4.4.6-.3c-3.9 0-8.3-.4-13.4-1.1-.5 1.7-.9 3.5-1.2 5.3-.2 1.8-.5 3.8-.6 6l-.3 2-2.3 9.4h9c1.2 3 2.1 7.7 1.9 15.3-.2 6.9-3.9 27.7-4.2 29-.1.7-.3 1.4-.5 2.1 2.6.9 5 2 7.3 2.5l2.7.5c4.8.9 9.2 1.4 13 1.1 16.4-1.3 24-12 24-12-9.8-18.4-4.6-30.7 2.1-37.5 1.6-1.7 3.3-3 4.9-4.1.9-.6 1.7-1.2 2.5-1.6 1.8-1.1 3.2-1.6 3.4-1.7 1.3-1.2 2.3-3 2.6-5 .3-2.6-.7-5.3-2.5-7zm-32.9 2.7c.5 1 .8 2 1 3.1l-1-3.1z"/> <path fill="#DB4437" d="M36.6 54.7c.5 6.2 5.7 11.1 12 11.1 6.7 0 12.1-5.4 12.1-12.1 0-5.5-3.7-10.2-8.8-11.6-1-.3-2.1-.5-3.3-.5-1.6 0-3.2.3-4.6.9-4.1 1.7-7.1 5.6-7.4 10.2h-7.7l-.1.9-.3 1.1h8.1zm12-11.1c5.6 0 10.1 4.5 10.1 10.1s-4.5 10.1-10.1 10.1-10.1-4.5-10.1-10.1c.1-5.6 4.6-10.1 10.1-10.1z"/> <circle fill="#444" cx="45.3" cy="53.3" r="2"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-16" x="128" y="256"> <path fill="#B388FF" d="M0 0h128v128H0z"/> <path fill="#444" d="M58.4 24c4.2 5.9 23.9 10.2 38.9 4.6-4.2-14-17.1-23.2-31.1-21.1-11.7 1.8-20.8 11.2-23.7 22.9 7 3.2 14.5-3.8 15.9-6.4z"/> <path fill="#689F38" d="M72.7 101.3C56.3 100 48.8 89.4 48.8 89.4c-2.2 4.2-5.2 8.7-9.2 13.5l-.3.4-1.7 2c-.9 1.1-2 2.6-3.4 4.5-2.8 3.9-6.6 9.5-10.8 16.6l-.8 1.4h80.1c-2.5-9.8-5.1-20.3-7.3-30.2-8.9 3.4-16.5 4.3-22.7 3.7z"/> <path fill="#FFCC80" d="M101.8 51.3l-2.6-10.4c-.2-2.5-.5-4.9-.7-6.9-.2-1.9-.6-3.6-1.2-5.3-24.8 3.7-35-2.5-39.1-8.4-1.5 2.6-5.8 8.4-15.6 10.2-.1.2-.1.5-.1.7-.9-.3-1.9-.4-3-.2-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 6.6 6.8 12.1 18.6 2.4 37 0 0 7.4 10.6 23.8 11.9 6.3.5 13.8-.3 22.8-3.6l-.5-2.1c-.3-1.4-4-22.1-4.2-29-.2-7.6.7-12.3 1.9-15.3h9zM81.1 40.5c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9.1-1.6-.7-1.6-1.6zm-41.7 62.8s0 .1-.1.1l.3-.4c0 .1-.1.2-.2.3z"/> <circle fill="#444" cx="82.7" cy="40.5" r="2"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-2"> <path fill="#B9F6CA" d="M0 0h128v128H0z"/> <path fill="#FFCC80" d="M70.1 122.5l.6-.1c6.1-.8 12-2.4 17.7-4.8 1.2-.5 2.4-1.1 3.2-2.1 1.3-1.7-.1-5.6-.5-7.7-.7-3.8-1.3-7.7-1.9-11.5-.7-4.5-1.5-9.1-1.6-13.7-.2-7.6.7-12.3 1.9-15.3h9l-2.6-10.4c-.2-2.4-.4-4.8-.7-6.8-.2-1.9-.6-3.6-1.2-5.3-14.9 2.2-24.5.9-30.7-1.8l-23.1 4.5-.7.1h-.7c-.4-.1-.9-.2-1.2-.4-.4 0-.9 0-1.4.1-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 5.8 5.9 8.4 13.8 7.4 22-.6 4.7-2.2 9.4-4.4 13.6-.5 1-1 1.6-1.1 2.8-.1 1.1-.1 2.3.1 3.4.4 2.3 1.5 4.4 3 6.2 2.6 3.1 6.4 5 10.4 5.8 3.8.4 7.6.3 11.4-.1zm9.5-67.6c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c-.1-.8.7-1.6 1.6-1.6zM128 97.7c-3.3 1.9-6.6 3.7-9.9 5.3-3.2 1.5-6.3 2.9-9.6 4.2-.9.4-2.1.5-2.9 1.1-1.1.8-1.9 2.5-2.3 3.7-.6 1.6-.6 3.4.3 4.8.8 1.2 2.1 2 3.5 2.6 5.9 2.9 12.2 5.1 18.6 6.5 1.4.3 2.3 1.8 2.4.1V97.9c-.1.1-.1-.1-.1-.2z"/> <path d="M38.9 47.4zm.7 0z" fill="none"/> <path fill="#444" d="M94.2 44.9c-.8-2.6-1.8-5-3.2-7.2l-7.2 1.4-20.4 4c6.3 2.7 15.9 4 30.8 1.8z"/> <path fill="#E65100" d="M38.9 48.4h.7c.2 0 .5 0 .7-.1l23.1-4.5 20.4-4 23.3-4.5c1.9-.4 3.2-2 2.9-3.6-.3-1.6-2.1-2.6-4.1-2.3l-19.6 3.8-1.3-6.8C83 15.5 70 8.7 55.9 11.5c-14 2.7-23.7 13.9-21.6 24.9h.1l1.7 9v.7c.2.8.7 1.4 1.4 1.9.5.1 1 .3 1.4.4z"/> <circle fill="#444" cx="79.6" cy="56.5" r="2"/> <path fill="#689F38" d="M128 128v-1.8L106.3 108l-.4.2-2.9 1.3c-3 1.3-6 2.6-9.2 3.8l-1.4.5c-9 3.3-16.5 4.1-22.8 3.6-16.4-1.3-23.8-11.9-23.8-11.9-2.2 4.2-5.2 8.7-9.2 13.5l-.3.4-1.7 2c-.9 1.1-2 2.6-3.4 4.5-.4.6-.9 1.3-1.4 2l98.2.1z"/> <path fill="#FFCC80" d="M36.3 119.3s.1-.2.2-.3c-.1.1-.2.2-.2.3z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-3" x="384"> <path fill="#80D8FF" d="M0 0h128v128H0z"/> <path fill="#5D4037" d="M53.7 68.3c.9-.1 1.7-.3 2-.9.1-.2.2-.4.2-.6.2-1-.2-2-.5-3-1.2-3.2-2-6.4-2.2-9.8-.3-3.9.4-7.8 1-11.6l12.7-8.1c.8-.5 1.8-1.5 2.7-1.7.9-.3 2.4.6 3.3.8 1.3.4 2.6.6 4 .9 5.4.9 10.9.7 16.2-.6 1.3-.3 2.7-1.1 4-1.3-.3-2.1-1.5-4.3-2.5-6.1-1-1.9-2.2-3.7-3.6-5.3-2.7-3.2-6-5.8-9.8-7.5-3.3-1.5-6.8-2.4-10.4-2.5 0 0-50.8-8.1-42.4 56.4l12.8.5 8.7.3c.9-.1 2.5.2 3.8.1z"/> <path d="M59.5 25.7l-.3-.4c0 .2.1.3.3.4zm-1-1.2c-.2-.2-.3-.4-.4-.6.1.2.2.4.4.6zm.4.6l-.3-.4.3.4zm1.1 1.2l-.4-.4c.2.1.3.3.4.4zM46.3 56.2zm.5.4l.3.3-.3-.3zm-.2-.2l.2.2-.2-.2zm-.2-.2l.1.1-.1-.1zm14.3-29.3l-.4-.4c.1.1.2.3.4.4zm8.6 4.7l-1-.3c.3 0 .6.2 1 .3zm1.3.3c-.4-.1-.8-.2-1.1-.3.3.1.7.2 1.1.3zm-23.4 25l.4.4c-.2-.1-.3-.3-.4-.4zm27-24.2l-.9-.2c.3.1.6.2.9.2zm-12.8-5.2l-.5-.4c.1.1.3.2.5.4zm6.7 3.7c-.3-.1-.6-.2-.9-.4.2.1.6.2.9.4zm-5.9-3.1l-.6-.5.6.5zm3.7 2.2c-1.4-.6-2.6-1.3-3.6-2.1 1 .7 2.2 1.4 3.6 2.1zm1.1.4l-.9-.4c.2.2.5.3.9.4zm20.1 2.7h-.8.8zm-3.2 0h1.4-1.4zm-3.9 0l1.9.1c-.6 0-1.1 0-1.7-.1H80zm2 0h1.6H82zm6.1-.1c.3 0 .7 0 1-.1h-.2c-.2.1-.5.1-.8.1zm6.2-.6l-.7.1c1.2-.1 2.4-.3 3.6-.5l-2.2.3c-.2.1-.5.1-.7.1zm-3.4.4c-.3 0-.6 0-.8.1.9-.1 1.9-.2 2.9-.3l-.8.1c-.5 0-.9 0-1.3.1zM51.1 61.9c.2.3.4.6.5 1-.2-.4-.3-.7-.5-1zm-3.5-4.6c.8.8 1.8 1.9 2.8 3.5-1-1.5-2-2.7-2.8-3.5zm2.9 3.6l.6.9c-.3-.3-.5-.6-.6-.9zm1.2 2.1l.6 1.1c-.3-.4-.4-.8-.6-1.1zm26.5-29.8l-.9-.1c-.2 0-.3 0-.5-.1l-.9-.1h-.2c1.3.2 2.6.3 4 .4-.3 0-.6 0-.9-.1-.2.1-.4.1-.6 0zm-3.8-.4l1.1.2-.9-.1c-.1-.1-.2-.1-.2-.1zm-3.7-.8c.7.2 1.5.4 2.3.5l-.9-.2-1.4-.3zM52.2 64.1c.6 1.2 1.1 2.6 1.5 4.1-.4-1.5-.9-2.9-1.5-4.1z" fill="none"/> <path fill="#E65100" d="M101.3 128h.3c-2.4-9.5-4.8-19.4-6.8-28.7-7.6 2.7-39.3.6-45.1-5.1-2.5 4.9-6 10.3-10.8 16.2H97l4.3 17.6z"/> <path fill="#2A56C6" d="M97.2 92.5v-.2.2z"/> <path fill="#00838F" d="M39.2 107.1l.3-.4-.3.3v.1z"/> <path fill="#EE8100" d="M101.6 128c-1.5-5.8-3-11.8-4.3-17.7H38.9c-.9 1.1-2.1 2.2-3.1 3.3-.2.2-.3.4-.5.5-4 4.6-7.5 9.2-10.4 13.8h76.7z"/> <path fill="#FFE0B2" d="M72.4 103.8c5.9-.2 14.8-1.8 22.4-4.5-.3-1.4-.6-2.7-.8-4.1-1.9-9.4-3.2-18.1-3.4-25-.5-19.6 6.6-20.2 6.6-20.2h2.1c0-4.2-.5-8.8-.9-12.3-.2-1.9-.6-3.6-1.2-5.3l-3.6.5-.6.1-2.9.3c-.3 0-.6 0-.9.1-.3 0-.7 0-1 .1-.3 0-.7 0-1 .1h-5.1c-.7 0-1.3 0-1.9-.1h-.3c-1.4-.1-2.8-.2-4-.4h-.2l-1.1-.2h-.2l-.9-.2c-.1 0-.2 0-.3-.1l-2.3-.5h-.1c-.4-.1-.8-.2-1.1-.3-.1 0-.1 0-.2-.1l-1-.3c-.1 0-.1 0-.2-.1-.3-.1-.6-.2-.9-.4-.1 0-.1 0-.2-.1l-.9-.4s-.1 0-.1-.1c-1.4-.6-2.6-1.3-3.6-2.1l-.1-.1-.6-.5-.2-.2-.5-.4-.2-.2-.4-.4-.2-.2-.4-.4-.2-.2-.3-.4-.2-.2-.3-.4-.1-.2c-.2-.2-.3-.4-.4-.6l-8 24.9-11.2-14.1c-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1h.1l.1.1.2.2.1.1.3.3.1.1.4.4c.8.8 1.8 1.9 2.8 3.5v.1l.6.9s0 .1.1.1c.2.3.4.6.5 1 0 0 0 .1.1.1l.6 1.1c.6 1.2 1.1 2.6 1.5 4.1 1.7 6.2 1.6 14.8-4 25.9 5.6 5.8 13.6 9.4 22.5 9.7z"/> <circle fill="#444" cx="84.2" cy="44.1" r="2"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-4" x="384" y="128"> <path fill="#84FFFF" d="M0 0h128v128H0z"/> <path fill="#444" d="M28 54.2c1-.2 1.5.5 2.8.8 1.3.3 2.7.2 4-.2 2.2-.7 4.1-2.1 6.1-3.4 12.6-8.2 28.9-10.4 43.2-5.8 3 1 6 2.3 8 4.7.9 1.1 1.6 2.4 2.5 3.6s2.1 2.2 3.5 2.4c5.2.8 4.9-8.6 4.9-11.8 0-21.3-17.3-38.6-38.6-38.6S25.8 23.2 25.8 44.5c0 3.2.2 7 1.4 10 .3-.1.6-.2.8-.3z"/> <path fill="#8D6E63" d="M44.3 103.5c0 .2-.1.4-.1.5-.5 3.9.3 7.9 2.3 11.3 2.1 3.7 5.4 6.6 9.2 8.3 3.1 1.4 6.5 2.1 10 2.1 5.3-.1 10.6-2 14.2-5.9 1.9-2.1 3.2-4.6 4.5-7.1.9-1.7 1.8-3.4 2.5-5.2.6-1.7.6-2.3-.5-3.6-2.2-2.6-4.1-5.7-4.9-9.1-.9-4.1.3-9.7 3.5-12.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.4-3.2-1.1-6.3-3.7-7.9-.5-.3-.9-.5-1.5-.7h-.1c-.2-.1-.5-.2-.7-.2h-.1c-.3-.1-.6-.1-.8-.2-1.4-.2-2.8 0-4 .5-.8-14-13.9-11-29.9-11-14.6 0-26.8-2.5-29.4 7.8-.2.9-.5 2-.8 3.1-1.2-.4-2.4-.6-3.8-.4-.3 0-.6.1-.9.2l-.3.1-.6.2-.3.1-.6.3-.2.1-.8.5c-2.3 1.7-3.6 4.5-3.2 7.6.3 2.1 1.3 3.8 2.8 5.1 0 0 10.9 9.3 11 9.3 4.6 3.9 8.2 10.7 8.6 16.7.1 1.8 0 3.7-.5 5.5-.1 1.5-1 3-1.3 4.6z"/> <path d="M100.4 53.6zm-.8-.3h-.1.1zm-70.5.3l-.3.1c.1 0 .2 0 .3-.1zm-.9.4l-.2.1s.1 0 .2-.1zm1.7-.7l-.3.1c.2 0 .3-.1.3-.1z" fill="none"/> <path fill="#8D6E63" d="M39.3 109.5c-.1.1-.1.2-.1.2l.5-.6c-.1.1-.2.3-.4.4z"/> <path fill="#FFEB3B" d="M62.8 128h6.8l-3.4-5zm-23.6-18.3c-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-1.3 1.6-2.8 3.6-4.4 5.8h28.6l-10.2-18.1zm72.3 16.6c-1.3-2.2-2.3-3.9-3.1-5.1-.9-1.3-1.3-2-1.3-2l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.1-3.4-7-5.2-10.9-5.7l-.3.4L83.6 128h28.9c-.3-.6-.7-1.2-1-1.7z"/> <circle fill="#444" cx="79.5" cy="62.7" r="2"/> <circle fill="#444" cx="53.8" cy="62.8" r="2"/> <path fill="#F57F17" d="M65.7 122.3l.5-.4L44 103.5l-4.3 5.6-.5.6L49.4 128h13.4l3.4-5zm0 0l.5.7 3.4 5h14l10.1-16.8.3-.4-6.4-6.2-.4.3-21 17z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-5" x="384" y="256"> <path fill="#FFFF8D" d="M0 0h128v128H0z"/> <path fill="#C2C2C2" d="M51.7 31.4v-22s-19.6 2.5-15.8 29.9c11 0 14.8-4.3 15.8-7.9z"/> <path fill="#848484" d="M94.1 39.8c.1-1 0-2-.1-3 0-1-.1-1.9-.2-2.9-.2-1.8-.4-3.5-.8-5.2-.6-2.9-1.5-5.8-2.9-8.4-1.1-2.2-2.6-4.2-4.3-6-1.6-1.6-3.3-2.9-5.3-3.9-1.8-1-3.8-1.7-5.8-2.2-2-.5-4-.8-6-.9-1.9-.1-3.8-.1-5.7 0-1.7.1-3.3.3-5 .6-1.3.2-2.5.5-3.8.8l-2.2.6-.4.1v20.8c0 1-.1 1.8.4 2.7.2.3.5.6.6.9.3.9.7 1.8 1.2 2.7 1.1 1.8 2.7 3.4 4.7 4.3 2.4 1.1 5.1 1.4 7.8 1.6 4.8.3 9.6.4 14.3.3 2.2 0 4.3-.3 6.4-.9 1.2-.3 2.4-.6 3.6-1 .6-.2 1.2-.4 1.8-.5.6-.2 1.2-.5 1.7-.5z"/> <path fill="#FFE0B2" d="M66.8 116.8l17.9-8.7 3.1-8.2c-15.1-17 1.2-31.6 2.3-32.5h.1l13.2-11.1c1.5-1.2 2.5-3 2.8-5 .6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.2-1-.5-1.9-.8-2.9-26.9 3.7-37.9-2.5-42.4-8.4-1.6 2.6-5.1 6.1-15.8 7.9-.2.9-.5 2-.8 3.1-1.2-.4-2.4-.6-3.8-.4-4.4.6-7.5 4.7-6.9 9.1.3 2 1.3 3.8 2.8 5l7.5 6.4c4.2 4.5 18.4 21.7 9 37l.7 3.7 4.7 4.6 17.6 8.9z"/> <path fill="#055524" d="M39.8 104.7zm54.3-.4l-.8 1.5-6.8 12.1V128H128v-2.3z"/> <path fill="#FFE0B2" d="M40.4 103.9c-.2.2-.3.4-.5.5 0 0-.1.1-.1.2v.1l.6-.8z"/> <circle fill="#444" cx="80" cy="51.7" r="2"/> <circle fill="#444" cx="54.3" cy="51.7" r="2"/> <path fill="#055524" d="M39.8 104.7c-3.2.9-6.1 2.7-8.6 5.5l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-2.3 2.9-5.1 6.7-8.3 11.4h31v-7.8l-8.7-15.5z"/> <path fill="#848484" d="M65.3 67.3s2.7 9.8 14.5 9.8c0 0 3.9-18.5-14.5-18.5v8.7z"/> <path fill="#C2C2C2" d="M65.3 67.3v-8.7C46.9 58.6 50.8 77 50.8 77c11.8 0 14.5-9.7 14.5-9.7z"/> <path fill="#A7FFEB" d="M80.9 128h5.6v-10.1zm-21 0h13.8l-6.9-10zm-11.5 0h4.3l-4.3-7.8z"/> <path fill="#1DE9B6" d="M66.8 118l-.5-.8.5-.4-22.9-17.3h-.1l-3.4 4.4-.6.8 8.6 15.5 4.3 7.8h7.2zm26.5-12.2l.8-1.5-6.4-4.4-20.9 16.9-.5.4.5.8 6.9 10h7.2l5.6-10.1z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-6" y="384"> <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#F2A600" d="M30.3 43.7c3.1-.4 6.1 1 7.7 3.4 10.3-2 11-11.5 12.6-14.1 4.5 5.8 13.3 17.8 39.5 14.5 1.6-2.7 4.7-4.3 8-3.8.4 0 .7-1.9 1-1.8-.1-2.2-.3-4.4-.8-6.4v-.1C94.9 19.6 80.8 7.8 64 7.8c-15 0-27.8 9.4-32.8 22.6C29.8 34 29 38 28.9 42.1l.7 1.8.7-.2z"/> <path d="M89.1 102.8l.4-.3c-.1 0-.3.1-.4.3zm2.2-1.9l-.5.4c.2-.2.3-.3.5-.4zm-18 9.2c-.1 0-.2 0-.3.1.1-.1.2-.1.3-.1zm-2.4.4h-.2.2zm16.1-6.2l.3-.2-.3.2zm-9 4.5l.5-.2-.5.2zm4.9-2.1l.2-.1c-.1.1-.1.1-.2.1zm2-1.1l.5-.3-.5.3zm-4.6 2.3l.4-.2c-.1.1-.2.2-.4.2zm12.6-8.6zM30.3 41.7c-.3 0-.5.1-.7.1.2 0 .5 0 .7-.1zm35.9 69.2c-.6 0-1.2 0-1.9-.1.6 0 1.2.1 1.9.1z" fill="none"/> <path fill="#F2A600" d="M41.5 101.3l.8.7c-.3-.3-.5-.5-.8-.7zm1.4 1.1c.2.2.5.4.8.6-.3-.2-.6-.4-.8-.6zm1.3 1.1c.2.2.5.4.8.5-.2-.1-.5-.3-.8-.5zm54.1-68.1zM38.7 98.3c.4.4.8.8 1.1 1.3-.4-.4-.8-.8-1.1-1.3zm-7.6-67.9zm15.4 74.7l.5.3-.5-.3zm4.6 2.4l.3.1c-.1 0-.2 0-.3-.1zm-3.1-1.6l.5.3c-.2-.1-.4-.2-.5-.3zm13.6 4.6l-.9-.1.9.1zM88.9 67c-1.6 1.4-3.1 2.7-4.4 3.9-3.3 3.8-6.3 10.3-1 18.7 5.7-8.1 10.6-17.7 13.2-29.1L88.9 67zM41 100.8l-.8-.8.8.8zm8.5 6l.4.2c-.1-.1-.2-.2-.4-.2zm9.5 3.3h.1-.1zm-46.1 17.3c4.5-7.1 8.6-12.7 11.7-16.6 1.5-2 2.8-3.5 3.7-4.5 1-1.1 1.5-1.7 1.5-1.7l.2-.2c2.4-2.7 5.3-4.5 8.4-5.4.1-.2.2-.4.2-.5 0-.1 0-.2.1-.2 13.6-13.3 4.7-26.5-1.5-32.9l-4.4-3.8c-2.6 8.7-8.5 18.2-20.1 26.9-6.4 4.1-10.6 11.4-10.6 19.7 0 8.2 4.1 15.4 10.4 19.8l.4-.6z"/> <path fill="#FFE0B2" d="M67.1 110.9h-2 2zM38.8 98.1c-.4.3 2.1 5.6 2.5 5.9 1.8 1.8 4.1 2.2 6.3 3.5 4.8 2.7 10.2 3.6 15.6 4.2 5.7.6 11.5-.5 16.8-2.6 2.5-1 4.8-2.3 7-3.8 1.2-.8 2.2-1.6 3.3-2.6.4-.3 2.4-3.6 2.7-3.3-4-3.3-8-6.9-10.4-11.6-2.2-4.2-2.6-9.1-.5-13.4 1.7-3.3 4.5-5.6 7.3-7.9 2.2-1.8 4.3-3.6 6.5-5.5l4.7-3.9c1-.8 2.1-1.6 2.8-2.7 1.5-2 1.9-4.6 1.2-7-1.4-4.8-7.1-7.2-11.5-4.9-1 .5-1.9 1.3-2.6 2.2l-.5.7-1.1.1c-.8.1-1.6.2-2.4.2-2.6.2-5.3.3-7.9.1-6.8-.3-13.5-2.1-19.1-6-3.6-2.4-6.3-5.6-8.9-9-.5.9-.8 1.9-1.1 2.8-.5 1.4-1 2.7-1.6 4-1.7 3.3-4.5 5.8-8.2 6.9-.5.2-1.1.3-1.7.4-.3-.5-.7-.9-1.1-1.3-.9-.6-2.1-1.3-3.3-1.6-2.5-.7-5.2-.2-7.2 1.4-3.9 3.1-4 9.2-.1 12.5l10.5 8.9c2.4 2 4.3 4.8 5.9 7.4 2.1 3.5 3.4 7.6 3.2 11.7-.3 5.6-3.3 10.4-7.1 14.2-.1.1 13.6-13.3 0 0z"/> <path fill="#80DEEA" d="M93 99.4l-.2-.1-1.5 1.5-.5.4c-.4.4-.9.8-1.3 1.1l-.4.3c-.6.5-1.2.9-1.8 1.3l-.3.2c-.5.4-1.1.7-1.6 1l-.5.3-1.8 1-.2.1c-.7.4-1.4.7-2.1 1l-.4.2-1.8.7-.5.2c-.8.3-1.5.5-2.3.7l-2.4.6c-.1 0-.2 0-.3.1l-2.1.4h-.2c-1.5.2-3 .3-4.5.4h2-1.9c-.6 0-1.2 0-1.9-.1l-2.7-.3-.9-.1-1.6-.3h-.1c-2.7-.6-5.2-1.4-7.6-2.4l-.3-.1c-.4-.2-.8-.4-1.2-.5l-.4-.2c-.4-.2-.7-.4-1-.5l-.5-.3-1-.6-.5-.3c-.5-.3-1-.6-1.5-1-.3-.2-.5-.4-.8-.5l-.6-.5-.8-.6-.6-.5c-.3-.2-.5-.4-.8-.7l-.5-.5-.8-.8-.4-.4c-.4-.4-.8-.8-1.1-1.3-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.1.2-.2.4-.4.6H118c-2.7-5.4-5.1-9.8-7.1-13.1-1.3-2.2-2.3-3.9-3.1-5.1-.9-1.3-1.3-2-1.3-2l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.3-3.3-7.4-5.2-11.4-5.5z"/> <circle fill="#444" cx="78.9" cy="51.3" r="2"/> <circle fill="#444" cx="53.2" cy="51.3" r="2"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-7" x="128" y="384"> <path fill="#FFCC80" d="M41.6 123.8s0 .1-.1.1l.3-.4c-.1.2-.1.2-.2.3z"/> <path fill="#80D8FF" d="M0 0h128v128H0z"/> <path fill="#5D4037" d="M29.3 123.1c4.1-6.9 7.8-12.4 10.5-16.2 1.4-1.9 2.5-3.4 3.3-4.4l1.7-2s0-.1.1-.1l.3-.3C49 95.4 51.9 91 54.1 87c9.5-17.8 6.1-29.3-.3-35.9-1.6-1.6-3.2-2.9-4.7-4-.9-.6-1.7-1.1-2.4-1.6-1.8-1-3.1-1.6-3.3-1.7-1.3-1.2-2.2-2.9-2.5-4.9-.5-4.3 2.2-6.2 6.1-6.8 1-.1 2-.1 2.9.2 9.6-1.8 11.9-8 13.3-10.6 4 5.7 13.9 9.8 38 6.1C97.1 14.3 84.5 5.4 71 7.4c-4.4.7-8.3 2.4-11.8 4.9l-.1.1c-1.1.8-2.1 1.6-3 2.6l-35 30C12.9 49.8 7.3 58.8 7.3 69.1c0 2.7.4 5.3 1.1 7.8.3 4.9-.1 11.7-2.9 18.6-.2.5-.5 1-.7 1.6-1.2 3.2-1.9 6.6-1.9 10.2 0 8.2 3.5 15.6 9.1 20.7h14.5c1-1.7 1.9-3.4 2.8-4.9zm20.5-90.8z"/> <path fill="#FFCC80" d="M63.1 19.8c-1.4 2.6-5.7 8.8-15.3 10.6-.9-.3-1.9-.3-2.9-.2-3.9.6-6.7 4.5-6.1 8.8.3 2 1.2 3.7 2.5 4.9.2.1 1.5.6 3.3 1.7.7.4 1.6 1 2.4 1.6 1.5 1.1 3.1 2.4 4.7 4 6.4 6.6 11.8 18.1 2.3 35.9 0 0 7.3 15.5 23.2 16.9 6.1.5 13.3-5.6 22.1-8.8-.1-.7-.3-1.4-.5-2.1-.3-1.3-3.9-21.5-4.1-28.2-.2-7.4.7-11.9 1.9-14.8h8.8L103 39.7c-.2-2.4-.4-4.7-.7-6.7-.2-1.8-.6-3.5-1.1-5.2-24.2 3.7-34-2.3-38.1-8zm22.3 19.6c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6zm-35.6-7.1zm-4.9 68.1s0 .1-.1.1l.3-.4-.2.3z"/> <circle fill="#444" cx="86.9" cy="39.4" r="2"/> <path fill="#00BFA5" d="M77.2 98.5C61.3 97.2 54.1 87 54.1 87c-2.2 4-5.1 8.4-8.9 13.1l-.3.4c-.5.7-1.1 1.3-1.7 2-.8 1-2 2.5-3.3 4.4-2.8 3.8-6.5 9.2-10.5 16.2-.9 1.6-1.8 3.2-2.8 4.9h80.8l-.3-1c-2.6-10.3-5.4-21.4-7.7-31.9-8.8 3.1-16.1 3.9-22.2 3.4z"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-8" x="256" y="384"> <path fill="#FFCC80" d="M41.6 123.8s.1-.2.2-.3c-.1.2-.1.2-.2.3z"/> <path fill="#B388FF" d="M0 0h128v128H0z"/> <path d="M64.1 34.5c-.1.1-.2.2-.3.2.1-.1.2-.2.3-.2zm.9-.7c-.1.1-.2.1-.2.2l.2-.2zm-1.9 1.3c-.1.1-.2.2-.4.2.2 0 .3-.1.4-.2zm-5.4 2.6l-.5.2c.2-.1.4-.2.5-.2zm2.8-1.1l-.2.1s.1-.1.2-.1zm-1.3.5l-.4.2c.1 0 .2-.1.4-.2zm8.8-6.3l-.2.3c.1-.1.2-.2.2-.3zm-1.9 2.1l-.3.2.3-.2zm1.4-1.4l-.3.3c.1-.2.2-.3.3-.3zm-.7.6l-.3.3c.2-.1.3-.2.3-.3zM62 35.8l-.3.2.3-.2zm5 47l-.3 1.6.3-1.6zM56.2 38.1l-.5.1c.1 0 .3 0 .5-.1zm10.4 46.5c-.1.5-.2 1.1-.4 1.6.2-.5.3-1 .4-1.6zm.6-3.6l-.2 1.6c.1-.5.1-1 .2-1.6zm-5.6-20.8c.1.1.2.3.4.4l-.4-.4zm7.5-30.9l-.6.9c.5-.7.9-1.3 1.2-1.8-.1.2-.3.5-.5.7 0 .1 0 .2-.1.2zM67.2 81c1-10.6-2.4-17.3-5.2-20.4 2.7 3.1 6.2 9.8 5.2 20.4zm-1 5.5c-.1.6-.3 1.1-.5 1.7.2-.6.4-1.2.5-1.7zm-5.6-27.4l.2.2c-.1 0-.2-.1-.2-.2zm-.3-.2s.1.1.2.1c-.1 0-.1 0-.2-.1zm-.2-.1zm-.1-.1zm1.7 38.2c-.1-.1-.2-.2-.4-.3l.1.1.3.2zm-.5-37.1l.3.3-.3-.3zm-.3-.4l.3.3c-.2-.1-.2-.2-.3-.3z" fill="none"/> <path fill="#2A56C6" d="M98.8 94.8v.2-.2z"/> <path fill="#FFE0B2" d="M2.8 109.6L0 110.8V128h15.5L2.8 109.6z"/> <path fill="#DD2C00" d="M91.9 128h5.6c-3.8-12-4.4-16-4.9-20.1-.1-.5-.5-2.4-.5-2.9-2.6.7-5.2 1.1-8 1.2-8.7-.2-16.5-3.8-22.3-9.3l-.2-.2-.1-.1c-2.9.2-7.6.2-10.8.6-4.6.6-9.6 1.3-15 2.4-4.7.9-11.2 2.7-33.3 9.3l.5.7L15.5 128h70.2"/> <path fill="#FFEB3B" d="M66.2 86.5c0-.1 0-.1.1-.2.1-.6.3-1.1.4-1.6v-.2l.3-1.6v-.1l.2-1.6c1-10.6-2.4-17.3-5.2-20.4-.1-.1-.2-.3-.4-.4l-.1-.1-.3-.3-.1-.1-.3-.3-.1-.1-.2-.2-.1-.1c-.1-.1-.1-.1-.2-.1 0 0-.1 0-.1-.1l-.1-.1s-.1 0-.1-.1c-1.6-1.7-3.3-3-4.9-4.1-.9-.6-1.7-1.2-2.5-1.6-1.8-1.1-3.2-1.6-3.4-1.7-1.3-1.2-2.3-3-2.6-5-.6-4.4.3-6.4 4.3-7.1 1-.2 2-.1 3 .2l.1-.7c.6-.1 1.1-.2 1.6-.4l.5-.1 1.1-.3.5-.2 1-.3.4-.2c.4-.1.7-.3 1.1-.5l.2-.1 1.2-.6.3-.2c.3-.1.5-.3.8-.5.1-.1.3-.2.4-.2.2-.1.4-.3.7-.4.1-.1.2-.2.3-.2l.7-.5c.1-.1.2-.1.2-.2.3-.2.5-.4.8-.7.1-.1.2-.1.2-.2l.5-.5.3-.3.4-.4.3-.3.3-.4c.1-.1.2-.2.2-.3.2-.2.3-.4.4-.6l.6-.9.1-.2c.2-.3.3-.5.5-.7 4.2 5.9 14.5 10.4 39.3 6.7-4.2-14-17.3-23.5-31.3-21.4-5.3.8-10.1 3.2-14 6.6l-.2.2c-.5.4-1 .9-1.4 1.4-5.3 4.8-23.3 19.8-52.2 26.5-3.9 0-7.4 1.6-9.9 4.2v19.3c.3.3.6.6.9.8l-.3.9S30.9 96.4 64 90.3l1.6-1.8c0-.1 0-.1.1-.2.2-.7.4-1.3.5-1.8z"/> <path fill="#FFE0B2" d="M84 106.2c2.8-.1 5.4-.5 8-1.2l.8-3.8c4.3-19.3 9.7-37.4 15-52.9h6.9l-4.8-8.2c-.2-1.9-.6-3.6-1.2-5.3-24.8 3.7-35-2.5-39.1-8.4-.3.5-.7 1.1-1.2 1.8l-.4.6-.2.3-.3.4-.3.3-.4.4-.3.3-.5.5s-.1 0-.2.1c-.3.2-.5.4-.8.7-.1.1-.2.1-.2.2-.2.2-.4.3-.7.5-.1.1-.2.2-.3.2-.2.1-.4.3-.7.4-.1.1-.2.2-.4.2l-.8.5-.3.2-1.2.6-.2.1-1.1.5-.4.2c-.3.1-.6.2-1 .3l-.5.2c-.3.1-.7.2-1.1.3l-.5.1-1.6.4c-.1.2-.1.5-.1.7-.9-.3-1.9-.4-3-.2-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1l.1.1.1.1.1.1s.1.1.2.1c0 0 .1 0 .1.1l.2.2.1.1.3.3.1.1.3.3.1.1s.2.3.4.4c2.7 3.1 7.2 9.8 6.2 20.4l-.2 1.6v.1l-.3 1.6v.2c-.1.5-.2 1.1-.4 1.6 0 .1 0 .1-.1.2-.1.6-.3 1.1-.5 1.7 0 .1 0 .1-.1.2-.8 2.6-1.8 5.3-3.3 8.3.1.1.2.2.4.3 5.7 5.6 13.5 9.1 22.2 9.3z"/> <path fill="#DD2C00" d="M85.6 128h5.1"/> <circle fill="#444" cx="95.8" cy="46.5" r="2"/> </svg> <svg viewBox="0 0 128 128" height="128" width="128" id="svg-9" x="384" y="384"> <path fill="#FFCC80" d="M41.6 123.8s0 .1-.1.1l.3-.4c-.1.2-.1.2-.2.3z"/> <path fill="#FFFF8D" d="M0 0h128v128H0z"/> <path fill="#C2C2C2" d="M83.2 26.6c.1-.9.2-1.8.2-2.7C83.4 13.5 75 5 64.6 5s-18.8 8.4-18.8 18.8c0 1.4.2 2.7.4 4 5.4-4 12.2-6.4 19.4-6.4 6.5.1 12.5 2 17.6 5.2z"/> <path fill="#848484" d="M41.4 58.4c9.6-1.9 10.3-10.7 11.7-13.2 4.2 5.4 12.4 16.6 36.8 13.5 1.5-2.5 4.4-6 7.4-5.6.3 0 .6.1 1 .2C98 42 92 32.1 83.1 26.5 78 23.3 72 21.4 65.6 21.4c-7.3 0-14 2.4-19.4 6.4-7.9 5.9-13.1 15.2-13.3 25.7.4-.1.9 1.7 1.4 1.7 2.8-.4 5.6 1 7.1 3.2z"/> <path fill="#FF5722" d="M109.6 121.5c-1.2-2-2.2-3.6-2.9-4.8l-1.2-1.8-.2-.3c-.5-.8-1.1-1.6-1.8-2.3-3.1-3.3-6.9-5.1-10.8-5.3 0 0 .1 0 .1.1l-.2-.1c-3.4 3.7-7.8 6.6-12.7 8.5V128h33.4c-1.4-2.5-2.6-4.7-3.7-6.5zM42 106l-.2.5c-2.9.8-5.6 2.5-7.8 5.1l-.2.2s-.5.6-1.4 1.6c-.9 1-2 2.4-3.5 4.2-2.1 2.6-4.7 6.1-7.5 10.4h28v-15.7c-2.8-1.7-5.3-3.8-7.4-6.3z"/> <path fill="#E0F7FA" d="M67.7 117.7c-6.8-.2-13.1-2.1-18.3-5.4V128h30.5v-12.6c-3.8 1.4-7.9 2.2-12.2 2.3z"/> <path fill="#FFE0B2" d="M42 106c2.1 2.4 4.6 4.5 7.4 6.3 5.2 3.3 11.5 5.3 18.3 5.4 4.3-.1 8.4-.9 12.1-2.3 5-1.9 9.3-4.8 12.7-8.5l.2.1s-.1 0-.1-.1c-15.7-12.3-12-21.7-7.8-26.6 1.3-1.1 2.6-2.3 4.1-3.6l12.2-10.3c1.4-1.2 2.4-2.8 2.7-4.8.5-3.8-1.9-7.3-5.4-8.2-.3-.1-.6-.2-1-.2-3.1-.4-5.9 1.1-7.4 3.6-24.4 3.1-32.7-8.1-36.8-13.5-1.5 2.4-2.1 11.3-11.7 13.2-1.6-2.3-4.3-3.6-7.2-3.2l-1.4.3c-3.4 1.1-5.5 4.5-5 8.1.3 1.9 1.3 3.6 2.6 4.7l10.2 8.7c5.8 6 14.1 18.3 1.4 30.7-.1.1-.1.2-.1.2zm37.6-45.3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c-.1-.9.6-1.5 1.5-1.5zm-24 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c-.1-.9.6-1.5 1.5-1.5z"/> <circle fill="#444" cx="79.6" cy="62.2" r="2"/> <circle fill="#444" cx="55.6" cy="62.2" r="2"/> </svg> </defs></svg>'}; // Note: 'material.svgAssetsCache' is used with Angular Material docs
	// when launching code pen demos; @see codepen.js
	module.exports=angular.module('material.svgAssetsCache',[]).run(function($templateCache){angular.forEach(assetMap,function(value,key){$templateCache.put(key,value);});});

/***/ },
/* 18 */
/*!*******************************************************!*\
  !*** ./modules/directives/common/common_directive.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by XRene on 16/5/27.
	 */
	var $ = __webpack_require__(/*! jquery */ 19);
	
	module.exports = angular.module('commonDirective', []).directive('markDown', function () {
	    "use strict";
	
	    return {
	        restrict: 'EA',
	        scope: {},
	        require: '?ngModel',
	        replace: true,
	        template: '<div class="public-mark-down clearfix">' + '<div class="public-contenteditable-write">' + '<textarea class="public-write-box" contenteditable ng-model="hh">' + '</textarea>' + '</div>' + '<div class="public-contenteditable-show">' + '<div class="public-show-box">' + '</div>' + '</div>' + '</div>',
	        link: function link(scope, ele, attr, ngModel) {
	
	            if (!ngModel) return;
	
	            scope.$watch('hh', function (val) {
	                if (typeof val === 'string') {
	                    var _splitArr = val.split('\n'),
	                        html = '',
	                        _arr = applyGroup(_splitArr); //分组
	
	                    for (var i = 0; i < _arr.length; i++) {
	                        var _html = '';
	                        //使用正则去判断
	                        if (/^#[^#]/.test(_arr[i])) {
	                            _html += '<h1 class="common-directive-h1">' + _arr[i].slice(1) + '</h1>';
	                        } else if (/^##/.test(_arr[i])) {
	                            _html += '<h2 class="common-directive-h2">' + _arr[i].slice(2) + '</h2>';
	                        } else if (_arr[i][0] === '\t') {
	                            _html += '<pre class="common-directive-pcode">' + _arr[i].slice(1) + '</pre>';
	                        } else if (angular.isArray(_arr[i])) {
	                            //元素为数组
	                            var _str = '';
	                            for (var j = 0; j < _arr[i].length; j++) {
	                                _str += _arr[i][j];
	                            }
	                            _html += '<p class="common-directive-p">' + _str + '</p>';
	                        } else if (angular.isString(_arr[i]) && _arr[i] !== '') {
	                            _html += '<p class="common-directive-p">' + applyStyle(_arr[i]) + '</p>';
	                        }
	                        html += _html;
	                    }
	                    $('.public-show-box').html(html);
	                }
	
	                ngModel.$setViewValue(val);
	            });
	
	            $('.public-write-box').keydown(function (e) {
	                //var _textRange = this.createTextRange(); 获取光标位置
	                if (e.keyCode === 9) {
	                    $(this).val($(this).val() + '\t');
	                    return false;
	                }
	                if (e.keyCode === 13) {
	                    //$(this).val($(this).val() + '\t');
	                }
	            });
	
	            //段落分组
	            function applyGroup(arr) {
	                arr = arr || [];
	                var _pattern = /\t|#{1,2}/,
	                    _flag = false,
	                    _arr = [];
	                for (var i = 0; i < arr.length; i++) {
	                    //非制表符和#开头
	                    if (!_pattern.test(arr[i]) && arr[i] !== '') {
	                        if (!_flag) {
	                            _arr.push(arr[i]);
	                            _flag = true;
	                        } else {
	                            //段落的合并(数组最后一个元素是字符还是数组做出判断)
	                            if (typeof _arr[_arr.length - 1] === 'string') {
	                                var _str = _arr[_arr.length - 1];
	                                _arr[_arr.length - 1] = [];
	                                _arr[_arr.length - 1].push(_str);
	                                _arr[_arr.length - 1].push('<br>' + arr[i]);
	                            } else {
	                                _arr[_arr.length - 1].push('<br>' + arr[i]);
	                            }
	                        }
	                    } else {
	                        //排除空字符
	                        if (_arr[i] !== '') {
	                            _arr.push(arr[i]);
	                        }
	                        _flag = false;
	                    }
	                }
	                return _arr;
	            }
	
	            //段落内的样式匹配
	            function applyStyle(str) {
	                str = str || ''; //(如果不做强制类型变化的话正则表达式就不会起作用)
	                var _codePattern = /(`+)(?=\S)(.+?)(?=\S)\1/g,
	                    _strongPattern = /(\*\*|__)(?=\S)(.+?[*_]*)(?=\S)\1/g,
	                    //注意这个地方的贪婪
	                _italicPattern = /(\*|_)(?=\S)(.+?)(?=\S)\1/g,
	                    _result = '';
	
	                _result = str.replace(_strongPattern, '<strong>$2</strong>');
	
	                _result = _result.replace(_codePattern, '<code>$2</code>');
	
	                _result = _result.replace(_italicPattern, '<em>$2</em>');
	
	                return _result;
	            }
	
	            //获取光标位置可通过手动置一个span标签
	        }
	    };
	}).directive('topTips', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	    "use strict";
	
	    return {
	        resctrict: 'EA',
	        template: '<div class="public-top-tips" ng-class="{true: \'top-tips-show\'}[isShow]">' + '<p>{{msg}}</p>' + '</div>',
	        scope: {},
	        replace: true,
	        link: function link(scope, ele, attr) {
	            $rootScope.$on('top-tips', function (event, msg) {
	                scope.isShow = true;
	                scope.msg = msg;
	                $timeout(function () {
	                    scope.isShow = false;
	                }, 2000);
	            });
	        }
	    };
	}]).directive('sideTips', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	    "use strict";
	
	    return {
	        restrict: 'EA',
	        template: '<div class="public-side-tips" ng-class="{true: \'side-tips-show\'}[isShow]">' + '<p>{{msg}}</p>' + '</div>',
	        scope: {},
	        replace: true,
	        link: function link(scope, ele, attr) {
	            $rootScope.$on('side-tips', function (event, msg) {
	                scope.isShow = true;
	                scope.msg = msg;
	                $timeout(function () {
	                    scope.isShow = false;
	                }, 2000);
	            });
	        }
	    };
	}]).directive('publicDropdown', function () {
	    "use strict";
	
	    return {
	        resctrict: 'EA',
	        scope: {
	            list: '='
	        },
	        template: '<div class="public-dropdown">' + '<p class="dropdown-title">{{selectedItem}}<i class="fa fa-sort-desc"></i>' + '</p>' + '<div class="dropdown-box">' + '<ul class="dropdown-list">' + '<li class="list-item" ng-repeat="item in list" ng-click="selectItem(item)">{{::item.name}}</li>' + '</ul>' + '</div>' + '</div>',
	        require: '?ngModel',
	        replace: true,
	        link: function link(scope, ele, attr, ngModel) {
	
	            var dropdownBox = $('.dropdown-box');
	
	            scope.$watch('list', function (val) {
	                scope.selectedItem = val[0].name;
	            });
	
	            $('.dropdown-title').on('click', function (e) {
	                e.stopPropagation();
	
	                if (dropdownBox.css('display') === 'block') {
	                    dropdownBox.hide();
	                } else {
	                    dropdownBox.show();
	                }
	            });
	
	            $(window).on('click', function (e) {
	                dropdownBox.hide();
	            });
	
	            scope.selectItem = function (item) {
	                scope.selectedItem = item.name;
	                ngModel.$setViewValue(item.val);
	            };
	        }
	    };
	}).directive('loading', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	    "use strict";
	
	    return {
	        resctrict: 'EA',
	        scope: {
	            isCompleted: '='
	        },
	        replace: true,
	        template: '<div class="public-loading" ng-show="!isCompleted">' + '<div class="loading-container">' + '<div class="rect1"></div>' + '<div class="rect2"></div>' + '<div class="rect3"></div>' + '<div class="rect4"></div>' + '<div class="rect5"></div>' + '</div>' + '</div>',
	        link: function link(scope, ele, attr) {}
	    };
	}]);

/***/ },
/* 19 */
/*!*********************************!*\
  !*** ./~/jquery/dist/jquery.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];
	
	var document = window.document;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "2.2.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
	
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
	
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
	
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
	
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		register: function( owner, initial ) {
			var value = initial || {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key === undefined ) {
				this.register( owner );
	
			} else {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
	
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
	
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data, camelKey;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||
	
						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
	
					if ( data !== undefined ) {
						return data;
					}
	
					camelKey = jQuery.camelCase( key );
	
					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {
	
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =
	
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
		}
	
		jQuery.extend( support, {
			pixelPosition: function() {
	
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );
	
				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
	
				documentElement.removeChild( container );
				div.removeChild( marginDiv );
	
				return ret;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
	
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ },
/* 20 */
/*!***************************!*\
  !*** ./modules/router.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by XRene on 16/5/26.
	 */
	
	module.exports = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	    "use strict";
	
	    $urlRouterProvider.otherwise('/index');
	
	    $stateProvider.state('index', {
	        url: '/index',
	        views: {
	            main: {
	                template: __webpack_require__(/*! ./temp/todo.html */ 21),
	                controller: __webpack_require__(/*! ./controllers/todo-ctrl.js */ 22)
	            }
	        }
	    }).state('test', {
	        url: '/test',
	        views: {
	            main: {
	                template: __webpack_require__(/*! ./temp/test.html */ 23),
	                controller: function controller($scope) {
	                    $scope.data = 'Hello test Page';
	                }
	            }
	        }
	    }).state('record', {
	        url: '/record',
	        views: {
	            mainrecord: {
	                template: __webpack_require__(/*! ./temp/record.html */ 24),
	                controller: __webpack_require__(/*! ./controllers/record-ctrl.js */ 25)
	            }
	        }
	    }).state('todo', {
	        url: '/todo',
	        views: {
	            main: {
	                template: __webpack_require__(/*! ./temp/record.html */ 24),
	                controller: __webpack_require__(/*! ./controllers/record-ctrl.js */ 25)
	            }
	        }
	    });
	}];

/***/ },
/* 21 */
/*!********************************!*\
  !*** ./modules/temp/todo.html ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"todo-wrapper\">\n    <div class=\"public-btns clearfix\">\n        <a class=\"btn-item confirm-btn\" ui-sref=\"todo\">记录</a>\n    </div>\n    <div class=\"todo-box\" ng-repeat=\"boxItem in list\">\n        <p class=\"box-title\">{{boxItem.time}}</p>\n        <ul class=\"todo-list\">\n            <li class=\"list-item\" ng-repeat=\"item in boxItem.dataList\">\n                <p ng-click=\"showBox(item)\">\n                    <span class=\"item-content\">{{item.title}}</span>\n                    <span class=\"item-time\">{{item.time | date: 'yyyy-MM-dd hh:mm:ss'}}</span>\n                </p>\n                <div class=\"item-box\" ng-class=\"{true: 'item-box-active'}[item.isActive]\">\n\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ },
/* 22 */
/*!******************************************!*\
  !*** ./modules/controllers/todo-ctrl.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by XRene on 16/5/31.
	 */
	
	module.exports = ['$rootScope', '$scope', '$_sql', '$_util', function ($rootScope, $scope, $_sql, $_util) {
	    "use strict";
	
	    $_sql.dailyEventsQuery().then(function (data) {
	        $scope.list = getMonthsData(data);
	    }, function (data) {
	        console.log(data);
	    });
	
	    $scope.showBox = function (item) {
	        item.isActive = !item.isActive;
	    };
	
	    function getMonthsData(data) {
	        //按月分组
	        var _monthArr = [],
	            _result = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _key = _step.value;
	
	                var _time2 = $_util.getYearAndMonth(_key.time);
	                if (!_monthArr.includes(_time2)) {
	                    _monthArr.push(_time2);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        for (var i = 0; i < _monthArr.length; i++) {
	            _result[i] = {
	                time: _monthArr[i],
	                dataList: []
	            };
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var key = _step2.value;
	
	                    var _time = $_util.getYearAndMonth(key.time);
	                    if (_monthArr[i] === _time) {
	                        _result[i].dataList.push(key);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	        return _result;
	    }
	}];

/***/ },
/* 23 */
/*!********************************!*\
  !*** ./modules/temp/test.html ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = "<div>\n    {{data}}\n</div>"

/***/ },
/* 24 */
/*!**********************************!*\
  !*** ./modules/temp/record.html ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"index-wrapper\">\n    <p>{{data}}</p>\n    <div class=\"index-form\">\n        <input type=\"text\" ng-model=\"params.title\" placeholder=\"标题\"/>\n        <public-dropdown\n                ng-model=\"params.feeling\"\n                list=\"dataList\"\n                ></public-dropdown>\n    </div>\n    <mark-down\n            ng-model=\"params.content\"\n            ></mark-down>\n    <div class=\"public-btns\">\n        <a class=\"btn-item confirm-btn\" ng-click=\"confirm();\">提交</a>\n    </div>\n    <button ng-click=\"test();\">OK</button>\n    <loading></loading>\n</div>"

/***/ },
/* 25 */
/*!********************************************!*\
  !*** ./modules/controllers/record-ctrl.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by XRene on 16/5/27.
	 */
	
	module.exports = ['$scope', '$_sql', function ($scope, $_sql) {
	    $scope.data = '记录一下今天的心情吧~';
	
	    $scope.params = {
	        id: 1,
	        content: '',
	        feeling: 1
	    };
	
	    $scope.dataList = [{
	        name: '小太阳',
	        val: 1
	    }, {
	        name: '乌云',
	        val: 2
	    }];
	
	    $scope.confirm = function () {
	        $scope.params.time = new Date();
	        $_sql.dailyEventsWriteIn($scope.params, function (data) {
	            "use strict";
	
	            return;
	        }, function (data) {});
	    };
	
	    //$scope.$emit('top-tips', data);
	    $scope.test = function () {
	        $scope.$emit('top-tips', 'good jobs');
	    };
	}];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map