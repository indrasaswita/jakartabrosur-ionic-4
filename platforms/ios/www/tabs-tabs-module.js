(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"] }])
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    \t<i class=\"fas fa-brain fa-fw\"></i>\n    \tPrice List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content></ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        })
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"] }])
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
            ]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <i class=\"fas fa-user-astronaut fa-fw\"></i>\n            Customer List\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ul *ngIf=\"!customerdownloading\">\n    <ng-container *ngFor='let customer of customers'>\n      <li>\n        <div class=\"code\">    \n          {{customer.id}}\n        </div>\n        <div class=\"content\">\n          <div class=\"pretitle\"> \n            {{customer.email}} \n          </div>\n          <div class=\"title\">\n            <i class=\"fas fa-user tx-info\" *ngIf=\"customer.title=='Mr.'\"></i>\n            <i class=\"fas fa-user tx-lightmagenta\" *ngIf=\"customer.title=='Ms.'||customer.title=='Mrs.'\"></i>\n             {{customer.name}}\n          </div>\n        </div>\n        <div class=\"price\">\n          {{customer.created_at|date:'d/M/yy'}}\n        </div>\n      </li>\n    </ng-container>\n  </ul>\n</ion-content>"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(http) {
        this.http = http;
        this.customers = [];
        this.getData();
        console.log("after get data, constructor");
    }
    ContactPage.prototype.ngOnInit = function () {
        console.log("ONINIT");
    };
    ContactPage.prototype.getData = function () {
        var _this = this;
        this.customerdownloading = true;
        var customersurl = 'http://localhost/jakartabrosur/public/API/customers/all';
        this.data = this.http.get(customersurl);
        if (this.data != null) {
            this.data.subscribe(function (data) {
                _this.customers = data;
                _this.customers.forEach(function (customer) {
                    customer.created_at = new Date(customer.created_at);
                });
            });
        }
    };
    ContactPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\t\n\t<div style=\"height: 100%; display: grid; justify-content: center; align-items: center; margin: 20px 10px;\">\n\t\t<div class=\"size-36\">\n\t\t\tHello, <br>\n\t\t\t<b>{{global.userdata.name}}</b>.\n\t\t</div>\n\t\t<div class=\"size-14 text-tx-center\">\n\t\t\tWelcome to Jakartabrosur Digital Apps.\n\t\t</div>\n\n\t</div>\n\n    <div class=\"btn-group\">\n        <div class=\"btn-group\">\n            <button class=\"btn\" (click)=\"navSales()\">\n                Sale\n            </button>\n            <button class=\"btn\" (click)=\"navCust()\">\n                Cust\n            </button>\n            <button class=\"btn\" (click)=\"navNotif()\">\n                Notif\n            </button>\n            <button class=\"btn\" (click)=\"navContact()\">\n                Contact\n            </button>\n            <button class=\"btn\" (click)=\"navPrice()\">\n                Price\n            </button>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeLoop {\n  0% {\n    opacity: 0; }\n  80% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n.loading {\n  -webkit-animation-name: fadeLoop;\n          animation-name: fadeLoop;\n  -webkit-animation-duration: 1.8s;\n          animation-duration: 1.8s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  text-align: center; }\n\n.btn-group-wrapper .btn-group {\n  display: flex; }\n\n.btn-group-wrapper .btn-group .btn {\n    border: 1px solid #206; }\n\n.btn-group-wrapper .btn-group .btn:first-child {\n      border-radius-top-left: 5px;\n      border-radius-bottom-left: 5px; }\n\n.btn-group-wrapper .btn-group .btn:last-child {\n      border-radius-top-right: 5px;\n      border-radius-bottom-right: 5px; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LocalNotifications } from '@ionic-native/local-notifications';

