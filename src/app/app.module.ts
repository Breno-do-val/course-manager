import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './courses/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { Error404Component } from './404/error404/error404.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: '',
        redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**',
        component: Error404Component
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
