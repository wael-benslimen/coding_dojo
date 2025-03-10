import { Routes } from '@angular/router';
import { ViewAllComponent } from '../components/view-all/view-all.component';
import { CreateOneComponent } from '../components/create-one/create-one.component';
import { EditComponent } from '../components/edit/edit.component';

export const routes: Routes = [
  { path: '', component: ViewAllComponent },
  { path: 'create', component: CreateOneComponent },
  { path: 'edit/:id', component: EditComponent },

];