var HomePage = /** @class */ (function () {
    function HomePage(global, http, navCtrl) {
        //this.tab = 'carts';
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.tab = '';
        /*this.localNotifications.schedule({
          text: 'Delayed ILocalNotification',
          trigger: {
            at: new Date(Date.now())
          },
          led: 'FF0000',
          sound: null
        });*/
    }
    HomePage.prototype.navSales = function () {
        this.navCtrl.navigateForward("sales");
    };
    HomePage.prototype.navPrice = function () {
        this.navCtrl.navigateForward("prices");
    };
    HomePage.prototype.navContact = function () {
        this.navCtrl.navigateForward("contact");
    };
    HomePage.prototype.navNotif = function () {
        this.navCtrl.navigateForward("notif");
    };
    HomePage.prototype.navCust = function () {
        this.navCtrl.navigateForward("customer");
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");
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
        component: _notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
            ]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.page.html":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t\t<i class=\"fas fa-bell fa-fw\"></i>\n\t\t\t\tNotifications\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-menu-button autoHide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<table class=\"table\" *ngIf=\"notifications!=null\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\t<i class=\"fas fa-bell fa-fw tx-purple\"ng></i>\n\t\t\t\t\t<br>\n\t\t\t\t\tClick baris yg kuning (\n\t\t\t\t\t<i class=\"tx-red\">\n\t\t\t\t\t\tnotif baru\n\t\t\t\t\t</i>\n\t\t\t\t\t)\n\t\t\t\t\t<br>\n\t\t\t\t\t<small>\n\t\t\t\t\t\tuntuk menandakan sudah di baca\n\t\t\t\t\t</small>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody *ngFor=\"let notif of notifications\">\n\t\t\t<tr [ngClass]=\"{'highlighted':notif.viewed==0}\">\n\t\t\t\t<td (click)=\"notifclicked(notif.id)\">\n\t\t\t\t\t{{notif.id}}.\n\t\t\t\t\t<b>\n\t\t\t\t\t\t{{notif.title}}\n\t\t\t\t\t</b>\n\t\t\t\t\t<small class=\"tx-gray\">\n\t\t\t\t\t\t{{notif.created_at}}\n\t\t\t\t\t</small>\n\t\t\t\t\t<br>\n\t\t\t\t\t<small>\n\t\t\t\t\t\t{{notif.content}}\n\t\t\t\t\t</small>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
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




var NotificationPage = /** @class */ (function () {
    function NotificationPage(global, http, router) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.notifications = null;
    }
    NotificationPage.prototype.ngOnInit = function () {
        this.getnotificationdata();
    };
    NotificationPage.prototype.notifclicked = function (notifid) {
        var url = this.global.api + "update/notifications";
        this.updatenotification(notifid);
    };
    NotificationPage.prototype.updatenotification = function (notifid) {
        var _this = this;
        var url = this.global.api + "update/notifications";
        var post = {
            'app_token': this.global.logintoken,
            'usertype': this.global.usertype,
            'userID': this.global.userdata.id,
            'notifID': notifid
        };
        this.httpresult = this.http.post(url, post, {
            responseType: 'json'
        });
        this.httpresult.subscribe(function (data) {
            if (data != null) {
                if (data instanceof Array) {
                    _this.notifications = data;
                    _this.notiferror = false;
                }
                else {
                    console.log("ERROR OUTPUT FROM " + url);
                    _this.notiferror = true;
                }
            }
        });
    };
    NotificationPage.prototype.getnotificationdata = function () {
        var _this = this;
        this.notifications = null;
        var url = this.global.api + "select/notifications";
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
                    _this.notifications = data;
                    _this.notiferror = false;
                }
                else {
                    console.log("ERROR OUTPUT FROM " + url);
                    _this.notiferror = true;
                    _this.router.navigateByUrl('');
                }
            }
        });
    };
    NotificationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ }),

/***/ "./src/app/pricelist/pricelist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pricelist/pricelist.module.ts ***!
  \***********************************************/
/*! exports provided: PricelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistPageModule", function() { return PricelistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _pricelist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricelist.page */ "./src/app/pricelist/pricelist.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*import { AddpricePage } from '../pricelist/addprice/addprice.page';*/
var routes = [
    {
        path: '',
        component: _pricelist_page__WEBPACK_IMPORTED_MODULE_5__["PricelistPage"]
    } /*,
    {
      path: '/addprice',
      component: AddpricePage
    }*/
];
var PricelistPageModule = /** @class */ (function () {
    function PricelistPageModule() {
    }
    PricelistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_pricelist_page__WEBPACK_IMPORTED_MODULE_5__["PricelistPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
            ]
        })
    ], PricelistPageModule);
    return PricelistPageModule;
}());



/***/ }),

