import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {

  options = ['Dominio del tema', 'Creatividad', 'Presentación grupal', 'Decoración', 'Recursos'];
  star1 = 'star-outline'; star2 = 'star-outline'; star3 = 'star-outline'; star4 = 'star-outline'; star5 = 'star-outline';
  rateValue: number;

  constructor() { }

  ngOnInit() { }

  starToggle(id: number, index: number) {
    switch (id) {
      case 1:
        this.cleanRate();
        this.star1 = 'star';
        this.rateValue = 1;
        break;
      case 2:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.rateValue = 2;
        break;
      case 3:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.star3 = 'star';
        this.rateValue = 3;
        break;
      case 4:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.star3 = 'star';
        this.star4 = 'star';
        this.rateValue = 4;
        break;
      case 5:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.star3 = 'star';
        this.star4 = 'star';
        this.star5 = 'star';
        this.rateValue = 5;
        break;
      default:
        break;
    }
  }

  cleanRate() {
    this.star1 = 'star-outline';
    this.star2 = 'star-outline';
    this.star3 = 'star-outline';
    this.star4 = 'star-outline';
    this.star5 = 'star-outline';
  }
}
