import { Component } from '@angular/core';
import { Feedback } from '../../../interfaces/feedback';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newFeedback: Feedback = {
    product_name: '',
    rating: 0,
    feedback: '',
    email: '',
    recomend: '',
  };
  constructor(private router: Router) {}
  onSubmit = () => {
    this.router.navigate(['/display'], {
      state: { formData: this.newFeedback },
    });
    console.log(this.newFeedback);

  };
}
