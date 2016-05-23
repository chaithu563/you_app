import { Component, Input, Output, EventEmitter, Observable, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http';
//import {HttpClient} from './httpclient';
import {shopitem } from '../interfaces/shopitem';
@Component({
    selector: 'hp-shopinfo',
    //providers: [HttpClient, HTTP_PROVIDERS],

    templateUrl: '../app/admin/admin.shopinfo.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['../app/admin/admin.videoplay.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class shopitemComponent {
	@Output() saveFun: EventEmitter<any> = new EventEmitter();
    @Output() addFun: EventEmitter<any> = new EventEmitter();
    @Output() deleteFun: EventEmitter<any> = new EventEmitter();
	@Input() shopitem: Observable<shopitem>;
	

    constructor(private cd: ChangeDetectorRef) {


    }

    ngOnInit() {
        //this.shopitem.subscribe(() => {
        //    console.log('deted'); // application state changed
        //    this.cd.markForCheck(); 
        //})
        this.cd.markForCheck(); 
  }
    ngOnChanges(changes) {
        console.log(changes+'chaned');
    }
    saveFun1(shop: shopitem) {

        this.saveFun.next(shop);

    }

    deleteFun1(shop: shopitem) {

        this.deleteFun.next(shop);

    }
    addFun1() {

        this.addFun.next();
    }

}
