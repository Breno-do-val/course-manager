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

  course: Course = {
    id: 0,
    name: '',
    imageUrl: '',
    price: 0,
    code: '',
    duration: 0,
    rating: 0,
    releaseDate: '',
    description: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(course => {
      this.course = course;
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe(course => {
      console.log(`Course ${this.course} saved!`);
    })
  }

}
