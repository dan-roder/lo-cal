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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main_layout_main_layout_component__ = __webpack_require__("./src/app/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_our_story_our_story_component__ = __webpack_require__("./src/app/pages/our-story/our-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_our_food_our_food_component__ = __webpack_require__("./src/app/pages/our-food/our-food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu_component__ = __webpack_require__("./src/app/pages/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_customize_menu_customize_component__ = __webpack_require__("./src/app/pages/menu-customize/menu-customize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sub_menu_sub_menu_component__ = __webpack_require__("./src/app/pages/sub-menu/sub-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__local_pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_post_post_component__ = __webpack_require__("./src/app/pages/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__local_pages_catering_catering_component__ = __webpack_require__("./src/app/pages/catering/catering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__local_pages_contact_contact_component__ = __webpack_require__("./src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__local_pages_blog_blog_component__ = __webpack_require__("./src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__local_pages_blog_post_blog_post_component__ = __webpack_require__("./src/app/pages/blog-post/blog-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__local_pages_create_account_create_account_component__ = __webpack_require__("./src/app/pages/create-account/create-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__local_pages_account_account_component__ = __webpack_require__("./src/app/pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__local_guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__local_pages_checkout_login_checkout_login_component__ = __webpack_require__("./src/app/pages/checkout-login/checkout-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__local_guards_access_guard__ = __webpack_require__("./src/app/guards/access.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__local_pages_checkout_review_checkout_review_component__ = __webpack_require__("./src/app/pages/checkout-review/checkout-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__local_guards_order_guard__ = __webpack_require__("./src/app/guards/order.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__local_pages_checkout_payment_checkout_payment_component__ = __webpack_require__("./src/app/pages/checkout-payment/checkout-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__local_pages_order_history_order_history_component__ = __webpack_require__("./src/app/pages/order-history/order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__local_layouts_account_layout_account_layout_component__ = __webpack_require__("./src/app/layouts/account-layout/account-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */] },
            { path: 'our-story', component: __WEBPACK_IMPORTED_MODULE_4__pages_our_story_our_story_component__["a" /* OurStoryComponent */] },
            { path: 'our-food', component: __WEBPACK_IMPORTED_MODULE_5__pages_our_food_our_food_component__["a" /* OurFoodComponent */] },
            { path: 'catering', component: __WEBPACK_IMPORTED_MODULE_11__local_pages_catering_catering_component__["a" /* CateringComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__local_pages_login_login_component__["a" /* LoginComponent */] },
            { path: 'create-account', component: __WEBPACK_IMPORTED_MODULE_15__local_pages_create_account_create_account_component__["a" /* CreateAccountComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__local_pages_contact_contact_component__["a" /* ContactComponent */] },
            { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_13__local_pages_blog_blog_component__["a" /* BlogComponent */] },
            { path: 'blog/:post', component: __WEBPACK_IMPORTED_MODULE_14__local_pages_blog_post_blog_post_component__["a" /* BlogPostComponent */] },
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_24__local_layouts_account_layout_account_layout_component__["a" /* AccountLayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__local_guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__local_pages_account_account_component__["a" /* AccountComponent */] },
                    { path: 'order-history', component: __WEBPACK_IMPORTED_MODULE_23__local_pages_order_history_order_history_component__["a" /* OrderHistoryComponent */] }
                ]
            },
            {
                path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_18__local_pages_checkout_login_checkout_login_component__["a" /* CheckoutLoginComponent */]
            },
            { path: 'checkout/review', component: __WEBPACK_IMPORTED_MODULE_20__local_pages_checkout_review_checkout_review_component__["a" /* CheckoutReviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__local_guards_access_guard__["a" /* AccessGuard */]] },
            { path: 'checkout/payment', component: __WEBPACK_IMPORTED_MODULE_22__local_pages_checkout_payment_checkout_payment_component__["a" /* CheckoutPaymentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__local_guards_order_guard__["a" /* OrderGuard */]] }
        ]
    },
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: 'menu',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu_component__["a" /* MenuPageComponent */]
            },
        ]
    },
    {
        path: 'menu/:category',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_sub_menu_sub_menu_component__["a" /* SubMenuComponent */]
            },
            {
                path: ':item',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_menu_customize_menu_customize_component__["a" /* MenuCustomizeComponent */]
            },
        ]
    },
    {
        path: ':slug',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_post_post_component__["a" /* PostComponent */]
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_main_layout_main_layout_component__ = __webpack_require__("./src/app/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_account_layout_account_layout_component__ = __webpack_require__("./src/app/layouts/account-layout/account-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_our_story_our_story_component__ = __webpack_require__("./src/app/pages/our-story/our-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_our_food_our_food_component__ = __webpack_require__("./src/app/pages/our-food/our-food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu_component__ = __webpack_require__("./src/app/pages/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_customize_menu_customize_component__ = __webpack_require__("./src/app/pages/menu-customize/menu-customize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sub_menu_sub_menu_component__ = __webpack_require__("./src/app/pages/sub-menu/sub-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_post_post_component__ = __webpack_require__("./src/app/pages/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_catering_catering_component__ = __webpack_require__("./src/app/pages/catering/catering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_contact_contact_component__ = __webpack_require__("./src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_create_account_create_account_component__ = __webpack_require__("./src/app/pages/create-account/create-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_account_account_component__ = __webpack_require__("./src/app/pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_checkout_login_checkout_login_component__ = __webpack_require__("./src/app/pages/checkout-login/checkout-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_checkout_review_checkout_review_component__ = __webpack_require__("./src/app/pages/checkout-review/checkout-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_confirmation_confirmation_component__ = __webpack_require__("./src/app/pages/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_order_history_order_history_component__ = __webpack_require__("./src/app/pages/order-history/order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_components_header_header_component__ = __webpack_require__("./src/app/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_components_footer_footer_component__ = __webpack_require__("./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_components_title_body_images_title_body_images_component__ = __webpack_require__("./src/app/shared/components/title-body-images/title-body-images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_components_intro_section_intro_section_component__ = __webpack_require__("./src/app/shared/components/intro-section/intro-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_components_image_and_text_image_and_text_component__ = __webpack_require__("./src/app/shared/components/image-and-text/image-and-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_components_hamburger_hamburger_component__ = __webpack_require__("./src/app/shared/components/hamburger/hamburger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_components_bag_bag_component__ = __webpack_require__("./src/app/shared/components/bag/bag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_components_login_form_login_form_component__ = __webpack_require__("./src/app/shared/components/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__utils_windowref__ = __webpack_require__("./src/app/utils/windowref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_menu_service_service__ = __webpack_require__("./src/app/services/menu-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_bag_service__ = __webpack_require__("./src/app/services/bag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__local_services_order_service__ = __webpack_require__("./src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_directives_window_scroll_directive__ = __webpack_require__("./src/app/shared/directives/window-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_directives_input_switcher_directive__ = __webpack_require__("./src/app/shared/directives/input-switcher.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pipes_allergens_pipe__ = __webpack_require__("./src/app/pipes/allergens.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pipes_safe_html_pipe__ = __webpack_require__("./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_blog_blog_component__ = __webpack_require__("./src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_blog_post_blog_post_component__ = __webpack_require__("./src/app/pages/blog-post/blog-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pipes_featured_image_pipe__ = __webpack_require__("./src/app/pipes/featured-image.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__local_guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__local_guards_access_guard__ = __webpack_require__("./src/app/guards/access.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__local_guards_order_guard__ = __webpack_require__("./src/app/guards/order.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_checkout_payment_checkout_payment_component__ = __webpack_require__("./src/app/pages/checkout-payment/checkout-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_responsive__ = __webpack_require__("./node_modules/ng2-responsive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__shared_directives_month_mask_directive__ = __webpack_require__("./src/app/shared/directives/month-mask.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Config

// Components



// Pages
















// Shared Components








// Services






// Directives


//Pipes





//Guards




// Modules


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__shared_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_our_story_our_story_component__["a" /* OurStoryComponent */],
                __WEBPACK_IMPORTED_MODULE_28__shared_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__shared_components_title_body_images_title_body_images_component__["a" /* TitleBodyImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__shared_components_intro_section_intro_section_component__["a" /* IntroSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_32__shared_components_image_and_text_image_and_text_component__["a" /* ImageAndTextComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_our_food_our_food_component__["a" /* OurFoodComponent */],
                __WEBPACK_IMPORTED_MODULE_33__shared_components_hamburger_hamburger_component__["a" /* HamburgerComponent */],
                __WEBPACK_IMPORTED_MODULE_42__shared_directives_window_scroll_directive__["a" /* WindowScrollDirective */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu_component__["a" /* MenuPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_menu_customize_menu_customize_component__["a" /* MenuCustomizeComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shared_components_bag_bag_component__["a" /* BagComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sub_menu_sub_menu_component__["a" /* SubMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pipes_allergens_pipe__["a" /* AllergensPipe */],
                __WEBPACK_IMPORTED_MODULE_45__pipes_safe_html_pipe__["a" /* SafeHtml */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_catering_catering_component__["a" /* CateringComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_blog_post_blog_post_component__["a" /* BlogPostComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pipes_featured_image_pipe__["a" /* FeaturedImagePipe */],
                __WEBPACK_IMPORTED_MODULE_22__pages_create_account_create_account_component__["a" /* CreateAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shared_components_login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_43__shared_directives_input_switcher_directive__["a" /* InputSwitcherDirective */],
                __WEBPACK_IMPORTED_MODULE_24__pages_checkout_login_checkout_login_component__["a" /* CheckoutLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_checkout_review_checkout_review_component__["a" /* CheckoutReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_checkout_payment_checkout_payment_component__["a" /* CheckoutPaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_54__shared_directives_month_mask_directive__["a" /* MonthMaskDirective */],
                __WEBPACK_IMPORTED_MODULE_26__pages_confirmation_confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_order_history_order_history_component__["a" /* OrderHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_account_layout_account_layout_component__["a" /* AccountLayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_pwa_local_storage__["b" /* LocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_53_ng2_responsive__["ResponsiveModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__utils_constants__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_36__utils_windowref__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_37__services_wp_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_38__services_menu_service_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_39__services_bag_service__["a" /* BagService */], __WEBPACK_IMPORTED_MODULE_40__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_49__local_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_50__local_guards_access_guard__["a" /* AccessGuard */], __WEBPACK_IMPORTED_MODULE_41__local_services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_51__local_guards_order_guard__["a" /* OrderGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/access.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessGuard = /** @class */ (function () {
    function AccessGuard(router, customerService) {
        this.router = router;
        this.customerService = customerService;
    }
    AccessGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.customerService.isLoggedIn().map(function (data) {
            if (data === null || data === undefined) {
                _this.router.navigate(['checkout'], { queryParams: { returnUrl: state.url } });
                return false;
            }
            else {
                return true;
            }
        });
    };
    AccessGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__local_services_customer_service__["a" /* CustomerService */]])
    ], AccessGuard);
    return AccessGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, customerService) {
        this.router = router;
        this.customerService = customerService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.customerService.isLoggedIn().map(function (data) {
            if (data === null || data === undefined) {
                _this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__local_services_customer_service__["a" /* CustomerService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/order.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_order_service__ = __webpack_require__("./src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderGuard = /** @class */ (function () {
    function OrderGuard(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    OrderGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.orderService.hasOrderBeenCreated().map(function (data) {
            if (data === null || data === undefined) {
                _this.router.navigate(['/menu']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    OrderGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__local_services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OrderGuard);
    return OrderGuard;
}());



/***/ }),

/***/ "./src/app/layouts/account-layout/account-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-page-container\">\n    <div class=\"basic-page-content\">\n      <div class=\"account-container center-960\">\n        <div class=\"account-navigation\">\n          <ul>\n            <li><a routerLink=\"/account\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Account</a></li>\n            <li><a routerLink=\"/account/order-history\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Order History</a></li>\n            <li><a href=\"\" (click)=\"logout()\" role=\"button\" class=\"logout-link\">Logout</a></li>\n          </ul>\n        </div>\n        <div class=\"account-details\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/layouts/account-layout/account-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountLayoutComponent = /** @class */ (function () {
    function AccountLayoutComponent(customerService) {
        this.customerService = customerService;
    }
    AccountLayoutComponent.prototype.ngOnInit = function () {
    };
    AccountLayoutComponent.prototype.logout = function () {
        this.customerService.logOut();
    };
    AccountLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-account-layout',
            template: __webpack_require__("./src/app/layouts/account-layout/account-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_customer_service__["a" /* CustomerService */]])
    ], AccountLayoutComponent);
    return AccountLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/main-layout/main-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-menu\" *responsive=\"{ sizes: {min:300, max:768}}\" [ngClass]=\"mobileMenuState\">\n  <ul>\n    <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n    <li *ngFor=\"let item of mainMenuLinks\" [attr.class]=\"item.classes ? item.classes : null\">\n      <a routerLink=\"/{{ item.object_slug }}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">{{ item.title }}</a>\n    </li>\n  </ul>\n</div>\n<div class=\"site-container\" [ngClass]=\"mobileMenuState\" loCalWindowScroll>\n  <div class=\"sticky-header\">\n    <div class=\"menu-container clearfix\">\n      <lo-cal-hamburger (mobileMenuState)=\"toggleMobileMenuState()\" *responsive=\"{ sizes: {min:300, max:768}}\"></lo-cal-hamburger>\n      <ul class=\"menu main-menu\">\n        <li>\n          <h1 class=\"logo\" *ngIf=\"currentUrl?.url == '/'; else regularLink\"><a routerLink=\"/\"><span class=\"visuallyhidden\">Lo•Cal Kitchen</span></a></h1>\n          <ng-template #regularLink>\n            <div class=\"logo\"><a routerLink=\"/\"><span class=\"visuallyhidden\">Lo•Cal Kitchen</span></a></div>\n          </ng-template>\n        </li>\n        <li *ngFor=\"let item of mainMenuLinks\" [attr.class]=\"item.classes ? item.classes : null\">\n          <a routerLink=\"/{{ item.object_slug }}\" routerLinkActive=\"active\">{{ item.title }}</a>\n        </li>\n      </ul>\n      <ul class=\"cart-menu menu\">\n        <li class=\"account-link\">\n          <a routerLink=\"/account\"><span class=\"account-text\">ACCOUNT</span></a>\n        </li>\n        <li class=\"bag-link\">\n          <a tabindex=\"0\" (click)=\"toggleBagState()\" (keyup.enter)=\"toggleBagState()\" title=\"Click to view your bag\">\n            <span class=\"bag-text\">MY BAG</span>\n            <span class=\"cart-number\" [ngClass]=\"numberOfItemsInBag == 0 ? 'hidden' : 'populated'\">{{ numberOfItemsInBag }}</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"main-container\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <lo-cal-footer></lo-cal-footer>\n  <lo-cal-bag [state]=\"bagState\" [bagCount]=\"numberOfItemsInBag\" [bagItems]=\"bagItems\" (bagState)=\"toggleBagState()\"></lo-cal-bag>\n</div>"

/***/ }),

/***/ "./src/app/layouts/main-layout/main-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_bag_service__ = __webpack_require__("./src/app/services/bag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(wpService, bagService, localStorage) {
        this.wpService = wpService;
        this.bagService = bagService;
        this.localStorage = localStorage;
        this.openBag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bagState = 'invisible';
        this._numberOfItemsInBag = 0;
        this._bagItems = [];
        this.mobileMenuState = 'mobileMenuClosed';
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getMenu(2).subscribe(function (m) { return _this.mainMenuLinks = m.items; });
    };
    MainLayoutComponent.prototype.toggleBagState = function () {
        if (this.numberOfItemsInBag > 0) {
            this.bagState = (this.bagState === 'invisible') ? 'visible' : 'invisible';
        }
    };
    MainLayoutComponent.prototype.toggleMobileMenuState = function () {
        this.mobileMenuState = (this.mobileMenuState === 'mobileMenuClosed') ? 'mobileMenuOpen' : 'mobileMenuClosed';
    };
    Object.defineProperty(MainLayoutComponent.prototype, "bagItems", {
        get: function () {
            return this.bagService.itemsInBag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainLayoutComponent.prototype, "numberOfItemsInBag", {
        get: function () {
            return this.bagService.itemCountInBag;
        },
        enumerable: true,
        configurable: true
    });
    MainLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-main-layout',
            template: __webpack_require__("./src/app/layouts/main-layout/main-layout.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wp_service__["a" /* WordpressService */],
            __WEBPACK_IMPORTED_MODULE_2__local_services_bag_service__["a" /* BagService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_pwa_local_storage__["a" /* LocalStorage */]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"account-section\">\n  <div class=\"account-heading\">\n    <h3>Account Details</h3>\n    <a href=\"\" (click)=\"editAccountDetails()\" role=\"button\">{{ editing ? 'Cancel' : 'Edit' }}</a>\n  </div>\n  <form action=\"\" [formGroup]=\"accountForm\" class=\"lo-cal-form\" [ngClass]=\"editing ? 'editing' : 'static'\" (submit)=\"saveAccountDetails(accountForm)\">\n    <div class=\"error-message\" *ngIf=\"errorOccurred\">\n      <p>\n        Something went wrong. Please try again.\n      </p>\n    </div>\n    <div class=\"form-section half-and-half\">\n      <div class=\"form-component form-component-text\">\n        <label for=\"first-name\" class=\"visuallyhidden\">First Name</label>\n        <input type=\"text\" [readonly]=\"!editing\" name=\"first-name\" id=\"first-name\" formControlName=\"first-name\" placeholder=\"First Name*\" [ngClass]=\"{'has-error':!accountForm.controls['first-name'].valid}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['first-name'].valid\">This field is required.</div>\n      </div>\n      <div class=\"form-component form-component-text\">\n        <label for=\"last-name\" class=\"visuallyhidden\">Last Name</label>\n        <input type=\"text\" [readonly]=\"!editing\" name=\"last-name\" id=\"last-name\" formControlName=\"last-name\" placeholder=\"Last Name*\" [ngClass]=\"{'has-error':!accountForm.controls['last-name'].valid}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['last-name'].valid\">This field is required.</div>\n      </div>\n    </div>\n    <div class=\"form-component form-component-email\">\n      <label for=\"email\" class=\"visuallyhidden\">Email</label>\n      <input type=\"text\" [readonly]=\"!editing\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"Email*\" [ngClass]=\"{'has-error':!accountForm.controls['email'].valid}\">\n      <div class=\"error-message\" *ngIf=\"!accountForm.controls['email'].valid\">This field is required.</div>\n    </div>\n    <!-- <div class=\"control-wrapper\" formGroupName=\"full-address\">\n      <div class=\"form-component form-component-text\">\n        <label for=\"address\" class=\"visuallyhidden\">Address</label>\n        <input type=\"text\" [readonly]=\"!editing\" name=\"address\" id=\"address\" formControlName=\"address\" placeholder=\"Address*\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['address'].valid && submittedOnce}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['full-address']['controls']['address'].valid && submittedOnce\">This field is required.</div>\n      </div>\n      <div class=\"form-component form-component-text\">\n        <label for=\"address2\" class=\"visuallyhidden\">Address 2</label>\n        <input type=\"text\" [readonly]=\"!editing\" name=\"address2\" id=\"address2\" formControlName=\"address2\" placeholder=\"Apartment/Suite/Unit/Building (optional)\">\n      </div>\n      <div class=\"form-section thirds\">\n        <div class=\"form-component form-component-text\">\n          <label for=\"city\" class=\"visuallyhidden\">City</label>\n          <input type=\"text\" [readonly]=\"!editing\" name=\"city\" id=\"city\" formControlName=\"city\" placeholder=\"City*\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['city'].valid && submittedOnce}\">\n          <div class=\"error-message\" *ngIf=\"!accountForm.controls['full-address']['controls']['city'].valid && submittedOnce\">This field is required.</div>\n        </div>\n        <div class=\"form-component form-component-select\">\n          <label for=\"state\" class=\"visuallyhidden\">State</label>\n          <select name=\"state\" id=\"state\" formControlName=\"state\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['state'].valid && submittedOnce}\">\n            <option value=\"\">-- Select --</option>\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n        <div class=\"form-component form-component-text\">\n          <label for=\"zip\" class=\"visuallyhidden\">Zip Code</label>\n          <input type=\"text\" [readonly]=\"!editing\" name=\"zip\" id=\"zip\" formControlName=\"zip\" placeholder=\"Zip*\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['zip'].valid && submittedOnce}\">\n          <div class=\"error-message\" *ngIf=\"!accountForm.controls['full-address']['controls']['zip'].valid && submittedOnce\">This field is required.</div>\n          <div class=\"error-message\" *ngIf=\"accountForm.controls['full-address']['controls']['zip'].errors?.pattern && accountForm.controls['full-address']['controls']['zip'].value.length > 5\">Zip code must be only 5 digits.</div>\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"submit red-button full-width-button submit\">\n      <input type=\"submit\" value=\"Save\" *ngIf=\"editing\">\n    </div>\n  </form>\n</div>\n\n<div class=\"account-section\">\n  <div class=\"account-heading\">\n    <h3>Change Password</h3>\n    <a href=\"\" (click)=\"editPassword()\" role=\"button\">{{ editingPassword ? 'Cancel' : 'Edit' }}</a>\n  </div>\n  <form action=\"\" [formGroup]=\"passwordForm\" class=\"lo-cal-form\" [ngClass]=\"editingPassword ? 'editing' : 'static'\" (submit)=\"saveNewPassword(passwordForm)\">\n    <div class=\"form-component form-component-text\">\n      <label for=\"password\" class=\"visuallyhidden\">New Password</label>\n      <input type=\"password\" [readonly]=\"!editingPassword\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"New Password* (8 or more characters)\" [ngClass]=\"{'has-error':!passwordForm.controls['password'].valid && submittedOnce}\">\n      <div class=\"error-message\" *ngIf=\"!passwordForm.controls['password'].valid && submittedOnce\">This field is required.</div>\n      <div class=\"error-message\" *ngIf=\"passwordForm.controls['password'].value.length > 2 && passwordForm.controls['password'].errors?.minlength\">Password must be at least 8 characters, contain at least 1 number, and 1 uppercase character.</div>\n    </div>\n    <div class=\"form-component form-component-text\">\n      <label for=\"confirm-password\" class=\"visuallyhidden\">Confirm Password</label>\n      <input type=\"password\" [readonly]=\"!editingPassword\" name=\"confirm-password\" id=\"confirm-password\" formControlName=\"confirm-password\" placeholder=\"Confirm Password*\" [ngClass]=\"{'has-error':!passwordForm.controls['confirm-password'].valid && submittedOnce}\">\n      <div class=\"error-message\" *ngIf=\"!passwordForm.controls['confirm-password'].valid && submittedOnce\">This field is required.</div>\n      <div class=\"error-message\" *ngIf=\"passwordForm.controls['confirm-password'].errors?.MatchPassword\">Password does not match.</div>\n    </div>\n    <div class=\"form-component form-component-text\" *ngIf=\"editingPassword\">\n      <p></p>\n    </div>\n    <div class=\"form-component form-component-text\">\n      <label for=\"password\" class=\"visuallyhidden\">Security Answer</label>\n      <input type=\"password\" [readonly]=\"!editingPassword\" name=\"security-answer\" id=\"security-answer\" formControlName=\"security-answer\" placeholder=\"Old Password*\" [ngClass]=\"{'has-error':!passwordForm.controls['security-answer'].valid && submittedOnce}\">\n      <div class=\"error-message\" *ngIf=\"!passwordForm.controls['security-answer'].valid && submittedOnce\">This field is required.</div>\n    </div>\n\n    <div class=\"submit red-button full-width-button submit\">\n      <input type=\"submit\" value=\"Save\" *ngIf=\"editingPassword\">\n    </div>\n  </form>\n</div>\n\n<div class=\"account-section\">\n  <h3 class=\"account-heading\">Saved Payments</h3>\n</div>"

/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_utils_passwordmatch__ = __webpack_require__("./src/app/utils/passwordmatch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = /** @class */ (function () {
    function AccountComponent(customerService, localStorage, fb) {
        this.customerService = customerService;
        this.localStorage = localStorage;
        this.fb = fb;
        this.customerId = '';
        this.editing = false;
        this.editingPassword = false;
        this.errorOccurred = false;
        this.submittedOnce = false;
        this.accountForm = fb.group({
            'first-name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'last-name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].email]]
            // 'full-address' : fb.group({
            //   'address' : [null, Validators.required],
            //   'address2' : null,
            //   'city' : [null, Validators.required],
            //   'state' : ['', Validators.required],
            //   'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
            // })
        });
        this.passwordForm = fb.group({
            'password': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)])],
            'confirm-password': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'security-answer': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_4__local_utils_passwordmatch__["a" /* PasswordMatch */].MatchPassword
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get customer ID
        this.localStorage.getItem('user').subscribe(function (customerData) {
            _this.customer = customerData;
            _this.customerId = customerData.CustomerId;
            _this.patchAccountForm(customerData);
        });
    };
    AccountComponent.prototype.patchAccountForm = function (customerData) {
        this.accountForm.patchValue({
            'first-name': customerData.FirstName,
            'last-name': customerData.LastName,
            'email': customerData.EMail
        });
    };
    AccountComponent.prototype.editAccountDetails = function () {
        this.editing = !this.editing;
        // If returning to not editing, replace form with original data
        if (!this.editing)
            this.patchAccountForm(this.customer);
        // Return false to negate clicking an <a> tag
        return false;
    };
    AccountComponent.prototype.editPassword = function () {
        this.editingPassword = !this.editingPassword;
        return false;
    };
    AccountComponent.prototype.saveAccountDetails = function (formData) {
        var _this = this;
        if (formData.valid) {
            var updateCustomer = {
                customer_info: {
                    CustomerId: this.customerId,
                    EMail: formData.controls.email.value,
                    FirstName: formData.controls['first-name'].value,
                    LastName: formData.controls['last-name'].value,
                    Addresses: []
                }
            };
            this.customerService.updateCustomerInfo(updateCustomer).subscribe(function (data) {
                _this.customerService.getCustomerInfo(_this.customerId).subscribe(function (updatedCustomerInfo) {
                    _this.patchAccountForm(updatedCustomerInfo);
                    _this.localStorage.setItem('user', updatedCustomerInfo).subscribe(function () { });
                    _this.editing = false;
                });
            }, function (error) {
                // Update failed for some reason. Show error, return form to initial state
                console.log(error);
                _this.errorOccurred = true;
                _this.patchAccountForm(_this.customer);
            });
        }
    };
    AccountComponent.prototype.saveNewPassword = function (formData) {
        console.log(formData);
        if (formData.valid) {
            var inLoginUpdate = {
                Email: this.customer.EMail,
                OldPassword: formData.controls['old-password'].value,
                NewPassword: formData.controls['new-password'].value
            };
            // Submit password update to API
            // If successful, destroy login session and redirect to login page
        }
        this.editingPassword = false;
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-account',
            template: __webpack_require__("./src/app/pages/account/account.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__ngx_pwa_local_storage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog-post/blog-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-page-container blog-post\">\n  <div class=\"basic-page-content\" *ngIf=\"pageContent\">\n    <div class=\"blog-details center-960\">\n      <h1 [innerHtml]=\"pageContent?.title?.rendered\"></h1>\n      <span class=\"published-date\" *ngIf=\"pageContent?.date\">{{ pageContent?.date | date:'MMMM d yyyy' }}</span><span class=\"category\"></span>\n    </div>\n    <div class=\"featured-image center\" *ngIf=\"featuredImage\">\n      <img [src]=\"featuredImage?.source_url\" [alt]=\"featuredImage?.alt_text\">\n    </div>\n    <div class=\"content center-740\" [innerHtml]=\"pageContent?.content?.rendered | safeHtml\"></div>\n    <div class=\"share-links center-960\">\n      <ul class=\"menu social-menu text-center\">\n        <li class=\"share-text\">\n          Share:\n        </li>\n        <li>\n          <a target=\"_blank\" href=\"http://www.facebook.com\">\n            <span class=\"visuallyhidden\">Share on Facebook</span>\n            <i class=\"fa fa-facebook\"></i>\n          </a>\n        </li>\n        <li>\n          <a target=\"_blank\" href=\"http://twitter.com\">\n            <span class=\"visuallyhidden\">Share on Twitter</span>\n            <i class=\"fa fa-twitter\"></i>\n          </a>\n        </li>\n        <li>\n          <a target=\"_blank\" href=\"http://instagram.com\">\n            <span class=\"visuallyhidden\">Share on Instagram</span>\n            <i class=\"fa fa-instagram\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/blog-post/blog-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogPostComponent = /** @class */ (function () {
    function BlogPostComponent(wordpressService, route) {
        this.wordpressService = wordpressService;
        this.route = route;
    }
    BlogPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = (this.route.snapshot.paramMap.get('post'));
        this.wordpressService.getPostBySlug(slug, 'blog_post').subscribe(function (page) {
            _this.pageContent = page[0];
            if (page[0].featured_media != 0) {
                _this.wordpressService.getMedia(page[0].featured_media).subscribe(function (media) { _this.featuredImage = media; console.log(media); });
            }
            console.log(page);
        });
    };
    BlogPostComponent.prototype.ngOnDestroy = function () { };
    BlogPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-blog-post',
            template: __webpack_require__("./src/app/pages/blog-post/blog-post.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], BlogPostComponent);
    return BlogPostComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-page-container\">\n  <div class=\"basic-page-content\">\n    <div class=\"blog-details center-960 text-center\">\n      <h1>Blogs</h1>\n    </div>\n    <div class=\"featured-image center\" *ngIf=\"featuredImage\">\n      <img [src]=\"featuredImage?.source_url\" [alt]=\"featuredImage?.alt_text\">\n    </div>\n    <div class=\"content center-960\">\n      <div class=\"blog-posts\">\n        <div class=\"post\" *ngFor=\"let post of allBlogPosts\">\n          <div class=\"left\" *ngIf=\"post?.featured_media\">\n            <a [routerLink]=\"[post?.slug]\">\n              <img src=\"{{ post?._embedded | featuredImage: 'blog-preview' }}\" alt=\"{{ post?._embedded | featuredImage: 'alt' }}\">\n            </a>\n          </div>\n          <div class=\"right\">\n            <div class=\"title\" *ngIf=\"post?.title\">{{ post?.title?.rendered }}</div>\n            <div class=\"date\" *ngIf=\"post?.date\"> {{ post?.date | date:'MMMM d, yyyy' }} </div>\n            <div class=\"excerpt\" *ngIf=\"post?.excerpt\" [innerHtml]=\"post?.excerpt?.rendered | safeHtml\"></div>\n            <div class=\"link\" *ngIf=\"post?.slug\">\n              <a [routerLink]=\"[post?.slug]\">Read More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = /** @class */ (function () {
    function BlogComponent(wordpressService) {
        this.wordpressService = wordpressService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordpressService.getCustomPostType('blog_post').subscribe(function (posts) {
            _this.allBlogPosts = posts;
            console.log(posts);
        });
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-blog',
            template: __webpack_require__("./src/app/pages/blog/blog.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__["a" /* WordpressService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/catering/catering.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-landing-page\">\n  <lo-cal-header [featuredImage]=\"featuredImage\" [pageContent]=\"pageContent\"></lo-cal-header>\n  <div class=\"section section-white\">\n    <div class=\"content center\">\n      <div class=\"body center-960\" [innerHtml]=\"pageContent?.content?.rendered | safeHtml\"></div>\n    </div>\n  </div>\n\n  <div class=\"section section-grey catering-columns\" *ngIf=\"acf?.catering_column\">\n    <div class=\"content center\">\n      <h3 class=\"title\" *ngIf=\"acf?.title\" [innerHtml]=\"acf?.title\"></h3>\n      <div class=\"columns\">\n        <div class=\"column\" *ngFor=\"let column of acf?.catering_column\">\n          <div class=\"body\" [innerHtml]=\"column?.catering_column_body | safeHtml\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section section-white\">\n    <div class=\"content center\">\n      <h3>Contact Us for Catering Requests</h3>\n      <form action=\"\" [formGroup]=\"cateringForm\" class=\"lo-cal-form catering-form\">\n        <div class=\"form-section half-and-half\">\n          <div class=\"form-component form-component-text\">\n            <label for=\"full-name\" class=\"visuallyhidden\">Full Name *</label>\n            <input type=\"text\" name=\"full-name\" id=\"full-name\" placeholder=\"Full Name *\" formControlName=\"full-name\" [ngClass]=\"{'has-error':!cateringForm.controls['full-name'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!cateringForm.controls['full-name'].valid && submittedOnce\">This field is required.</div>\n          </div>\n          <div class=\"form-component form-component-text\">\n            <label for=\"phone\" class=\"visuallyhidden\">Phone Number *</label>\n            <input type=\"text\" name=\"phone\" id=\"phone\" placeholder=\"Phone Number *\" formControlName=\"phone\" [ngClass]=\"{'has-error':!cateringForm.controls['phone'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!cateringForm.controls['phone'].valid && submittedOnce\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-section half-and-half\">\n          <div class=\"form-component form-component-email\">\n            <label for=\"email\" class=\"visuallyhidden\">Email *</label>\n            <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email *\" formControlName=\"email\" [ngClass]=\"{'has-error':!cateringForm.controls['email'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!cateringForm.controls['email'].valid && submittedOnce\">This field is required.</div>\n          </div>\n          <div class=\"form-component form-component-text\">\n            <label for=\"service-date\" class=\"visuallyhidden\">Service Date *</label>\n            <input type=\"text\" name=\"service-date\" id=\"service-date\" placeholder=\"Service Date *\" formControlName=\"service-date\" [ngClass]=\"{'has-error':!cateringForm.controls['service-date'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!cateringForm.controls['service-date'].valid && submittedOnce\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-section\">\n          <div class=\"form-component form-component-textarea\">\n            <label for=\"notes\">Notes</label>\n            <textarea name=\"notes\" id=\"notes\" rows=\"4\" formControlName=\"notes\"></textarea>\n          </div>\n        </div>\n        <div class=\"form-actions\">\n          <div class=\"form-submit red-button\">\n            <input type=\"submit\" value=\"Send\" (click)=\"submitForm(cateringForm)\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <lo-cal-image-and-text [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-image-and-text>\n</div>"

/***/ }),

/***/ "./src/app/pages/catering/catering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CateringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CateringComponent = /** @class */ (function () {
    function CateringComponent(wpService, fb) {
        this.wpService = wpService;
        this.fb = fb;
        this.submittedOnce = false;
        this.cateringForm = fb.group({
            'full-name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].email]],
            'service-date': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'notes': null
        });
    }
    CateringComponent.prototype.submitForm = function (formData) {
        this.submittedOnce = true;
    };
    CateringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getCustomPostTypeById('landing_page', 126).subscribe(function (page) {
            _this.pageContent = page;
            _this.acf = page.acf;
            console.log(page.acf);
            if (page.featured_media != 0) {
                _this.wpService.getMedia(page.featured_media).subscribe(function (media) { return _this.featuredImage = media; });
            }
        });
    };
    CateringComponent.prototype.ngOnDestroy = function () { };
    CateringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-catering',
            template: __webpack_require__("./src/app/pages/catering/catering.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__local_services_wp_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], CateringComponent);
    return CateringComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout-login/checkout-login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\">\n  <div class=\"login-container center-960\">\n    <h1 class=\"text-center\">Checkout</h1>\n    <div class=\"checkout-options\">\n      <div class=\"left\">\n        <h2>Login</h2>\n        <lo-cal-login-form></lo-cal-login-form>\n      </div>\n      <div class=\"right\">\n        <div class=\"guest-link\">\n          <form action=\"\" class=\"lo-cal-form\" [formGroup]=\"guestForm\" (submit)=\"checkoutAsGuest(guestForm)\">\n            <div class=\"form-component form-component-text\">\n              <label for=\"first-name\" class=\"visuallyhidden\">First Name</label>\n              <input type=\"text\" name=\"first-name\" id=\"first-name\" placeholder=\"First Name\" formControlName=\"first-name\" [ngClass]=\"{'has-error':!guestForm.controls['first-name'].valid && submittedOnce}\">\n              <div class=\"error-message\" *ngIf=\"!guestForm.controls['first-name'].valid && submittedOnce\">This field is required.</div>\n            </div>\n            <div class=\"form-component form-component-text\">\n              <label for=\"last-name\" class=\"visuallyhidden\">Last Name</label>\n              <input type=\"text\" name=\"last-name\" id=\"last-name\" placeholder=\"Last Name\" formControlName=\"last-name\" [ngClass]=\"{'has-error':!guestForm.controls['last-name'].valid && submittedOnce}\">\n              <div class=\"error-message\" *ngIf=\"!guestForm.controls['last-name'].valid && submittedOnce\">This field is required.</div>\n            </div>\n            <div class=\"form-component form-component-text\">\n              <label for=\"email-address\" class=\"visuallyhidden\">Email</label>\n              <input type=\"text\" name=\"email-address\" id=\"email-address\" placeholder=\"Email\" formControlName=\"email-address\" [ngClass]=\"{'has-error':!guestForm.controls['email-address'].valid && submittedOnce}\">\n              <div class=\"error-message\" *ngIf=\"!guestForm.controls['email-address'].valid && submittedOnce\">This field is required.</div>\n            </div>\n            <div class=\"submit red-button full-width-button\">\n              <input type=\"submit\" value=\"Checkout as Guest\" [disabled]=\"!guestForm.valid\">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/checkout-login/checkout-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_services_order_service__ = __webpack_require__("./src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutLoginComponent = /** @class */ (function () {
    function CheckoutLoginComponent(fb, localStorage, router, route, orderService) {
        this.fb = fb;
        this.localStorage = localStorage;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.returnUrl = '';
        this.submittedOnce = false;
        this.guestForm = fb.group({
            'first-name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'last-name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'email-address': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]]
        });
    }
    CheckoutLoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    CheckoutLoginComponent.prototype.checkoutAsGuest = function (formData) {
        var _this = this;
        if (formData.valid) {
            // Save customer as normal
            var customer_1 = {
                FirstName: formData.controls['first-name'].value,
                LastName: formData.controls['last-name'].value,
                EMail: formData.controls['email-address'].value
            };
            // Redirect to checkout review
            this.localStorage.setItem('user', customer_1).subscribe(function () {
                _this.orderService.customerInfo = customer_1;
                _this.router.navigate([_this.returnUrl]);
            });
        }
    };
    CheckoutLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-checkout-login',
            template: __webpack_require__("./src/app/pages/checkout-login/checkout-login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_pwa_local_storage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__local_services_order_service__["a" /* OrderService */]])
    ], CheckoutLoginComponent);
    return CheckoutLoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout-payment/checkout-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-page-container checkout-review\">\n  <div class=\"basic-page-content center\">\n    <h1>Complete Your Order</h1>\n\n    <div class=\"checkout-wrapper\">\n      <div class=\"left-pane\">\n        <div class=\"step\">\n          <div class=\"inner-step-wrapper\">\n            <div class=\"step-heading\" (click)=\"editSection(1)\">1. Pickup</div>\n            <div class=\"step-wrapper\" [hidden]=\"sectionOpen !== 1\">\n              <form action=\"\" class=\"lo-cal-form\" [formGroup]=\"pickupForm\">\n                <div class=\"response\">\n                  <fieldset>\n                    <legend>How would you like to pickup your order?</legend>\n                    <div class=\"radio-options flex-between\">\n                      <div class=\"option\">\n                        <label for=\"in-store\">\n                          <input type=\"radio\" name=\"pickup-selection\" id=\"in-store\" value=\"1\" formControlName=\"pickup-selection\">\n                          <span class=\"semi-bold\">In Store Pick Up</span>\n                        </label>\n                      </div>\n                      <div class=\"option\">\n                        <label for=\"curbside\">\n                          <input type=\"radio\" name=\"pickup-selection\" id=\"curbside\" value=\"4\" formControlName=\"pickup-selection\">\n                          <span class=\"semi-bold\">Curbside Pickup</span>\n                        </label>\n                      </div>\n                    </div>\n                  </fieldset>\n                  <div class=\"car-options\" *ngIf=\"pickupForm.controls['pickup-selection'].value === '4'\">\n                    <div class=\"form-section half-and-half\">\n                      <div class=\"form-component form-component-text\">\n                        <label for=\"vehicle-make\" class=\"visuallyhidden\">Vehicle Make</label>\n                        <input type=\"text\" name=\"vehicle-make\" id=\"vehicle-make\" formControlName=\"vehicle-make\" placeholder=\"Vehicle Make*\">\n                      </div>\n                      <div class=\"form-component form-component-text\">\n                        <label for=\"vehicle-model\" class=\"visuallyhidden\">Vehicle Model</label>\n                        <input type=\"text\" name=\"vehicle-model\" id=\"vehicle-model\" formControlName=\"vehicle-model\" placeholder=\"Vehicle Model*\">\n                      </div>\n                    </div>\n                    <div class=\"form-section half-and-half\">\n                      <div class=\"form-component form-component-text\">\n                        <label for=\"vehicle-color\" class=\"visuallyhidden\">Vehicle Color</label>\n                        <input type=\"text\" name=\"vehicle-color\" id=\"vehicle-color\" formControlName=\"vehicle-color\" placeholder=\"Vehicle Color*\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"next-step black-button\">\n                  <button [disabled]=\"!pickupForm.valid\"(click)=\"nextStep()\">Next Step</button>\n                </div>\n              </form>\n            </div>\n          </div><!-- /. inner-step-wrapper -->\n        </div><!-- /.step -->\n        <div class=\"step\">\n          <div class=\"inner-step-wrapper\">\n            <div class=\"step-heading\" (click)=\"editSection(2)\">2. Contact Information</div>\n            <div class=\"step-wrapper\" [hidden]=\"sectionOpen !== 2\">\n              <form action=\"\" class=\"lo-cal-form\" [formGroup]=\"contactInfoForm\">\n                <div class=\"form-section half-and-half\">\n                  <div class=\"form-component form-component-text\">\n                    <label for=\"first-name\" class=\"visuallyhidden\">First Name</label>\n                    <input type=\"text\" name=\"first-name\" id=\"first-name\" formControlName=\"first-name\" placeholder=\"First Name*\" [ngClass]=\"{'has-error':!contactInfoForm.controls['first-name'].valid && submittedOnce}\">\n                    <div class=\"error-message\" *ngIf=\"!contactInfoForm.controls['first-name'].valid && submittedOnce\">This field is required.</div>\n                  </div>\n                  <div class=\"form-component form-component-text\">\n                    <label for=\"last-name\" class=\"visuallyhidden\">Last Name</label>\n                    <input type=\"text\" name=\"last-name\" id=\"last-name\" formControlName=\"last-name\" placeholder=\"Last Name*\" [ngClass]=\"{'has-error':!contactInfoForm.controls['last-name'].valid && submittedOnce}\">\n                    <div class=\"error-message\" *ngIf=\"!contactInfoForm.controls['last-name'].valid && submittedOnce\">This field is required.</div>\n                  </div>\n                </div>\n                <div class=\"form-section half-and-half\">\n                  <div class=\"form-component form-component-text\">\n                    <label for=\"phone\" class=\"visuallyhidden\">Phone</label>\n                    <input type=\"text\" name=\"phone\" id=\"phone\" formControlName=\"phone\" placeholder=\"Phone\" [ngClass]=\"{'has-error':!contactInfoForm.controls['phone'].valid && submittedOnce}\">\n                    <div class=\"error-message\" *ngIf=\"!contactInfoForm.controls['phone'].valid && submittedOnce\">This field is required.</div>\n                  </div>\n                  <div class=\"form-component form-component-email\">\n                    <label for=\"email\" class=\"visuallyhidden\">Email</label>\n                    <input type=\"text\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"Email*\" [ngClass]=\"{'has-error':!contactInfoForm.controls['email'].valid && submittedOnce}\">\n                    <div class=\"error-message\" *ngIf=\"!contactInfoForm.controls['email'].valid && submittedOnce\">This field is required.</div>\n                  </div>\n                </div>\n                <div class=\"next-step black-button\">\n                  <button [disabled]=\"!contactInfoForm.valid\"(click)=\"nextStep()\">Next Step</button>\n                </div>\n              </form>\n            </div>\n          </div><!-- /. inner-step-wrapper -->\n        </div><!-- /.step -->\n        <div class=\"step\">\n          <div class=\"inner-step-wrapper\">\n            <div class=\"step-heading\" (click)=\"editSection(3)\">3. Payment</div>\n            <div class=\"step-wrapper\" [hidden]=\"sectionOpen !== 3\">\n              <form action=\"\" class=\"lo-cal-form\" [formGroup]=\"paymentForm\">\n                <div class=\"radio-options flex-between\">\n                  <div class=\"option\">\n                    <label for=\"cc\">\n                      <input type=\"radio\" name=\"payment-choice\" id=\"cc\" value=\"1\" formControlName=\"payment-choice\"  [(ngModel)]=\"paymentChoice\">\n                      <span class=\"semi-bold\">Pay now with a credit card</span>\n                    </label>\n                  </div>\n                  <div class=\"option\">\n                    <label for=\"pay-at-store\">\n                      <input type=\"radio\" name=\"payment-choice\" id=\"pay-at-store\" value=\"2\" formControlName=\"payment-choice\" [(ngModel)]=\"paymentChoice\">\n                      <span class=\"semi-bold\">Pay at the store</span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"new-card-section\" *ngIf=\"paymentForm.controls['payment-choice'].value === '1'\">\n                  <div class=\"form-section half-and-half\">\n                    <div class=\"form-component form-component-text\">\n                      <label for=\"card-number\" class=\"visuallyhidden\">Credit Card Number</label>\n                      <input type=\"text\" name=\"card-number\" id=\"card-number\" formControlName=\"card-number\" placeholder=\"Credit Card Number*\" [ngClass]=\"{'has-error':!paymentForm.controls['card-number'].valid && submittedOnce}\" #ccNumber ([ngModel])=\"cardType\" (ngModelChange)=\"detectCardType(ccNumber.value)\">\n                      <div class=\"card-sprite-wrapper\">\n                        <div class=\"card visa\" [ngClass]=\"activeCardClass === 'visa' ? 'active' : ''\" title=\"Visa\"></div>\n                        <div class=\"card master-card\" [ngClass]=\"activeCardClass === 'master-card' ? 'active' : ''\" title=\"MasterCard\"></div>\n                        <div class=\"card american-express\" [ngClass]=\"activeCardClass === 'american-express' ? 'active' : ''\" title=\"American Express\"></div>\n                        <div class=\"card discover\" [ngClass]=\"activeCardClass === 'discover' ? 'active' : ''\" title=\"Discover\"></div>\n                        <div class=\"card diners-club\" [ngClass]=\"activeCardClass === 'diners-club' ? 'active' : ''\" title=\"Diners Club\"></div>\n                      </div>\n                      <div class=\"error-message\" *ngIf=\"!paymentForm.controls['card-number'].valid && submittedOnce\">This field is required.</div>\n                    </div>\n                    <div class=\"form-component form-component-text\">\n                      <label for=\"last-name\" class=\"visuallyhidden\">Expiration Date</label>\n                      <input type=\"text\" name=\"expiration-date\" id=\"expiration-date\" formControlName=\"expiration-date\" placeholder=\"Expiration Date (mm/yyyy)*\" [ngClass]=\"{'has-error':!paymentForm.controls['expiration-date'].valid && submittedOnce}\" loCalMonthMask>\n                      <div class=\"error-message\" *ngIf=\"!paymentForm.controls['expiration-date'].valid && submittedOnce\">This field is required.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-section half-and-half\">\n                    <div class=\"form-component form-component-text\">\n                      <label for=\"phone\" class=\"visuallyhidden\">Name On Card</label>\n                      <input type=\"text\" name=\"name-on-card\" id=\"name-on-card\" formControlName=\"name-on-card\" placeholder=\"Name on card*\" [ngClass]=\"{'has-error':!paymentForm.controls['name-on-card'].valid && submittedOnce}\">\n                      <div class=\"error-message\" *ngIf=\"!paymentForm.controls['name-on-card'].valid && submittedOnce\">This field is required.</div>\n                    </div>\n                    <div class=\"form-component form-component-email\">\n                      <label for=\"email\" class=\"visuallyhidden\">CVV</label>\n                      <input type=\"text\" name=\"cvv\" id=\"cvv\" formControlName=\"cvv\" placeholder=\"CVV*\" [ngClass]=\"{'has-error':!paymentForm.controls['cvv'].valid && submittedOnce}\">\n                      <div class=\"error-message\" *ngIf=\"!paymentForm.controls['cvv'].valid && submittedOnce\">This field is required.</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"next-step black-button step-4-button\">\n                  <button [disabled]=\"(!paymentForm.valid && paymentChoice !== '2')\"(click)=\"nextStep()\">Next Step</button>\n                </div>\n              </form>\n            </div>\n          </div><!-- /. inner-step-wrapper -->\n        </div><!-- /.step -->\n        <div class=\"step step-4\">\n          <div class=\"inner-step-wrapper\">\n            <div class=\"step-heading\">4. Place Your Order</div>\n            <div class=\"step-wrapper\">\n              <p class=\"question semi-bold\">Your total: {{ currentOrder?.TotalAmount | currency }}</p>\n            </div>\n            <div class=\"red-button small-text\" [ngClass]=\"processing ? 'loading' : ''\">\n              <button [disabled]=\"!pickupForm.valid && !paymentForm.valid && !contactInfoForm.valid\" (click)=\"submitOrder()\">Place Order Now</button>\n            </div>\n            <p class=\"terms-and-conditions small-text\">\n              By placing your order you agree to our Terms of Conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula ac orci sed venenatis. Phasellus venenatis blandit nulla non pretium. Sed id metus non nisi pulvinar dictum.\n            </p>\n          </div><!-- /. inner-step-wrapper -->\n        </div><!-- /.step -->\n      </div><!-- /.left-pane -->\n      <div class=\"order-summary\">\n        <div class=\"itemized-summary\">\n          <h4>Order Summary</h4>\n          <div class=\"item flex-between\" *ngFor=\"let menuItem of orderForDisplay\">\n            <div class=\"item-specifics\">\n              <div class=\"title semi-bold\"><span class=\"quantity\">{{ menuItem?.quantity }} x</span> <span class=\"item-name\">{{ menuItem?.name }}</span></div>\n              <div class=\"additions\" *ngIf=\"menuItem?.modifiers\">\n                <span class=\"modifier\" *ngFor=\"let mod of menuItem?.modifiers\">{{ mod?.name }}</span>\n              </div>\n            </div>\n            <div class=\"item-price\">\n              <span class=\"price\">{{ menuItem?.fullPrice | currency }}</span>\n            </div>\n          </div>\n        </div><!-- /.itemized-summary -->\n        <div class=\"pricing-and-location\">\n          <div class=\"pricing-details\">\n            <div class=\"flex-between subtotal\">\n              <span class=\"label\">Subtotal</span>\n              <span class=\"value\">{{ currentOrder?.SubTotalAmount | currency }}</span>\n            </div>\n            <div class=\"flex-between\">\n              <span class=\"label\">Tax</span>\n              <span class=\"value\">{{ currentOrder?.TaxAmount | currency }}</span>\n            </div>\n            <div class=\"flex-between total\">\n              <span class=\"label semi-bold\">Total</span>\n              <span class=\"value semi-bold\">{{ currentOrder?.TotalAmount | currency }}</span>\n            </div>\n\n            <div class=\"red-button full-width-button small-text\" [ngClass]=\"processing ? 'loading' : ''\">\n              <!-- <button [disabled]=\"!pickupForm.valid && !paymentForm.valid && !contactInfoForm.valid\" (click)=\"submitOrder()\">Place Order Now</button> -->\n              <button (click)=\"submitOrder()\">Place Order Now</button>\n            </div>\n            <p class=\"go-back text-center\">\n              <a href=\"\">or go back to edit your order</a>\n            </p>\n          </div>\n          <div class=\"location-details\">\n            <p class=\"semi-bold\">You are ordering from</p>\n            <h4>Lo·Cal Long Island</h4>\n            <p>\n              The Mall at The Source<br/>\n              1504 Old Country Rd, Westbury, NY 11590\n            </p>\n            <div class=\"map-image\">\n              <img src=\"\" alt=\"\">\n            </div>\n            <p class=\"bold\">\n              Tel: 987-012-2345\n            </p>\n          </div>\n        </div><!-- /.pricing-and-location -->\n\n      </div><!-- /.order-summary -->\n    </div>\n\n  </div><!-- /.basic-page-content -->\n</div><!-- /.checkout-review -->"

/***/ }),

/***/ "./src/app/pages/checkout-payment/checkout-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_order_service__ = __webpack_require__("./src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_credit_card_type__ = __webpack_require__("./node_modules/credit-card-type/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_credit_card_type___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_credit_card_type__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutPaymentComponent = /** @class */ (function () {
    function CheckoutPaymentComponent(orderService, fb, constants, customerService) {
        this.orderService = orderService;
        this.fb = fb;
        this.constants = constants;
        this.customerService = customerService;
        this.submittedOnce = false;
        this.sectionOpen = 1;
        this.paymentChoice = '1';
        this.processing = false;
        this.cardType = undefined;
        this.activeCardClass = '';
        this.contactInfoForm = fb.group({
            'first-name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'last-name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email]],
            'phone': null
        });
        this.paymentForm = fb.group({
            'payment-choice': [this.paymentChoice, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'card-number': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]+$')]],
            'expiration-date': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]{2}\/{1}[0-9]{4}$')]],
            'name-on-card': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'cvv': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]{3,4}$')]],
        });
        this.pickupForm = fb.group({
            'pickup-selection': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'vehicle-make': [null],
            'vehicle-model': [null],
            'vehicle-color': [null]
        });
    }
    CheckoutPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current customer info. Patch contact form
        this.customerService.isLoggedIn().subscribe(function (customer) {
            _this.patchContactForm(customer);
        });
        // Get Full Order Details from API
        this.orderService.getPreSavedOrder().subscribe(function (order) {
            var orderId = order.OrderId;
            _this.orderService.getFullOrderDetails(orderId).subscribe(function (fullOrder) {
                _this.calculateTotal(fullOrder);
                _this.currentOrder = fullOrder;
            });
        });
    };
    CheckoutPaymentComponent.prototype.editSection = function (num) {
        this.sectionOpen = (this.sectionOpen === num) ? -1 : num;
    };
    CheckoutPaymentComponent.prototype.nextStep = function () {
        this.sectionOpen++;
    };
    CheckoutPaymentComponent.prototype.submitOrder = function () {
        var _this = this;
        // 1. Start spinner
        this.processing = true;
        // 2. Retrieve order
        // TEMPORARY
        this.orderService.getPreSavedOrder().subscribe(function (order) {
            var orderId = order.OrderId;
            // Retrieve order again to ensure local storage order wasn't manipulated
            _this.orderService.getFullOrderDetails(orderId).subscribe(function (fullOrder) {
                _this.currentOrder = fullOrder;
                // 3. Construct order with all form details
                _this.constructOrder(fullOrder);
            });
        });
    };
    CheckoutPaymentComponent.prototype.constructOrder = function (order) {
        var orderForApi;
        // If saved card checked
        switch (this.paymentChoice) {
            case '1':
                orderForApi = this.constructClearCreditCardPayment();
                break;
            case '2':
                orderForApi = this.constructPayAtSitePayment();
                break;
        }
        var finalOrderForSubmission = {
            order_submission: orderForApi
        };
        console.log(finalOrderForSubmission);
        // Order object with payment has been created, submit to API
        this.orderService.submitOrder(finalOrderForSubmission, this.currentOrder.OrderId).subscribe(function (orderResults) {
            console.log(orderResults);
        });
    };
    CheckoutPaymentComponent.prototype.constructClearCreditCardPayment = function () {
        var inSubmitOrderInfo = {
            PaymentMethods: {
                PaymentMethod: 1,
                Amount: this.currentOrder.BalanceDueAmount,
                AccountNumber: this.paymentForm.get('card-number').value,
                ExpirationDate: this.paymentForm.get('expiration-date').value,
                SecurityCode: this.paymentForm.get('cvv').value,
                PaymentMethodType: this.cardType,
                ProcessingType: 0
            },
            SendEmail: true
        };
        return inSubmitOrderInfo;
    };
    CheckoutPaymentComponent.prototype.constructPayAtSitePayment = function () {
        var inSubmitOrderInfo = {
            PaymentMethods: {
                PaymentMethod: 2
            },
            SendEmail: true
        };
        return inSubmitOrderInfo;
    };
    CheckoutPaymentComponent.prototype.calculateTotal = function (fullOrder) {
        var orderArray = Array();
        __WEBPACK_IMPORTED_MODULE_6_lodash__["forEach"](fullOrder.LineItems, function (value, key) {
            var initialPrice = value.UnitPrice;
            var addOnPrice = 0;
            var modArray = Array();
            __WEBPACK_IMPORTED_MODULE_6_lodash__["forEach"](value.Modifiers, function (value, key) {
                addOnPrice += (value.ExtendedPrice > 0) ? value.ExtendedPrice : 0;
                var modOject = {
                    'name': value.Name
                };
                modArray.push(modOject);
            });
            var finalPrice = initialPrice + addOnPrice;
            var obj = {
                'name': value.Name,
                'fullPrice': finalPrice,
                'quantity': value.Quantity,
                'modifiers': modArray
            };
            orderArray.push(obj);
        });
        this.orderForDisplay = orderArray;
    };
    CheckoutPaymentComponent.prototype.detectCardType = function (val) {
        var cardType = __WEBPACK_IMPORTED_MODULE_3_credit_card_type__(val);
        this.activeCardClass = (val.length > 0) ? cardType[0].type : '';
        var cardNumber = (val.length > 0) ? this.constants.paymentTypeMap[cardType[0].niceType] : undefined;
        this.cardType = cardNumber;
    };
    CheckoutPaymentComponent.prototype.patchContactForm = function (customer) {
        this.contactInfoForm.patchValue({
            'first-name': customer.FirstName,
            'last-name': customer.LastName,
            'email': customer.EMail
        });
    };
    CheckoutPaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-checkout-payment',
            template: __webpack_require__("./src/app/pages/checkout-payment/checkout-payment.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__local_utils_constants__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_5__local_services_customer_service__["a" /* CustomerService */]])
    ], CheckoutPaymentComponent);
    return CheckoutPaymentComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout-review/checkout-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-page-container checkout-review\">\n  <div class=\"basic-page-content center\">\n    <h1>Review Your Order</h1>\n\n    <div class=\"checkout-wrapper\">\n      <div class=\"left-pane\">\n        <div class=\"items\">\n          <div class=\"review-item-card\">\n            <div class=\"item clearfix\" *ngFor=\"let menuItem of bagItems; let i = index;\">\n              <div class=\"item-review-wrapper\">\n                <div class=\"left image\">\n                  <img src=\"http://via.placeholder.com/200x200\" alt=\"\" class=\"item-image\">\n                  <img src=\"/assets/svgs/delete-cross-icon.svg\" alt=\"X to remove item from cart\" class=\"remove-image\" (click)=\"removeFromBagAtIndex(i)\">\n                </div>\n                <div class=\"bag-detail-card\">\n                  <div class=\"title-container\">\n                      <div class=\"title\">{{ menuItem?.Name }} <span class=\"quantity\">x {{ menuItem?.Quantity }}</span></div>\n                  </div>\n                  <div class=\"ingredients\">\n                    {{ (menuItem?.ShortDescription | allergens)?.description }}\n                  </div>\n                  <div class=\"additions\" *ngIf=\"menuItem?.Modifiers\">\n                    <span class=\"modifier\" *ngFor=\"let mod of menuItem?.Modifiers\">{{ mod?.Name }}</span>\n                  </div>\n                  <div class=\"details-and-edit\">\n                    <div class=\"details\">\n                      <span class=\"price\">{{ menuItem?.ExtendedPrice | currency }}</span>\n                      <span class=\"calories\" *ngIf=\"menuItem?.CaloricValue\"></span>\n                      <span class=\"allergens\" *ngIf=\"(menuItem?.ShortDescription)\">\n                        <span class=\"allergen\" *ngFor=\"let allergen of (menuItem?.ShortDescription | allergens).allergens\">{{ allergen }}</span>\n                      </span>\n                    </div>\n                    <div class=\"edit\">\n                      <a tabindex=\"0\" (click)=\"editItemAtIndex(i)\" (keyup.enter)=\"editItemAtIndex(i)\" role=\"button\">EDIT</a>\n                    </div>\n                  </div><!-- /. details-and-edit -->\n                </div><!-- /.bag-detail-card -->\n              </div><!-- /.item-review-wrapper -->\n              <div class=\"edit-pane\" [hidden]=\"isOpen !== i\">\n                <div class=\"edit-pane-wrapper\">\n                  <div class=\"quantity-selector\">\n                    <div class=\"quantity-changer\">\n                      <span class=\"quantity-text\">Quantity</span>\n                      <span class=\"minus\" (click)=\"decrementQuantity(menuItem)\">-</span>\n                      <span class=\"quantity\">{{ menuItem?.Quantity }}</span>\n                      <span class=\"plus\" (click)=\"incrementQuantity(menuItem)\">+</span>\n                    </div>\n                  </div>\n                  <div class=\"customize-this\">\n                    <p><a routerLink=\"/\">Go back to customize this item</a></p>\n                  </div>\n                </div>\n              </div><!-- /.edit-pane -->\n            </div><!-- /.item -->\n            <div class=\"red-button small-text\">\n              <button (click)=\"putOrder()\" [disabled]=\"!timeForm.valid\">Proceed to Checkout</button>\n              <span class=\"processing\" *ngIf=\"processing\">Please Wait...</span>\n            </div>\n          </div><!-- /.review-item-card -->\n        </div>\n      </div>\n      <div class=\"order-summary\">\n        <div class=\"itemized-summary\">\n          <h4>Order Summary</h4>\n          <div class=\"item flex-between\" *ngFor=\"let menuItem of bagItems\">\n            <div class=\"item-specifics\">\n              <div class=\"title semi-bold\"><span class=\"quantity\">{{ menuItem?.Quantity }} x</span> <span class=\"item-name\">{{ menuItem?.Name }}</span></div>\n              <div class=\"additions\" *ngIf=\"menuItem?.Modifiers\">\n                <span class=\"modifier\" *ngFor=\"let mod of menuItem?.Modifiers\">{{ mod?.Name }}</span>\n              </div>\n            </div>\n            <div class=\"item-price\">\n              <span class=\"price\">{{ menuItem?.ExtendedPrice | currency }}</span>\n            </div>\n          </div>\n          <div class=\"item flex-between\" *ngFor=\"let menuItem of allOrderDetails?.LineItems\">\n            <div class=\"item-specifics\">\n              <div class=\"title semi-bold\"><span class=\"quantity\">{{ menuItem?.Quantity }} x</span> <span class=\"item-name\">{{ menuItem?.Name }}</span></div>\n              <div class=\"additions\" *ngIf=\"menuItem?.Modifiers\">\n                <span class=\"modifier\" *ngFor=\"let mod of menuItem?.Modifiers\">{{ mod?.Name }}</span>\n              </div>\n            </div>\n            <div class=\"item-price\">\n              <span class=\"price\">{{ menuItem?.ExtendedPrice | currency }}</span>\n            </div>\n          </div>\n        </div><!-- /.itemized-summary -->\n        <div class=\"pricing-and-location\">\n          <div class=\"pricing-details\">\n            <form action=\"\" class=\"lo-cal-form\" [formGroup]=\"timeForm\">\n              <label for=\"pickup-time\" class=\"pickup-time-label\">Select a time to pickup your order?</label>\n              <select name=\"pickup-time\"  id=\"pickup-time\" formControlName=\"pickup-time\" class=\"pickup-time\" [(ngModel)]=\"timeSelectBox\" (ngModelChange)=\"timeSelectChanged()\">\n                <option value=\"\">-- Select --</option>\n                <option value=\"next\">Next Available</option>\n              </select>\n            </form>\n\n            <!-- ADD Location to show next-available time before submission -->\n            <div class=\"next-available-time\" *ngIf=\"selectedTime\">\n              <p><strong>Pickup at: </strong>{{ selectedTime | date:\"E MMM d, h:mma\" }}</p>\n            </div>\n\n            <div class=\"red-button full-width-button small-text\">\n              <button (click)=\"putOrder()\" [disabled]=\"!timeForm.valid\">Proceed to Checkout</button>\n              <span class=\"processing\" *ngIf=\"processing\">Please Wait...</span>\n            </div>\n          </div>\n          <div class=\"location-details\">\n            <p class=\"semi-bold\">You are ordering from</p>\n            <h4>Lo·Cal Long Island</h4>\n            <p>\n              The Mall at The Source<br/>\n              1504 Old Country Rd, Westbury, NY 11590\n            </p>\n            <div class=\"map-image\">\n              <img src=\"\" alt=\"\">\n            </div>\n            <p class=\"bold\">\n              Tel: 987-012-2345\n            </p>\n          </div>\n        </div><!-- /.pricing-and-location -->\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/checkout-review/checkout-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_bag_service__ = __webpack_require__("./src/app/services/bag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_services_order_service__ = __webpack_require__("./src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutReviewComponent = /** @class */ (function () {
    function CheckoutReviewComponent(bagService, constants, orderService, router, fb, customerService) {
        this.bagService = bagService;
        this.constants = constants;
        this.orderService = orderService;
        this.router = router;
        this.fb = fb;
        this.customerService = customerService;
        this._bagItems = [];
        this.isOpen = -1;
        this.processing = false;
        this.timeForm = fb.group({
            'pickup-time': ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required]
        });
    }
    CheckoutReviewComponent.prototype.ngOnInit = function () {
        // TODO: Retrieve times on init to populate dropdown
        // this.retrievePickupTimes();
        var _this = this;
        // Need to retrieve current customer so order PUT doesn't fail
        this.customerService.getCurrentCustomer().subscribe(function (customerData) {
            _this.orderService.customerInfo = customerData;
        });
    };
    Object.defineProperty(CheckoutReviewComponent.prototype, "bagItems", {
        get: function () {
            return this.bagService.itemsInBag;
        },
        enumerable: true,
        configurable: true
    });
    CheckoutReviewComponent.prototype.removeFromBagAtIndex = function (index) {
        this.bagService.removeFromBagAtIndex(index);
    };
    CheckoutReviewComponent.prototype.editItemAtIndex = function (newVal) {
        if (this.isOpen === newVal) {
            this.isOpen = -1;
        }
        else {
            this.isOpen = newVal;
        }
        return false;
    };
    CheckoutReviewComponent.prototype.incrementQuantity = function (menuItem) {
        menuItem.Quantity++;
    };
    CheckoutReviewComponent.prototype.decrementQuantity = function (menuItem) {
        if (menuItem.Quantity > 1) {
            menuItem.Quantity--;
        }
    };
    CheckoutReviewComponent.prototype.putOrder = function () {
        var _this = this;
        this.processing = true;
        this.orderService.putOrder(this.bagItems).subscribe(function (response) {
            // TODO: Error checking for other result codes
            if (response.ResultCode === 0) {
                // Save to LocalStorage and route to checkout
                _this.orderService.saveOrderToLocalStorage(response).subscribe(function (result) {
                    if (result) {
                        _this.router.navigate(['/checkout/payment']);
                    }
                });
            }
            else {
                console.log('purOrder: error', response);
            }
        });
    };
    CheckoutReviewComponent.prototype.timeSelectChanged = function () {
        switch (this.timeSelectBox) {
            case 'next':
                this.getNextAvailableTime();
                break;
            default:
                this.selectedTime = this.timeSelectBox;
                break;
        }
    };
    CheckoutReviewComponent.prototype.getNextAvailableTime = function () {
        var _this = this;
        this.orderService.getNextAvailableTime().subscribe(function (nextTime) {
            _this.selectedTime = nextTime;
        });
    };
    CheckoutReviewComponent.prototype.retrievePickupTimes = function () {
        var _this = this;
        this.orderService.retrieveTimes('4').subscribe(function (times) {
            _this.times = times;
        });
    };
    CheckoutReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-checkout-review',
            template: __webpack_require__("./src/app/pages/checkout-review/checkout-review.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_bag_service__["a" /* BagService */],
            __WEBPACK_IMPORTED_MODULE_2__local_utils_constants__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__local_services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__local_services_customer_service__["a" /* CustomerService */]])
    ], CheckoutReviewComponent);
    return CheckoutReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  confirmation works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
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

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-confirmation',
            template: __webpack_require__("./src/app/pages/confirmation/confirmation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-landing-page\">\n  <lo-cal-header [featuredImage]=\"featuredImage\" [pageContent]=\"pageContent\"></lo-cal-header>\n  <div class=\"section section-white\">\n    <div class=\"content center\">\n      <div class=\"body center-960\" [innerHtml]=\"pageContent?.content?.rendered | safeHtml\"></div>\n    </div>\n  </div>\n\n  <div class=\"section section-grey intro-section\" *ngIf=\"acf?.body\">\n    <div class=\"content\">\n      <h3 class=\"title\" *ngIf=\"acf?.title\" [innerHtml]=\"acf?.title\"></h3>\n      <div class=\"body\" *ngIf=\"acf?.body\" [innerHtml]=\"acf?.body | safeHtml\"></div>\n    </div>\n  </div>\n\n  <div class=\"section section-white\">\n    <div class=\"content center\">\n      <form action=\"\" [formGroup]=\"contactForm\" class=\"lo-cal-form\">\n        <div class=\"form-section\">\n          <div class=\"form-component form-component-text\">\n            <label for=\"contact-reason\" class=\"visuallyhidden\">What are you interested in sharing/asking?</label>\n            <input type=\"text\" name=\"contact-reason\" id=\"contact-reason\" formControlName=\"contact-reason\" placeholder=\"What are you interested in sharing/asking?\" [ngClass]=\"{'has-error':!contactForm.controls['contact-reason'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['contact-reason'].valid && submittedOnce\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-section thirds\">\n          <div class=\"form-component form-component-text\">\n            <label for=\"first-name\" class=\"visuallyhidden\">First Name *</label>\n            <input type=\"text\" name=\"first-name\" id=\"first-name\" placeholder=\"First Name *\" formControlName=\"first-name\" [ngClass]=\"{'has-error':!contactForm.controls['first-name'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['first-name'].valid && submittedOnce\">This field is required.</div>\n          </div>\n          <div class=\"form-component form-component-text\">\n            <label for=\"last-name\" class=\"visuallyhidden\">Last Name *</label>\n            <input type=\"text\" name=\"last-name\" id=\"last-name\" placeholder=\"Last Name *\" formControlName=\"last-name\" [ngClass]=\"{'has-error':!contactForm.controls['last-name'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['last-name'].valid && submittedOnce\">This field is required.</div>\n          </div>\n          <div class=\"form-component form-component-email\">\n            <label for=\"email\" class=\"visuallyhidden\">Email *</label>\n            <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email *\" formControlName=\"email\" [ngClass]=\"{'has-error':!contactForm.controls['email'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['email'].valid && submittedOnce\">This field is required.</div>\n          </div>\n        </div>\n        <div class=\"form-section\">\n          <div class=\"form-component form-component-textarea\">\n            <label for=\"comments\">Comments</label>\n            <textarea name=\"comments\" id=\"comments\" rows=\"4\" formControlName=\"comments\"></textarea>\n          </div>\n        </div>\n        <div class=\"form-actions\">\n          <div class=\"form-submit red-button\">\n            <input type=\"submit\" value=\"Send\" (click)=\"submitForm(contactForm)\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n    <lo-cal-image-and-text [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-image-and-text>\n  </div>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_auto_unsubscribe_dist_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/ngx-auto-unsubscribe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(wpService, fb) {
        this.wpService = wpService;
        this.fb = fb;
        this.submittedOnce = false;
        this.contactForm = fb.group({
            'contact-reason': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'first-name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'last-name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email]],
            'comments': null
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getPage(132).subscribe(function (page) {
            _this.pageContent = page;
            _this.acf = page.acf;
            if (page.featured_media != 0) {
                _this.wpService.getMedia(page.featured_media).subscribe(function (media) { return _this.featuredImage = media; });
            }
        });
    };
    ContactComponent.prototype.submitForm = function (formData) {
        this.submittedOnce = true;
        console.log(formData);
    };
    ContactComponent.prototype.ngOnDestroy = function () { };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_auto_unsubscribe_dist_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-contact',
            template: __webpack_require__("./src/app/pages/contact/contact.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__local_services_wp_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-account/create-account.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\">\n  <div class=\"login-container center-740\">\n    <h1 class=\"text-center\">Create an Account</h1>\n    <form action=\"\" [formGroup]=\"accountForm\" class=\"lo-cal-form\">\n      <div class=\"form-section half-and-half\">\n        <div class=\"form-component form-component-text\">\n          <label for=\"first-name\" class=\"visuallyhidden\">First Name</label>\n          <input type=\"text\" name=\"first-name\" id=\"first-name\" formControlName=\"first-name\" placeholder=\"First Name*\" [ngClass]=\"{'has-error':!accountForm.controls['first-name'].valid && submittedOnce}\">\n          <div class=\"error-message\" *ngIf=\"!accountForm.controls['first-name'].valid && submittedOnce\">This field is required.</div>\n        </div>\n        <div class=\"form-component form-component-text\">\n          <label for=\"last-name\" class=\"visuallyhidden\">Last Name</label>\n          <input type=\"text\" name=\"last-name\" id=\"last-name\" formControlName=\"last-name\" placeholder=\"Last Name*\" [ngClass]=\"{'has-error':!accountForm.controls['last-name'].valid && submittedOnce}\">\n          <div class=\"error-message\" *ngIf=\"!accountForm.controls['last-name'].valid && submittedOnce\">This field is required.</div>\n        </div>\n      </div>\n      <div class=\"form-component form-component-email\">\n        <label for=\"email\" class=\"visuallyhidden\">Email</label>\n        <input type=\"text\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"Email*\" [ngClass]=\"{'has-error':!accountForm.controls['email'].valid && submittedOnce}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['email'].valid && submittedOnce\">This field is required.</div>\n      </div>\n      <div class=\"form-component form-component-text\">\n        <label for=\"password\" class=\"visuallyhidden\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"Password* (8 or more characters)\" [ngClass]=\"{'has-error':!accountForm.controls['password'].valid && submittedOnce}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['password'].valid && submittedOnce\">This field is required.</div>\n        <div class=\"error-message\" *ngIf=\"accountForm.controls['password'].value.length > 2 && accountForm.controls['password'].errors?.minlength\">Password must be at least 8 characters.</div>\n      </div>\n      <div class=\"form-component form-component-text\">\n        <label for=\"confirm-password\" class=\"visuallyhidden\">Confirm Password</label>\n        <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" formControlName=\"confirm-password\" placeholder=\"Confirm Password*\" [ngClass]=\"{'has-error':!accountForm.controls['confirm-password'].valid && submittedOnce}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['confirm-password'].valid && submittedOnce\">This field is required.</div>\n        <div class=\"error-message\" *ngIf=\"accountForm.controls['confirm-password'].errors?.MatchPassword\">Password does not match.</div>\n      </div>\n      <div class=\"form-component form-component-text\">\n        <label for=\"security-question\" class=\"visuallyhidden\">Security Question</label>\n        <input type=\"text\" name=\"security-question\" id=\"security-question\" formControlName=\"security-question\" placeholder=\"Security Question*\" [ngClass]=\"{'has-error':!accountForm.controls['security-question'].valid && submittedOnce}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['security-question'].valid && submittedOnce\">This field is required.</div>\n      </div>\n      <div class=\"form-component form-component-text\">\n        <label for=\"security-answer\" class=\"visuallyhidden\">Security Answer</label>\n        <input type=\"text\" name=\"confirm-password\" id=\"security-answer\" formControlName=\"security-answer\" placeholder=\"Security Answer*\" [ngClass]=\"{'has-error':!accountForm.controls['security-answer'].valid && submittedOnce}\">\n        <div class=\"error-message\" *ngIf=\"!accountForm.controls['security-answer'].valid && submittedOnce\">This field is required.</div>\n      </div>\n      <!-- <div class=\"control-wrapper\" formGroupName=\"full-address\">\n        <div class=\"form-component form-component-text\">\n          <label for=\"address\" class=\"visuallyhidden\">Address</label>\n          <input type=\"text\" name=\"address\" id=\"address\" formControlName=\"address\" placeholder=\"Address*\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['address'].valid && submittedOnce}\">\n          <div class=\"error-message\" *ngIf=\"!accountForm.controls['full-address']['controls']['address'].valid && submittedOnce\">This field is required.</div>\n        </div>\n        <div class=\"form-component form-component-text\">\n          <label for=\"address2\" class=\"visuallyhidden\">Address 2</label>\n          <input type=\"text\" name=\"address2\" id=\"address2\" formControlName=\"address2\" placeholder=\"Apartment/Suite/Unit/Building (optional)\">\n        </div>\n        <div class=\"form-section thirds\">\n          <div class=\"form-component form-component-text\">\n            <label for=\"city\" class=\"visuallyhidden\">City</label>\n            <input type=\"text\" name=\"city\" id=\"city\" formControlName=\"city\" placeholder=\"City*\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['city'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!accountForm.controls['full-address']['controls']['city'].valid && submittedOnce\">This field is required.</div>\n          </div>\n          <div class=\"form-component form-component-select\">\n            <label for=\"state\" class=\"visuallyhidden\">State</label>\n            <select name=\"state\" id=\"state\" formControlName=\"state\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['state'].valid && submittedOnce}\">\n              <option value=\"\" selected=\"selected\">-- Select --</option>\n              <option value=\"AL\">Alabama</option>\n              <option value=\"AK\">Alaska</option>\n              <option value=\"AZ\">Arizona</option>\n              <option value=\"AR\">Arkansas</option>\n              <option value=\"CA\">California</option>\n              <option value=\"CO\">Colorado</option>\n              <option value=\"CT\">Connecticut</option>\n              <option value=\"DE\">Delaware</option>\n              <option value=\"DC\">District Of Columbia</option>\n              <option value=\"FL\">Florida</option>\n              <option value=\"GA\">Georgia</option>\n              <option value=\"HI\">Hawaii</option>\n              <option value=\"ID\">Idaho</option>\n              <option value=\"IL\">Illinois</option>\n              <option value=\"IN\">Indiana</option>\n              <option value=\"IA\">Iowa</option>\n              <option value=\"KS\">Kansas</option>\n              <option value=\"KY\">Kentucky</option>\n              <option value=\"LA\">Louisiana</option>\n              <option value=\"ME\">Maine</option>\n              <option value=\"MD\">Maryland</option>\n              <option value=\"MA\">Massachusetts</option>\n              <option value=\"MI\">Michigan</option>\n              <option value=\"MN\">Minnesota</option>\n              <option value=\"MS\">Mississippi</option>\n              <option value=\"MO\">Missouri</option>\n              <option value=\"MT\">Montana</option>\n              <option value=\"NE\">Nebraska</option>\n              <option value=\"NV\">Nevada</option>\n              <option value=\"NH\">New Hampshire</option>\n              <option value=\"NJ\">New Jersey</option>\n              <option value=\"NM\">New Mexico</option>\n              <option value=\"NY\">New York</option>\n              <option value=\"NC\">North Carolina</option>\n              <option value=\"ND\">North Dakota</option>\n              <option value=\"OH\">Ohio</option>\n              <option value=\"OK\">Oklahoma</option>\n              <option value=\"OR\">Oregon</option>\n              <option value=\"PA\">Pennsylvania</option>\n              <option value=\"RI\">Rhode Island</option>\n              <option value=\"SC\">South Carolina</option>\n              <option value=\"SD\">South Dakota</option>\n              <option value=\"TN\">Tennessee</option>\n              <option value=\"TX\">Texas</option>\n              <option value=\"UT\">Utah</option>\n              <option value=\"VT\">Vermont</option>\n              <option value=\"VA\">Virginia</option>\n              <option value=\"WA\">Washington</option>\n              <option value=\"WV\">West Virginia</option>\n              <option value=\"WI\">Wisconsin</option>\n              <option value=\"WY\">Wyoming</option>\n            </select>\n          </div>\n          <div class=\"form-component form-component-text\">\n            <label for=\"zip\" class=\"visuallyhidden\">Zip Code</label>\n            <input type=\"text\" name=\"zip\" id=\"zip\" formControlName=\"zip\" placeholder=\"Zip*\" [ngClass]=\"{'has-error':!accountForm.controls['full-address']['controls']['zip'].valid && submittedOnce}\">\n            <div class=\"error-message\" *ngIf=\"!accountForm.controls['full-address']['controls']['zip'].valid && submittedOnce\">This field is required.</div>\n            <div class=\"error-message\" *ngIf=\"accountForm.controls['full-address']['controls']['zip'].errors?.pattern && accountForm.controls['full-address']['controls']['zip'].value.length > 5\">Zip code must be only 5 digits.</div>\n          </div>\n        </div>\n      </div> -->\n\n      <div class=\"submit red-button full-width-button\">\n        <input type=\"submit\" value=\"Create Account\" (click)=\"submitForm(accountForm)\">\n      </div>\n      <div class=\"account-actions\">\n        <div class=\"action\">\n          <a routerLink=\"/login\">Already have an account? Sign In.</a>\n        </div>\n        <div class=\"action\">\n          <a routerLink=\"/password-reset\">Forgot Password</a>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/create-account/create-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_utils_passwordmatch__ = __webpack_require__("./src/app/utils/passwordmatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(fb, customerService, route, router) {
        this.fb = fb;
        this.customerService = customerService;
        this.route = route;
        this.router = router;
        this.submittedOnce = false;
        this.redirectUrl = '';
        this.accountForm = fb.group({
            'first-name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'last-name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)]],
            'confirm-password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'security-question': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'security-answer': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_2__local_utils_passwordmatch__["a" /* PasswordMatch */].MatchPassword
        });
    }
    /**
     * REMOVED: Address info not needed for any transactional part of the process
     */
    // 'full-address' : fb.group({
    //   'address' : [null, Validators.required],
    //   'address2' : null,
    //   'city' : [null, Validators.required],
    //   'state' : ['', Validators.required],
    //   'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    // })
    CreateAccountComponent.prototype.ngOnInit = function () {
        this.redirectUrl = (typeof this.route.snapshot.queryParams['returnUrl'] !== undefined) ? this.route.snapshot.queryParams['returnUrl'] : '';
    };
    CreateAccountComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.submittedOnce = true;
        // Set up customer object for submission to API
        if (form.valid) {
            var registration = {
                customer_info: {
                    Customer: {
                        EMail: form.controls.email.value,
                        FirstName: form.controls['first-name'].value,
                        LastName: form.controls['last-name'].value,
                        Addresses: []
                    },
                    Password: form.controls['password'].value,
                    SecurityQuestion: form.controls['security-question'].value,
                    SecurityAnswer: form.controls['security-answer'].value
                }
            };
            this.customerService.createCustomer(registration).subscribe(function (data) {
                // handle successful return of account created
                // redirect to appropriate location
                if (_this.redirectUrl !== '') {
                    // Need to set logged in status
                    _this.router.navigate([_this.redirectUrl]);
                }
                else {
                    // Should I set logged in status immediately or no?
                    _this.router.navigate(['/']);
                }
            });
        }
    };
    CreateAccountComponent.prototype.trimString = function (str) {
        return str.trim();
    };
    CreateAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-create-account',
            template: __webpack_require__("./src/app/pages/create-account/create-account.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__local_services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home page-front\">\n\n    <header class=\"header-container\">\n      <div class=\"content\" [ngStyle]=\"{'background-image':'url(' + featuredImage?.source_url + ')'}\">\n        <div class=\"header-content center-1440 clearfix\">\n          <div class=\"wysiwyg-content\">\n              <h2 [innerHtml]=\"pageContent?.title?.rendered\"></h2>\n              <div [innerHtml]=\"pageContent?.content?.rendered\"></div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n  <div class=\"content-container\">\n\n    <lo-cal-intro-section [acf]=\"acf\"></lo-cal-intro-section>\n\n    <lo-cal-title-body-images [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-title-body-images>\n\n    <div class=\"section section-white our-menu\">\n      <div class=\"content text-center\">\n        <h3 class=\"title\" [innerHtml]=\"acf?.menu_title\"></h3>\n        <p class=\"body center-740 text-center\" [innerHtml]=\"acf?.menu_description\"></p>\n        <div class=\"menu-items center-1440\">\n          <div class=\"item item-{{ i+1 }}\" *ngFor=\"let item of acf?.menu_items; let i = index\">\n            <div class=\"item-wrapper text-center\">\n              <div class=\"image\"><img *ngIf=\"item?.image?.url\" [src]=\"item?.image?.url\" [alt]=\"item?.image?.alt\"></div>\n              <div class=\"title\" *ngIf=\"item?.item_title\">{{ item?.item_title }}</div>\n            </div>\n          </div>\n        </div><!-- /.menu-items -->\n        <div class=\"link red-button\"><a routerLink=\"/menu\">View the Full Menu</a></div>\n      </div>\n    </div><!-- /.out-menu -->\n\n    <div class=\"section section-grey app-ad\">\n      <div class=\"content center\">\n        <div class=\"left\">\n          <div class=\"inner-content\">\n            <h4 class=\"title\" [innerHtml]=\"acf?.mobile_order_title\"></h4>\n            <div class=\"body\">\n              <p [innerHtml]=\"acf?.mobile_ordering_text\"></p>\n              <div class=\"app-downloads\" *ngIf=\"acf?.ios_app_link && acf?.android_app_link\">\n                <a [href]=\"acf?.ios_app_link\"><img *ngIf=\"acf?.ios_app_store_image?.url\" [src]=\"acf?.ios_app_store_image?.url\" [alt]=\"acf?.ios_app_store_image?.alt\" /></a>\n                <a [href]=\"acf?.android_app_link\"><img *ngIf=\"acf?.android_app_store_image?.url\" [src]=\"acf?.android_app_store_image?.url\" [alt]=\"acf?.android_app_store_image?.alt\" /></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div><!-- /.app-ad -->\n\n    <lo-cal-image-and-text [acf]=\"acf\"></lo-cal-image-and-text>\n\n  </div>\n</div><!-- /.home -->"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(wpService) {
        this.wpService = wpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getPage(4).subscribe(function (page) {
            _this.pageContent = page;
            _this.acf = page.acf;
            if (page.featured_media != 0) {
                _this.wpService.getMedia(page.featured_media).subscribe(function (media) { return _this.featuredImage = media; });
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wp_service__["a" /* WordpressService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\">\n  <div class=\"login-container center-400\">\n    <h1 class=\"text-center\">Welcome</h1>\n    <lo-cal-login-form></lo-cal-login-form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu-customize/menu-customize.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-item-detail\">\n  <div class=\"menu-item-header\">\n    <h1 class=\"title\">{{ menuItemDetails?.item?.Name }}</h1>\n    <img src=\"//via.placeholder.com/1400x515\" alt=\"Image of food\">\n  </div>\n\n  <div class=\"customization-container center-1440\">\n    <div class=\"left customization-options\">\n\n      <div class=\"customization-category\" *ngFor=\"let modGroup of salesItemDetails?.ModGroups\">\n        <div class=\"content\">\n          <div class=\"header\">\n            <span class=\"title\">{{ modGroup?.DisplayName }}</span>\n            <span class=\"choices\">Choose up to {{ modGroup?.MaximumItems }} ({{ customizationData[modGroup?.$id].currentlySelected.length }}/{{ modGroup?.MaximumItems }})</span>\n          </div>\n          <div class=\"options\" *ngFor=\"let modifier of modGroup?.Mods\">\n            <div class=\"option\">\n              <div class=\"ingredient\">{{ modifier?.Name }}</div>\n              <div class=\"calories\">{{ modifier?.ItemModifiers[0]?.CaloricValue }} <span *ngIf=\"modifier?.ItemModifiers[0]?.CaloricValue !== null\">cal</span> </div>\n              <div class=\"choice-controls\">\n                <span class=\"minus\" [ngClass]=\"(customizationData[modGroup?.$id].currentlySelected.length > 0 && customizationData[modGroup?.$id].modifiers[modifier?.$id].quantity > 0) ? 'enabled' : 'disabled'\" (click)=\"removeModifier(modGroup, modifier)\">-</span>\n                <span class=\"quantity-container\" [ngClass]=\"customizationData[modGroup?.$id].modifiers[modifier?.$id]?.quantity > 0 ? 'populated' : ''\">\n                  <span class=\"quantity\" *ngIf=\"customizationData[modGroup?.$id].modifiers[modifier?.$id]?.quantity !== 0\">\n                    {{ customizationData[modGroup?.$id].modifiers[modifier?.$id]?.quantity }}\n                  </span>\n                </span>\n                <span class=\"plus\" [ngClass]=\"(customizationData[modGroup?.$id].currentlySelected.length < modGroup?.MaximumItems) ? 'enabled' : 'disabled'\" (click)=\"addModifier(modGroup, modifier)\">+</span>\n              </div>\n            </div><!-- /.option -->\n          </div>\n        </div>\n      </div><!-- /.customization-category -->\n\n    </div><!-- /.left.customization-options -->\n    <div class=\"right\">\n      <div class=\"final-product\">\n        <div class=\"title\">{{ menuItemDetails?.item?.Name }}</div>\n        <div class=\"ingredients\" *ngIf=\"menuItemDetails?.item?.Description\">\n          <div class=\"customization-ingredients\" *ngIf=\"customizationData\">\n            <!-- <span class=\"customization\" *ngFor=\"let item of customizationData\">{{ item }}</span> -->\n          </div>\n          {{ (menuItemDetails?.item?.Description | allergens)?.description }}\n        </div>\n        <div class=\"fine-details\">\n          <span class=\"price\">{{ salesItemDetails?.Price | currency }}</span>\n          <span class=\"calories\" *ngIf=\"salesItemDetails?.CaloricValue !== null\">{{ calorieCount }} cal</span>\n          <span class=\"allergens\" *ngIf=\"(menuItemDetails?.item?.Description)\">\n            <span class=\"allergen\" *ngFor=\"let allergen of (menuItemDetails?.item?.Description | allergens).allergens\">{{ allergen }}</span>\n          </span>\n        </div>\n      </div><!-- /.final-product -->\n\n      <div class=\"special-instructions\">\n        <label for=\"special-instructions\">Add Special Instruction (optional)</label>\n        <textarea name=\"special-instructions\" id=\"\" cols=\"30\" rows=\"5\" [(ngModel)]=\"specialInstructions\"></textarea>\n      </div><!-- /.special-instructions -->\n\n      <div class=\"quantity-wrapper\">\n        <div class=\"text\">Quantity</div>\n        <div class=\"quantity-changer\">\n          <span class=\"minus\" (click)=\"decrementQuantity()\">-</span>\n          <span class=\"quantity\">{{ quantity }}</span>\n          <span class=\"plus\" (click)=\"incrementQuantity()\">+</span>\n        </div>\n      </div>\n\n      <div class=\"add-button red-button\">\n        <button *ngIf=\"totalPrice\" (click)=\"addToBag()\">Add to Bag (+{{ totalPrice | currency }})</button>\n      </div>\n    </div><!-- /.right -->\n  </div>\n</div><!-- /.page-item-detail -->"

/***/ }),

/***/ "./src/app/pages/menu-customize/menu-customize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCustomizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_menu_service_service__ = __webpack_require__("./src/app/services/menu-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_services_bag_service__ = __webpack_require__("./src/app/services/bag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuCustomizeComponent = /** @class */ (function () {
    function MenuCustomizeComponent(wpService, menuService, bagService, router) {
        this.wpService = wpService;
        this.menuService = menuService;
        this.bagService = bagService;
        this.router = router;
        this.quantity = 1;
        this._calorieCount = 0;
    }
    MenuCustomizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = (this.router.snapshot.paramMap.get('item'));
        this.wpService.getPostBySlug(slug, 'menu_item').subscribe(function (_item) {
            var menuItemId = _item[0].acf.menuid;
            _this.getMenuItemDetails(menuItemId);
        });
    };
    MenuCustomizeComponent.prototype.addModifier = function (modGroup, modifierClicked) {
        // Retrieve maxSelections for Modifier Group and if any are currently selected
        var maxSelectionsForGroup = modGroup.MaximumItems;
        var currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];
        // If max selections for the current group is not reached
        if (currentSelectionsArray.length < maxSelectionsForGroup) {
            this.customizationData[modGroup.$id]['currentlySelected'].push(modifierClicked);
            this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] += 1;
            // If modifier item has modifier values with it
            if (modifierClicked.ItemModifiers.length > 0) {
                // Add to total calorie count
                this.calorieCount += modifierClicked.ItemModifiers[0].CaloricValue;
                // If modifier includes additional price, add to itemPrice
                this.itemPrice += modifierClicked.ItemModifiers[0].Price;
                this.recalculateCost();
            }
        }
        else {
            console.log('selection for current category full');
        }
        console.log(this.customizationData);
    };
    MenuCustomizeComponent.prototype.removeModifier = function (modGroup, modifierClicked) {
        var currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];
        // If max selections for the current group is not reached
        if (currentSelectionsArray.length > 0) {
            var indexToRemove = __WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](currentSelectionsArray, { '$id': modifierClicked.$id });
            var currentQuantity = this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'];
            if (indexToRemove > -1 && currentQuantity > 0) {
                var newSelectionsArray = currentSelectionsArray.splice(indexToRemove, 1);
                currentSelectionsArray = newSelectionsArray;
                this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] -= 1;
            }
            // Subract from calorie count if the modifier has calorie changes
            if (modifierClicked.ItemModifiers.length > 0) {
                this.calorieCount -= modifierClicked.ItemModifiers[0].CaloricValue;
                // If modifier includes additional price, remove from price
                this.itemPrice -= modifierClicked.ItemModifiers[0].Price;
                this.recalculateCost();
            }
        }
        else {
            console.log('selection for current category already empty');
        }
        console.log(this.customizationData);
    };
    MenuCustomizeComponent.prototype.incrementQuantity = function () {
        this.quantity++;
        this.recalculateCost();
    };
    MenuCustomizeComponent.prototype.decrementQuantity = function () {
        if (this.quantity > 1) {
            this.quantity--;
            this.recalculateCost();
        }
    };
    MenuCustomizeComponent.prototype.addToBag = function () {
        // Adding to bag needs to have all details of modifications
        //  Start simple. Add just the item itself
        var menuItem = {};
        menuItem = this.menuItemDetails;
        // add quantity and totalPrice to object
        var quantity = this.quantity;
        var totalPrice = this.totalPrice;
        menuItem['Quantity'] = quantity;
        menuItem['TotalPrice'] = totalPrice;
        menuItem['Modifiers'] = __WEBPACK_IMPORTED_MODULE_5_lodash__["values"](this.customizationData);
        // Push full object to bag service
        this.bagService.createLineItem(menuItem);
        // Wipe out local values
        menuItem = null;
        quantity = null;
        totalPrice = null;
    };
    MenuCustomizeComponent.prototype.recalculateCost = function () {
        this.totalPrice = this.itemPrice * this.quantity;
    };
    MenuCustomizeComponent.prototype.getMenuItemDetails = function (_menuItemId) {
        var _this = this;
        this.menuService.getMenuItemDetails(_menuItemId).subscribe(function (_menuItemDetails) {
            // Set necessary variables for template rendering
            _this.menuItemDetails = _menuItemDetails;
            // Find default Sales Item Id
            _this.defaultItemId = _menuItemDetails['item']['DefaultItemId'];
            // Using default Sales Item Id, return object with all details of that Sales Item
            _this.salesItemDetails = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](_menuItemDetails['salesItems'], { 'SalesItemId': _this.defaultItemId });
            _this.itemPrice = _this.salesItemDetails['Price'];
            _this.calorieCount = _this.salesItemDetails.CaloricValue;
            // Calculate initial cost based on initial quantity of 1
            _this.recalculateCost();
            /**
             * NEED TO SET A LOT OF VARIABLES HERE FOR CUSTOMIZATION
             *  MOSTLY FOR CREATE YOUR OWN VARIETY OPTIONS
             *
             * 1) DOES ITEM HAVE MODIFIERS AT ALL. IF NOT SKIP EVERYTHING
             * */
            var defaults = [];
            if (_this.salesItemDetails.ModGroups.length > 0) {
                // Does the sales item have defaults?
                if (_this.salesItemDetails.DefaultOptions.length > 0) {
                    defaults = _this.salesItemDetails.DefaultOptions;
                }
                _this.registerCustomizationVariables(_this.salesItemDetails.ModGroups, defaults);
            }
        });
    };
    MenuCustomizeComponent.prototype.registerCustomizationVariables = function (allModifiers, defaultOptions) {
        if (defaultOptions === void 0) { defaultOptions = []; }
        var tempObj = new Object();
        var defaultsArray = new Array();
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](allModifiers, function (modifierGroup, modGroupKey) {
            // Create new object to store values in
            var modObject = new Object();
            modObject['maximumItems'] = modifierGroup.MaximumItems;
            modObject['minimumItems'] = modifierGroup.MaximumItems;
            modObject['currentlySelected'] = new Array;
            modObject['modifiers'] = new Object();
            modObject['groupDetails'] = new Object();
            __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](modifierGroup.Mods, function (modifier, key) {
                modObject['groupDetails'] = modifierGroup;
                modObject['modifiers'][modifier.$id] = new Object();
                var isModDefault = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](defaultOptions, { 'ModifierId': modifier.ModifierId });
                if (isModDefault !== undefined) {
                    modObject['modifiers'][modifier.$id]['quantity'] = isModDefault.DefaultQuantity;
                    modObject['currentlySelected'].push(modifier);
                }
                else {
                    modObject['modifiers'][modifier.$id]['quantity'] = 0;
                }
            });
            tempObj[modifierGroup.$id] = new Object();
            tempObj[modifierGroup.$id] = modObject;
        });
        this.customizationData = tempObj;
    };
    Object.defineProperty(MenuCustomizeComponent.prototype, "calorieCount", {
        /**
         *
         * Getters & Setters
         *
         */
        get: function () {
            return this._calorieCount;
        },
        set: function (calories) {
            this._calorieCount = calories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuCustomizeComponent.prototype, "totalPrice", {
        get: function () {
            return this._totalPrice;
        },
        set: function (price) {
            this._totalPrice = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuCustomizeComponent.prototype, "itemPrice", {
        get: function () {
            return this._itemPrice;
        },
        set: function (price) {
            this._itemPrice = price;
        },
        enumerable: true,
        configurable: true
    });
    MenuCustomizeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-menu-customize',
            template: __webpack_require__("./src/app/pages/menu-customize/menu-customize.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__["a" /* WordpressService */],
            __WEBPACK_IMPORTED_MODULE_2__local_services_menu_service_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_3__local_services_bag_service__["a" /* BagService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], MenuCustomizeComponent);
    return MenuCustomizeComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-landing-page\">\n  <lo-cal-header [featuredImage]=\"featuredImage\" [pageContent]=\"pageContent\"></lo-cal-header>\n\n  <div class=\"menu-menu\">\n    <ul class=\"menu\">\n        <li class=\"item-{{ i+1 }}\" *ngFor=\"let item of subMenus; let i = index\"><a href=\"#\">{{ item?.Name }}</a></li>\n    </ul>\n  </div>\n\n  <!-- MENU PLACEHOLDER LAYOUT HTML -->\n  <div class=\"section menu-categories center\">\n    <div class=\"content\">\n      <div class=\"menu-items category-featured\">\n\n        <div class=\"item item-{{ i+1 }}\" *ngFor=\"let menuItem of subMenus; let i = index\">\n          <div class=\"item-wrapper text-center\">\n            <a routerLink=\"{{ menuItem?.slug }}\" (click)=\"setMenuId(menuItem?.acf?.submenuid)\">\n              <div class=\"image\"><img src=\"//via.placeholder.com/200x200\"></div>\n              <div class=\"title\" [innerHtml]=\"menuItem?.title?.rendered | safeHtml\"></div>\n            </a>\n          </div>\n        </div>\n\n      </div><!-- /.menu-cards -->\n    </div>\n  </div>\n  <!-- MENU PLACEHOLDER LAYOUT HTML -->\n\n</div>"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service_service__ = __webpack_require__("./src/app/services/menu-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPageComponent = /** @class */ (function () {
    function MenuPageComponent(wpService, menuService) {
        this.wpService = wpService;
        this.menuService = menuService;
    }
    MenuPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getPage(103).subscribe(function (_page) {
            _this.pageContent = _page;
            _this.acf = _page.acf;
            _this.featuredImage = _page._embedded['wp:featuredmedia'][0].media_details.sizes.full;
        });
        this.wpService.getCustomPostType('menu_categories', 30).subscribe(function (_subMenus) {
            _this.subMenus = _subMenus;
        });
    };
    MenuPageComponent.prototype.ngOnDestroy = function () { };
    MenuPageComponent.prototype.setMenuId = function (id) {
        this.menuService.menuItemId = id;
    };
    MenuPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-menu',
            template: __webpack_require__("./src/app/pages/menu/menu.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wp_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_2__services_menu_service_service__["a" /* MenuService */]])
    ], MenuPageComponent);
    return MenuPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-history/order-history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/order-history/order-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
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

var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-order-history',
            template: __webpack_require__("./src/app/pages/order-history/order-history.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/our-food/our-food.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-landing-page\">\n  <lo-cal-header [featuredImage]=\"featuredImage\" [pageContent]=\"pageContent\"></lo-cal-header>\n  <div class=\"section section-white\">\n    <div class=\"content center\">\n      <div class=\"body center-740\" [innerHtml]=\"pageContent?.content?.rendered | safeHtml\"></div>\n    </div>\n  </div>\n\n  <lo-cal-intro-section [acf]=\"acf\" [color]=\"'white'\"></lo-cal-intro-section>\n\n  <lo-cal-title-body-images [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-title-body-images>\n\n  <lo-cal-image-and-text [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-image-and-text>\n</div>"

/***/ }),

/***/ "./src/app/pages/our-food/our-food.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurFoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OurFoodComponent = /** @class */ (function () {
    function OurFoodComponent(wpService) {
        this.wpService = wpService;
    }
    OurFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getCustomPostTypeById('landing_page', 98).subscribe(function (page) {
            _this.pageContent = page;
            _this.acf = page.acf;
            if (page.featured_media != 0) {
                _this.wpService.getMedia(page.featured_media).subscribe(function (media) { return _this.featuredImage = media; });
            }
        });
    };
    OurFoodComponent.prototype.ngOnDestroy = function () {
    };
    OurFoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-our-food',
            template: __webpack_require__("./src/app/pages/our-food/our-food.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wp_service__["a" /* WordpressService */]])
    ], OurFoodComponent);
    return OurFoodComponent;
}());



/***/ }),

/***/ "./src/app/pages/our-story/our-story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-landing-page\">\n    <lo-cal-header [featuredImage]=\"featuredImage\" [pageContent]=\"pageContent\"></lo-cal-header>\n\n    <lo-cal-intro-section [acf]=\"acf\" [color]=\"'white'\"></lo-cal-intro-section>\n\n    <lo-cal-title-body-images [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-title-body-images>\n\n    <div class=\"background-section section section-white eating-well\">\n      <div class=\"content center\">\n        <div class=\"body\" [innerHtml]=\"acf?.text\"></div>\n      </div>\n    </div>\n\n    <lo-cal-image-and-text [acf]=\"acf\" [color]=\"'grey'\"></lo-cal-image-and-text>\n</div>"

/***/ }),

/***/ "./src/app/pages/our-story/our-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OurStoryComponent = /** @class */ (function () {
    function OurStoryComponent(wpService) {
        this.wpService = wpService;
    }
    OurStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getCustomPostTypeById('landing_page', 80).subscribe(function (page) {
            _this.pageContent = page;
            _this.acf = page.acf;
            if (page.featured_media != 0) {
                _this.wpService.getMedia(page.featured_media).subscribe(function (media) { return _this.featuredImage = media; });
            }
        });
    };
    OurStoryComponent.prototype.ngOnDestroy = function () {
    };
    OurStoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-our-story',
            template: __webpack_require__("./src/app/pages/our-story/our-story.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wp_service__["a" /* WordpressService */]])
    ], OurStoryComponent);
    return OurStoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-page-container\">\n  <div class=\"basic-page-content center-740\" *ngIf=\"pageContent\">\n    <h1 class=\"text-center\" [innerHtml]=\"pageContent?.title?.rendered\"></h1>\n    <div class=\"content\" [innerHtml]=\"pageContent?.content?.rendered | safeHtml\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(wordpressService, route) {
        this.wordpressService = wordpressService;
        this.route = route;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = (this.route.snapshot.paramMap.get('slug'));
        this.wordpressService.getPostBySlug(slug, 'posts').subscribe(function (page) {
            _this.pageContent = page[0];
            console.log(page);
        });
    };
    PostComponent.prototype.ngOnDestroy = function () {
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-post',
            template: __webpack_require__("./src/app/pages/post/post.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__["a" /* WordpressService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/pages/sub-menu/sub-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-landing-page\">\n  <header class=\"header-container\">\n    <div class=\"content\" [ngStyle]=\"{'background-image':'url(//via.placeholder.com/1440x760)'}\">\n      <div class=\"header-content text-center\">\n        <h1 [innerHtml]=\"pageContent?.title?.rendered\"></h1>\n        <h2 *ngIf=\"pageContent?.content?.rendered\" [innerHtml]=\"pageContent?.content?.rendered\"></h2>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"menu-menu\">\n    <ul class=\"menu\">\n      <li class=\"item-1\"><a href=\"#\">featured</a></li>\n      <li class=\"item-2\"><a href=\"#\">salad</a></li>\n      <li class=\"item-3\"><a href=\"#\">smoothie</a></li>\n      <li class=\"item-4\"><a href=\"#\">breakfast</a></li>\n      <li class=\"item-5\"><a href=\"#\">quinoa bowl</a></li>\n      <li class=\"item-6\"><a href=\"#\">soup</a></li>\n      <li class=\"item-7\"><a href=\"#\">burger and sandwich</a></li>\n      <li class=\"item-8\"><a href=\"#\">breakfast</a></li>\n      <li class=\"item-9\"><a href=\"#\">beverage</a></li>\n    </ul>\n  </div>\n\n  <!-- Menu Card Layout HTML -->\n  <div class=\"section-white menu-categories center\" id=\"featured\">\n    <h2 class=\"capitalize text-center\" [innerHtml]=\"pageContent?.title?.rendered\"></h2>\n    <h4></h4>\n\n    <div class=\"content clearfix sub-menu-cards-wrapper\">\n\n      <div class=\"menu-card\" *ngFor=\"let item of subMenuItems?.menuItems\">\n        <div class=\"card-wrapper\">\n          <div class=\"image\">\n            <img src=\"//via.placeholder.com/265x115\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"title\">{{ item?.Name }}</div>\n            <div class=\"description\">\n              <p>\n                {{ (item?.Description | allergens).description }}\n              </p>\n            </div>\n            <div class=\"fine-details\">\n              <span class=\"price\">{{ item?.defaultPrice | currency }}</span>\n              <span class=\"calories\">{{ item?.CaloricServingUnit }} cal</span>\n              <span class=\"allergens\" *ngIf=\"(item?.Description | allergens).allergens\">\n                <span class=\"allergen\" *ngFor=\"let allergen of (item?.Description | allergens).allergens\">{{ allergen }}</span>\n              </span>\n              <a href=\"#\" class=\"add-to-cart\" (click)=\"addToBag(item)\">Add</a>\n            </div>\n          </div>\n        </div>\n      </div><!-- /.menu-card -->\n\n    </div>\n  </div>\n  <!-- Menu Card Layout HTML -->\n</div>"

/***/ }),

