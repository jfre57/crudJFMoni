import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';


@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  FormEmp:FormGroup;
  elID:any;
  
  constructor( 
    private ActivatedRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) {
    this.elID=ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.ObtenerEmpleado(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.FormEmp.setValue({
      nombre:respuesta[0]['nombre'],
      correo:respuesta[0]['correo'],
      telefono:respuesta[0]['telefono'],
      edad:respuesta[0]['edad']
      });
    });

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
    console.log(this.elID);
    console.log(this.FormEmp.value);


    this.crudService.EditarEmpleado(this.elID,this.FormEmp.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
