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

    //Eliminar tarea
    public async eliminarTarea(seleccionados: Tarea[]) {
        try {
          seleccionados.forEach((tarea) => {
            let index = this.tareas.findIndex((obj) => obj.id === tarea.id)
            if (index !== -1) {
              this.tareas.splice(index, 1);
            }
          });
        } catch (error) {
          return null;
        }
    }

     //Destacados
     public async destacar(seleccionados: Tarea[]) {
        try {
          seleccionados.forEach((tarea) => {
            let index = this.tareas.findIndex((obj) => obj.id === tarea.id);
    
            //Ingresa el destacado si existe y no posee uno
            if (index !== -1) {
              if (!this.tareas[index].titulo.endsWith("⭐")) {
                this.tareas[index].titulo = this.tareas[index].titulo.concat('  ⭐');
              } else {
                let c = this.tareas[index].titulo.length-1
                this.tareas[index].titulo = this.tareas[index].titulo.substring(0, c);
              }
            }
          });
        } catch (error) {
          return null;
        }
    }
}