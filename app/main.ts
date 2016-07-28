import {bootstrap} from '@angular/platform-browser-dynamic';
import {AdminHome} from './admin/admin.home';
import {provide, Component} from '@angular/core';
import {AppComponent} from './app.component';
import {UserVideoPlay} from '../app/content/pages/videoplay/user.videoplay';
import {HTTP_PROVIDERS} from '@angular/http';
import {HttpClient} from './httpclient';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS,RouteConfig, Router} from '@angular/router-deprecated';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
// Routing is set up with the RouteConfig decorator
import {enableProdMode} from '@angular/core';
enableProdMode();
@Component({
    selector: 'hp-main',
    providers: [HttpClient, HTTP_PROVIDERS],
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/admin/...', component: AdminHome, name: 'AdminHome'},
        { path: '/app', component: AppComponent, name: 'AppHome'},
        { path: '/videoplay', component: UserVideoPlay, name: 'AppHome', useAsDefault: true }
])

 export class Main {

}

bootstrap(Main, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]).then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));