import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AddstudentComponent } from './screens/addstudent/addstudent.component';
import { AddsubjectComponent } from './screens/addsubject/addsubject.component';
import { EditstudentComponent } from './screens/editstudent/editstudent.component';
import { EditsubjectComponent } from './screens/editsubject/editsubject.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { RegisterComponent } from './screens/register/register.component';
import { StudentComponent } from './screens/student/student.component';
import { SubjectComponent } from './screens/subject/subject.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children:[
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "quiz/:code",
        component: QuizComponent
      }
    ]
  },
  {
    path: "dang-nhap",
    component: LoginComponent
  },
  {
    path: "dang-ky",
    component: RegisterComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "sinh-vien",
        component: StudentComponent
      },
      {
        path: "sinh-vien/add",
        component: AddstudentComponent
      },
      {
        path: "sinh-vien/edit/:id",
        component: EditstudentComponent
      },
      {
        path: "mon-hoc",
        component: SubjectComponent
      },
      {
        path: "mon-hoc/add",
        component: AddsubjectComponent
      },
      {
        path: "mon-hoc/edit/:id",
        component: EditsubjectComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
