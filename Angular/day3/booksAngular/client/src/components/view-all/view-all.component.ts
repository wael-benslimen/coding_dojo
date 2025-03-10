import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-view-all',
  imports: [CommonModule, RouterModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css',
})
export class ViewAllComponent implements OnInit {
  allBooks: Book[] = [];
  constructor(private apiservice: ApiService) {}
  ngOnInit(): void {
    this.apiservice.getall().subscribe({
      next: (data) => (this.allBooks = data),
      error: (err) => console.error(err),
    });
  }
}
