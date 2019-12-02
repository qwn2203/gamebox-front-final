import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VideogameComponent } from './components/videogame/videogame.component';
import { ConsoloesComponent } from './components/consoloes/consoloes.component';
import { ListsComponent } from './components/lists/lists.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'videogame', component: VideogameComponent },
  { path: 'consoles', component: ConsoloesComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'profile', component: ProfileComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
