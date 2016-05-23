import {Component, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
		selector: 'hp-header',
    templateUrl: 'app/content/header/header.component.html',
    styleUrls: ['app/content/header/header.component.css'],
		directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
		encapsulation: ViewEncapsulation.None
})

	//http://valor-software.com/ng2-bootstrap/
export class HeaderComponent {

	private myInterval: number = 5000;
  private noWrapSlides: boolean = false;
  private slides: Array<any> = [];

  constructor() {
		this.addSlides();
  }



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
