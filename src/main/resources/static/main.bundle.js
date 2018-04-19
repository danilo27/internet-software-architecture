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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__update_user_update_user_component__ = __webpack_require__("./src/app/update-user/update-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authguard_guard__ = __webpack_require__("./src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rezervacija_rezervacija_component__ = __webpack_require__("./src/app/rezervacija/rezervacija.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__change_password_change_password_component__ = __webpack_require__("./src/app/change-password/change-password.component.ts");
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
    { path: 'userpage', canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]], component: __WEBPACK_IMPORTED_MODULE_9__userpage_userpage_component__["a" /* UserpageComponent */] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_10__userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: 'activation-page', component: __WEBPACK_IMPORTED_MODULE_11__activation_page_activation_page_component__["a" /* ActivationPageComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'updateuser/:username', component: __WEBPACK_IMPORTED_MODULE_12__update_user_update_user_component__["a" /* UpdateUserComponent */] },
    { path: 'update-user', component: __WEBPACK_IMPORTED_MODULE_12__update_user_update_user_component__["a" /* UpdateUserComponent */] },
    { path: 'change-password/:username', component: __WEBPACK_IMPORTED_MODULE_16__change_password_change_password_component__["a" /* ChangePasswordComponent */] },
    { path: 'rezervisi/:name', component: __WEBPACK_IMPORTED_MODULE_15__rezervacija_rezervacija_component__["a" /* RezervacijaComponent */] },
    { path: 'users/:username', component: __WEBPACK_IMPORTED_MODULE_10__userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
    __WEBPACK_IMPORTED_MODULE_11__activation_page_activation_page_component__["a" /* ActivationPageComponent */],
    __WEBPACK_IMPORTED_MODULE_15__rezervacija_rezervacija_component__["a" /* RezervacijaComponent */]
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rekviziti_service__ = __webpack_require__("./src/app/rekviziti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rekvizit_rekvizit_component__ = __webpack_require__("./src/app/rekvizit/rekvizit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__oglas_oglas_component__ = __webpack_require__("./src/app/oglas/oglas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userprofile_userprofile_component__ = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__upload_file_service__ = __webpack_require__("./src/app/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__update_user_update_user_component__ = __webpack_require__("./src/app/update-user/update-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rezervacija_rezervacija_component__ = __webpack_require__("./src/app/rezervacija/rezervacija.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pozivnice_pozivnice_component__ = __webpack_require__("./src/app/pozivnice/pozivnice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__change_password_change_password_component__ = __webpack_require__("./src/app/change-password/change-password.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_9__rekvizit_rekvizit_component__["a" /* RekvizitComponent */],
                __WEBPACK_IMPORTED_MODULE_10__oglas_oglas_component__["a" /* OglasComponent */],
                __WEBPACK_IMPORTED_MODULE_11__userprofile_userprofile_component__["a" /* UserprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__update_user_update_user_component__["a" /* UpdateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__rezervacija_rezervacija_component__["a" /* RezervacijaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pozivnice_pozivnice_component__["a" /* PozivniceComponent */],
                __WEBPACK_IMPORTED_MODULE_19__change_password_change_password_component__["a" /* ChangePasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAL7fctJPUvG52w9R2KjlVbcoHAG1CRlzs'
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__user_service_service__["a" /* UserServiceService */], __WEBPACK_IMPORTED_MODULE_8__rekviziti_service__["a" /* RekvizitiService */], __WEBPACK_IMPORTED_MODULE_6__authguard_guard__["a" /* AuthguardGuard */], __WEBPACK_IMPORTED_MODULE_12__upload_file_service__["a" /* UploadFileService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
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
    function AuthguardGuard(user, router) {
        this.user = user;
        this.router = router;
    } //session
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (!this.user.getLoggedIn()) {
            this.router.navigate(['']);
        }
        return this.user.getLoggedIn();
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service_service__["a" /* UserServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n\t<form (submit)=\"changePassword($event)\">\n\t  <div class=\"container\">\n\t    <div id=\"login-box\">\n\t     <div class=\"left\">\n\t       <h1>Change your password</h1>\n\n\t       <label for=\"psw\"><b>Password</b></label>\n\t       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\n\t\n\t\t\t<label for=\"psw\"><b>Repeat Password</b></label>\n\t       <input type=\"password\" placeholder=\"Enter Password Again\" name=\"psw\" required><br>\n\n\t\t   <input type=\"submit\" name=\"signup_submit\" value=\"Change\" />\n\t\t   <br><br><br>\n\t\t   <br> <br>\n\n\t\t\t</div>\n\t   </div>\n\n\t  </div>\n\t</form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(router, http, route) {
        this.router = router;
        this.http = http;
        this.route = route;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.changePassword = function (e) {
        var _this = this;
        e.preventDefault();
        var username = this.route.snapshot.params["username"];
        var password = e.target.elements[0].value;
        var password_repeat = e.target.elements[1].value;
        if (password == password_repeat) {
            var user = {
                username: username,
                password: password,
                passwordRepeat: password_repeat
            };
            this.http.post('/changePassword', user).subscribe(function (data) {
                if (data != null) {
                    _this.router.navigate(['login']);
                }
                else {
                    alert('Error! You can\'t use old password!');
                }
            });
        }
        else {
            alert('Passwords don\'t match!');
        }
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
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

module.exports = "li {\n\tborder-bottom: 1px solid gray;\n}"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/fanpage\">Fan zona</a>\n    </div>\n    <button class=\"btn btn-default navbar-btn\" (click)=\"zvanicnaProdavnica()\">Zvanicna prodavnica</button>\n    <button class=\"btn btn-default navbar-btn\" (click)=\"polovniOglasi()\">Oglasi</button>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Notifikacije <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let n of notifikacije\">\n  \t\t\t{{n.sadrzaj}} \n\t  \t  </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div [ngSwitch]=\"state\">\n\t<div *ngSwitchCase=\"'zvanicni'\">\n\t\t<div *ngIf=\"isAdmin()\">\n\t\t\t<div class=\"btn-group\">\n  \t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"noviZvanicniRekvizit()\">Novi rekvizit</button>\n  \t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"pregledajOglase()\">Oglasi za proveru</button>\n\t\t\t</div>\n\t\t</div>\n\t\n\t\t<div *ngFor=\"let r of zvanicniRekviziti\">\n\t\t\t<div *ngFor = \"let f of fileUploads\">\n\t\t\t\t<div *ngIf=\"isImage(r.slika,f)\">\n\t\t\t\t\t<div class=\"row\">\n  \t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<app-rekvizit (izmenaEvent)=\"izmena($event)\" [rekvizit]=\"r\" [fileUpload]='f'></app-rekvizit>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n \n\t<div *ngSwitchCase=\"'oglasi'\">\n\t\t<div class=\"btn-group\">\n  \t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"noviOglas()\">Novi oglas</button>\n  \t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"aktivniOglasi()\">Aktivni oglasi</button>\n\t\t</div>\n\t\t\n\t\t<div *ngFor = \"let o of oglasi\">\n\t\t\t<div *ngFor = \"let f of fileUploads\">\n\t\t\t\t<div *ngIf=\"isImage(o.slika,f)\">\n\t\t\t\t\t<app-oglas [oglas]=\"o\" [fileUpload]='f'></app-oglas>\n\t\t\t\t\t<hr>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngSwitchCase=\"'noviOglas'\">\n\t\t<div>\n\t\t\t<h3>Naziv oglasa</h3>\n\t\t\t<input #nazivOglasa type=\"text\">\n\t\t\t<h3>Opis oglasa</h3>\n\t\t\t<textarea #opisOglasa rows=\"10\" cols=\"30\"></textarea>\n\t\t\t<h3>Slika oglasa</h3>\n\t\t\t\n\t\t\t<input type='file' (change)=\"onSelectFile($event)\">\n\t\t\t\n\t\t\t<h3>Cena oglasa</h3>\n\t\t\t<input #cenaOglasa type=\"number\">\n\t\t\t<h3>Datum isteka oglasa</h3>\n\t\t\t<input #datumOglasa type=\"date\"><br>\n\t\t\t<div class=\"btn-group\">\n  \t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"postaviOglas(nazivOglasa.value,opisOglasa.value,cenaOglasa.value,datumOglasa.value)\">Postavi oglas</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngSwitchCase=\"'noviRekvizit'\">\n\t\t<div>\n\t\t\t<h3>Naziv rekvizita</h3>\n\t\t\t<input #nazivRekvizita type=\"text\" value=\"{{nazivRek}}\" [disabled]=\"mode\">\n\t\t\t<h3>Opis rekvizita</h3>\n\t\t\t<textarea #opisRekvizita rows=\"10\" cols=\"30\" value=\"{{opisRek}}\"></textarea>\n\t\t\t<h3>Slika rekvizita</h3>\n\t\t\t\n\t\t\t<input type='file' (change)=\"onSelectFile($event)\">\n\t\t\t\n\t\t\t<h3>Cena rekvizita</h3>\n\t\t\t<input #cenaRekvizita type=\"number\" value=\"{{cenaRek}}\"><br>\n\t\t\t\n\t\t\t<div *ngIf=\"isMode() then izmeni; else postavi;\"></div>\n\t\t\t\n\t\t\t<ng-template #postavi>\n\t\t\t\t<div class=\"btn-group\">\n  \t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"postaviRekvizit(nazivRekvizita.value,opisRekvizita.value,cenaRekvizita.value)\">Postavi rekvizit</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t\n\t\t\t<ng-template #izmeni>\n\t\t\t\t<div class=\"btn-group\">\n  \t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"izmeniRekvizit(nazivRekvizita.value,opisRekvizita.value,cenaRekvizita.value)\">Izmeni rekvizit</button>\n  \t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"odustani()\">Odustani</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div *ngSwitchCase=\"'proveraOglasa'\">\n\t\t<div>\n\t\t\t<div *ngFor = \"let o of oglasiZaProveru\">\n\t\t\t\t<div *ngFor = \"let f of fileUploads\">\n\t\t\t\t\t<div *ngIf=\"isImage(o.slika,f)\">\n\t\t\t\t\t\t<app-oglas [oglas]=\"o\" [fileUpload]='f' ></app-oglas>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngSwitchCase=\"'aktivniOglasi'\">\n\t\t<div>\n\t\t\t<div *ngFor = \"let o of oglasiKorisnika\">\n\t\t\t\t<div *ngFor = \"let f of fileUploads\">\n\t\t\t\t\t<div *ngIf=\"isImage(o.slika,f)\">\n\t\t\t\t\t\t<app-oglas [oglas]=\"o\" [fileUpload]='f' ></app-oglas>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rekviziti_service__ = __webpack_require__("./src/app/rekviziti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_file_service__ = __webpack_require__("./src/app/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
    function FanpageComponent(_rekvizitiService, _userService, _uploadService) {
        this._rekvizitiService = _rekvizitiService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.zvanicniRekviziti = null;
        this.oglasi = null;
        this.oglasiKorisnika = null;
        this.oglasiZaProveru = null;
        this.user = null;
        this.notifikacije = null;
        this.state = "zvanicni";
        this.nazivRek = "";
        this.opisRek = "";
        this.slikaRek = "";
        this.cenaRek = "";
        this.mode = false;
    }
    FanpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rekvizitiService.getZvanicniRekviziti().subscribe(function (data) { return _this.zvanicniRekviziti = data; });
        this._rekvizitiService.getPolovniRekviziti().subscribe(function (data) { return _this.oglasi = data; });
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
        this.user = this._userService.getUser();
        console.log('user ' + this.user.username + " type " + this.user.utype);
        this._rekvizitiService.getAktivniOglasi(this.user).subscribe(function (data) { return _this.oglasiKorisnika = data; });
        this._rekvizitiService.getNotifikacije(this.user).subscribe(function (data) { return _this.notifikacije = data; });
    };
    FanpageComponent.prototype.zvanicnaProdavnica = function () {
        var _this = this;
        this.state = "zvanicni";
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
    };
    FanpageComponent.prototype.polovniOglasi = function () {
        this.state = "oglasi";
    };
    FanpageComponent.prototype.noviOglas = function () {
        this.state = "noviOglas";
    };
    FanpageComponent.prototype.aktivniOglasi = function () {
        this.state = "aktivniOglasi";
    };
    FanpageComponent.prototype.noviZvanicniRekvizit = function () {
        this.state = "noviRekvizit";
    };
    FanpageComponent.prototype.postaviOglas = function (nazivOglasa, opisOglasa, cenaOglasa, datumOglasa) {
        var _this = this;
        var slikaOglasa = this.selectedFiles.item(0).name;
        var ponude = [];
        this._rekvizitiService.posaljiOglasNaProveru(nazivOglasa, opisOglasa, slikaOglasa, cenaOglasa, this.user, datumOglasa, ponude);
        this.currentFileUpload = this.selectedFiles.item(0);
        this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
        this.state = "zvanicni";
    };
    FanpageComponent.prototype.postaviRekvizit = function (nazivRekvizita, opisRekvizita, cenaRekvizita) {
        var _this = this;
        var slikaRekvizita = this.selectedFiles.item(0).name;
        console.log(slikaRekvizita);
        this._rekvizitiService.postaviRekvizit(nazivRekvizita, opisRekvizita, slikaRekvizita, cenaRekvizita);
        this.currentFileUpload = this.selectedFiles.item(0);
        this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
        this.state = "zvanicni";
    };
    FanpageComponent.prototype.izmeniRekvizit = function (nazivRekvizita, opisRekvizita, cenaRekvizita) {
        var _this = this;
        var slikaRekvizita = this.slikaRek;
        var slikaPromenjena = false;
        if (this.selectedFiles) {
            if (this.selectedFiles.item(0).name != this.slikaRek) {
                slikaRekvizita = this.selectedFiles.item(0).name;
                slikaPromenjena = true;
            }
        }
        this._rekvizitiService.izmeniRekvizit(nazivRekvizita, opisRekvizita, slikaRekvizita, cenaRekvizita);
        if (slikaPromenjena) {
            this.currentFileUpload = this.selectedFiles.item(0);
            this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpResponse */]) {
                    console.log('File is completely uploaded!');
                }
            });
            this.selectedFiles = undefined;
            this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
        }
        this.nazivRek = "";
        this.opisRek = "";
        this.slikaRek = "";
        this.cenaRek = "";
        this.mode = false;
        this.state = "zvanicni";
    };
    FanpageComponent.prototype.onSelectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FanpageComponent.prototype.isImage = function (r, file) {
        return file.includes(r);
    };
    FanpageComponent.prototype.isAdmin = function () {
        if (this.user.utype == "admin") {
            return true;
        }
        return false;
    };
    FanpageComponent.prototype.pregledajOglase = function () {
        var _this = this;
        this._rekvizitiService.getOglasiZaProveru().subscribe(function (data) { return _this.oglasiZaProveru = data; });
        this.state = "proveraOglasa";
    };
    FanpageComponent.prototype.izmena = function (rekvizit) {
        this.mode = true;
        this.nazivRek = rekvizit.naziv;
        this.opisRek = rekvizit.opis;
        this.slikaRek = rekvizit.slika;
        this.cenaRek = rekvizit.cena;
        this.state = "noviRekvizit";
    };
    FanpageComponent.prototype.isMode = function () {
        return !this.mode;
    };
    FanpageComponent.prototype.odustani = function () {
        this.nazivRek = "";
        this.opisRek = "";
        this.slikaRek = "";
        this.cenaRek = "";
        this.mode = false;
        this.state = "zvanicni";
    };
    FanpageComponent.prototype.seen = function (naziv) {
        console.log(naziv);
    };
    FanpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fanpage',
            template: __webpack_require__("./src/app/fanpage/fanpage.component.html"),
            styles: [__webpack_require__("./src/app/fanpage/fanpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rekviziti_service__["a" /* RekvizitiService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service_service__["a" /* UserServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__upload_file_service__["a" /* UploadFileService */]])
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

module.exports = "\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink=\"/homepage\">Home</a>\r\n    </div>\r\n    \r\n     <div *ngIf=\"isLoggedIn() then userpagebutton; else loginpagebutton;\"></div>\r\n     \r\n     <ng-template #loginpagebutton>\r\n    \t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t  <li><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n\t\t</ul>\r\n\t </ng-template>\r\n     \r\n     <ng-template #userpagebutton>\r\n     \t<ul class=\"nav navbar-nav navbar-right\">\r\n     \t\t<li><a routerLink=\"/fanpage\">Fanpage</a></li>\r\n     \t\t<li><a routerLink=\"/userpage\"> <span class=\"glyphicon glyphicon-user\"></span> Userpage</a></li>\r\n\t\t\t<li><strong><a routerLink=\"/users/{{getUsername()}}\">{{getUsername()}} </a></strong></li>\r\n\t\t\t<li><a routerLink=\"/logout\">Logout</a></li>\r\n\t\t</ul>\r\n\t </ng-template>\r\n\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_userService) {
        this._userService = _userService;
        this.loggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this._userService.getLoggedIn();
    };
    HeaderComponent.prototype.getUsername = function () {
        return this._userService.getUsername();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ".center {\n    text-align: center;\n}\n\ndiv.container {\n\twidth: 75%;\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  \t<div class=\"col-sm-6\">\r\n  \t\t<div class=\"center\">\r\n  \t\t\t<h2><a routerLink=\"/cinemas\">Cinemas</a></h2>\r\n\t\t</div>\r\n  \t\t\r\n  \t\t\r\n  \t\t<div class=\"container\">\r\n  \t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    \t\t<!-- Indicators -->\r\n    \t\t<ol class=\"carousel-indicators\">\r\n      \t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      \t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      \t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    \t\t</ol>\r\n\r\n    \t\t<!-- Wrapper for slides -->\r\n    \t\t<div class=\"carousel-inner\">\r\n\r\n      \t\t<div class=\"item active\">\r\n        \t\t<img src=\"/assets/cinema2.jpg\" alt=\"no image\" style=\"width:100%;\">\r\n      \t\t</div>\r\n\r\n      \t\t<div class=\"item\">\r\n        \t\t<img src=\"/assets/cinema1.jpg\" alt=\"no image\" style=\"width:100%;\">\r\n      \t\t</div>\r\n    \r\n      \t\t<div class=\"item\">\r\n        \t\t<img src=\"/assets/cinema3.jpg\" alt=\"no image\" style=\"width:100%;\">\r\n\t\t\t</div>\r\n\t\t\t\r\n  \t\t\t</div>\r\n\r\n    \t\t<!-- Left and right controls -->\r\n    \t\t<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n      \t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      \t\t\t<span class=\"sr-only\">Previous</span>\r\n    \t\t</a>\r\n    \t\t<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n      \t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n      \t\t\t<span class=\"sr-only\">Next</span>\r\n    \t\t</a>\r\n  \t\t\t</div>\r\n\t\t</div>\r\n\r\n  \t</div>\r\n  \t<div class=\"col-sm-6\">\r\n  \t\t<div class=\"center\">\r\n  \t\t\t<h2><a routerLink=\"/theatres\">Theatres</a></h2>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"container\">\r\n  \t\t\t<div id=\"myCarousel2\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    \t\t<!-- Indicators -->\r\n    \t\t<ol class=\"carousel-indicators\">\r\n      \t\t\t<li data-target=\"#myCarousel2\" data-slide-to=\"0\" class=\"active\"></li>\r\n      \t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      \t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    \t\t</ol>\r\n\r\n    \t\t<!-- Wrapper for slides -->\r\n    \t\t<div class=\"carousel-inner\">\r\n\r\n      \t\t<div class=\"item active\">\r\n        \t\t<img src=\"/assets/theatre1.jpg\" alt=\"no image\" style=\"width:100%;\">\r\n      \t\t</div>\r\n\r\n      \t\t<div class=\"item\">\r\n        \t\t<img src=\"/assets/theatre2.jpg\" alt=\"no image\" style=\"width:100%;\">\r\n      \t\t</div>\r\n    \r\n      \t\t<div class=\"item\">\r\n        \t\t<img src=\"/assets/theatre3.jpg\" alt=\"no image\" style=\"width:100%;\">\r\n\t\t\t</div>\r\n\t\t\t\r\n  \t\t\t</div>\r\n\r\n    \t\t<!-- Left and right controls -->\r\n    \t\t<a class=\"left carousel-control\" href=\"#myCarousel2\" data-slide=\"prev\">\r\n      \t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      \t\t\t<span class=\"sr-only\">Previous</span>\r\n    \t\t</a>\r\n    \t\t<a class=\"right carousel-control\" href=\"#myCarousel2\" data-slide=\"next\">\r\n      \t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n      \t\t\t<span class=\"sr-only\">Next</span>\r\n    \t\t</a>\r\n  \t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n  \t</div>\r\n\r\n</div>"

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
        this.user = this._userService.getUser();
    };
    HomepageComponent.prototype.isLoggedIn = function () {
        return this._userService.getLoggedIn();
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

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\n*:focus {\n  outline: none;\n}\n#login-box {\n    margin: auto;\n      width: 50%;\n\n  height: 880px;\n  background: #FFF;\n\n}\nh1 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  font-size: 28px;\n}\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  height: 32px;\n  border: none;\n  border-bottom: 1px solid #AAA;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus {\n  border-bottom: 2px solid #16a085;\n  color: #16a085;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\ninput[type=\"submit\"] {\n  margin-top: 28px;\n  width: 120px;\n  height: 32px;\n  background: #16a085;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  -webkit-transition: 0.1s ease;\n  transition: 0.1s ease;\n  cursor: pointer;\n}\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:focus {\n  opacity: 0.8;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.1s ease;\n  transition: 0.1s ease;\n}\ninput[type=\"submit\"]:active {\n  opacity: 1;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.1s ease;\n  transition: 0.1s ease;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n\t<form (submit)=\"loginUser($event)\">\n\t  <div class=\"container\">\n\n\n\n\n\t    <div id=\"login-box\">\n\t     <div class=\"left\">\n\t       <h1>Sign in</h1>\n\n\t       <label for=\"email\"><b>Email</b></label>\n\t       <input type=\"text\" placeholder=\"Enter your email\" name=\"email\" required><br>\n\n\t       <label for=\"psw\"><b>Password</b></label>\n\t       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\n\n\n\t\t   <input type=\"submit\" name=\"signup_submit\" value=\"Sign in\" />\n\t\t   <br><br><br>\n\t\t   <br> <br>\n\t\t   Don't have an account?\n\t\t   <a routerLink=\"/register\">Register</a>\n\t\t\t</div>\n\n\n\t   </div>\n\n\t  </div>\n\t</form>\n\n\n\n</div>\n"

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
        this.http.post('/login', user).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                if (data['promenio'] == false && data['utype'] == 'fanAdmin') {
                    _this.router.navigate(['change-password/' + data['username']]);
                    alert('First time you log in you have to change your password!');
                }
                else {
                    _this._userService.setLoggedIn();
                    _this._userService.email = data['email'];
                    _this._userService.friends = data['friends'];
                    _this._userService.name = data['name'];
                    _this._userService.lastname = data['lastname'];
                    _this._userService.city = data['city'];
                    _this._userService.phoneNumber = data['phoneNumber'];
                    _this._userService.username = data['username'];
                    _this._userService.utype = data['type'];
                    _this._userService.promenio = data['promenio'];
                    _this._userService.setUser(data);
                    _this.router.navigate(['userpage']);
                }
            }
            else {
                alert('Wrong username or password');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
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




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, http, _userService) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this._userService.logout();
        this.router.navigate(['login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/oglas/oglas.component.css":
/***/ (function(module, exports) {

module.exports = "div.oglas-div {\n\tfloat: left;\n\tbackground-color: lightgreen;\n    width: 350px;\n    height: 400px;\n    overflow: scroll;\n}\n\ndiv.ponude-div {\n\tbackground-color: lightblue;\n    width: 250px;\n    height: 400px;\n    overflow: scroll;\n}\n\ndiv.lista-ponuda {\n\twidth: 250px;\n    height: 300px;\n    overflow: scroll;\n}\n\ndiv.korisnikova-ponuda {\n\twidth: 250px;\n    height: 100px;\n}"

/***/ }),

/***/ "./src/app/oglas/oglas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"oglas-div\">\n\t<h3>Naziv oglasa</h3>\n\t{{oglas.naziv}}<br>\n\t<h3>Opis oglasa</h3>\n\t{{oglas.opis}}<br>\n\t<img src=\"{{fileUpload}}\" alt=\"{{fileUpload}}\" style=\"max-width:350px\" />\n\t<h3>Cena</h3>\n\t{{oglas.cena}}<br>\n\t<h3>Korisnik</h3>\n\t{{oglas.username}}<br>\n\t<h3>Datum isteka</h3>\n\t{{oglas.datumIsteka}}<br>\n</div>\n\n\n<div *ngIf=\"isMode() then ponude; else provera\"></div>\n\t\n<ng-template #ponude>\n\t<div class=\"ponude-div\">\n\t\t<div class=\"lista-ponuda\">\n \t\t\t<div *ngFor=\"let p of oglas.ponude\">\n \t\t\t\tUsername: {{p.username}} ponuda: {{p.cena}}\n \t\t\t</div>\t\n \t\t</div>\n\t\t\n\t\t<div *ngIf=\"isUser() then odaberi; else ponudi\"></div>\n\t\n\t\t<ng-template #ponudi>\n\t\t\t<div class=\"korisnikova-ponuda\">\n\t\t\t\tVasa trenutna ponuda: {{trenutnaPonuda}} <br>\n\t\t\t\t<input type=\"number\" #cenaLicitacije>\n\t\t\t\t<button (click)=\"licitiraj(cenaLicitacije.value)\">Licitiraj</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\n\t\t<ng-template #odaberi>\n\t\t\tZaustavi licitaciju i odaberi najvecu ponudu\n\t\t\t<button (click)=\"odaberiPonudu()\">Ok</button>\n\t\t</ng-template>\n\t\t\n\t</div>\n</ng-template>\n\n<ng-template #provera>\n\t<div>\n\t\t<nav>\n\t\t\t<button (click)=\"prihvacenOglas()\">Prihvati</button>\n\t\t\t<button (click)=\"odbijenOglas()\">Odbij</button>\n\t\t</nav>\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/oglas/oglas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OglasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rekviziti_service__ = __webpack_require__("./src/app/rekviziti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OglasComponent = /** @class */ (function () {
    function OglasComponent(_rekvizitiService, _userService) {
        this._rekvizitiService = _rekvizitiService;
        this._userService = _userService;
        this.trenutnaPonuda = 0;
        this.user = null;
    }
    OglasComponent.prototype.ngOnInit = function () {
        this.user = this._userService.getUser();
        var postoji = false;
        for (var _i = 0, _a = this.oglas.ponude; _i < _a.length; _i++) {
            var ponuda = _a[_i];
            if (ponuda.username == this.user.username) {
                this.trenutnaPonuda = ponuda.cena;
                postoji = true;
            }
        }
        if (!postoji) {
            this.trenutnaPonuda = 0;
        }
    };
    OglasComponent.prototype.licitiraj = function (cenaLicitacije) {
        this._rekvizitiService.posaljiPonudu(this.user.username, cenaLicitacije, this.oglas.naziv);
        this.trenutnaPonuda = cenaLicitacije;
    };
    OglasComponent.prototype.isUser = function () {
        if (this.user.username == this.oglas.username) {
            return true;
        }
        else {
            return false;
        }
    };
    OglasComponent.prototype.odaberiPonudu = function () {
        this._rekvizitiService.odaberiPonudu(this.oglas);
    };
    OglasComponent.prototype.isMode = function () {
        if (this.user.utype == 'regular') {
            console.log('jel dodje dovde makar nekad u true?');
            return true;
        }
        else {
            console.log('jel dodje dovde makar nekad u false?');
            return false;
        }
    };
    OglasComponent.prototype.prihvacenOglas = function () {
        this._rekvizitiService.prihvacenOglas(this.oglas);
    };
    OglasComponent.prototype.odbijenOglas = function () {
        this._rekvizitiService.odbijenOglas(this.oglas);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('oglas'),
        __metadata("design:type", Object)
    ], OglasComponent.prototype, "oglas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('fileUpload'),
        __metadata("design:type", String)
    ], OglasComponent.prototype, "fileUpload", void 0);
    OglasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-oglas',
            template: __webpack_require__("./src/app/oglas/oglas.component.html"),
            styles: [__webpack_require__("./src/app/oglas/oglas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rekviziti_service__["a" /* RekvizitiService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service_service__["a" /* UserServiceService */]])
    ], OglasComponent);
    return OglasComponent;
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

/***/ "./src/app/pozivnice/pozivnice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pozivnice/pozivnice.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pozivnice works!\n</p>\n"

/***/ }),

/***/ "./src/app/pozivnice/pozivnice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PozivniceComponent; });
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

var PozivniceComponent = /** @class */ (function () {
    function PozivniceComponent() {
    }
    PozivniceComponent.prototype.ngOnInit = function () {
    };
    PozivniceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pozivnice',
            template: __webpack_require__("./src/app/pozivnice/pozivnice.component.html"),
            styles: [__webpack_require__("./src/app/pozivnice/pozivnice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PozivniceComponent);
    return PozivniceComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\r\n*:focus {\r\n  outline: none;\r\n}\r\n#login-box {\r\n    margin: auto;\r\n      width: 50%;\r\n\r\n  height: 880px;\r\n  background: #FFF;\r\n\r\n}\r\nh1 {\r\n  margin: 0 0 20px 0;\r\n  font-weight: 300;\r\n  font-size: 28px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  padding: 4px;\r\n  width: 220px;\r\n  height: 32px;\r\n  border: none;\r\n  border-bottom: 1px solid #AAA;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border-bottom: 2px solid #16a085;\r\n  color: #16a085;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"submit\"] {\r\n  margin-top: 28px;\r\n  width: 120px;\r\n  height: 32px;\r\n  background: #16a085;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"submit\"]:focus {\r\n  opacity: 0.8;\r\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\ninput[type=\"submit\"]:active {\r\n  opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\nbutton {\r\n\t opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"what\">\r\n\r\n<div *ngSwitchCase=\"'reg'\">\r\n\r\n<form (submit)=\"register($event)\">\r\n  <div class=\"container\">\r\n\r\n    <div id=\"login-box\">\r\n     <div class=\"left\">\r\n       <h1>Sign up</h1>\r\n\r\n       <label for=\"email\"><b>Email</b></label>\r\n       <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required><br>\r\n\r\n       <label for=\"username\"><b>Username - Used as url to your profile</b></label>\r\n       <input type=\"text\" placeholder=\"Enter username\" name=\"username\" required><br>\r\n\r\n       <label for=\"psw\"><b>Password</b></label>\r\n       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\r\n\r\n       <label for=\"psw-repeat\"><b>Repeat Password</b></label>\r\n       <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required><br>\r\n\r\n       <label for=\"name\"><b>First Name</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your first name\" name=\"name\" required><br>\r\n\r\n       <label for=\"lastname\"><b>Last Name</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your last name\" name=\"lastname\" required><br>\r\n\r\n       <label for=\"city\"><b>City</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your city\" name=\"city\" required><br>\r\n\r\n       <label for=\"phone\"><b>Phone Number</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your phone number\" name=\"phoneNumber\" required><br>\r\n\r\n       <input type=\"submit\" name=\"signup_submit\" value=\"Sign up\" />\r\n     </div>\r\n\r\n   </div>\r\n\r\n  </div>\r\n</form>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'link'\">\r\nActivation link is sent to your email.\r\n</div>\r\n\r\n</div>\r\n"

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
        this.what = 'reg';
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (e) {
        var _this = this;
        e.preventDefault();
        if (e.target.elements[0].value != ''
            || e.target.elements[1].value != ''
            || e.target.elements[2].value != ''
            || e.target.elements[3].value != ''
            || e.target.elements[4].value != ''
            || e.target.elements[5].value != ''
            || e.target.elements[6].value != ''
            || e.target.elements[7].value != '') {
            if (!isNaN(parseFloat(e.target.elements[7].value)) && isFinite(e.target.elements[7].value)) {
                var email = e.target.elements[0].value;
                var username = e.target.elements[1].value;
                var password = e.target.elements[2].value;
                var password_repeat = e.target.elements[3].value;
                var name = e.target.elements[4].value;
                var lname = e.target.elements[5].value;
                var city = e.target.elements[6].value;
                var phoneNumber = e.target.elements[7].value;
                var user = {
                    email: email,
                    password: password,
                    password_repeat: password_repeat,
                    name: name,
                    lastname: lname,
                    city: city,
                    phoneNumber: phoneNumber,
                    username: username
                };
                this.http.post('/register', user).subscribe(function (data) {
                    console.log('data je: ', data);
                    if (data['poruka'] == 'ok') {
                        //this.router.navigate(['activation']);
                        _this.what = 'link';
                    }
                    else if (data['poruka'] == 'email') {
                        alert('Email adresa vec postoji');
                    }
                    else if (data['poruka'] == 'username') {
                        alert('Username vec postoji');
                    }
                    else if (data['poruka'] == 'lozinke') {
                        alert('Lozinke se ne poklapaju');
                    }
                    else if (data['poruka'] == 'sve') {
                        alert('Sva polja su obavezna');
                    }
                    else if (data['poruka'] == 'email_invalid') {
                        alert('Neispravan email');
                    }
                    else if (data['poruka'] == 'username_invalid') {
                        alert('Nedozvoljeni karakteri u username-u');
                    }
                });
            }
            else {
                alert('Za telefon dozvoljene samo cifre');
            }
        }
        else {
            alert('Sva polja su obavezna');
        }
        return false;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\n    <div class=\"media-left media-middle\">\n      <img src=\"{{fileUpload}}\" class=\"media-object\" style=\"width:250px;height:200px\">\n    </div>\n    <div class=\"media-body\">\n      <h4 class=\"media-heading\">{{rekvizit.naziv}}</h4>\n      <strong>Cena: </strong>{{rekvizit.cena}}<br>\n    </div>\n    <h4>Opis</h4>\n    {{rekvizit.opis}}\n    <hr>\n    <div class=\"btn-group\">\n  \t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"rezervisiZvanicni()\">Rezervisi</button>\n\t</div>\n\t\n\t<div *ngIf=\"isAdmin()\">\n\t\t<div class=\"btn-group\">\n  \t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ukloniZvanicni()\">Ukloni</button>\n  \t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"izmeniZvanicni()\">Izmeni</button>\n\t\t</div>\n\t</div>\n    \n</div>"

/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RekvizitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rekviziti_service__ = __webpack_require__("./src/app/rekviziti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RekvizitComponent = /** @class */ (function () {
    function RekvizitComponent(_rekvizitiService, _userService) {
        this._rekvizitiService = _rekvizitiService;
        this._userService = _userService;
        this.user = null;
        this.izmenaEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RekvizitComponent.prototype.ngOnInit = function () {
        this.user = this._userService.getUser();
    };
    RekvizitComponent.prototype.rezervisiZvanicni = function () {
        this._rekvizitiService.rezervisiZvanicniRekvizit(this.rekvizit.naziv, this.user.username);
    };
    RekvizitComponent.prototype.ukloniZvanicni = function () {
        this._rekvizitiService.ukloniZvanicni(this.rekvizit);
    };
    RekvizitComponent.prototype.izmeniZvanicni = function () {
        this.izmenaEvent.emit(this.rekvizit);
    };
    RekvizitComponent.prototype.isAdmin = function () {
        if (this.user.utype == "fanAdmin") {
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('rekvizit'),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "rekvizit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('fileUpload'),
        __metadata("design:type", String)
    ], RekvizitComponent.prototype, "fileUpload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "izmenaEvent", void 0);
    RekvizitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rekvizit',
            template: __webpack_require__("./src/app/rekvizit/rekvizit.component.html"),
            styles: [__webpack_require__("./src/app/rekvizit/rekvizit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rekviziti_service__["a" /* RekvizitiService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service_service__["a" /* UserServiceService */]])
    ], RekvizitComponent);
    return RekvizitComponent;
}());



/***/ }),

/***/ "./src/app/rekviziti.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RekvizitiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RekvizitiService = /** @class */ (function () {
    function RekvizitiService(http) {
        this.http = http;
    }
    RekvizitiService.prototype.getZvanicniRekviziti = function () {
        return this.http.get('/getZvanicniRekviziti');
    };
    RekvizitiService.prototype.getPolovniRekviziti = function () {
        return this.http.get('/getPolovniRekviziti');
    };
    RekvizitiService.prototype.getOglasiZaProveru = function () {
        return this.http.get('/getOglasiZaProveru');
    };
    RekvizitiService.prototype.getAktivniOglasi = function (user) {
        return this.http.post('/getAktivniOglasi', user);
    };
    RekvizitiService.prototype.getNotifikacije = function (user) {
        return this.http.post('/getNotifikacije', user);
    };
    RekvizitiService.prototype.rezervisiZvanicniRekvizit = function (imeRekvizita, imeKorisnika) {
        var rezervacijaRekvizita = {
            imeRekvizita: imeRekvizita,
            imeKorisnika: imeKorisnika
        };
        this.http.post('/rezervisiZvanicniRekvizit', rezervacijaRekvizita).subscribe(function (data) { alert("Uspesno ste rezervisali rekvizit" + imeRekvizita); }, function (error) { alert("Nazalost ovaj rekvizit je vec rezervisan"); });
    };
    RekvizitiService.prototype.posaljiOglasNaProveru = function (nazivOglasa, opisOglasa, slikaOglasa, cenaOglasa, user, datumOglasa, ponude) {
        var oglasZaProveru = {
            naziv: nazivOglasa,
            opis: opisOglasa,
            slika: slikaOglasa,
            cena: cenaOglasa,
            username: user.username,
            datumIsteka: datumOglasa,
            ponude: ponude
        };
        this.http.post('/posaljiOglasNaProveru', oglasZaProveru).subscribe(function (data) { });
    };
    RekvizitiService.prototype.postaviRekvizit = function (nazivRekvizita, opisRekvizita, slikaRekvizita, cenaRekvizita) {
        var rekvizit = {
            naziv: nazivRekvizita,
            opis: opisRekvizita,
            slika: slikaRekvizita,
            cena: cenaRekvizita
        };
        this.http.post('/postaviRekvizit', rekvizit).subscribe(function (data) { });
    };
    RekvizitiService.prototype.izmeniRekvizit = function (nazivRekvizita, opisRekvizita, slikaRekvizita, cenaRekvizita) {
        var rekvizit = {
            naziv: nazivRekvizita,
            opis: opisRekvizita,
            slika: slikaRekvizita,
            cena: cenaRekvizita
        };
        this.http.post('/izmeniRekvizit', rekvizit).subscribe(function (data) { });
    };
    RekvizitiService.prototype.ukloniZvanicni = function (rekvizit) {
        this.http.post('/ukloniZvanicni', rekvizit).subscribe(function (data) { });
    };
    RekvizitiService.prototype.posaljiPonudu = function (imeKorisnika, cenaLicitacije, nazivOglasa) {
        var licitacija = {
            username: imeKorisnika,
            cena: cenaLicitacije,
            oglas: nazivOglasa
        };
        this.http.post('/posaljiPonudu', licitacija).subscribe(function (data) { });
    };
    RekvizitiService.prototype.odaberiPonudu = function (oglas) {
        this.http.post('/odaberiPonudu', oglas).subscribe(function (data) { });
    };
    RekvizitiService.prototype.prihvacenOglas = function (oglas) {
        this.http.post('/prihvacenOglas', oglas).subscribe(function (data) { });
    };
    RekvizitiService.prototype.odbijenOglas = function (oglas) {
        this.http.post('/odbijenOglas', oglas).subscribe(function (data) { });
    };
    RekvizitiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RekvizitiService);
    return RekvizitiService;
}());



/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.css":
/***/ (function(module, exports) {

module.exports = "/* Author: Uzair Ahmed */\n/* CSS Helpers */\n.font14 {\n    font-size: 14px;\n}\n.font16 {\n    font-size: 16px;\n}\n.marginTop5 {\n    margin-top: 5px;\n}\n.marginTB10 {\n    margin: 10px 0px;\n}\n.wordWrap {\n    word-break: break-all;\n}\n/* End CSS Helpers */\n.innerContainer {\n    color: #fff;\n    text-align: center;\n}\n.movie {\n    margin: -10px -5px 10px -5px;\n    height: 70px;\n    \n}\n.movieDetails {\n    font-size: 15px;\n    margin-top: -3px;\n}\n.movieTitle {\n    font-size: 20px;\n    padding-top: 10px;\n    margin-top: -3px;\n}\n.seat {\n    padding-right: 5px;\n}\n.legend {\n    font-size: 14px;\n}\n.legend > .padding-left {\n    padding-left: 15px;\n}\n.screen {\n    background: hsla(216, 72%, 50%, 0.65);\n    height: 3px;\n    border-radius: 15px;\n    margin: -5px 50px 10px;\n    -webkit-box-shadow: 0px 3px 6px #fff;\n            box-shadow: 0px 3px 6px #fff;\n}\n.reservedSeat {\n    color: #ce4844;\n}\n.selectedSeat {\n    color: #5cb85c;\n}\n.freeSeat {\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Reservation\n</h3>\n<h4>\n{{name}}\n</h4>\n{{poz_bio.adress}}\n{{poz_bio.city}}\n\n<hr>\n\n<div [ngSwitch]=\"what\" >\n\n<div *ngSwitchCase=\"'sve'\">\n\n<ul>\n  <li *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\n      <button (click)=\"projekcija_button($event)\" name={{projekcija.nazivProjekcije}}  >{{projekcija.nazivProjekcije}}</button>\n      <br>\n      Genre: {{projekcija.zanr}}\n      <br>\n      Director: {{projekcija.imeReditelja}}\n      <br>\n      Actors: \n      <ul>\n      <li *ngFor=\"let glumac of projekcija.listaGlumaca\">\n      \t{{glumac}}\n      </li>\n      </ul>\n  </li>\n</ul>\n\n</div>\n\n<div *ngSwitchCase=\"'izabrana_projekcija'\">\n\t<button (click)=\"projekcija_button($event)\" name={{izabrana_projekcija}}  >{{izabrana_projekcija}}</button>\n\t<div *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\n\t\t<div *ngIf=\"projekcija.nazivProjekcije == izabrana_projekcija; then showDates\"></div>\n\t\t<ng-template #showDates> \n\t\t\t\n\t\t\t<ul>\n\t\t  \t\t<li *ngFor=\"let datum of projekcija.listaDatumaProjekcije\">\n\t\t\t\t\t<button (click)=\"datum_button($event)\" name={{datum.datum}}  >{{datum.datum}}</button>\n\t\t  \t\t</li>\n\t\t    </ul>\n\t    </ng-template>\n    </div>\n</div>\n\n<div *ngSwitchCase=\"'izabran_datum'\">\n    <button (click)=\"projekcija_button($event)\" name={{izabrana_projekcija}}  >{{izabrana_projekcija}}</button>>\n\t <button (click)=\"datum_button($event)\" name={{izabran_datum}}  >{{izabran_datum}}</button>\n\t\n\t<div *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\n\t\t<div *ngIf=\"projekcija.nazivProjekcije == izabrana_projekcija; then showDates\"></div>\n\t\t<ng-template #showDates> \n\t\t\t<div *ngFor=\"let datum of projekcija.listaDatumaProjekcije\">\n\t\t\t\t<div *ngIf=\"datum.datum == izabran_datum; then showTermine\"></div>\n\t\t\t\t<ng-template #showTermine> \n\t\t\t\t\t<ul>\n\t\t\t\t  \t\t<li *ngFor=\"let termin of datum.listaTermina\">\n\t\t\t\t\t\t\t<button (click)=\"termin_button($event)\" name=\"{{termin.termin}}-{{termin.sala}}-{{termin.cena}}\"  >{{termin.termin}}<br>Sala {{termin.sala}}<br>{{termin.cena}} din</button>\n\t\t\t\t  \t\t</li>\n\t\t    \t\t</ul>\n\t\t\t\t</ng-template>\n\t\t\t\t\n\t\t\t</div>\n\t    </ng-template>\n    </div>\n</div>\n\n<div *ngSwitchCase=\"'izabran_termin'\">\n <button (click)=\"projekcija_button($event)\" name={{izabrana_projekcija}}  >{{izabrana_projekcija}}</button>>\n  <button (click)=\"datum_button($event)\" name={{izabran_datum}}  >{{izabran_datum}}</button>>\n<strong>{{termin}} Sala {{sala}}</strong><br>\n\t<div *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\n\t\t<div *ngIf=\"projekcija.nazivProjekcije == izabrana_projekcija; then showDates\"></div>\n\t\t<ng-template #showDates> \n\t\t\t<div *ngFor=\"let datum of projekcija.listaDatumaProjekcije\">\n\t\t\t\t<div *ngIf=\"datum.datum == izabran_datum; then showTermine\"></div>\n\t\t\t\t<ng-template #showTermine> \n\t\t\t\t\t<div *ngFor=\"let terminf of datum.listaTermina\">\n\t\t\t\t\t\t<div *ngIf=\"terminf.termin == termin; then terminFine\"></div>\n\t\t\t\t\t\t<ng-template #terminFine> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div *ngIf=\"terminf.sala == sala; then salaFine\"></div>\n\t\t\t\t\t\t\t<ng-template #salaFine> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"container\" style=\"background-color:black\">\n\t\t\t\t\t\t\t\t    <main class=\"innerContainer\">\n\t\t\t\t\t\t\t\t        <div class=\"movie\">\n\t\t\t\t\t\t\t\t            <h3 class=\"movieTitle\">{{izabrana_projekcija}}</h3>\n\t\t\t\t\t\t\t\t            <div class=\"movieDetails\"> {{termin}} Sala {{sala}}</div>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t        <div class=\"legend\">\n\t\t\t\t\t\t\t\t            <span class=\"glyphicon glyphicon-stop freeSeat\"></span> FREE\n\t\t\t\t\t\t\t\t            <span class=\"glyphicon glyphicon-ban-circle reservedSeat padding-left\"></span> TAKEN\n\t\t\t\t\t\t\t\t            <span class=\"glyphicon glyphicon-ok-sign selectedSeat padding-left\"></span> SELECTED                \n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t        <p class=\"font14 marginTop5\">SCREEN</p>\n\t\t\t\t\t\t\t\t        <div class=\"screen\"></div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t        <div *ngFor=\"let row of rows\" >\n\t\t\t\t\t\t\t\t            <span class=\"seat\" *ngFor=\"let col of cols\" (click)=\"seatClicked(row + col)\" \n\t\t\t\t\t\t\t\t                    [ngSwitch]=\"getStatus(row + col)\">\n\t\t\t\t\t\t\t\t                <span *ngSwitchCase=\"'selected'\" class=\"glyphicon glyphicon-ok-sign selectedSeat\"></span>\n\t\t\t\t\t\t\t\t                <span *ngSwitchCase=\"'reserved'\" class=\"glyphicon glyphicon-ban-circle reservedSeat\"></span>\n\t\t\t\t\t\t\t\t                <span *ngSwitchDefault class=\"glyphicon glyphicon-stop freeSeat\"></span>\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t\t        <div *ngIf=\"selected.length > 0\" class=\"font14 marginTB10\">\n\t\t\t\t\t\t\t\t            <div class=\"wordWrap\">SEATS RESERVED : {{selected.length}} </div>\n\t\t\t\t\t\t\t\t            <div>PRICE : {{ticketPrice}} * {{selected.length}} = {{currency}}.{{ticketPrice*selected.length}} </div>\n\t\t\t\t\t\t\t\t            <div>TOTAL : {{currency}}.{{ticketPrice * selected.length}}</div>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t        \n\t\t\t\t\t\t\t\t        <div class=\"buttonBar marginTop5\">\n\t\t\t\t\t\t\t\t            <button (click)=\"clearSelected()\" [disabled]=\"selected.length === 0\" class=\"btn btn-default btn-sm\">Reset</button>\n\t\t\t\t\t\t\t\t            <button (click)=\"showSelected()\" [disabled]=\"selected.length === 0\" class=\"btn btn-success btn-sm\">Buy Tickets</button>\n\t\t\t\t\t\t\t\t        \t\n\t\t\t\t\t\t\t\t        \t<button (click)=\"inviteFriendsDiv()\" [disabled]=\"selected.length < 2\" class=\"btn btn-success btn-sm\">Invite friends</button>\n\t\t\t\t\t\t\t\t        \t\n\t\t\t\t\t\t\t\t        </div>    \n\t\t\t\t\t\t\t\t        \n\t\t\t\t\t\t\t\t        <div *ngIf=\"calling_friends == true;  then if1condition\"></div>\n\t\t\t\t\t\t\t\t        <div *ngIf=\"called_friends == true;  then if2condition\"></div>\n\t\t\t\t\t\t\t\t            <ng-template #if1condition>\n\t\t\t\t\t\t\t\t             <div>\n\t\t\t\t\t\t\t\t\t            \t<div style=\"margin: 0 auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    width: 300px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    height: 200px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    overflow: auto;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Invite friends\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <ol>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <li *ngFor=\"let friend of my_friends_list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <input [(ngModel)]=\"friend.checked\" (ngModelChange)=\"changed()\" type=\"checkbox\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <a routerLink=\"/users/{{friend.username}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \t\t{{friend.email}}, {{friend.name}}, {{friend.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t    \t    </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    \t </ol>\n\t\t\t\t\t\t\t\t\t\t\t    \t </div>\n\t\t\t\t\t\t\t\t\t\t    \t </div>\n\t\t\t\t\t\t\t\t\t\t    \t <div>\n\t\t\t\t\t\t\t\t\t\t    \t \t<button [disabled]=\"selected.length <= selected_friends_count\" (click)=\"doneInviting($event)\" class=\"btn btn-success btn-sm\">Done</button>\n\t\t\t\t\t\t\t\t\t\t    \t </div>\n\t\t\t\t\t\t\t\t            </ng-template>\n\t\t\t\t\t\t\t\t            <ng-template #if2condition>\n\t\t\t\t\t\t\t\t            \t<br>Invited Friends\n\t\t\t\t\t\t\t\t            \t<div style=\"margin: 0 auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    width: 300px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    height: 200px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    overflow: auto;\">\n\t\t\t\t\t\t\t\t            \t<ol>\n\t\t\t\t\t\t\t\t\t\t\t\t   <li *ngFor=\"let i_friend of invited_friends\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{i_friend.email}}, {{i_friend.name}}, {{i_friend.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t   </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t            </ng-template>  \n\t\t\t\t\t\t\t\t    </main>     \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t\n\t\t\t</div>\n\t    </ng-template>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RezervacijaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RezervacijaComponent = /** @class */ (function () {
    function RezervacijaComponent(user, http, router, route) {
        this.user = user;
        this.http = http;
        this.router = router;
        this.route = route;
        this.invited_friends = [];
        this.invited_friends_ids = [];
        //var alphabet = {'a','b'};
        this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.calling_friends = false;
        this.called_friends = false;
        //variable declarations
        this.rows = []; // = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.cols = []; //  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.reserved = []; // = ['a1','A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
        this.selected = [];
        this.totalPrice = 0;
        this.currency = "RSD";
        //return status of each seat
        this.getStatus = function (seatPos) {
            if (this.reserved.indexOf(seatPos) !== -1) {
                return 'reserved';
            }
            else if (this.selected.indexOf(seatPos) !== -1) {
                return 'selected';
            }
        };
        //clear handler
        this.clearSelected = function () {
            this.selected = [];
            this.calling_friends = false;
        };
        //click handler
        this.seatClicked = function (seatPos) {
            var index = this.selected.indexOf(seatPos);
            if (index !== -1) {
                // seat already selected, remove
                if (this.invited_friends.length > this.selected.length - 2 && this.selected.length > 1) {
                    alert('You need to cancel invitation first!');
                }
                else {
                    this.selected.splice(index, 1);
                }
            }
            else {
                //push to selected array only if it is not reserved
                if (this.reserved.indexOf(seatPos) === -1)
                    this.selected.push(seatPos);
            }
        };
        //Buy button handler
        this.showSelected = function () {
            if (this.selected.length > 0) {
                if (window.confirm('Mesta:' + this.selected.length + '\nTotal: ' + (this.ticketPrice * this.selected.length) + '\nPotvrdite rezervaciju:')) {
                    var rk = {
                        narucilac: this.user.username,
                        pozbio: this.poz_bio.name,
                        projekcija: this.izabrana_projekcija,
                        datum: this.izabran_datum,
                        termin: this.izabran_termin.split("-")[0],
                        sala: this.izabran_termin.split("-")[1],
                        selected_seats: this.selected,
                        invited_friends: this.invited_friends_ids,
                        ukcena: (this.ticketPrice * this.selected.length),
                        fiksnaCena: this.ticketPrice
                    };
                    console.log(rk);
                    alert('Processing information. Please wait.');
                    this.router.navigate(['userpage']);
                    this.http.post('/rezervisi', rk).subscribe(function (data) {
                        if (data != null) {
                            if (data['poruka'] == 'success') {
                                alert('Detalji o rezervaciji su poslati na Vas mejl');
                            }
                            else if (data['poruka'] == 'isteklo') {
                                alert('Isteklo vreme za rezervaciju!');
                            }
                        }
                    });
                }
            }
            else {
                alert("No seats selected!");
            }
        };
        console.log('route: ', route.snapshot.params["name"]);
        this.name = route.snapshot.params["name"];
        this.what = 'sve';
        this.calling_friends = false;
        this.my_friends();
    }
    RezervacijaComponent.prototype.ngOnInit = function () {
        this.getPozBio();
        this.calling_friends = false;
    };
    RezervacijaComponent.prototype.getPozBio = function () {
        var _this = this;
        this.http.get('/getPozBio/' + this.name).subscribe(function (data) {
            if (data != null) {
                _this.poz_bio = data;
                console.log(_this.poz_bio);
            }
        });
    };
    RezervacijaComponent.prototype.projekcija_button = function (e) {
        this.what = 'izabrana_projekcija';
        this.izabrana_projekcija = e.target.name;
        this.calling_friends = false;
    };
    RezervacijaComponent.prototype.datum_button = function (e) {
        this.what = 'izabran_datum';
        this.izabran_datum = e.target.name;
        this.calling_friends = false;
    };
    RezervacijaComponent.prototype.termin_button = function (e) {
        this.what = 'izabran_termin';
        this.izabran_termin = e.target.name;
        this.termin = this.izabran_termin.split("-")[0];
        this.sala = Number(this.izabran_termin.split("-")[1]);
        this.cena = Number(this.izabran_termin.split("-")[2]);
        this.rows = [];
        this.cols = [];
        this.selected = [];
        this.calling_friends = false;
        this.ticketPrice = this.cena;
        this.totalPrice = 0;
        for (var _i = 0, _a = this.poz_bio.listaSala; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.brojSale == this.sala) {
                for (this.brRow = 0; this.brRow < s.brojRedova; this.brRow++) {
                    if (this.brRow < 27) {
                        this.rows.push(this.alphabet[this.brRow]);
                    }
                }
                for (this.brCol = 1; this.brCol <= s.brojKolona; this.brCol++) {
                    this.cols.push(this.brCol);
                }
            }
        }
        for (var _b = 0, _c = this.poz_bio.listaProjekcija; _b < _c.length; _b++) {
            var p = _c[_b];
            if (p.nazivProjekcije == this.izabrana_projekcija) {
                for (var _d = 0, _e = p.listaDatumaProjekcije; _d < _e.length; _d++) {
                    var d = _e[_d];
                    if (d.datum == this.izabran_datum) {
                        for (var _f = 0, _g = d.listaTermina; _f < _g.length; _f++) {
                            var t = _g[_f];
                            if (t.termin == this.termin && t.sala == this.sala) {
                                for (var _h = 0, _j = t.zauzetost; _h < _j.length; _h++) {
                                    var z = _j[_h];
                                    this.reserved.push(z);
                                }
                            }
                        }
                    }
                }
            }
        }
        //    for(let z of this.poz_bio.zauzetost){
        //    	if(z.datum==this.izabran_datum && z.termin == this.izabran_termin){
        //    		for(let m of z.listaMesta){
        //    			this.reserved.push(m)
        //    		}
        //    	}
        //    }
        //    this.http.get('/getSeats/'+this.poz_bio.name+'/'+this.poz_bio.sala).subscribe(data => {  
        //        if(data != null){
        //          this.sedista = data as any[];
        //          console.log(this.sedista);
        //        }
        //      })
    };
    RezervacijaComponent.prototype.my_friends = function () {
        var _this = this;
        this.http.get('/find_my_friends/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.my_friends_list = data;
            }
        });
    };
    RezervacijaComponent.prototype.inviteFriendsDiv = function () {
        this.calling_friends = true;
        this.called_friends = false;
    };
    RezervacijaComponent.prototype.doneInviting = function () {
        this.calling_friends = false;
        this.called_friends = true;
    };
    RezervacijaComponent.prototype.changed = function () {
        var _this = this;
        this.selected_friends_count = 0;
        this.invited_friends = [];
        this.invited_friends_ids = [];
        this.my_friends_list.forEach(function (item) {
            console.log(item);
            if (item['checked']) {
                _this.selected_friends_count = _this.selected_friends_count + 1;
                _this.invited_friends.push(item);
                _this.invited_friends_ids.push(item['username']);
            }
        });
    };
    RezervacijaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-rezervacija',
            template: __webpack_require__("./src/app/rezervacija/rezervacija.component.html"),
            styles: [__webpack_require__("./src/app/rezervacija/rezervacija.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service_service__["a" /* UserServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], RezervacijaComponent);
    return RezervacijaComponent;
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

/***/ "./src/app/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"update($event)\">\n  <div class=\"container\">\n\n    <div id=\"login-box\">\n     <div class=\"left\">\n       <h2>Enter details you want to change</h2>\n\n       <label for=\"email\"><b>Email:{{email}}</b></label>\n       <input type=\"text\" placeholder=\"Enter new Email\" name=\"email\"><br>\n\n       <label for=\"psw\"><b>New password</b></label>\n       <input type=\"password\" placeholder=\"Enter new Password\" name=\"psw\"><br>\n\n       <label for=\"psw-repeat\"><b>Confirm new Password</b></label>\n       <input type=\"password\" placeholder=\"Enter new Password again\" name=\"psw-repeat\" ><br>\n\n       <label for=\"name\"><b>First Name: {{name}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your first name\" name=\"name\"><br>\n\n       <label for=\"lastname\"><b>Last Name: {{lastname}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your last name\" name=\"lastname\"><br>\n\n       <label for=\"city\"><b>City:{{city}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your new city\" name=\"city\"><br>\n\n       <label for=\"phone\"><b>Phone Number:{{phoneNumber}}</b></label>\n       <input type=\"text\" placeholder=\"Enter new phone number\" name=\"phoneNumber\"><br>\n\n       <input type=\"submit\" name=\"update_submit\" value=\"Update details\" />\n     </div>\n\n   </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/update-user/update-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserComponent; });
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




var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(router, http, user) {
        this.router = router;
        this.http = http;
        this.user = user;
        this.loggedInEmail = this.user.email;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
    };
    // get email():string {
    //   return this.user.email;
    // }
    UpdateUserComponent.prototype.update = function (e) {
        var _this = this;
        e.preventDefault();
        console.log("email je:");
        console.log(this.loggedInEmail);
        if ((e.target.elements[1].value != '' && e.target.elements[2].value == '')
            || (e.target.elements[1].value == '' && e.target.elements[2].value != '')) {
            alert('Enter your password again!');
        }
        else if (e.target.elements[1].value != e.target.elements[2].value) {
            alert('Passwords don\'t match!');
        }
        else {
            if (window.confirm('Are sure you want to save changes ?')) {
                alert('updating info');
                var email = e.target.elements[0].value;
                var password = e.target.elements[1].value;
                var password_repeat = e.target.elements[2].value;
                var name = e.target.elements[3].value;
                var lastname = e.target.elements[4].value;
                var city = e.target.elements[5].value;
                //if(!isNaN(parseFloat(e.target.elements[6].value)) && isFinite(e.target.elements[6].value) ){
                var phoneNumber = e.target.elements[6].value;
                //}
                var updated_user = {
                    loggedInEmail: this.loggedInEmail,
                    email: email,
                    password: password,
                    password_repeat: password_repeat,
                    username: this.user.username,
                    name: name,
                    lastname: lastname,
                    city: city,
                    phoneNumber: phoneNumber
                };
                this.http.post('/updateUser', updated_user).subscribe(function (data) {
                    _this.user.email = data['email'];
                    _this.router.navigate(['users/' + _this.user.username]);
                });
            }
        }
    };
    UpdateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-user',
            template: __webpack_require__("./src/app/update-user/update-user.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
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


var UploadFileService = /** @class */ (function () {
    function UploadFileService(http) {
        this.http = http;
    }
    UploadFileService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('POST', '/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
        this._isLoggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](false);
        this.loggedIn = false;
    }
    UserServiceService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    UserServiceService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    UserServiceService.prototype.getUsername = function () {
        return this.username;
    };
    UserServiceService.prototype.getPromenio = function () {
        return this.user.promenio;
    };
    UserServiceService.prototype.logout = function () {
        this.loggedIn = false;
    };
    UserServiceService.prototype.getUser = function () {
        return this.user;
    };
    UserServiceService.prototype.getUtype = function () {
        return this.user.utype;
    };
    UserServiceService.prototype.setUser = function (data) {
        this.user = data; //this.http.get<IUser>('/getDetailsByUsername/'+this.username);
        this.loggedIn = true;
        console.log('user set', this.user.username);
    };
    UserServiceService.prototype.getEmail = function () {
        return this.email;
    };
    UserServiceService.prototype.getFriends = function () {
        return this.friends;
    };
    UserServiceService.prototype.getName = function () {
        return this.name;
    };
    UserServiceService.prototype.getLastname = function () {
        return this.lastname;
    };
    UserServiceService.prototype.getCity = function () {
        return this.city;
    };
    UserServiceService.prototype.getVenueAdmins = function () {
        return this.http.get('/getVenueAdmins');
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

module.exports = "agm-map {\n  height: 300px;\n  width: 400px;\n}\n\ndiv.statusKorisnika {\n\tfloat: right;\n\twidth: 50%;\n}"

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\r\n\r\n<div [ngSwitch]=\"usertype\">\r\n\r\n<div *ngSwitchCase=\"'regular'\">\r\n<hr>\r\n<div class=\"statusKorisnika\">\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"bstatus + '%'\">\r\n      Bronzani status\r\n    </div>\r\n  </div>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" >\r\n      Srebrni status\r\n    </div>\r\n  </div>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" >\r\n      Zlatni status\r\n    </div>\r\n  </div>\r\n</div>\r\n<div [ngSwitch]=\"what\">\r\n\r\n\r\n\r\n\r\n<button (click)=\"cinemas_button()\">Cinemas</button>\r\n<button (click)=\"theatres_button()\">Theatres</button>\r\n<button (click)=\"istorija()\">History</button>\r\n<button (click)=\"friends_button()\">My Friends</button>\r\n<button (click)=\"lista_rezervacija()\">Reservations</button>\r\n<button (click)=\"lista_pozivnica()\">Invitations</button>\r\n<button (click)=\"my_profile_button()\">My profile</button>\r\n\r\n<div *ngSwitchCase=\"'history'\">\r\n\r\n <h3> Istorija poseta pozorista i bioskopa: </h3>\r\n  <ol>\r\n  <li *ngFor=\"let r of hist\">\r\n  <h4>{{r.pozbio}}</h4><h4>{{r.projekcija}}</h4>{{r.datum}}<br>{{r.termin}}<br>Sala {{r.sala}}<br>\r\n\r\n  Seats:<ul>\r\n  <li *ngFor=\"let s of r.selected_seats\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n \r\n  Rezervisao: {{r.narucilac}}<br>\r\n <b>Total price: {{r.fiksnaCena * r.selected_seats.length}} RSD<br></b>\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'friends'\">\r\n\r\n<h3>My friends</h3>\r\n<button (click)=\"sortByName($event)\"  >Sort by name</button>\r\n<button (click)=\"sortByLastname($event)\" >Sort by lastname</button>\r\n<a routerLink=\"/users/{{getUsername()}}\">See all options</a>\r\n<ol>\r\n  <li *ngFor=\"let friend of my_friends_list\">\r\n  <a routerLink=\"/users/{{friend.username}}\">{{friend.email}}, {{friend.name}}, {{friend.lastname}}</a>\r\n<button (click)=\"removeFriend($event)\" name={{friend.username}}  >Remove</button>\r\n  </li>\r\n  </ol>\r\n</div>\r\n\r\n\r\n<div *ngSwitchCase=\"'reservations'\">\r\n\r\n<h3>My reservations</h3>\r\n\r\n<ol>\r\n  <li *ngFor=\"let r of res\">\r\n  <h4>{{r.pozbio}}</h4><h4>{{r.projekcija}}</h4>{{r.datum}}<br>{{r.termin}}<br>Sala {{r.sala}}<br>\r\n  <b>Confirmed arrivals:</b>\r\n  <ul>\r\n  <li *ngFor=\"let s of r.potvrdjeni\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n   <b>Waiting for response:</b><ul>\r\n  <li *ngFor=\"let s of r.invited_friends\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n\r\n  Seats:<ul>\r\n  <li *ngFor=\"let s of r.selected_seats\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n \r\n  Rezervisao: {{r.narucilac}}<br>\r\n <b>Total price: {{r.fiksnaCena * r.selected_seats.length}} RSD</b><br>\r\n \r\n<div *ngIf=\"r.narucilac == user.username;  then ifcondition\"></div>\r\n<div *ngIf=\"r.narucilac != user.username;  then if2condition\"></div>\r\n  <ng-template #ifcondition><button (click)=\"removeRes($event)\" name={{r.idRez}} >Cancel Reservation</button></ng-template>  \r\n <ng-template #if2condition><b>Invited by {{r.narucilac}}</b></ng-template>  \r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n\r\n<div *ngSwitchCase=\"'invitations'\">\r\n\r\n<h3>Pending reservations</h3>\r\n\r\n<ol>\r\n  <li *ngFor=\"let r of inv\">\r\n  <h4>{{r.pozbio}}</h4><h4>{{r.projekcija}}</h4>{{r.datum}}<br>{{r.termin}}<br>Sala {{r.sala}}<br>\r\n  <b>Confirmed arrivals:</b>\r\n  <ul>\r\n  <li *ngFor=\"let s of r.potvrdjeni\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n   <b>Waiting for response:</b><ul>\r\n  <li *ngFor=\"let s of r.invited_friends\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n\r\n  Seats:<ul>\r\n  <li *ngFor=\"let s of r.selected_seats\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n \r\n  Rezervisao: {{r.narucilac}}<br>\r\n <b>Total price: {{r.fiksnaCena * r.selected_seats.length}} RSD</b><br>\r\n<button (click)=\"acceptRes($event)\" name={{r.idRez}}  >Accept Invitation</button>\r\n<button (click)=\"declineRes($event)\" name={{r.idRez}}  >Decline Invitation</button>\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngSwitchCase=\"'cinemas'\">\r\n<hr>\r\n\r\n<button (click)=\"sortBioByName()\">Sort by Name</button>\r\n<button (click)=\"sortBioByCity()\">Sort by City</button>\r\n<button (click)=\"sortBioByDistance()\">Sort by Distance</button>\r\n\r\n<h3>Cinemas</h3>\r\n\r\n <form (submit)=\"findBio($event)\">\r\n \t\tSearch cinemas:\r\n \t\t<input type=\"text\" placeholder=\"Enter cinema's name\" name=\"keyword\" />\r\n\t\t<input type=\"submit\" name=\"findBio\" value=\"Search\" />\r\n</form>\r\n\r\n<div [ngSwitch]=\"all_or_found_bio\">\r\n\r\n<div *ngSwitchCase=\"'all_bio'\">\r\n\r\n<ol>\r\n  <li *ngFor=\"let bio of bios_list\">\r\n  <a routerLink=\"/rezervisi/{{bio.name}}\">{{bio['name']}}</a>\r\n\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'found_bio'\">\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'theatres'\">\r\n<hr>\r\n<button (click)=\"sortPozByName()\">Sort by Name</button>\r\n<button (click)=\"sortPozByCity()\">Sort by City</button>\r\n<button (click)=\"sortPozByDistance()\">Sort by Distance</button>\r\n\r\n<h3>Theatres</h3>\r\n\r\n <form (submit)=\"findPoz($event)\">\r\n \t\tSearch theatres:\r\n \t\t<input type=\"text\" placeholder=\"Enter theathre's name\" name=\"keyword\" />\r\n\t\t<input type=\"submit\" name=\"findPoz\" value=\"Search\" />\r\n</form>\r\n\r\n<div [ngSwitch]=\"all_or_found_poz\">\r\n\r\n<div *ngSwitchCase=\"'all_poz'\">\r\n\r\n<ol>\r\n  <li *ngFor=\"let poz of poz_list\">\r\n  <a routerLink=\"/rezervisi/{{poz.name}}\">{{poz.name}}</a>\r\n\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'all_bio'\">\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'sysAdmin'\">\r\n\r\n\t<div [ngSwitch]=\"admin_what\">\r\n\r\n\t<button (click)=\"register_cinemas_button()\">Register Cinema/Theatre</button>\r\n\t<button (click)=\"add_admin_button()\">Add new admin</button>\r\n\r\n\t<div *ngSwitchCase=\"'register_cinemas'\">\r\n\t\t<h3>Register new cinema/theatre</h3>\r\n\t\t<hr>\r\n\t\t<h4>Venue type</h4>\r\n\t\t<input type=\"radio\" name=\"venueType\" #cinemaBtn checked> Cinema<br>\r\n  \t\t<input type=\"radio\" name=\"venueType\" #theatreBtn> Theatre<br>\r\n\t\t<h4>Venue name</h4>\r\n\t\t<input type=\"text\" #venueName>\r\n\t\t<h4>Admin</h4>\r\n\t\t<div class=\"dropdown\">\r\n    \t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Admins\r\n    \t\t<span class=\"caret\"></span></button>\r\n    \t\t<ul class=\"dropdown-menu\">\r\n      \t\t\t<li class=\"dropdown-header\">Venue Admins</li>\r\n      \t\t\t<li *ngFor=\"let a of admins\" (click)=\"chosenAdmin(a.username)\">\r\n  \t\t\t\t\t{{a.username}} \r\n\t  \t\t\t</li>\r\n    \t\t</ul>\r\n\t\t</div>\r\n\t\t<h4>Venue location</h4>\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (mapClick)=\"onChoseLocation($event)\">\r\n  \t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\" *ngIf=\"locationChosen\"></agm-marker>\r\n\t\t</agm-map>\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t<hr>\r\n\t\t<button (click)=\"registerVenue(cinemaBtn.checked,venueName.value)\">OK</button>\r\n\t</div>\r\n\r\n\r\n\t<div *ngSwitchCase=\"'add_admin'\">\r\n\t\t<h3>Add new admin</h3>\r\n\t\t<hr>\r\n\t\t<h4>Admin type</h4>\r\n\t\t<input type=\"radio\" name=\"adminType\" #sysadmin checked> System admin<br>\r\n  \t\t<input type=\"radio\" name=\"adminType\" #fanadmin> Fan zone admin<br>\r\n\t\t<h4>Admin name</h4>\r\n\t\t<input type=\"text\" #adminname>\r\n\t\t<button (click)=\"addAdmin(sysadmin.checked,adminname.value)\">Upgrade</button>\r\n\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function UserpageComponent(user, http, router, route) {
        // this.friends = user.friends;
        this.user = user;
        this.http = http;
        this.router = router;
        this.route = route;
        this.lat = 45.25362179991922;
        this.lng = 19.830322265625;
        this.zoom = 12;
        this.locationChosen = false;
        this.bstatus = 50;
        this.sstatus = 30;
        this.zstatus = 0;
        this.admins = null;
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
    UserpageComponent.prototype.getUsername = function () {
        return this.user.getUsername();
    };
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('user set on userpage', this.user.getUser());
        this.usertype = this.user.getUtype();
        this.promenio = this.user.getPromenio();
        this.my_friends();
        console.log(this.usertype);
        this.user.getVenueAdmins().subscribe(function (data) { return _this.admins = data; });
    };
    UserpageComponent.prototype.friends_button = function () {
        this.what = 'friends';
    };
    UserpageComponent.prototype.istorija = function () {
        var _this = this;
        this.what = 'history';
        this.http.get('/getMyHist/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.hist = data;
            }
        });
    };
    UserpageComponent.prototype.lista_rezervacija = function () {
        var _this = this;
        this.what = 'reservations';
        this.http.get('/getMyRes/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.res = data;
            }
        });
    };
    UserpageComponent.prototype.lista_pozivnica = function () {
        var _this = this;
        this.what = 'invitations';
        this.http.get('/getMyInv/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.inv = data;
            }
        });
    };
    UserpageComponent.prototype.cinemas_button = function () {
        this.what = 'cinemas';
        this.all_or_found_bio = 'all_bio';
        this.getAllBios();
    };
    UserpageComponent.prototype.theatres_button = function () {
        this.what = 'theatres';
        this.all_or_found_poz = 'all_poz';
        this.getAllPoz();
    };
    UserpageComponent.prototype.register_cinemas_button = function () {
        this.admin_what = 'register_cinemas';
        console.log(this.admins);
    };
    UserpageComponent.prototype.add_admin_button = function () {
        this.admin_what = 'add_admin';
    };
    UserpageComponent.prototype.my_profile_button = function () {
        this.router.navigate(['users/' + this.user.username]);
    };
    UserpageComponent.prototype.getAllBios = function () {
        var _this = this;
        this.http.get('/getBio').subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.bios_list = data;
            }
        });
    };
    UserpageComponent.prototype.getAllPoz = function () {
        var _this = this;
        this.http.get('/getPoz').subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.poz_list = data;
            }
        });
    };
    UserpageComponent.prototype.findBio = function (event) {
        var _this = this;
        event.preventDefault();
        if (event.target.elements[0].value.length == 0) {
            this.getAllBios();
        }
        else {
            this.http.get('/findPozBio/bio/' + event.target.elements[0].value).subscribe(function (data) {
                if (data != null) {
                    _this.bios_list = data;
                }
            });
        }
    };
    UserpageComponent.prototype.findPoz = function (event) {
        var _this = this;
        event.preventDefault();
        if (event.target.elements[0].value.length == 0) {
            this.getAllPoz();
        }
        else {
            this.http.get('/findPozBio/poz/' + event.target.elements[0].value).subscribe(function (data) {
                if (data != null) {
                    _this.poz_list = data;
                }
            });
        }
    };
    UserpageComponent.prototype.my_friends = function () {
        var _this = this;
        this.http.get('/find_my_friends/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log('1 ', data);
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.removeFriend = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/removeFriend/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            _this.my_friends();
        });
        return false;
    };
    UserpageComponent.prototype.sortByName = function () {
        var _this = this;
        this.http.get('/sortByName/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log('sort by name ', data);
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortByLastname = function () {
        var _this = this;
        this.http.get('/sortByLastname/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                console.log('sort by lastname ', data);
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortBioByName = function () {
        var _this = this;
        this.http.get('/sortPozBio/bio/name').subscribe(function (data) {
            if (data != null) {
                _this.bios_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortBioByCity = function () {
        var _this = this;
        this.http.get('/sortPozBio/bio/city').subscribe(function (data) {
            if (data != null) {
                _this.bios_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortBioByDistance = function () {
        var _this = this;
        this.http.get('/sortPozBio/bio/distance').subscribe(function (data) {
            if (data != null) {
                _this.bios_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortPozByName = function () {
        var _this = this;
        this.http.get('/sortPozBio/poz/name').subscribe(function (data) {
            if (data != null) {
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortPozByCity = function () {
        var _this = this;
        this.http.get('/sortPozBio/poz/city').subscribe(function (data) {
            if (data != null) {
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortPozByDistance = function () {
        var _this = this;
        this.http.get('/sortPozBio/poz/distance').subscribe(function (data) {
            if (data != null) {
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.addAdmin = function (sysAdmin, name) {
        console.log('podaci');
        console.log(sysAdmin);
        console.log(name);
        var utype = "";
        if (sysAdmin) {
            utype = 'sysAdmin';
        }
        else {
            utype = 'fanAdmin';
        }
        var user = {
            utype: utype,
            username: name
        };
        this.http.post('/addAdmin', user).subscribe(function (data) { });
    };
    UserpageComponent.prototype.registerVenue = function (cinemaButton, venueName) {
        console.log(cinemaButton);
        console.log(venueName);
        var type = "";
        if (cinemaButton) {
            type = "cinema";
        }
        else {
            type = "theatre";
        }
        var pozbio = {
            type: type,
            name: venueName,
            adminName: this.adminName,
            latitude: this.lat,
            longitude: this.lng
        };
        this.http.post('/registerVenue', pozbio).subscribe(function (data) { });
    };
    UserpageComponent.prototype.onChoseLocation = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        console.log(event);
        this.locationChosen = true;
    };
    UserpageComponent.prototype.chosenAdmin = function (username) {
        this.adminName = username;
    };
    UserpageComponent.prototype.removeRes = function (event) {
        var _this = this;
        console.log('cancel res: ', event.target.name);
        this.http.get('/cancelRes/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            if (data['poruka'] == 'canceled') {
                _this.lista_rezervacija();
            }
            else {
                alert('Isteklo vreme za otkazivanje!');
            }
        });
        return false;
    };
    UserpageComponent.prototype.acceptRes = function (event) {
        var _this = this;
        console.log('accept inv: ', event.target.name);
        this.http.get('/acceptInv/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            _this.lista_pozivnica();
        });
        return false;
    };
    UserpageComponent.prototype.declineRes = function (event) {
        var _this = this;
        console.log('decline inv: ', event.target.name);
        this.http.get('/declineInv/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            _this.lista_pozivnica();
        });
        return false;
    };
    UserpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userpage',
            template: __webpack_require__("./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__("./src/app/userpage/userpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"whose\">\r\n\r\n<div *ngSwitchCase=\"'mine'\">\r\n\r\n\r\n<div [ngSwitch]=\"current\">\r\n\t\r\n\t<button (click)=\"details()\">My Details</button>\r\n\t<button (click)=\"my_friends()\">My Friends</button>\r\n\t<button (click)=\"pending_friend_requests()\">Friend Requests</button>\r\n\t<button (click)=\"find_friends_div()\">Find new friends</button>\r\n\t\r\n\t<div *ngSwitchCase=\"'details'\">\r\n\t\t <h3>{{name}}'s details:</h3>\r\n\t\t<ul>\r\n\t\t    <li>{{email}}</li>\r\n\t\t    <li>{{name}}</li>\r\n\t\t    <li>{{lastname}}</li>\r\n\t\t    <li>{{city}}</li>\r\n\t\t    <li>{{phoneNumber}}</li>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<a routerLink=\"/update-user\">Update my details</a>\r\n\t</div>\r\n\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'my_friends'\">\r\n\r\n\t\t<h3>My friends</h3>\r\n\t\t <ol>\r\n\t\t   <li *ngFor=\"let friend of my_friends_list\">\r\n\t\t   <a routerLink=\"/users/{{friend.username}}\">{{friend.email}}, {{friend.name}}, {{friend.lastname}}</a>\r\n\t\t\t<button (click)=\"removeFriend($event)\" name={{friend.username}}  >Remove</button>\r\n    \t    </li>\r\n    \t    </ol>\r\n\t</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'pending_friend_requests'\">\r\n\t \r\n\t\t<h3>Requests</h3>\r\n\t\t <ol>\r\n\t\t   <li *ngFor=\"let friend of pending_friends_requests\">\r\n\t\t   <a routerLink=\"/userprofile\">{{friend}}</a>\r\n\t\t   <button (click)=\"acceptFR($event)\" name={{friend}}  >Accept</button>\r\n\t\t  \t <button (click)=\"declineFR($event)\" name={{friend}}  >Decline</button>\r\n\t                \r\n\t\t\t\t\t\r\n    \t    </li>\r\n    \t    </ol>\r\n    \t    \r\n\t</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'find_friends'\">\r\n\t\t<h3>Find new friends</h3>\r\n\t\tSearch friends by their name, last name, or both:<br>\r\n\t    <form (submit)=\"find_friends($event)\">\r\n\t\tName:<input type=\"text\" placeholder=\"Enter Name\" name=\"name\" />\r\n\t    Lastname:<input type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" />\r\n\t\t<input type=\"submit\" name=\"find_friends\" value=\"Find\" />\r\n\t    </form>\r\n\t</div>\r\n\r\n\r\n\t<div *ngSwitchCase=\"'friends_results'\">\r\n\r\n        \r\n    \t    <h4>Search results:</h4>\r\n    \t    \r\n    \t    <ol>\r\n\r\n    \t    <li *ngFor=\"let friend of found_friends_list\">\r\n    \t    <a routerLink=\"/users/{{friend[1]}}\">{{friend[0]}}, {{friend[3]}}, {{friend[4]}}</a>\r\n    \t        \r\n    \t        \t\r\n    \t        \t\r\n\t                <div *ngIf=\"friend[2]== 'ne';  then if1condition\"></div>\r\n\t                 <div *ngIf=\"friend[2]== 'poslat';  then if2condition\"></div>   \r\n\t               <div *ngIf=\"friend[2]== 'vec';  then if3condition\"></div>\r\n\t                <div *ngIf=\"friend[2]== 'primljen';  then if4condition\"></div>\r\n\t                <ng-template #if1condition><button (click)=\"add_friend($event)\"   name={{friend[1]}}  >Add</button></ng-template>  \r\n\t\t\t\t\t<ng-template #if2condition><button (click)=\"cancelFR($event)\" name={{friend[1]}} >Cancel Request</button></ng-template> \r\n\t\t\t\t\t<ng-template #if3condition><button (click)=\"removeFriend($event)\"   name={{friend[1]}}  >Remove</button></ng-template>  \t\r\n\t\t\t\t\t<ng-template #if4condition><button (click)=\"declineFR($event)\"   name={{friend[1]}}  >Decline</button></ng-template>  \t\t\t\r\n    \t    \r\n    \t    </li>\r\n\r\n    \t    </ol>\r\n      \r\n\t</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'other'\">\r\n\t <h3>{{name}}'s profile</h3>\r\n\t\t\r\n\t\t{{name}}'s details:\r\n\t\t<ul>\r\n\t\t    <li>{{email}}</li>\r\n\t\t    <li>{{name}}</li>\r\n\t\t    <li>{{lastname}}</li>\r\n\t\t    <li>{{city}}</li>\r\n\t\t    <li>{{phoneNumber}}</li>\r\n\t\t</ul>\r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
    function UserprofileComponent(user, http, route) {
        this.user = user;
        this.http = http;
        this.route = route;
        this.whose = "other";
        this.current = "details";
        this.found_friends = [];
        this.pending_friends_requests = [];
        this.friends = [];
        this.user_global = null;
        console.log('usaer je : ', this.user);
        console.log('route je : ', route.snapshot.params["username"]);
        this.ciji = route.snapshot.params["username"];
        if (this.user.username === this.route.snapshot.params.username) {
            this.whose = "mine";
        }
        else {
            this.whose = "other";
        }
        this.getDetailsByUsername();
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ciji = params['username'];
            if (_this.user.username === _this.route.snapshot.params.username) {
                _this.whose = "mine";
            }
            else {
                _this.whose = "other";
            }
            _this.getDetailsByUsername();
        });
    };
    UserprofileComponent.prototype.getDetailsByUsername = function () {
        var _this = this;
        this.http.get('/getDetailsByUsername/' + this.ciji).subscribe(function (data) {
            console.log('details: ', data);
            if (data != null) {
                _this.email = data['email'];
                _this.friends = data['friends'];
                _this.name = data['name'];
                _this.lastname = data['lastname'];
                _this.city = data['city'];
                _this.phoneNumber = data['phoneNumber'];
                _this.username = data['username'];
            }
        });
    };
    UserprofileComponent.prototype.details = function () {
        this.current = 'details';
    };
    UserprofileComponent.prototype.my_friends = function () {
        var _this = this;
        this.http.get('/find_my_friends/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                _this.current = 'my_friends';
                console.log(data);
                _this.my_friends_list = data;
            }
        });
    };
    UserprofileComponent.prototype.find_friends_div = function () {
        this.current = 'find_friends';
    };
    UserprofileComponent.prototype.pending_friend_requests = function () {
        var _this = this;
        this.http.get('/pending_friend_requests/' + this.user.username).subscribe(function (data) {
            if (data != null) {
                _this.pending_friends_requests = data;
            }
        });
        this.current = 'pending_friend_requests';
    };
    //  get email():string {
    //    return this.user.email;
    //  }
    //  get city():string {
    //    return this.user.city;
    //  }
    //  get name():string {
    //    return this.user.name;
    //  }
    //  get lastname():string {
    //    return this.user.lastname;
    //  }
    //  get phoneNumber():number {
    //    return this.user.phoneNumber;
    //  }
    UserprofileComponent.prototype.setStateMine = function () {
        this.whose = "mine";
    };
    UserprofileComponent.prototype.setStateOther = function () {
        this.whose = "other";
    };
    UserprofileComponent.prototype.find_friends = function (e) {
        e.preventDefault();
        var name = e.target.elements[0].value;
        var lastname = e.target.elements[1].value;
        this.user_global = {
            name: name,
            lastname: lastname
        };
        this.findByUser(this.user_global);
        return false;
    };
    UserprofileComponent.prototype.findByUser = function (user) {
        var _this = this;
        console.log(this.user.email);
        this.http.post('/find_friends/' + this.user.username, user).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.found_friends_list = data;
                console.log(_this.found_friends_list);
            }
        });
        this.current = 'friends_results';
    };
    UserprofileComponent.prototype.add_friend = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/add_friend/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.found_friends_list = data;
                console.log(_this.found_friends_list);
            }
            _this.findByUser(_this.user_global);
        });
        return false;
    };
    UserprofileComponent.prototype.acceptFR = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/acceptFR/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            _this.pending_friend_requests();
        });
        return false;
    };
    UserprofileComponent.prototype.declineFR = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/declineFR/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            //this.my_friends();
            _this.pending_friend_requests();
        });
        return false;
    };
    UserprofileComponent.prototype.removeFriend = function (event) {
        var _this = this;
        console.log(event.target.name);
        console.log(this.user.username);
        this.http.get('/removeFriend/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            _this.my_friends();
        });
        return false;
    };
    UserprofileComponent.prototype.cancelFR = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/cancelFR/' + this.user.username + "/" + event.target.name).subscribe(function (data) {
            _this.findByUser(_this.user_global);
        });
        return false;
    };
    UserprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userprofile',
            template: __webpack_require__("./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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