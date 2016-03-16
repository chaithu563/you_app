import { Component} from 'angular2/core';
import {HeaderComponent} from './content/header/header.component';
import {BodyComponent} from './content/body/body.component';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from './httpclient';
import 'rxjs/Rx';
@Component({
    selector: 'hp-app',
    providers: [HttpClient, HTTP_PROVIDERS],
   // appInjector: [HttpClient],
    template: '<hp-header></hp-header><hp-body></hp-body>',
    directives: [HeaderComponent, BodyComponent]
})
export class AppComponent {
    

    constructor(httpClient: HttpClient) {
    //'https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t
    //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
    //UUoWg9A-3VNv7adgHLc4LheA
        httpClient.get('https://www.googleapis.com/youtube/v3/PlaylistItems?part=snippet&id=UUoWg9A-3VNv7adgHLc4LheA')
           
            .map(res => res.json())
            
            .subscribe(res => console.log(res));
    }

    //constructor(http: Http) {
    //    http.get('https://www.googleapis.com/youtube/v3/playlists')
    //        // Call map on the response observable to get the parsed people object
    //        .map(res => res.json())
    //        // Subscribe to the observable to get the parsed people object and attach it to the
    //        // component
    //        .subscribe(people => console.log(people));
    //}

    //result: Object;
    //constructor(http: Http) {
    //    this.result = { friends: [] };
    //    http.get('https://www.googleapis.com/youtube/v3/playlists').map((res: Response) => res.json()).subscribe(res => this.result = res);
    //}
}
