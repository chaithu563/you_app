import { Component, Input, Output, EventEmitter, Observable, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { OnChanges } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http';
import {HttpClient} from '../httpclient';
import {shopitem } from '../interfaces/shopitem';
@Component({
    selector: 'hp-shopinfo',
    //providers: [HttpClient, HTTP_PROVIDERS],

    templateUrl: '../app/admin/admin.shopinfo.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['../app/admin/admin.videoplay.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class shopitemComponent implements OnChanges{
	@Output() saveFun: EventEmitter<any> = new EventEmitter();
    @Output() addFun: EventEmitter<any> = new EventEmitter();
    @Output() deleteFun: EventEmitter<any> = new EventEmitter();
	@Input() shopitem: Observable<shopitem>;
	
  //  	_shopitem: shopitem =null;
  //@Input()
  //set shopitem(shopitem: shopitem) {
  //  this._shopitem = (shopitem) || '<no name set>';
  //  	}
  //get shopitem(): Observable { return this._shopitem; }
	testname: any;
	 httpclient: HttpClient;
	constructor(httpClient: HttpClient,private cd: ChangeDetectorRef) {
			this.testname = 'chaitanya';
	//		cd.detach();
			//setInterval(() => {
			//	this.cd.detectChanges();
			//}, 5000);
		//	this.cd.detectChanges();
			this.httpclient = httpClient;
    }

    ngOnInit() {
        //this.shopitem.subscribe(() => {
        //    console.log('deted'); // application state changed
        //    this.cd.markForCheck(); 
        //})
        this.cd.markForCheck(); 
  }
    ngOnChanges(changes: { [propName: shopitem]: SimpleChange }) {
			console.log('Change detected:', changes['shopitem'].currentValue);
			this.shopitem = changes['shopitem'].currentValue;
		}
    saveFun1(shop: shopitem) {

        this.saveFun.next(shop);

    }

    deleteFun1(shop: shopitem) {

        this.deleteFun.next(shop);

    }
    addFun1() {

			//this.addFun.next();
		//	this.cd.detectChanges();
			this.testname = 'chaitanyachange';
			this.shopitem.PTop = 2;
			
			//setInterval(() => {
			//	this.shopitem.PTop = 2;
			//}, 5000);

			this.httpclient.post('http://localhost/HappiPugCloudService/api/VideoShopItem', JSON.stringify(this.shopitem))


				.map(response => response.json())
				.subscribe(
					res => {
						console.log('success');
						this.shopitem = res;
						this.shopitem.PLeft = 2;
					//	this.vdbid = '90';
						this.cd.detectChanges();
						console.log(this.shopitem);
					}

					);

    }

}
