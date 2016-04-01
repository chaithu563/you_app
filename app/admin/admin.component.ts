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
					
						<hp-carousel [title]="title" [cvideos] = "videos" > </hp-carousel> `,
	directives: [CarouselComponent]
})
	


export class AdminComponent {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/



	videos: videoinfo[];
	title: string;
	constructor(httpClient: HttpClient) {
		httpClient.get('http://localhost/HappiPugCloudService/api/token')
			.map(res => res.json())
			.subscribe(token => localStorage.setItem('apitoken', token.access_token),
				err => console.log(err)
				);
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



}








