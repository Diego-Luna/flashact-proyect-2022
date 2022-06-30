import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  status_section_1: number = 1;
  status_section_2: number = 1;
  status_section_3: number = 1;
  status_section_4: number = 1;
  status_section_5: number = 1;

  url_img_section_1: string = "./assets/pasos/1_calibracion";
  url_img_section_2: string = "./assets/pasos/1_calibracion";
  url_img_section_3: string = "./assets/pasos/1_calibracion";
  url_img_section_4: string = "./assets/pasos/1_calibracion";
  url_img_section_5: string = "./assets/pasos/1_calibracion";

  constructor() { }

  ngOnInit(): void {
  }

  change_status(seccion:string, nuevo_estado:number){

    switch (seccion) {
      case "1":
        this.status_section_1 = nuevo_estado;
        break;
      case "2":
        this.status_section_2 = nuevo_estado;
        break;
      case "3":
        this.status_section_3 = nuevo_estado;
        break;
      case "4":
        this.status_section_4 = nuevo_estado;
        break;
      case "5":
        this.status_section_5 = nuevo_estado;
        break;
      default:
        console.log("Error en seccion: " + seccion + " en nuevo_estado: "+ nuevo_estado);
        break;
    }
  }

  getImageSections(seccion:string, img_url:string):string{
    switch (seccion) {
      case "1":
        return (`${img_url}/${this.status_section_1}.jpg`)
        break;
      case "2":
        return (`${img_url}/${this.status_section_2}.jpg`)
        break;
      case "3":
        return (`${img_url}/${this.status_section_3}.jpg`)
        break;
      case "4":
        return (`${img_url}/${this.status_section_4}.jpg`)
        break;
      case "5":
        return (`${img_url}/${this.status_section_5}.jpg`)
        break;
      default:
        console.log("Error en seccion: " + seccion + " en img_url: "+ img_url);
        return (`${img_url}/`)
        break;
    }
  }

}
