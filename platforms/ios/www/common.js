(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-5f438245.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-5f438245.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var iosTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 162).then(__webpack_require__.bind(null, /*! ./ios.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js"))},mdTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 163).then(__webpack_require__.bind(null, /*! ./md.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/md.transition.js"))};function transition(n){return new Promise(function(e,i){n.queue.write(function(){beforeTransition(n),runTransition(n).then(function(i){i.animation&&i.animation.destroy(),afterTransition(n),e(i)},function(e){afterTransition(n),i(e)})})})}function beforeTransition(n){var e=n.enteringEl,i=n.leavingEl;setZIndex(e,i,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),setPageHidden(e,!1),i&&setPageHidden(i,!1)}function runTransition(n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(n)];case 1:return[2,(e=i.sent())?animation(e,n):noAnimation(n)]}})})}function afterTransition(n){var e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function getAnimationBuilder(n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return e=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:e=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,e]}})})}function animation(n,e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,waitForReady(e,!0)];case 1:return t.sent(),[4,e.animationCtrl.create(n,e.baseEl,e)];case 2:return i=t.sent(),fireWillEvents(e.window,e.enteringEl,e.leavingEl),[4,playTransition(i,e)];case 3:return t.sent(),i.hasCompleted&&fireDidEvents(e.window,e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return e=n.enteringEl,i=n.leavingEl,[4,waitForReady(n,!1)];case 1:return t.sent(),fireWillEvents(n.window,e,i),fireDidEvents(n.window,e,i),[2,{hasCompleted:!0}]}})})}function waitForReady(n,e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return i=(void 0!==n.deepWait?n.deepWait:e)?[deepReady(n.enteringEl),deepReady(n.leavingEl)]:[shallowReady(n.enteringEl),shallowReady(n.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(n.viewIsReady,n.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(n,e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return n?[4,n(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(n,e){var i=e.progressCallback,t=new Promise(function(e){return n.onFinish(e)});return i?(n.progressStart(),i(n)):n.play(),t}function fireWillEvents(n,e,i){lifecycle(n,i,"ionViewWillLeave"),lifecycle(n,e,"ionViewWillEnter")}function fireDidEvents(n,e,i){lifecycle(n,e,"ionViewDidEnter"),lifecycle(n,i,"ionViewDidLeave")}function lifecycle(n,e,i){if(e){var t=new(0,n.CustomEvent)(i,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}}function shallowReady(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function deepReady(n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return(e=n)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}function setZIndex(n,e,i){void 0!==n&&(n.style.zIndex="back"===i?"99":"101"),void 0!==e&&(e.style.zIndex="100")}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js ***!
  \***********************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GESTURE_CONTROLLER; });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var GestureController=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new GestureDelegate(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new BlockerDelegate(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,i){if(!this.start(t,e,i))return!1;var r=this.requestedStart,s=-1e4;if(r.forEach(function(t){s=Math.max(s,t)}),s===i){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);void 0===i&&(i=new Set,this.disabledGestures.set(t,i)),i.add(e)},t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);void 0!==i&&i.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(BACKDROP_NO_SCROLL)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(BACKDROP_NO_SCROLL)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),GestureDelegate=function(){function t(t,e,i,r,s){this.id=e,this.name=i,this.priority=r,this.disableScroll=s,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),BlockerDelegate=function(){function t(t,e,i,r){this.id=e,this.disable=i,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new GestureController(document);

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/gesture.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/gesture.js ***!
  \****************************************************************/
/*! exports provided: createGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
/* harmony import */ var _chunk_892e1642_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-892e1642.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var _sPassive;function supportsPassive(t){if(void 0===_sPassive)try{var e=Object.defineProperty({},"passive",{get:function(){_sPassive=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){_sPassive=!1}return!!_sPassive}function addEventListener(t,e,n,r){var a,i,o=supportsPassive(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",i="__zone_symbol__removeEventListener"):(a="addEventListener",i="removeEventListener"),t[a](e,n,o),function(){t[i](e,n,o)}}var MOUSE_WAIT=2e3;function createPointerEvents(t,e,n,r,a){var i,o,s,c,u,v,d,l=0;function f(r){l=Date.now()+MOUSE_WAIT,e(r)&&(!o&&n&&(o=addEventListener(t,"touchmove",n,a)),s||(s=addEventListener(t,"touchend",p,a)),c||(c=addEventListener(t,"touchcancel",p,a)))}function m(r){l>Date.now()||e(r)&&(!v&&n&&(v=addEventListener(getDocument(t),"mousemove",n,a)),d||(d=addEventListener(getDocument(t),"mouseup",E,a)))}function p(t){_(),r&&r(t)}function E(t){X(),r&&r(t)}function _(){o&&o(),s&&s(),c&&c(),o=s=c=void 0}function X(){v&&v(),d&&d(),v=d=void 0}function y(){_(),X()}function Y(e){e?(i&&i(),u&&u(),i=u=void 0,y()):(i||(i=addEventListener(t,"touchstart",f,a)),u||(u=addEventListener(t,"mousedown",m,a)))}return{setDisabled:Y,stop:y,destroy:function(){Y(!0),r=n=e=void 0}}}function getDocument(t){return t instanceof Document?t:t.ownerDocument}function createPanRecognizer(t,e,n){var r=n*(Math.PI/180),a="x"===t,i=Math.cos(r),o=e*e,s=0,c=0,u=!1,v=0;return{start:function(t,e){s=t,c=e,v=0,u=!0},detect:function(t,e){if(!u)return!1;var n=t-s,r=e-c,d=n*n+r*r;if(d<o)return!1;var l=Math.sqrt(d),f=(a?n:r)/l;return v=f>i?1:f<-i?-1:0,u=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}function createGesture(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,a=e.onStart,i=e.onEnd,o=e.notCaptured,s=e.onMove,c=e.threshold,u=e.queue,v={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},d=createPointerEvents(e.el,function(t){var e=now(t);return!(p||!E)&&(updateDetail(t,v),v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp=e,v.velocityX=v.velocityY=v.deltaX=v.deltaY=0,v.event=t,(!n||!1!==n(v))&&(f.release(),!!f.start()&&(p=!0,0===c?y():(l.start(v.startX,v.startY),!0))))},function(t){m?!_&&E&&(_=!0,calcGestureData(v,t),u.write(X)):(calcGestureData(v,t),l.detect(v.currentX,v.currentY)&&(l.isGesture()&&y()||(h(),d.stop(),o&&o(v))))},function(t){var e=m,n=E;h(),n&&(calcGestureData(v,t),e?i&&i(v):o&&o(v))},{capture:!1}),l=createPanRecognizer(e.direction,e.threshold,e.maxAngle),f=_chunk_892e1642_js__WEBPACK_IMPORTED_MODULE_0__["a"].createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),m=!1,p=!1,E=!0,_=!1;function X(){m&&(_=!1,s&&s(v))}function y(){return!(f&&!f.capture()||(m=!0,E=!1,v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp,r?r(v).then(Y):Y(),0))}function Y(){a&&a(v),E=!0}function h(){m=!1,p=!1,_=!1,E=!0,f.release()}return{setDisabled:function(t){d.setDisabled(t)},destroy:function(){f.destroy(),d.destroy()}}}function calcGestureData(t,e){var n=t.currentX,r=t.currentY,a=t.timeStamp;updateDetail(e,t);var i=t.currentX,o=t.currentY,s=(t.timeStamp=now(e))-a;if(s>0&&s<100){var c=(o-r)/s;t.velocityX=(i-n)/s*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=i-t.startX,t.deltaY=o-t.startY,t.event=e}function updateDetail(t,e){var n=0,r=0;if(t){var a=t.changedTouches;if(a&&a.length>0){var i=a[0];n=i.clientX,r=i.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function now(t){return t.timeStamp||Date.now()}

/***/ }),

/***/ "./src/app/alluser/alluser.module.ts":
/*!*******************************************!*\
  !*** ./src/app/alluser/alluser.module.ts ***!
  \*******************************************/
/*! exports provided: AlluserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlluserPageModule", function() { return AlluserPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _alluser_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alluser.page */ "./src/app/alluser/alluser.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _alluser_page__WEBPACK_IMPORTED_MODULE_5__["AlluserPage"]
    }
];
var AlluserPageModule = /** @class */ (function () {
    function AlluserPageModule() {
    }
    AlluserPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_alluser_page__WEBPACK_IMPORTED_MODULE_5__["AlluserPage"]]
        })
    ], AlluserPageModule);
    return AlluserPageModule;
}());



