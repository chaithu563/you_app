/////<reference path="../../typings/jquery/jquery.d.ts" />
System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '@angular/http', '../httpclient', 'rxjs/Rx', '../admin/shopinfo.component', '../common/drag.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, core_2, http_1, httpclient_1, shopinfo_component_1, drag_directive_1;
    var AdminVideoPlay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
            },
            function (drag_directive_1_1) {
                drag_directive_1 = drag_directive_1_1;
            }],
        execute: function() {
            AdminVideoPlay = (function () {
                function AdminVideoPlay(el, httpClient, routeParams, http, cd) {
                    this.cd = cd;
                    this.myele = el;
                    this.vdbid = routeParams.get('dbid');
                    this.videosrc = "www.youtube.com/watch?v=" + routeParams.get('id');
                    this.httpclient = httpClient;
                    this.http = http;
                    this.curtime = 0;
                    this.shopinfo = { Id: 1, ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
                    //this.cd.detectChanges();
                    this.loadMovieItems();
                    //   this.availItemsTime = 0;
                }
                AdminVideoPlay.prototype.openSelectedItem = function (item) {
                    //  alert(item);
                    this.shopinfo = item;
                };
                AdminVideoPlay.prototype.ngAfterViewInit = function () {
                    var self = this;
                    var player = new MediaElementPlayer('video', {
                        defaultVideoWidth: 960, defaultVideoHeight: 410,
                        features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
                        success: function (mediaElement, domObject) {
                            console.log(mediaElement.duration);
                            // add event listener
                            mediaElement.addEventListener('timeupdate', function (e) {
                                // console.log('time chnage' + mediaElement.currentTime);
                                self.curtime = mediaElement.currentTime;
                                // console.log(this.viewChild);
                                //var input = $('#currentTime');
                                //input.val(mediaElement.currentTime).change(); 
                                //input.trigger('change');
                                self.availItemsTime = self.availItems.filter(function (x) { return x.StartTime <= self.curtime && self.curtime <= x.EndTime; });
                                self.cd.detectChanges();
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
                AdminVideoPlay.prototype.ngOnChanges = function (changes) {
                    console.log('Change detected:', changes['availItemsTime'].currentValue);
                    console.log(changes['availItemsTime'].currentValue);
                };
                AdminVideoPlay.prototype.loadMovieItems = function () {
                    var self = this;
                    this.httpclient.get('http://localhost/HappiPugCloudService/api/VideoShopItem/VideoItemsSet/' + this.vdbid)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        console.log('success');
                        self.availItems = res;
                        //this.shopitem.PLeft = 2;
                        //	this.vdbid = '90';
                        self.cd.detectChanges();
                        console.log(self.availItems);
                    });
                };
                //timeChange(event) {
                //    console.log(event);
                //    this.availItems = ( this.availItems);
                //}
                AdminVideoPlay.prototype.ngAfterViewChecked = function () {
                };
                AdminVideoPlay.prototype.changeData = function (data) {
                    this.loadMovieItems();
                };
                AdminVideoPlay = __decorate([
                    core_2.Component({
                        //selector: 'hp-admin',
                        providers: [httpclient_1.HttpClient, http_1.HTTP_PROVIDERS],
                        templateUrl: '../app/admin/admin.videoplay.html',
                        styleUrls: ['../app/admin/admin.videoplay.css'],
                        directives: [common_1.CORE_DIRECTIVES, shopinfo_component_1.shopitemComponent, drag_directive_1.DraggableDirective],
                        changeDetection: core_2.ChangeDetectionStrategy.Default
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, httpclient_1.HttpClient, router_deprecated_1.RouteParams, http_1.Http, core_2.ChangeDetectorRef])
                ], AdminVideoPlay);
                return AdminVideoPlay;
            }());
            exports_1("AdminVideoPlay", AdminVideoPlay);
        }
    }
});
//# sourceMappingURL=admin.videoplay.js.map