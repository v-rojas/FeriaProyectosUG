import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Events } from 'src/services/events';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
    loop: true,
    speed: 400,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
  };
  images = ['assets/img/slide1.jpeg', 'assets/img/slide2.jpeg',
    'assets/img/slide3.jpeg', 'assets/img/slide4.jpeg', 'assets/img/slide5.jpeg'];

  constructor(
    private events: Events
  ) { }

  ngOnInit() { }

  startPlaySlide() {
    this.slides.startAutoplay();
  }
}
