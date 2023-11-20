import { Injectable } from '@angular/core';
import { Nota } from '../domain/nota';


@Injectable({
  providedIn: 'root'
})
export class TareaServices {
    tarea : Nota [] = []
    constructor(){

    }

    addTarea(nota :Nota){
        this.tarea.push(nota)
    }

    getTarea(){
        return this.tarea
    }
}
