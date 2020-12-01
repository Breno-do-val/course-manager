import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular forms",
        imageUrl: '',
        price: 99.99,
        code: "XPS-8706",
        duration: 120,
        rating: 4.9,
        releaseDate: 'December, 02 2019'
      },
      {
        id: 2,
        name: "Angular HTTP",
        imageUrl: '',
        price: 45.99,
        code: "LKL-1094",
        duration: 80,
        rating: 4,
        releaseDate: 'November, 02 2019'
      },
    ]
  }

}
