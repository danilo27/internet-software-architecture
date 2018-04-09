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

module.exports = "<p>\r\n  Activation link is sent to {{ email }} \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-activation-page',
            template: __webpack_require__("./src/app/activation-page/activation-page.component.html"),
            styles: [__webpack_require__("./src/app/activation-page/activation-page.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
    ], ActivationPageComponent);
    return ActivationPageComponent;
}());
exports.ActivationPageComponent = ActivationPageComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var homepage_component_1 = __webpack_require__("./src/app/homepage/homepage.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var cinemas_component_1 = __webpack_require__("./src/app/cinemas/cinemas.component.ts");
var fanpage_component_1 = __webpack_require__("./src/app/fanpage/fanpage.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var theatres_component_1 = __webpack_require__("./src/app/theatres/theatres.component.ts");
var userpage_component_1 = __webpack_require__("./src/app/userpage/userpage.component.ts");
var userprofile_component_1 = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
var activation_page_component_1 = __webpack_require__("./src/app/activation-page/activation-page.component.ts");
var update_user_component_1 = __webpack_require__("./src/app/update-user/update-user.component.ts");
var authguard_guard_1 = __webpack_require__("./src/app/authguard.guard.ts");
var logout_component_1 = __webpack_require__("./src/app/logout/logout.component.ts");
var rezervacija_component_1 = __webpack_require__("./src/app/rezervacija/rezervacija.component.ts");
var change_password_component_1 = __webpack_require__("./src/app/change-password/change-password.component.ts");
var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: homepage_component_1.HomepageComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'cinemas', component: cinemas_component_1.CinemasComponent },
    { path: 'fanpage', component: fanpage_component_1.FanpageComponent },
    { path: 'theatres', component: theatres_component_1.TheatresComponent },
    { path: 'userpage', canActivate: [authguard_guard_1.AuthguardGuard], component: userpage_component_1.UserpageComponent },
    { path: 'userprofile', component: userprofile_component_1.UserprofileComponent },
    { path: 'activation-page', component: activation_page_component_1.ActivationPageComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'updateuser/:username', component: update_user_component_1.UpdateUserComponent },
    { path: 'update-user', component: update_user_component_1.UpdateUserComponent },
    { path: 'change-password/:username', component: change_password_component_1.ChangePasswordComponent },
    { path: 'rezervisi/:name', component: rezervacija_component_1.RezervacijaComponent },
    { path: 'users/:username', component: userprofile_component_1.UserprofileComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutingComponents = [
    homepage_component_1.HomepageComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    cinemas_component_1.CinemasComponent,
    fanpage_component_1.FanpageComponent,
    theatres_component_1.TheatresComponent,
    userpage_component_1.UserpageComponent,
    page_not_found_component_1.PageNotFoundComponent,
    activation_page_component_1.ActivationPageComponent,
    rezervacija_component_1.RezervacijaComponent
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var authguard_guard_1 = __webpack_require__("./src/app/authguard.guard.ts");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var rekvizit_component_1 = __webpack_require__("./src/app/rekvizit/rekvizit.component.ts");
var oglas_component_1 = __webpack_require__("./src/app/oglas/oglas.component.ts");
var userprofile_component_1 = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
var upload_file_service_1 = __webpack_require__("./src/app/upload-file.service.ts");
var update_user_component_1 = __webpack_require__("./src/app/update-user/update-user.component.ts");
var logout_component_1 = __webpack_require__("./src/app/logout/logout.component.ts");
var rezervacija_component_1 = __webpack_require__("./src/app/rezervacija/rezervacija.component.ts");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var pozivnice_component_1 = __webpack_require__("./src/app/pozivnice/pozivnice.component.ts");
var change_password_component_1 = __webpack_require__("./src/app/change-password/change-password.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                app_routing_module_1.RoutingComponents,
                rekvizit_component_1.RekvizitComponent,
                oglas_component_1.OglasComponent,
                userprofile_component_1.UserprofileComponent,
                update_user_component_1.UpdateUserComponent,
                logout_component_1.LogoutComponent,
                rezervacija_component_1.RezervacijaComponent,
                pozivnice_component_1.PozivniceComponent,
                change_password_component_1.ChangePasswordComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAL7fctJPUvG52w9R2KjlVbcoHAG1CRlzs'
                }),
                forms_1.FormsModule
            ],
            providers: [user_service_service_1.UserServiceService, rekviziti_service_1.RekvizitiService, authguard_guard_1.AuthguardGuard, upload_file_service_1.UploadFileService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/authguard.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService, router_1.Router])
    ], AuthguardGuard);
    return AuthguardGuard;
}());
exports.AuthguardGuard = AuthguardGuard;


