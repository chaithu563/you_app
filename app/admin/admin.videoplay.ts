﻿ /////<reference path="../../typings/jquery/jquery.d.ts" />
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

    videoId: string;
	title: string;
	constructor(httpClient: HttpClient, routeParams: RouteParams) {

        this.videoId = routeParams.get('id');

        setTimeout(() => {
					//mejs.$ = jQuery;
					//$ = jQuery;
          //  new MediaElementPlayer('#videoPlayer');
					//$('audio, video').mediaelementplayer({});
					//var video = new YoutubeVideo({
					//	el: document.getElementsByTagName('video')[0]
					//})

					//video.load().then(() => {
					//	video.play();
					//	video.pause();
					//});

        }, 0);

				 	
			//http://www.ghadeerrahhal.com/play-video-with-html5-and-angularjs/
	}



	ngAfterViewInit() {
		//here you will have code where component content is ready.
		//$('audio, video').mediaelementplayer({});
	//	new MediaElementPlayer('#videoPlayer');
		var player = new MediaElementPlayer('video',
			{
				defaultVideoWidth: 960, defaultVideoHeight: 410,
				features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
				success: function (mediaElement, domObject) { alert('success'); }
			});
	} 


}








