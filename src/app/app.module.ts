import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//ANIMATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
import { AngularMaterialModule } from './angular-material.module';
import { MatCardModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule, MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { VideogameComponent } from './components/videogame/videogame.component';
import { ListsComponent } from './components/lists/lists.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ConsoloesComponent } from './components/consoloes/consoloes.component';
import { FileNameDialogComponent } from './components/lists/file-name-dialog.component';
import { VideogameDialogComponent } from './components/lists/videogame-dialog.component';;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    VideogameComponent,
    ListsComponent,
    ProfileComponent,
    ConsoloesComponent,
    FileNameDialogComponent,
    VideogameDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSliderModule,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [FileNameDialogComponent, VideogameDialogComponent]
})
export class AppModule { }
