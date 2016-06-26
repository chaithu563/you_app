import { Directive, ElementRef, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
//import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {shopitem } from '../interfaces/shopitem';
import { Http, HTTP_PROVIDERS, Response, Headers, RequestOptions } from '@angular/http';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
declare var jQuery: any;

@Directive({
    providers: [HTTP_PROVIDERS],
    selector: '[draggable]',
  //  directives: [CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.Default
}
   

)



export class DraggableDirective implements OnInit {
	mousedrag;
	myele: any;
	startX: number;
	startY: number;
	x: number;
	y: number;

	@Input('draggable') data: shopitem;

    constructor(el: ElementRef, private cd: ChangeDetectorRef) {

		this.myele = el.nativeElement;

		el.nativeElement.style.position = 'absolute';
		el.nativeElement.style.border = '1px solid red';
		el.nativeElement.style.cursor = 'pointer';
		el.nativeElement.style.top = '0%';
		el.nativeElement.style.left = '0%';




	}

		ngOnInit() {
	
			this.myele.style.top = this.data.PTop+'%';
			this.myele.style.left = this.data.PLeft+'%';
			jQuery(this.myele).draggable({ containment: '.admin_video_overlays' });


		}

	@HostListener('mouseup', ['$event']) onMouseUp(event) {

        console.log(event);


        var top = Math.round(((this.myele.style.top.replace("px", "")) * 100) / this.myele.offsetParent.offsetHeight);
        var left = Math.round(((this.myele.style.left.replace("px", "")) * 100) / this.myele.offsetParent.offsetWidth);
        this.data.PTop = top;
        this.data.PLeft = left;
        this.cd.detectChanges();
	}

	@HostListener('mousedown', ['$event'])
	onMousedown(event) {

		console.log(event);

	}




}






