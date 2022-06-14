import { Component, OnInit } from '@angular/core';
import { HttpSensorsService } from 'src/app/http-sensors.service';

// Models
import { SenseItem } from 'src/app/models/reqres-response';

@Component({
  selector: 'app-visualizar-datos',
  templateUrl: './visualizar-datos.component.html',
  styleUrls: ['./visualizar-datos.component.css']
})
export class VisualizarDatosComponent implements OnInit {

  public sensores: SenseItem[] | any;
  public view_sensores: SenseItem[] | any = [];
  i:number = 0
  create:number = 0
  max_sensores:number = 0

  constructor(private httpSensorsService: HttpSensorsService) {}

  ngOnInit(): void {
    this.httpSensorsService.getData()
        .subscribe((resp: SenseItem) => {
      console.log(resp);
      this.sensores = resp;
      this.max_sensores = this.sensores.length

      while( this.i < 2 && this.i < this.max_sensores){
        this.view_sensores.push(this.sensores[this.i]);
        this.i += 1;
      }
      console.log(this.i);
    });
  }

  moreSensors(): void {

    let old_i = this.i
    old_i += 2;
    while( this.i < old_i && this.i < this.max_sensores){
      this.view_sensores.push(this.sensores[this.i]);
      this.i += 1;
    }
  }

}
