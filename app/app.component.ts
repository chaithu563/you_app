import { Component} from '@angular/core';
import {HeaderComponent} from './content/header/header.component';
import {BodyComponent} from './content/body/body.component';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {HttpClient} from './httpclient';
import 'rxjs/Rx';
@Component({
    providers: [HttpClient, HTTP_PROVIDERS],
    template: '<hp-header></hp-header><hp-body></hp-body>',
    directives: [HeaderComponent, BodyComponent]
})
export class AppComponent {
    

	constructor(httpClient: HttpClient, http: Http) {

        http.get('http://localhost/HappiPugService/api/token')
			.map(res => res.json())
			.subscribe(token => localStorage.setItem('apitoken', token.access_token),
			err => console.log(err)
			);

			httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t')
           
            .map(res => res.json())
            
            .subscribe(res => console.log(res));
    }

}
