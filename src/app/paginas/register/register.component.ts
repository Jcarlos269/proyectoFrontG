import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user = {
    firstname : '',
    lastname : '',
    email : '',
    password : '',
  }
  
  constructor(private userService:UserService){}

  forSubmit(){
    console.log(this.user);
    if(this.user.firstname == '' || this.user.firstname == null){
      alert('El nombre es requerido');
      return;
    }

    if(this.user.lastname == '' || this.user.lastname == null){
      alert('El apellido es requerido');
      return;
    }

    if(this.user.email == '' || this.user.email == null){
      alert('El email es requerido');
      return;
    }

    if(this.user.password == '' || this.user.password == null){
      alert('El email es requerido');
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data)=> {
        console.log(data);
        Swal.fire('Usuario Guardado' , 'Has sido registrado en el sistema con exito ', 'success');
      },(error)=> {
        console.log(error);
        alert('Ha ocurrido un error en el sistema');
      }
    )
  }

}
