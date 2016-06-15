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
    @Input() curtime: Observable<string>;
  CurrentTime: any;
	testname: any;
	 httpclient: HttpClient;
	constructor(httpClient: HttpClient,private cd: ChangeDetectorRef) {
			this.testname = 'chaitanya';
      this.httpclient = httpClient;
      this.CurrentTime = this.curtime;
    }

    ngOnInit() {
        this.cd.markForCheck(); 
  }
    ngOnChanges(changes: { [propName: shopitem]: SimpleChange }) {
			console.log('Change detected:', changes['shopitem'].currentValue);
      this.shopitem = changes['shopitem'].currentValue;
      this.CurrentTime = this.curtime;
		}
    saveFun1(shop: shopitem) {

        this.saveFun.next(shop);

    }

    deleteFun1(shop: shopitem) {

        this.deleteFun.next(shop);

    }
    valuechange(newValue) {
      this.CurrentTime = newValue;
      this.CurrentTime = this.curtime;
      console.log(newValue)
    }

    setStartTime() {
      this.shopitem.StartTime = $('#currentTime').val();
      this.cd.detectChanges();
    }

    setEndtime() {
      this.shopitem.EndTime = $('#currentTime').val();
      this.cd.detectChanges();
    }

    addFun1() {
			this.testname = 'chaitanyachange';
			this.shopitem.PTop = 2;


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
