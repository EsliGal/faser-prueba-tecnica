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

  @Input() tareas: Tarea[];
  selected : Tarea[] = [];

  ColumnMode = ColumnMode;

  constructor(public service: AppService) { }

  ngOnInit() {
  }

}
