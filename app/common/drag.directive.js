System.register(['@angular/core', '../interfaces/shopitem', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, shopitem_1, http_1;
    var DraggableDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopitem_1_1) {
                shopitem_1 = shopitem_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DraggableDirective = (function () {
                function DraggableDirective(el, cd) {
                    this.cd = cd;
                    this.myele = el.nativeElement;
                    el.nativeElement.style.position = 'absolute';
                    el.nativeElement.style.border = '1px solid red';
                    el.nativeElement.style.cursor = 'pointer';
                    el.nativeElement.style.top = '0%';
                    el.nativeElement.style.left = '0%';
                }
                DraggableDirective.prototype.ngOnInit = function () {
                    this.myele.style.top = this.data.PTop + '%';
                    this.myele.style.left = this.data.PLeft + '%';
                    jQuery(this.myele).draggable({ containment: '.admin_video_overlays' });
                };
                DraggableDirective.prototype.onMouseUp = function (event) {
                    console.log(event);
                    if (this.myele.style.top.indexOf('%') > -1) {
                    }
                    else {
                        var top = Math.round(((this.myele.style.top.replace("px", "")) * 100) / this.myele.offsetParent.offsetHeight);
                        var left = Math.round(((this.myele.style.left.replace("px", "")) * 100) / this.myele.offsetParent.offsetWidth);
                        this.data.PTop = top;
                        this.data.PLeft = left;
                        this.cd.detectChanges();
                    }
                };
                DraggableDirective.prototype.onMousedown = function (event) {
                    console.log(event);
                };
                __decorate([
                    core_1.Input('draggable'), 
                    __metadata('design:type', shopitem_1.shopitem)
                ], DraggableDirective.prototype, "data", void 0);
                __decorate([
                    core_1.HostListener('mouseup', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], DraggableDirective.prototype, "onMouseUp", null);
                __decorate([
                    core_1.HostListener('mousedown', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], DraggableDirective.prototype, "onMousedown", null);
                DraggableDirective = __decorate([
                    core_1.Directive({
                        providers: [http_1.HTTP_PROVIDERS],
                        selector: '[draggable]',
                        //  directives: [CORE_DIRECTIVES],
                        changeDetection: core_1.ChangeDetectionStrategy.Default
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
                ], DraggableDirective);
                return DraggableDirective;
            }());
            exports_1("DraggableDirective", DraggableDirective);
        }
    }
});
//# sourceMappingURL=drag.directive.js.map