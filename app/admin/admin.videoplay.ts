 /////<reference path="../../typings/jquery/jquery.d.ts" />

import { AfterViewInit, AfterViewChecked, OnInit, OnChanges, SimpleChange, ElementRef} from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from '@angular/router-deprecated';
//import {MediaElementPlayer} from 'build/mediaelementplayer';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild} from '@angular/core';
import { Http, HTTP_PROVIDERS, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '../httpclient';
import 'rxjs/Rx';
import {videoinfo } from '../interfaces/videoinfo';
import {shopitem } from '../interfaces/shopitem';
import {shopitemComponent } from '../admin/shopinfo.component';
import {DraggableDirective } from '../common/drag.directive';
//import {YoutubeVideo} from 'YoutubeVideo';
//declare var $: JQueryStatic;
declare var YoutubeVideo: any;
declare var MediaElementPlayer: any;
@Component({
	//selector: 'hp-admin',
   
	providers: [HttpClient, HTTP_PROVIDERS],
	
	templateUrl: '../app/admin/admin.videoplay.html',
	styleUrls: ['../app/admin/admin.videoplay.css'],
	directives: [CORE_DIRECTIVES, shopitemComponent, DraggableDirective],
		changeDetection: ChangeDetectionStrategy.Default 
})



export class AdminVideoPlay implements AfterViewInit, AfterViewChecked, OnInit, OnChanges {

 // @ViewChild(shopitemComponent) viewChild: shopitemComponent;
    videosrc: string;
    myele: any;
    title: string;
    curtime: number;
     shopinfo: shopitem;
    vdbid: string;
    http: Http;
    httpclient: HttpClient;
    availItems: Array<shopitem>;
    availItemsTime: Array<shopitem>;
    constructor(el: ElementRef, httpClient: HttpClient, routeParams: RouteParams, http: Http, private cd: ChangeDetectorRef) {
        this.myele = el;
                this.vdbid = routeParams.get('dbid');
				this.videosrc = "www.youtube.com/watch?v=" + routeParams.get('id');
        this.httpclient = httpClient;
        this.http = http;
        this.curtime = 0;
        this.shopinfo = { Id: 1, ProductHandle: null, PTop: 0, PLeft: 0, StartTime: this.curtime, EndTime: this.curtime, Video_Id: this.vdbid };
				//this.cd.detectChanges();
        this.loadMovieItems();
     //   this.availItemsTime = 0;


	}

    openSelectedItem(item: shopitem) {

      //  alert(item);
        this.shopinfo = item;

    }


	ngAfterViewInit() {


		var player = new MediaElementPlayer('video',
			{
				defaultVideoWidth: 960, defaultVideoHeight: 410,
				features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
                success: function (mediaElement, domObject) {

                    console.log(mediaElement.duration);
                    // add event listener
                    mediaElement.addEventListener('timeupdate', function (e) {
                       // console.log('time chnage' + mediaElement.currentTime);
                        this.curtime = mediaElement.currentTime;
                       // console.log(this.viewChild);
                        var input = $('#currentTime');
                        input.val(mediaElement.currentTime).change(); 
                       
                        input.trigger('change');

                        var avitems = $('#avItems');
                     
                        $('#avItems').focus().trigger(jQuery.Event('keypress', { which: 13 })).change();
                        avitems.val(mediaElement.currentTime).change(); 
                        $("#avItems").focus();
                        $('#avItems').text(mediaElement.currentTime);
                    
                    }, false);

                    mediaElement.addEventListener('seeking', function (e) {
                        console.log('seeking'+mediaElement.currentTime);
                    }, false);

                   
                }
			});
    player.setSrc(this.videosrc);


	} 

    ngOnInit() {
        var self = this;
        setInterval(() => {
            var CT = $('#currentTime').val();
            self.availItemsTime = self.availItems.filter(x=> x.StartTime <= CT && CT <= x.EndTime);

          
            self.cd.detectChanges();

        }, 1000);
            
        }

         ngOnChanges(changes: any) {
             console.log('Change detected:', changes['availItemsTime'].currentValue);
             console.log(changes['availItemsTime'].currentValue);
         }
         

         loadMovieItems() {


             this.httpclient.get('http://localhost/HappiPugCloudService/api/VideoShopItem/VideoItemsSet/' + this.vdbid)


                .map(response => response.json())
                .subscribe(
                res => {
                    console.log('success');
                    this.availItems = res;
                    //this.shopitem.PLeft = 2;
                    //	this.vdbid = '90';
                    this.cd.detectChanges();
                    console.log(this.availItems);
                }

                );

         }

         //timeChange(event) {
         //    console.log(event);
         //    this.availItems = ( this.availItems);
         //}

		ngAfterViewChecked() {
			
		}

    
        changeData(data : any) {
            this.loadMovieItems();
        }
}








