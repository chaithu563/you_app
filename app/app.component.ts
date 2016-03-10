import { Component} from 'angular2/core';
import {HeaderComponent} from './content/header/header.component';
import {BodyComponent} from './content/body/body.component';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {HttpClient} from './httpclient';

@Component({
    selector: 'hp-app',
    template: '<hp-header></hp-header><hp-body></hp-body>',
    directives: [HeaderComponent, BodyComponent]
})
export class AppComponent {
    

    constructor(httpClient: HttpClient) {
        httpClient.get('https://www.googleapis.com/youtube/v3/playlists')
           
            .map(res => res.json())
            
            .subscribe(res => console.log(res));
    }
}
