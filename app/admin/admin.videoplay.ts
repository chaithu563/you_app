import { Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';

import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo} from '../interfaces/videoinfo';

@Component({
	//selector: 'hp-admin',
	providers: [HttpClient, HTTP_PROVIDERS],
	
	templateUrl: '../app/admin/admin.videoplay.html',
	//template: require('./app.html'),
	styleUrls: ['../app/admin/admin.videoplay.css'],
	directives: []
})



export class AdminVideoPlay {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/

    videoId: string;
	title: string;
    constructor(httpClient: HttpClient, routeParams: RouteParams) {

        this.videoId=  routeParams.get('id');

	}






}








