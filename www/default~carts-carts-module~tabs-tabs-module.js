(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~carts-carts-module~tabs-tabs-module"],{

/***/ "./src/app/carts/carts.module.ts":
/*!***************************************!*\
  !*** ./src/app/carts/carts.module.ts ***!
  \***************************************/
/*! exports provided: CartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsPageModule", function() { return CartsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _carts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carts.page */ "./src/app/carts/carts.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _carts_page__WEBPACK_IMPORTED_MODULE_5__["CartsPage"]
    }
];
var CartsPageModule = /** @class */ (function () {
    function CartsPageModule() {
    }
    CartsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_carts_page__WEBPACK_IMPORTED_MODULE_5__["CartsPage"]]
        })
    ], CartsPageModule);
    return CartsPageModule;
}());



/***/ }),

/***/ "./src/app/carts/carts.page.html":
/*!***************************************!*\
  !*** ./src/app/carts/carts.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n    <ion-title>\r\n\t\t\tAll Pending Carts\r\n\t\t</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<div class=\"text-xs-center\" *ngIf=\"global.cartsdownloading\">\r\n\t\t<i class=\"fas fa-spinner fa-spin fa-5x\"></i>\r\n\t</div>\r\n\t<ng-container *ngIf=\"global.carts!=null\">\r\n\t\t<div class=\"text-xs-center\" *ngIf=\"global.carts.length == 0\">\r\n\t\t\tNo Pending Cart\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"!global.cartsdownloading && global.carts.length > 0\">\r\n\t\t\t<div class=\"content-title\">\r\n\t\t\t\tCart Header\r\n\t\t\t\t<div class=\"content-subtitle\">\r\n\t\t\t\t\tClick a card to see details\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text-xs-right\">\r\n\t\t\t\t<input type=\"text\">\r\n\t\t\t\t<button class=\"btn\">\r\n\t\t\t\t\t<i class=\"fal fa-search fa-fw\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"three-column\">\r\n\t\t\t\t<ng-container *ngFor = 'let cartheader of global.carts'>\r\n\t\t\t\t\t<li (click)=\"toggleCartheader(cartheader)\">\r\n\t\t\t\t\t\t<div class=\"header-id\">\r\n\t\t\t\t\t\t\t<b>{{cartheader.id}}</b>\r\n\r\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\r\n\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\tRp\r\n\t\t\t\t\t\t\t\t</small> \r\n\t\t\t\t\t\t\t\t<b>\r\n\t\t\t\t\t\t\t\t\t{{(cartheader.printprice+cartheader.deliveryprice-cartheader.discount)|number:0}}\r\n\t\t\t\t\t\t\t\t</b>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<div class=\"pretitle\">\r\n\t\t\t\t\t\t\t\t{{cartheader.customer.name}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t{{cartheader.quantity|number:0}}\r\n\t\t\t\t\t\t\t\t\t{{cartheader.jobsubtype.name}} \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"text-bold\">\r\n\t\t\t\t\t\t\t\t\t{{cartheader.jobtitle}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"cartheader.cartfile != null\">\r\n\t\t\t\t\t\t\t\t\tTotal {{cartheader.cartfile.length}} files\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"post-title\">\r\n\t\t\t\t\t\t\t\t<span class=\"uppercase\">\r\n\t\t\t\t\t\t\t\t\t{{cartheader.processtype}}\r\n\t\t\t\t\t\t\t\t</span>:\r\n\t\t\t\t\t\t\t\t<i class=\"fal fa-print fa-fw\"></i> \r\n\t\t\t\t\t\t\t\t{{cartheader.processtime}}d + \r\n\t\t\t\t\t\t\t\t<i class=\"fal fa-truck-loading\"></i>\r\n\t\t\t\t\t\t\t\t{{cartheader.deliverytime}}d\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ul>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<button class=\"btn\" (click)=\"haha()\">\r\n\t\thaha\r\n\t</button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/carts/carts.page.scss":
/*!***************************************!*\
  !*** ./src/app/carts/carts.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnRzL2NhcnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/carts/carts.page.ts":
/*!*************************************!*\
  !*** ./src/app/carts/carts.page.ts ***!
  \*************************************/