/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n\t<form (submit)=\"changePassword($event)\">\n\t  <div class=\"container\">\n\t    <div id=\"login-box\">\n\t     <div class=\"left\">\n\t       <h1>Change your password</h1>\n\n\t       <label for=\"psw\"><b>Password</b></label>\n\t       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\n\t\n\t\t\t<label for=\"psw\"><b>Repeat Password</b></label>\n\t       <input type=\"password\" placeholder=\"Enter Password Again\" name=\"psw\" required><br>\n\n\t\t   <input type=\"submit\" name=\"signup_submit\" value=\"Change\" />\n\t\t   <br><br><br>\n\t\t   <br> <br>\n\n\t\t\t</div>\n\t   </div>\n\n\t  </div>\n\t</form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
        core_1.Component({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            router_1.ActivatedRoute])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CinemasComponent = /** @class */ (function () {
    function CinemasComponent() {
    }
    CinemasComponent.prototype.ngOnInit = function () {
    };
    CinemasComponent = __decorate([
        core_1.Component({
            selector: 'app-cinemas',
            template: __webpack_require__("./src/app/cinemas/cinemas.component.html"),
            styles: [__webpack_require__("./src/app/cinemas/cinemas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CinemasComponent);
    return CinemasComponent;
}());
exports.CinemasComponent = CinemasComponent;


/***/ }),

/***/ "./src/app/fanpage/fanpage.component.css":
/***/ (function(module, exports) {

module.exports = "li {\r\n\tborder-bottom: 1px solid gray;\r\n}"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\r\n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Notifikacije\r\n    <span class=\"caret\"></span></button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li class=\"dropdown-header\">Notifikacije</li>\r\n      <li *ngFor=\"let n of notifikacije\">\r\n  \t\t\t{{n.sadrzaj}} \r\n\t  </li>\r\n    </ul>\r\n</div>\r\n\r\n\r\n<div>\r\n\t<nav>\r\n\t\t<button (click)=\"zvanicnaProdavnica()\">Zvanicna prodavnica</button>\r\n\t\t<button (click)=\"polovniOglasi()\">Oglasi</button>\r\n\t</nav>\r\n</div>\r\n\r\n\r\n<div [ngSwitch]=\"state\">\r\n\t<div *ngSwitchCase=\"'zvanicni'\">\r\n\t\t<div *ngIf=\"isAdmin()\">\r\n\t\t\t<nav>\r\n\t\t\t\t<button (click)=\"noviZvanicniRekvizit()\">Novi rekvizit</button>\r\n\t\t\t\t<button (click)=\"pregledajOglase()\">Oglasi za proveru</button>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\r\n\t\t<div *ngFor=\"let r of zvanicniRekviziti\">\r\n\t\t\t<div *ngFor = \"let f of fileUploads\">\r\n\t\t\t\t<div *ngIf=\"isImage(r.slika,f)\">\r\n\t\t\t\t\t<app-rekvizit (izmenaEvent)=\"izmena($event)\" [rekvizit]=\"r\" [username]=\"user\" [fileUpload]='f'></app-rekvizit>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n \r\n\t<div *ngSwitchCase=\"'oglasi'\">\r\n\t\t<nav>\r\n\t\t\t<button (click)=\"noviOglas()\">Novi oglas</button>\r\n\t\t\t<button (click)=\"aktivniOglasi()\">Aktivni oglasi</button>\r\n\t\t</nav>\r\n\t\t<div *ngFor = \"let o of oglasi\">\r\n\t\t\t<div *ngFor = \"let f of fileUploads\">\r\n\t\t\t\t<div *ngIf=\"isImage(o.slika,f)\">\r\n\t\t\t\t\t<app-oglas [oglas]=\"o\" [fileUpload]='f'></app-oglas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngSwitchCase=\"'noviOglas'\">\r\n\t\t<div>\r\n\t\t\t<h3>Naziv oglasa</h3>\r\n\t\t\t<input #nazivOglasa type=\"text\">\r\n\t\t\t<h3>Opis oglasa</h3>\r\n\t\t\t<textarea #opisOglasa rows=\"10\" cols=\"30\"></textarea>\r\n\t\t\t<h3>Slika oglasa</h3>\r\n\t\t\t\r\n\t\t\t<input type='file' (change)=\"onSelectFile($event)\">\r\n\t\t\t\r\n\t\t\t<h3>Cena oglasa</h3>\r\n\t\t\t<input #cenaOglasa type=\"number\">\r\n\t\t\t<h3>Datum isteka oglasa</h3>\r\n\t\t\t<input #datumOglasa type=\"date\">\r\n\t\t\t<button (click)=\"postaviOglas(nazivOglasa.value,opisOglasa.value,cenaOglasa.value,datumOglasa.value)\">Postavi oglas</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'noviRekvizit'\">\r\n\t\t<div>\r\n\t\t\t<h3>Naziv rekvizita</h3>\r\n\t\t\t<input #nazivRekvizita type=\"text\" value=\"{{nazivRek}}\" >\r\n\t\t\t<h3>Opis rekvizita</h3>\r\n\t\t\t<textarea #opisRekvizita rows=\"10\" cols=\"30\" value=\"{{opisRek}}\"></textarea>\r\n\t\t\t<h3>Slika rekvizita</h3>\r\n\t\t\t\r\n\t\t\t<input type='file' (change)=\"onSelectFile($event)\">\r\n\t\t\t\r\n\t\t\t<h3>Cena rekvizita</h3>\r\n\t\t\t<input #cenaRekvizita type=\"number\" value=\"{{cenaRek}}\">\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"isMode() then postavi else izmeni;\"></div>\r\n\t\t\t\r\n\t\t\t<ng-template #postavi>\r\n\t\t\t\t<button (click)=\"postaviRekvizit(nazivRekvizita.value,opisRekvizita.value,cenaRekvizita.value)\">Postavi rekvizit</button>\r\n\t\t\t</ng-template>\r\n\t\t\t\r\n\t\t\t<ng-template #izmeni>\r\n\t\t\t\t<button (click)=\"izmeniRekvizit(nazivRekvizita.value,opisRekvizita.value,cenaRekvizita.value)\">Izmeni rekvizit</button>\r\n\t\t\t\t<button (click)=\"odustani()\">Odustani</button>\r\n\t\t\t</ng-template>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'proveraOglasa'\">\r\n\t\t<div>\r\n\t\t\t<div *ngFor = \"let o of oglasiZaProveru\">\r\n\t\t\t\t<div *ngFor = \"let f of fileUploads\">\r\n\t\t\t\t\t<div *ngIf=\"isImage(o.slika,f)\">\r\n\t\t\t\t\t\t<app-oglas [oglas]=\"o\" [fileUpload]='f' ></app-oglas>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'aktivniOglasi'\">\r\n\t\t<div>\r\n\t\t\t<div *ngFor = \"let o of oglasiKorisnika\">\r\n\t\t\t\t<div *ngFor = \"let f of fileUploads\">\r\n\t\t\t\t\t<div *ngIf=\"isImage(o.slika,f)\">\r\n\t\t\t\t\t\t<app-oglas [oglas]=\"o\" [fileUpload]='f' ></app-oglas>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var upload_file_service_1 = __webpack_require__("./src/app/upload-file.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
            if (event instanceof http_1.HttpResponse) {
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
            if (event instanceof http_1.HttpResponse) {
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
                if (event instanceof http_1.HttpResponse) {
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
        core_1.Component({
            selector: 'app-fanpage',
            template: __webpack_require__("./src/app/fanpage/fanpage.component.html"),
            styles: [__webpack_require__("./src/app/fanpage/fanpage.component.css")]
        }),
        __metadata("design:paramtypes", [rekviziti_service_1.RekvizitiService,
            user_service_service_1.UserServiceService,
            upload_file_service_1.UploadFileService])
    ], FanpageComponent);
    return FanpageComponent;
}());
exports.FanpageComponent = FanpageComponent;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<button routerLink=\"/homepage\">Home</button>\r\n</div>\r\n\r\n<nav>\r\n\t<div *ngIf=\"isLoggedIn() then userpagebutton; else loginpagebutton;\"></div>\r\n\t<ng-template #loginpagebutton>\r\n\t\t<a routerLink=\"/login\">Login</a>\r\n\t</ng-template>\r\n\t<ng-template #userpagebutton>\r\n\t\t<strong><a routerLink=\"/users/{{getUsername()}}\">{{getUsername()}} </a></strong>\r\n\t\t<a routerLink=\"/logout\">Logout</a>\r\n\r\n\t</ng-template>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n\t<div *ngIf=\"isLoggedIn() then userpagebutton; else loginpagebutton;\"></div>\r\n\t<ng-template #loginpagebutton>\r\n\t\t<!--  <a routerLink=\"/login\">Login</a> -->\r\n\t</ng-template>\r\n\t<ng-template #userpagebutton>\r\n\t\t<a routerLink=\"/userpage\">Userpage</a>\r\n\t\t{{user.username}}\r\n\t</ng-template>\r\n</nav>\r\n\r\n<nav>\r\n\t<a routerLink=\"/cinemas\">Cinemas</a>\r\n\t<a routerLink=\"/theatres\">Theatres</a>\r\n</nav>\r\n\r\n<nav>\r\n\t<a routerLink=\"/fanpage\">Fanpage</a>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\r\n*:focus {\r\n  outline: none;\r\n}\r\n#login-box {\r\n    margin: auto;\r\n      width: 50%;\r\n\r\n  height: 880px;\r\n  background: #FFF;\r\n\r\n}\r\nh1 {\r\n  margin: 0 0 20px 0;\r\n  font-weight: 300;\r\n  font-size: 28px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  padding: 4px;\r\n  width: 220px;\r\n  height: 32px;\r\n  border: none;\r\n  border-bottom: 1px solid #AAA;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border-bottom: 2px solid #16a085;\r\n  color: #16a085;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"submit\"] {\r\n  margin-top: 28px;\r\n  width: 120px;\r\n  height: 32px;\r\n  background: #16a085;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"submit\"]:focus {\r\n  opacity: 0.8;\r\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\ninput[type=\"submit\"]:active {\r\n  opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n\r\n\t<form (submit)=\"loginUser($event)\">\r\n\t  <div class=\"container\">\r\n\r\n\r\n\r\n\r\n\t    <div id=\"login-box\">\r\n\t     <div class=\"left\">\r\n\t       <h1>Sign in</h1>\r\n\r\n\t       <label for=\"email\"><b>Email</b></label>\r\n\t       <input type=\"text\" placeholder=\"Enter your email\" name=\"email\" required><br>\r\n\r\n\t       <label for=\"psw\"><b>Password</b></label>\r\n\t       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\r\n\r\n\r\n\t\t   <input type=\"submit\" name=\"signup_submit\" value=\"Sign in\" />\r\n\t\t   <br><br><br>\r\n\t\t   <br> <br>\r\n\t\t   Don't have an account?\r\n\t\t   <a routerLink=\"/register\">Register</a>\r\n\t\t\t</div>\r\n\r\n\r\n\t   </div>\r\n\r\n\t  </div>\r\n\t</form>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "./src/app/oglas/oglas.component.css":
/***/ (function(module, exports) {

module.exports = "div.oglas-div {\r\n\tfloat: left;\r\n\tbackground-color: lightgreen;\r\n    width: 350px;\r\n    height: 400px;\r\n    overflow: scroll;\r\n}\r\n\r\ndiv.ponude-div {\r\n\tbackground-color: lightblue;\r\n    width: 250px;\r\n    height: 400px;\r\n    overflow: scroll;\r\n}\r\n\r\ndiv.lista-ponuda {\r\n\twidth: 250px;\r\n    height: 300px;\r\n    overflow: scroll;\r\n}\r\n\r\ndiv.korisnikova-ponuda {\r\n\twidth: 250px;\r\n    height: 100px;\r\n}"

/***/ }),

/***/ "./src/app/oglas/oglas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"oglas-div\">\r\n\t<h3>Naziv oglasa</h3>\r\n\t{{oglas.naziv}}<br>\r\n\t<h3>Opis oglasa</h3>\r\n\t{{oglas.opis}}<br>\r\n\t<img src=\"{{fileUpload}}\" alt=\"{{fileUpload}}\" style=\"max-width:350px\" />\r\n\t<h3>Cena</h3>\r\n\t{{oglas.cena}}<br>\r\n\t<h3>Korisnik</h3>\r\n\t{{oglas.username}}<br>\r\n\t<h3>Datum isteka</h3>\r\n\t{{oglas.datumIsteka}}<br>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"isMode() then ponude; else provera\"></div>\r\n\t\r\n<ng-template #ponude>\r\n\t<div class=\"ponude-div\">\r\n\t\t<div class=\"lista-ponuda\">\r\n \t\t\t<div *ngFor=\"let p of oglas.ponude\">\r\n \t\t\t\tUsername: {{p.username}} ponuda: {{p.cena}}\r\n \t\t\t</div>\t\r\n \t\t</div>\r\n\t\t\r\n\t\t<div *ngIf=\"isUser() then odaberi; else ponudi\"></div>\r\n\t\r\n\t\t<ng-template #ponudi>\r\n\t\t\t<div class=\"korisnikova-ponuda\">\r\n\t\t\t\tVasa trenutna ponuda: {{trenutnaPonuda}} <br>\r\n\t\t\t\t<input type=\"number\" #cenaLicitacije>\r\n\t\t\t\t<button (click)=\"licitiraj(cenaLicitacije.value)\">Licitiraj</button>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t\r\n\t\t<ng-template #odaberi>\r\n\t\t\tZaustavi licitaciju i odaberi najvecu ponudu\r\n\t\t\t<button (click)=\"odaberiPonudu()\">Ok</button>\r\n\t\t</ng-template>\r\n\t\t\r\n\t</div>\r\n</ng-template>\r\n\r\n<ng-template #provera>\r\n\t<div>\r\n\t\t<nav>\r\n\t\t\t<button (click)=\"prihvacenOglas()\">Prihvati</button>\r\n\t\t\t<button (click)=\"odbijenOglas()\">Odbij</button>\r\n\t\t</nav>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/oglas/oglas.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Input('oglas'),
        __metadata("design:type", Object)
    ], OglasComponent.prototype, "oglas", void 0);
    __decorate([
        core_1.Input('fileUpload'),
        __metadata("design:type", String)
    ], OglasComponent.prototype, "fileUpload", void 0);
    OglasComponent = __decorate([
        core_1.Component({
            selector: 'app-oglas',
            template: __webpack_require__("./src/app/oglas/oglas.component.html"),
            styles: [__webpack_require__("./src/app/oglas/oglas.component.css")]
        }),
        __metadata("design:paramtypes", [rekviziti_service_1.RekvizitiService,
            user_service_service_1.UserServiceService])
    ], OglasComponent);
    return OglasComponent;
}());
exports.OglasComponent = OglasComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PozivniceComponent = /** @class */ (function () {
    function PozivniceComponent() {
    }
    PozivniceComponent.prototype.ngOnInit = function () {
    };
    PozivniceComponent = __decorate([
        core_1.Component({
            selector: 'app-pozivnice',
            template: __webpack_require__("./src/app/pozivnice/pozivnice.component.html"),
            styles: [__webpack_require__("./src/app/pozivnice/pozivnice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PozivniceComponent);
    return PozivniceComponent;
}());
exports.PozivniceComponent = PozivniceComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h3>Naziv: </h3>\r\n\t{{rekvizit.naziv}}<br>\r\n\t<h3>Opis: </h3>\r\n\t{{rekvizit.opis}}<br>\r\n\t<img src=\"{{fileUpload}}\" alt=\"{{fileUpload}}\" style=\"max-width:350px\" />\r\n\t<h3>Cena: </h3>\r\n\t{{rekvizit.cena}}<br>\r\n\t<button (click)=\"rezervisiZvanicni()\">Rezervisi</button>\r\n\t<div *ngIf=\"isAdmin()\">\r\n\t\t<button (click)=\"ukloniZvanicni()\">Ukloni</button>\r\n\t\t<button (click)=\"izmeniZvanicni()\">Izmeni</button>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var RekvizitComponent = /** @class */ (function () {
    function RekvizitComponent(_rekvizitiService, _userService) {
        this._rekvizitiService = _rekvizitiService;
        this._userService = _userService;
        this.user = null;
        this.izmenaEvent = new core_1.EventEmitter();
    }
    RekvizitComponent.prototype.ngOnInit = function () {
        this.user = this._userService.getUser();
    };
    RekvizitComponent.prototype.rezervisiZvanicni = function () {
        this._rekvizitiService.rezervisiZvanicniRekvizit(this.rekvizit.naziv, this.username);
    };
    RekvizitComponent.prototype.ukloniZvanicni = function () {
        this._rekvizitiService.ukloniZvanicni(this.rekvizit);
    };
    RekvizitComponent.prototype.izmeniZvanicni = function () {
        this.izmenaEvent.emit(this.rekvizit);
    };
    RekvizitComponent.prototype.isAdmin = function () {
        if (this.user.utype == "admin") {
            return true;
        }
        return false;
    };
    __decorate([
        core_1.Input('rekvizit'),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "rekvizit", void 0);
    __decorate([
        core_1.Input('username'),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "username", void 0);
    __decorate([
        core_1.Input('fileUpload'),
        __metadata("design:type", String)
    ], RekvizitComponent.prototype, "fileUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "izmenaEvent", void 0);
    RekvizitComponent = __decorate([
        core_1.Component({
            selector: 'app-rekvizit',
            template: __webpack_require__("./src/app/rekvizit/rekvizit.component.html"),
            styles: [__webpack_require__("./src/app/rekvizit/rekvizit.component.css")]
        }),
        __metadata("design:paramtypes", [rekviziti_service_1.RekvizitiService,
            user_service_service_1.UserServiceService])
    ], RekvizitComponent);
    return RekvizitComponent;
}());
exports.RekvizitComponent = RekvizitComponent;


/***/ }),

/***/ "./src/app/rekviziti.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        this.http.post('/rezervisiZvanicniRekvizit', rezervacijaRekvizita).subscribe(function (data) { });
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RekvizitiService);
    return RekvizitiService;
}());
exports.RekvizitiService = RekvizitiService;


/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.css":
/***/ (function(module, exports) {

module.exports = "/* Author: Uzair Ahmed */\r\n/* CSS Helpers */\r\n.font14 {\r\n    font-size: 14px;\r\n}\r\n.font16 {\r\n    font-size: 16px;\r\n}\r\n.marginTop5 {\r\n    margin-top: 5px;\r\n}\r\n.marginTB10 {\r\n    margin: 10px 0px;\r\n}\r\n.wordWrap {\r\n    word-break: break-all;\r\n}\r\n/* End CSS Helpers */\r\n.innerContainer {\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.movie {\r\n    margin: -10px -5px 10px -5px;\r\n    height: 70px;\r\n    \r\n}\r\n.movieDetails {\r\n    font-size: 15px;\r\n    margin-top: -3px;\r\n}\r\n.movieTitle {\r\n    font-size: 20px;\r\n    padding-top: 10px;\r\n    margin-top: -3px;\r\n}\r\n.seat {\r\n    padding-right: 5px;\r\n}\r\n.legend {\r\n    font-size: 14px;\r\n}\r\n.legend > .padding-left {\r\n    padding-left: 15px;\r\n}\r\n.screen {\r\n    background: hsla(216, 72%, 50%, 0.65);\r\n    height: 3px;\r\n    border-radius: 15px;\r\n    margin: -5px 50px 10px;\r\n    -webkit-box-shadow: 0px 3px 6px #fff;\r\n            box-shadow: 0px 3px 6px #fff;\r\n}\r\n.reservedSeat {\r\n    color: #ce4844;\r\n}\r\n.selectedSeat {\r\n    color: #5cb85c;\r\n}\r\n.freeSeat {\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Reservation\r\n</h3>\r\n<h4>\r\n{{name}}\r\n</h4>\r\n{{poz_bio.adress}}\r\n{{poz_bio.city}}\r\n\r\n<hr>\r\n\r\n<div [ngSwitch]=\"what\" >\r\n\r\n<div *ngSwitchCase=\"'sve'\">\r\n\r\n<ul>\r\n  <li *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\r\n      <button (click)=\"projekcija_button($event)\" name={{projekcija.nazivProjekcije}}  >{{projekcija.nazivProjekcije}}</button>\r\n      <br>\r\n      Genre: {{projekcija.zanr}}\r\n      <br>\r\n      Director: {{projekcija.imeReditelja}}\r\n      <br>\r\n      Actors: \r\n      <ul>\r\n      <li *ngFor=\"let glumac of projekcija.listaGlumaca\">\r\n      \t{{glumac}}\r\n      </li>\r\n      </ul>\r\n  </li>\r\n</ul>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'izabrana_projekcija'\">\r\n\t<button (click)=\"projekcija_button($event)\" name={{izabrana_projekcija}}  >{{izabrana_projekcija}}</button>\r\n\t<div *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\r\n\t\t<div *ngIf=\"projekcija.nazivProjekcije == izabrana_projekcija; then showDates\"></div>\r\n\t\t<ng-template #showDates> \r\n\t\t\t\r\n\t\t\t<ul>\r\n\t\t  \t\t<li *ngFor=\"let datum of projekcija.listaDatumaProjekcije\">\r\n\t\t\t\t\t<button (click)=\"datum_button($event)\" name={{datum.datum}}  >{{datum.datum}}</button>\r\n\t\t  \t\t</li>\r\n\t\t    </ul>\r\n\t    </ng-template>\r\n    </div>\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'izabran_datum'\">\r\n    <button (click)=\"projekcija_button($event)\" name={{izabrana_projekcija}}  >{{izabrana_projekcija}}</button>>\r\n\t <button (click)=\"datum_button($event)\" name={{izabran_datum}}  >{{izabran_datum}}</button>\r\n\t\r\n\t<div *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\r\n\t\t<div *ngIf=\"projekcija.nazivProjekcije == izabrana_projekcija; then showDates\"></div>\r\n\t\t<ng-template #showDates> \r\n\t\t\t<div *ngFor=\"let datum of projekcija.listaDatumaProjekcije\">\r\n\t\t\t\t<div *ngIf=\"datum.datum == izabran_datum; then showTermine\"></div>\r\n\t\t\t\t<ng-template #showTermine> \r\n\t\t\t\t\t<ul>\r\n\t\t\t\t  \t\t<li *ngFor=\"let termin of datum.listaTermina\">\r\n\t\t\t\t\t\t\t<button (click)=\"termin_button($event)\" name=\"{{termin.termin}}-{{termin.sala}}-{{termin.cena}}\"  >{{termin.termin}}<br>Sala {{termin.sala}}<br>{{termin.cena}} din</button>\r\n\t\t\t\t  \t\t</li>\r\n\t\t    \t\t</ul>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t    </ng-template>\r\n    </div>\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'izabran_termin'\">\r\n <button (click)=\"projekcija_button($event)\" name={{izabrana_projekcija}}  >{{izabrana_projekcija}}</button>>\r\n  <button (click)=\"datum_button($event)\" name={{izabran_datum}}  >{{izabran_datum}}</button>>\r\n<strong>{{termin}} Sala {{sala}}</strong><br>\r\n\t<div *ngFor=\"let projekcija of poz_bio.listaProjekcija\">\r\n\t\t<div *ngIf=\"projekcija.nazivProjekcije == izabrana_projekcija; then showDates\"></div>\r\n\t\t<ng-template #showDates> \r\n\t\t\t<div *ngFor=\"let datum of projekcija.listaDatumaProjekcije\">\r\n\t\t\t\t<div *ngIf=\"datum.datum == izabran_datum; then showTermine\"></div>\r\n\t\t\t\t<ng-template #showTermine> \r\n\t\t\t\t\t<div *ngFor=\"let terminf of datum.listaTermina\">\r\n\t\t\t\t\t\t<div *ngIf=\"terminf.termin == termin; then terminFine\"></div>\r\n\t\t\t\t\t\t<ng-template #terminFine> \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"terminf.sala == sala; then salaFine\"></div>\r\n\t\t\t\t\t\t\t<ng-template #salaFine> \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"container\" style=\"background-color:black\">\r\n\t\t\t\t\t\t\t\t    <main class=\"innerContainer\">\r\n\t\t\t\t\t\t\t\t        <div class=\"movie\">\r\n\t\t\t\t\t\t\t\t            <h3 class=\"movieTitle\">{{izabrana_projekcija}}</h3>\r\n\t\t\t\t\t\t\t\t            <div class=\"movieDetails\"> {{termin}} Sala {{sala}}</div>\r\n\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t        <div class=\"legend\">\r\n\t\t\t\t\t\t\t\t            <span class=\"glyphicon glyphicon-stop freeSeat\"></span> FREE\r\n\t\t\t\t\t\t\t\t            <span class=\"glyphicon glyphicon-ban-circle reservedSeat padding-left\"></span> TAKEN\r\n\t\t\t\t\t\t\t\t            <span class=\"glyphicon glyphicon-ok-sign selectedSeat padding-left\"></span> SELECTED                \r\n\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t        <p class=\"font14 marginTop5\">SCREEN</p>\r\n\t\t\t\t\t\t\t\t        <div class=\"screen\"></div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t        <div *ngFor=\"let row of rows\" >\r\n\t\t\t\t\t\t\t\t            <span class=\"seat\" *ngFor=\"let col of cols\" (click)=\"seatClicked(row + col)\" \r\n\t\t\t\t\t\t\t\t                    [ngSwitch]=\"getStatus(row + col)\">\r\n\t\t\t\t\t\t\t\t                <span *ngSwitchCase=\"'selected'\" class=\"glyphicon glyphicon-ok-sign selectedSeat\"></span>\r\n\t\t\t\t\t\t\t\t                <span *ngSwitchCase=\"'reserved'\" class=\"glyphicon glyphicon-ban-circle reservedSeat\"></span>\r\n\t\t\t\t\t\t\t\t                <span *ngSwitchDefault class=\"glyphicon glyphicon-stop freeSeat\"></span>\r\n\t\t\t\t\t\t\t\t            </span>\r\n\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t      \r\n\t\t\t\t\t\t\t\t        <div *ngIf=\"selected.length > 0\" class=\"font14 marginTB10\">\r\n\t\t\t\t\t\t\t\t            <div class=\"wordWrap\">SEATS RESERVED : {{selected.length}} </div>\r\n\t\t\t\t\t\t\t\t            <div>PRICE : {{ticketPrice}} * {{selected.length}} = {{currency}}.{{ticketPrice*selected.length}} </div>\r\n\t\t\t\t\t\t\t\t            <div>TOTAL : {{currency}}.{{ticketPrice * selected.length}}</div>\r\n\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t        <div class=\"buttonBar marginTop5\">\r\n\t\t\t\t\t\t\t\t            <button (click)=\"clearSelected()\" [disabled]=\"selected.length === 0\" class=\"btn btn-default btn-sm\">Reset</button>\r\n\t\t\t\t\t\t\t\t            <button (click)=\"showSelected()\" [disabled]=\"selected.length === 0\" class=\"btn btn-success btn-sm\">Buy Tickets</button>\r\n\t\t\t\t\t\t\t\t        \t\r\n\t\t\t\t\t\t\t\t        \t<button (click)=\"inviteFriendsDiv()\" [disabled]=\"selected.length < 2\" class=\"btn btn-success btn-sm\">Invite friends</button>\r\n\t\t\t\t\t\t\t\t        \t\r\n\t\t\t\t\t\t\t\t        </div>    \r\n\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t        <div *ngIf=\"calling_friends == true;  then if1condition\"></div>\r\n\t\t\t\t\t\t\t\t        <div *ngIf=\"called_friends == true;  then if2condition\"></div>\r\n\t\t\t\t\t\t\t\t            <ng-template #if1condition>\r\n\t\t\t\t\t\t\t\t             <div>\r\n\t\t\t\t\t\t\t\t\t            \t<div style=\"margin: 0 auto;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    width: 300px;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    height: 200px;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    overflow: auto;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Invite friends\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <ol>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <li *ngFor=\"let friend of my_friends_list\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <input [(ngModel)]=\"friend.checked\" (ngModelChange)=\"changed()\" type=\"checkbox\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <a routerLink=\"/users/{{friend.username}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \t\t{{friend.email}}, {{friend.name}}, {{friend.lastname}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    \t    </li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    \t </ol>\r\n\t\t\t\t\t\t\t\t\t\t\t    \t </div>\r\n\t\t\t\t\t\t\t\t\t\t    \t </div>\r\n\t\t\t\t\t\t\t\t\t\t    \t <div>\r\n\t\t\t\t\t\t\t\t\t\t    \t \t<button [disabled]=\"selected.length <= selected_friends_count\" (click)=\"doneInviting($event)\" class=\"btn btn-success btn-sm\">Done</button>\r\n\t\t\t\t\t\t\t\t\t\t    \t </div>\r\n\t\t\t\t\t\t\t\t            </ng-template>\r\n\t\t\t\t\t\t\t\t            <ng-template #if2condition>\r\n\t\t\t\t\t\t\t\t            \t<br>Invited Friends\r\n\t\t\t\t\t\t\t\t            \t<div style=\"margin: 0 auto;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    width: 300px;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    height: 200px;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    overflow: auto;\">\r\n\t\t\t\t\t\t\t\t            \t<ol>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <li *ngFor=\"let i_friend of invited_friends\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{i_friend.email}}, {{i_friend.name}}, {{i_friend.lastname}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t            </ng-template>  \r\n\t\t\t\t\t\t\t\t    </main>     \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t    </ng-template>\r\n    </div>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
        core_1.Component({
            selector: 'app-rezervacija',
            template: __webpack_require__("./src/app/rezervacija/rezervacija.component.html"),
            styles: [__webpack_require__("./src/app/rezervacija/rezervacija.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService,
            http_1.HttpClient,
            router_1.Router,
            router_1.ActivatedRoute])
    ], RezervacijaComponent);
    return RezervacijaComponent;
}());
exports.RezervacijaComponent = RezervacijaComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TheatresComponent = /** @class */ (function () {
    function TheatresComponent() {
    }
    TheatresComponent.prototype.ngOnInit = function () {
    };
    TheatresComponent = __decorate([
        core_1.Component({
            selector: 'app-theatres',
            template: __webpack_require__("./src/app/theatres/theatres.component.html"),
            styles: [__webpack_require__("./src/app/theatres/theatres.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TheatresComponent);
    return TheatresComponent;
}());
exports.TheatresComponent = TheatresComponent;


/***/ }),

/***/ "./src/app/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"update($event)\">\n  <div class=\"container\">\n\n    <div id=\"login-box\">\n     <div class=\"left\">\n       <h2>Enter details you want to change</h2>\n\n       <label for=\"email\"><b>Email:{{email}}</b></label>\n       <input type=\"text\" placeholder=\"Enter new Email\" name=\"email\"><br>\n\n       <label for=\"psw\"><b>New password</b></label>\n       <input type=\"password\" placeholder=\"Enter new Password\" name=\"psw\"><br>\n\n       <label for=\"psw-repeat\"><b>Confirm new Password</b></label>\n       <input type=\"password\" placeholder=\"Enter new Password again\" name=\"psw-repeat\" ><br>\n\n       <label for=\"name\"><b>First Name: {{name}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your first name\" name=\"name\"><br>\n\n       <label for=\"lastname\"><b>Last Name: {{lastname}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your last name\" name=\"lastname\"><br>\n\n       <label for=\"city\"><b>City:{{city}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your new city\" name=\"city\"><br>\n\n       <label for=\"phone\"><b>Phone Number:{{phoneNumber}}</b></label>\n       <input type=\"text\" placeholder=\"Enter new phone number\" name=\"phoneNumber\"><br>\n\n       <input type=\"submit\" name=\"update_submit\" value=\"Update details\" />\n     </div>\n\n   </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/update-user/update-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
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
        core_1.Component({
            selector: 'app-update-user',
            template: __webpack_require__("./src/app/update-user/update-user.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());
exports.UpdateUserComponent = UpdateUserComponent;


/***/ }),

/***/ "./src/app/upload-file.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UploadFileService = /** @class */ (function () {
    function UploadFileService(http) {
        this.http = http;
    }
    UploadFileService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new http_1.HttpRequest('POST', '/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UploadFileService);
    return UploadFileService;
}());
exports.UploadFileService = UploadFileService;


/***/ }),

/***/ "./src/app/user-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.friends = [];
        this._isLoggedIn = new rxjs_1.BehaviorSubject(false);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserServiceService);
    return UserServiceService;
}());
exports.UserServiceService = UserServiceService;


/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n  width: 400px;\r\n}"

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\r\n\r\n<div [ngSwitch]=\"usertype\">\r\n\r\n<div *ngSwitchCase=\"'regular'\">\r\n\r\n<div [ngSwitch]=\"what\">\r\n\r\n\r\n\r\n\r\n<button (click)=\"cinemas_button()\">Cinemas</button>\r\n<button (click)=\"theatres_button()\">Theatres</button>\r\n<button (click)=\"istorija()\">History</button>\r\n<button (click)=\"friends_button()\">My Friends</button>\r\n<button (click)=\"lista_rezervacija()\">Reservations</button>\r\n<button (click)=\"lista_pozivnica()\">Invitations</button>\r\n<button (click)=\"my_profile_button()\">My profile</button>\r\n\r\n<div *ngSwitchCase=\"'history'\">\r\n\r\n <h3> Istorija poseta pozorista i bioskopa: </h3>\r\n  <ol>\r\n  <li *ngFor=\"let r of hist\">\r\n  <h4>{{r.pozbio}}</h4><h4>{{r.projekcija}}</h4>{{r.datum}}<br>{{r.termin}}<br>Sala {{r.sala}}<br>\r\n\r\n  Seats:<ul>\r\n  <li *ngFor=\"let s of r.selected_seats\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n \r\n  Rezervisao: {{r.narucilac}}<br>\r\n <b>Total price: {{r.fiksnaCena * r.selected_seats.length}} RSD<br></b>\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'friends'\">\r\n\r\n<h3>My friends</h3>\r\n<button (click)=\"sortByName($event)\"  >Sort by name</button>\r\n<button (click)=\"sortByLastname($event)\" >Sort by lastname</button>\r\n<a routerLink=\"/users/{{getUsername()}}\">See all options</a>\r\n<ol>\r\n  <li *ngFor=\"let friend of my_friends_list\">\r\n  <a routerLink=\"/users/{{friend.username}}\">{{friend.email}}, {{friend.name}}, {{friend.lastname}}</a>\r\n<button (click)=\"removeFriend($event)\" name={{friend.username}}  >Remove</button>\r\n  </li>\r\n  </ol>\r\n</div>\r\n\r\n\r\n<div *ngSwitchCase=\"'reservations'\">\r\n\r\n<h3>My reservations</h3>\r\n\r\n<ol>\r\n  <li *ngFor=\"let r of res\">\r\n  <h4>{{r.pozbio}}</h4><h4>{{r.projekcija}}</h4>{{r.datum}}<br>{{r.termin}}<br>Sala {{r.sala}}<br>\r\n  <b>Confirmed arrivals:</b>\r\n  <ul>\r\n  <li *ngFor=\"let s of r.potvrdjeni\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n   <b>Waiting for response:</b><ul>\r\n  <li *ngFor=\"let s of r.invited_friends\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n\r\n  Seats:<ul>\r\n  <li *ngFor=\"let s of r.selected_seats\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n \r\n  Rezervisao: {{r.narucilac}}<br>\r\n <b>Total price: {{r.fiksnaCena * r.selected_seats.length}} RSD</b><br>\r\n \r\n<div *ngIf=\"r.narucilac == user.username;  then ifcondition\"></div>\r\n<div *ngIf=\"r.narucilac != user.username;  then if2condition\"></div>\r\n  <ng-template #ifcondition><button (click)=\"removeRes($event)\" name={{r.idRez}} >Cancel Reservation</button></ng-template>  \r\n <ng-template #if2condition><b>Invited by {{r.narucilac}}</b></ng-template>  \r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n\r\n<div *ngSwitchCase=\"'invitations'\">\r\n\r\n<h3>Pending reservations</h3>\r\n\r\n<ol>\r\n  <li *ngFor=\"let r of inv\">\r\n  <h4>{{r.pozbio}}</h4><h4>{{r.projekcija}}</h4>{{r.datum}}<br>{{r.termin}}<br>Sala {{r.sala}}<br>\r\n  <b>Confirmed arrivals:</b>\r\n  <ul>\r\n  <li *ngFor=\"let s of r.potvrdjeni\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n   <b>Waiting for response:</b><ul>\r\n  <li *ngFor=\"let s of r.invited_friends\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n\r\n  Seats:<ul>\r\n  <li *ngFor=\"let s of r.selected_seats\">\r\n  \t{{s}}\r\n\t</li>\r\n  </ul>\r\n \r\n  Rezervisao: {{r.narucilac}}<br>\r\n <b>Total price: {{r.fiksnaCena * r.selected_seats.length}} RSD</b><br>\r\n<button (click)=\"acceptRes($event)\" name={{r.idRez}}  >Accept Invitation</button>\r\n<button (click)=\"declineRes($event)\" name={{r.idRez}}  >Decline Invitation</button>\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngSwitchCase=\"'cinemas'\">\r\n<hr>\r\n\r\n<button (click)=\"sortBioByName()\">Sort by Name</button>\r\n<button (click)=\"sortBioByCity()\">Sort by City</button>\r\n<button (click)=\"sortBioByDistance()\">Sort by Distance</button>\r\n\r\n<h3>Cinemas</h3>\r\n\r\n <form (submit)=\"findBio($event)\">\r\n \t\tSearch cinemas:\r\n \t\t<input type=\"text\" placeholder=\"Enter cinema's name\" name=\"keyword\" />\r\n\t\t<input type=\"submit\" name=\"findBio\" value=\"Search\" />\r\n</form>\r\n\r\n<div [ngSwitch]=\"all_or_found_bio\">\r\n\r\n<div *ngSwitchCase=\"'all_bio'\">\r\n\r\n<ol>\r\n  <li *ngFor=\"let bio of bios_list\">\r\n  <a routerLink=\"/rezervisi/{{bio.name}}\">{{bio['name']}}</a>\r\n\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'found_bio'\">\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'theatres'\">\r\n<hr>\r\n<button (click)=\"sortPozByName()\">Sort by Name</button>\r\n<button (click)=\"sortPozByCity()\">Sort by City</button>\r\n<button (click)=\"sortPozByDistance()\">Sort by Distance</button>\r\n\r\n<h3>Theatres</h3>\r\n\r\n <form (submit)=\"findPoz($event)\">\r\n \t\tSearch theatres:\r\n \t\t<input type=\"text\" placeholder=\"Enter theathre's name\" name=\"keyword\" />\r\n\t\t<input type=\"submit\" name=\"findPoz\" value=\"Search\" />\r\n</form>\r\n\r\n<div [ngSwitch]=\"all_or_found_poz\">\r\n\r\n<div *ngSwitchCase=\"'all_poz'\">\r\n\r\n<ol>\r\n  <li *ngFor=\"let poz of poz_list\">\r\n  <a routerLink=\"/rezervisi/{{poz.name}}\">{{poz.name}}</a>\r\n\r\n  </li>\r\n  </ol>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'all_bio'\">\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'sysAdmin'\">\r\n\r\n\t<div [ngSwitch]=\"admin_what\">\r\n\r\n\t<button (click)=\"register_cinemas_button()\">Register Cinema/Theatre</button>\r\n\t<button (click)=\"add_admin_button()\">Add new admin</button>\r\n\r\n\t<div *ngSwitchCase=\"'register_cinemas'\">\r\n\t\t<h3>Register new cinema/theatre</h3>\r\n\t\t<hr>\r\n\t\t<h4>Venue type</h4>\r\n\t\t<input type=\"radio\" name=\"venueType\" #cinemaBtn checked> Cinema<br>\r\n  \t\t<input type=\"radio\" name=\"venueType\" #theatreBtn> Theatre<br>\r\n\t\t<h4>Venue name</h4>\r\n\t\t<input type=\"text\" #venueName>\r\n\t\t<h4>Admin</h4>\r\n\t\t<div class=\"dropdown\">\r\n    \t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Admins\r\n    \t\t<span class=\"caret\"></span></button>\r\n    \t\t<ul class=\"dropdown-menu\">\r\n      \t\t\t<li class=\"dropdown-header\">Venue Admins</li>\r\n      \t\t\t<li *ngFor=\"let a of admins\" (click)=\"chosenAdmin(a.username)\">\r\n  \t\t\t\t\t{{a.username}} \r\n\t  \t\t\t</li>\r\n    \t\t</ul>\r\n\t\t</div>\r\n\t\t<h4>Venue location</h4>\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (mapClick)=\"onChoseLocation($event)\">\r\n  \t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\" *ngIf=\"locationChosen\"></agm-marker>\r\n\t\t</agm-map>\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t<hr>\r\n\t\t<button (click)=\"registerVenue(cinemaBtn.checked,venueName.value)\">OK</button>\r\n\t</div>\r\n\r\n\r\n\t<div *ngSwitchCase=\"'add_admin'\">\r\n\t\t<h3>Add new admin</h3>\r\n\t\t<hr>\r\n\t\t<h4>Admin type</h4>\r\n\t\t<input type=\"radio\" name=\"adminType\" #sysadmin checked> System admin<br>\r\n  \t\t<input type=\"radio\" name=\"adminType\" #fanadmin> Fan zone admin<br>\r\n\t\t<h4>Admin name</h4>\r\n\t\t<input type=\"text\" #adminname>\r\n\t\t<button (click)=\"addAdmin(sysadmin.checked,adminname.value)\">Upgrade</button>\r\n\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
        core_1.Component({
            selector: 'app-userpage',
            template: __webpack_require__("./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__("./src/app/userpage/userpage.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService,
            http_1.HttpClient, router_1.Router,
            router_1.ActivatedRoute])
    ], UserpageComponent);
    return UserpageComponent;
}());
exports.UserpageComponent = UserpageComponent;


