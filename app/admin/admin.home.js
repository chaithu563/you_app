System.register(['angular2/core', './admin.videos', './admin.videoplay', 'angular2/http', 'angular2/router', 'rxjs/Rx', '../httpclient'], function(exports_1, context_1) {
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
    var core_1, admin_videos_1, admin_videoplay_1, http_1, router_1, httpclient_1;
    var AdminHome;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_videos_1_1) {
                admin_videos_1 = admin_videos_1_1;
            },
            function (admin_videoplay_1_1) {
                admin_videoplay_1 = admin_videoplay_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            }],
        execute: function() {
            AdminHome = (function () {
                //https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/
                function AdminHome(httpClient) {
                    httpClient.get('http://localhost/HappiPugCloudService/api/token')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (token) { return localStorage.setItem('apitoken', token.access_token); }, function (err) { return console.log(err); });
                }
                AdminHome = __decorate([
                    core_1.Component({
                        //selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: "\n\t\t\t\t\t\t\t\t\t<h1>admin</h1>\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/videos', component: admin_videos_1.AdminVideos, name: 'AdminHome', useAsDefault: true },
                        { path: '/play/:id', component: admin_videoplay_1.AdminVideoPlay, name: 'AdminPlay' },
                        // { path: '/admin/:video/...', component: AdminVideo, name: 'Users' },
                        { path: '/**', redirectTo: ['AdminHome'] }
                    ]), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient])
                ], AdminHome);
                return AdminHome;
            }());
            exports_1("AdminHome", AdminHome);
        }
    }
});
//# sourceMappingURL=admin.home.js.map