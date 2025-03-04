import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { Student } from '../student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [StudentListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'welcome to student app !';
  coursename = 'full stack dev';
  allStudents: Student[] = [];
  onNotify(students: Student[]) {
    this.allStudents = students;
  }
}