/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"whose\">\r\n\r\n<div *ngSwitchCase=\"'mine'\">\r\n\r\n\r\n<div [ngSwitch]=\"current\">\r\n\t\r\n\t<button (click)=\"details()\">My Details</button>\r\n\t<button (click)=\"my_friends()\">My Friends</button>\r\n\t<button (click)=\"pending_friend_requests()\">Friend Requests</button>\r\n\t<button (click)=\"find_friends_div()\">Find new friends</button>\r\n\t\r\n\t<div *ngSwitchCase=\"'details'\">\r\n\t\t <h3>{{name}}'s details:</h3>\r\n\t\t<ul>\r\n\t\t    <li>{{email}}</li>\r\n\t\t    <li>{{name}}</li>\r\n\t\t    <li>{{lastname}}</li>\r\n\t\t    <li>{{city}}</li>\r\n\t\t    <li>{{phoneNumber}}</li>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<a routerLink=\"/update-user\">Update my details</a>\r\n\t</div>\r\n\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'my_friends'\">\r\n\r\n\t\t<h3>My friends</h3>\r\n\t\t <ol>\r\n\t\t   <li *ngFor=\"let friend of my_friends_list\">\r\n\t\t   <a routerLink=\"/users/{{friend.username}}\">{{friend.email}}, {{friend.name}}, {{friend.lastname}}</a>\r\n\t\t\t<button (click)=\"removeFriend($event)\" name={{friend.username}}  >Remove</button>\r\n    \t    </li>\r\n    \t    </ol>\r\n\t</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'pending_friend_requests'\">\r\n\t \r\n\t\t<h3>Requests</h3>\r\n\t\t <ol>\r\n\t\t   <li *ngFor=\"let friend of pending_friends_requests\">\r\n\t\t   <a routerLink=\"/userprofile\">{{friend}}</a>\r\n\t\t   <button (click)=\"acceptFR($event)\" name={{friend}}  >Accept</button>\r\n\t\t  \t <button (click)=\"declineFR($event)\" name={{friend}}  >Decline</button>\r\n\t                \r\n\t\t\t\t\t\r\n    \t    </li>\r\n    \t    </ol>\r\n    \t    \r\n\t</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'find_friends'\">\r\n\t\t<h3>Find new friends</h3>\r\n\t\tSearch friends by their name, last name, or both:<br>\r\n\t    <form (submit)=\"find_friends($event)\">\r\n\t\tName:<input type=\"text\" placeholder=\"Enter Name\" name=\"name\" />\r\n\t    Lastname:<input type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" />\r\n\t\t<input type=\"submit\" name=\"find_friends\" value=\"Find\" />\r\n\t    </form>\r\n\t</div>\r\n\r\n\r\n\t<div *ngSwitchCase=\"'friends_results'\">\r\n\r\n        \r\n    \t    <h4>Search results:</h4>\r\n    \t    \r\n    \t    <ol>\r\n\r\n    \t    <li *ngFor=\"let friend of found_friends_list\">\r\n    \t    <a routerLink=\"/users/{{friend[1]}}\">{{friend[0]}}, {{friend[3]}}, {{friend[4]}}</a>\r\n    \t        \r\n    \t        \t\r\n    \t        \t\r\n\t                <div *ngIf=\"friend[2]== 'ne';  then if1condition\"></div>\r\n\t                 <div *ngIf=\"friend[2]== 'poslat';  then if2condition\"></div>   \r\n\t               <div *ngIf=\"friend[2]== 'vec';  then if3condition\"></div>\r\n\t                <div *ngIf=\"friend[2]== 'primljen';  then if4condition\"></div>\r\n\t                <ng-template #if1condition><button (click)=\"add_friend($event)\"   name={{friend[1]}}  >Add</button></ng-template>  \r\n\t\t\t\t\t<ng-template #if2condition><button (click)=\"cancelFR($event)\" name={{friend[1]}} >Cancel Request</button></ng-template> \r\n\t\t\t\t\t<ng-template #if3condition><button (click)=\"removeFriend($event)\"   name={{friend[1]}}  >Remove</button></ng-template>  \t\r\n\t\t\t\t\t<ng-template #if4condition><button (click)=\"declineFR($event)\"   name={{friend[1]}}  >Decline</button></ng-template>  \t\t\t\r\n    \t    \r\n    \t    </li>\r\n\r\n    \t    </ol>\r\n      \r\n\t</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'other'\">\r\n\t <h3>{{name}}'s profile</h3>\r\n\t\t\r\n\t\t{{name}}'s details:\r\n\t\t<ul>\r\n\t\t    <li>{{email}}</li>\r\n\t\t    <li>{{name}}</li>\r\n\t\t    <li>{{lastname}}</li>\r\n\t\t    <li>{{city}}</li>\r\n\t\t    <li>{{phoneNumber}}</li>\r\n\t\t</ul>\r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
        core_1.Component({
            selector: 'app-userprofile',
            template: __webpack_require__("./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService,
            http_1.HttpClient,
            router_1.ActivatedRoute])
    ], UserprofileComponent);
    return UserprofileComponent;
}());
exports.UserprofileComponent = UserprofileComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map