import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { NavbarComponent } from './componente/navbar/navbar.component'; 

import { HomeComponent } from './paginas/home/home.component';
import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './paginas/user/user-dashboard/user-dashboard.component'; 
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { BienvenidaAdminComponent } from './paginas/admin/bienvenida-admin/bienvenida-admin.component';
import { ProfileComponent } from './paginas/profile/profile.component';
import { InstructionsComponent } from './paginas/user/instructions/instructions.component';
import { InstructionsAdminComponent } from './paginas/admin/instructions-admin/instructions-admin.component';
import { CategoryExamComponent } from './paginas/admin/category-exam/category-exam.component';
import { HistoryExamComponent } from './paginas/user/history-exam/history-exam.component';
import { InstructionsUserComponent } from './paginas/user/instructions-user/instructions-user.component';
import { StartHistoryComponent } from './paginas/user/start-history/start-history.component';

const routes: Routes = [
  
  {path: 'register',
  component:RegisterComponent,
  pathMatch : 'full'
  },
  {path: 'login',
  component:LoginComponent,
  pathMatch : 'full'
  },
  {path: 'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path:'instructions-admin',
      component:InstructionsAdminComponent
    },
    {
      path:'category-exam',
      component:CategoryExamComponent
    },
    {
      path:'',
      component:BienvenidaAdminComponent
    }
  ]
  },
  {path: 'user-dashboard',
  component:UserDashboardComponent,
  canActivate:[NormalGuard],
  children:[
    {
      path:'instructions-admin',
      component:InstructionsAdminComponent
    },
    {
      path:'instructions-user/:examId',
      component:InstructionsUserComponent
    },
    {
      path:'category-exam/:catId',
      component:HistoryExamComponent
    }
  ]
  },
  {
    path:"start-history/:examId",
    component:StartHistoryComponent,
    canActivate:[NormalGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
