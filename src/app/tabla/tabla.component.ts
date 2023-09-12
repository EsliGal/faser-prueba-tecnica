import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
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
  SelectionType = SelectionType;

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

  //Seleccion de una o varias filas
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  //Eliminar
  eliminar(){
    this.service.eliminarTarea(this.selected);

    this.tareas = [...this.tareas];
    this.service.actualizar(this.tareas);

    //Limpia la selección
    this.selected = [];
  }
}
