import {bootstrap}    from 'angular2/platform/browser';
import {AdminComponent} from './admin.component';
import {HTTP_PROVIDERS} from 'angular2/http';
bootstrap(AdminComponent, [HTTP_PROVIDERS]);
