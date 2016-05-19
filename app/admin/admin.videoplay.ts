 /////<reference path="../../typings/jquery/jquery.d.ts" />
import { Component} from 'angular2/core';
import { AfterViewInit } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
//import {MediaElementPlayer} from 'build/mediaelementplayer';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo } from '../interfaces/videoinfo';
import {shopitem } from '../interfaces/shopitem';
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
	directives: []
})



export class AdminVideoPlay implements AfterViewInit {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/

	videosrc: string;
    title: string;
    curtime: number;
    shopinfo: shopitem;
    vdbid: string;
    httpclient: HttpClient;
	constructor(httpClient: HttpClient, routeParams: RouteParams) {
                this.vdbid = routeParams.get('dbid');
				this.videosrc = "www.youtube.com/watch?v=" + routeParams.get('id');
                this.httpclient = httpClient;
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
                    }, false);

                    mediaElement.addEventListener('seeking', function (e) {
                        console.log('seeking'+mediaElement.currentTime);
                    }, false);

                   // alert('success');
                }
			});
		player.setSrc(this.videosrc);
	} 

  
      public  addNewItem()
      {
         // var curTime = (document.getElementById('MyAdminVideo1').currentTime);
          var item = { ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
          //dataServices.addNewItem(item).then(function (data) {
          //    console.log(data);
          //    $scope.selectedItem = data.data.data;
          //    // handlePlusForItems();
          //    loadItemsData();
          //});

          this.httpclient.post('http://localhost/HappiPugCloudService/api/VideoShopItem', JSON.stringify(item))


              .map(response => response.json())
              .subscribe(
              res => {
                  console.log('success');
                  this.shopinfo = res;
                  console.log(this.shopinfo);
              }
             
              );
     
         


         

      }

    public saveItem() {



    }

    public deleteItem() {


    }

}








