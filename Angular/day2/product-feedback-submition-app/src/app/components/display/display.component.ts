import { Component } from '@angular/core';
import { Feedback } from '../../../interfaces/feedback';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  displayData!: Feedback;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.displayData = nav?.extras?.state?.['formData'] || {};
  }
}
