import { Component, OnInit, Input } from '@angular/core';
import { SenseItem } from 'src/app/models/reqres-response';

@Component({
  selector: 'app-item-mca',
  templateUrl: './item-mca.component.html',
  styleUrls: ['./item-mca.component.css']
})
export class ItemMcaComponent implements OnInit {

  @Input() sense: SenseItem | any;

  constructor() { }

  ngOnInit(): void {
  }
}
