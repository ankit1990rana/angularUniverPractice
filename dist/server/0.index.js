exports.ids = [0];
exports.modules = {

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
// import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { HttpModule } from '@angular/http';
var shared_module_1 = __webpack_require__(173);
var user_component_1 = __webpack_require__(453);
var user_routes_1 = __webpack_require__(455);
var user_list_component_1 = __webpack_require__(452);
var user_detail_component_1 = __webpack_require__(450);
var create_user_component_1 = __webpack_require__(447);
var data_driven_form_component_1 = __webpack_require__(448);
var login_component_1 = __webpack_require__(449);
/** Guards */
var user_detail_guard_1 = __webpack_require__(451);
var auth_guard_1 = __webpack_require__(446);
var userModule = (function () {
    function userModule() {
    }
    userModule = __decorate([
        core_1.NgModule({
            declarations: [
                user_component_1.UserComponent,
                user_list_component_1.UserListComponent,
                user_detail_component_1.UserDetailComponent,
                create_user_component_1.CreateUserComponent,
                data_driven_form_component_1.DataDrivenFormComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                // CommonModule,
                // FormsModule,
                // ReactiveFormsModule,
                // HttpModule,
                user_routes_1.userRouting,
                shared_module_1.SharedModule
            ],
            providers: [
                user_detail_guard_1.userDetailGuard,
                auth_guard_1.authGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], userModule);
    return userModule;
}());
exports.userModule = userModule;


/***/ },

/***/ 446:
/***/ function(module, exports) {

"use strict";
"use strict";
var authGuard = (function () {
    function authGuard() {
    }
    authGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("username")) {
            return true;
        }
    };
    return authGuard;
}());
exports.authGuard = authGuard;


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
/** Interfaces  */
var user_interface_1 = __webpack_require__(454);
var CreateUserComponent = (function () {
    function CreateUserComponent() {
        this.user = new user_interface_1.userInit().user; // Initilize User 
        this.gender = ['male', 'female'];
    }
    CreateUserComponent.prototype.ngOnInit = function () { };
    CreateUserComponent.prototype.registerUser = function (user) {
        console.log(user);
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-create-user',
            template: __webpack_require__(457),
            styles: [__webpack_require__(456)]
        }), 
        __metadata('design:paramtypes', [])
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(172);
var http_1 = __webpack_require__(100);
__webpack_require__(174);
__webpack_require__(296);
var DataDrivenFormComponent = (function () {
    function DataDrivenFormComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.genders = ['male', 'female'];
        this.registrationForm = formBuilder.group({
            'userName': ['Ankit', forms_1.Validators.required],
            'userEmail': ['ankit.rana@daffodilsw.com', [forms_1.Validators.required, this.checkEmail.bind(this)]],
            'userDob': ['', forms_1.Validators.required],
            'userPassword': ['', [this.checkEmpty, this.minPasswordCustomValidator]],
            'userGender': ['male']
        });
    }
    DataDrivenFormComponent.prototype.onSubmit = function (submittedForm) {
        console.log(submittedForm);
    };
    /**
     * Custom Validators
     * @params : A form control
     * @returns : A error in of string type
     */
    DataDrivenFormComponent.prototype.minPasswordCustomValidator = function (elm) {
        if (elm.value.length <= 6 && elm.value.length >= 1) {
            return { error: "Short Password" };
        }
        return null;
    };
    DataDrivenFormComponent.prototype.checkEmpty = function (elm) {
        if (elm.value.length == 0) {
            return { error: "Required Field" };
        }
        return null;
    };
    /**
     * Ansyc Validator
     */
    DataDrivenFormComponent.prototype.checkEmail = function (elm) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("http://127.0.0.1:8080/api/auth/validateEmail", elm.value)
                .map(function (res) { return console.log(res.json()); })
                .subscribe(function (data) {
                console.log(data);
                resolve(null);
            });
        });
    };
    DataDrivenFormComponent = __decorate([
        core_1.Component({
            selector: 'app-data-driven-form',
            template: __webpack_require__(459),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object])
    ], DataDrivenFormComponent);
    return DataDrivenFormComponent;
    var _a, _b;
}());
exports.DataDrivenFormComponent = DataDrivenFormComponent;