/***/ "./src/app/pricelist/pricelist.page.html":
/*!***********************************************!*\
  !*** ./src/app/pricelist/pricelist.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>\n    \t<i class=\"fas fa-heartbeat fa-fw\"></i>\n    \tPrice Lists\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\t<div style=\"margin: 10px 0;\">\n\t\t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Deskripsi</th>\n\t\t\t\t\t<th>Harga</th>\n\t\t\t\t\t<th>Updated</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody *ngFor=\"let pricelist of global.prices\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{pricelist.title}}\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<small><b>{{pricelist.detail}}</b></small>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-xs-right\">\n\t\t\t\t\t\t{{pricelist.price|number:0}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-xs-right\">\n\t\t\t\t\t\t{{pricelist.updated_at}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<ion-fab-button class=\"fab-fixed\" (click)=\"gotoaddprice()\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n\n</ion-content>\n\n  \n"

/***/ }),

/***/ "./src/app/pricelist/pricelist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pricelist/pricelist.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricelist/pricelist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pricelist/pricelist.page.ts ***!
  \*********************************************/
/*! exports provided: PricelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistPage", function() { return PricelistPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { AddpricePage } from '../pricelist/addprice/addprice.page';*/

var PricelistPage = /** @class */ (function () {
    function PricelistPage(router, global, http, navCtrl) {
        this.router = router;
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.global.expenseprices = [];
    }
    PricelistPage.prototype.ngOnInit = function () {
        //this.getpricelists();
    };
    PricelistPage.prototype.gotoaddprice = function () {
        //this.router.navigateByUrl('popup/addprice');
        this.navCtrl.navigateForward('popup/addprice');
    };
    PricelistPage.prototype.refresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.global.expenseprices = [];
            _this.getPrices();
            event.target.complete();
        }, 2000);
    };
    PricelistPage.prototype.getPrices = function () {
        var _this = this;
        var url = this.global.api + "select/pricelists";
        var post = {
            'app_token': this.global.logintoken,
            'usertype': this.global.usertype,
            'userID': this.global.userdata.id
        };
        this.result = this.http.post(url, post, {
            responseType: 'json'
        });
        if (this.result != null) {
            this.result.subscribe(function (data) {
                if (data != null) {
                    if (data instanceof Object) {
                        _this.global.expenseprices = data;
                    }
                    else {
                        _this.global.expenseprices = [];
                        console.log("ERROR OUTPUT FROM " + url);
                        _this.router.navigateByUrl('');
                    }
                }
            });
        }
    };
    PricelistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricelist',
            template: __webpack_require__(/*! ./pricelist.page.html */ "./src/app/pricelist/pricelist.page.html"),
            styles: [__webpack_require__(/*! ./pricelist.page.scss */ "./src/app/pricelist/pricelist.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], PricelistPage);
    return PricelistPage;
}());



/***/ }),

/***/ "./src/app/salelist/salelist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/salelist/salelist.module.ts ***!
  \*********************************************/
/*! exports provided: SalelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalelistPageModule", function() { return SalelistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _salelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salelist.page */ "./src/app/salelist/salelist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SalelistPageModule = /** @class */ (function () {
    function SalelistPageModule() {
    }
    SalelistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _salelist_page__WEBPACK_IMPORTED_MODULE_6__["SalelistPage"]
                    }
                ])
            ],
            declarations: [_salelist_page__WEBPACK_IMPORTED_MODULE_6__["SalelistPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
            ]
        })
    ], SalelistPageModule);
    return SalelistPageModule;
}());



/***/ }),

/***/ "./src/app/salelist/salelist.page.html":
/*!*********************************************!*\
  !*** ./src/app/salelist/salelist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"logo-img\">\n\t\t\t\t<img src=\"../assets/logo-transp/logo-contrast-100px.png\" width=\"25px\">\n\t\t\t</div>\n\t\t\t<div class=\"logo\">\n\t\t\t\t<span class=\"tx-darkpurple\">Jakarta</span><span class=\"tx-gray\">Brosur</span>\n\t\t\t</div>\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"background-wrapper\">\n\t\t<div class=\"icon xxl\">\n\t\t\t<i class=\"fal fa-bags-shopping fa-fw\"></i>\n\t\t\t<div class=\"text\">\n\t\t\t\tAll purchase and sells are shown in this tabs. You can see all transactions by toggle the submenu on the top-right corner.\n\t\t\t</div>\n\n\n\t\t\t<ul class=\"text menus\">\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-list fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tAll Pending Carts\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.carts.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-list fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tSales Activity\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class=\"fas fa-check fa-fw icon\" *ngIf=\"global.sales.length>0\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-bookmark fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tSales Need To-Do\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-filter fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tSales Filter & Search\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-chart-network fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tJoin Cart <small class=\"fal fa-chevron-double-right\"></small> Sale\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fal fa-envelope-open-dollar fa-fw icon\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\tOur Expense & Purchase\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"loading\" *ngIf=\"global.cartsdownloading||global.salesdownloading\">\n\t\t</div>\n\t</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/salelist/salelist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/salelist/salelist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/salelist/salelist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/salelist/salelist.page.ts ***!
  \*******************************************/
