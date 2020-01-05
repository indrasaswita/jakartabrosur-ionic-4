(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cetaksuratjalan-cetaksuratjalan-module"],{

/***/ "./src/app/cetaksuratjalan/cetaksuratjalan.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cetaksuratjalan/cetaksuratjalan.module.ts ***!
  \***********************************************************/
/*! exports provided: CetaksuratjalanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CetaksuratjalanPageModule", function() { return CetaksuratjalanPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _cetaksuratjalan_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cetaksuratjalan.page */ "./src/app/cetaksuratjalan/cetaksuratjalan.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _cetaksuratjalan_page__WEBPACK_IMPORTED_MODULE_5__["CetaksuratjalanPage"]
    }
];
var CetaksuratjalanPageModule = /** @class */ (function () {
    function CetaksuratjalanPageModule() {
    }
    CetaksuratjalanPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_cetaksuratjalan_page__WEBPACK_IMPORTED_MODULE_5__["CetaksuratjalanPage"]]
        })
    ], CetaksuratjalanPageModule);
    return CetaksuratjalanPageModule;
}());



/***/ }),

/***/ "./src/app/cetaksuratjalan/cetaksuratjalan.page.html":
/*!***********************************************************!*\
  !*** ./src/app/cetaksuratjalan/cetaksuratjalan.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Cetak Surat Jalan</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cetaksuratjalan/cetaksuratjalan.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/cetaksuratjalan/cetaksuratjalan.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NldGFrc3VyYXRqYWxhbi9jZXRha3N1cmF0amFsYW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cetaksuratjalan/cetaksuratjalan.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/cetaksuratjalan/cetaksuratjalan.page.ts ***!
  \*********************************************************/
/*! exports provided: CetaksuratjalanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CetaksuratjalanPage", function() { return CetaksuratjalanPage; });
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

var CetaksuratjalanPage = /** @class */ (function () {
    function CetaksuratjalanPage() {
    }
    CetaksuratjalanPage.prototype.ngOnInit = function () {
    };
    CetaksuratjalanPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cetaksuratjalan',
            template: __webpack_require__(/*! ./cetaksuratjalan.page.html */ "./src/app/cetaksuratjalan/cetaksuratjalan.page.html"),
            styles: [__webpack_require__(/*! ./cetaksuratjalan.page.scss */ "./src/app/cetaksuratjalan/cetaksuratjalan.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CetaksuratjalanPage);
    return CetaksuratjalanPage;
}());



/***/ })

}]);
//# sourceMappingURL=cetaksuratjalan-cetaksuratjalan-module.js.map