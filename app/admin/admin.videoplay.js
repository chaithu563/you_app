/////<reference path="../../typings/jquery/jquery.d.ts" />
System.register(['@angular/common', '@angular/router-deprecated', '@angular/core', '@angular/http', '../httpclient', 'rxjs/Rx', '../interfaces/shopitem', '../admin/shopinfo.component'], function(exports_1, context_1) {
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
    var common_1, router_deprecated_1, core_1, http_1, httpclient_1, shopitem_1, shopinfo_component_1;
    var AdminVideoPlay;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (httpclient_1_1) {
                httpclient_1 = httpclient_1_1;
            },
            function (_1) {},
            function (shopitem_1_1) {
                shopitem_1 = shopitem_1_1;
            },
            function (shopinfo_component_1_1) {
                shopinfo_component_1 = shopinfo_component_1_1;
            }],
        execute: function() {
            AdminVideoPlay = (function () {
                function AdminVideoPlay(httpClient, routeParams, http, cd) {
                    this.cd = cd;
                    this.vdbid = routeParams.get('dbid');
                    this.videosrc = "www.youtube.com/watch?v=" + routeParams.get('id');
                    this.httpclient = httpClient;
                    this.http = http;
                    this.shopinfo = { Id: 1, ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
                    //this.cd.detectChanges();
                }
                AdminVideoPlay.prototype.ngAfterViewInit = function () {
                    var player = new MediaElementPlayer('video', {
                        defaultVideoWidth: 960, defaultVideoHeight: 410,
                        features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
                        success: function (mediaElement, domObject) {
                            console.log(mediaElement.duration);
                            // add event listener
                            mediaElement.addEventListener('timeupdate', function (e) {
                                console.log('time chnage' + mediaElement.currentTime);
                                this.curtime = mediaElement.currentTime;
                            }, false);
                            mediaElement.addEventListener('seeking', function (e) {
                                console.log('seeking' + mediaElement.currentTime);
                            }, false);
                            // alert('success');
                        }
                    });
                    player.setSrc(this.videosrc);
                };
                AdminVideoPlay.prototype.ngOnInit = function () {
                    //this.addNewItem.subscribe(() => {
                    //    this.cd.markForCheck(); // marks path
                    //})
                };
                AdminVideoPlay.prototype.ngOnChanges = function () {
                    var newitem = new shopitem_1.shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
                    this.shopinfo = newitem;
                };
                AdminVideoPlay.prototype.ngAfterViewChecked = function () {
                    console.log('GrandChild: in ngAfterViewChecked');
                    var newitem = new shopitem_1.shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
                    this.shopinfo = newitem;
                };
                AdminVideoPlay.prototype.addNewItem = function () {
                    var _this = this;
                    // var curTime = (document.getElementById('MyAdminVideo1').currentTime);
                    var newitem = new shopitem_1.shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
                    this.cd.detectChanges();
                    var item = { ProductHandle: null, PTop: 2, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
                    this.shopinfo = newitem;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post('http://localhost/HappiPugCloudService/api/VideoShopItem', JSON.stringify(item), options)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        console.log('success');
                        _this.shopinfo = res;
                        _this.vdbid = '90';
                        console.log(_this.shopinfo);
                    });
                };
                AdminVideoPlay.prototype.saveItem = function () {
                    console.log("item saved");
                };
                AdminVideoPlay.prototype.deleteItem = function () {
                    console.log("item deleted");
                };
                AdminVideoPlay = __decorate([
                    core_1.Component({
                        //selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        templateUrl: '../app/admin/admin.videoplay.html',
                        //template: require('./app.html'),
                        styleUrls: ['../app/admin/admin.videoplay.css'],
                        directives: [common_1.CORE_DIRECTIVES, shopinfo_component_1.shopitemComponent],
                        changeDetection: core_1.ChangeDetectionStrategy.Default
                    }), 
                    __metadata('design:paramtypes', [httpclient_1.HttpClient, router_deprecated_1.RouteParams, http_1.Http, core_1.ChangeDetectorRef])
                ], AdminVideoPlay);
                return AdminVideoPlay;
            }());
            exports_1("AdminVideoPlay", AdminVideoPlay);
        }
    }
});
//# sourceMappingURL=admin.videoplay.js.map