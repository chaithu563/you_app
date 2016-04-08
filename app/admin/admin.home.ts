import { Component} from 'angular2/core';
import {AdminVideos} from './admin.videos';
import {AdminVideoPlay} from './admin.videoplay';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import 'rxjs/Rx';
import {HttpClient} from '../httpclient';
@Component({
	//selector: 'hp-admin',
    providers: [HttpClient, HTTP_PROVIDERS],
	template: `
									<h1>admin</h1>				<router-outlet></router-outlet>
						`,
	directives: [ROUTER_DIRECTIVES]
})

// Routing is set up with the RouteConfig decorator
@RouteConfig([
		{ path: '/videos', component: AdminVideos, name: 'AdminHome', useAsDefault: true },
		{ path: '/play/:id', component: AdminVideoPlay, name: 'AdminPlay' },
 // { path: '/admin/:video/...', component: AdminVideo, name: 'Users' },
  { path: '/**', redirectTo: ['AdminHome'] }
])

export class AdminHome {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/


    constructor(httpClient: HttpClient) {

        httpClient.get('http://localhost/HappiPugCloudService/api/token')
            .map(res => res.json())
            .subscribe(token => localStorage.setItem('apitoken', token.access_token),
            err => console.log(err)
        );

	}




}








