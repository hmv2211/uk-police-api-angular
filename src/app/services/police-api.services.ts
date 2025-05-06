import { Injectable } from '@angular/core';
import { HttpClinet } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliceApiService {
  private BASE_URL = 'https://data.police.uk/api';

  constructor(private http: HttpClient) {}

  getCrimes(lat: nmber, lng: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/crimes-street/all-crime?lat=${lat}&lng=${lng}`);
  }

  getForces(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/forces`);
  }

  getForceDetails(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/forces/${id}`);
  }
}