/*! exports provided: SalelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalelistPage", function() { return SalelistPage; });
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




var SalelistPage = /** @class */ (function () {
    function SalelistPage(global, http, router) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.tab = '';
        this.tab = 'carts';
        //this.getData(this.tab);
    }
    SalelistPage.prototype.ngOnInit = function () {
        //this.global.cartsdownloading = true;
    };
    /*getData(value) {
        if (value == 'carts')
            this.getCarts();
        else if (value == 'sales')
            this.getSales();
    }*/
    SalelistPage.prototype.toggleSalesheader = function (event, input) {
        var value = !input.showdetail;
        this.global.sales.forEach(function (header) {
            header.showdetail = false;
        });
        input.showdetail = value;
    };
    SalelistPage.prototype.setTab = function (value) {
        if (value != this.tab) {
            this.tab = value;
        }
    };
    SalelistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salelist',
            template: __webpack_require__(/*! ./salelist.page.html */ "./src/app/salelist/salelist.page.html"),
            styles: [__webpack_require__(/*! ./salelist.page.scss */ "./src/app/salelist/salelist.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalelistPage);
    return SalelistPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _salelist_salelist_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../salelist/salelist.module */ "./src/app/salelist/salelist.module.ts");
/* harmony import */ var _pricelist_pricelist_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pricelist/pricelist.module */ "./src/app/pricelist/pricelist.module.ts");
/* harmony import */ var _pricelist_addprice_addprice_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pricelist/addprice/addprice.module */ "./src/app/pricelist/addprice/addprice.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../notification/notification.module */ "./src/app/notification/notification.module.ts");
/* harmony import */ var _master_master_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../master/master.module */ "./src/app/master/master.module.ts");
/* harmony import */ var _alluser_alluser_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../alluser/alluser.module */ "./src/app/alluser/alluser.module.ts");
/* harmony import */ var _carts_carts_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../carts/carts.module */ "./src/app/carts/carts.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomePageModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageModule"],
                _contact_contact_module__WEBPACK_IMPORTED_MODULE_8__["ContactPageModule"],
                _salelist_salelist_module__WEBPACK_IMPORTED_MODULE_9__["SalelistPageModule"],
                _pricelist_pricelist_module__WEBPACK_IMPORTED_MODULE_10__["PricelistPageModule"],
                _pricelist_addprice_addprice_module__WEBPACK_IMPORTED_MODULE_11__["AddpricePageModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_12__["CustomerPageModule"],
                _notification_notification_module__WEBPACK_IMPORTED_MODULE_13__["NotificationPageModule"],
                //WhatsappPageModule,
                _master_master_module__WEBPACK_IMPORTED_MODULE_14__["MasterPageModule"],
                _alluser_alluser_module__WEBPACK_IMPORTED_MODULE_15__["AlluserPageModule"],
                _carts_carts_module__WEBPACK_IMPORTED_MODULE_16__["CartsPageModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab tab=\"home\"> <!-- HIDDEN -->\n    <ion-router-outlet name=\"home\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"salelist\"> <!-- HIDDEN -->\n    <ion-router-outlet name=\"salelist\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"alluser\">\n    <ion-router-outlet name=\"alluser\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"master\">\n    <ion-router-outlet name=\"master\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"notification\">\n    <ion-router-outlet name=\"notification\"></ion-router-outlet>\n  </ion-tab><!--\n  <ion-tab tab=\"whatsapp\">\n    <ion-router-outlet name=\"whatsapp\"></ion-router-outlet>\n  </ion-tab>-->\n  <ion-tab tab=\"user\">\n    <ion-router-outlet name=\"user\"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"salelist\" href=\"/tabs/full/(salelist:salelist)\" (click)=\"navSalelist()\">\n      <!-- <ion-icon name=\"bonfire\"></ion-icon> -->\n      <span class=\"fal fa-2x fa-bags-shopping fa-fw\"></span>\n      <!-- <ion-label>Sale</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"alluser\" href=\"/tabs/full/(alluser:alluser)\" (click)=\"navAlluser()\">\n      <!-- <ion-icon name=\"logo-freebsd-devil\"></ion-icon> -->\n      <span class=\"fal fa-2x fa-head-side fa-fw\"></span>\n      <!-- <ion-label>Customers</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"master\" href=\"/tabs/full/(master:master)\" (click)=\"navMaster()\">\n      <!-- <ion-icon name=\"list-box\"></ion-icon> -->\n      <span class=\"fal fa-2x fa-crown fa-fw\"></span>\n      <!-- <ion-label>Price</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notification\" href=\"/tabs/full/(notification:notification)\" (click)=\"navNotification()\">\n      <!-- <ion-icon name=\"notifications\"></ion-icon> -->\n      <span class=\"fal fa-2x fa-concierge-bell fa-fw\"></span>\n      <!-- <ion-label>Notif</ion-label> -->\n    </ion-tab-button>\n<!--\n    <ion-tab-button tab=\"whatsapp\" href=\"/tabs/full/(whatsapp:whatsapp)\" (click)=\"navWhatsapp()\">\n      &lt;!&ndash; <ion-icon name=\"notifications\"></ion-icon> &ndash;&gt;\n      <span class=\"fal fa-2x fa-comments-alt fa-fw\"></span>\n      &lt;!&ndash; <ion-label>Notif</ion-label> &ndash;&gt;\n    </ion-tab-button>-->\n\n    <ion-tab-button tab=\"user\" href=\"/tabs/full/(user:user)\" (click)=\"navUser()\">\n      <!-- <ion-icon name=\"notifications\"></ion-icon> -->\n      <span class=\"fal fa-2x fa-user-alt fa-fw\"></span>\n      <!-- <ion-label>Notif</ion-label> -->\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  height: 40px;\n  border-top: 1px solid #999;\n  background-color: #f3f3f3;\n  box-shadow: inset 0 40px 40px -40px #fff; }\n  ion-tab-bar ion-tab-button {\n    padding: 2px 0; }\n  ion-tab-bar ion-tab-button .fal, ion-tab-bar ion-tab-button .fas, ion-tab-bar ion-tab-button .fab, ion-tab-bar ion-tab-button .far {\n      font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, global, http, router, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.http = http;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.tab = '';
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.subscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    TabsPage.prototype.navMaster = function () {
        this.getPapers();
        this.getExpensepricelists();
        this.menuCtrl.enable(true, "menu-master");
        this.menuCtrl.enable(false, "menu-alluser");
        this.menuCtrl.enable(false, "menu-notification");
        this.menuCtrl.enable(false, "menu-salelist");
        this.menuCtrl.enable(false, "menu-calculation");
        //this.menuCtrl.enable(false, "menu-whatsapp");
    };
    TabsPage.prototype.navAlluser = function () {
        this.getEmployees();
        this.getCustomers();
        this.getCustomerpayment();
        this.getRoles();
        //this.getcustomersales() -> masuk ke payment, soalnya cuma seleksi data
        this.menuCtrl.enable(false, "menu-master");
        this.menuCtrl.enable(true, "menu-alluser");
        this.menuCtrl.enable(false, "menu-notification");
        this.menuCtrl.enable(false, "menu-salelist");
        this.menuCtrl.enable(false, "menu-calculation");
        //this.menuCtrl.enable(false, "menu-whatsapp");
    };
    TabsPage.prototype.navNotification = function () {
        this.menuCtrl.enable(false, "menu-master");
        this.menuCtrl.enable(false, "menu-alluser");
        this.menuCtrl.enable(true, "menu-notification");
        this.menuCtrl.enable(false, "menu-salelist");
        this.menuCtrl.enable(false, "menu-calculation");
        //this.menuCtrl.enable(false, "menu-whatsapp");
    };
    /*
        navWhatsapp(){
            this.menuCtrl.enable(false, "menu-master");
            this.menuCtrl.enable(false, "menu-alluser");
            this.menuCtrl.enable(false, "menu-notification");
            this.menuCtrl.enable(false, "menu-salelist");
            this.menuCtrl.enable(false, "menu-calculation");
            this.menuCtrl.enable(true, "menu-whatsapp");
        }
    */
    TabsPage.prototype.navSalelist = function () {
        this.getSales();
        this.getCarts();
        this.menuCtrl.enable(false, "menu-master");
        this.menuCtrl.enable(false, "menu-alluser");
        this.menuCtrl.enable(false, "menu-notification");
        this.menuCtrl.enable(true, "menu-salelist");
        this.menuCtrl.enable(false, "menu-calculation");
        //this.menuCtrl.enable(false, "menu-whatsapp");
    };
    TabsPage.prototype.navUser = function () {
        this.menuCtrl.enable(false, "menu-master");
        this.menuCtrl.enable(false, "menu-alluser");
        this.menuCtrl.enable(false, "menu-notification");
        this.menuCtrl.enable(false, "menu-salelist");
        this.menuCtrl.enable(true, "menu-user");
        //this.menuCtrl.enable(false, "menu-whatsapp");
    };
    TabsPage.prototype.getExpensepricelists = function () {
        var _this = this;
        if (!this.global.expensepricesdownloading) {
            this.global.expensepricesdownloading = true;
            var url_1 = this.global.api + "select/pricelists";
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url_1, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Object) {
                            _this.global.expenseprices = data;
                        }
                        else {
                            console.log("ERROR OUTPUT FROM " + url_1);
                            _this.global.expenseprices = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.expenseprices = [];
                    }
                    _this.global.expensepricesdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getCarts = function () {
        var _this = this;
        if (!this.global.cartsdownloading) {
            this.global.cartsdownloading = true;
            var url_2 = this.global.api + 'select/pendingcarts';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url_2, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.carts = data;
                            _this.global.carts.forEach(function (header) {
                                //header.showdetail = false;
                            });
                        }
                        else {
                            _this.global.carts = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.carts = [];
                        console.log("ERROR NO DATA from " + url_2);
                    }
                    _this.global.cartsdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getSales = function () {
        var _this = this;
        if (!this.global.salesdownloading) {
            this.global.salesdownloading = true;
            var url = this.global.api + 'select/allsales';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.sales = data;
                            _this.global.sales.forEach(function (header) {
                                header.totalprice = 0;
                                if (header.salesdetail != null) {
                                    header.salesdetail.forEach(function (detail) {
                                        header.totalprice += detail.cartheader.printprice + detail.cartheader.deliveryprice - detail.cartheader.discount;
                                    });
                                    //header.showdetail = false;
                                }
                            });
                        }
                        else {
                            _this.global.sales = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.sales = [];
                        console.log("ERROR NO DATA from " + url);
                    }
                    _this.global.salesdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getEmployees = function () {
        var _this = this;
        if (!this.global.employeesdownloading) {
            this.global.employeesdownloading = true;
            var url = this.global.api + 'select/employees';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.employees = data;
                        }
                        else {
                            _this.global.employees = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.employees = [];
                        console.log("ERROR NO DATA from " + url);
                    }
                    _this.global.employeesdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getCustomers = function () {
        var _this = this;
        if (!this.global.customersdownloading) {
            this.global.customersdownloading = true;
            var url = this.global.api + 'select/customers';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.customers = data;
                        }
                        else {
                            _this.global.customers = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.customers = [];
                        console.log("ERROR NO DATA from " + url);
                    }
                    _this.global.customersdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getCustomerpayment = function () {
        var _this = this;
        if (!this.global.customerpaymentdownloading) {
            this.global.customerpaymentdownloading = true;
            var url = this.global.api + 'select/customerpayment';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.customerpayment = data;
                        }
                        else {
                            _this.global.customerpayment = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.customerpayment = [];
                        console.log("ERROR NO DATA from " + url);
                    }
                    _this.getCustomersales();
                    _this.global.customerpaymentdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getCustomersales = function () {
        this.global.customersalesdownloading = true;
        if (this.global.customerpayment != null) {
            this.global.customersales = this.global.customerpayment;
            //udah langsung ke clone kalo di angular 6, ga perlu di clone lagi
        }
        else {
            this.global.customersales = [];
        }
        this.global.customersalesdownloading = false;
    };
    TabsPage.prototype.getRoles = function () {
        var _this = this;
        if (!this.global.rolesdownloading) {
            this.global.rolesdownloading = true;
            var url = this.global.api + 'select/roles';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.roles = data;
                        }
                        else {
                            _this.global.roles = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.roles = [];
                        console.log("ERROR NO DATA from " + url);
                    }
                    _this.global.rolesdownloading = false;
                });
            }
        }
    };
    TabsPage.prototype.getPapers = function () {
        var _this = this;
        if (!this.global.papersdownloading) {
            this.global.papersdownloading = true;
            var url = this.global.api + 'select/papers';
            var post = {
                'app_token': this.global.logintoken,
                'usertype': this.global.usertype,
                'userID': this.global.userdata.id
            };
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data instanceof Array) {
                            _this.global.papers = data;
                        }
                        else {
                            _this.global.papers = [];
                            _this.router.navigateByUrl('');
                        }
                    }
                    else {
                        _this.global.papers = [];
                        console.log("ERROR NO DATA from " + url);
                    }
                    _this.global.papersdownloading = false;
                }, function (error) {
                    _this.global.papersdownloading = false;
                    console.log(error);
                });
            }
        }
    };
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _about_about_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.page */ "./src/app/about/about.page.ts");
/* harmony import */ var _contact_contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _salelist_salelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../salelist/salelist.page */ "./src/app/salelist/salelist.page.ts");
/* harmony import */ var _pricelist_pricelist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pricelist/pricelist.page */ "./src/app/pricelist/pricelist.page.ts");
/* harmony import */ var _pricelist_addprice_addprice_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pricelist/addprice/addprice.page */ "./src/app/pricelist/addprice/addprice.page.ts");
/* harmony import */ var _customer_customer_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer/customer.page */ "./src/app/customer/customer.page.ts");
/* harmony import */ var _notification_notification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../notification/notification.page */ "./src/app/notification/notification.page.ts");
/* harmony import */ var _master_master_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../master/master.page */ "./src/app/master/master.page.ts");
/* harmony import */ var _alluser_alluser_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../alluser/alluser.page */ "./src/app/alluser/alluser.page.ts");
/* harmony import */ var _user_user_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../user/user.page */ "./src/app/user/user.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: 'full',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: 'home',
                outlet: 'home',
                component: _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
            },
            {
                path: 'about',
                outlet: 'about',
                component: _about_about_page__WEBPACK_IMPORTED_MODULE_4__["AboutPage"]
            },
            {
                path: 'contact',
                outlet: 'contact',
                component: _contact_contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]
            },
            {
                path: 'salelist',
                outlet: 'salelist',
                component: _salelist_salelist_page__WEBPACK_IMPORTED_MODULE_6__["SalelistPage"]
            },
            {
                path: 'pricelist',
                outlet: 'pricelist',
                component: _pricelist_pricelist_page__WEBPACK_IMPORTED_MODULE_7__["PricelistPage"]
            },
            {
                path: 'addprice',
                outlet: 'addprice',
                component: _pricelist_addprice_addprice_page__WEBPACK_IMPORTED_MODULE_8__["AddpricePage"]
            },
            {
                path: 'customer',
                outlet: 'customer',
                component: _customer_customer_page__WEBPACK_IMPORTED_MODULE_9__["CustomerPage"]
            },
            {
                path: 'notification',
                outlet: 'notification',
                component: _notification_notification_page__WEBPACK_IMPORTED_MODULE_10__["NotificationPage"]
            },
            /*{
                path: 'whatsapp',
                outlet: 'whatsapp',
                component: WhatsappPage
            },*/
            {
                path: 'master',
                outlet: 'master',
                component: _master_master_page__WEBPACK_IMPORTED_MODULE_11__["MasterPage"]
            },
            {
                path: 'alluser',
                outlet: 'alluser',
                component: _alluser_alluser_page__WEBPACK_IMPORTED_MODULE_12__["AlluserPage"]
            },
            {
                path: 'user',
                outlet: 'user',
                component: _user_user_page__WEBPACK_IMPORTED_MODULE_13__["UserPage"]
            },
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map