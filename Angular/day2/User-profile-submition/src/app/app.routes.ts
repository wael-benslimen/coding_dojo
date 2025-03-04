import { Routes } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
import { DisplayComponent } from '../components/display/display.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'display', component: DisplayComponent },
];
