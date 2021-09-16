import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
   
  FormEmp:FormGroup;

  constructor(
    public formulario:FormBuilder, 
    private CrudService:CrudService,
    private ruteador:Router
    ) { 
    
     

    this.FormEmp=this.formulario.group({
      nombre:[''],
      correo:[''],
      telefono:[''],
      edad:['']
    });

  }

  ngOnInit(): void {
  }
  
  enviarDatos():any{
    console.log("Me pre");
    console.log(this.FormEmp.value);
    this.CrudService.AgregarEmpleado(this.FormEmp.value).subscribe(respuesta=>{
      Swal.fire(
        'Muy bien!',
        '¡Registro agregado!',
        'success'
      )
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
