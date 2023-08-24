import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

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
  constructor(private loginService:LoginService){}
  
  formSubmit(){
    console.log('click en el boton de login');

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
      }, (error) =>{
        console.log(error);
      }
    )
  }


}
