import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Lógica para refrescar o recargar el componente según la URL actual
        if (this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'memoryGame') {
          // Lógica específica para el componente MemoryGame
          console.log('Navegando a MemoryGame');
          // Coloca aquí lo que necesitas hacer para MemoryGame
        } else if (this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'hangedGame') {
          // Lógica específica para el componente HangedGame
          console.log('Navegando a HangedGame');
          // Coloca aquí lo que necesitas hacer para HangedGame
        }
      }
    });
  } 


  executeActionsBasedOnRoute() {
    // Obtén la ruta actual
    const currentRoute = this.router.url;
  
    // Ejecuta acciones basadas en la ruta
    if (currentRoute === '/user-dashboard/memoryGame') {
      // Lógica específica para la ruta de memoryGame
      // Por ejemplo, puedes llamar a funciones o cargar scripts aquí
    } else if (currentRoute === '/user-dashboard/hangedGame') {
      // Lógica específica para la ruta de hangedGame
      // Por ejemplo, puedes llamar a funciones o cargar scripts aquí
    }
  }

  
}
