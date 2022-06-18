import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

import { SenseItem } from './models/reqres-response';

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpSensorsService {

  // rutaApi = "http://localhost:8080/";
  rutaApi = "https://acercamientos-al-agua.uc.r.appspot.com/";
  totalAngularPackages: any;
  error:any;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<SenseItem>(this.rutaApi + "sensor/");
  }

  getComparacionData(name:string, number: number) {
    return this.http.get<SenseItem>(`${this.rutaApi}datacomparison/${name}/${number}/`);
  }

}