/***/ }),

/***/ "./src/app/alluser/alluser.page.html":
/*!*******************************************!*\
  !*** ./src/app/alluser/alluser.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<i class=\"fal fa-users-crown fa-fw\"></i>\n\t\t\tAll User\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\" (click)=\"toggleMenu()\"></ion-menu-button>\n    </ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class=\"background-wrapper\">\n\t\t<div class=\"icon xxl\">\n\t\t\t<i class=\"fal fa-head-side fa-fw\"></i>\n\t\t\t<div class=\"text\">\n\t\t\t\tYou can see all customers and employees here. Plus, payments and sale details per customer.\n\t\t\t</div>\n\n\n\t\t\t<ul class=\"text menus\">\n\t\t\t\t<li>\t\t\n\t\t\t\t\t<i class=\"fal fa-user-cog fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tEmployee and Roles\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.employees.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-user-plus fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tAdd New Employee Acc.\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-cogs fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tRoles Detail\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.roles.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-users-class fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tCustomers Detail\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.customers.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-user-clock fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tCustomer & Payment\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.customerpayment.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-user-chart fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tCustomer & Sales\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.customersales.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-users-medical fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tAdd New Customer by Admin\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\"></i>\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<div class=\"loading\" *ngIf=\"global.cartsdownloading||global.salesdownloading\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/alluser/alluser.page.scss":
/*!*******************************************!*\
  !*** ./src/app/alluser/alluser.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alluser/alluser.page.ts":
/*!*****************************************!*\
  !*** ./src/app/alluser/alluser.page.ts ***!
  \*****************************************/
