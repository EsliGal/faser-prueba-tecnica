import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class AppService { 
    constructor(
        
    ) { }

    public tareas: Tarea[]=[];
    private total:number;

    public async obtenerTareas() {
        try {
            var tareas: Tarea[] = [];
            tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            tareas.push(new Tarea(2, 'Sacar la basura', 5));
            tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            tareas.push(new Tarea(5, 'Regar las plantas', 20));
            return tareas;
        } catch (error) {
            return null;
        }
    }

    //Agregar tareas
    public async agregarTarea(titulo: string, minutos: number) {
        try {
          // agrego la tarea al arreglo y aumento el indice
          this.tareas.push(new Tarea(this.total, titulo, minutos));
          this.total++;
        } catch (error) {
          return null;
        }
    }

    public actualizar(tareas: Tarea[]) {
        this.tareas = tareas;
    }
}