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
    });;
  }

  goBack() {
    this._location.back();
  }
}
