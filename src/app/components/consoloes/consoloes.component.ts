import { Component, OnInit } from '@angular/core';

export class Console {
  id: number;
  name: string;
}
export const CONSOLES: Console[] = [
  { id: 1, name: 'Dr Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

@Component({
  selector: 'app-consoloes',
  templateUrl: './consoloes.component.html',
  styleUrls: ['./consoloes.component.css']
})
export class ConsoloesComponent implements OnInit {
  title = 'Top 10 de consolas';

  consoles = CONSOLES;
  selectedConsole: Console;

  constructor() { }

  ngOnInit() {
  }

  onSelect(console: Console): void {
    this.selectedConsole = console;
  }

}