/*! exports provided: AlluserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlluserPage", function() { return AlluserPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlluserPage = /** @class */ (function () {
    function AlluserPage(navCtrl, menuCtrl, global) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.global = global;
    }
    AlluserPage.prototype.ngOnInit = function () {
    };
    AlluserPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AlluserPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alluser',
            template: __webpack_require__(/*! ./alluser.page.html */ "./src/app/alluser/alluser.page.html"),
            styles: [__webpack_require__(/*! ./alluser.page.scss */ "./src/app/alluser/alluser.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"]])
    ], AlluserPage);
    return AlluserPage;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_5__["CustomerPage"]
    }
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_5__["CustomerPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
            ]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.page.html":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <i class=\"far fa-child fa-fw\"></i>\n            Customer\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"text-xs-center\">\n<!--\t\tTODO: Indra kupret-->\n\t\t<div class=\"text-xs-center line-11\" *ngIf=\"customererror==true\" style=\"margin:30px 0;\">\n\t\t\tNo Customer Data Received<br>\n\t\t\t<small>\n\t\t\t\t<b>\n\t\t\t\t\t( ERROR ketika terima data )\n\t\t\t\t</b>\n\t\t\t</small>\n\t\t</div>\n\n\t\t<table class=\"table\" *ngIf=\"customererror==false\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"text-xs-left\">Customers</th>\n\t\t\t\t\t<th>Phone Num.</th>\n\t\t\t\t\t<th class=\"text-xs-right\">Last Log</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody *ngFor=\"let customer of customers\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td class=\"text-xs-left line-09\">\n\t\t\t\t\t\t{{customer.id}}.\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t<i class=\"fas fa-user\" [ngClass]=\"{'tx-primary':customer.title=='Mr.', 'tx-lightmagenta':customer.title=='Mrs.' || customer.title=='Ms.'}\"></i>\n\t\t\t\t\t\t\t{{customer.name}}\n\t\t\t\t\t\t</b>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{customer.email}}\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"line-10\">\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{customer.phone1}}\n\t\t\t\t\t\t\t<span *ngIf=\"customer.phone2!=''\">\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t{{customer.phone2}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-xs-right line-09\">\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{customer.updated_at}}\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerPage = /** @class */ (function () {
    function CustomerPage(global, http, router) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.customers = null;
    }
    CustomerPage.prototype.ngOnInit = function () {
        //console.log('customer mulai');
        this.getcustomerdata();
    };
    CustomerPage.prototype.ionViewWillEnter = function () {
        console.log("ANJING");
    };
    CustomerPage.prototype.ngOnEnter = function () {
        console.log("OnEnter on contact.page.ts");
    };
    CustomerPage.prototype.ionSelected = function () {
        console.log("KUCING MEONG");
    };
    CustomerPage.prototype.getcustomerdata = function () {
        var _this = this;
        this.customers = null;
        var url = this.global.api + "select/customers";
        console.log(this.global.logintoken);
        var post = {
            'app_token': this.global.logintoken,
            'usertype': this.global.usertype,
            'userID': this.global.userdata.id
        };
        this.httpresult = this.http.post(url, post, {
            responseType: 'json'
        });
        this.httpresult.subscribe(function (data) {
            if (data != null) {
                if (data instanceof Array) {
                    _this.customers = data;
                    _this.customererror = false;
                }
                else {
                    console.log('ERROR OUTPUT FROM ' + url);
                    _this.customererror = true;
                    _this.router.navigateByUrl('');
                }
            }
        });
    };
    CustomerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.page.html */ "./src/app/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ }),

