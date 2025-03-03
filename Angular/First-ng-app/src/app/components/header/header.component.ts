import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header
      class=" flex p-6 bg-gray-900 text-white items-center justify-between"
    >
      <nav>
        <h1 class=" text-2xl">{{ test() }}</h1>
      </nav>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  test = signal('my first app');
}
