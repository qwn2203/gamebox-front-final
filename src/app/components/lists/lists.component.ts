import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { VideogameDialogComponent } from './videogame-dialog.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  videogameDialogRef: MatDialogRef<VideogameDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openVideogameDialog() {
    this.videogameDialogRef = this.dialog.open(VideogameDialogComponent);
  }

}
