import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScriptsCargaService {

  private loadedScripts: Set<string> = new Set();

  constructor() {}

  // Marcar un script como no cargado
  markScriptAsNotLoaded(scriptName: string) {
    this.loadedScripts.delete(scriptName);
  }

  // Cargar un script si no ha sido cargado
  carga(archivo: string): Promise<void> {
    if (!this.loadedScripts.has(archivo)) {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `./assets/js/${archivo}.js`;
        script.onload = () => {
          this.loadedScripts.add(archivo);
          resolve();
        };
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    } else {
      // Si el script ya ha sido cargado, resolvemos inmediatamente
      return Promise.resolve();
    }
  }

}
