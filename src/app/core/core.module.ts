import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./404/error404/error404.component";
import { NavbarComponent } from "./component/navbar/navbar/navbar.component";

@NgModule({
  declarations: [
    NavbarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: Error404Component
      },
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {

}