/***/ "./src/app/master/master.module.ts":
/*!*****************************************!*\
  !*** ./src/app/master/master.module.ts ***!
  \*****************************************/
/*! exports provided: MasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageModule", function() { return MasterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _master_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master.page */ "./src/app/master/master.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _master_page__WEBPACK_IMPORTED_MODULE_5__["MasterPage"]
    }
];
var MasterPageModule = /** @class */ (function () {
    function MasterPageModule() {
    }
    MasterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_master_page__WEBPACK_IMPORTED_MODULE_5__["MasterPage"]]
        })
    ], MasterPageModule);
    return MasterPageModule;
}());



/***/ }),

/***/ "./src/app/master/master.page.html":
/*!*****************************************!*\
  !*** ./src/app/master/master.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<i class=\"fal fa-sun fa-fw\"></i>\n\t\t\tMaster\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\t\n\n<ion-content padding>\n\t<div class=\"background-wrapper\">\n\t\t<div class=\"icon xxl\">\n\t\t\t<i class=\"fal fa-crown fa-fw\"></i>\n\t\t\t<div class=\"text\">\n\t\t\t\tIn master, you can see main database, that should read for calculating and processing transaction. Master is the brain of Jakartabrosur program.\n\t\t\t</div>\n\n\n\t\t\t<ul class=\"text menus\">\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-scroll-old fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tView Paper Price + Details\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.papers.length>0\"></i>\t\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-warehouse fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tView Papershops and Vendors\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-dryer fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tView Finishings + Options\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-toggle-on fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tJobsubtype Activation + Details\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-scanner fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tExpense Price Lists\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.expenseprices.length>0\"></i>\t\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<div class=\"loading\" *ngIf=\"global.cartsdownloading||global.salesdownloading\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/master/master.page.scss":
/*!*****************************************!*\
  !*** ./src/app/master/master.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/master.page.ts":
/*!***************************************!*\
  !*** ./src/app/master/master.page.ts ***!
  \***************************************/
/*! exports provided: MasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPage", function() { return MasterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasterPage = /** @class */ (function () {
    function MasterPage(router, global) {
        this.router = router;
        this.global = global;
    }
    MasterPage.prototype.ngOnInit = function () {
    };
    MasterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.page.html */ "./src/app/master/master.page.html"),
            styles: [__webpack_require__(/*! ./master.page.scss */ "./src/app/master/master.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"]])
    ], MasterPage);
    return MasterPage;
}());



/***/ }),

/***/ "./src/app/pricelist/addprice/addprice.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pricelist/addprice/addprice.module.ts ***!
  \*******************************************************/
/*! exports provided: AddpricePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpricePageModule", function() { return AddpricePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _addprice_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addprice.page */ "./src/app/pricelist/addprice/addprice.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _addprice_page__WEBPACK_IMPORTED_MODULE_5__["AddpricePage"]
    }
];
var AddpricePageModule = /** @class */ (function () {
    function AddpricePageModule() {
    }
    AddpricePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [_addprice_page__WEBPACK_IMPORTED_MODULE_5__["AddpricePage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
            ]
        })
    ], AddpricePageModule);
    return AddpricePageModule;
}());



/***/ }),

