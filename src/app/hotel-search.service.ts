import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError,retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelSearchService {
  baseUrl: any = "http://127.0.0.1:8000/api";


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`localhost/api/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  /*store() {
    return this.http.post(`${this.baseUrl}/store`, { data: car }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  } */

  getByNames(data: any): Observable<any> {
    return this.http.get(this.baseUrl + `/name?query=${data}`)
    .pipe(
      retry(1),
    );
  }

  getByAmenities(data: any): Observable<any> {
    return this.http.get(this.baseUrl + `/amenities?query=${data}`)
    .pipe(
      retry(1),
    );
  }

  getByPrice(data: any): Observable<any> {
    return this.http.get(this.baseUrl + `/prices?query=${data}`)
    .pipe(
      retry(1),
    );
  }

  getByBedSize(data: any): Observable<any> {
    return this.http.get(this.baseUrl + `/bed_sizes?query=${data}`)
    .pipe(
      retry(1),
    );
  }

  store(data: any): Observable<any> {
    return this.http.post(this.baseUrl + `/hotels`, data)
    .pipe(
      retry(1),
    );
  }

 /* handleError = (error: any) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    //this.logger.log(error);
    window.alert(errorMessage);
    return throwError(errorMessage);
  } */
}
