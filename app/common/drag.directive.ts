import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import {shopitem } from '../interfaces/shopitem';
@Directive({ selector: '[draggable]' });



export class DraggableDirective {
    myele: HTMLElement;
    startX: number;
    startY: number;
    x: number;
    y: number;

    @Input('draggable') data: shopitem;
    constructor(el: ElementRef) {

       // el.nativeElement.style.backgroundColor = 'yellow';
        this.myele = el.nativeElement;

        var topPer = ((el[0].offsetParent.offsetHeight) * this.data.PTop) / 100;

        var leftPer = ((el[0].offsetParent.offsetWidth) * this.data.PLeft) / 100;
        this.startX = 0, this.startY = 0, x = topPer, y = leftPer;

        el.nativeElement.css({
            position: 'absolute',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer',
            top: this.data.PTop + '%',
            left:this.data.PLeft + '%'
        });


    }

  

    @HostListener('mouseenter') onMouseEnter() {
        //this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        //this.highlight(null);
    }
    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        var parentPosition = getPosition(event.currentTarget.offsetParent);
        event.preventDefault();
        startX = event.pageX - y;
        startY = event.pageY - x;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
    }
  

    private getPosition(element: HTMLElement) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        this.myele = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}


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