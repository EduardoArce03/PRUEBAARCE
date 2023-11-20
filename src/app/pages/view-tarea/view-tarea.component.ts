import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { TareaFirebaseServices } from 'src/app/services/tarea-firebase-services';

@Component({
  selector: 'app-view-tarea',
  templateUrl: './view-tarea.component.html',
  styleUrls: ['./view-tarea.component.scss']
})
export class ViewTareaComponent {

  nota: Nota = new Nota();

  constructor(private router: Router, 
      private route: ActivatedRoute,
      private tareaFirebase: TareaFirebaseServices){

        this.route.params.subscribe(params => {
          console.log(params)
          if(params['id']){
            this.loadTarea(params['id'])
          }
        })

  }

  loadTarea(uid: string) {
    this.tareaFirebase.getTarea(uid).subscribe(data => {
      console.log(data)
      this.nota = <any> data
    })
    
  }

  goListado(){
    this.router.navigate(['paginas/lista'])
  }

}
