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

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<i class=\"fal fa-eye fa-fw\"></i>\n\t\t\tAdmin Sales Viewer\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class=\"text-xs-center\" *ngIf=\"global.salesdownloading\">\n\t\t<i class=\"fas fa-spinner fa-spin fa-5x\"></i>\n\t</div>\n\t<ng-container *ngIf=\"global.carts!=null\">\n\t\t<div class=\"text-xs-center\" *ngIf=\"global.sales.length == 0\">\n\t\t\tNo Pending Cart\n\t\t</div>\n\t\t<ng-container *ngIf=\"!global.salesdownloading && global.sales.length > 0\">\n\t\t\t<div class=\"content-title\">\n\t\t\t\tSale Header\n\t\t\t\t<div class=\"content-subtitle\">\n\t\t\t\t\tClick a card to see details\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"text-xs-right\">\n\t\t\t\t<input type=\"text\">\n\t\t\t\t<button class=\"btn\">\n\t\t\t\t\t<i class=\"fal fa-search fa-fw\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<ul class=\"three-column\">\n\t\t\t\t<ng-container *ngFor = 'let saleheader of global.sales'>\n\t\t\t\t\t<li (click)=\"toggleSaleheader(saleheader)\">\n\t\t\t\t\t\t<div class=\"header-id\">\n\t\t\t\t\t\t\t<b>{{saleheader.id}}</b>\n\n\t\t\t\t\t\t\t<span class=\"pull-xs-right\">\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\tRp\n\t\t\t\t\t\t\t\t</small> \n\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<div class=\"pretitle\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<div class=\"\" *ngFor=\"let saledetail of saleheader.salesdetail\">\n\t\t\t\t\t\t\t\t\t{{saledetail.cartheader.jobsubtype.name}}: {{saledetail.cartheader.jobtitle}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"post-title\">\n\t\t\t\t\t\t\t\t<i class=\"fal fa-clock fa-fw\">\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t{{saleheader.created_at}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</ng-container>\n\t</ng-container>\n\n\t<button class=\"btn\" (click)=\"haha()\">\n\t\thaha\n\t</button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sales/sales.page.scss":
/*!***************************************!*\
  !*** ./src/app/sales/sales.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    SalesPage.prototype.ngOnInit = function () {
        console.log(this.global.sales);
    };
    SalesPage.prototype.haha = function () {
        var temp = { "id": 8, "customerID": 6, "tempo": null, "estdate": "2018-08-01 00:00:00", "companyname": null, "created_at": "2018-07-01T00:23:00.000Z", "updated_at": "2018-07-01T00:23:00.000Z", "deleted_at": null, "salesdelivery": [], "customer": { "id": 6, "companyID": 2, "email": "helloworld@gmail.com", "name": "Hello World", "type": "personal", "title": "Mrs.", "phone1": "0813889889", "phone2": "021-6491502", "phone3": null, "news": 1, "verify_token": null, "app_token": null, "created_at": null, "updated_at": null, "company": { "id": 2, "nickname": "WakeCup", "name": "PT. Wake Cup Indonesia", "phone1": "02162371123", "phone2": "02167182711", "phone3": null, "type": "office", "verified": 0, "created_at": null, "updated_at": null, "companyaddress": [] } }, "salesdetail": [{ "id": 10, "salesID": 8, "cartID": 8, "prioritylevel": 2, "statusfile": 1, "commited": 1, "statusctp": 0, "statusprint": 0, "statuspacking": 0, "statusdelivery": 0, "statusdone": 0, "pip": 6, "cartheader": { "id": 8, "customerID": 3, "jobsubtypeID": 2, "jobtitle": "Laravel 5.6", "quantity": 525, "quantitytypename": "lembar", "customernote": "ingat! jokowi presiden", "itemdescription": "", "resellername": "siti", "resellerphone": "021 6481291", "reselleraddress": "", "buyprice": 1200300, "printprice": 2000000, "deliveryprice": 123000, "discount": 2000, "processtype": "exp", "processtime": 2, "deliveryID": 1, "deliveryaddress": "Jakarta Pusat", "deliverytime": 1, "totalpackage": 1, "totalweight": 76, "filestatus": 1, "created_at": "2019-07-11 19:11:42", "updated_at": "2019-07-11 19:11:42", "customer": { "id": 3, "companyID": 1, "email": "joko.widodo@gmail.com", "name": "Jokowi", "type": "personal", "title": "Mr.", "phone1": "021-6149101", "phone2": "081112346567", "phone3": null, "news": 1, "verify_token": null, "app_token": null, "created_at": null, "updated_at": null, "company": { "id": 1, "nickname": "None", "name": "No Company", "phone1": "--", "phone2": null, "phone3": null, "type": "--", "verified": 0, "created_at": null, "updated_at": null, "companyaddress": [{ "id": 1, "companyID": 1, "addressID": 1, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 1, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-198 No. 17", "addressnotes": "Kalo uda sampe kabarin sy di 08121029811", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 2, "companyID": 1, "addressID": 2, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 2, "cityID": 12, "name": "Rumah", "address": "Jl. Jalan Blok-226 No. 15", "addressnotes": "Jangan bel, nanti berisik", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 12, "name": "Jakarta", "island": "Java" } } }, { "id": 3, "companyID": 1, "addressID": 3, "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "address": { "id": 3, "cityID": 71, "name": "Office", "address": "Jl. Jalan Blok-421 No. 8", "addressnotes": "Jangan di taruh d depan, di hati sy aja", "created_at": "2019-07-11 19:11:44", "updated_at": "2019-07-11 19:11:44", "city": { "id": 71, "name": "Bukittinggi", "island": "Sumatra" } } }] } }, "jobsubtype": { "id": 2, "jobtypeID": 2, "name": "Flyer Lipat", "printtype": "PR", "subname": "Folding Leaflet", "description": "Mencetak flyer atau selebaran dengan lipatan tertentu.", "link": "flyerlipat", "digitaloffset": 0, "minoffset": 500, "maxoffset": 200000, "stepoffset": 500, "defaultoffset": 1000, "mindigital": 1, "maxdigital": 1000, "stepdigital": 1, "defaultdigital": 25, "satuan": "lembar", "infoqty": "Digital: Untuk file berbeda-beda dan cetak cepat. Offset: Untuk file yang sama dan harga murah.<br><br>Note: 1rim = 500pcs.", "infosize": "<b>Dalam satuan cm</b><br>Pilih <b>Custom Size</b> untuk ukuran lain sesuai keinginan Anda. <br><br>Ukuran dihitung setelah selesai finishing (dilipat, potong, diecut, dll.)<br><br>Note: sebelum file dicetak, harus dikasi lebihan 2mm setiap sisi", "infomaterial": "Warning: Untuk material dengan tanpa coating (contoh: hvs, bw, fancy, dsb.) bila dicetak dengan tinta offset, warna akan pudar (sangat tidak direkomendasi).", "infosisicetak": "1 sisi cetak = semuka, 2 sisi cetak = bolak-balik", "infowarnacetak": "1 warna = Hitam Putih (B/W), 4 warna = Full Colour (Semua warna), 4+1 = Warna Khusus (u/ Offset Print)", "infoproses": "Waktu express akan dikenakan biaya lebih.", "infodelivery": "Express: same day service (gojek, special delivery) akan dikenakan biaya cukup mahal. Pick-up: dapat diambil langsung di workshop kami. Standard: dikenakan biaya normal.", "infoperbungkus": "Anda dapat memilih jumlah bungkusan perpack, sesuai dengan kebutuhan Anda. Tidak dikenakan biaya tambahan.", "inforeseller": "Nama Pribadi: Anda sebagai reseller, dan ingin menuliskan nama, telepon, serta alamat Anda sebagai pengirim.", "infosponsor": "Kami akan menambahkan nama ?print by jakartabrosur.com? pada bagian belakang / bagian akhir cetakan. Tentunya kami akan izin terlebih dahulu sebelum melakukan penambahan.", "qtyoffsettype": 1, "qtydigitaltype": 1, "sizetype": 0, "sisicetak": 0, "warnacetak": 0, "stdoffset": 2, "expoffset": 1, "stddigital": 1, "expdigital": 0, "numerator": 0, "idcard": 0, "rangkap": 0, "active": 1, "icon": "flyer-z-fold.png", "sicon1": "paper-green.png", "sicon2": "paper-recycle.png", "printerIDoffset": 1, "printerIDdigital": 5 }, "cartdetail": [{ "id": 15, "cartID": 8, "cartname": "Main", "jobtype": "OF", "printerID": 2, "paperID": 6, "vendorID": 8, "planoID": 6, "printwidth": "7.84", "printlength": "8.00", "imagewidth": "6.84", "imagelength": "4.00", "side1": 1, "side2": 0, "employeenote": " ", "totaldruct": 1300, "inschiet": 63, "totalplano": 325, "totalinplano": 17, "totalinplanox": 2, "totalinplanoy": 8, "totalinplanorest": 1, "totalinprint": 5, "totalinprintx": 2, "totalinprinty": 2, "totalinprintrest": 1, "totalpaperprice": 14351496, "plano": { "id": 6, "width": "79.00", "length": "109.00", "created_at": "2019-06-09 03:37:29", "updated_at": "2019-06-09 03:37:29" }, "vendor": { "id": 8, "name": "Bintang Timur Bungur", "phone1": "", "phone2": "", "addressID": null, "salesname": "", "salestype": "paper" }, "paper": { "id": 6, "papertypeID": 2, "name": "ArtCarton", "color": "Putih", "gramature": 230 }, "cartdetailfinishing": [], "printer": { "id": 2, "machinename": "SM74", "maxwidth": 0, "maxlength": 0, "created_at": "2019-07-11 19:11:41", "updated_at": null } }], "cartfile": [], "delivery": { "id": 1, "deliverytype": "exp", "deliveryname": "Pick-Up", "baseprice": 0, "price": 0, "priceper": "", "dayservice": 0, "note": "Dapat diambil di workshop kami di Rahayu Printing", "locked": 1 }, "cartpreview": [] }, "salesdeliverydetail": [], "totalkirim": 0, "totalhargakirim": 0 }, { "id": 15, "salesID": 8, "cartID": 13, "prioritylevel": 2, "statusfile": 1, "commited": 1, "statusctp": 1, "statusprint": 1, "statuspacking": 0, "statusdelivery": 0, "statusdone": 0, "pip": 6, "cartheader": { "id": 13, "customerID": 6, "jobsubtypeID": 2, "jobtitle": "Cap Kaki Tiga Warna Biru", "quantity": 900, "quantitytypename": "lembar", "customernote": "", "itemdescription": "mang sahlan presidenku", "resellername": "", "resellerphone": "", "reselleraddress": "", "buyprice": 980000, "printprice": 1000000, "deliveryprice": 70000, "discount": 12500, "processtype": "exp", "processtime": 10, "deliveryID": 5, "deliveryaddress": "Menteng", "deliverytime": 4, "totalpackage": 5, "totalweight": 26, "filestatus": 1, "created_at": "2019-07-11 19:11:42", "updated_at": "2019-07-11 19:11:42", "customer": { "id": 6, "companyID": 2, "email": "helloworld@gmail.com", "name": "Hello World", "type": "personal", "title": "Mrs.", "phone1": "0813889889", "phone2": "021-6491502", "phone3": null, "news": 1, "verify_token": null, "app_token": null, "created_at": null, "updated_at": null, "company": { "id": 2, "nickname": "WakeCup", "name": "PT. Wake Cup Indonesia", "phone1": "02162371123", "phone2": "02167182711", "phone3": null, "type": "office", "verified": 0, "created_at": null, "updated_at": null, "companyaddress": [] } }, "jobsubtype": { "id": 2, "jobtypeID": 2, "name": "Flyer Lipat", "printtype": "PR", "subname": "Folding Leaflet", "description": "Mencetak flyer atau selebaran dengan lipatan tertentu.", "link": "flyerlipat", "digitaloffset": 0, "minoffset": 500, "maxoffset": 200000, "stepoffset": 500, "defaultoffset": 1000, "mindigital": 1, "maxdigital": 1000, "stepdigital": 1, "defaultdigital": 25, "satuan": "lembar", "infoqty": "Digital: Untuk file berbeda-beda dan cetak cepat. Offset: Untuk file yang sama dan harga murah.<br><br>Note: 1rim = 500pcs.", "infosize": "<b>Dalam satuan cm</b><br>Pilih <b>Custom Size</b> untuk ukuran lain sesuai keinginan Anda. <br><br>Ukuran dihitung setelah selesai finishing (dilipat, potong, diecut, dll.)<br><br>Note: sebelum file dicetak, harus dikasi lebihan 2mm setiap sisi", "infomaterial": "Warning: Untuk material dengan tanpa coating (contoh: hvs, bw, fancy, dsb.) bila dicetak dengan tinta offset, warna akan pudar (sangat tidak direkomendasi).", "infosisicetak": "1 sisi cetak = semuka, 2 sisi cetak = bolak-balik", "infowarnacetak": "1 warna = Hitam Putih (B/W), 4 warna = Full Colour (Semua warna), 4+1 = Warna Khusus (u/ Offset Print)", "infoproses": "Waktu express akan dikenakan biaya lebih.", "infodelivery": "Express: same day service (gojek, special delivery) akan dikenakan biaya cukup mahal. Pick-up: dapat diambil langsung di workshop kami. Standard: dikenakan biaya normal.", "infoperbungkus": "Anda dapat memilih jumlah bungkusan perpack, sesuai dengan kebutuhan Anda. Tidak dikenakan biaya tambahan.", "inforeseller": "Nama Pribadi: Anda sebagai reseller, dan ingin menuliskan nama, telepon, serta alamat Anda sebagai pengirim.", "infosponsor": "Kami akan menambahkan nama ?print by jakartabrosur.com? pada bagian belakang / bagian akhir cetakan. Tentunya kami akan izin terlebih dahulu sebelum melakukan penambahan.", "qtyoffsettype": 1, "qtydigitaltype": 1, "sizetype": 0, "sisicetak": 0, "warnacetak": 0, "stdoffset": 2, "expoffset": 1, "stddigital": 1, "expdigital": 0, "numerator": 0, "idcard": 0, "rangkap": 0, "active": 1, "icon": "flyer-z-fold.png", "sicon1": "paper-green.png", "sicon2": "paper-recycle.png", "printerIDoffset": 1, "printerIDdigital": 5 }, "cartdetail": [{ "id": 20, "cartID": 13, "cartname": "Main", "jobtype": "LL", "printerID": 1, "paperID": 1, "vendorID": 8, "planoID": 4, "printwidth": "5.65", "printlength": "3.00", "imagewidth": "4.65", "imagelength": "1.50", "side1": 2, "side2": 1, "employeenote": " ", "totaldruct": 9900, "inschiet": 50, "totalplano": 2475, "totalinplano": 9, "totalinplanox": 4, "totalinplanoy": 2, "totalinplanorest": 1, "totalinprint": 16, "totalinprintx": 2, "totalinprinty": 8, "totalinprintrest": 0, "totalpaperprice": 14910494, "plano": { "id": 4, "width": "65.00", "length": "90.00", "created_at": "2019-06-09 03:37:29", "updated_at": "2019-06-09 03:37:29" }, "vendor": { "id": 8, "name": "Bintang Timur Bungur", "phone1": "", "phone2": "", "addressID": null, "salesname": "", "salestype": "paper" }, "paper": { "id": 1, "papertypeID": 1, "name": "ArtPaper", "color": "Putih", "gramature": 100 }, "cartdetailfinishing": [], "printer": { "id": 1, "machinename": "SM52", "maxwidth": 52, "maxlength": 37, "created_at": "2019-07-11 19:11:41", "updated_at": null } }], "cartfile": [], "delivery": { "id": 5, "deliverytype": "std", "deliveryname": "Pos Indonesia", "baseprice": 0, "price": 10000, "priceper": "kg", "dayservice": 4, "note": "Harga ini adalah harga perkiraan yang berlaku untuk area Jabodetabek<br><br>Kami akan segera mengupdate harga pengiriman setelah kami melakukan pengecekan", "locked": 0 }, "cartpreview": [] }, "salesdeliverydetail": [], "totalkirim": 0, "totalhargakirim": 0 }], "salespayment": [], "showdetail": false, "showdelivery": false, "showpayment": false, "totalprice": 3178500, "deliveryselected": true, "totalpay": 0, "tungguverif": false, "paymentdetail": "Customer belom bayar." };
        console.log(temp);
        this.global.sales.push(temp);
        console.log(this.global.sales);
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
            styles: [__webpack_require__(/*! ./sales.page.scss */ "./src/app/sales/sales.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SalesPage);
    return SalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=sales-sales-module.js.map