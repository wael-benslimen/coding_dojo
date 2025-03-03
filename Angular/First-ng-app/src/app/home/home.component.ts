import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { log } from 'console';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  template: `
    <app-greeting [message]="message()" />
    <app-counter/>
    <input type="text" placeholder=" type for test" (keyup)="keytest($event)" class=" border" />
  `,
  styles: ``,
})
export class HomeComponent {
  message = signal('hello world');
  keytest = (event: KeyboardEvent) => {
    console.log(event.key);
  };
}
