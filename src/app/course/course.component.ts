import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {

  title : String = "List of courses";
courses : String[] ;

constructor(service : CoursesService) {
this.courses=service.getCourses();
}
}