import { Component} from 'angular2/core';
import {CarouselComponent } from '../common/carousel.component';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo} from '../interfaces/videoinfo';
@Component({
	selector: 'hp-admin',
	providers: [HttpClient, HTTP_PROVIDERS],
	template: '<h1>admin</h1><hp-carousel [title]="title" [cvideos]="videos"></hp-carousel> ',
	directives: [CarouselComponent]
})
export class AdminComponent {


	//constructor(httpClient: HttpClient, http: Http) {

	//    //http.get('http://localhost/shop/HappiPugService/HappiPugService/api/token')
	//    http.get('http://localhost/HappiPugCloudService/api/token')
	//        .map(res => res.json())
	//        .subscribe(token => localStorage.setItem('apitoken', token.access_token),
	//        err => console.log(err)
	//        );


	//    //https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t
	//    //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
	//    //UUoWg9A-3VNv7adgHLc4LheA
	//    //playlistItems?part=snippet&id=UUoWg9A-3VNv7adgHLc4LheA
	//    //channels?part=contentDetails&id=UCoWg9A-3VNv7adgHLc4LheA
	//    //https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part= contentDetails&forUsername=chaitanya.eedara  not work
	//    httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t')

	//        .map(res => res.json())

	//				.subscribe(res => console.log(res));


	//}


    videos: videoinfo[];
    tvideos: videoinfo[];
    title: string;
    constructor(httpClient: HttpClient) {
        httpClient.get('http://localhost/HappiPugCloudService/api/token')
	        .map(res => res.json())
	        .subscribe(token => localStorage.setItem('apitoken', token.access_token),
	        err => console.log(err)
	        );
        this.videos = [];
        this.tvideos = [];
        this.title = "Trailors";
        this.getVideos(httpClient);
	}

    public getVideos(httpClient: HttpClient) {
		this.videos = [
    		{ videoId: 1, imgUrl: './app/content/header/imgs/movie1.jpg', videoName: 'Nenu Silaja' },
    		{ videoId: 2, imgUrl: './app/content/header/imgs/movie2.jpg', videoName: 'Nenu Silaja2' },
    		{ videoId: 3, imgUrl: './app/content/header/imgs/movie3.jpg', videoName: 'Nenu Silaja3' },
    		{ videoId: 4, imgUrl: './app/content/header/imgs/movie4.jpg', videoName: 'Nenu Silaja4' },
    		{ videoId: 5, imgUrl: './app/content/header/imgs/movie5.jpg', videoName: 'Nenu Silaja5' }
        ];


        httpClient.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLN-d9pcl44sYHJbw2Kobs355w1Sj2o52t&maxResults=25')

	        .map((res:Response) => res.json())
            //.map(x=> {

            //    this.tvideos.push(new videoinfo(){videoId=x.id,videoName=x.name,imgUrl=x.url});

            //})

					.map((res: any) => {
					//new videoinfo(){videoId = x.id, videoName = x.name, imgUrl = x.url }
				//	var myitem = new videoinfo();
					var myvideos = new Array();
					//fore (var i = 0; i < res.items; i++) {

					//	myitem.videoId = res.items[i].snippet.resourceId.videoId;
					//	myitem.videoName = res.items[i].snippet.title;
					//	myitem.imgUrl = res.items[i].snippet.thumbnails.medium.url;
					//	myvideos.push(myitem);
					//}
					res.items.forEach(function (item,i) {

						//myitem.videoId = item.snippet.resourceId.videoId;
						//myitem.videoName = item.snippet.title;
						//myitem.imgUrl = item.snippet.thumbnails.medium.url;
						myvideos.push(new videoinfo(item.snippet.resourceId.videoId, item.snippet.title, item.snippet.thumbnails.medium.url));

					})
					
					return myvideos;

					}

					)
					.subscribe(res => { console.log(res); this.videos=res });


	}



	}








