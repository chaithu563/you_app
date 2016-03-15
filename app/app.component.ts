import { Component} from 'angular2/core';
import {HeaderComponent} from './content/header/header.component';
import {BodyComponent} from './content/body/body.component';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {HttpClient} from './httpclient';

@Component({
    selector: 'hp-app',
    viewProviders: [HTTP_PROVIDERS],
    template: '<hp-header></hp-header><hp-body></hp-body>',
    directives: [HeaderComponent, BodyComponent]
})
export class AppComponent {
    

    //constructor(httpClient: HttpClient) {
    //    httpClient.get('https://www.googleapis.com/youtube/v3/playlists')
           
    //        .map(res => res.json())
            
    //        .subscribe(res => console.log(res));
    //}

    constructor(http: Http) {
        http.get('https://www.googleapis.com/youtube/v3/playlists')
            // Call map on the response observable to get the parsed people object
            .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(people => console.log(people));
    }
}
