import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course?: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  save(): void {
    if (this.course) {
      this.courseService.save(this.course);
    }
  }

}
