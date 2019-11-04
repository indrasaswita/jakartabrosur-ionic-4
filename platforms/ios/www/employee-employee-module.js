(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function() { return EmployeePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.page */ "./src/app/employee/employee.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_5__["EmployeePage"]
    }
];
var EmployeePageModule = /** @class */ (function () {
    function EmployeePageModule() {
    }
    EmployeePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_5__["EmployeePage"]]
        })
    ], EmployeePageModule);
    return EmployeePageModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.page.html":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<i class=\"fal fa-eye fa-fw\"></i>\n\t\t\tEmployee Detail\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ul>\n\t\t<li *ngFor=\"let item of global.employees; let i = index\">\n\t\t\t{{i+1}}. {{item.name}}\n\t\t</li>\n\t</ul>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employee/employee.page.scss":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/employee.page.ts":
/*!*******************************************!*\
  !*** ./src/app/employee/employee.page.ts ***!
  \*******************************************/
/*! exports provided: EmployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePage", function() { return EmployeePage; });
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



var EmployeePage = /** @class */ (function () {
    function EmployeePage(router, global) {
        this.router = router;
        this.global = global;
    }
    EmployeePage.prototype.ngOnInit = function () {
        console.log(this.global.employees);
    };
    EmployeePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.page.html */ "./src/app/employee/employee.page.html"),
            styles: [__webpack_require__(/*! ./employee.page.scss */ "./src/app/employee/employee.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"]])
    ], EmployeePage);
    return EmployeePage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map