/***/ "./src/app/pricelist/addprice/addprice.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pricelist/addprice/addprice.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <!-- <ion-back-button defaultHref=\"tabs/full/(pricelist:pricelist)\"></ion-back-button> -->\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n    \tTambah Daftar Harga\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item>\n\t    <ion-label color=\"primary\">Judul</ion-label>\n\t    <ion-input placeholder=\"Judul Harga\" type=\"text\" [(ngModel)]=\"newtitle\" class=\"text-xs-right\"></ion-input>\n\t  </ion-item>\n\n\t\t<ion-item>\n\t    <ion-label color=\"primary\">Keterangan</ion-label>\n\t    <ion-input placeholder=\"Detail\" type=\"text\" [(ngModel)]=\"newdetail\" class=\"text-xs-right\"></ion-input>\n\t  </ion-item>\n\n\t\t<ion-item>\n\t    <ion-label color=\"primary\">Harga</ion-label>\n\t    <ion-input placeholder=\"Rp xx.xxx,-\" type=\"number\" [(ngModel)]=\"newprice\" class=\"text-xs-right\"></ion-input>\n\t  </ion-item>\n\n\t\t<ion-item>\n\t\t  <ion-label color=\"primary\">Tipe Harga</ion-label>\n\t\t  <ion-select [value]=\"newtype\" ok-text=\"Okay\" cancel-text=\"Dismiss\" [(ngModel)]=\"newtype\" interface=\"action-sheet\" [interfaceOptions]=\"customActionSheetOptions\">\n\t\t\t  \t<ion-select-option *ngFor=\"let types of pricetypes\" [value]=\"types.id\">{{types.name}}</ion-select-option>\n\t\t    \n\t\t  </ion-select>\n\t  </ion-item>\n\n\t  <ion-item *ngIf=\"addpriceerror==true\">\n\t  \t<ion-label class=\"text-xs-center\" color=\"danger\">ERROR INPUT</ion-label>\n\t  </ion-item>\n\n\t</ion-list>\n\t<button class=\"btn btn-submit\" color='primary' (click)=\"addpriceclicked()\">\n\t\tSubmit\n\t</button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pricelist/addprice/addprice.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pricelist/addprice/addprice.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricelist/addprice/addprice.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pricelist/addprice/addprice.page.ts ***!
  \*****************************************************/
