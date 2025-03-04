import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  @Input() course: string = '';
  students: Student[] = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 23 },
  ];

  @Output() notifyParent = new EventEmitter<Student[]>();

  sendBook() {
    this.notifyParent.emit(this.students);
  }
}
