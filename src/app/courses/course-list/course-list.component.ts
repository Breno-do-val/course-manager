import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  _courses: Course[] = [];
  _filteredBy: string = '';

  filteredCourses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filteredBy = value;

    this.filteredCourses = this._courses.filter((course: Course) =>
      course.name.toLowerCase().indexOf(this._filteredBy.toLowerCase()) > -1
    );

  }

  get filter() {
    return this._filteredBy;
  }
}
