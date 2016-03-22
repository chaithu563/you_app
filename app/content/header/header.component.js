System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ng2_bootstrap_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.myInterval = 5000;
                    this.noWrapSlides = false;
                    this.slides = [];
                    //for (let i = 0; i < 4; i++) {
                    //  this.addSlide();
                    //}
                    this.addSlides();
                }
                //private addSlide() {
                //  let newWidth = 600 + this.slides.length + 1;
                //  this.slides.push({
                //    image: `//placekitten.com/${newWidth}/300`,
                //    text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
                //    ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
                //  });
                //}
                HeaderComponent.prototype.addSlides = function () {
                    this.slides = [
                        {
                            image: 'app/content/header/imgs/movie1.jpg',
                            text: ''
                        },
                        {
                            image: 'app/content/header/imgs/movie2.jpg',
                            text: ''
                        },
                        {
                            image: 'app/content/header/imgs/movie3.jpg',
                            text: ''
                        },
                        {
                            image: 'app/content/header/imgs/movie4.jpg',
                            text: ''
                        },
                        {
                            image: 'app/content/header/imgs/movie5.jpg',
                            text: ''
                        }
                    ];
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'hp-header',
                        //	moduleId: $__moduleContext.id,
                        // template: '<h1>My Header1</h1> <input type="text" />'
                        templateUrl: 'app/content/header/header.component.html',
                        styleUrls: ['app/content/header/header.component.css'],
                        directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        //templateUrl: 'header.component.html',
                        //  styleUrls: ['header.component.css']
                        //		 styles: [`
                        //   .carousel-control {
                        //	background:none !important;
                        //	left:2px !important;
                        //}
                        //.carousel-control.left {
                        //	background:none !important;
                        //	left:2px !important;
                        //}
                        //  `],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map