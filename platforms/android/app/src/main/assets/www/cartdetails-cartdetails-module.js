(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cartdetails-cartdetails-module"],{

/***/ "./src/app/cartdetails/cartdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cartdetails/cartdetails.module.ts ***!
  \***************************************************/
/*! exports provided: CartdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartdetailsPageModule", function() { return CartdetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _cartdetails_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartdetails.page */ "./src/app/cartdetails/cartdetails.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _cartdetails_page__WEBPACK_IMPORTED_MODULE_5__["CartdetailsPage"]
    }
];
var CartdetailsPageModule = /** @class */ (function () {
    function CartdetailsPageModule() {
    }
    CartdetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_cartdetails_page__WEBPACK_IMPORTED_MODULE_5__["CartdetailsPage"]]
        })
    ], CartdetailsPageModule);
    return CartdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/cartdetails/cartdetails.page.html":
/*!***************************************************!*\
  !*** ./src/app/cartdetails/cartdetails.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n    <ion-title>\r\n\t\t\tCartID #{{data.id|number:0}} \r\n\t\t</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<!-- <div class=\"subtab-group\">\r\n\t\t<button class=\"subtab active\" (click)=\"setTab('carts')\">\r\n\t\t\tCarts\r\n\t\t</button>\r\n\t\t<button class=\"subtab\" (click)=\"setTab('sales')\">\r\n\t\t\tSales\r\n\t\t</button>\r\n\t</div> -->\r\n\r\n\t<div class=\"title-wrapper\">\r\n\t\t<div class=\"image\">\r\n\t\t\t<img src=\"../assets/jobsubtypeicons/{{data.jobsubtype.icon}}\" class=\"obj-fit\">\r\n\t\t</div>\r\n\t\t<div class=\"title\">\r\n\t\t\t{{data.jobsubtype.name}}\r\n\t\t</div>\r\n\t\t<div class=\"jobtitle\">\r\n\t\t\t{{data.jobtitle}}\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"detail-wrapper\">\r\n\t\t<div class=\"list-standard header highlighted primary\">\r\n\t\t\t<div class=\"list-header\">\r\n\t\t\t\tDETIL PEKERJAAN\r\n\t\t\t</div>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-boxes fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tJadi:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t<b>{{data.quantity|number:0}}</b>\r\n\t\t\t\t\t\t\t\t{{data.quantitytypename}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-dumbbell fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t&plusmn;\r\n\t\t\t\t\t\t\t{{data.totalweight}}kg\r\n\t\t\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t<i class=\"fas fa-long-arrow-right fa-fw\"></i>\r\n\t\t\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t<i class=\"fal fa-boxes-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t\t{{data.totalpackage}}\tpack\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-badge-dollar fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tPrint:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{data.printprice|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-badge-dollar fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tDiscount:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t- {{data.discount|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-badge-dollar fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content text-bold\">\r\n\t\t\t\t\t\t\tTotal:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{(data.printprice+data.deliveryprice-data.discount)|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-badge-dollar fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tBuy:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{(data.buyprice)|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"list-standard header highlighted primary\">\r\n\t\t\t<div class=\"list-header\">\r\n\t\t\t\tDETIL PENGIRIMAN\r\n\t\t\t</div>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-truck-container fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tName:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{data.delivery.deliveryname}}\r\n\t\t\t\t\t\t\t\t<span class=\"uppercase size-80p tx-primary\">\r\n\t\t\t\t\t\t\t\t\t<b><i>{{data.delivery.deliverytype}}</i></b>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-location-arrow fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t{{data.deliveryaddress.address}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-badge-dollar fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tDelivery:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{data.deliveryprice|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"list-standard highlighted success\" *ngIf=\"data.cartfile.length>0\">\r\n\t\t\t<div class=\"list-header\">\r\n\t\t\t\tDETIL FILES\r\n\t\t\t</div>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-sm\" *ngFor=\"let cartfile of data.cartfile; let i = index\">\r\n\t\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t\t<img src=\"..\\assets\\ext\\{{cartfile.file.path.substring(cartfile.file.path.lastIndexOf('.')+1)}}.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t{{cartfile.file.filename}}\r\n\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\tFilesize:\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cartfile.file.size<1024\">\r\n\t\t\t\t\t\t\t\t{{cartfile.file.size}} B\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cartfile.file.size>=1024 && cartfile.file.size<(1024*1024)\">\r\n\t\t\t\t\t\t\t\t{{(cartfile.file.size/1024)|number:0}} MB\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cartfile.file.size>=(1024*1024) && cartfile.file.size<(1024*1024*1024)\">\r\n\t\t\t\t\t\t\t\t{{(cartfile.file.size/1024/1024)|number:0}} MB\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"cartfile.file.size>=(1024*1024*1024) && cartfile.file.size<(1024*1024*1024*1024)\">\r\n\t\t\t\t\t\t\t\t{{(cartfile.file.size/1024/1024/1024)|number:0}} GB\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"list-standard highlighted warning\" *ngFor=\"let cartdetail of data.cartdetail; let i = index\">\r\n\t\t\t<div class=\"list-header\">\r\n\t\t\t\t<i class=\"fas fa-chevron-left tx-warning\"></i>{{i+1}}<i class=\"fas fa-chevron-right tx-warning\"></i>\r\n\t\t\t\t<b>\r\n\t\t\t\t\t#{{global.zeroFill(cartdetail.id, 4)}}\r\n\t\t\t\t\t<span class=\"uppercase\">\r\n\t\t\t\t\t\t{{cartdetail.cartname}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t<i class=\"fal fa-print fa-fw\"></i>\r\n\t\t\t\t\t\t{{cartdetail.printer.machinename}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</b>\r\n\t\t\t</div>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-scroll-old fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t<span class=\"size-70p uppercase\">\r\n\t\t\t\t\t\t\t\t<b><i>{{cartdetail.paper.papertype.name}}</i></b>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t{{cartdetail.paper.name}}\r\n\t\t\t\t\t\t\t{{cartdetail.paper.gramature}}g\r\n\t\t\t\t\t\t\t{{cartdetail.paper.color}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-home-lg fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tToko:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.vendor.name}}\r\n\t\t\t\t\t\t\t</span><br>\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right size-80p text-bold\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cartdetail.vendor.phone1!=''\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fal fa-phone-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t{{cartdetail.vendor.phone1}}\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cartdetail.vendor.phone2!=''\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fal fa-phone-alt fa-fw\"></i>\r\n\t\t\t\t\t\t\t\t\t{{cartdetail.vendor.phone2}}\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet-alt fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tPlano:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.totalplano}} lembar\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet-alt fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tUk. Plano:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.plano.width}}x{{cartdetail.plano.length}} cm\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-badge-dollar fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tHarga Kertas:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t&plusmn;\r\n\t\t\t\t\t\t\t\t{{cartdetail.totalpaperprice|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet-alt fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t1 lembar plano dibelah {{cartdetail.totalinplano}}\r\n\t\t\t\t\t\t\t(\r\n\t\t\t\t\t\t\t<b>{{cartdetail.totalinplanox}}</b>x<b>{{cartdetail.totalinplanoy}}</b>+<b>{{cartdetail.totalinplanorest}}</b>\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tPrint:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{(cartdetail.totaldruct)|number:0}} druct\r\n\t\t\t\t\t\t\t\t<i class=\"size-80p\">+ins.</i> {{cartdetail.inschiet|number:0}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tUk. Print:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.printwidth}}x{{cartdetail.printlength}} cm\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\t1 lembar print jalan {{cartdetail.totalinprint}}\r\n\t\t\t\t\t\t\t(\r\n\t\t\t\t\t\t\t<b>{{cartdetail.totalinprintx}}</b>x<b>{{cartdetail.totalinprinty}}</b>+<b>{{cartdetail.totalinprintrest}}</b>\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-box fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tUk. Jadi:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.imagewidth}}x{{cartdetail.imagelength}} cm\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tWarna:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.side1}} / {{cartdetail.side2}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-sm\">\r\n\t\t\t\t\t<div class=\"avatar\">\r\n\t\t\t\t\t\t<i class=\"fal fa-pallet fa-fw\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"label\">\r\n\t\t\t\t\t\t<div class=\"label-content\">\r\n\t\t\t\t\t\t\tWarna:\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t{{cartdetail.side1}} / {{cartdetail.side2}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br><br><br>\r\n\r\n\t<div class=\"content-wrapper\">\r\n\t\t<div class=\"action action-bottom\">\r\n\t\t\t<button class=\"btn btn-secondary\">\r\n\t\t\t\tJoin Cart\r\n\t\t\t</button>\r\n\t\t\t<button class=\"btn btn-secondary\">\r\n\t\t\t\tPrint\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cartdetails/cartdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/cartdetails/cartdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-ungu {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  background-color: #70a;\n  font-weight: bold;\n  color: white;\n  margin: 15px 0px;\n  position: absolute;\n  right: 5px; }\n\n.title-wrapper {\n  width: 100%;\n  padding: 10px 0;\n  text-align: center;\n  font-family: \"Google Sans\"; }\n\n.title-wrapper .image {\n    border: 2px solid #999;\n    border-radius: 1000px;\n    width: 150px;\n    height: 150px;\n    display: -moz-inline-block;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #eee; }\n\n.title-wrapper .title {\n    margin-top: 10px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #777; }\n\n.title-wrapper .jobtitle {\n    font-size: 90%;\n    font-weight: bold;\n    font-style: italic;\n    color: #204; }\n\n.detail-wrapper {\n  padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydGRldGFpbHMvYzpcXHhhbXBwXFxodGRvY3NcXGpibW9iaWxlL3NyY1xcYXBwXFxjYXJ0ZGV0YWlsc1xcY2FydGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1g7RUFDQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFKM0I7SUFNRSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQixFQUFBOztBQWR4QjtJQWlCRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXLEVBQUE7O0FBcEJiO0lBdUJFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFJYjtFQUNDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnRkZXRhaWxzL2NhcnRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdW5ndSB7XHJcblx0cGFkZGluZzogOHB4IDE2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzcwYTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luOiAxNXB4IDBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRpdGxlLXdyYXBwZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMTBweCAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xyXG5cdC5pbWFnZXtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1pbmxpbmUtYmxvY2s7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0fVxyXG5cdC50aXRsZXtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHR9XHJcblx0LmpvYnRpdGxle1xyXG5cdFx0Zm9udC1zaXplOiA5MCU7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdGNvbG9yOiAjMjA0O1xyXG5cdH1cclxufVxyXG5cclxuLmRldGFpbC13cmFwcGVye1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cartdetails/cartdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/cartdetails/cartdetails.page.ts ***!
  \*************************************************/
/*! exports provided: CartdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartdetailsPage", function() { return CartdetailsPage; });
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



var CartdetailsPage = /** @class */ (function () {
    function CartdetailsPage(global, router, activatedRoute) {
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
    CartdetailsPage.prototype.ngOnInit = function () {
    };
    CartdetailsPage.prototype.konfirmasi = function (input) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(input)
            }
        };
        this.router.navigate(['confirmationbyemployee'], navigationExtras);
        console.log(input);
    };
    CartdetailsPage.prototype.suratjalan = function (input) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(input)
            }
        };
        this.router.navigate(['cetaksuratjalan'], navigationExtras);
        console.log(input);
    };
    CartdetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cartdetails',
            template: __webpack_require__(/*! ./cartdetails.page.html */ "./src/app/cartdetails/cartdetails.page.html"),
            styles: [__webpack_require__(/*! ./cartdetails.page.scss */ "./src/app/cartdetails/cartdetails.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CartdetailsPage);
    return CartdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=cartdetails-cartdetails-module.js.map