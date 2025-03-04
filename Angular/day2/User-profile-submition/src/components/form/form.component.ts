import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newUser: User = { fullname: '', age: 0, gender: '', email: '', subed: false };
  constructor(private router: Router) {}
  onSubmit = () => {
    this.router.navigate(['/display'], { state: { userData: this.newUser } });
  };
}
