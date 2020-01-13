(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editcustomerbankacc-editcustomerbankacc-module"],{

/***/ "./src/app/editcustomerbankacc/editcustomerbankacc.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/editcustomerbankacc/editcustomerbankacc.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditcustomerbankaccPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcustomerbankaccPageModule", function() { return EditcustomerbankaccPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _editcustomerbankacc_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editcustomerbankacc.page */ "./src/app/editcustomerbankacc/editcustomerbankacc.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _editcustomerbankacc_page__WEBPACK_IMPORTED_MODULE_5__["EditcustomerbankaccPage"]
    }
];
var EditcustomerbankaccPageModule = /** @class */ (function () {
    function EditcustomerbankaccPageModule() {
    }
    EditcustomerbankaccPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_editcustomerbankacc_page__WEBPACK_IMPORTED_MODULE_5__["EditcustomerbankaccPage"]]
        })
    ], EditcustomerbankaccPageModule);
    return EditcustomerbankaccPageModule;
}());



/***/ }),

/***/ "./src/app/editcustomerbankacc/editcustomerbankacc.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/editcustomerbankacc/editcustomerbankacc.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>\r\n\t\t\t<i class=\"far fa-piggy-bank fa-fw\"></i>\r\n\t\t\tCustomer Bank <span class=\"role\">EDIT</span>\r\n\t\t</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"editcustomerbank-wrapper\">\r\n\t\t<div class=\"list-standard\" *ngIf=\"customerbankacc!=null\">\r\n\t\t\t<ul>\r\n        <li class=\"list-sm no-border\">\r\n          <div class=\"label\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Customer BANK</ion-label>\r\n              <ion-select [interfaceOptions]=\"customerbankaccOptions\" interface=\"action-sheet\" [(ngModel)]=\"customerbankacc.bankID\" placeholder=\"Helloworld\">\r\n                <ion-select-option *ngFor=\"let bank of banks\" [selected]=\"bank.id==customerbankacc.bankID\" selected=\"{{customerbankacc.bankID}}\" [value]=\"bank.id\">\r\n                  <ng-container *ngIf=\"bank.alias==''\">{{bank.bankname}}</ng-container>\r\n                  <ng-container *ngIf=\"bank.alias!=''\">{{bank.alias}}</ng-container>\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n        </li>\r\n\t\t\t\t<li class=\"list-sm no-border\">\r\n\t\t\t\t\t<div class=\"label\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Account Name</ion-label>\r\n              <ion-input value=\"{{customerbankacc.accname}}\"></ion-input>\r\n            </ion-item>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n        <li class=\"list-sm no-border\">\r\n          <div class=\"label\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Account Number</ion-label>\r\n              <ion-input value=\"{{customerbankacc.accno}}\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n        </li>\r\n        <li class=\"list-sm no-border\">\r\n          <div class=\"label\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Account Location</ion-label>\r\n              <ion-input value=\"{{customerbankacc.acclocation}}\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n        </li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n  <div class=\"action action-bottom\" (click)=\"updatecustomerbankacc(customerbankacc)\">\r\n    <button class=\"btn btn-purple\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/editcustomerbankacc/editcustomerbankacc.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/editcustomerbankacc/editcustomerbankacc.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRjdXN0b21lcmJhbmthY2MvZWRpdGN1c3RvbWVyYmFua2FjYy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/editcustomerbankacc/editcustomerbankacc.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/editcustomerbankacc/editcustomerbankacc.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditcustomerbankaccPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcustomerbankaccPage", function() { return EditcustomerbankaccPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var EditcustomerbankaccPage = /** @class */ (function () {
    function EditcustomerbankaccPage(global, router, activatedRoute, http, location) {
        var _this = this;
        this.global = global;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.location = location;
        this.customerbankacc = null;
        this.bankserror = false;
        this.banks = [];
        this.selectedbank = null;
        this.customerbankloading = false;
        this.customerbankaccOptions = {
            header: 'Daftar Bank'
        };
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.customerbankacc = JSON.parse(params.special);
                _this.getbankdata();
            }
        });
    }
    EditcustomerbankaccPage.prototype.ngOnInit = function () {
    };
    EditcustomerbankaccPage.prototype.getbankdata = function () {
        this.banks = null;
        var url = this.global.api + "select/banks";
        var self = this;
        this.global.dopost(url, function (data) {
            self.banks = data;
            var temp = 0;
            self.banks.forEach(function ($ii, $i) {
                if ($ii.id == self.customerbankacc.bank.id) {
                    temp = $ii.id;
                }
            });
            self.customerbankacc.bankID = 0;
            var self2 = self;
            setTimeout(function () {
                self2.customerbankacc.bankID = temp;
            }, 20);
            self.bankserror = false;
        }, function (error) {
            self.bankserror = true;
        });
    };
    EditcustomerbankaccPage.prototype.updatecustomerbankacc = function (bankacc) {
        var post = {
            "id": bankacc.id,
            "accname": bankacc.accname,
            "accno": bankacc.accno,
            "acclocation": bankacc.acclocation,
            "bankID": bankacc.bankID,
        };
        var url = this.global.api + "update/customerbankacc";
        var this2 = this;
        this.global.dopost(url, function (data) {
            if (data[0] == 1) {
                //return ke page sebelomnya.
                var self_1 = this2;
                setTimeout(function () {
                    self_1.location.back();
                }, 3000);
            }
            else {
                console.log("error: " + data);
            }
            this2.global.showerror(data[1]);
        }, function (error) {
            if (error.status != 200) {
                console.log("error from editcustomerbankacc.page.ts");
                this2.global.showerror("error");
            }
            else {
                console.log("Hasil Bukan JSON / Preflight Req.");
            }
        }, post);
    };
    EditcustomerbankaccPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editcustomerbankacc',
            template: __webpack_require__(/*! ./editcustomerbankacc.page.html */ "./src/app/editcustomerbankacc/editcustomerbankacc.page.html"),
            styles: [__webpack_require__(/*! ./editcustomerbankacc.page.scss */ "./src/app/editcustomerbankacc/editcustomerbankacc.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EditcustomerbankaccPage);
    return EditcustomerbankaccPage;
}());



/***/ })

}]);
//# sourceMappingURL=editcustomerbankacc-editcustomerbankacc-module.js.map