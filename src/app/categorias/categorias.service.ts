import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from './categorias.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {
  private urlAPI = "http://localhost:3000/socios/v1/categorias";

  constructor(private http:HttpClient) { }

  //Metodos
  //GET
  getAllCategorias():Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI);
  }

  //GETBYID
  getCategoriaById(id:number):Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI+'/'+id);
  }

  //POST
  createCategoria():void{

  }
  //PUT
  updateCategoria():void{

  }
  //DELETE
  deleteCategoria(){

  }
}
