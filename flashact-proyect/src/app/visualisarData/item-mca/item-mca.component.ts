import { Component, OnInit, Input } from '@angular/core';
import { SenseItem } from 'src/app/models/reqres-response';

import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-item-mca',
  templateUrl: './item-mca.component.html',
  styleUrls: ['./item-mca.component.css']
})
export class ItemMcaComponent implements OnInit {

  @Input() sense: SenseItem | any;

  small_view: [number, number] = [100, 30];

  // options
  small_legend: boolean = false;
  small_showLabels: boolean = false;
  small_animations: boolean = false;
  small_xAxis: boolean = false;
  small_yAxis: boolean = false;
  small_showYAxisLabel: boolean = false;
  small_showXAxisLabel: boolean = false;
  small_xAxisLabel: string = 'Year';
  small_yAxisLabel: string = 'Sparklines';
  small_timeline: boolean = false;

  big_view: [number, number] = [1000, 300];

  // options
  big_legend: boolean = true;
  big_showLabels: boolean = true;
  big_animations: boolean = true;
  big_xAxis: boolean = true;
  big_yAxis: boolean = true;
  big_showYAxisLabel: boolean = true;
  big_showXAxisLabel: boolean = true;
  big_xAxisLabel: string = 'time';
  big_yAxisLabel: string = 'PH';
  big_timeline: boolean = true;

  colorScheme_ph: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#A8EAC6'],
  };
  colorScheme_tem: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#EC9E97'],
  };
  colorScheme_tur: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FEE39A'],
  };
  colorScheme_tds: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#B8DCFE'],
  };


  colorScheme_big: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#A8EAC6'],
  };


  multi = [
    {
      "name": "ph",
      "series": [
        {
          "name": "1990",
          "value": 7
        },
        {
          "name": "2010",
          "value": 14
        },
        {
          "name": "2011",
          "value": 8
        }
      ]
    },
    {
      "name": "god ph",
      "series": [
        {
          "name": "1990",
          "value": 7
        },
        {
          "name": "2010",
          "value": 7
        },
        {
          "name": "2011",
          "value": 7
        }
      ]
    },
  ];

  constructor() {
    // Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

  onSelect(event: any): void {
    console.log(event);
  }
}
