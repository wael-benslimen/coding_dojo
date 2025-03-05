import { Routes } from '@angular/router';
import { ViewAllComponent } from '../components/view-all/view-all.component';
import { CreateOneComponent } from '../components/create-one/create-one.component';

export const routes: Routes = [
  { path: '', component: ViewAllComponent },
  { path: 'create', component: CreateOneComponent },
];
