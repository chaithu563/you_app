System.register(['angular2/platform/browser', 'angular2/core', './admin.home', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, admin_home_1, http_1, router_1, router_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
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
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(admin_home_1.AdminHome, [http_1.HTTP_PROVIDERS, router_2.ROUTER_PROVIDERS, core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })]);
        }
    }
});
//# sourceMappingURL=admin.main.js.map