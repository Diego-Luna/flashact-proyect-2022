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

  slectValues = [];
  yScaleMin: number = 0;
  yScaleMax: number = 0;
  selectSense = 1;


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
    domain: ['#A8EAC6', '#a8eac64d'],
  };
  colorScheme_tem: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#EC9E97', '#a8eac64d'],
  };
  colorScheme_tur: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FEE39A', '#a8eac64d'],
  };
  colorScheme_tds: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#B8DCFE', '#a8eac64d'],
  };


  colorScheme_big: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#A8EAC6', '#a8eac64d'],
  };

  constructor() {
  }


  ngOnInit(): void {
    this.slectValues = this.sense.ph;
    this.yScaleMin = 0;
    this.yScaleMax = 14;
  }


  changeData(sense:number): void {
    switch (sense) {
      case 1:
        this.slectValues = this.sense.ph;
        this.yScaleMin = 0;
        this.yScaleMax = 14;
        this.colorScheme_big.domain[0] = '#A8EAC6';
        break;
      case 2:
        this.slectValues = this.sense.temperature;
        this.yScaleMin = -10;
        this.yScaleMax = 85;
        this.colorScheme_big.domain[0] = '#EC9E97';
        break;
      case 3:
        this.slectValues = this.sense.turbidity;
        this.yScaleMin = 0;
        this.yScaleMax = 1000;
        this.colorScheme_big.domain[0] = '#FEE39A';
        break;
      case 4:
        this.slectValues = this.sense.tds;
        this.yScaleMin = 0;
        this.yScaleMax = 1000;
        this.colorScheme_big.domain[0] = '#B8DCFE';
        break;
      default:
        break;
    }

    console.log(`CLick : ${sense}`);
    
  }


  onSelect(event: any): void {
    // console.log(event);
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
