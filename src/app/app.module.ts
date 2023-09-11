import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './componente/navbar/navbar.component'; 

//import { NgxUiLoaderModule , NgxUiLoaderHttpModule } from "ngx-ui-loader";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { SidebarUserComponent } from './paginas/user/sidebar-user/sidebar-user.component'; 
import {MatListModule} from '@angular/material/list';
import { UserDashboardComponent } from './paginas/user/user-dashboard/user-dashboard.component';
import { BienvenidaAdminComponent } from './paginas/admin/bienvenida-admin/bienvenida-admin.component';
import { SidebarAdminComponent } from './paginas/admin/sidebar-admin/sidebar-admin.component';
import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { ProfileComponent } from './paginas/profile/profile.component';
import { InstructionsComponent } from './paginas/user/instructions/instructions.component';
import { InstructionsAdminComponent } from './paginas/admin/instructions-admin/instructions-admin.component';
import { CategoryExamComponent } from './paginas/admin/category-exam/category-exam.component';
import { HistoryExamComponent } from './paginas/user/history-exam/history-exam.component';
import { InstructionsUserComponent } from './paginas/user/instructions-user/instructions-user.component';
import { StartHistoryComponent } from './paginas/user/start-history/start-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarUserComponent,
    UserDashboardComponent,
    BienvenidaAdminComponent,
    SidebarAdminComponent,
    DashboardComponent,
    ProfileComponent,
    InstructionsComponent,
    InstructionsAdminComponent,
    CategoryExamComponent,
    HistoryExamComponent,
    InstructionsUserComponent,
    StartHistoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
    //NgxUiLoaderModule,
    //NgxUiLoaderHttpModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
