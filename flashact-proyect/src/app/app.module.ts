import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ItemColaboracionesComponent } from './item-colaboraciones/item-colaboraciones.component';
import { MenuComponent } from './menu/menu.component';
import { VisualizarDatosComponent } from './visualisarData/visualizar-datos/visualizar-datos.component';
import { ItemMcaComponent } from './visualisarData/item-mca/item-mca.component';
import { InsideMcaMachineComponent } from './visualisarData/inside-mca-machine/inside-mca-machine.component';
import { InsideMcaComponent } from './visualisarData/inside-mca/inside-mca.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ItemColaboracionesComponent,
    MenuComponent,
    VisualizarDatosComponent,
    ItemMcaComponent,
    InsideMcaMachineComponent,
    InsideMcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
