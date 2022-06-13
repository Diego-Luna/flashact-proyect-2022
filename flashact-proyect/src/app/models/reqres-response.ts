export interface SenseItem {
  turbidity:               Data;
  position_y:              number;
  comunity_or_institution: string;
  temperature:             Data;
  position_x:              number;
  name:                    string;
  ph:                      Data;
  tds:                     Data;
}

interface Data {
  name:  string;
  value: number[];
  time:  string[];
}
