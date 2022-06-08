import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inside-mca-machine',
  templateUrl: './inside-mca-machine.component.html',
  styleUrls: ['./inside-mca-machine.component.css']
})
export class InsideMcaMachineComponent implements OnInit {

  constructor(private _location: Location) {}

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }
}
