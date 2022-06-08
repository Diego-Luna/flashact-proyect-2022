import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inside-mca',
  templateUrl: './inside-mca.component.html',
  styleUrls: ['./inside-mca.component.css']
})
export class InsideMcaComponent implements OnInit {

  constructor(private _location: Location) {}

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }
}
