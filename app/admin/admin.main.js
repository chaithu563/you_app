System.register(['@angular/platform-browser-dynamic', '@angular/core', './admin.home', '@angular/http', '@angular/router-deprecated'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, admin_home_1, http_1, router_deprecated_1, router_deprecated_2;
    var AdminMain;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_home_1_1) {
                admin_home_1 = admin_home_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
            }],
        execute: function() {
            // Routing is set up with the RouteConfig decorator
            AdminMain = (function () {
                function AdminMain() {
                }
                AdminMain = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/admin', component: admin_home_1.AdminHome, name: 'AdminHome', useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AdminMain);
                return AdminMain;
            }());
            exports_1("AdminMain", AdminMain);
            platform_browser_dynamic_1.bootstrap(AdminMain, [http_1.HTTP_PROVIDERS, router_deprecated_2.ROUTER_PROVIDERS, core_1.provide(router_deprecated_1.APP_BASE_HREF, { useValue: '/' })]);
        }
    }
});
//# sourceMappingURL=admin.main.js.map