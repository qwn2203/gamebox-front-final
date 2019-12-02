import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor() { }

  ngOnInit() {
  }


  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
