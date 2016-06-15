 /////<reference path="../../typings/jquery/jquery.d.ts" />

import { AfterViewInit, AfterViewChecked} from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from '@angular/router-deprecated';
//import {MediaElementPlayer} from 'build/mediaelementplayer';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild} from '@angular/core';
import { Http, HTTP_PROVIDERS, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo } from '../interfaces/videoinfo';
import {shopitem } from '../interfaces/shopitem';
import {shopitemComponent } from '../admin/shopinfo.component';
//import {YoutubeVideo} from 'YoutubeVideo';
//declare var $: JQueryStatic;
declare var YoutubeVideo: any;
declare var MediaElementPlayer: any;
@Component({
	//selector: 'hp-admin',
   
	providers: [HttpClient, HTTP_PROVIDERS],
	
	templateUrl: '../app/admin/admin.videoplay.html',
	//template: require('./app.html'),
	styleUrls: ['../app/admin/admin.videoplay.css'],
    directives: [CORE_DIRECTIVES, shopitemComponent],
		changeDetection: ChangeDetectionStrategy.Default 
})



export class AdminVideoPlay implements AfterViewInit, AfterViewChecked {

  @ViewChild(shopitemComponent) viewChild: shopitemComponent;
	videosrc: string;
    title: string;
    curtime: number;
     shopinfo: shopitem;
    vdbid: string;
    http: Http;
    httpclient: HttpClient;
    constructor(httpClient: HttpClient, routeParams: RouteParams, http: Http, private cd: ChangeDetectorRef) {
                this.vdbid = routeParams.get('dbid');
				this.videosrc = "www.youtube.com/watch?v=" + routeParams.get('id');
        this.httpclient = httpClient;
        this.http = http;
        this.shopinfo = { Id: 1, ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
				//this.cd.detectChanges();
        this.curtime = 0;
	}



	ngAfterViewInit() {


		var player = new MediaElementPlayer('video',
			{
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
                        //$("#currentTime").change(); 
                        input.trigger('change');
                    }, false);

                    mediaElement.addEventListener('seeking', function (e) {
                        console.log('seeking'+mediaElement.currentTime);
                    }, false);

                   // alert('success');
                }
			});
    player.setSrc(this.videosrc);


   


	} 

    ngOnInit() {
        //this.addNewItem.subscribe(() => {
           
        //    this.cd.markForCheck(); // marks path
        //})
  }

		ngOnChanges() { // <------
		
			var newitem = new shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
			this.shopinfo = newitem;
		}

		ngAfterViewChecked() {
			console.log('GrandChild: in ngAfterViewChecked');
			var newitem = new shopitem(11, 2, 0, this.curtime, this.curtime, "", 1);
			this.shopinfo = newitem;
		}

      public  addNewItem()
      {
         // var curTime = (document.getElementById('MyAdminVideo1').currentTime);
				var newitem = new shopitem(11,  2,  0,  this.curtime,  this.curtime, "", 1 );
				
				this.cd.detectChanges()

          var item = { ProductHandle: null, PTop: 2, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
          this.shopinfo = newitem;
          var headers = new Headers({ 'Content-Type': 'application/json' });
         var options = new RequestOptions({ headers: headers });

          this.http.post('http://localhost/HappiPugCloudService/api/VideoShopItem', JSON.stringify(item), options)


              .map(response => response.json())
              .subscribe(
              res => {
                  console.log('success');
                  this.shopinfo = res;
                  this.vdbid = '90';
                  console.log(this.shopinfo);
              }
             
              );
     
      }

    public saveItem() {

        console.log("item saved");

    }

    public deleteItem() {

        console.log("item deleted");

    }

}