/*! exports provided: CartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsPage", function() { return CartsPage; });
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



var CartsPage = /** @class */ (function () {
    function CartsPage(global, router) {
        this.global = global;
        this.router = router;
    }
    CartsPage.prototype.ngOnInit = function () {
    };
    CartsPage.prototype.haha = function () {
        var temp = { "id": 4, "customerID": 1, "jobsubtypeID": 1, "jobtitle": "Booklet KIA", "quantity": 2500, "quantitytypename": "lembar", "customernote": "jilid staples 2 mata", "itemdescription": "", "resellername": "", "resellerphone": "", "reselleraddress": "", "buyprice": 5000000, "printprice": 6000000, "deliveryprice": 135000, "discount": 100000, "processtype": "std", "processtime": 7, "deliveryID": 2, "deliveryaddress": "Jl. Karang Anyar 1", "deliverytime": 1, "totalpackage": 40, "totalweight": 100, "filestatus": 1, "created_at": "2019-07-11T12:11:42.000Z", "updated_at": "2019-07-11T12:11:42.000Z", "customer": { "id": 1, "companyID": 1, "email": "indrasaswita@gmail.com", "name": "Indra Saswita", "type": "personal", "title": "Mr.", "phone1": "081315519889", "phone2": "085959717175", "phone3": null, "news": 1, "verify_token": null, "app_token": null, "created_at": "2019-07-11 12:11:41", "updated_at": null, "company": { "id": 1, "nickname": "None", "name": "No Company", "phone1": "--", "phone2": null, "phone3": null, "type": "--", "verified": 0, "created_at": null, "updated_at": null, "companyaddress": [{ "id": 1, "companyID": 1, "addressID": 1, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 1, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-198 No. 17", "addressnotes": "Kalo uda sampe kabarin sy di 08121029811", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 2, "companyID": 1, "addressID": 2, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 2, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-226 No. 15", "addressnotes": "Jangan bel, nanti berisik", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 3, "companyID": 1, "addressID": 3, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 3, "cityID": 71, "name": "Office", "address": "Jl. Jalan Blok-421 No. 8", "addressnotes": "Jangan di taruh d depan, di hati sy aja", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 71, "name": "Bukittinggi", "island": "Sumatra" } } }] } }, "jobsubtype": { "id": 1, "jobtypeID": 2, "name": "Flyer", "printtype": "PR", "subname": "Leaflet", "description": "Mencetak flyer atau selebaran standard.", "link": "flyer", "digitaloffset": 0, "minoffset": 500, "maxoffset": 200000, "stepoffset": 500, "defaultoffset": 1000, "mindigital": 1, "maxdigital": 1000, "stepdigital": 1, "defaultdigital": 25, "satuan": "lembar", "infoqty": "Digital: Untuk file berbeda-beda dan cetak cepat. Offset: Untuk file yang sama dan harga murah.<br><br>Note: 1rim = 500pcs.", "infosize": "<b>Dalam satuan cm</b><br>Pilih <b>Custom Size</b> untuk ukuran lain sesuai keinginan Anda. <br><br>Ukuran dihitung setelah selesai finishing (dilipat, potong, diecut, dll.)<br><br>Note: sebelum file dicetak, harus dikasi lebihan 2mm setiap sisi", "infomaterial": "Warning: Untuk material dengan tanpa coating (contoh: hvs, bw, fancy, dsb.) bila dicetak dengan tinta offset, warna akan pudar (sangat tidak direkomendasi).", "infosisicetak": "1 sisi cetak = semuka, 2 sisi cetak = bolak-balik", "infowarnacetak": "1 warna = Hitam Putih (B/W), 4 warna = Full Colour (Semua warna), 4+1 = Warna Khusus (u/ Offset Print)", "infoproses": "Waktu express akan dikenakan biaya lebih.", "infodelivery": "Express: same day service (gojek, special delivery) akan dikenakan biaya cukup mahal. Pick-up: dapat diambil langsung di workshop kami. Standard: dikenakan biaya normal.", "infoperbungkus": "Anda dapat memilih jumlah bungkusan perpack, sesuai dengan kebutuhan Anda. Tidak dikenakan biaya tambahan.", "inforeseller": "Nama Pribadi: Anda sebagai reseller, dan ingin menuliskan nama, telepon, serta alamat Anda sebagai pengirim.", "infosponsor": "Kami akan menambahkan nama ?print by jakartabrosur.com? pada bagian belakang / bagian akhir cetakan. Tentunya kami akan izin terlebih dahulu sebelum melakukan penambahan.", "qtyoffsettype": 1, "qtydigitaltype": 1, "sizetype": 0, "sisicetak": 0, "warnacetak": 0, "stdoffset": 2, "expoffset": 1, "stddigital": 1, "expdigital": 0, "numerator": 0, "idcard": 0, "rangkap": 0, "active": 1, "icon": "flyer-simple.png", "sicon1": "paper-green.png", "sicon2": "paper-recycle.png", "printerIDoffset": 1, "printerIDdigital": 5 }, "cartfile": [{ "id": 3, "fileID": 3, "cartID": 3, "file": { "id": 3, "customerID": 1, "filename": "Landak Kewong", "size": "1298.00", "detail": "", "revision": 1, "preview": "", "path": "images/original/img20170619101804620.jpg", "icon": "images/icon/img20170619101804620.jpg", "created_at": "2019-07-11 19:11:42", "updated_at": "2019-07-11 19:11:42", "customer": { "id": 1, "companyID": 1, "email": "indrasaswita@gmail.com", "name": "Indra Saswita", "type": "personal", "title": "Mr.", "phone1": "081315519889", "phone2": "085959717175", "phone3": null, "news": 1, "verify_token": null, "app_token": null, "created_at": "2019-07-11 12:11:41", "updated_at": null, "company": { "id": 1, "nickname": "None", "name": "No Company", "phone1": "--", "phone2": null, "phone3": null, "type": "--", "verified": 0, "created_at": null, "updated_at": null, "companyaddress": [{ "id": 1, "companyID": 1, "addressID": 1, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 1, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-198 No. 17", "addressnotes": "Kalo uda sampe kabarin sy di 08121029811", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 2, "companyID": 1, "addressID": 2, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 2, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-226 No. 15", "addressnotes": "Jangan bel, nanti berisik", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 3, "companyID": 1, "addressID": 3, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 3, "cityID": 71, "name": "Office", "address": "Jl. Jalan Blok-421 No. 8", "addressnotes": "Jangan di taruh d depan, di hati sy aja", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 71, "name": "Bukittinggi", "island": "Sumatra" } } }] }, "customeraddress": [{ "id": 1, "customerID": 1, "addressID": 1, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 1, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-198 No. 17", "addressnotes": "Kalo uda sampe kabarin sy di 08121029811", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 2, "customerID": 1, "addressID": 2, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 2, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-226 No. 15", "addressnotes": "Jangan bel, nanti berisik", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 3, "customerID": 1, "addressID": 3, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 3, "cityID": 71, "name": "Office", "address": "Jl. Jalan Blok-421 No. 8", "addressnotes": "Jangan di taruh d depan, di hati sy aja", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 71, "name": "Bukittinggi", "island": "Sumatra" } } }] } } }], "cartdetail": [{ "id": 3, "cartID": 3, "cartname": "Cover", "jobtype": "OF", "printerID": 1, "paperID": 2, "vendorID": 1, "planoID": 2, "printwidth": "30.50", "printlength": "44.00", "imagewidth": "29.20", "imagelength": "41.00", "side1": 4, "side2": 4, "employeenote": "laminating gloss", "totaldruct": 2800, "inschiet": 300, "totalplano": 700, "totalinplano": 4, "totalinplanox": 2, "totalinplanoy": 2, "totalinplanorest": 0, "totalinprint": 1, "totalinprintx": 1, "totalinprinty": 1, "totalinprintrest": 0, "totalpaperprice": 400000, "plano": { "id": 2, "width": "61.00", "length": "88.00", "created_at": "2019-06-09 03:37:29", "updated_at": "2019-06-09 03:37:29" }, "vendor": { "id": 1, "name": "Indo Jaya", "phone1": "02142879120", "phone2": "", "addressID": null, "salesname": "", "salestype": "paper" }, "paper": { "id": 2, "papertypeID": 1, "name": "ArtPaper", "color": "Putih", "gramature": 120 }, "cartdetailfinishing": [{ "id": 3, "cartdetailID": 3, "finishingID": 11, "optionID": 20, "quantity": 300, "buyprice": "305000.00", "sellprice": "500000.00", "side": 2, "finishing": { "id": 11, "name": "Numeration", "shortname": "Numerasi Stamp OF", "info": "File design wajib <b>terpisah</b> dengan nomor, dan buat numerasi pada excel.<br><br>Akan dicetak manual setelah pencetakan Offset selesai.", "status": 1, "mingram": 0, "maxgram": 0, "onesideinschietOF": 25, "twosideinschietOF": 40, "onesideinschietDG": 10, "twosideinschietDG": 20 }, "finishingoption": { "id": 20, "finishingID": 5, "optionname": "3 sudut", "price": "100.00", "priceper": "qty", "priceminim": 0, "pricebase": 0, "processdays": 0, "info": "", "defaultoption": 0 } }, { "id": 9, "cartdetailID": 3, "finishingID": 9, "optionID": 15, "quantity": 34, "buyprice": "1234567.00", "sellprice": "12000000.00", "side": 2, "finishing": { "id": 9, "name": "Pacthing", "shortname": "Lem & Tempel OF", "info": "Sertakan keterangan tempel. Harga akan disesuaikan setelah kami mendownload file Anda.", "status": 1, "mingram": 0, "maxgram": 0, "onesideinschietOF": 25, "twosideinschietOF": 25, "onesideinschietDG": 5, "twosideinschietDG": 5 }, "finishingoption": { "id": 15, "finishingID": 4, "optionname": "1 lubang sudut atas kiri kertas", "price": "20.00", "priceper": "druct", "priceminim": 75000, "pricebase": 10000, "processdays": 1, "info": "", "defaultoption": 0 } }], "printer": { "id": 1, "machinename": "SM52", "maxwidth": 52, "maxlength": 37, "created_at": "2019-07-11 19:11:41", "updated_at": null } }, { "id": 4, "cartID": 3, "cartname": "Main", "jobtype": "OF", "printerID": 1, "paperID": 5, "vendorID": 1, "planoID": 2, "printwidth": "30.50", "printlength": "44.00", "imagewidth": "29.20", "imagelength": "41.00", "side1": 4, "side2": 4, "employeenote": "susun anom, lipet anom bacok, jilid staples", "totaldruct": 2700, "inschiet": 200, "totalplano": 675, "totalinplano": 4, "totalinplanox": 2, "totalinplanoy": 2, "totalinplanorest": 0, "totalinprint": 1, "totalinprintx": 1, "totalinprinty": 1, "totalinprintrest": 0, "totalpaperprice": 400000, "plano": { "id": 2, "width": "61.00", "length": "88.00", "created_at": "2019-06-09 03:37:29", "updated_at": "2019-06-09 03:37:29" }, "vendor": { "id": 1, "name": "Indo Jaya", "phone1": "02142879120", "phone2": "", "addressID": null, "salesname": "", "salestype": "paper" }, "paper": { "id": 5, "papertypeID": 2, "name": "ArtCarton", "color": "Putih", "gramature": 210 }, "cartdetailfinishing": [{ "id": 4, "cartdetailID": 4, "finishingID": 7, "optionID": 11, "quantity": 50, "buyprice": "701000.00", "sellprice": "800000.00", "side": 1, "finishing": { "id": 7, "name": "Folding", "shortname": "Lipat OF", "info": "Dihitung dari jumlah lipatan ketika dibentangkan. Harga lipat, bisa berubah sewaktu-waktu dan kami akan memberitahu sesegera mungkin setelah pesanan dibuat.", "status": 1, "mingram": 70, "maxgram": 150, "onesideinschietOF": 50, "twosideinschietOF": 50, "onesideinschietDG": 0, "twosideinschietDG": 0 }, "finishingoption": { "id": 11, "finishingID": 2, "optionname": "Deboss", "price": "2.50", "priceper": "cm", "priceminim": 350000, "pricebase": 150000, "processdays": 2, "info": "", "defaultoption": 0 } }], "printer": { "id": 1, "machinename": "SM52", "maxwidth": 52, "maxlength": 37, "created_at": "2019-07-11 19:11:41", "updated_at": null } }], "delivery": { "id": 2, "deliverytype": "exp", "deliveryname": "GO-JEK", "baseprice": 25000, "price": 0, "priceper": "kg", "dayservice": 0, "note": "Harga tersebut hanya merupakan harga awal<br><br>Kami akan segera mengupdate harga pengiriman setelah kami melakukan pengecekan", "locked": 0 }, "showdetail": false };
        var temp2 = {
            "id": 11,
            "quantity": 1000,
            "quantitytypename": "lembar",
            "jobtitle": "Gebyar BCA 2",
            "printprice": 200000,
            "deliveryprice": 30000,
            "discount": 22000,
            "jobsubtype": {
                "name": "Flyer",
            },
            "customer": {
                "name": "Hello World Hahaha",
                "company": {
                    "id": 1,
                    "name": "Company bro"
                }
            }
        };
        console.log(temp);
        console.log(this.global.carts);
        this.global.carts.push(temp);
        this.global.carts.push(temp2);
        this.global.carts.push(temp);
        this.global.carts.push(temp2);
    };
    CartsPage.prototype.toggleCartheader = function (input) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(input)
            }
        };
        this.router.navigate(['cartdetails'], navigationExtras);
    };
    CartsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carts',
            template: __webpack_require__(/*! ./carts.page.html */ "./src/app/carts/carts.page.html"),
            styles: [__webpack_require__(/*! ./carts.page.scss */ "./src/app/carts/carts.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartsPage);
    return CartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~carts-carts-module~tabs-tabs-module.js.map