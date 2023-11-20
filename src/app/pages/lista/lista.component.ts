import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { TareaFirebaseServices } from 'src/app/services/tarea-firebase-services';
import { TareaServices } from 'src/app/services/tarea-services';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  
  nota : Nota[] = []

  listaTareas: any

  constructor(private tareaService : TareaServices,
    private tareaFirebase : TareaFirebaseServices,
      private router: Router){
    this.nota = tareaService.getTarea()

    this.listaTareas = this.tareaFirebase.getAll()
  }

  goEditar(tarea: any){
    console.log("editando", tarea)

    let params: NavigationExtras = {
      queryParams: {
        tarea: tarea
      }
    }

    this.router.navigate(['paginas/tarea'], params)
  }
}
