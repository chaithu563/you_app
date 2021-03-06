System.register(['@angular/platform-browser-dynamic', './admin/admin.home', '@angular/core', './app.component', '../app/content/pages/videoplay/user.videoplay', '@angular/http', './httpclient', '@angular/router-deprecated', '@angular/common'], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, admin_home_1, core_1, app_component_1, user_videoplay_1, http_1, httpclient_1, router_deprecated_1, common_1, core_2;
    var Main;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (admin_home_1_1) {
                admin_home_1 = admin_home_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (user_videoplay_1_1) {
                user_videoplay_1 = user_videoplay_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            Main = (function () {
                function Main() {
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'hp-main',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: '<router-outlet></router-outlet>',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/admin/...', component: admin_home_1.AdminHome, name: 'AdminHome' },
                        { path: '/app', component: app_component_1.AppComponent, name: 'AppHome' },
                        { path: '/videoplay', component: user_videoplay_1.UserVideoPlay, name: 'AppHome', useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
            platform_browser_dynamic_1.bootstrap(Main, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]).then(function (success) { return console.log("Bootstrap success"); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map