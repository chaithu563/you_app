import { Component} from 'angular2/core';
import {AdminComponent} from './admin.component';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import 'rxjs/Rx';

@Component({
	selector: 'hp-admin',

	template: `
									<h1>admin</h1>				<router-outlet></router-outlet>
						`,
	directives: [ROUTER_DIRECTIVES]
})

// Routing is set up with the RouteConfig decorator
@RouteConfig([
		{ path: '/admin', component: AdminComponent, name: 'AdminHome', useAsDefault: true },
 // { path: '/admin/:video/...', component: AdminVideo, name: 'Users' },
  { path: '/**', redirectTo: ['AdminHome'] }
])

export class AdminHome {
	//https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/


	constructor() {
		
	}




}








