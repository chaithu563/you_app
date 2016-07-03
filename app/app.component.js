System.register(['@angular/core', './content/header/header.component', './content/body/body.component', '@angular/http', './httpclient', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, header_component_1, body_component_1, http_1, httpclient_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (body_component_1_1) {
                body_component_1 = body_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(httpClient, http) {
                    http.get('http://localhost/HappiPugService/api/token')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (token) { return localStorage.setItem('apitoken', token.access_token); }, function (err) { return console.log(err); });
                    httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return console.log(res); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: '<hp-header></hp-header><hp-body></hp-body>',
                        directives: [header_component_1.HeaderComponent, body_component_1.BodyComponent]
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map