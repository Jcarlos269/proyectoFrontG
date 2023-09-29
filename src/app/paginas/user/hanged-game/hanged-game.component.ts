import { Component, OnInit,OnDestroy } from '@angular/core';
import { ScriptsCargaService } from 'src/app/services/scripts-carga.service';

@Component({
  selector: 'app-hanged-game',
  templateUrl: './hanged-game.component.html',
  styleUrls: ['./hanged-game.component.css']
})
export class HangedGameComponent implements OnInit, OnDestroy {

  constructor(private cargaScripts:ScriptsCargaService){
    
  }
  ngOnInit(): void {

    this.cargaScripts.carga('ahorcado/scriptAhorcado')
      .then(() => {
        console.log('Script cargado con éxito o ya estaba cargado.');
      })
      .catch(() => {
        console.error('Error al cargar o recargar el script.');
      });
  }

  ngOnDestroy(): void {
    this.cargaScripts.markScriptAsNotLoaded('memoria/script');
  }

}
