import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Videojuego 1', cols: 2, rows: 2, color: 'black' },
    { text: 'Videojuego 2', cols: 1, rows: 2, color: 'black' },
    { text: 'Videojuego 3', cols: 1, rows: 1, color: 'black' },
    { text: 'Videojuego 4', cols: 2, rows: 2, color: 'black' },
    { text: 'Videojuego 5', cols: 1, rows: 1, color: 'black' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
