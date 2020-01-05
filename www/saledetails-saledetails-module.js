(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saledetails-saledetails-module"],{

/***/ "./src/app/saledetails/saledetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/saledetails/saledetails.module.ts ***!
  \***************************************************/
/*! exports provided: SaledetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaledetailsPageModule", function() { return SaledetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _saledetails_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saledetails.page */ "./src/app/saledetails/saledetails.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _saledetails_page__WEBPACK_IMPORTED_MODULE_5__["SaledetailsPage"]
    }
];
var SaledetailsPageModule = /** @class */ (function () {
    function SaledetailsPageModule() {
    }
    SaledetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_saledetails_page__WEBPACK_IMPORTED_MODULE_5__["SaledetailsPage"]]
        })
    ], SaledetailsPageModule);
    return SaledetailsPageModule;
}());



/***/ }),

/***/ "./src/app/saledetails/saledetails.page.html":
/*!***************************************************!*\
  !*** ./src/app/saledetails/saledetails.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>\r\n\t\t\tSalesID #{{data.id|number:0}} \r\n\t\t</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<table class=\"table item-header\">\r\n\t\t<tbody>\r\n\t\t\t<tr class=\"header\">\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<i class=\"fal fa-user-astronaut fa-fw\"></i>\r\n\t\t\t\t\t{{data.customer.name}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t{{data.created_at}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\tdone at -> {{data.estdate}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\ttop -> {{data.tempo}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngIf=\"data.companyname!=null\">\r\n\t\t\t\t<td>\r\n\t\t\t\t\t{{data.companyname}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<table class=\"table item-detail\">\r\n\t\t<tbody *ngFor=\"let detail of data.salesdetail; let i = index\">\r\n\t\t\t<tr class=\"header\">\r\n\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t#{{i+1}}.\r\n\t\t\t\t\t{{detail.cartheader.jobsubtype.name}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"sub-header\">\r\n\t\t\t\t<td colspan=\"2\">Keterangan:</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Judul</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<i class=\"fas fa-sign fa-fw\"></i>\r\n\t\t\t\t\t{{detail.cartheader.jobtitle}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Quantity</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t{{detail.cartheader.quantity|number:0}} pcs\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"sub-header\">\r\n\t\t\t\t<td colspan=\"2\">Info lebih lanjut</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Click here:</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"toggleCartheader(detail.cartheader)\">\r\n\t\t\t\t\t\tCartID #{{detail.cartheader.id}}\r\n\t\t\t\t\t\t<i class=\"fas fa-external-link-square fa-fw\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saledetails/saledetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/saledetails/saledetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVkZXRhaWxzL3NhbGVkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saledetails/saledetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/saledetails/saledetails.page.ts ***!
  \*************************************************/
/*! exports provided: SaledetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaledetailsPage", function() { return SaledetailsPage; });
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



var SaledetailsPage = /** @class */ (function () {
    function SaledetailsPage(global, router, activatedRoute) {
        var _this = this;
        this.global = global;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.data = JSON.parse(params.special);
                console.log(_this.data);
            }
        });
    }
    SaledetailsPage.prototype.ngOnInit = function () {
    };
    SaledetailsPage.prototype.toggleCartheader = function (input) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(input)
            }
        };
        this.router.navigate(['cartdetails'], navigationExtras);
    };
    SaledetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-saledetails',
            template: __webpack_require__(/*! ./saledetails.page.html */ "./src/app/saledetails/saledetails.page.html"),
            styles: [__webpack_require__(/*! ./saledetails.page.scss */ "./src/app/saledetails/saledetails.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SaledetailsPage);
    return SaledetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=saledetails-saledetails-module.js.map