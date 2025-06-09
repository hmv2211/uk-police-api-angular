import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crime-search',
  templateUrl: './crime-search.component.html',
  styleUrls: ['./crime-search.component.css']
})
export class CrimeSearchComponent {
  latitude: string = '';
  longitude: string = '';
  crimes: any[] = [];
  error: string = '';

  constructor(private http: HttpClient) {}

  fetchCrimes() {
    if (!this.latitude || !this.longitude) {
      this.error = 'Please enter both latitude and longitude.';
      return;
    }

    const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${this.latitude}&lng${this.longitude}`;
    this.http.get<any[]>(url).subscribe({
      next: data => {
        this.crimes = data;
        this.error = '';
      },
      error: err => {
        this.error = 'Failed to load crime data.';
        this.crimes = [];
      }
    });
  }
