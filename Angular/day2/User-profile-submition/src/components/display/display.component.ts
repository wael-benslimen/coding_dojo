import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  display!: User;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.display = nav?.extras?.state?.['userData'] || {};
  }
}