/***/ "./src/app/pages/sub-menu/sub-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service_service__ = __webpack_require__("./src/app/services/menu-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubMenuComponent = /** @class */ (function () {
    function SubMenuComponent(menuService, router, wpService) {
        this.menuService = menuService;
        this.router = router;
        this.wpService = wpService;
        this.subMenuId = null;
    }
    SubMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check for subMenuId
        this.subMenuId = this.menuService.menuItemId;
        var slug = (this.router.snapshot.paramMap.get('category'));
        // Get custom post type
        this.wpService.getPostBySlug(slug, 'menu_categories').subscribe(function (_post) {
            _this.pageContent = _post[0];
            _this.acf = _post[0].acf;
            _this.subMenuId = _this.acf.submenuid;
            _this.menuService.getSubMenuItems(_this.subMenuId).subscribe(function (_subMenuItems) {
                _this.subMenuItems = _subMenuItems;
            });
        });
    };
    SubMenuComponent.prototype.addToBag = function (item) {
        console.log(item);
        return false;
    };
    SubMenuComponent.prototype.ngOnDestroy = function () {
    };
    SubMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-sub-menu',
            template: __webpack_require__("./src/app/pages/sub-menu/sub-menu.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menu_service_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__local_services_wp_service__["a" /* WordpressService */]])
    ], SubMenuComponent);
    return SubMenuComponent;
}());



