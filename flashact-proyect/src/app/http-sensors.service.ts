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

  // rutaApi = "http://localhost:8080/sensor/";
  rutaApi = "https://acercamientos-al-agua.uc.r.appspot.com/sensor/";
  totalAngularPackages: any;
  error:any;

  constructor(private http: HttpClient) {}

  // getData(): Observable<[]> {
    // getData() {
    getData() {
    // return this.http.get(this.rutaApi);
    return this.http.get<SenseItem>(this.rutaApi);
  }

}
