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

module.exports = "<ion-content>\r\n\t<div class=\"login-page\">\r\n\t\t<div class=\"icon\">\r\n\t\t\t<img src=\"../assets/logo-transp/logo-white-shadow-200px.png\" width=\"200px\" height=\"200px\" />\r\n\t\t</div>\r\n\r\n\t\t{{global.onesignalID}}\r\n\t\t<div class=\"input-botline\">\r\n\t\t\t<div class=\"title\">USERNAME</div>\r\n\t\t\t<ion-input type=\"email\" name=\"username\" placeholder=\"example@email.com\" [(ngModel)]=\"username\"></ion-input>\r\n\t\t</div>\r\n\t\t<div class=\"input-botline\">\r\n\t\t\t<div class=\"title\">PASSWORD</div>\r\n\t\t\t<ion-input type=\"password\" name=\"password\" placeholder=\"••••••••••\" [(ngModel)]=\"password\"></ion-input>\r\n\t\t</div>\r\n\t\t<div class=\"result-text\" *ngIf=\"loginresultstring.length>0\" [innerHTML]=\"loginresultstring\"></div>\r\n\t\t<div class=\"action\" *ngIf=\"!global.loginloading\">\r\n\t\t\t<button class=\"btn\" id=\"login_btn\" (click)=\"login_clicked()\">\r\n\t\t\t\tLOG IN !\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t{{global.loginloading}}\r\n\t\t<div class=\"action\" *ngIf=\"global.loginloading\">\r\n\t\t\t<i class=\"fal fa-spinner fa-spin\"></i>\r\n\t\t\tloading...\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  background-color: #70a;\n  color: white;\n  height: 100%; }\n  .login-page .icon {\n    height: 50%;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    justify-items: center; }\n  .login-page .input-botline {\n    text-align: center; }\n  .login-page .input-botline div.title {\n      font-size: 40%;\n      margin-top: 30px;\n      font-weight: bold; }\n  .login-page .input-botline ion-input {\n      max-width: 350px;\n      width: 80%;\n      margin: auto;\n      color: white;\n      background-color: transparent;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      border-bottom: 2px solid white;\n      text-align: center;\n      font-size: 18px;\n      --placeholder-color: rgba(255,255,128,0.7);\n      --placeholder-opacity: 1; }\n  .login-page .input-botline ion-input:-webkit-autofill {\n        background-color: transparent;\n        color: white; }\n  .login-page .action {\n    text-align: center;\n    margin: 20px 0; }\n  .login-page .action .btn {\n      background-color: white;\n      color: #70a;\n      font-weight: bold; }\n  .login-page .result-text {\n    background-color: #ffffdd;\n    color: black;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYzpcXHhhbXBwXFxodGRvY3NcXGpibW9iaWxlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFIYjtJQUtFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUIsRUFBQTtFQVR2QjtJQVlFLGtCQUFrQixFQUFBO0VBWnBCO01BY0csY0FBYztNQUNkLGdCQUFnQjtNQUNoQixpQkFBaUIsRUFBQTtFQWhCcEI7TUFtQkcsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixZQUFZO01BQ1osWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixhQUFhO01BQ2IsY0FBYztNQUNkLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZiwwQ0FBb0I7TUFDbEIsd0JBQXNCLEVBQUE7RUEvQjNCO1FBa0NJLDZCQUE2QjtRQUM3QixZQUFZLEVBQUE7RUFuQ2hCO0lBd0NFLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUF6Q2hCO01BMkNHLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUE3Q3BCO0lBa0RFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Lmljb257XHJcblx0XHRoZWlnaHQ6IDUwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5pbnB1dC1ib3RsaW5le1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZGl2LnRpdGxle1xyXG5cdFx0XHRmb250LXNpemU6IDQwJTtcclxuXHRcdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0XHRpb24taW5wdXR7XHJcblx0XHRcdG1heC13aWR0aDogMzUwcHg7XHJcblx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMDtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IDA7XHJcblx0XHRcdGJvcmRlci1yaWdodDogMDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0LS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDEyOCwwLjcpO1xyXG4gICAgXHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFxyXG5cdFx0XHQmOi13ZWJraXQtYXV0b2ZpbGx7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5hY3Rpb257XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IDIwcHggMDtcclxuXHRcdC5idG57XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHRjb2xvcjogIzcwYTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucmVzdWx0LXRleHR7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmRkO1xyXG5cdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG59Il19 */"

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
                self.navCtrl.navigateForward('confirmationbyemployee?sid=1');
                //comment dulu biar cepet
                //self.router.navigateByUrl('tabs/full/(home:home)');
                //end
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