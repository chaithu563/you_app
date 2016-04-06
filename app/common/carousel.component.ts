import { Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
//import {HttpClient} from './httpclient';
import {videoinfo} from '../interfaces/videoinfo';
@Component({
	selector: 'hp-carousel',
	//providers: [HttpClient, HTTP_PROVIDERS],
	
	templateUrl: 'app/common/carousel.component.html',
	directives: [CORE_DIRECTIVES],
	styleUrls: ['app/common/carousel.component.css']
})
export class CarouselComponent {
	@Output() redirectFun: EventEmitter<any> = new EventEmitter();
	@Input() cvideos: videoinfo[];
	@Input() title: string;
	
	//constructor() {
    	

	//}

	callredirect(video:videoinfo) {

		this.redirectFun.next(video);

		}

}
