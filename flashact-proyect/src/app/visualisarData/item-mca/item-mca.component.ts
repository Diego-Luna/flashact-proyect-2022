import { Component, OnInit, Input } from '@angular/core';
import { SenseItem } from 'src/app/models/reqres-response';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { HttpSensorsService } from 'src/app/http-sensors.service';

import {GoogleMapsModule} from '@angular/google-maps';


@Component({
  selector: 'app-item-mca',
  templateUrl: './item-mca.component.html',
  styleUrls: ['./item-mca.component.css']
})
export class ItemMcaComponent implements OnInit {

  @Input() sense: SenseItem | any;
  goodData:any = [];

  // google Maps

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 15;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    crossOnDrag: true,
    optimized: true,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];

  labelOptions: google.maps.MarkerLabel = {
    text: "espera",
    color: "white",
    fontSize: "18px"
  }

  options: google.maps.MapOptions = {
    // mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    clickableIcons: false,
    disableDefaultUI: true,
    draggable: false,
    fullscreenControl: true,
    mapTypeControl: false,
    panControl: true,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]
    // maxZoom: 15,
    // minZoom: 8,
  }

  // Graficas

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
  LegendPosition: LegendPosition = LegendPosition.Right;

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

  constructor(private httpSensorsService: HttpSensorsService, public breakpointObserver: BreakpointObserver) {
  }


  ngOnInit(): void {

    this.center = {lat: this.sense.position_x, lng: this.sense.position_y};
    this.markerPositions = [{lat: this.sense.position_x, lng: this.sense.position_y}];
    this.labelOptions.text = this.sense.comunity_or_institution;

    this.httpSensorsService.getComparacionData("normal", this.sense.ph[0].series.length)
        .subscribe((resp: SenseItem) => {

      let lengAllData = this.sense.ph[0].series.length;
      let i = 0;
      while(lengAllData){
        resp.ph[0].series[i].name = this.sense.ph[0].series[i].name;
        resp.tds[0].series[i].name = this.sense.tds[0].series[i].name;
        resp.turbidity[0].series[i].name = this.sense.turbidity[0].series[i].name;
        resp.temperature[0].series[i].name = this.sense.temperature[0].series[i].name;
        i++;
        lengAllData--;
      }

      this.goodData = resp;
      this.slectValues = [
        this.sense.ph[0],
        this.goodData.ph[0]];
    });

    console.log("\n");
    console.log(this.slectValues);

    this.yScaleMin = 0;
    this.yScaleMax = 14;

    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.LegendPosition = LegendPosition.Below;
          this.big_showYAxisLabel = false;
        } else {
          this.LegendPosition = LegendPosition.Right;
          this.big_showYAxisLabel = true;
        }
      });

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
        this.yScaleMax = 5;
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


  // Google Maps
  moveMap(event: google.maps.MapMouseEvent) {
    // this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    // this.display = event.latLng.toJSON();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    // this.markerPositions.push(event.latLng.toJSON());
  }
}
