System.register(['angular2/core', 'angular2/router', 'angular2/http', '../httpclient', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, httpclient_1;
    var AdminVideoPlay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            },
            function (_1) {}],
        execute: function() {
            AdminVideoPlay = (function () {
                function AdminVideoPlay(httpClient, routeParams) {
                    this.videoId = routeParams.get('id');
                }
                AdminVideoPlay = __decorate([
                    core_1.Component({
                        //selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        templateUrl: '../app/admin/admin.videoplay.html',
                        //template: require('./app.html'),
                        styleUrls: ['../app/admin/admin.videoplay.css'],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient, router_1.RouteParams])
                ], AdminVideoPlay);
                return AdminVideoPlay;
            })();
            exports_1("AdminVideoPlay", AdminVideoPlay);
        }
    }
});
//# sourceMappingURL=admin.videoplay.js.map