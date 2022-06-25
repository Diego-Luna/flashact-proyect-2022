import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpSensorsService } from 'src/app/http-sensors.service';
import { SenseItem } from 'src/app/models/reqres-response';

@Component({
  selector: 'app-inside-mca-machine',
  templateUrl: './inside-mca-machine.component.html',
  styleUrls: ['./inside-mca-machine.component.css']
})
export class InsideMcaMachineComponent implements OnInit {

  url: string = "";
  sense: SenseItem | any;

  constructor(private _location: Location, private router: Router, private httpSensorsService: HttpSensorsService) {}

  ngOnInit(): void {
    this.url = `${this.router.parseUrl(this.router.url)}`;
    let arr = this.url.split('/');
    console.log(arr[3]);
    this.httpSensorsService.getSensorData(arr[3]).subscribe((resp: SenseItem) => {

      if(!(resp.name)){
        this._location.back();
      }

      this.sense = resp;

      console.log(this.sense.temperature[0].series[this.sense.temperature[0].series.length - 1].value);
    });;
  }

  goBack() {
    this._location.back();
  }

  returnPh(){

    let value = this.sense.ph[0].series[this.sense.ph[0].series.length - 1].value;
    let object = {
      color: "#21d59b",
      velocidad: 16
    }

    console.log(`values ph : ${value}`);

    if (value >= 7.99 ){
      // console.log((`1: ${object.velocidad - value}s`));
      return (`${object.velocidad - value}s`);
    }
    else if (value <= 7.00){
      // console.log(`2: ${object.velocidad + value}s`);
      return (`${object.velocidad + value}s`);
    }
    // console.log(`3: ${object.velocidad}s`);
    return (`${object.velocidad}s`);
  }

  returnTem(){
    let value = this.sense.temperature[0].series[this.sense.temperature[0].series.length - 1].value;
    let object = {
      color: "#21d59b",
      velocidad: 16
    }

    console.log(`values tem: ${value}`);

    if (value >= 35.01 ){
      console.log((`tem 1: ${object.velocidad - value}s`));
      return (`${object.velocidad - value}s`);
    }
    else if (value <= 29.99){
      console.log(`tem 2: ${object.velocidad + value}s`);
      return (`${object.velocidad + value}s`);
    }
    console.log(`tem 3: ${object.velocidad}s`);
    return (`${object.velocidad}s`);
  }
  returnTur(){
    let value = this.sense.turbidity[0].series[this.sense.turbidity[0].series.length - 1].value;
    let object = {
      color: "#21d59b",
      velocidad: 16
    }

    console.log(`values tur: ${value}`);

    if (value <= 4.00 ){
      console.log((`tur 1: ${object.velocidad - value}s`));
      return (`${object.velocidad - value}s`);
    }
    console.log(`tur 3: ${object.velocidad}s`);
    return (`${object.velocidad}s`);
  }
  returnTDS(){
    let value = this.sense.tds[0].series[this.sense.tds[0].series.length - 1].value;
    let object = {
      color: "#21d59b",
      velocidad: 16
    }

    console.log(`values tds: ${value}`);

    if (value >= 310.01 ){
      console.log((`tds 1: ${value - object.velocidad}s`));
      return (`${object.velocidad - value}s`);
    }
    else if (value <= 299.99){
      console.log(`tds 2: ${(value)/2 - object.velocidad}s`);
      return (`${object.velocidad + value}s`);
    }
    console.log(`tds 3: ${object.velocidad}s`);
    return (`${object.velocidad}s`);
  }
}
