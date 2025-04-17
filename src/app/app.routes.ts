import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage.component';
import { OncegameComponent } from './pages/oncegame.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'oncegame/:title', component: OncegameComponent }
];
