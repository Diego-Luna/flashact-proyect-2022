import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-mca',
  templateUrl: './inside-mca.component.html',
  styleUrls: ['./inside-mca.component.css']
})
export class InsideMcaComponent implements OnInit {

  order: string = '';
  url: string = "";
  position:number | any;

  artistas = [
    {
      TipoObra: "Video",
      ArtistaNombre: "Camila Luna",
      ArtistaDescripcion: "Soy una filmmaker de contenido creativo y educativo, me encanta la animación y el diseño.",
      ArtistaImg: '/assets/artistas/Camila.jpeg',
      ArteURL: "https://www.youtube.com/embed/A5CCs6A6wRc",
      InstitucionComunidad: "Casa_Blanca",
      Nombre: "purificadora_de_agua_1",
    },
    {
      TipoObra: "Animacion",
      ArtistaNombre: "Diego y Ana",
      ArtistaDescripcion: "El equipo de Mientos al agua, donde se combina el arte, la tecnología y la ciencia.",
      ArtistaImg: "/assets/artistas/diego-ana.jpg",
      ArteURL: "",
      InstitucionComunidad: "Mientos al agua",
      Nombre: "Todas las sondas",
    },
    {
      TipoObra: "Sonora",
      ArtistaNombre: "Diego Martínez Guillén",
      ArtistaDescripcion: "Trabaja en la producción de proyectos auditivos para la investigación social que resultan en piezas como instalaciones audiovisuales multicanales, composiciones electroacústicas y otras obras de audio-arte.",
      ArtistaImg: '/assets/artistas/diego-flash.jpeg',
      ArteURL: "https://www.youtube.com/embed/_EQDzlNA8Yc",
      InstitucionComunidad: "Casa_Blanca",
      Nombre: "purificadora_de_agua_2",
    },
  ]

  constructor(private _location: Location, private router: Router) {}

  ngOnInit(): void {
    this.url = `${this.router.parseUrl(this.router.url)}`;
    let arr = this.url.split('/');
    console.log(arr[3]);

    if (!(arr[3] === "1" || arr[3] === "2" || arr[3] === "3")){
      this._location.back();
    }

    this.position = parseInt(arr[3]) - 1;
  }

  goBack() {
    this._location.back();
  }
}
