import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AppService } from '../app.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  titulo:string;
  minutos:number;

  @Input() tareas: Tarea[];
  selected : Tarea[] = [];

  ColumnMode = ColumnMode;

  constructor(public service: AppService) { }

  ngOnInit() {
  }

  //Agregar tarea
  async onSubmit() {
    if (this.titulo != null && this.minutos != null) {
      this.service.agregarTarea(this.titulo, this.minutos);

      this.tareas = [...this.tareas];
      this.service.actualizar(this.tareas);

      // limpio los campos
      this.titulo = null;
      this.minutos = null;
    }else{
      alert("Complete los campos de la tarea");
    }
  }

}
