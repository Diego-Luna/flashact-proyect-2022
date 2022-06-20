import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsideMcaMachineComponent } from './visualisarData/inside-mca-machine/inside-mca-machine.component';
import { InsideMcaComponent } from './visualisarData/inside-mca/inside-mca.component';
import { VisualizarDatosComponent } from './visualisarData/visualizar-datos/visualizar-datos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'visualizedata', component: VisualizarDatosComponent },
  { path: 'visualizedata/art/1', component: InsideMcaComponent },
  { path: 'visualizedata/view/:id', component: InsideMcaMachineComponent },
  // { path: 'visualizedata/view/2', component: InsideMcaMachineComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
