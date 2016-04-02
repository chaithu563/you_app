import {bootstrap}    from 'angular2/platform/browser';
import {AdminHome} from './admin/admin.home';
import {provide, Component} from 'angular2/core';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HttpClient} from './httpclient';
import {ROUTER_DIRECTIVES, RouteConfig, Router, APP_BASE_HREF} from 'angular2/router';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';
// Routing is set up with the RouteConfig decorator
@Component({
    selector: 'hp-main',
    providers: [HttpClient, HTTP_PROVIDERS],
    // appInjector: [HttpClient],
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/admin/...', component: AdminHome, name: 'AdminHome', useAsDefault: true },
    { path: '/app', component: AppComponent, name: 'AppHome' },
    // { path: '/admin/:video/...', component: AdminVideo, name: 'Users' },
  //   { path: '/**', redirectTo: ['AppHome'] }
])

class Main {

}

bootstrap(Main, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
