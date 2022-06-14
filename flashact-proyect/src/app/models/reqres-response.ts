export interface SenseItem {
  turbidity:               Ph[];
  name:                    string;
  ph:                      Ph[];
  comunity_or_institution: string;
  position_y:              number;
  tds:                     Ph[];
  position_x:              number;
  temperature:             Temperature[];
}

export interface Ph {
  series: PhSeries[];
  name:   string;
}

export interface PhSeries {
  value: number;
  name:  string;
  max?:  number;
  min?:  number;
}

export interface Temperature {
  name:   string;
  series: TemperatureSeries[];
}

export interface TemperatureSeries {
  value: number;
  name:  string;
}
