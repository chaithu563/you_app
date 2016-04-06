System.register(['angular2/core', '../common/carousel.component', 'angular2/http', '../httpclient', 'rxjs/Rx', '../interfaces/videoinfo'], function(exports_1, context_1) {
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
    var core_1, carousel_component_1, http_1, httpclient_1, videoinfo_1;
    var AdminVideos;
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
            function (_1) {},
            function (videoinfo_1_1) {
                videoinfo_1 = videoinfo_1_1;
            }],
        execute: function() {
            AdminVideos = (function () {
                function AdminVideos(httpClient) {
                    this.videos = [];
                    this.title = "Trailors";
                    this.getVideos(httpClient);
                }
                AdminVideos.prototype.getVideos = function (httpClient) {
                    var _this = this;
                    httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t&maxResults=25')
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        var myvideos = new Array();
                        res.items.forEach(function (item, i) {
                            myvideos.push(new videoinfo_1.videoinfo(item.snippet.resourceId.videoId, item.snippet.title, item.snippet.thumbnails.medium.url));
                        });
                        return myvideos;
                    })
                        .subscribe(function (res) { console.log(res); _this.videos = res; });
                };
                AdminVideos.prototype.redirectURL = function (video) {
                    console.log(video);
                };
                AdminVideos = __decorate([
                    core_1.Component({
                        selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: "\n\t\t\t\t\t\n\t\t\t\t\t\t<hp-carousel [title]=\"title\" [cvideos] = \"videos\" (redirectFun)=\"redirectURL($event)\" > </hp-carousel> ",
                        directives: [carousel_component_1.CarouselComponent]
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient])
                ], AdminVideos);
                return AdminVideos;
            }());
            exports_1("AdminVideos", AdminVideos);
        }
    }
});
//# sourceMappingURL=admin.videos.js.map