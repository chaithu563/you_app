System.register(['angular2/core', '../common/carousel.component', 'angular2/http', '../httpclient', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, carousel_component_1, http_1, httpclient_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            },
            function (_1) {}],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(httpClient, http) {
                    //http.get('http://localhost/shop/HappiPugService/HappiPugService/api/token')
                    http.get('http://localhost/HappiPugCloudService/api/token')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (token) { return localStorage.setItem('apitoken', token.access_token); }, function (err) { return console.log(err); });
                    //https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t
                    //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
                    //UUoWg9A-3VNv7adgHLc4LheA
                    //playlistItems?part=snippet&id=UUoWg9A-3VNv7adgHLc4LheA
                    //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
                    //https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part= contentDetails&forUsername=chaitanya.eedara  not work
                    httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return console.log(res); });
                }
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: '<h1>admin</h1><hp-carousel></hp-carousel> ',
                        directives: [carousel_component_1.CarouselComponent]
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient, http_1.Http])
                ], AdminComponent);
                return AdminComponent;
            })();
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map