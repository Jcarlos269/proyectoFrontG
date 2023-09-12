import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData ={
    "email" : '',
    "password" : ''
  }
  constructor(private loginService:LoginService,private router:Router){}
  
  formSubmit(){
    console.log('click en el boton de login');

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any)=>{
          this.loginService.setUser(user);

          if(this.loginService.getUserRole()=='ADMIN'){
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.loginService.loginStatus.next(true);
          }else if (this.loginService.getUserRole()=='USER'){
            //window.location.href = '/user-dashboard'; 
            this.router.navigate(['user-dashboard/home-user']);
            this.loginService.loginStatus.next(true);
          }else{
            this.loginService.logout();
          }

          console.log(user);
        })
      }, (error) =>{
        console.log(error);
        //this.snack.open('detalles invalidos');
      }
    )
  }


}
