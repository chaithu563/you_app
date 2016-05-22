System.register(['angular2/core', 'angular2/common', '../interfaces/shopinfo'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, shopinfo_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (shopinfo_1_1) {
                shopinfo_1 = shopinfo_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                function CarouselComponent() {
                    this.saveFun = new core_1.EventEmitter();
                    this.deleteFun = new core_1.EventEmitter();
                }
                //constructor() {
                //}
                CarouselComponent.prototype.saveFun = function (shop) {
                    this.saveItem.next(shop);
                };
                CarouselComponent.prototype.deleteFun = function (shop) {
                    this.deleteItem.next(shop);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CarouselComponent.prototype, "saveFun", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CarouselComponent.prototype, "deleteFun", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof shopinfo_1.shopinfo !== 'undefined' && shopinfo_1.shopinfo) === 'function' && _a) || Object)
                ], CarouselComponent.prototype, "shopitem", void 0);
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-shopinfo',
                        //providers: [HttpClient, HTTP_PROVIDERS],
                        templateUrl: 'app/admin/admin.shopinfo.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        styleUrls: ['app/admin/admin.shopinfo.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselComponent);
                return CarouselComponent;
                var _a;
            })();
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=video.shopinfo.js.map