/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(172);
var router_1 = __webpack_require__(99);
var LoginComponent = (function () {
    function LoginComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.login = formBuilder.group({
            'userName': ['', forms_1.Validators.required],
            'password': ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.loginUser = function (user, isValid) {
        if (isValid && user.userName == "ankit" && user.password == "123") {
            localStorage.setItem("username", user.userName);
            this.router.navigate(['/user/list']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(461),
            styles: [__webpack_require__(460)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;


/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(99);
var UserDetailComponent = (function () {
    function UserDetailComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        activatedRoute.params.subscribe(function (params) {
            _this.params = params['id'];
            console.log(_this.params);
        });
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-user-detail',
            template: __webpack_require__(463),
            styles: [__webpack_require__(462)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], UserDetailComponent);
    return UserDetailComponent;
    var _a;
}());
exports.UserDetailComponent = UserDetailComponent;


/***/ },

/***/ 451:
/***/ function(module, exports) {

"use strict";
"use strict";
var userDetailGuard = (function () {
    function userDetailGuard() {
    }
    userDetailGuard.prototype.canActivate = function (route, state) {
        console.log(route, state);
        return confirm("Are you sure ?");
    };
    return userDetailGuard;
}());
exports.userDetailGuard = userDetailGuard;


/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var UserListComponent = (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-list',
            template: __webpack_require__(465),
            styles: [__webpack_require__(464)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var UserComponent = (function () {
    // private isLoggedin:Boolean;
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.logout = function () {
        localStorage.removeItem("username");
    };
    UserComponent.prototype.isLoggedin = function () {
        if (localStorage.getItem("username")) {
            return true;
        }
        else {
            return false;
        }
    };
    UserComponent.prototype.isNotLoggedin = function () {
        if (localStorage.getItem("username")) {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: "User Componenet \n            <hr/>\n            <nav>\n  <a [routerLink]=\"['list']\" class=\"enter-btn\" routerLinkActive=\"active\" *ngIf=\"isLoggedin()\" >List</a>\n  <input type=\"text\" #userID (input)=\"0\" />\n  <a [routerLink]=\"['detail',userID.value]\" class=\"enter-btn\" routerLinkActive=\"active\" *ngIf=\"isLoggedin()\" > Detail </a>\n  <a [routerLink]=\"['create']\" class=\"enter-btn\" routerLinkActive=\"active\" *ngIf=\"isNotLoggedin()\" >Register</a>\n  <a [routerLink]=\"['login']\" class=\"enter-btn\" routerLinkActive=\"active\"*ngIf=\"isNotLoggedin()\" >Login </a>\n  <a [routerLink]=\"['dataform']\" class=\"enter-btn\" routerLinkActive=\"active\" *ngIf=\"isNotLoggedin()\" >Data driven form</a>\n  <a href=\"#\" class=\"enter-btn\"  *ngIf=\"isLoggedin()\" (click)= \"logout()\" >Logout</a>\n</nav>\n        <router-outlet></router-outlet>",
            styles: [__webpack_require__(466)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ },

/***/ 454:
/***/ function(module, exports) {

"use strict";
"use strict";
var userInit = (function () {
    function userInit() {
        this.user = {
            name: '',
            email: '',
            dob: '',
            password: '',
            gender: 'male'
        };
    }
    return userInit;
}());
exports.userInit = userInit;


/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(99);
var user_component_1 = __webpack_require__(453);
var user_list_component_1 = __webpack_require__(452);
var user_detail_component_1 = __webpack_require__(450);
var create_user_component_1 = __webpack_require__(447);
var login_component_1 = __webpack_require__(449);
var data_driven_form_component_1 = __webpack_require__(448);
/** Guards */
var user_detail_guard_1 = __webpack_require__(451);
var auth_guard_1 = __webpack_require__(446);
var USER_ROUTES = [
    {
        path: '', component: user_component_1.UserComponent, children: [
            { path: 'list', component: user_list_component_1.UserListComponent },
            { path: 'dataform', component: data_driven_form_component_1.DataDrivenFormComponent },
            { path: 'create', component: create_user_component_1.CreateUserComponent },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'detail', component: user_detail_component_1.UserDetailComponent, canActivate: [user_detail_guard_1.userDetailGuard, auth_guard_1.authGuard], canActivateChild: [user_detail_guard_1.userDetailGuard] },
            { path: 'detail/:id', component: user_detail_component_1.UserDetailComponent, canActivate: [user_detail_guard_1.userDetailGuard, auth_guard_1.authGuard] }
        ]
    },
    { path: '', component: user_component_1.UserComponent } // Hack to match above route
];
exports.userRouting = router_1.RouterModule.forChild(USER_ROUTES);


/***/ },

/***/ 456:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 457:
/***/ function(module, exports) {

module.exports = "<br />\n<div id=\"Registration form Form\">\n\t<form #registerForm=\"ngForm\" (ngSubmit)=\"registerUser(user)\">\n        <br />\n\t\t<input class=\"form-control\" placeholder=\"User Name\" name=\"userName\" type=\"text\" [(ngModel)]=\"user.name\" #userName=\"ngModel\"\n\t\t\trequired/> \n\t\t<span [hidden]=\"userName.valid || userName.pristine\">Name is Required</span>\n\t\t<br/>\n        <input class=\"form-control\" placeholder=\"User Email\" name=\"userEmail\" [(ngModel)]=\"user.email\" #userEmail=\"ngModel\"\n\t\t\tautocomplete=\"off\" required />\n\t\t<span [hidden]=\"userEmail.pristine\">{{emailMessage}}</span>\n\t\t<br />\n        <input class=\"form-control\" type=\"date\" placeholder=\"Date of birth\" name=\"userDob\" [(ngModel)]=\"user.dob\" #userDob=\"ngModel\"\n\t\t\tautocomplete=\"off\" required />\n\t\t<span [hidden]=\"userDob.valid || userDob.pristine\">Date of birth is required</span>\n\t\t<br />\n        <input class=\"form-control\" placeholder=\"Enter Password\" name=\"userPassword\" type=\"password\" [(ngModel)]=\"user.password\"\n\t\t\t#userPassword=\"ngModel\" autocomplete=\"off\" required minlength=\"6\" />\n\t\t<span [hidden]=\"userPassword.valid || userPassword.pristine\">Password is required</span>\n\t\t<br />\n        <div *ngFor=\"let g of gender\">\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"user.gender\" [value]=\"g\" />{{g}}\n        </div>\n        <br />\n\t\t<input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" [disabled]=\"!registerForm.form.valid\" />\n\t</form>\n</div>"

/***/ },

/***/ 458:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 459:
/***/ function(module, exports) {

module.exports = "<div id=\"Registration form Form\">\n\t<form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit(registrationForm)\">\n\t\t<br />\n\t\t<input class=\"form-control\" placeholder=\"User Name\" name=\"userName\" type=\"text\" formControlName=\"userName\" />\n\t\t<!--{{ registrationForm.get('userName').value }}-->\n\t\t<span [hidden]=\"registrationForm.get('userName').valid || registrationForm.get('userName').pristine\">Name is Required</span>\n\t\t<br/>\n\t\t<input class=\"form-control\" placeholder=\"User Email\" name=\"userEmail\" formControlName=\"userEmail\" />\n\t\t<span *ngIf=\"registrationForm.get('userEmail').errors\">{{ registrationForm.get('userEmail').errors.error }}</span>\n\t\t<br />\n\t\t<input class=\"form-control\" type=\"date\" placeholder=\"Date of birth\" name=\"userDob\" formControlName=\"userDob\" />\n\t\t<span [hidden]=\"registrationForm.get('userDob').valid || registrationForm.get('userDob').pristine\">Date of birth is required</span>\n\t\t<br />\n\t\t<input class=\"form-control\" placeholder=\"Enter Password\" name=\"userPassword\" type=\"password\" formControlName=\"userPassword\"\n\t\t/>\n\t\t<span *ngIf=\"registrationForm.get('userPassword').errors\">{{ registrationForm.get('userPassword').errors.error }}</span>\n\t\t<br />\n\t\t<div *ngFor=\"let g of genders\">\n\t\t\t<input type=\"radio\" name=\"userGender\" [value]=\"g\" formControlName=\"userGender\" />{{g}}\n\t\t</div>\n\t\t<br />\n\t\t<input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\"  />\n\t</form>\n</div>"

/***/ },

/***/ 460:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 461:
/***/ function(module, exports) {

module.exports = "<div>\n  <form [formGroup]=\"login\" (ngSubmit)=\"loginUser(login.value, login.valid)\">\n    <br />\n    User Name <input type=\"text\" name=\"userName\" formControlName=\"userName\" />\n    <br />\n    Password <input type=\"password\" name=\"password\" formControlName=\"password\" />\n    <br />\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\"  />\n  </form>\n</div>"

/***/ },

/***/ 462:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 463:
/***/ function(module, exports) {

module.exports = "Here are user details\n"

/***/ },

/***/ 464:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 465:
/***/ function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ },

/***/ 466:
/***/ function(module, exports) {

module.exports = ""

/***/ }

};;
//# sourceMappingURL=0.index.js.map