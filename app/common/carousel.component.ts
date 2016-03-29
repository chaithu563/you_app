import { Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
//import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
//import {HttpClient} from './httpclient';
import {videoinfo} from './interfaces/videoinfo';
@Component({
	selector: 'hp-carousel',
	//providers: [HttpClient, HTTP_PROVIDERS],
	
	templateUrl: 'app/common/carousel.component.html',
	directives: [CORE_DIRECTIVES],
	styleUrls: ['app/common/carousel.component.css']
})
export class CarouselComponent {

  videos: videoinfo[];
	constructor() {
		this.videos = [];
				this.addVideos();
	}

	public addVideos() {
		this.videos = [
			{ videoId: 1, imgUrl: '/app/content/header/imgs/movie1.jpg', videoName: 'Nenu Silaja' },
			{ videoId: 2, imgUrl: '/app/content/header/imgs/movie2.jpg', videoName: 'Nenu Silaja2' },
			{ videoId: 3, imgUrl: '/app/content/header/imgs/movie3.jpg', videoName: 'Nenu Silaja3' },
			{ videoId: 4, imgUrl: '/app/content/header/imgs/movie4.jpg', videoName: 'Nenu Silaja4' },
			{ videoId: 5, imgUrl: '/app/content/header/imgs/movie5.jpg', videoName: 'Nenu Silaja5' }
		];

	}
}