/***/ }),

/***/ "./src/app/pipes/allergens.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergensPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AllergensPipe = /** @class */ (function () {
    function AllergensPipe() {
    }
    AllergensPipe.prototype.transform = function (value, args) {
        // Create object to be returned and iterated
        var obj = {};
        // Find instance of Allergen brackets and split the string into array
        //  Item 1 is the full description
        //  Item 2 is the allergens
        if (value.indexOf('[') !== -1) {
            var strArray = value.split('[');
            obj['description'] = strArray[0];
            // If the item has a ] in it slice it off so we're left with just allergen codes
            if (strArray[1] !== undefined) {
                strArray[1] = strArray[1].slice(0, -1);
                // Split allergens into subArray based on underscores
                strArray[1] = strArray[1].split('_');
                obj['allergens'] = strArray[1];
            }
        }
        return obj;
    };
    AllergensPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'allergens'
        })
    ], AllergensPipe);
    return AllergensPipe;
}());



/***/ }),

/***/ "./src/app/pipes/featured-image.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedImagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturedImagePipe = /** @class */ (function () {
    function FeaturedImagePipe(wpService) {
        this.wpService = wpService;
    }
    FeaturedImagePipe.prototype.transform = function (mediaData, args) {
        if (args == 'alt') {
            return mediaData['wp:featuredmedia'][0].alt_text;
        }
        return mediaData['wp:featuredmedia'][0].media_details.sizes[args].source_url;
    };
    FeaturedImagePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'featuredImage'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_services_wp_service__["a" /* WordpressService */]])
    ], FeaturedImagePipe);
    return FeaturedImagePipe;
}());



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtml = /** @class */ (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (html) {
        // return this.sanitizer.bypassSecurityTrustStyle(style);
        return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustScript(value);
        // return this.sanitizer.bypassSecurityTrustUrl(value);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    SafeHtml = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtml);
    return SafeHtml;
}());



