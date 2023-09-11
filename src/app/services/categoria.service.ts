import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http:HttpClient) { }

  public listarCategorias(token:any){
    const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
    });
      
    return this.http.get(`${baseUrl}/api/v1/categories/getCategories`,{headers});
  }

  public agregarCategoria(categoria:any){
    return this.http.post(`${baseUrl}/api/v1/categoria/`,categoria);
  }

  

}