System.register(['@angular/core', '../interfaces/shopitem'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopitem_1;
    var DraggableDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopitem_1_1) {
                shopitem_1 = shopitem_1_1;
            }],
        execute: function() {
            DraggableDirective = (function () {
                function DraggableDirective(el) {
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
                DraggableDirective.prototype.ngOnInit = function () {
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
                    this.myele.style.top = this.data.PTop + '%';
                    this.myele.style.left = this.data.PLeft + '%';
                    jQuery(this.myele).draggable({ containment: '.admin_video_overlays' });
                };
                __decorate([
                    core_1.Input('draggable'), 
                    __metadata('design:type', shopitem_1.shopitem)
                ], DraggableDirective.prototype, "data", void 0);
                DraggableDirective = __decorate([
                    core_1.Directive({ selector: '[draggable]' }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DraggableDirective);
                return DraggableDirective;
            }());
            exports_1("DraggableDirective", DraggableDirective);
        }
    }
});
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
//# sourceMappingURL=drag.directive.js.map