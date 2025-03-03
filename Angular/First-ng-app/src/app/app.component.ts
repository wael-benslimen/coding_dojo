import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template: `
    <app-header></app-header>
    <main class=" p-6">
      <app-home></app-home>
    </main>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'First-ng-app';
}
