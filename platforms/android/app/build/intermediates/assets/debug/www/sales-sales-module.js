(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"],{

/***/ "./src/app/sales/sales.module.ts":
/*!***************************************!*\
  !*** ./src/app/sales/sales.module.ts ***!
  \***************************************/
/*! exports provided: SalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPageModule", function() { return SalesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales.page */ "./src/app/sales/sales.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _sales_page__WEBPACK_IMPORTED_MODULE_5__["SalesPage"]
    }
];
var SalesPageModule = /** @class */ (function () {
    function SalesPageModule() {
    }
    SalesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_5__["SalesPage"]]
        })
    ], SalesPageModule);
    return SalesPageModule;
}());



/***/ }),

/***/ "./src/app/sales/sales.page.html":
/*!***************************************!*\
  !*** ./src/app/sales/sales.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>\r\n\t\t\t<i class=\"fal fa-eye fa-fw\"></i>\r\n\t\t\tAdmin Sales Viewer\r\n\t\t</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<div class=\"text-xs-center\" *ngIf=\"sales.length == 0\">\r\n\t\tNo Pending Cart\r\n\t</div>\r\n\t<ng-container *ngIf=\"sales.length > 0\">\r\n\t\t<div class=\"content-title\">\r\n\t\t\tSale Header\r\n\t\t\t<div class=\"content-subtitle\">\r\n\t\t\t\tClick a card to see details\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"text-xs-right\">\r\n\t\t\t<input type=\"text\">\r\n\t\t\t<button class=\"btn\">\r\n\t\t\t\t<i class=\"fal fa-search fa-fw\"></i>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<ul class=\"three-column\">\r\n\t\t\t<ng-container *ngFor = 'let saleheader of sales'>\r\n\t\t\t\t<li (click)=\"toggleSaleheader(saleheader)\">\r\n\t\t\t\t\t<div class=\"header-id\">\r\n\t\t\t\t\t\t<b>{{saleheader.id}}</b>\r\n\r\n\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\tRp\r\n\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t<b>\r\n\r\n\t\t\t\t\t\t\t</b>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t<div class=\"pretitle\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t<div class=\"\" *ngFor=\"let saledetail of saleheader.salesdetail\">\r\n\t\t\t\t\t\t\t\t{{saledetail.cartheader.jobsubtype.name}}: {{saledetail.cartheader.jobtitle}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"post-title\">\r\n\t\t\t\t\t\t\t<i class=\"fal fa-clock fa-fw\">\r\n\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t{{saleheader.created_at}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ng-container>\r\n\t\t</ul>\r\n\t</ng-container>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/sales/sales.page.scss":
/*!***************************************!*\
  !*** ./src/app/sales/sales.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sales/sales.page.ts":
/*!*************************************!*\
  !*** ./src/app/sales/sales.page.ts ***!
  \*************************************/
/*! exports provided: SalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPage", function() { return SalesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesPage = /** @class */ (function () {
    function SalesPage(global, router) {
        this.global = global;
        this.router = router;
        this.sales = [];
    }
    SalesPage.prototype.ngOnInit = function () {
        console.log(this.sales);
    };
    SalesPage.prototype.ionViewWillEnter = function () {
        this.getsaledata();
    };
    SalesPage.prototype.getsaledata = function () {
        var url = this.global.api + "select/allsales";
        var self = this;
        this.sales = [];
        this.global.dopost(url, function (data) {
            self.sales = data;
            self.sales.forEach(function ($ii, $i) {
                $ii.showdetail = false;
                $ii.created_at = self.global.makeDateTime($ii.created_at);
            });
        }, function (error) {
        });
    };
    SalesPage.prototype.toggleSaleheader = function (input) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(input)
            }
        };
        this.router.navigate(['saledetails'], navigationExtras);
    };
    SalesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.page.html */ "./src/app/sales/sales.page.html"),
            styles: [__webpack_require__(/*! ./sales.page.scss */ "./src/app/sales/sales.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SalesPage);
    return SalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=sales-sales-module.js.map