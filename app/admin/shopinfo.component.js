System.register(['@angular/core', '@angular/common', '../httpclient'], function(exports_1, context_1) {
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
    var core_1, common_1, httpclient_1;
    var shopitemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            }],
        execute: function() {
            shopitemComponent = (function () {
                function shopitemComponent(httpClient, cd) {
                    this.cd = cd;
                    this.changeData = new core_1.EventEmitter();
                    this.httpclient = httpClient;
                    this.CurrentTime = this.curtime;
                }
                shopitemComponent.prototype.ngOnInit = function () {
                    this.cd.markForCheck();
                };
                shopitemComponent.prototype.ngOnChanges = function (changes) {
                    console.log('Change detected:', changes['shopitem'].currentValue);
                    this.shopitem = changes['shopitem'].currentValue;
                    this.CurrentTime = this.curtime;
                };
                shopitemComponent.prototype.saveFun1 = function (shop) {
                    var _this = this;
                    this.httpclient.put('http://localhost/HappiPugCloudService/api/VideoShopItem/' + this.shopitem.Id, JSON.stringify(this.shopitem))
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        console.log('success');
                        _this.shopitem = res;
                        //this.shopitem.PLeft = 2;
                        //	this.vdbid = '90';
                        _this.cd.detectChanges();
                        console.log(_this.shopitem);
                        _this.changeData.next(null);
                    });
                };
                shopitemComponent.prototype.deleteFun1 = function (shop) {
                    var _this = this;
                    this.httpclient.delete('http://localhost/HappiPugCloudService/api/VideoShopItem/' + this.shopitem.Id)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        console.log('success');
                        _this.shopitem = [];
                        //this.shopitem.PLeft = 2;
                        //	this.vdbid = '90';
                        _this.cd.detectChanges();
                        console.log(_this.shopitem);
                        _this.changeData.next(null);
                    });
                };
                //valuechange(newValue) {
                //  this.CurrentTime = newValue;
                //  this.CurrentTime = this.curtime;
                //  console.log(newValue)
                //}
                shopitemComponent.prototype.setStartTime = function () {
                    this.shopitem.StartTime = this.curtime;
                    this.cd.detectChanges();
                };
                shopitemComponent.prototype.setEndTime = function () {
                    this.shopitem.EndTime = this.curtime;
                    this.cd.detectChanges();
                };
                shopitemComponent.prototype.addFun1 = function () {
                    var _this = this;
                    //this.shopitem.PTop = 2;
                    var shopinfo = { Id: 1, ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.shopitem.Video_Id };
                    this.httpclient.post('http://localhost/HappiPugCloudService/api/VideoShopItem', JSON.stringify(shopinfo))
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        console.log('success');
                        _this.shopitem = res;
                        //this.shopitem.PLeft = 2;
                        //	this.vdbid = '90';
                        _this.cd.detectChanges();
                        console.log(_this.shopitem);
                        _this.changeData.next(null);
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], shopitemComponent.prototype, "changeData", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.Observable !== 'undefined' && core_1.Observable) === 'function' && _a) || Object)
                ], shopitemComponent.prototype, "shopitem", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_b = typeof core_1.Observable !== 'undefined' && core_1.Observable) === 'function' && _b) || Object)
                ], shopitemComponent.prototype, "curtime", void 0);
                shopitemComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-shopinfo',
                        //providers: [HttpClient, HTTP_PROVIDERS],
                        templateUrl: '../app/admin/admin.shopinfo.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        styleUrls: ['../app/admin/admin.videoplay.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.Default
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient, core_1.ChangeDetectorRef])
                ], shopitemComponent);
                return shopitemComponent;
                var _a, _b;
            }());
            exports_1("shopitemComponent", shopitemComponent);
        }
    }
});
//# sourceMappingURL=shopinfo.component.js.map