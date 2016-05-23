import { Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';
import {CarouselComponent } from '../common/carousel.component';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo} from '../interfaces/videoinfo';
@Component({
	selector: 'hp-admin',
	providers: [HttpClient, HTTP_PROVIDERS],
	template:   `
						<hp-carousel [title]="title" [cvideos] = "videos" (redirectFun)="redirectURL($event)" > </hp-carousel>

                `,
	directives: [CarouselComponent]
})
	


export class AdminVideos {
    //https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/


    httpclient: HttpClient;
    newvid: videoinfo;
	videos: videoinfo[];
    title: string;
    router: Router;
    constructor(httpClient: HttpClient, router: Router) {
        this.httpclient = httpClient;
        this.router = router;
		this.videos = [];
		this.title = "Trailors";
		this.getVideos(httpClient);
	}


    public getVideos(httpClient: HttpClient) {

       

		httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t&maxResults=25')

			.map((res: Response) => res.json())
			.map((res: any) => {

				var myvideos = new Array();

				res.items.forEach(function (item, i) {

		    myvideos.push(new videoinfo(null, item.snippet.title, item.snippet.resourceId.videoId, null, null, null, item.snippet.thumbnails.medium.url ));

				})

				return myvideos;

			}

				)
			.subscribe(res => { console.log(res); this.videos = res });


	}

	public redirectURL(video: videoinfo) {

        console.log(video);
        this.checkAndAddVideo(video) ;
		}

    public checkAndAddVideo(video: videoinfo) {


        var vidInfo = this.httpclient.get('http://youapihappipug.azurewebsites.net/api/video/' + video.YoutubeID)

            .map((res: Response) => res.json())
            .map((res: any) => {

                var myvideos = res;

				return myvideos;

            }

            )
            .subscribe(res => {

                console.log(res);
                if (res != null) {
                    this.router.navigate(['AdminPlay', { id: res.YoutubeID, dbid: res.Id }]);
                }
                else {


                    this.httpclient.post('http://localhost/HappiPugCloudService/api/video', JSON.stringify(video))


                        .map(response => response.json())
                        .subscribe(
                        res => {
                            console.log('success');
                            this.router.navigate(['AdminPlay', { id: res.YoutubeID, dbid: res.Id  }]);
                        },
                        this.logError,
                        () => console.log('Authentication Complete')
                        );
                } 
            });
         
    }


    public logError(error: Response) {
        console.log(error);
        //return Observable.throw(error.json().error || 'Server error');
    }

}








