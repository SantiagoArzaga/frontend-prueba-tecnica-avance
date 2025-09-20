import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { ListadoComponent } from './components/listado/listado';
import { SkillsComponent } from './components/skills/skills';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
