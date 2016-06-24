import { Directive, ElementRef, Input, HostListener } from '@angular/core';
//import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {shopitem } from '../interfaces/shopitem';
declare var jQuery: any;
@Directive({ selector: '[draggable]' })



export class DraggableDirective implements OnInit {
	mousedrag;
	myele: any;
	startX: number;
	startY: number;
	x: number;
	y: number;

	@Input('draggable') data: shopitem;

	constructor(el: ElementRef) {

		this.myele = el.nativeElement;

		//var topPer = ((this.myele[0].offsetParent.offsetHeight) * this.data.PTop) / 100;

		//var leftPer = ((this.myele[0].offsetParent.offsetWidth) * this.data.PLeft) / 100;
		//this.startX = 0, this.startY = 0, this.x = topPer, this.y = leftPer;

		//el.nativeElement.style{
		//    position: 'absolute',
		//    border: '1px solid red',
		//    backgroundColor: 'lightgrey',
		//    cursor: 'pointer',
		//    top:  '0%',
		//    left: '0%'
		//};

		el.nativeElement.style.position = 'absolute';
		el.nativeElement.style.border = '1px solid red';
		el.nativeElement.style.cursor = 'pointer';
		el.nativeElement.style.top = '0%';
		el.nativeElement.style.left = '0%';


		//		this.mousedrag = this.mousedown.toRx().map(event => {
		//			event.preventDefault();
		//			return {
		//				left: event.clientX - this.myele.nativeElement.getBoundingClientRect().left,
		//				top: event.clientY - this.myele.nativeElement.getBoundingClientRect().top
		//			};
		//		})
		//			.flatMap(imageOffset => this.mousemove.toRx().map(pos => ({
		//				top: pos.clientY - imageOffset.top,
		//				left: pos.clientX - imageOffset.left
		//			}))
		//				.takeUntil(this.mouseup.toRx()));

	}

		ngOnInit() {
		//this.myele.nativeElement.css({
		//	position: 'absolute',
		//	border: '1px solid red',
		//	backgroundColor: 'lightgrey',
		//	cursor: 'pointer',
		//	top: this.data.PTop + '%',
		//	left: this.data.PLeft + '%'
		//});
		//this.mousedrag.subscribe({
		//	next: pos => {
		//		// Update position
		//		this.myele.nativeElement.style.top = pos.top + 'px';
		//		this.myele.nativeElement.style.left = pos.left + 'px';
		//	}
		//});


			//this.myele.nativeElement.style({
		    //position: 'absolute',
		    //border: '1px solid red',
		    //backgroundColor: 'lightgrey',
		    //cursor: 'pointer',
		    //top: this.data.PTop + '%',
		    //left:this.data.PLeft + '%'
			//});
			this.myele.style.top = this.data.PTop+'%';
			this.myele.style.left = this.data.PLeft+'%';
			jQuery(this.myele).draggable({ containment: '.admin_video_overlays' });


		}

	//@HostListener('document:mousemove', ['$event']) onMouseMove(event) {

	//}
	//@HostListener('mouseup', ['$event']) onMouseUp(event) {

	//}

	//@HostListener('mousedown', ['$event'])
	//onMousedown(event) {

	//	this.mousedown(event);

	//}


	//private getPosition(element: HTMLElement) {
    //var xPosition = 0;
    //var yPosition = 0;

    //while (element) {
	//		xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
	//		yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
	//		this.myele = element.offsetParent;
    //}
    //return { x: xPosition, y: yPosition };
	//	}

	//	private mousedown(event) {
	//	var parentPosition = this.getPosition(event.currentTarget.offsetParent);
	//	event.preventDefault();
	//	this.startX = event.pageX - this.y;
	//	this.startY = event.pageY - this.x;
	//	}

	//private mousemove(event) {
	//	this.y = event.pageY - this.startY;
	//	this.x = event.pageX - this.startX;

	//	var finalPositiontop = this.myele[0].attributes["style"].value.split(';')[3].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");
	//	var finalPositionleft = this.myele[0].attributes["style"].value.split(';')[4].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");



	//	var top = Math.round(((finalPositiontop) * 100) / this.myele[0].offsetParent.offsetHeight);
	//	var left = Math.round(((finalPositionleft) * 100) / this.myele[0].offsetParent.offsetWidth);
	//	if (top + 1 >= 0 && left + 1 >= 0 && top - 1 <= 100 && left - 1 <= 100)
	//		this.myele.css({
	//			top: this.y + 'px',
	//			left: this.x + 'px'
	//		});
	//}

	//private mouseup() {

