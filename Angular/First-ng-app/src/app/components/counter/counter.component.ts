import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>counter value : {{ number() }}</p>
    <div class=" flex gap-5 mb-5 mt-5  ">
      <button
        class=" bg-green-500 border text-white px-5 rounded"
        (click)="increment()"
      >
        add
      </button>
      <button
        class=" bg-orange-500 text-white px-5 rounded border "
        (click)="deduct()"
      >
        deduct
      </button>
      <button
        class=" bg-red-500 text-white border px-5 rounded"
        (click)="reset()"
      >
        reset
      </button>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  number = signal(0);
  increment = () => {
    this.number.update((val) => val + 1);
  };
  deduct = () => {
    this.number.update((val) => val - 1);
  };
  reset = () => {
    this.number.set(0);
  };
}


