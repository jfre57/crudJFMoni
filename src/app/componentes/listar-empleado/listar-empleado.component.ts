import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
   Empleado:any;
  constructor(
    private CrudService:CrudService

  ) { }

  ngOnInit(): void {
    this.CrudService.ObtenerEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      console.log(respuesta);
      this.Empleado=respuesta;
    });

  }

  borrarRegistro(id:any,iControl:any){
    console.log(id,iControl);
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.CrudService.BorrarEmpleados(id).subscribe(respuesta=>{
          console.log(respuesta);
        this.Empleado.splice(iControl,1);
      });
        Swal.fire(
          'Eliminado!',
          'La fila ha sido eliminada.',
          'success'
        )
      }
    })
      
}  

}
