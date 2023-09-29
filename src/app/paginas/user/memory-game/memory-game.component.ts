import { Component,OnInit, OnDestroy  } from '@angular/core';
import { ScriptsCargaService } from 'src/app/services/scripts-carga.service';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent  implements OnInit, OnDestroy  {

  private scriptLoaded = false;

  constructor(private cargaScripts: ScriptsCargaService) { }

  ngOnInit(): void {
      this.cargaScripts.carga('memoria/script')
      .then(() => {
        console.log('Script cargado con éxito o ya estaba cargado.');
      })
      .catch(() => {
        console.error('Error al cargar o recargar el script.');
      });
  }


  ngOnDestroy(): void {
    this.cargaScripts.markScriptAsNotLoaded('ahorcado/scriptAhorcado');
  }
}
