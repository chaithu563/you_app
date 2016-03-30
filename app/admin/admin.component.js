System.register(['angular2/core', '../common/carousel.component', 'angular2/http', '../httpclient', 'rxjs/Rx'], function(exports_1, context_1) {
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
                function AdminComponent() {
                    this.videos = [];
                    this.addVideos();
                }
                AdminComponent.prototype.addVideos = function () {
                    this.videos = [
                        { videoId: 1, imgUrl: '/app/content/header/imgs/movie1.jpg', videoName: 'Nenu Silaja' },
                        { videoId: 2, imgUrl: '/app/content/header/imgs/movie2.jpg', videoName: 'Nenu Silaja2' },
                        { videoId: 3, imgUrl: '/app/content/header/imgs/movie3.jpg', videoName: 'Nenu Silaja3' },
                        { videoId: 4, imgUrl: '/app/content/header/imgs/movie4.jpg', videoName: 'Nenu Silaja4' },
                        { videoId: 5, imgUrl: '/app/content/header/imgs/movie5.jpg', videoName: 'Nenu Silaja5' }
                    ];
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        template: '<h1>admin</h1><hp-carousel [cvideos]="videos"></hp-carousel> ',
                        directives: [carousel_component_1.CarouselComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map