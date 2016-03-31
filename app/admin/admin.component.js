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
                function AdminComponent(httpClient) {
                    httpClient.get('http://localhost/HappiPugCloudService/api/token')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (token) { return localStorage.setItem('apitoken', token.access_token); }, function (err) { return console.log(err); });
                    this.videos = [];
                    this.tvideos = [];
                    this.title = "Trailors";
                    this.getVideos(httpClient);
                }
                AdminComponent.prototype.getVideos = function (httpClient) {
                    var _this = this;
                    this.videos = [
                        { videoId: 1, imgUrl: '/app/content/header/imgs/movie1.jpg', videoName: 'Nenu Silaja' },
                        { videoId: 2, imgUrl: '/app/content/header/imgs/movie2.jpg', videoName: 'Nenu Silaja2' },
                        { videoId: 3, imgUrl: '/app/content/header/imgs/movie3.jpg', videoName: 'Nenu Silaja3' },
                        { videoId: 4, imgUrl: '/app/content/header/imgs/movie4.jpg', videoName: 'Nenu Silaja4' },
                        { videoId: 5, imgUrl: '/app/content/header/imgs/movie5.jpg', videoName: 'Nenu Silaja5' }
                    ];
                    httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t&maxResults=25')
                        .map(function (res) { return res.json(); })
                        .map(function (x) { _this.tvideos.push(); })
                        .subscribe(function (res) { return console.log(res); });
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: '<h1>admin</h1><hp-carousel [title]="title" [cvideos]="videos"></hp-carousel> ',
                        directives: [carousel_component_1.CarouselComponent]
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient])
                ], AdminComponent);
                return AdminComponent;
            })();
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map