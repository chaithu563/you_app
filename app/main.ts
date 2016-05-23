import {bootstrap} from '@angular/platform-browser-dynamic';
import {AdminHome} from './admin/admin.home';
import {provide, Component} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpClient} from './httpclient';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS,RouteConfig, Router} from '@angular/router-deprecated';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
// Routing is set up with the RouteConfig decorator
@Component({
    selector: 'hp-main',
    providers: [HttpClient, HTTP_PROVIDERS],
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/admin/...', component: AdminHome, name: 'AdminHome', useAsDefault: true },
    { path: '/app', component: AppComponent, name: 'AppHome' }
   
])

 export class Main {

}

bootstrap(Main, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
