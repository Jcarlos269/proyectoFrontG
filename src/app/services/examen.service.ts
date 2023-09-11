import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }

  public listarCuestionarios(){
    return this.http.get(`${baseUrl}/api/v1/exams/getExams`);
  }

  public agregarExamen(examen:any){
    return this.http.post(`${baseUrl}/examen/`,examen);
  }

  public eliminarExamen(examenId:any){
    return this.http.delete(`${baseUrl}/examen/${examenId}`);
  }

  public obtenerExamen(id:any){
    return this.http.get(`${baseUrl}/api/v1/exams/getExam/${id}`);
  }

  public actualizarExamen(examen:any){
    return this.http.put(`${baseUrl}/examen/`,examen);
  }

  public listarExamenesDeUnaCategoria(id:any){
    return this.http.get(`${baseUrl}/api/v1/exams/getExam/${id}`);
  }

  public obtenerExamenesActivos(){
    return this.http.get(`${baseUrl}/examen/activo`);
  }

  public obtenerExamenesActivosDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baseUrl}/examen/categoria/activo/${categoriaId}`);
  }
}
