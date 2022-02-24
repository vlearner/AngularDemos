import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirportSearchService {

  constructor(private http: HttpClient) {
  }

  private url = 'https://airport-info.p.rapidapi.com/airport';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'x-rapidapi-host': 'airport-info.p.rapidapi.com',
    'x-rapidapi-key': '41f3fa0b2bmshb99d90d018d362cp1901f9jsn127484dbaf4c',
    'useQueryString': 'true'

  })

  getAirportInfo(iata: any): Observable<any> {
    let params = new HttpParams()
    params = params.append("iata", iata)
    return this.http.get<any>(this.url, {headers: this.headers, params: params}).pipe(
      retry(1),
      catchError(err => {
        throw 'Error from Airport service' + err;
      })
    );
  }

}
