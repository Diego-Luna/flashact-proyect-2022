import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-colaboraciones',
  templateUrl: './item-colaboraciones.component.html',
  styleUrls: ['./item-colaboraciones.component.css']
})
export class ItemColaboracionesComponent implements OnInit {

  @Input() TipoObra:string = "";
  @Input() ArtistaNombre:string = "";
  @Input() ArtistaDescripcion:string = "";
  @Input() ArtistaImg:string = "";
  @Input() ArtistaLink:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
