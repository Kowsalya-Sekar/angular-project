import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username!: string | null;

  displayedColumns: string[] = ['id', 'name', 'age', 'grade'];
  dataSource: Student[] = [];

  constructor() {
    this.dataSource = [
      { id: 1, name: 'Alice Johnson', age: 20, grade: 'A' },
      { id: 2, name: 'Bob Smith', age: 22, grade: 'B' },
      { id: 3, name: 'Charlie Brown', age: 21, grade: 'A' },
      { id: 4, name: 'Daisy Miller', age: 23, grade: 'C' },
      { id: 5, name: 'Eve Davis', age: 19, grade: 'B' },
      { id: 6, name: 'Frank Wilson', age: 24, grade: 'A' },
      { id: 7, name: 'Grace Lee', age: 20, grade: 'B' },
      { id: 8, name: 'Hank Turner', age: 22, grade: 'A' },
      { id: 9, name: 'Ivy Green', age: 21, grade: 'C' },
      { id: 10, name: 'Jack White', age: 23, grade: 'B' }
    ];
   }

  ngOnInit(): void {
    this.username = localStorage.getItem('user')
  }

}
