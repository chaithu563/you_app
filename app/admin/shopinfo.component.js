System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var shopitemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            shopitemComponent = (function () {
                function shopitemComponent(cd) {
                    this.cd = cd;
                    this.saveFun = new core_1.EventEmitter();
                    this.addFun = new core_1.EventEmitter();
                    this.deleteFun = new core_1.EventEmitter();
                }
                shopitemComponent.prototype.ngOnInit = function () {
                    //this.shopitem.subscribe(() => {
                    //    console.log('deted'); // application state changed
                    //    this.cd.markForCheck(); 
                    //})
                    this.cd.markForCheck();
                };
                shopitemComponent.prototype.ngOnChanges = function (changes) {
                    console.log(changes + 'chaned');
                };
                shopitemComponent.prototype.saveFun1 = function (shop) {
                    this.saveFun.next(shop);
                };
                shopitemComponent.prototype.deleteFun1 = function (shop) {
                    this.deleteFun.next(shop);
                };
                shopitemComponent.prototype.addFun1 = function () {
                    this.addFun.next();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], shopitemComponent.prototype, "saveFun", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], shopitemComponent.prototype, "addFun", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], shopitemComponent.prototype, "deleteFun", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.Observable !== 'undefined' && core_1.Observable) === 'function' && _a) || Object)
                ], shopitemComponent.prototype, "shopitem", void 0);
                shopitemComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-shopinfo',
                        //providers: [HttpClient, HTTP_PROVIDERS],
                        templateUrl: '../app/admin/admin.shopinfo.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        styleUrls: ['../app/admin/admin.videoplay.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.Default
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], shopitemComponent);
                return shopitemComponent;
                var _a;
            }());
            exports_1("shopitemComponent", shopitemComponent);
        }
    }
});
//# sourceMappingURL=shopinfo.component.js.map