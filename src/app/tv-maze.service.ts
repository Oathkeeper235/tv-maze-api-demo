import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {
  private readonly apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  searchShows(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/shows?q=${query}`);
  }

  getShowDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shows/${id}?embed=cast`);
  }
}
