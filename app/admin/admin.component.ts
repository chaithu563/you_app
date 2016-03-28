import { Component} from 'angular2/core';

import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
@Component({
    selector: 'hp-admin',
    providers: [HttpClient, HTTP_PROVIDERS],
    template: '<h1>admin</h1>',
    //directives: [HeaderComponent, BodyComponent]
})
export class AdminComponent {


    constructor(httpClient: HttpClient, http: Http) {

        //http.get('http://localhost/shop/HappiPugService/HappiPugService/api/token')
        http.get('http://localhost/HappiPugCloudService/api/token')
            .map(res => res.json())
            .subscribe(token => localStorage.setItem('apitoken', token.access_token),
            err => console.log(err)
            );


        //https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t
        //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
        //UUoWg9A-3VNv7adgHLc4LheA
        //playlistItems?part=snippet&id=UUoWg9A-3VNv7adgHLc4LheA
        //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
        //https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part= contentDetails&forUsername=chaitanya.eedara  not work
        httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t')

            .map(res => res.json())

            .subscribe(res => console.log(res));
    }

   
}
