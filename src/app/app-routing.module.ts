import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MentorComponent } from './mentor/mentor.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Home',component:HomeComponent,
  children:[
    {path:'Course',component:CourseComponent},
    {path:'About',component:AboutComponent},
    {path:'Blog',component:BlogComponent},
    {path:'Contact', component:ContactComponent},
    {path:'Mentor',component:MentorComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
