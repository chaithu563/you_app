import { Component} from 'angular2/core';

import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {CarouselComponent } from '../common/carousel.component';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo} from '../interfaces/videoinfo';
@Component({
	selector: 'hp-admin',
	providers: [HttpClient, HTTP_PROVIDERS],
	template: `
					
						<hp-carousel [title]="title" [cvideos] = "videos" (redirectFun)="redirectURL($event)" > </hp-carousel> `,
	directives: [CarouselComponent]
})
	


export class AdminVideos {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/



	videos: videoinfo[];
	title: string;
	constructor(httpClient: HttpClient) {
		
		this.videos = [];
		this.title = "Trailors";
		this.getVideos(httpClient);
	}


	public getVideos(httpClient: HttpClient) {
		httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t&maxResults=25')

			.map((res: Response) => res.json())
			.map((res: any) => {

				var myvideos = new Array();

				res.items.forEach(function (item, i) {

					myvideos.push(new videoinfo(item.snippet.resourceId.videoId, item.snippet.title, item.snippet.thumbnails.medium.url));

				})

				return myvideos;

			}

				)
			.subscribe(res => { console.log(res); this.videos = res });


	}

	public redirectURL(video: videoinfo) {


		}



}








