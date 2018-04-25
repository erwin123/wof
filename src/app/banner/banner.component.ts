import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public images = IMAGES;
  constructor () {
   }

  ngOnInit() {
  }
  
}
class Image {
	title: string;
	url: string;
}

var IMAGES: Image[] = [
  { "title": "", "url": "assets/img/banner2.jpg" },
  { "title": "", "url": "assets/img/banner4.jpg" },
  { "title": "", "url": "assets/img/banner2.jpg" },
  { "title": "", "url": "assets/img/banner4.jpg" },
  { "title": "", "url": "assets/img/banner2.jpg" }
]