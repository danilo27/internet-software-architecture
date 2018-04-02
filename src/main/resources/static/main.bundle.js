webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Activation link is sent to {{ email }} \n</p>\n"

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivationPageComponent = /** @class */ (function () {
    function ActivationPageComponent(user) {
        this.user = user;
    }
    Object.defineProperty(ActivationPageComponent.prototype, "email", {
        get: function () {
            return this.user.email;
        },
        set: function (value) {
            this.user.email = value;
        },
        enumerable: true,
        configurable: true
    });
    ActivationPageComponent.prototype.ngOnInit = function () {
    };
    ActivationPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activation-page',
            template: __webpack_require__("./src/app/activation-page/activation-page.component.html"),
            styles: [__webpack_require__("./src/app/activation-page/activation-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */]])
    ], ActivationPageComponent);
    return ActivationPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoutingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cinemas_cinemas_component__ = __webpack_require__("./src/app/cinemas/cinemas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fanpage_fanpage_component__ = __webpack_require__("./src/app/fanpage/fanpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theatres_theatres_component__ = __webpack_require__("./src/app/theatres/theatres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userpage_userpage_component__ = __webpack_require__("./src/app/userpage/userpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__userprofile_userprofile_component__ = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__activation_page_activation_page_component__ = __webpack_require__("./src/app/activation-page/activation-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'cinemas', component: __WEBPACK_IMPORTED_MODULE_5__cinemas_cinemas_component__["a" /* CinemasComponent */] },
    { path: 'fanpage', component: __WEBPACK_IMPORTED_MODULE_6__fanpage_fanpage_component__["a" /* FanpageComponent */] },
    { path: 'theatres', component: __WEBPACK_IMPORTED_MODULE_8__theatres_theatres_component__["a" /* TheatresComponent */] },
    { path: 'userpage', component: __WEBPACK_IMPORTED_MODULE_9__userpage_userpage_component__["a" /* UserpageComponent */] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_10__userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: 'activation-page', component: __WEBPACK_IMPORTED_MODULE_11__activation_page_activation_page_component__["a" /* ActivationPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */],
    __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__cinemas_cinemas_component__["a" /* CinemasComponent */],
    __WEBPACK_IMPORTED_MODULE_6__fanpage_fanpage_component__["a" /* FanpageComponent */],
    __WEBPACK_IMPORTED_MODULE_8__theatres_theatres_component__["a" /* TheatresComponent */],
    __WEBPACK_IMPORTED_MODULE_9__userpage_userpage_component__["a" /* UserpageComponent */],
    __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
    __WEBPACK_IMPORTED_MODULE_11__activation_page_activation_page_component__["a" /* ActivationPageComponent */]
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authguard_guard__ = __webpack_require__("./src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__ = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["b" /* RoutingComponents */],
                __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__user_service_service__["a" /* UserServiceService */], __WEBPACK_IMPORTED_MODULE_6__authguard_guard__["a" /* AuthguardGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user) {
        this.user = user;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        return this.user.getLoggedIn();
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/cinemas/cinemas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cinemas/cinemas.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cinemas works!\n</p>\n"

/***/ }),

/***/ "./src/app/cinemas/cinemas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CinemasComponent = /** @class */ (function () {
    function CinemasComponent() {
    }
    CinemasComponent.prototype.ngOnInit = function () {
    };
    CinemasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cinemas',
            template: __webpack_require__("./src/app/cinemas/cinemas.component.html"),
            styles: [__webpack_require__("./src/app/cinemas/cinemas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CinemasComponent);
    return CinemasComponent;
}());



/***/ }),

/***/ "./src/app/fanpage/fanpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fanpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FanpageComponent = /** @class */ (function () {
    function FanpageComponent() {
    }
    FanpageComponent.prototype.ngOnInit = function () {
    };
    FanpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fanpage',
            template: __webpack_require__("./src/app/fanpage/fanpage.component.html"),
            styles: [__webpack_require__("./src/app/fanpage/fanpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FanpageComponent);
    return FanpageComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<button routerLink=\"/homepage\">Home</button>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n\t<div *ngIf=\"isLoggedIn() then userpagebutton; else loginpagebutton;\"></div>\r\n\t<ng-template #loginpagebutton>\r\n\t\t<a routerLink=\"/login\">Login</a>\r\n\t</ng-template>\r\n\t<ng-template #userpagebutton>\r\n\t\t<a routerLink=\"/userpage\">Userpage</a>\r\n\t\t{{user.name}}\r\n\t</ng-template>\r\n</nav>\r\n\r\n<nav>\r\n\t<a routerLink=\"/cinemas\">Cinema</a>\r\n\t<a routerLink=\"/theatres\">Theatres</a>\r\n</nav>\r\n\r\n<nav>\r\n\t<div *ngIf=\"isLoggedIn() then fanpagebutton\"></div>\r\n\t<ng-template #fanpagebutton>\r\n\t\t<a routerLink=\"/fanpage\">Fanpage</a>\r\n\t</ng-template>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(_userService) {
        this._userService = _userService;
        this.user = null;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (data) { return _this.user = data; });
    };
    HomepageComponent.prototype.isLoggedIn = function () {
        if (this.user == null) {
            return false;
        }
        else {
            return true;
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\r\n*:focus {\r\n  outline: none;\r\n}\r\n#login-box {\r\n    margin: auto;\r\n      width: 50%;\r\n\r\n  height: 880px;\r\n  background: #FFF;\r\n\r\n}\r\nh1 {\r\n  margin: 0 0 20px 0;\r\n  font-weight: 300;\r\n  font-size: 28px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  padding: 4px;\r\n  width: 220px;\r\n  height: 32px;\r\n  border: none;\r\n  border-bottom: 1px solid #AAA;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border-bottom: 2px solid #16a085;\r\n  color: #16a085;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"submit\"] {\r\n  margin-top: 28px;\r\n  width: 120px;\r\n  height: 32px;\r\n  background: #16a085;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"submit\"]:focus {\r\n  opacity: 0.8;\r\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\ninput[type=\"submit\"]:active {\r\n  opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n\t<form (submit)=\"loginUser($event)\">\n\t  <div class=\"container\">\n\n\n\n\n\t    <div id=\"login-box\">\n\t     <div class=\"left\">\n\t       <h1>Sign in</h1>\n\n\t       <label for=\"email\"><b>Username</b></label>\n\t       <input type=\"text\" placeholder=\"Enter Username\" name=\"email\" required><br>\n\n\t       <label for=\"psw\"><b>Password</b></label>\n\t       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\n\n\n\t\t   <input type=\"submit\" name=\"signup_submit\" value=\"Sign in\" />\n\t\t   <br><br><br>\n\t\t   <br> <br>\n\t\t   Don't have an account?\n\t\t   <button routerLink=\"/register\">Register</button>\n\t\t\t</div>\n\n\n\t   </div>\n\n\t  </div>\n\t</form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, _userService) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        var email = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        var user = {
            email: email,
            password: password
        };
        //console.log(email,password);
        this.http.post('/login', user).subscribe(function (data) {
            //if(data['email'] != ''){
            if (data != null) {
                console.log(data);
                _this._userService.setLoggedIn();
                _this.router.navigate(['userpage']);
                _this._userService.email = data['email'];
                _this._userService.friends = data['friends'];
            }
        });
        return false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n\tPage Not Found!\n</h3>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\r\n*:focus {\r\n  outline: none;\r\n}\r\n#login-box {\r\n    margin: auto;\r\n      width: 50%;\r\n\r\n  height: 880px;\r\n  background: #FFF;\r\n\r\n}\r\nh1 {\r\n  margin: 0 0 20px 0;\r\n  font-weight: 300;\r\n  font-size: 28px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  padding: 4px;\r\n  width: 220px;\r\n  height: 32px;\r\n  border: none;\r\n  border-bottom: 1px solid #AAA;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border-bottom: 2px solid #16a085;\r\n  color: #16a085;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"submit\"] {\r\n  margin-top: 28px;\r\n  width: 120px;\r\n  height: 32px;\r\n  background: #16a085;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"submit\"]:focus {\r\n  opacity: 0.8;\r\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\ninput[type=\"submit\"]:active {\r\n  opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"register($event)\">\n  <div class=\"container\">\n\n    <div id=\"login-box\">\n     <div class=\"left\">\n       <h1>Sign up</h1>\n\n       <label for=\"email\"><b>Email</b></label>\n       <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required><br>\n\n       <label for=\"psw\"><b>Password</b></label>\n       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\n\n       <label for=\"psw-repeat\"><b>Repeat Password</b></label>\n       <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required><br>\n\n       <label for=\"name\"><b>First Name</b></label>\n       <input type=\"text\" placeholder=\"Enter your first name\" name=\"name\" required><br>\n\n       <label for=\"lastname\"><b>Last Name</b></label>\n       <input type=\"text\" placeholder=\"Enter your last name\" name=\"lastname\" required><br>\n\n       <label for=\"city\"><b>City</b></label>\n       <input type=\"text\" placeholder=\"Enter your city\" name=\"city\" required><br>\n\n       <label for=\"phone\"><b>Phone Number</b></label>\n       <input type=\"text\" placeholder=\"Enter your phone number\" name=\"phoneNumber\" required><br>\n\n       <input type=\"submit\" name=\"signup_submit\" value=\"Sign up\" />\n     </div>\n\n   </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, http, _userService) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (e) {
        var _this = this;
        e.preventDefault();
        if (!isNaN(parseFloat(e.target.elements[6].value)) && isFinite(e.target.elements[6].value)) {
            var email = e.target.elements[0].value;
            var password = e.target.elements[1].value;
            var password_repeat = e.target.elements[2].value;
            var name = e.target.elements[3].value;
            var lname = e.target.elements[4].value;
            var city = e.target.elements[5].value;
            var phoneNumber = e.target.elements[6].value;
            var new_user = {
                email: email,
                password: password,
                password_repeat: password_repeat,
                name: name,
                lname: lname,
                city: city,
                phoneNumber: phoneNumber
            };
            this.http.post('/register', new_user).subscribe(function (data) {
                _this.router.navigate(['activation']);
            });
        }
        return false;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/theatres/theatres.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theatres/theatres.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  theatres works!\n</p>\n"

/***/ }),

/***/ "./src/app/theatres/theatres.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheatresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheatresComponent = /** @class */ (function () {
    function TheatresComponent() {
    }
    TheatresComponent.prototype.ngOnInit = function () {
    };
    TheatresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-theatres',
            template: __webpack_require__("./src/app/theatres/theatres.component.html"),
            styles: [__webpack_require__("./src/app/theatres/theatres.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TheatresComponent);
    return TheatresComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.friends = [];
        this.loggedIn = false;
    }
    UserServiceService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    UserServiceService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    UserServiceService.prototype.getUser = function () {
        return this.user;
    };
    UserServiceService.prototype.setUser = function () {
        //this.user = this.http.get<IUser>('assets/data/test.json');
        this.loggedIn = true;
        //console.log(this.user);
    };
    UserServiceService.prototype.getEmail = function () {
        return this.email;
    };
    UserServiceService.prototype.getFriends = function () {
        return this.friends;
    };
    UserServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "Hello {{ email }}! <br>\n<div>\n  Istorija poseta pozorista i bioskopa:\n  <ul>\n  <li *ngFor=\"let visit of visits\">\n      {{visit}}\n  </li>\n</ul>\n</div>\n\n<nav>\n\t<a routerLink=\"/cinemas\">Cinemas</a>\n\t<a routerLink=\"/theatres\">Theatres</a>\n    <a routerLink=\"/userprofile\">My Profile</a>\n</nav>\n\n<div>\n    Friends:\n<ol>\n<li *ngFor=\"let friend of friends\">\n    {{friend}}\n</li>\n</ol>\n</div>\n\n<hr>\n\n<div>\n    Friends:\n<ol>\n<li *ngFor=\"let friend of friends\">\n    {{friend}}\n</li>\n</ol>\n</div>\n"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(user) {
        // this.friends = user.friends;
        this.user = user;
    }
    Object.defineProperty(UserpageComponent.prototype, "email", {
        get: function () {
            return this.user.email;
        },
        set: function (value) {
            this.user.email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserpageComponent.prototype, "friends", {
        get: function () {
            return this.user.friends;
        },
        set: function (value) {
            this.user.friends = value;
        },
        enumerable: true,
        configurable: true
    });
    UserpageComponent.prototype.ngOnInit = function () {
        console.log(this.user);
        console.log(this.user.friends);
        console.log(this.email);
        console.log(this.user.email);
    };
    UserpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userpage',
            template: __webpack_require__("./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__("./src/app/userpage/userpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */]])
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  userprofile works!\n</p>\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent() {
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userprofile',
            template: __webpack_require__("./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__("./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map