(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addnewcustomer-addnewcustomer-module"],{

/***/ "./src/app/addnewcustomer/addnewcustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addnewcustomer/addnewcustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: AddnewcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewcustomerPageModule", function() { return AddnewcustomerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _addnewcustomer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addnewcustomer.page */ "./src/app/addnewcustomer/addnewcustomer.page.ts");
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
        component: _addnewcustomer_page__WEBPACK_IMPORTED_MODULE_5__["AddnewcustomerPage"]
    }
];
// @ts-ignore
var AddnewcustomerPageModule = /** @class */ (function () {
    function AddnewcustomerPageModule() {
    }
    AddnewcustomerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_addnewcustomer_page__WEBPACK_IMPORTED_MODULE_5__["AddnewcustomerPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            ]
        })
    ], AddnewcustomerPageModule);
    return AddnewcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/addnewcustomer/addnewcustomer.page.html":
/*!*********************************************************!*\
  !*** ./src/app/addnewcustomer/addnewcustomer.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<i class=\"far fa-child fa-fw\"></i>\n\t\t\tCreate New Customer\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form>\n\t\t<ion-grid>\n\t\t\t<ion-row justify-content-center>\n\t\t\t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\t\t\t\t\t<div padding>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"email\" type=\"text\" placeholder=\"Email Anda\" [(ngModel)]=\"email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"name\" type=\"text\" placeholder=\"Nama Lengkap\" [(ngModel)]=\"name\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"telp\" type=\"text\" placeholder=\"No. Telp/Wa\" [(ngModel)]=\"telp1\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"telp2\" type=\"text\" placeholder=\"No. Telp 2\" [(ngModel)]=\"telp2\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"telp3\" type=\"text\" placeholder=\"No. Telp 3\" [(ngModel)]=\"telp3\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n<!--\t\t\t\t\t\t<ion-list-header>-->\n<!--\t\t\t\t\t\t\t<ion-label>Genre</ion-label>-->\n<!--\t\t\t\t\t\t</ion-list-header>-->\n\t\t\t\t\t\t<ion-list>\n\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of checkBoxList; let $i = index\">\n\t\t\t\t\t\t\t\t<ion-label>{{item.value}}</ion-label>\n\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" name=\"title-{{$i}}\" (ngModelChange)=checkEvent(item)></ion-checkbox>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div padding>\n\t\t\t\t\t\t<ion-button size=\"large\" expand=\"block\" (click)=\"register_clicked()\">Save</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addnewcustomer/addnewcustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addnewcustomer/addnewcustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #fff;\n  --color: black; }\n\nion-button {\n  --background: #062f77; }\n"

/***/ }),

/***/ "./src/app/addnewcustomer/addnewcustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addnewcustomer/addnewcustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: AddnewcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewcustomerPage", function() { return AddnewcustomerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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





var AddnewcustomerPage = /** @class */ (function () {
    function AddnewcustomerPage(global, http, router, navCtrl, platform) {
        this.global = global;
        this.http = http;
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.name = "";
    }
    AddnewcustomerPage.prototype.ngOnInit = function () {
        this.name = "";
        this.email = "";
        this.telp1 = "";
        this.telp2 = "";
        this.telp3 = "";
        this.checkBoxList = [
            {
                value: "Mr.",
                isChecked: false
            }, {
                value: "Mrs.",
                isChecked: false
            }, {
                value: "Ms.",
                isChecked: false
            }
        ];
    };
    AddnewcustomerPage.prototype.register_clicked = function () {
        var url = this.global.api + 'register';
        var post = {
            'email': this.email,
            'name': this.name,
            'telp1': this.telp1,
            'telp2': this.telp2,
            'telp3': this.telp3,
            'title': this.title,
        };
        //console.log(post);
        this.result = this.http.post(url, post, {
            responseType: 'json'
        });
        if (this.result != null) {
            this.result.subscribe(function (data) {
                if (data != null) {
                    console.log(data);
                }
                else {
                    console.log("EMAIL NULL");
                }
            });
        }
        else {
            console.log("error");
        }
    };
    AddnewcustomerPage.prototype.checkEvent = function (item) {
        var _this = this;
        if (item && this.checkBoxList != null) {
            this.checkBoxList.filter(function (r) { return r.value != item.value; }).forEach(function (r) {
                r.isChecked = false;
                _this.title = item.value;
            });
        }
    };
    AddnewcustomerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addnewcustomer',
            template: __webpack_require__(/*! ./addnewcustomer.page.html */ "./src/app/addnewcustomer/addnewcustomer.page.html"),
            styles: [__webpack_require__(/*! ./addnewcustomer.page.scss */ "./src/app/addnewcustomer/addnewcustomer.page.scss")],
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], AddnewcustomerPage);
    return AddnewcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=addnewcustomer-addnewcustomer-module.js.map