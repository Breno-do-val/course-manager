import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Course } from '../course.model/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [{
    id: 0,
    name: '',
    imageUrl: '',
    price: 0,
    code: '',
    duration: 0,
    rating: 0,
    releaseDate: '',
    description: ''
  }];

  _courses: Course[] = [];
  _filteredBy: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe(courses => {
      this._courses = courses;
      this.filteredCourses = this._courses;
    });
  }

  deleteById(courseId: any): void {
    this.courseService.deleteById(courseId).subscribe(_ => {
      console.log('Deleted succesfully');
      this.retrieveAll();
    })
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
