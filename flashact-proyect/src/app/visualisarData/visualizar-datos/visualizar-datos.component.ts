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

  // public sensores: SenseItem[] = [];
  public sensores: SenseItem[] | any;
  // public sensores: any = [];

  constructor(private httpSensorsService: HttpSensorsService) {}

  ngOnInit(): void {
    this.httpSensorsService.getData()
        .subscribe((resp: SenseItem) => {
      console.log(resp);
      this.sensores = resp;
    });
  }

}
