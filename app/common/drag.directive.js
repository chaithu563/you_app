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
            ;
            DraggableDirective = (function () {
                function DraggableDirective(el) {
                    this.myele = HTMLElement;
                    el.nativeElement.style.backgroundColor = 'yellow';
                    this.myele = el.nativeElement;
                }
                DraggableDirective.prototype.onMouseEnter = function () {
                    //this.highlight(this.highlightColor || this._defaultColor);
                };
                DraggableDirective.prototype.onMouseLeave = function () {
                    //this.highlight(null);
                };
                DraggableDirective.prototype.highlight = function (color) {
                    this.myele.style.backgroundColor = color;
                };
                DraggableDirective.prototype.getPosition = function (element) {
                    var xPosition = 0;
                    var yPosition = 0;
                    while (element) {
                        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                        element = element.offsetParent;
                    }
                    return { x: xPosition, y: yPosition };
                };
                __decorate([
                    core_1.Input('draggable'), 
                    __metadata('design:type', shopitem_1.shopitem)
                ], DraggableDirective.prototype, "data", void 0);
                __decorate([
                    core_1.HostListener('mouseenter'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], DraggableDirective.prototype, "onMouseEnter", null);
                __decorate([
                    core_1.HostListener('mouseleave'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], DraggableDirective.prototype, "onMouseLeave", null);
                return DraggableDirective;
            }());
            exports_1("DraggableDirective", DraggableDirective);
        }
    }
});
//# sourceMappingURL=drag.directive.js.map