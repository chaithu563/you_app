import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AdminHome} from './admin.home';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig, Router, APP_BASE_HREF} from 'angular2/router';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';


// Routing is set up with the RouteConfig decorator
@RouteConfig([
    { path: '/admin', component: AdminHome, name: 'AdminHome', useAsDefault: true },
    // { path: '/admin/:video/...', component: AdminVideo, name: 'Users' },
  //  { path: '/**', redirectTo: ['AdminHome'] }
])

class AdminMain {

}
bootstrap(AdminMain, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
