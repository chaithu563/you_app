System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                //	videos: videoinfo[];
                function CarouselComponent() {
                    //this.videos = [];
                    //		this.addVideos();
                    //this.videos = [
                    //	{ videoId: 1, imgUrl: '/app/content/header/imgs/movie1.jpg', videoName: 'Nenu Silaja' },
                    //	{ videoId: 2, imgUrl: '/app/content/header/imgs/movie2.jpg', videoName: 'Nenu Silaja2' },
                    //	{ videoId: 3, imgUrl: '/app/content/header/imgs/movie3.jpg', videoName: 'Nenu Silaja3' },
                    //	{ videoId: 4, imgUrl: '/app/content/header/imgs/movie4.jpg', videoName: 'Nenu Silaja4' },
                    //	{ videoId: 5, imgUrl: '/app/content/header/imgs/movie5.jpg', videoName: 'Nenu Silaja5' }
                    //];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CarouselComponent.prototype, "cvideos", void 0);
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-carousel',
                        //providers: [HttpClient, HTTP_PROVIDERS],
                        templateUrl: 'app/common/carousel.component.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        styleUrls: ['app/common/carousel.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map