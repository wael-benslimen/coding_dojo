import { Component } from '@angular/core';
import { Book } from '../../interfaces/book';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-create-one',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-one.component.html',
  styleUrl: './create-one.component.css',
})
export class CreateOneComponent {
  newbook: Book = {
    title: '',
    author: '',
    pages: 0,
    isAvailable: true,
    createdAt: '',
    updatedAt: '',
  };
  errormsg: any = {};
  constructor(private apiservice: ApiService, private router: Router) {}
  addbook(): void {
    console.log(this.newbook);

    this.apiservice.createone(this.newbook).subscribe({
      next: (res) => this.router.navigate(['/']),
      error: (err) => console.log(this.errormsg = err),
    });
  }
}