/*! exports provided: AddpricePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpricePage", function() { return AddpricePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddpricePage = /** @class */ (function () {
    function AddpricePage(global, http, router, navCtrl) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.navCtrl = navCtrl;
        this.customActionSheetOptions = {
            header: 'Colors',
            subHeader: 'Select your favorite color'
        };
        this.addpriceerror = false;
    }
    AddpricePage.prototype.ngOnInit = function () {
        this.getpricetypes();
    };
    AddpricePage.prototype.getpricetypes = function () {
        var _this = this;
        var url = this.global.api + "select/pricetypes";
        var post = {
            'app_token': this.global.logintoken,
            'usertype': this.global.usertype,
            'userID': this.global.userdata.id
        };
        this.httpresult = this.http.post(url, post, {
            responseType: 'json'
        });
        console.log("TARIK DATA");
        this.httpresult.subscribe(function (data) {
            console.log(data);
            if (data != null) {
                if (data instanceof Array) {
                    _this.pricetypes = data;
                    _this.pricetypeerror = false;
                    if (data.length > 1) {
                        _this.newtype = data[0].id;
                        console.log(data.length);
                    }
                }
                else {
                    console.log("ERROR OUTPUT FROM " + url);
                    _this.pricetypeerror = true;
                    _this.router.navigateByUrl('');
                }
            }
        });
    };
    AddpricePage.prototype.addpriceclicked = function () {
        var _this = this;
        var typeID = this.newtype;
        var title = this.newtitle;
        var detail = this.newdetail == null ? "" : this.newdetail;
        var price = this.newprice;
        console.log(typeID);
        console.log(title);
        console.log(detail);
        console.log(price);
        var url = this.global.api + "insert/pricelists";
        var post = {
            'app_token': this.global.logintoken,
            'usertype': this.global.usertype,
            'userID': this.global.userdata.id,
            'typeID': typeID,
            'title': title,
            'detail': detail,
            'price': price
        };
        this.httpresult = this.http.post(url, post, {
            responseType: 'json'
        });
        this.httpresult.subscribe(function (data) {
            if (data != null) {
                if (data instanceof Array) {
                    //this.datas = data;
                    _this.addpriceerror = false;
                    console.log('hasil disini');
                    console.log(data);
                    //this.router.navigateByUrl('tabs/full/(pricelist:pricelist)');
                    //this.navCtrl.navigateRoot('tabs/full/(pricelist:pricelist)');
                    //this.navCtrl.navigateBack();
                }
                else {
                    console.log("ERROR OUTPUT FROM " + url);
                    _this.addpriceerror = true;
                }
            }
        });
    };
    AddpricePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addprice',
            template: __webpack_require__(/*! ./addprice.page.html */ "./src/app/pricelist/addprice/addprice.page.html"),
            styles: [__webpack_require__(/*! ./addprice.page.scss */ "./src/app/pricelist/addprice/addprice.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], AddpricePage);
    return AddpricePage;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_5__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_5__["UserPage"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/user/user.page.html":
/*!*************************************!*\
  !*** ./src/app/user/user.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <i class=\"fal fa-users-crown fa-fw\"></i>\n\t\t\t&nbsp;\n\t\t\t<small>{{global.userdata.email}}</small>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\" (click)=\"toggleMenu()\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"single-user-wrapper\">\n\t\t<div class=\"header\">\n\t\t\t<div class=\"image\">\n\t\t\t\t{{global.userdata.name.charAt(0)}}\n\t\t\t</div>\n\t\t\t<div class=\"data\">\n\t\t\t\t<div class=\"text\">\n\t\t\t\t\t<div class=\"name\">\n\t\t\t\t\t\t{{global.userdata.name}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"role\">\n\t\t\t\t\t\t{{global.userdata.role.name}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"notif-preview\">\n\t\t\t<div class=\"header\">\n\t\t\t\t\n\t\t\t\tNotifikasi\n\t\t\t</div>\n\t\t\t<div class=\"list\">\n\t\t\t\t<ol>\n\t\t\t\t\t<li>hello World</li>\n\t\t\t\t\t<li>Septi Bau Kentut</li>\n\t\t\t\t\t<li>...</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t</div>\n      \n\t\t<div class=\"loading\" *ngIf=\"global.cartsdownloading||global.salesdownloading\">\n\t\t</div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user/user.page.scss":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-user-wrapper .header {\n  display: flex;\n  margin-bottom: 10px; }\n  .single-user-wrapper .header .image {\n    background-color: #7744dd;\n    color: white;\n    border-radius: 100px;\n    border: 0;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 10px 0 20px;\n    font-family: Google;\n    font-size: 120%;\n    font-weight: bold; }\n  .single-user-wrapper .header .data {\n    display: flex;\n    align-items: center; }\n  .single-user-wrapper .header .data .text {\n      line-height: 1; }\n  .single-user-wrapper .header .data .text .name {\n        font-size: 130%;\n        font-family: Helvetica;\n        font-weight: 600;\n        color: #555; }\n  .single-user-wrapper .header .data .text .role {\n        font-weight: 800;\n        font-size: 85%;\n        color: #779;\n        font-family: Google;\n        padding: 3px 1px; }\n  .single-user-wrapper .notif-preview {\n  border: 1px solid #9c9;\n  background-color: #f3fffa;\n  padding: 10px 5px;\n  margin: 10px 5px;\n  border-radius: 5px;\n  font-family: Google;\n  font-weight: 400;\n  font-size: 90%; }\n  .single-user-wrapper .notif-preview .header {\n    margin: 0;\n    padding: 0 3px;\n    font-size: 85%;\n    text-transform: uppercase;\n    font-weight: 900;\n    color: rgba(0, 0, 0, 0.5); }\n  .single-user-wrapper .notif-preview .list ol {\n    line-height: 1.2;\n    -webkit-margin-after: 0;\n            margin-block-end: 0;\n    -webkit-margin-before: 0;\n            margin-block-start: 0;\n    -webkit-padding-start: 20px;\n            padding-inline-start: 20px; }\n"

/***/ }),

/***/ "./src/app/user/user.page.ts":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPage = /** @class */ (function () {
    function UserPage(global, menuCtrl) {
        this.global = global;
        this.menuCtrl = menuCtrl;
    }
    UserPage.prototype.ngOnInit = function () {
    };
    UserPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    UserPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.page.html */ "./src/app/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/user/user.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map