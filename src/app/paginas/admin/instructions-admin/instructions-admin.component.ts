import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-instructions-admin',
  templateUrl: './instructions-admin.component.html',
  styleUrls: ['./instructions-admin.component.css']
})
export class InstructionsAdminComponent  implements OnInit{

  categorias:any;
  categoria: string = "assets/result-1-.mp4";
  constructor (private loginService:LoginService, private categoriaService:CategoriaService){}

  ngOnInit():void{

    const token = this.loginService.getToken();
    console.log("Este es el token ",token);
    if (token) {
      // Llama a listarCategoriasConToken con el token
      this.categoriaService.listarCategorias(token).subscribe(
        (data: any) => {
          this.categorias = data;
          
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // Maneja el caso en el que el token no esté disponible
      console.log('Token no disponible');
    }
  }

}
