import { Component} from 'angular2/core';

import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo} from '../interfaces/videoinfo';

@Component({
	//selector: 'hp-admin',
	providers: [HttpClient, HTTP_PROVIDERS],
	template: `
							<div> video play </div>

						 `,
	directives: []
})



export class AdminVideoPlay {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/



	video: videoinfo;
	title: string;
	constructor(httpClient: HttpClient) {


	}






}








