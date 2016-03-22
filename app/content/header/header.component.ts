import { Component, ViewEncapsulation} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
	selector: 'hp-header',
//	moduleId: $__moduleContext.id,
   // template: '<h1>My Header1</h1> <input type="text" />'
    templateUrl: 'app/content/header/header.component.html',
    styleUrls: ['app/content/header/header.component.css'],
		directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
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
		 encapsulation: ViewEncapsulation.None
})

	//http://valor-software.com/ng2-bootstrap/
export class HeaderComponent {


	private myInterval: number = 5000;
  private noWrapSlides: boolean = false;
  private slides: Array<any> = [];

  constructor() {
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

	private addSlides() {
    
    this.slides = [
									{
										image:'app/content/header/imgs/movie1.jpg' ,
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
  }


}
