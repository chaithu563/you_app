import { Component} from 'angular2/core';
import {HeaderComponent} from './content/header.component';
@Component({
    selector: 'hp-app',
    template: '<hp-header></hp-header><h1>Main</h1>',
    directives: [HeaderComponent]
})
export class AppComponent { }
