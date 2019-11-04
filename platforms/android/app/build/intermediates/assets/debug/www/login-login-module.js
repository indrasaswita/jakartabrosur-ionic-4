(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import {IonicStorageModule} from "@ionic/storage";
//import { IonicErrorHandler } from 'ionic-angular/umd';
var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"],
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"login-page\">\n\t\t<div class=\"icon\">\n\t\t\t<img src=\"../assets/logo-transp/logo-white-shadow-200px.png\" width=\"200px\" height=\"200px\" />\n\t\t</div>\n\n\t\t{{global.onesignalID}}\n\t\t<div class=\"input-botline\">\n\t\t\t<div class=\"title\">USERNAME</div>\n\t\t\t<ion-input type=\"email\" name=\"username\" placeholder=\"example@email.com\" [(ngModel)]=\"username\"></ion-input>\n\t\t</div>\n\t\t<div class=\"input-botline\">\n\t\t\t<div class=\"title\">PASSWORD</div>\n\t\t\t<ion-input type=\"password\" name=\"password\" placeholder=\"••••••••••\" [(ngModel)]=\"password\"></ion-input>\n\t\t</div>\n\t\t<div class=\"result-text\" *ngIf=\"loginresultstring.length>0\" [innerHTML]=\"loginresultstring\"></div>\n\t\t<div class=\"action\" *ngIf=\"!global.loginloading\">\n\t\t\t<button class=\"btn\" id=\"login_btn\" (click)=\"login_clicked()\">\n\t\t\t\tLOG IN !\n\t\t\t</button>\n\t\t</div>\n\t\t{{global.loginloading}}\n\t\t<div class=\"action\" *ngIf=\"global.loginloading\">\n\t\t\t<i class=\"fal fa-spinner fa-spin\"></i>\n\t\t\tloading...\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  background-color: #70a;\n  color: white;\n  height: 100%; }\n  .login-page .icon {\n    height: 50%;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    justify-items: center; }\n  .login-page .input-botline {\n    text-align: center; }\n  .login-page .input-botline div.title {\n      font-size: 40%;\n      margin-top: 30px;\n      font-weight: bold; }\n  .login-page .input-botline ion-input {\n      max-width: 350px;\n      width: 80%;\n      margin: auto;\n      color: white;\n      background-color: transparent;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      border-bottom: 2px solid white;\n      text-align: center;\n      font-size: 18px;\n      --placeholder-color: rgba(255,255,128,0.7);\n      --placeholder-opacity: 1; }\n  .login-page .input-botline ion-input:-webkit-autofill {\n        background-color: transparent;\n        color: white; }\n  .login-page .action {\n    text-align: center;\n    margin: 20px 0; }\n  .login-page .action .btn {\n      background-color: white;\n      color: #70a;\n      font-weight: bold; }\n  .login-page .result-text {\n    background-color: #ffffdd;\n    color: black;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHhhbXBwXFxodGRvY3NcXGpCcm9zdXJEcm9pZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWSxFQUFBO0VBSGI7SUFLRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCLEVBQUE7RUFUdkI7SUFZRSxrQkFBa0IsRUFBQTtFQVpwQjtNQWNHLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7RUFoQnBCO01BbUJHLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsWUFBWTtNQUNaLFlBQVk7TUFDWiw2QkFBNkI7TUFDN0IsYUFBYTtNQUNiLGNBQWM7TUFDZCxlQUFlO01BQ2YsOEJBQThCO01BQzlCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsMENBQW9CO01BQ2xCLHdCQUFzQixFQUFBO0VBL0IzQjtRQWtDSSw2QkFBNkI7UUFDN0IsWUFBWSxFQUFBO0VBbkNoQjtJQXdDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBekNoQjtNQTJDRyx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLGlCQUFpQixFQUFBO0VBN0NwQjtJQWtERSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2V7XG5cdGJhY2tncm91bmQtY29sb3I6ICM3MGE7XG5cdGNvbG9yOiB3aGl0ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHQuaWNvbntcblx0XHRoZWlnaHQ6IDUwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5pbnB1dC1ib3RsaW5le1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRkaXYudGl0bGV7XG5cdFx0XHRmb250LXNpemU6IDQwJTtcblx0XHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR9XG5cdFx0aW9uLWlucHV0e1xuXHRcdFx0bWF4LXdpZHRoOiAzNTBweDtcblx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlci10b3A6IDA7XG5cdFx0XHRib3JkZXItbGVmdDogMDtcblx0XHRcdGJvcmRlci1yaWdodDogMDtcblx0XHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwxMjgsMC43KTtcbiAgICBcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcblx0XHRcdFxuXHRcdFx0Jjotd2Via2l0LWF1dG9maWxse1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuYWN0aW9ue1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDIwcHggMDtcblx0XHQuYnRue1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRjb2xvcjogIzcwYTtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdH1cblx0fVxuXG5cdC5yZXN1bHQtdGV4dHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmRkO1xuXHRcdGNvbG9yOiBibGFjaztcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ "./src/app/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@ViewChild('login_btn') inputEl: ElementRef;
var LoginPage = /** @class */ (function () {
    function LoginPage(global, auth, http, router, navCtrl, platform, storage) {
        this.global = global;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storage = storage;
        this.username = "";
        this.password = "";
        this.loginresultstring = "";
        this.loginerror = true;
        //constructor
        this.username = "employee@test.com";
        this.password = "password";
        this.global.logintoken = "$2y$10$yLK5sCjIeWdGRGA8gFjnpuUiBblJn9AP0A/TVTJculb2Ttbe4PBSq";
    }
    LoginPage.prototype.ngOnInit = function () {
        //this.storage.clear('USER_INFO');
        var self = this;
        this.auth.cek_token(function (data) {
            self.loginerror = false;
            if (self.global.usertype == "EM") {
                self.router.navigateByUrl('tabs/full/(home:home)');
                self.loginresultstring = "<i class='fas fa-check fa-fw'></i> Employee Logged-in, Success..";
            }
        }, function (error) {
            self.loginerror = true;
            self.global.loginloading = false;
            self.loginresultstring = "Please re-login..";
            //kosongin passwod set user name dari storage
            console.log(error);
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.subscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    LoginPage.prototype.login_clicked = function () {
        var _this = this;
        if (this.global.loginloading == false) {
            this.global.loginloading = true;
            var onesignalID = this.global.onesignalID;
            var url = this.global.api + 'login';
            var post = {
                'onesignalID': onesignalID,
                'username': this.username,
                'password': this.password
            };
            //console.log(url);
            //this.authService.login();
            this.result = this.http.post(url, post, {
                responseType: 'json'
            });
            if (this.result != null) {
                this.result.subscribe(function (data) {
                    if (data != null) {
                        if (data[0] == '1') {
                            _this.global.logintoken = data[1];
                            _this.global.userdata = data[2];
                            _this.global.usertype = data[3];
                            _this.loginerror = false;
                            var dummy_response = {
                                onesignalID: _this.global.onesignalID,
                                app_token: _this.global.logintoken
                            };
                            _this.storage.set('USER_INFO', dummy_response).then(function (response) { });
                            if (_this.global.usertype == "EM") {
                                _this.router.navigateByUrl('tabs/full/(home:home)');
                                _this.loginresultstring = "<i class='fas fa-check fa-fw'></i> Employee Logged-in, Success..";
                            }
                            else if (_this.global.usertype == "CU") {
                                //CUSTOMER ROLE
                                //this.router.navigateByUrl('');
                                console.log("CUSTOMER RESTICTION");
                                _this.loginresultstring = "<i class='fas fa-check fa-fw'></i> Customer Logged-in, Cannot go inside..";
                                _this.global.loginloading = false;
                            }
                        }
                        else {
                            _this.loginerror = true;
                            console.log('STATUS ERROR');
                            _this.loginresultstring = data[1];
                        }
                    }
                    else {
                        _this.loginerror = true;
                        console.log('NO DATA RECEIVED');
                    }
                    _this.global.loginloading = false;
                }, function (error) {
                    _this.global.loginloading = false;
                    console.log(error);
                });
            }
            else {
                this.loginerror = true;
                console.log("CANNOT LOGIN, error in result = null");
            }
        }
        else {
            console.log("STILL on log-in loading API, please wait..");
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map