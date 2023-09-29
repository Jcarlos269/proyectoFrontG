import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit{

  categorias:any;
  
  constructor(private categoriaService:CategoriaService, private loginService:LoginService,private router: Router, private route: ActivatedRoute){}

  navigateTo(route: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([route]);
      if (this.route.snapshot.routeConfig?.path === route) {
        window.location.reload();  // Recarga la página solo si estás en el componente específico
      }
    });
  }

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
