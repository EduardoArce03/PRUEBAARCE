import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ViewTareaComponent } from './pages/view-tarea/view-tarea.component';

const routes: Routes = [
  
    
    {path: "paginas/tarea", component: TareaComponent},
    {path: "paginas/lista", component: ListaComponent},
    {path : "paginas/tarea:id", component : ViewTareaComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
