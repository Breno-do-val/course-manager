import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './courses/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { Error404Component } from './404/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