	//	var finalPositiontop = this.myele[0].attributes["style"].value.split(';')[3].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");
	//	var finalPositionleft = this.myele[0].attributes["style"].value.split(';')[4].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");



	//	var top = Math.round(((finalPositiontop) * 100) / this.myele[0].offsetParent.offsetHeight);
	//	var left = Math.round(((finalPositionleft) * 100) / this.myele[0].offsetParent.offsetWidth);
	//	this.data.PTop = this.myele[0].attributes["style"].value.split(';')[3].split(':')[1].indexOf("%") > -1 ? finalPositiontop : top;
	//	this.data.PLeft = this.myele[0].attributes["style"].value.split(';')[4].split(':')[1].indexOf("%") > -1 ? finalPositionleft : left;
	//	if (this.data.PTop >= 0 && this.data.PLeft >= 0 && this.data.PTop <= 100 && this.data.PLeft <= 100)
	//		this.myele.css({
	//			top: this.data.PTop + '%',
	//			left: this.data.PLeft + '%'
	//		});
	//}


}






//  --------



//angular.module('myApp.component', [])
//    .directive('myDraggable', ['$document', function ($document) {
//        return {
//            //priority: 100001,
//            restrict: 'A',
//            link: function (scope, element, attr) {

//                //handle top and left
//                function getPosition(element) {
//                    var xPosition = 0;
//                    var yPosition = 0;

//                    while (element) {
//                        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//                        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//                        element = element.offsetParent;
//                    }
//                    return { x: xPosition, y: yPosition };
//                }

//                var topPer = ((element[0].offsetParent.offsetHeight) * scope.item.ptop) / 100;

//                var leftPer = ((element[0].offsetParent.offsetWidth) * scope.item.pleft) / 100;
//                var startX = 0, startY = 0, x = topPer, y = leftPer;

//                element.css({
//                    position: 'absolute',
//                    border: '1px solid red',
//                    backgroundColor: 'lightgrey',
//                    cursor: 'pointer',
//                    top: scope.item.ptop + '%',
//                    left: scope.item.pleft + '%'
//                });

//                element.on('mousedown', function (event) {
//                    // Prevent default dragging of selected content
//                    var parentPosition = getPosition(event.currentTarget.offsetParent);
//                    event.preventDefault();
//                    startX = event.pageX - y;
//                    startY = event.pageY - x;
//                    $document.on('mousemove', mousemove);
//                    $document.on('mouseup', mouseup);
//                });

//                function mousemove(event) {
//                    y = event.pageY - startY;
//                    x = event.pageX - startX;

//                    var finalPositiontop = element[0].attributes["style"].value.split(';')[3].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");
//                    var finalPositionleft = element[0].attributes["style"].value.split(';')[4].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");



//                    var top = Math.round(((finalPositiontop) * 100) / element[0].offsetParent.offsetHeight);
//                    var left = Math.round(((finalPositionleft) * 100) / element[0].offsetParent.offsetWidth);
//                    if (top + 1 >= 0 && left + 1 >= 0 && top - 1 <= 100 && left - 1 <= 100)
//                        element.css({
//                            top: y + 'px',
//                            left: x + 'px'
//                        });
//                }

//                function mouseup() {
//                    $document.off('mousemove', mousemove);
//                    $document.off('mouseup', mouseup);
//                    //handle top left
//                    var finalPositiontop = element[0].attributes["style"].value.split(';')[3].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");
//                    var finalPositionleft = element[0].attributes["style"].value.split(';')[4].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");



//                    var top = Math.round(((finalPositiontop) * 100) / element[0].offsetParent.offsetHeight);
//                    var left = Math.round(((finalPositionleft) * 100) / element[0].offsetParent.offsetWidth);
//                    scope.item.ptop = element[0].attributes["style"].value.split(';')[3].split(':')[1].indexOf("%") > -1 ? finalPositiontop : top;
//                    scope.item.pleft = element[0].attributes["style"].value.split(';')[4].split(':')[1].indexOf("%") > -1 ? finalPositionleft : left;
//                    if (scope.item.ptop >= 0 && scope.item.pleft >= 0 && scope.item.ptop <= 100 && scope.item.pleft <= 100)
//                        element.css({
//                            top: scope.item.ptop + '%',
//                            left: scope.item.pleft + '%'
//                        });
//                }
//            }

//        };
//    }])


//    .directive('myTest', ['$compile', function ($compile) {
//        return {
//            scope: {


//            },
//            template: "<div>hello chaitanya</div>",


//            restrict: 'E',
//            transclude: true,

//            link: function (scope, element, attr, controller) {
//                var data;


//            }


//        }
//    }]);