/***/ }),

/***/ "./src/app/services/bag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BagService = /** @class */ (function () {
    function BagService(localStorage) {
        var _this = this;
        this.localStorage = localStorage;
        this._lineItems = [];
        this._itemsInBag = [];
        this._itemCountInBag = 0;
        this.localStorage.getItem('bag').subscribe(function (bagItemsFromLocalStorage) {
            _this.itemsInBag = bagItemsFromLocalStorage || [];
            _this.updatePrice(bagItemsFromLocalStorage);
        });
    }
    BagService.prototype.createLineItem = function (passedMenuItem) {
        // Send item to get Modifiers
        var modifiers = this.constructLineItemModifiers(passedMenuItem.Modifiers);
        var lineItem = {
            SalesItemId: passedMenuItem.item.DefaultItemId,
            MenuItemId: passedMenuItem.item.MenuItemId,
            Name: passedMenuItem.item.Name,
            ShortDescription: passedMenuItem.item.Description,
            SpecialInstructions: passedMenuItem.SpecialInstructions,
            UnitPrice: passedMenuItem.salesItems[0].Price,
            Quantity: passedMenuItem.Quantity,
            ExtendedPrice: passedMenuItem.TotalPrice * passedMenuItem.Quantity,
            Modifiers: modifiers
        };
        // Push menuItem and lineItem into arrays
        this._itemsInBag.push(lineItem);
        // Update pricing
        this._totalPrice += passedMenuItem.TotalPrice;
        // Save to localStorage
        this.saveToLocalStorage();
        lineItem = null;
    };
    BagService.prototype.constructLineItemModifiers = function (allModifiers) {
        var formattedLineItemModifierArray = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](allModifiers, function (modGroup, key) {
            var modifierGroupId = modGroup.groupDetails.ModifierGroupId;
            if (modGroup.currentlySelected.length > 0) {
                var previousModifierId = 0;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](modGroup.currentlySelected, function (modifier, key) {
                    // Set initial quantity for the modifier being added
                    var modifierQuantity = 1;
                    // If the modifier ID we're iterating over exists
                    var modExists = __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](formattedLineItemModifierArray, { SalesItemOptionId: modifier.ModifierId });
                    // If it does, increase the quantity of that modifier
                    if (modExists !== -1) {
                        formattedLineItemModifierArray[modExists].Quantity++;
                    }
                    // Else, construct the object and insert it
                    else {
                        var lineItemModifierObject = {
                            Name: modifier.Name,
                            ItemOptionGroupId: modifierGroupId,
                            SalesItemOptionId: modifier.ModifierId,
                            Quantity: modifierQuantity
                        };
                        formattedLineItemModifierArray.push(lineItemModifierObject);
                    }
                });
            }
        });
        return formattedLineItemModifierArray;
    };
    BagService.prototype.removeFromBagAtIndex = function (index) {
        // Update front facing price
        this._totalPrice -= this._itemsInBag[index].ExtendedPrice;
        // Remove item from both arrays
        this._itemsInBag.splice(index, 1);
        // Bag was modified, overwrite localStorage object with saved object
        this.saveToLocalStorage();
    };
    BagService.prototype.updatePrice = function (bagItems) {
        var value = 0;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](bagItems, function (item, key) {
            value += item.ExtendedPrice;
        });
        this._totalPrice = value;
    };
    Object.defineProperty(BagService.prototype, "itemCountInBag", {
        get: function () {
            return (this._itemsInBag === null) ? 0 : this._itemsInBag.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BagService.prototype, "itemsInBag", {
        get: function () {
            return this._itemsInBag;
        },
        set: function (items) {
            this._itemsInBag = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BagService.prototype, "totalPrice", {
        get: function () {
            return this._totalPrice;
        },
        set: function (price) {
            this._totalPrice = price;
        },
        enumerable: true,
        configurable: true
    });
    BagService.prototype.saveToLocalStorage = function () {
        this.localStorage.setItem('bag', this.itemsInBag).subscribe(function () { });
    };
    BagService.prototype.retrieveBagFromStorage = function () {
        return this.localStorage.getItem('bag').map(function (data) {
            return data;
        });
    };
    BagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_pwa_local_storage__["a" /* LocalStorage */]])
    ], BagService);
    return BagService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerService = /** @class */ (function () {
    function CustomerService(config, httpClient, localStorage, router) {
        this.config = config;
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.router = router;
    }
    CustomerService.prototype.createCustomer = function (customer) {
        return this.httpClient.put(this.config.railsCustomerEndpoint, customer).map(function (returnData) {
            return returnData;
        }, function (errorData) {
            return errorData;
        });
    };
    CustomerService.prototype.logIn = function (loginInfo) {
        return this.httpClient.post(this.config.authenticateEndpoint, loginInfo).map(function (data) {
            return data;
        });
    };
    CustomerService.prototype.logOut = function () {
        var _this = this;
        this.localStorage.removeItem('user').subscribe(function () {
            _this.router.navigateByUrl('/');
        });
    };
    CustomerService.prototype.isLoggedIn = function () {
        return this.localStorage.getItem('user').map(function (userInfo) {
            return userInfo;
        });
    };
    CustomerService.prototype.getCustomerInfo = function (customerId) {
        return this.httpClient.get(this.config.railsCustomerEndpoint + ("/" + customerId)).map(function (userData) {
            return userData;
        });
    };
    CustomerService.prototype.updateCustomerInfo = function (customer) {
        return this.httpClient.post(this.config.railsCustomerEndpoint + ("/" + customer.customer_info.CustomerId), customer)
            .map(function (returnData) {
            return returnData;
        });
    };
    CustomerService.prototype.getSavedPayments = function (customerId) {
        return this.httpClient.get(this.config.railsCustomerEndpoint + ("" + customerId) + '/Payments').map(function (data) {
            return data;
        });
    };
    CustomerService.prototype.getCurrentCustomer = function () {
        return this.localStorage.getItem('user').map(function (userInfo) {
            return userInfo;
        });
    };
    CustomerService.prototype.updatePassword = function () {
    };
    Object.defineProperty(CustomerService.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (customer) {
            console.log('set customer', customer);
            this._customer = customer;
        },
        enumerable: true,
        configurable: true
    });
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_utils_constants__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_pwa_local_storage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/menu-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = /** @class */ (function () {
    function MenuService(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
        this.menuItemId = null;
    }
    MenuService.prototype.getFullMenuAndStore = function () {
        // Using local storage
        this.localMenu = this.get().subscribe(function (menu) {
            localStorage.setItem('menu', JSON.stringify(menu));
            return menu;
        });
    };
    MenuService.prototype.getMenuItemDetails = function (_menuItemId) {
        return this.get("menu-item/" + _menuItemId);
    };
    MenuService.prototype.getSubMenus = function () {
        return this.get('submenus');
    };
    MenuService.prototype.getSubMenuItems = function (subMenuId) {
        return this.get('submenus/' + subMenuId);
    };
    MenuService.prototype.get = function (apiMethod) {
        if (apiMethod === void 0) { apiMethod = ''; }
        var url = this.config.railsMenuApi + '/' + apiMethod;
        return this.httpClient.get(url);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__local_utils_constants__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderService = /** @class */ (function () {
    function OrderService(httpClient, localStorage, config, customerService) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.config = config;
        this.customerService = customerService;
    }
    OrderService.prototype.putOrder = function (bagItems) {
        var orderEndpoint = this.config.railsOrderEndpoint + '/' + this.config.siteId;
        var order = this.constructOrderObject(bagItems);
        console.log('constructed order', order);
        return this.httpClient.put(orderEndpoint, order).map(function (apiResponse) {
            return apiResponse;
        });
    };
    OrderService.prototype.saveOrderToLocalStorage = function (order) {
        return this.localStorage.setItem('order', order).map(function (response) {
            return response;
        });
    };
    OrderService.prototype.constructOrderObject = function (bagItems) {
        var order = {
            order: {
                SiteId: this.config.siteId,
                MenuId: this.config.menuId,
                PromiseDateTime: this.orderTime,
                LineItems: bagItems,
                Customer: this.customerInfo,
                OrderMode: 'Pickup',
                PaymentMode: 'Unknown'
            }
        };
        return order;
    };
    OrderService.prototype.hasOrderBeenCreated = function () {
        return this.localStorage.getItem('order').map(function (orderDetails) {
            return orderDetails;
        });
    };
    OrderService.prototype.getPreSavedOrder = function () {
        return this.localStorage.getItem('order').map(function (orderDetails) {
            return orderDetails;
        });
    };
    OrderService.prototype.getFullOrderDetails = function (orderId) {
        var _this = this;
        var orderEndpoint = this.config.railsOrderEndpoint + ("/" + this.config.siteId + "/" + orderId);
        return this.httpClient.get(orderEndpoint).map(function (fullOrder) {
            _this.currentOrder = fullOrder;
            return fullOrder;
        });
    };
    OrderService.prototype.getNextAvailableTime = function () {
        var _this = this;
        return this.httpClient.get(this.config.railsTimeEndpoint + '/1').map(function (time) {
            _this.orderTime = time;
            return time;
        });
    };
    OrderService.prototype.retrieveTimes = function (orderMode, orderSource) {
        if (orderSource === void 0) { orderSource = '0'; }
        // Order Sources
        //  0 - Website
        //  1 - Mobile (iPhone)
        //  2 - Mobile Web
        return this.httpClient.get(this.config.railsTimeEndpoint + ("/" + orderMode + "/" + orderSource + "/" + this.config.menuId)).map(function (times) {
            return times;
        });
    };
    Object.defineProperty(OrderService.prototype, "customerInfo", {
        get: function () {
            return this._customerInfo;
        },
        set: function (customer) {
            this._customerInfo = customer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderService.prototype, "currentOrder", {
        get: function () {
            return this._currentOrder;
        },
        set: function (order) {
            this._currentOrder = order;
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.submitOrder = function (order, orderId) {
        return this.httpClient.post(this.config.railsOrderEndpoint + ("/" + this.config.siteId + "/" + orderId), order).map(function (orderResponse) {
            return orderResponse;
        });
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_pwa_local_storage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_3__local_utils_constants__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__local_services_customer_service__["a" /* CustomerService */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/wp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__("./src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressService = /** @class */ (function () {
    function WordpressService(http, config, httpClient) {
        this.http = http;
        this.config = config;
        this.httpClient = httpClient;
    }
    WordpressService.prototype.login = function (data) {
        var url = this.config.wordpressApiUrl + '/jwt-auth/v1/token';
        return this.http.post(url, data)
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPosts = function (query) {
        query = this.transformRequest(query);
        var url = this.config.wordpressApiUrl + ("/wp/v2/posts?" + query + "&_embed");
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPost = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp/v2/posts/" + id + "?_embed"))
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.getMedia = function (id) {
        return this.httpClient.get(this.config.wordpressApiUrl + ("/wp/v2/media/" + id));
    };
    WordpressService.prototype.getCategories = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp/v2/categories?per_page=100')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getTags = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp/v2/tags?per_page=100')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPages = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp/v2/pages?per_page=100')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPage = function (id) {
        return this.httpClient.get(this.config.wordpressApiUrl + ("/wp/v2/pages/" + id + "?_embed"));
    };
    WordpressService.prototype.getPostBySlug = function (_slug, _postType) {
        return this.httpClient.get(this.config.wordpressApiUrl + ("/wp/v2/" + _postType + "?slug=" + _slug));
    };
    WordpressService.prototype.getMenus = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp-api-menus/v2/menus')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMenu = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp-api-menus/v2/menus/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.transformRequest = function (obj) {
        var p, str;
        str = [];
        for (p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
        return str.join('&');
    };
    WordpressService.prototype.getCustomPostType = function (postType, _perPage) {
        if (_perPage === void 0) { _perPage = null; }
        var perPage = (_perPage !== null) ? "&per_page=" + _perPage : '';
        return this.httpClient.get(this.config.wordpressApiUrl + ("/wp/v2/" + postType + "?_embed" + perPage));
    };
    WordpressService.prototype.getCustomPostTypeById = function (base, id) {
        return this.httpClient.get(this.config.wordpressApiUrl + ("/wp/v2/" + base + "/" + id));
    };
    WordpressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], WordpressService);
    return WordpressService;
}());



/***/ }),

/***/ "./src/app/shared/components/bag/bag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout-overlay\" [ngClass]=\"state\">\n  <div class=\"checkout-content-wrapper\" [@hideShowBag]='state'>\n    <div class=\"checkout-inner-wrapper\">\n\n        <div class=\"checkout-step\">\n          <div class=\"checkout-top\">\n            <div class=\"checkout-header\">\n              <div class=\"back\">\n              </div>\n              <div class=\"checkout-title\">My Bag</div>\n              <div class=\"close\" (click)=\"toggleBagState()\">\n                <span class=\"close-1\"></span>\n                <span class=\"close-2\"></span>\n              </div>\n            </div><!-- /.checkout-header -->\n\n            <div class=\"items\">\n\n              <div class=\"item\" *ngFor=\"let menuItem of bagItems; let i = index;\">\n                <div class=\"item-review-wrapper\">\n                  <div class=\"left image\">\n                    <img src=\"http://via.placeholder.com/160x240\" alt=\"\" class=\"item-image\">\n                    <img src=\"/assets/svgs/delete-cross-icon.svg\" alt=\"X to remove item from cart\" class=\"remove-image\" (click)=\"removeFromBagAtIndex(i)\">\n                  </div>\n                  <div class=\"bag-detail-card\">\n                    <div class=\"title-container\">\n                        <div class=\"title\">{{ menuItem?.Name }} <span class=\"quantity\">x {{ menuItem?.Quantity }}</span></div>\n                    </div>\n                    <div class=\"ingredients\">\n                      {{ (menuItem?.ShortDescription | allergens)?.description }}\n                    </div>\n                    <div class=\"additions\" *ngIf=\"menuItem?.Modifiers\">\n                      <span class=\"modifier\" *ngFor=\"let mod of menuItem?.Modifiers\">{{ mod?.Name }}</span>\n                    </div>\n                    <div class=\"fine-details\">\n                      <span class=\"price\">{{ menuItem?.ExtendedPrice | currency }}</span>\n                      <span class=\"calories\"></span>\n                      <span class=\"allergens\" *ngIf=\"(menuItem?.ShortDescription)\">\n                        <span class=\"allergen\" *ngFor=\"let allergen of (menuItem?.ShortDescription | allergens).allergens\">{{ allergen }}</span>\n                      </span>\n                    </div>\n                  </div><!-- /.bag-detail-card -->\n                </div><!-- /.item -->\n                </div><!-- /.item-review-wrapper -->\n            </div><!-- /.checkout-items -->\n          </div><!-- /.checkout-top -->\n\n\n          <div class=\"checkout-bottom\">\n            <div class=\"cart-prices\">\n              <div class=\"price-wrapper\">\n                <div class=\"flex-between total\">\n                  <span class=\"label medium\">Total</span>\n                  <span class=\"value medium\">{{ bagTotalPrice | currency }}</span>\n                </div>\n                <div class=\"checkout-button red-button\">\n                  <a routerLink=\"/checkout/review\">Checkout</a>\n                </div>\n              </div>\n            </div><!-- /.cart-prices -->\n          </div><!-- /.checkout-bottom -->\n        </div><!-- /.checkout-step.step-1 -->\n\n    </div><!-- /.checkout-inner-wrapper -->\n  </div><!-- /.checkout-content-wrapper -->\n</div><!-- /.checkout-overlay -->"

/***/ }),

/***/ "./src/app/shared/components/bag/bag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_bag_service__ = __webpack_require__("./src/app/services/bag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_services_order_service__ = __webpack_require__("./src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BagComponent = /** @class */ (function () {
    function BagComponent(bagService, orderService, router) {
        this.bagService = bagService;
        this.orderService = orderService;
        this.router = router;
        this.state = 'invisible';
        this.bagCount = 0;
        this.bagState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemsInBagCounter = 0;
    }
    BagComponent.prototype.ngOnInit = function () {
        this.bagCount = this.bagService.itemCountInBag;
    };
    BagComponent.prototype.toggleBagState = function () {
        this.state = (this.state === 'invisible') ? 'visible' : 'invisible';
        this.bagState.emit(this.state);
    };
    BagComponent.prototype.removeFromBagAtIndex = function (index) {
        this.bagService.removeFromBagAtIndex(index);
    };
    Object.defineProperty(BagComponent.prototype, "bagItems", {
        get: function () {
            return this._bagItems;
        },
        set: function (items) {
            this._bagItems = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BagComponent.prototype, "bagTotalPrice", {
        get: function () {
            return this.bagService.totalPrice;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BagComponent.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BagComponent.prototype, "bagCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BagComponent.prototype, "bagState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BagComponent.prototype, "bagItems", null);
    BagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-bag',
            template: __webpack_require__("./src/app/shared/components/bag/bag.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('hideShowBag', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        right: '-500px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        right: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('invisible <=> visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__local_services_bag_service__["a" /* BagService */], __WEBPACK_IMPORTED_MODULE_3__local_services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], BagComponent);
    return BagComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"content\">\n    <div class=\"left\">\n      <ul class=\"menu footer-menu\">\n        <li *ngFor=\"let item of footerMenu\" [attr.class]=\"item.classes ? item.classes : null\">\n            <a href=\"{{ item.url }}\">{{ item.title }}</a>\n        </li>\n      </ul>\n      <div class=\"newsletter-signup\">\n        <label for=\"email-newsletter\"><span class=\"visuallyhidden\">Enter your Email Address and</span> Stay in Touch</label>\n        <input type=\"email\" name=\"newsletter\" id=\"email-newsletter\" placeholder=\"Enter your Email\">\n        <input type=\"image\" src=\"/assets/svgs/right-arrow-red.svg\" alt=\"Click to sign up for our newsletter\">\n      </div>\n    </div>\n    <div class=\"right clearfix\">\n      <ul class=\"menu social-menu\" *ngIf=\"footerLinks\">\n        <li *ngFor=\"let item of footerLinks\">\n          <a href=\"{{ item?.url }}\" target=\"_blank\">\n            <span class=\"visuallyhidden\">{{ item.title }}</span>\n            <i [attr.class]=\"item.classes ? item.classes : null\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wp_service__ = __webpack_require__("./src/app/services/wp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(wpService) {
        this.wpService = wpService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpService.getMenu(3).subscribe(function (m) { return _this.footerMenu = m.items; });
        this.wpService.getMenu(4).subscribe(function (m) {
            _this.footerLinks = m.items;
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-footer',
            template: __webpack_require__("./src/app/shared/components/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wp_service__["a" /* WordpressService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/hamburger/hamburger.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"hamburger\" class=\"hamburger {{ toggleClass }} clearfix\" (click)=\"toggle()\" title=\"Click to open mobile menu\">\n  <div class=\"block-content\">\n    <div class=\"content\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div><!-- /.block-content -->\n</div>"

/***/ }),

/***/ "./src/app/shared/components/hamburger/hamburger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HamburgerComponent; });
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

var HamburgerComponent = /** @class */ (function () {
    function HamburgerComponent() {
        this.toggleClass = 'mobileMenuClosed';
        this.mobileMenuState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HamburgerComponent.prototype.ngOnInit = function () {
    };
    HamburgerComponent.prototype.toggle = function () {
        this.toggleClass = (this.toggleClass == 'mobileMenuClosed') ? 'mobileMenuOpen' : 'mobileMenuClosed';
        this.mobileMenuState.emit(this.toggleClass);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HamburgerComponent.prototype, "mobileMenuState", void 0);
    HamburgerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-hamburger',
            template: __webpack_require__("./src/app/shared/components/hamburger/hamburger.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HamburgerComponent);
    return HamburgerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-container\">\n  <div class=\"content\" [ngStyle]=\"{'background-image':'url(' + featuredImage?.source_url + ')'}\">\n    <div class=\"header-content text-center\">\n      <h1 [innerHtml]=\"pageContent?.title?.rendered\"></h1>\n      <!-- <h2 *ngIf=\"pageContent?.content?.rendered\" [innerHtml]=\"pageContent?.content?.rendered\"></h2> -->\n      <ng-content></ng-content>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "featuredImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "pageContent", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-header',
            template: __webpack_require__("./src/app/shared/components/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/image-and-text/image-and-text.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"section section-section-{{ color }} image-and-text\">\n    <div class=\"content\">\n      <div class=\"left\" *ngIf=\"acf?.left_image\">\n        <img [src]=\"acf?.left_image?.url\" [alt]=\"acf?.left_image?.alt\" />\n      </div>\n      <div class=\"right\" *ngIf=\"acf?.right_details\">\n        <div class=\"inner-content\" [innerHtml]=\"acf?.right_details\"></div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/shared/components/image-and-text/image-and-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageAndTextComponent; });
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

var ImageAndTextComponent = /** @class */ (function () {
    function ImageAndTextComponent() {
        this.color = 'white';
    }
    ImageAndTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageAndTextComponent.prototype, "acf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageAndTextComponent.prototype, "color", void 0);
    ImageAndTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-image-and-text',
            template: __webpack_require__("./src/app/shared/components/image-and-text/image-and-text.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ImageAndTextComponent);
    return ImageAndTextComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/intro-section/intro-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-{{ color }} intro-section\" *ngIf=\"acf?.body\">\n  <div class=\"content\">\n    <h3 class=\"title\" *ngIf=\"acf?.title\" [innerHtml]=\"acf?.title\"></h3>\n    <div class=\"body\" *ngIf=\"acf?.body\" [innerHtml]=\"acf?.body | safeHtml\"></div>\n    <div class=\"button-wrapper text-center cta-link\" *ngIf=\"acf?.link\">\n      <a [href]=\"acf?.link\">Get the Full Story</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/intro-section/intro-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroSectionComponent; });
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

var IntroSectionComponent = /** @class */ (function () {
    function IntroSectionComponent() {
        this.color = 'white';
    }
    IntroSectionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IntroSectionComponent.prototype, "acf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IntroSectionComponent.prototype, "color", void 0);
    IntroSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-intro-section',
            template: __webpack_require__("./src/app/shared/components/intro-section/intro-section.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], IntroSectionComponent);
    return IntroSectionComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\" class=\"lo-cal-form\" [formGroup]=\"loginForm\" (submit)=\"login(loginForm)\" [ngClass]=\"simpleForm ? 'simple' : ''\">\n  <div class=\"form-errors\" *ngIf=\"errorData?.error\"><p>Sorry. We did not find a valid account for that username and password.</p></div>\n  <div class=\"form-component form-component-text\">\n    <label for=\"password\" class=\"visuallyhidden\">Email</label>\n    <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{'has-error':!loginForm.controls['email'].valid && submittedOnce}\">\n    <div class=\"error-message\" *ngIf=\"!loginForm.controls['email'].valid && submittedOnce\">This field is required.</div>\n  </div>\n  <div class=\"form-component form-component-text\">\n    <label for=\"password\" class=\"visuallyhidden\">Password</label>\n    <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"{'has-error':!loginForm.controls['password'].valid && submittedOnce}\">\n    <div class=\"error-message\" *ngIf=\"!loginForm.controls['password'].valid && submittedOnce\">This field is required.</div>\n  </div>\n  <div class=\"submit red-button full-width-button\">\n    <input type=\"submit\" value=\"Log In\">\n  </div>\n  <div class=\"account-actions\">\n    <div class=\"action\" *ngIf=\"!simpleForm\">\n      <a routerLink=\"/create-account\">New Account</a>\n    </div>\n    <div class=\"action\">\n      <a routerLink=\"/password-reset\">Forgot Password</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_pwa_local_storage__ = __webpack_require__("./node_modules/@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(fb, customerService, localStorage, router, route) {
        this.fb = fb;
        this.customerService = customerService;
        this.localStorage = localStorage;
        this.router = router;
        this.route = route;
        this.submittedOnce = false;
        this.errorData = {};
        this.returnUrl = '';
        this.simpleForm = false;
        this.loginForm = fb.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginFormComponent.prototype.login = function (loginFormData) {
        var _this = this;
        this.submittedOnce = true;
        if (loginFormData.valid) {
            var loginDetails = {
                credentials: {
                    Email: loginFormData.controls['email'].value,
                    Password: loginFormData.controls['password'].value
                }
            };
            // Log In customer
            this.customerService.logIn(loginDetails).subscribe(function (customerId) {
                // If successful, get all customer details
                _this.customerService.getCustomerInfo(customerId).subscribe(function (customerInfo) {
                    // Set full user details to localStorage
                    _this.localStorage.setItem('user', customerInfo).subscribe(function () {
                        _this.router.navigate([_this.returnUrl]);
                    });
                });
            }, function (error) {
                _this.errorData = error;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoginFormComponent.prototype, "simpleForm", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-login-form',
            template: __webpack_require__("./src/app/shared/components/login-form/login-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__local_services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__ngx_pwa_local_storage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/title-body-images/title-body-images.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-{{ color }} food-details\">\n  <div class=\"content center-740\">\n    <h3 class=\"title\" [innerHtml]=\"acf?.tbi_title\"></h3>\n    <div class=\"body\" [innerHtml]=\"acf?.tbi_body | safeHtml\"></div>\n  </div>\n  <div class=\"three-column-data\">\n    <div class=\"data item-{{ i+1 }}\" *ngFor=\"let item of acf?.tbi_images; let i = index\">\n      <div class=\"content-wrapper text-center\">\n        <div class=\"image\" *ngIf=\"item?.image?.url\"><img [src]=\"item?.image?.url\" [alt]=\"item?.image?.alt\"></div>\n        <div class=\"title\" *ngIf=\"item?.title\">{{ item?.title }}</div>\n        <div class=\"description\" *ngIf=\"item?.description\"><p>{{ item?.description }}</p></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"button-wrapper text-center cta-link\" *ngIf=\"acf?.tile_link\">\n    <a [href]=\"acf?.tile_link\">Learn More</a>\n  </div>\n</div><!-- /.food-details -->"

/***/ }),

/***/ "./src/app/shared/components/title-body-images/title-body-images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleBodyImagesComponent; });
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

var TitleBodyImagesComponent = /** @class */ (function () {
    function TitleBodyImagesComponent() {
        this.color = 'white';
    }
    TitleBodyImagesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TitleBodyImagesComponent.prototype, "acf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TitleBodyImagesComponent.prototype, "color", void 0);
    TitleBodyImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lo-cal-title-body-images',
            template: __webpack_require__("./src/app/shared/components/title-body-images/title-body-images.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TitleBodyImagesComponent);
    return TitleBodyImagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/input-switcher.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSwitcherDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputSwitcherDirective = /** @class */ (function () {
    function InputSwitcherDirective(el, renderer, vc, resolver) {
        this.el = el;
        this.renderer = renderer;
        this.vc = vc;
        this.resolver = resolver;
        this.type = 'text';
        this.id = '';
        this.previousValue = el.nativeElement.textContent;
    }
    InputSwitcherDirective.prototype.handleChange = function (value, firstChange) {
        // Ensure this isn't the first time the variable was set
        if (!firstChange) {
            if (value === 'true') {
                this.editMode();
            }
            else if (value === 'saved') {
                this.newValues();
            }
            else {
                this.el.nativeElement.textContent = this.previousValue;
            }
        }
    };
    InputSwitcherDirective.prototype.ngOnChanges = function (changes) {
        // if the datepicker is on, will remove the datepicker when edit is closed ( or else the datepicker just hangs around after the edit is closed )
        if (this.component) {
            this.component.destroy();
        }
        this.handleChange(changes['edit'].currentValue, changes['edit'].isFirstChange());
    };
    InputSwitcherDirective.prototype.editMode = function () {
        // Store current value
        this.currentValue = __WEBPACK_IMPORTED_MODULE_1_lodash__["trim"](this.el.nativeElement.textContent);
        // Set previousValue to current value
        this.previousValue = this.currentValue;
        // Wipe out text node
        this.el.nativeElement.textContent = '';
        //Create and render element
        switch (this.type) {
            case 'text':
                this.generateElement('input', { 'value': this.currentValue, 'name': this.el.nativeElement.getAttribute('name'), 'type': 'text' });
                break;
            case 'ta':
                this.generateTextarea({ 'value': this.currentValue, 'name': this.el.nativeElement.getAttribute('name') });
                break;
            case 'select':
                this.generateSelectBox({ 'name': this.el.nativeElement.getAttribute('name'), 'ele': this.el });
                break;
            default:
                this.generateElement('input', { 'value': this.currentValue, 'name': this.el.nativeElement.getAttribute('name'), 'type': 'text' });
                break;
        }
    };
    InputSwitcherDirective.prototype.generateElement = function (type, attrs) {
        var _this = this;
        var inputElement = this.renderer.createElement(this.el.nativeElement, type);
        this.renderer.setElementAttribute(inputElement, 'type', 'text');
        this.renderer.setElementAttribute(inputElement, 'value', __WEBPACK_IMPORTED_MODULE_1_lodash__["trim"](attrs.value));
        this.renderer.setElementAttribute(inputElement, 'name', attrs.name);
        this.elementName = attrs.name;
        this.renderer.listen(inputElement, 'change', function (event) {
            _this.currentValue = event.target.value;
        });
    };
    InputSwitcherDirective.prototype.generateTextarea = function (attrs) {
        var _this = this;
        var ele = this.renderer.createElement(this.el.nativeElement, 'textarea');
        this.renderer.createText(ele, __WEBPACK_IMPORTED_MODULE_1_lodash__["trim"](attrs.value));
        this.renderer.setElementAttribute(ele, 'name', attrs.name);
        this.renderer.setElementAttribute(ele, 'rows', '6');
        this.elementName = attrs.name;
        this.renderer.listen(ele, 'change', function (event) {
            _this.currentValue = event.target.value;
        });
    };
    InputSwitcherDirective.prototype.generateSelectBox = function (attrs) {
        var _this = this;
        var opts = attrs.ele.nativeElement.getAttribute('options');
        var arr = opts.split('/');
        var rend = this.renderer;
        var curValue = this.currentValue;
        var select = this.renderer.createElement(this.el.nativeElement, 'select');
        this.renderer.setElementAttribute(select, 'name', attrs.name);
        this.elementName = attrs.name;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](arr, function (value, key) {
            var option = rend.createElement(select, 'option');
            rend.setElementAttribute(option, 'value', value);
            rend.createText(option, value);
            if (value == curValue) {
                rend.setElementAttribute(option, 'selected', 'selected');
            }
        });
        this.renderer.listen(select, 'change', function (event) {
            _this.currentValue = event.target.value;
        });
    };
    InputSwitcherDirective.prototype.newValues = function () {
        // Taking value from input/datepicker/select and placing in on the page as text
        this.el.nativeElement.textContent = this.currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputSwitcherDirective.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputSwitcherDirective.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputSwitcherDirective.prototype, "subsetKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputSwitcherDirective.prototype, "id", void 0);
    InputSwitcherDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[inputSwitcher]',
            exportAs: 'InputSwitcherDirective'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], InputSwitcherDirective);
    return InputSwitcherDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/month-mask.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthMaskDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonthMaskDirective = /** @class */ (function () {
    function MonthMaskDirective(model) {
        this.model = model;
        this.rawChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MonthMaskDirective.prototype.onInputChange = function (e, backspace) {
        console.log(e);
        // let x = e.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        // let rawValue = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        // console.log( rawValue );
        // // new value
        // this.model.valueAccessor.writeValue( rawValue );
        // this.rawChange.emit( rawValue );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MonthMaskDirective.prototype, "rawChange", void 0);
    MonthMaskDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[loCalMonthMask]',
            host: {
                '(ngModelChange)': 'onInputChange($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgControl */]])
    ], MonthMaskDirective);
    return MonthMaskDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/window-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_windowref__ = __webpack_require__("./src/app/utils/windowref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WindowScrollDirective = /** @class */ (function () {
    function WindowScrollDirective(winRef, renderer, hostElement) {
        var _this = this;
        this.winRef = winRef;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.scroll = function () {
            //handle your scroll here
            //notice the 'odd' function assignment to a class field
            //this is used to be able to remove the event listener
            if (_this.winRef.nativeWindow.scrollY > 0) {
                _this.renderer.addClass(_this.hostElement.nativeElement, 'scrolled');
            }
            else {
                _this.renderer.removeClass(_this.hostElement.nativeElement, 'scrolled');
            }
        };
    }
    WindowScrollDirective.prototype.ngOnInit = function () {
        this.winRef.nativeWindow.addEventListener('scroll', this.scroll, true); //third parameter
    };
    WindowScrollDirective.prototype.ngOnDestroy = function () {
        this.winRef.nativeWindow.removeEventListener('scroll', this.scroll, true);
    };
    WindowScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[loCalWindowScroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_windowref__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], WindowScrollDirective);
    return WindowScrollDirective;
}());



/***/ }),

/***/ "./src/app/utils/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__windowref__ = __webpack_require__("./src/app/utils/windowref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Config = /** @class */ (function () {
    function Config(winRef) {
        this.winRef = winRef;
        this.wordpressApiUrl = '';
        this.railsMenuApi = 'http://138.197.123.70/menus/1';
        this.railsCustomerEndpoint = 'http://138.197.123.70/customers';
        this.authenticateEndpoint = 'http://138.197.123.70/authenticate';
        this.railsOrderEndpoint = 'http://138.197.123.70/orders';
        this.railsTimeEndpoint = 'http://138.197.123.70/times/1';
        this.siteId = 1;
        this.menuId = 1001;
        this.paymentTypeMap = {
            "American Express": 0,
            "Credit": 1,
            "Diners Club": 2,
            "Discover": 3,
            "GiftCard": 4,
            "JCB": 5,
            "Mastercard": 6,
            "Visa": 7,
            "PrePaid": 8
        };
        // Setting API URL based on current environment
        switch (winRef.nativeWindow.location.hostname) {
            case 'localhost':
                this.wordpressApiUrl = "http://lo-cal.local/wp-json";
                break;
            case 'live-lo-cal.pantheonsite.io':
                this.wordpressApiUrl = "https://www.lo-calkitchen.com/wp-json";
                break;
            default:
                this.wordpressApiUrl = "http://" + winRef.nativeWindow.location.hostname + "/wp-json";
                break;
        }
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__windowref__["a" /* WindowRef */]])
    ], Config);
    return Config;
}());



/***/ }),

/***/ "./src/app/utils/passwordmatch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMatch; });
var PasswordMatch = /** @class */ (function () {
    function PasswordMatch() {
    }
    PasswordMatch.MatchPassword = function (AC) {
        var password = AC.get('password').value;
        var confirmPassword = AC.get('confirm-password').value;
        if ((password !== confirmPassword) && (password.length > 3) && (confirmPassword.length > 1)) {
            AC.get('confirm-password').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordMatch;
}());



/***/ }),

/***/ "./src/app/utils/windowref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map