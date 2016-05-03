 /////<reference path="../../typings/jquery/jquery.d.ts" />
import { Component} from 'angular2/core';
import { AfterViewInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
//import {MediaElementPlayer} from 'build/mediaelementplayer';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo} from '../interfaces/videoinfo';
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
	constructor(httpClient: HttpClient, routeParams: RouteParams) {

				this.videosrc = "www.youtube.com/watch?v=" + routeParams.get('id');
        //setTimeout(() => {
					

        //}, 0);

				 	
			//http://www.ghadeerrahhal.com/play-video-with-html5-and-angularjs/
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
                        console.log('time chnage'+mediaElement.currentTime);
                    }, false);

                    mediaElement.addEventListener('seeking', function (e) {
                        console.log('seeking'+mediaElement.currentTime);
                    }, false);

                   // alert('success');
                }
			});
		player.setSrc(this.videosrc);
	} 


}








