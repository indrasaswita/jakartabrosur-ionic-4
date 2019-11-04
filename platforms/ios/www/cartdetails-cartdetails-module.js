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

module.exports = "<ion-header>\n  <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n    <ion-title>\n\t\t\tCartID #{{data.id|number:0}} \n\t\t</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<!-- <div class=\"subtab-group\">\n\t\t<button class=\"subtab active\" (click)=\"setTab('carts')\">\n\t\t\tCarts\n\t\t</button>\n\t\t<button class=\"subtab\" (click)=\"setTab('sales')\">\n\t\t\tSales\n\t\t</button>\n\t</div> -->\n\t\n\t<table class=\"table item-header\">\n\t\t<tbody>\n\t\t\t<tr class=\"header\">\n\t\t\t\t<td>\n\t\t\t\t\t<i class=\"fas fa-sign fa-fw\"></i>\n\t\t\t\t\t{{data.jobtitle}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t{{data.quantity|number:0}} {{data.quantitytypename}}\n\t\t\t\t\t<i class=\"fal fa-badge-check fa-fw\"></i>\n\t\t\t \t\t{{data.jobsubtype.name}}\n\t\t\t \t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"data.delivery != null\">\n\t\t\t\t<td>\n\t\t\t\t\t{{data.delivery.deliveryname}}: \n\t\t\t\t\t<i class=\"fal fa-location-circle fa-fw\"></i>\n\t\t\t\t\t{{data.deliveryaddress}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<i class=\"fal fa-weight fa-fw\"></i>\n\t\t\t\t\t{{data.totalweight|number:0}} kg -> \n\t\t\t\t\t<i class=\"fal fa-box-alt fa-fw\"></i>\n\t\t\t\t\t{{data.totalpackage|number:0}} pack\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<ng-container *ngIf=\"data.cartfile!=null\">\n\t\t\t\t<tr *ngIf=\"data.cartfile.length>3\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\tTotal File: \n\t\t\t\t\t\t<i class=\"fal fa-file-import fa-fw\"></i>\n\t\t\t\t\t\t{{data.cartfile.length|number:0}} files.\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<ng-container *ngIf=\"data.cartfile.length>0\">\n\t\t\t\t\t<tr *ngFor=\"let cartfile of data.cartfile; let i = index\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tFile #{{cartfile.fileID}}: &nbsp;\n\t\t\t\t\t\t\t{{cartfile.file.filename}} <u *ngIf=\"cartfile.file.size>0\">{{(cartfile.file.size/1024/1024)|number:0}}MB</u>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"data.descriontion!=null\">\n\t\t\t\t<tr *ngIf=\"data.itemdescription.length>0\">\n\t\t\t\t\t<td>Deskripsi Barang:</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<i class=\"fal fa-quote-left fa-fw tx-lightgray\"></i>\n\t\t\t\t\t\t{{data.itemdescription}} <span class=\"tx-lightgray\">(penjelasan cetakan)</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"data.customernote != null\">\n\t\t\t\t<tr *ngIf=\"data.customernote.length>0\" class=\"sub-header\">\n\t\t\t\t\t<td>Catatan Tambahan:</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngIf=\"data.customernote.length>0\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<i class=\"fal fa-quote-left fa-fw tx-lightgray\"></i>\n\t\t\t\t\t\t{{data.customernote}} <span class=\"tx-lightgray\">(diluar keterangan barang)</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"data.resellername!=null\">\n\t\t\t\t<ng-container *ngIf=\"data.resellername.length>0\">\n\t\t\t\t\t<tr class=\"sub-header\">\n\t\t\t\t\t\t<td>Reseller: </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>{{data.resellername}} {{data.resellerphone}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"data.reselleraddress.length>0\">\n\t\t\t\t\t\t<td>{{data.reselleraddress}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t\t<tr class=\"sub-header\">\n\t\t\t\t<td>\n\t\t\t\t\tProcess \n\t\t\t\t\t<i class=\"fal fa-hourglass-end fa-fw\"></i>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"data.processtpe!=null\">\n\t\t\t\t<td>\n\t\t\t\t\t<span class=\"uppercase\">\n\t\t\t\t\t\t{{data.processtype}}\n\t\t\t\t\t</span>:\n\t\t\t\t\t<i class=\"fal fa-print fa-fw\"></i> \n\t\t\t\t\t{{data.processtime}}d + \n\t\t\t\t\t<i class=\"fal fa-truck-loading\"></i>\n\t\t\t\t\t{{data.deliverytime}}d\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<table class=\"table item-detail\">\n\t\t<tbody *ngFor=\"let detail of data.cartdetail; let i = index\">\n\t\t\t<tr class=\"header\">\n\t\t\t\t<td>\n\t\t\t\t\t#{{i+1}}. \n\t\t\t\t\t{{detail.cartname}} \n\t\t\t\t\t{{detail.jobtype}}\n\t\t\t\t</td>\n\t\t\t\t<td class=\"text-xs-right\">\n\t\t\t\t\t<i class=\"fal fa-print fa-fw\"></i>\n\t\t\t\t\t{{detail.printer.machinename}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"sub-header\">\n\t\t\t\t<td colspan=\"2\">Keterangan:</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>Qty</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{data.quantity|number:0}} pcs\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>Warna</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.side1|number:0}} / {{detail.side2|number:0}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"sub-header\">\n\t\t\t\t<td colspan=\"2\">Bahan:</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t{{detail.paper.name}} {{detail.paper.color}} <b>{{detail.paper.gramature|number:0}}</b>gsm\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\tTotal\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.totalplano|number:0}} plano (bagi {{detail.totalinplano|number:0}})\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\tCetak\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.totaldruct|number:0}} druct \n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{(detail.totaldruct-detail.inschiet)|number:0}} + ins.{{detail.inschiet|number:0}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\tToko Kertas\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.vendor.name}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"detail.vendor.phone1.length>0\">\n\t\t\t\t<td></td>\n\t\t\t\t<td>\n\t\t\t\t\t<i class=\"fal fa-phone-alt fa-fw\"></i>\n\t\t\t\t\t{{detail.vendor.phone1}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\tHarga Kertas\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\tRp {{detail.totalpaperprice|number:0}},-\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"sub-header\">\n\t\t\t\t<td colspan=\"2\">Ukuran:</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>GAMBAR</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.imagewidth|number:0}} x {{detail.imagelength|number:0}} cm\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>KERTAS</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.printwidth|number:0}} x {{detail.printlength|number:0}} cm\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>PLANO</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{detail.plano.width|number:0}} x {{detail.plano.length|number:0}} cm\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"sub-header\">\n\t\t\t\t<td colspan=\"2\">Pembagian:</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>CETAK</td>\n\t\t\t\t<td>\n\t\t\t\t\t<b>{{detail.totalinprintx|number:0}}</b> x <b>{{detail.totalinprinty|number:0}}</b> + <b>{{detail.totalinprintrest|number:0}}</b> = <b>{{detail.totalinprint|number:0}}</b>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>PLANO</td>\n\t\t\t\t<td>\n\t\t\t\t\t<b>{{detail.totalinplanox|number:0}}</b> x <b>{{detail.totalinplanoy|number:0}}</b> + <b>{{detail.totalinplanorest|number:0}}</b> = <b>{{detail.totalinplano|number:0}}</b>\n\t\t\t\t</td>\n\t\t\t</tr>\n\n\n\t\t\t<tr class=\"sub-header\" *ngIf=\"detail.cartdetailfinishing.length>0\">\n\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\tFinishing detail:\n\t\t\t\t</td>\n\t\t\t</tr>\n\n\t\t\t<ng-container *ngFor=\"let detailfinishing of detail.cartdetailfinishing\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<i class=\"fal fa-layer-plus fa-fw\"></i>\n\t\t\t\t\t\t<b>{{detailfinishing.finishing.name}}</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t( {{detailfinishing.quantity|number:0}} * <b>{{detailfinishing.finishingoption.price|number:0}}</b>/{{detailfinishing.finishingoption.priceper}} ) + {{detailfinishing.finishingoption.pricebase|number:0}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td rowspan=\"2\" style=\"vertical-align: top;\">\t\n\t\t\t\t\t\t{{detailfinishing.finishingoption.optionname}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tmin. {{detailfinishing.finishingoption.priceminim|number:0}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tbuy. Rp {{detailfinishing.buyprice|number:0}},-\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tsell. Rp <b>{{detailfinishing.sellprice|number:0}}</b>,-\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\n\t\t</tbody>\n\n\t\t<tbody>\n\t\t\t<tr class=\"header\">\n\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t<i class=\"fal fa-comments-alt-dollar fa-fw\"></i>\n\t\t\t\t\tDETAIL HARGA\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"sub-header\">\n\t\t\t\t<td colspan=\"2\">Harga di Nota</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>Print</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{(data.printprice)|number:0}} <span class=\"tx-red\" *ngIf=\"data.discount>0\">- {{(data.discount)|number:0}}</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>Delivery</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{(data.deliveryprice)|number:0}}\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>Total Price</td>\n\t\t\t\t<td>\n\t\t\t\t\tRp {{(data.printprice+data.deliveryprice-data.discount)|number:0}},-\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<ng-container *ngIf=\"data.buyprice>0\">\n\t\t\t\t<tr class=\"sub-header\">\n\t\t\t\t\t<td colspan=\"2\">Harga Bayar Rahayu</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Print</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tRp {{(data.buyprice)|number:0}},-\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t</tbody>\n\t</table>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cartdetails/cartdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/cartdetails/cartdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    CartdetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cartdetails',
            template: __webpack_require__(/*! ./cartdetails.page.html */ "./src/app/cartdetails/cartdetails.page.html"),
            styles: [__webpack_require__(/*! ./cartdetails.page.scss */ "./src/app/cartdetails/cartdetails.page.scss")],
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