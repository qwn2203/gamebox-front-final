import { Component, OnInit, Inject } from '@angular/core';
import { FileNameDialogComponent } from '../lists/file-name-dialog.component';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    template: `
   <div class="basic-container">
    <h2>Videogames</h2>
    <ul>
        <li *ngFor="let file of files">
            {{file.name}}
        </li>
        <mat-dialog-actions>
            <button mat-button (click)="openFileDialog()">Add</button>
            <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        </mat-dialog-actions>
    </ul>
</div>  
  `
})
export class VideogameDialogComponent implements OnInit {

    files = [
        { name: 'videojuego 1' },
        { name: 'videojuego 2' }
    ];
    fileNameDialogRef: MatDialogRef<FileNameDialogComponent>;

    constructor(
        private dialogRef: MatDialogRef<VideogameDialogComponent>,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
      }

    submit(form) {
        this.dialogRef.close(`${form.value.videogame}`);
    }
    openFileDialog(file?) {
        this.fileNameDialogRef = this.dialog.open(FileNameDialogComponent, {
            data: {
                filename: file ? file.name : ''
            }
        });

        this.fileNameDialogRef.afterClosed().pipe(
            filter(name => name)
        ).subscribe(name => {
            if (file) {
                const index = this.files.findIndex(f => f.name == file.name);
                if (index !== -1) {
                    this.files[index] = { name }
                }
            } else {
                this.files.push({ name });
            }
        });
    }
}