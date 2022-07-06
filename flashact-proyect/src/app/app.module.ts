import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { GoogleMapsModule } from '@angular/google-maps'

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
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
