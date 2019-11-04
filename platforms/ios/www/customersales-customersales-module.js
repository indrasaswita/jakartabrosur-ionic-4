(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customersales-customersales-module"],{

/***/ "./src/app/customersales/customersales.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customersales/customersales.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersalesPageModule", function() { return CustomersalesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _customersales_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customersales.page */ "./src/app/customersales/customersales.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _customersales_page__WEBPACK_IMPORTED_MODULE_5__["CustomersalesPage"]
    }
];
var CustomersalesPageModule = /** @class */ (function () {
    function CustomersalesPageModule() {
    }
    CustomersalesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_customersales_page__WEBPACK_IMPORTED_MODULE_5__["CustomersalesPage"]]
        })
    ], CustomersalesPageModule);
    return CustomersalesPageModule;
}());



/***/ }),

/***/ "./src/app/customersales/customersales.page.html":
/*!*******************************************************!*\
  !*** ./src/app/customersales/customersales.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <i class=\"far fa-clipboard-list fa-fw\"></i>\n      Customer & Sales\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title> QR Code and Barcode </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Here we can scan a Qr code or Barcode to get data and we will also see how to generate Barcode.</p>\n    </ion-card-content>\n    <ion-button (click)=\"goToBarcodeScan()\">Click to scan a barcode</ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/customersales/customersales.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/customersales/customersales.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customersales/customersales.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/customersales/customersales.page.ts ***!
  \*****************************************************/
/*! exports provided: CustomersalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersalesPage", function() { return CustomersalesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var CustomersalesPage = /** @class */ (function () {
    function CustomersalesPage(global, http, router) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.customers = null;
    }
    CustomersalesPage.prototype.ngOnInit = function () {
        this.getcustomersalesdata();
    };
    CustomersalesPage.prototype.getcustomersalesdata = function () {
        this.customers = null;
        var url = this.global.api + "";
    };
    CustomersalesPage.prototype.goToBarcodeScan = function () {
        console.log("abcdefg");
        // this.barcodeCtrl.scan(options).then(barcodeData => {
        // 	console.log('Barcode data', barcodeData);
        // 	this.scannedData = barcodeData;
        //
        // }).catch(err => {
        // 	console.log('Error', err);
        // });
    };
    CustomersalesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customersales',
            template: __webpack_require__(/*! ./customersales.page.html */ "./src/app/customersales/customersales.page.html"),
            styles: [__webpack_require__(/*! ./customersales.page.scss */ "./src/app/customersales/customersales.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomersalesPage);
    return CustomersalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=customersales-customersales-module.js.map