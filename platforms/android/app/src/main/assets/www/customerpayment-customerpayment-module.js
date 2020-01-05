(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerpayment-customerpayment-module"],{

/***/ "./src/app/customerpayment/customerpayment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/customerpayment/customerpayment.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerpaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerpaymentPageModule", function() { return CustomerpaymentPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _customerpayment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerpayment.page */ "./src/app/customerpayment/customerpayment.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _customerpayment_page__WEBPACK_IMPORTED_MODULE_5__["CustomerpaymentPage"]
    }
];
var CustomerpaymentPageModule = /** @class */ (function () {
    function CustomerpaymentPageModule() {
    }
    CustomerpaymentPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_customerpayment_page__WEBPACK_IMPORTED_MODULE_5__["CustomerpaymentPage"]]
        })
    ], CustomerpaymentPageModule);
    return CustomerpaymentPageModule;
}());



/***/ }),

/***/ "./src/app/customerpayment/customerpayment.page.html":
/*!***********************************************************!*\
  !*** ./src/app/customerpayment/customerpayment.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <i class=\"fas fa-cash-register fa-fw\"></i>\r\n      Customer & Payment\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"text-xs-center line-11\" *ngIf=\"customererror==true\" style=\"margin:30px 0;\">\r\n\t\tNo Customer Data Received\r\n\t\t<small>\r\n\t\t\t<b>\r\n\t\t\t\t( Error ketika terima data )\r\n\t\t\t</b>\r\n\t\t</small>\r\n\t</div>\r\n\t<table class=\"table\" *ngIf=\"customererror==false\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th class=\"text-xs-left\">Customers</th>\r\n\t\t\t\t<th>Phone Num.</th>\r\n\t\t\t\t<th class=\"text-xs-right\">Payment</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngFor=\"let customer of customers\">\r\n\t\t<tr>\r\n\t\t\t<td class=\"text-xs-left\">{{customer.name}}</td>\r\n\t\t\t<td>{{customer.phone1}}</td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customerpayment/customerpayment.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/customerpayment/customerpayment.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycGF5bWVudC9jdXN0b21lcnBheW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customerpayment/customerpayment.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerpayment/customerpayment.page.ts ***!
  \*********************************************************/
/*! exports provided: CustomerpaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerpaymentPage", function() { return CustomerpaymentPage; });
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




var CustomerpaymentPage = /** @class */ (function () {
    function CustomerpaymentPage(global, http, router) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.customers = null;
    }
    CustomerpaymentPage.prototype.ngOnInit = function () {
        this.getcustomerpayment();
    };
    CustomerpaymentPage.prototype.getcustomerpayment = function () {
        var _this = this;
        this.customers = null;
        var url = this.global.api + "select/customerpayment";
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
                    _this.customererror = true;
                    _this.router.navigateByUrl('');
                }
            }
        });
    };
    CustomerpaymentPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerpayment',
            template: __webpack_require__(/*! ./customerpayment.page.html */ "./src/app/customerpayment/customerpayment.page.html"),
            styles: [__webpack_require__(/*! ./customerpayment.page.scss */ "./src/app/customerpayment/customerpayment.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerpaymentPage);
    return CustomerpaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=customerpayment-customerpayment-module.js.map