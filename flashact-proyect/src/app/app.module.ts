import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeSeccionBigComponent } from './home-seccion-big/home-seccion-big.component';
import { SeccionArtComponent } from './seccion-art/seccion-art.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSeccionBigComponent,
    SeccionArtComponent
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
