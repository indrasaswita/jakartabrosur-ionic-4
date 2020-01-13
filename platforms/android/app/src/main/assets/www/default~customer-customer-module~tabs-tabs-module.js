(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customer-customer-module~tabs-tabs-module"],{

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

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <i class=\"far fa-child fa-fw\"></i>\r\n            Customer\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"text-xs-center\">\r\n\t\t<div class=\"text-xs-center line-11\" *ngIf=\"customererror==true\" style=\"margin:30px 0;\">\r\n\t\t\tNo Customer Data Received<br>\r\n\t\t\t<small>\r\n\t\t\t\t<b>\r\n\t\t\t\t\t( ERROR ketika terima data )\r\n\t\t\t\t</b>\r\n\t\t\t</small>\r\n\t\t</div>\r\n\t\t\r\n\r\n\t\t<table class=\"table\" *ngIf=\"customererror==false\">\r\n\t\t\t<tbody *ngFor=\"let customer of customers\">\r\n\t\t\t\t<tr (click)=\"showdetail(customer)\">\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t{{customer.id}}.\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"customer.company != null\">\r\n\t\t\t\t\t\t\t{{customer.company.name}}\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"customer.company.parentcompany != null\">\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\tfrom {{customer.company.parentcompany.name}}\r\n\t\t\t\t\t\t\t</ng-container><br>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<b>\r\n\t\t\t\t\t\t\t<span class=\"fas fa-user fa-fw\" ng-class=\"{'tx-lightmagenta':customer.title=='Mrs.'||customer.title=='Ms.', 'tx-primary': customer.title=='Mr.'}\"></span>\r\n\t\t\t\t\t\t\t{{customer.name}}\r\n\t\t\t\t\t\t</b>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"customer.salesheader!=null\">\r\n\t\t\t\t\t\t\tTotal {{customer.salesheader.length}} job\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr *ngIf=\"customer.showdetail\">\r\n\t\t\t\t\t<td class=\"td-detail\" colspan=\"3\">\r\n\t\t\t\t\t\t<div class=\"detail-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"toggle-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"toggler\" [ngClass]=\"{'active': customer.showcustomerbankacc}\" (click)=\"showcustomerbankacc(customer)\">\r\n\t\t\t\t\t\t\t\t\tLIST BANK\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"toggler\" [ngClass]=\"{'active': customer.showcustomerdetail}\" (click)=\"showcustomerdetail(customer)\">\r\n\t\t\t\t\t\t\t\t\tDETAIL PELANGGAN\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"list-standard highlighted\" *ngIf=\"customer.showcustomerdetail\">\r\n\t\t\t\t\t\t\t\t<div class=\"list-header\">\r\n\t\t\t\t\t\t\t\t\tDETIL PELANGGAN\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\" *ngIf=\"customer.phone1!=null\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-phone-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tPhone 1: {{customer.phone1}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\" *ngIf=\"customer.phone2!=null\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-phone-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tPhone 2: {{customer.phone2}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\" *ngIf=\"customer.phone3!=null\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-phone-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tPhone 3: {{customer.phone3}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-mail-bulk fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{customer.email}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-user-tie fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{customer.type}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-calendar-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJoin: {{customer.created_at|date:'dd MMMM y'}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<div class=\"list-header\" *ngIf=\"customer.company!=null\">\r\n\t\t\t\t\t\t\t\t\tCOMPANY\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-sm\" *ngIf=\"customer.company!=null\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-home fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-title\" *ngIf=\"customer.company.nickname!=''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{customer.company.nickname}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\" *ngIf=\"customer.company.phone1!=null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-phone-alt fa-fw tx-gray\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{customer.company.phone1}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customer.company.phone2!=null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t, {{customer.company.phone2}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customer.company.phone3!=null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t, {{customer.company.phone3}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-muted\" *ngIf=\"customer.company.name!=''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{customer.company.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"list-standard highlighted\" *ngIf=\"customer.showcustomerbankacc\">\r\n\t\t\t\t\t\t\t\t<div class=\"list-header\">\r\n\t\t\t\t\t\t\t\t\tDAFTAR BANK PELANGGAN\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-action\" *ngFor=\"let bankacc of customer.customerbankacc\" (click)=\"goeditcustomerbankacc(customer, bankacc)\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bankacc.bank.alias!=''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/banks/{{bankacc.bank.alias}}.png\" class=\"obj-fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-title\" *ngIf=\"bankacc.bank.alias!=''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{bankacc.bank.alias}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content\" *ngIf=\"bankacc.bank.alias==''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{bankacc.bank.bankname}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-content lowercase\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{bankacc.accname}}\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"bankacc.accno!=null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-muted\" *ngIf=\"bankacc.accno!=''\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{bankacc.accno}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\r\n\t</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list .item.item-accordion {\n  line-height: 38px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: 0.09s all linear; }\n\n.list .item.item-accordion.ng-hide {\n  line-height: 0px; }\n\n.list .item.item-accordion.ng-hide-add,\n.list .item.item-accordion.ng-hide-remove {\n  display: block !important; }\n\n.button-group > .button {\n  -moz-flex: initial;\n  flex: initial;\n  padding: 0 10px;\n  width: auto;\n  min-width: 90px;\n  font-size: 14px;\n  border: 1px solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvYzpcXHhhbXBwXFxodGRvY3NcXGpibW9iaWxlL3NyY1xcYXBwXFxjdXN0b21lclxcY3VzdG9tZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCOztFQUVFLHlCQUF5QixFQUFBOztBQUczQjtFQUlFLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IDAuMDlzIGFsbCBsaW5lYXI7XHJcbn1cclxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxufVxyXG4ubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbi5uZy1oaWRlLWFkZCxcclxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZS1yZW1vdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JvdXAgPiAuYnV0dG9uIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiBpbml0aWFsO1xyXG4gIC13ZWJraXQtZmxleDogaW5pdGlhbDtcclxuICAtbW96LWJveC1mbGV4OiBpbml0aWFsO1xyXG4gIC1tb3otZmxleDogaW5pdGlhbDtcclxuICAtbXMtZmxleDogaW5pdGlhbDtcclxuICBmbGV4OiBpbml0aWFsO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbiJdfQ== */"

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
        this.groups = [];
        this.laststate = "";
        this.customers = null;
    }
    CustomerPage.prototype.ngOnInit = function () {
        //console.log('customer mulai');
        //this.getgroups();
    };
    CustomerPage.prototype.ionViewWillEnter = function () {
        this.getcustomerdata();
    };
    CustomerPage.prototype.ngOnEnter = function () {
        //console.log("OnEnter on contact.page.ts");
    };
    CustomerPage.prototype.ionSelected = function () {
        //console.log("KUCING MEONG");
    };
    CustomerPage.prototype.getcustomerdata = function () {
        var _this = this;
        this.customers = null;
        if (!this.global.loadingshow) {
            this.global.loadingshow = true;
            var url_1 = this.global.api + "select/customers";
            console.log(this.global.logintoken);
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.httpresult = this.http.post(url_1, post, {
                responseType: 'json'
            });
            this.httpresult.subscribe(function (data) {
                if (data != null) {
                    if (data instanceof Array) {
                        data.forEach(function (item, index) {
                            item.show = true;
                        });
                        _this.customers = data;
                        console.log(_this.customers);
                        _this.hideallcustomerdetail();
                        _this.customers.forEach(function ($ii, $i) {
                            $ii.showcustomerbankacc = false;
                            $ii.showcustomerdetail = false;
                            $ii.created_at = _this.global.makeDateTime($ii.created_at);
                            if ($ii.updated_at != null) {
                                $ii.updated_at = _this.global.makeDateTime($ii.updated_at);
                            }
                        });
                        if (_this.laststate != null) {
                            if (_this.laststate.customerID != null) {
                                _this.customers.forEach(function ($ii, $i) {
                                    console.log($ii.id + " -> " + _this.laststate.customerID);
                                    if ($ii.id == _this.laststate.customerID) {
                                        if (_this.laststate.detailtab == "customerbankacc") {
                                            $ii.showdetail = true;
                                            $ii.showcustomerbankacc = true;
                                            $ii.showcustomerdetail = false;
                                            console.log("bacnkacc");
                                        }
                                        else if (_this.laststate.detailtab == "customerdetail") {
                                            $ii.showdetail = true;
                                            $ii.showcustomerdetail = true;
                                            $ii.showcustomerbankacc = false;
                                            console.log("detail");
                                        }
                                    }
                                });
                            }
                        }
                        _this.customererror = false;
                    }
                    else {
                        console.log('ERROR OUTPUT FROM ' + url_1);
                        _this.customererror = true;
                        _this.router.navigateByUrl('');
                    }
                }
                _this.global.loadingshow = false;
            }, function (error) {
                _this.global.loadingshow = false;
            });
        }
    };
    CustomerPage.prototype.hideallcustomerdetail = function () {
        this.customers.forEach(function ($ii, $i) {
            $ii.showdetail = false;
        });
    };
    CustomerPage.prototype.showdetail = function (customer) {
        var temp = customer.showdetail;
        this.hideallcustomerdetail();
        if (temp == false) {
            customer.showdetail = true;
        }
        if (!customer.showcustomerbankacc
            && !customer.showcustomerdetail) {
            //DEFAULT KALO BELOM ADA YANG DI PILIH SEBELUMNYA
            customer.showcustomerdetail = true;
        }
    };
    CustomerPage.prototype.showcustomerbankacc = function (customer) {
        customer.showcustomerbankacc = true;
        customer.showcustomerdetail = false;
    };
    CustomerPage.prototype.showcustomerdetail = function (customer) {
        customer.showcustomerdetail = true;
        customer.showcustomerbankacc = false;
    };
    CustomerPage.prototype.goeditcustomerbankacc = function (customer, bankacc) {
        this.laststate = {
            "customerID": customer.id,
            "detailtab": "customerbankacc"
        };
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(bankacc)
            }
        };
        this.router.navigate(['editcustomerbankacc'], navigationExtras);
    };
    CustomerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.page.html */ "./src/app/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~customer-customer-module~tabs-tabs-module.js.map