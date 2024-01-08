import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from './categorias.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers:[CategoriasService],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
categoria ={
  id:0, nombre:"", descripcion:""

}
categorias =[
  {id:1, nombre:"Zapateria", descripcion:"Todo lo relacionado con zapatos"},
  {id:2, nombre:"Pesca", descripcion:"Todo lo relacionado con la pesca"},
  {id:3, nombre:"Deportes", descripcion:"Todo lo relacionado con deportes"},
  {id:4, nombre:"Hogar", descripcion:"Todo lo relacionado con el hogar"},
  {id:5, nombre:"Electronica", descripcion:"Todo lo relacionado con electronica"},
  
]
//Pasamos el servicio
contructor(private servicioCategorias:CategoriasService){

}
ngOnInit(){

  this.consultarTodasLasCaregorias();
}

consultarTodasLasCaregorias(){
  this.serviciosCategorias.getAllCategorias().subscribe({
    next:(v) => this.categorias=v.categorias,
    error:(e) => console.error("en e",e),
    complete:()=> console.info('complete')

  })
}


agregarCategorias(){
  const posID=this.categorias.findIndex((cat)=>cat.id==this.categoria.id);
  //posID es igual a -1 si no se encientra
  if(this.categoria.id>0 && posID==-1){
    //el error que queda vinculado con el ultimo que se agrega

    const categoriaSinVincular={
      id:this.categoria.id,
      nombre:this.categoria.nombre,
      descripcion:this.categoria.descripcion
    }

  //this.categorias.push(this.categoria);
  this.categorias.push(categoriaSinVincular);
  }else{
    alert("Error: Verificar datos")
  }

}

eliminarCategorias(id:number){
  if(confirm("¿Estas seguro de eliminar el registro?")){
  //alert("Eliminar categorias por Id: " + id)
  const posID=this.categorias.findIndex((categoria)=>categoria.id==id);
  this.categorias.splice(posID, 1)
  }
}

seleccionarCategoria(categoriaSeleccionada:{id:number, nombre:string, descripcion:string}){//Para saber que categoria actualizar
  this.categoria.id=categoriaSeleccionada.id;
  this.categoria.nombre=categoriaSeleccionada.nombre;
  this.categoria.descripcion=categoriaSeleccionada.descripcion;
  

}

actualizarCategorias(){//Para actualizar la categoria selaccionada

  const idActualizar = this.categorias.findIndex((cat)=>cat.id==this.categoria.id);
  alert(this.categorias[idActualizar].id);


}
}
