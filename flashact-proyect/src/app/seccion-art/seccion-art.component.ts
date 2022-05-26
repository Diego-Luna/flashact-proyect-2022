import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-art',
  templateUrl: './seccion-art.component.html',
  styleUrls: ['./seccion-art.component.css']
})
export class SeccionArtComponent implements OnInit {


  pH: number = 7;
  TDS: number = 0;
  Turbiedad: number = 1;
  Temperatura: number = 10;
  textoDeInput: string | undefined;

  colorOne_r: string[] = ["#ED1C24", "#F26724", "#F8C510", "#F5EE1D", "#B5D332", "#83C240", "#4EB74A",
  "#33A84B",
  "#24B36A", "#0AB9B5", "#4690CD", "#3852A3", "#5A50A2", "#63459D", "#472C82" ]
  // colorSecond_r: <number> = {}

  constructor() { }

  ngOnInit(): void {
  }

  checkTemperatura(value: number): void {

    if (value >= -20 && value <= 100) {
      this.Temperatura = value;

    }
    if (value < -20) {
      this.Temperatura = -20;
    }
    if (value > 100) {
      this.Temperatura = 100;
    }
  }
  checkTurbiedad(value: number): void {

    if (value >= 1 && value <= 100) {
      this.Turbiedad = value;

    }
    if (value < 1) {
      this.Turbiedad = 1;
    }
    if (value > 100) {
      this.Turbiedad = 100;
    }
  }
  checkPh(value: number): void {

    if (value >= 0 && value <= 14) {
      this.pH = value;

    }
    if (value < 0) {
      this.pH = 0;
    }
    if (value > 14) {
      this.pH = 14;
    }
  }
}
