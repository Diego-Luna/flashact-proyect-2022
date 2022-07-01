import { Component, OnInit, HostBinding } from '@angular/core';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // animations: [
  //   // los disparadores de animación van aquí
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       // height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       // height: '100px',
  //       opacity: 0.8,
  //       backgroundColor: 'blue'
  //     })),
  //     transition('open => closed', [
  //       animate('2s')
  //     ]),
  //     transition('closed => open', [
  //       animate('1.5s')
  //     ]),
  //   ]),
  // ]
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

  pasos_text = {
    seccion1: [
      `Para programar el arduino usaremos el Arduino IDE, puedes usar la versión web o puedes descargarlo en tu computadora.\nAbre el programa y ve a Herramientas > Placas > Gestor de tarjetas,después busca “Arduino MKR” e instálalo. Conecta el módulo del sensor de PH de la siguiente manera:\n- Cable rojo a 5v\n- Cable megro a GND\n- Cable azul a A0
      `,
      `Perfecto, ahora coloca el sensor en un líquido de ph = 7.00.
      Abre el código “Calibracion_de_Ph”, conecta el arduino a la computadora y selecciona la placa, ve a Herramientas > placas y selecciona el puerto, por último sube el código y abre el monitor serial, aqui veras el valor del sensor, ahora deberás mover el potenciómetro para bajar o subir el valor del sensor para ser el de tu líquido de muestreo en este caso ph = 7.00.
      `,
      `También para finalizar debes calcular la diferencia del valor medido y el correcto, para colocarlo en el valor “#define Offset 0.00”. Por ejemplo, si el valor medio es de 9 y el correcto es 7, la diferencia es 2, asi que modificas “#define Offset -2.00”.`,
    ],
    seccion2: [
      "Conecta todos los cables rojos o positivos de los sensores y conectalos en el positivo de la batería (5V).",
      "Depsues conecta los cables negros o negativos y conectalos al lado negativo de la bateria (GND).",
      "Ahora conecta los cables de datos de los sensores, temperatura conectalo a D2, pH a A0, TDS a A1 y Turbiedad a A2.",
      "Por último conecta el arduino a la batería a 3.7v.",
    ]
  }

  text_section_1 = this.pasos_text.seccion1[0];
  text_section_2 = this.pasos_text.seccion2[0];

  constructor() { }

  ngOnInit(): void {
  }

  change_status(seccion:string, nuevo_estado:number){

    switch (seccion) {
      case "1":
        this.status_section_1 = nuevo_estado;
        this.changeText("1", nuevo_estado);
        break;
      case "2":
        this.status_section_2 = nuevo_estado;
        this.changeText("2", nuevo_estado);
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
    console.log("Click");
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

  changeText(seccion:string, text_number:number){
    switch (seccion) {
      case "1":
        this.text_section_1 = this.pasos_text.seccion1[text_number - 1];
        break;
      case "2":
        this.text_section_2 = this.pasos_text.seccion2[text_number - 1];
        break;
      default:
        break;
    }
  }

}
