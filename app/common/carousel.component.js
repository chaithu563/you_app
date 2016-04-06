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
                function CarouselComponent() {
                    this.redirectFun = new core_1.EventEmitter();
                }
                //constructor() {
                //}
                CarouselComponent.prototype.callredirect = function (video) {
                    this.redirectFun.next(video);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CarouselComponent.prototype, "redirectFun", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CarouselComponent.prototype, "cvideos", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CarouselComponent.prototype, "title", void 0);
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