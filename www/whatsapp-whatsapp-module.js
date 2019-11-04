(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["whatsapp-whatsapp-module"],{

/***/ "./src/app/whatsapp/whatsapp.module.ts":
/*!*********************************************!*\
  !*** ./src/app/whatsapp/whatsapp.module.ts ***!
  \*********************************************/
/*! exports provided: WhatsappPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappPageModule", function() { return WhatsappPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _whatsapp_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whatsapp.page */ "./src/app/whatsapp/whatsapp.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _whatsapp_page__WEBPACK_IMPORTED_MODULE_5__["WhatsappPage"]
    }
];
var WhatsappPageModule = /** @class */ (function () {
    function WhatsappPageModule() {
    }
    WhatsappPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_whatsapp_page__WEBPACK_IMPORTED_MODULE_5__["WhatsappPage"]]
        })
    ], WhatsappPageModule);
    return WhatsappPageModule;
}());



/***/ }),

/***/ "./src/app/whatsapp/whatsapp.page.html":
/*!*********************************************!*\
  !*** ./src/app/whatsapp/whatsapp.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<i class=\"fab fa-whatsapp fa-fw\"></i>\n\t\t\tWhatsapp Twilio\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/whatsapp/whatsapp.page.scss":
/*!*********************************************!*\
  !*** ./src/app/whatsapp/whatsapp.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3doYXRzYXBwL3doYXRzYXBwLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/whatsapp/whatsapp.page.ts":
/*!*******************************************!*\
  !*** ./src/app/whatsapp/whatsapp.page.ts ***!
  \*******************************************/
/*! exports provided: WhatsappPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappPage", function() { return WhatsappPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhatsappPage = /** @class */ (function () {
    function WhatsappPage() {
    }
    WhatsappPage.prototype.ngOnInit = function () {
    };
    WhatsappPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whatsapp',
            template: __webpack_require__(/*! ./whatsapp.page.html */ "./src/app/whatsapp/whatsapp.page.html"),
            styles: [__webpack_require__(/*! ./whatsapp.page.scss */ "./src/app/whatsapp/whatsapp.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhatsappPage);
    return WhatsappPage;
}());



/***/ })

}]);
//# sourceMappingURL=whatsapp-whatsapp-module.js.map