/////<reference path="../../typings/jquery/jquery.d.ts" />
System.register(['@angular/common', '@angular/router-deprecated', '@angular/core', '@angular/http', '../httpclient', 'rxjs/Rx', '../admin/shopinfo.component'], function(exports_1, context_1) {
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
    var common_1, router_deprecated_1, core_1, http_1, httpclient_1, shopinfo_component_1;
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
                    this.curtime = 0;
                    this.shopinfo = { Id: 1, ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
                    //this.cd.detectChanges();
                    this.loadMovieItems();
                }
                AdminVideoPlay.prototype.openSelectedItem = function (item) {
                    alert(item);
                };
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
                                console.log(this.viewChild);
                                var input = $('#currentTime');
                                input.val(mediaElement.currentTime).change();
                                input.trigger('change');
                            }, false);
                            mediaElement.addEventListener('seeking', function (e) {
                                console.log('seeking' + mediaElement.currentTime);
                            }, false);
                        }
                    });
                    player.setSrc(this.videosrc);
                };
                AdminVideoPlay.prototype.ngOnInit = function () {
                };
                AdminVideoPlay.prototype.ngOnChanges = function () {
                    //var newitem = new shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
                    //this.shopinfo = newitem;
                };
                AdminVideoPlay.prototype.loadMovieItems = function () {
                    var _this = this;
                    this.httpclient.get('http://localhost/HappiPugCloudService/api/VideoShopItem/VideoItemsSet/' + this.vdbid)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        console.log('success');
                        _this.availItems = res;
                        //this.shopitem.PLeft = 2;
                        //	this.vdbid = '90';
                        _this.cd.detectChanges();
                        console.log(_this.availItems);
                    });
                };
                AdminVideoPlay.prototype.ngAfterViewChecked = function () {
                    //console.log('GrandChild: in ngAfterViewChecked');
                    //var newitem = new shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
                    //this.shopinfo = newitem;
                };
                AdminVideoPlay.prototype.addNewItem = function () {
                };
                AdminVideoPlay = __decorate([
                    core_1.Component({
                        //selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        templateUrl: '../app/admin/admin.videoplay.html',
                        styleUrls: ['../app/admin/admin.videoplay.css'],
                        directives: [common_1.CORE_DIRECTIVES, shopinfo_component_1.shopitemComponent, draggable],
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