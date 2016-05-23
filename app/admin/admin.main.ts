import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AdminHome} from './admin.home';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, RouteConfig, Router, APP_BASE_HREF} from '@angular/router-deprecated';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from '@angular/router-deprecated';


// Routing is set up with the RouteConfig decorator
@RouteConfig([
    { path: '/admin', component: AdminHome, name: 'AdminHome', useAsDefault: true },
    // { path: '/admin/:video/...', component: AdminVideo, name: 'Users' },
  //  { path: '/**', redirectTo: ['AdminHome'] }
])

export class AdminMain {

}
bootstrap(AdminMain, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
