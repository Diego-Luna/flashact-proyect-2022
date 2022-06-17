import { Component, OnInit, Input } from '@angular/core';
import { SenseItem } from 'src/app/models/reqres-response';

import { Color, ScaleType } from '@swimlane/ngx-charts';
import { HttpSensorsService } from 'src/app/http-sensors.service';

@Component({
  selector: 'app-item-mca',
  templateUrl: './item-mca.component.html',
  styleUrls: ['./item-mca.component.css']
})
export class ItemMcaComponent implements OnInit {

  @Input() sense: SenseItem | any;
  goodData:any = [];

  slectValues: any = [];
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
    domain: ['#21d59b', '#9cebca'],
  };
  colorScheme_tem: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF3212', '#EB9E98'],
  };
  colorScheme_tur: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFC700', '#ffe68f'],
  };
  colorScheme_tds: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#7fdcf0', '#bedffe'],
  };


  colorScheme_big: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#21d59b', '#9cebca'],
  };

  constructor(private httpSensorsService: HttpSensorsService) {
  }


  ngOnInit(): void {
    this.httpSensorsService.getComparacionData("normal", this.sense.ph[0].series.length)
        .subscribe((resp: SenseItem) => {

      let lengAllData = this.sense.ph[0].series.length;
      let i = 0;
      while(lengAllData){
        resp.ph[0].series[i].name = this.sense.ph[0].series[i].name;
        resp.tds[0].series[i].name = this.sense.tds[0].series[i].name;
        resp.turbidity[0].series[i].name = this.sense.turbidity[0].series[i].name;
        resp.temperature[0].series[i].name = this.sense.temperature[0].series[i].name;
        console.log(`1:${resp.ph[0].series[i].name}, 2:${this.sense.ph[0].series[i].name}`);
        i++;
        lengAllData--;
      }

      console.log(`lengAllData:${lengAllData}, i:${i}`);

      this.goodData = resp;
      this.slectValues = [
        this.sense.ph[0],
        this.goodData.ph[0]];
    });

    console.log("\n");
    console.log(this.slectValues);

    this.yScaleMin = 0;
    this.yScaleMax = 14;

  }


  changeData(sense:number): void {
    switch (sense) {
      case 1:
        this.slectValues = [
          this.sense.ph[0],
          this.goodData.ph[0]
        ];

        this.yScaleMin = 0;
        this.yScaleMax = 14;
        this.colorScheme_big.domain[0] = '#21d59b';
        this.colorScheme_big.domain[1] = '#9cebca';
        this.big_yAxisLabel = 'PH';
        break;
      case 2:
        // this.slectValues = this.sense.temperature;
        this.slectValues = [
          this.sense.temperature[0],
          this.goodData.temperature[0]
        ];
        this.yScaleMin = -10;
        this.yScaleMax = 85;
        this.colorScheme_big.domain[0] = '#D22D1F';
        this.colorScheme_big.domain[1] = '#EB9E98';
        this.big_yAxisLabel = 'Tem';
        break;
      case 3:
        // this.slectValues = this.sense.turbidity;
        this.slectValues = [
          this.sense.turbidity[0],
          this.goodData.turbidity[0]
        ];
        this.yScaleMin = 0;
        this.yScaleMax = 50;
        this.colorScheme_big.domain[0] = '#FFC700';
        this.colorScheme_big.domain[1] = '#ffe68f';
        this.big_yAxisLabel = 'Tur';

        break;
      case 4:
        // this.slectValues = this.sense.tds;
        this.slectValues = [
          this.sense.tds[0],
          this.goodData.tds[0]
        ];
        this.yScaleMin = 0;
        this.yScaleMax = 1000;
        this.colorScheme_big.domain[0] = '#7fdcf0';
        this.colorScheme_big.domain[1] = '#bedffe';
        this.big_yAxisLabel = 'Tds';
        break;
      default:
        break;
    }

    // console.log(`CLick : ${sense}`);
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
