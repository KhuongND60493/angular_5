import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MOVIE } from '../models/Movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class MovieService {
  private url = 'http://duykhuong-pc:3000/movies';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }
  getListMovies(): Observable<MOVIE[]> {
    return this.http.get<MOVIE[]>(this.url).pipe();
  }
  getMovie(id: number): Observable<MOVIE> {
    var u = this.url + '/' + id;
    return this.http.get<MOVIE>(u).pipe();
  }
  updateMovie(m: MOVIE): Observable<MOVIE> {
    var u = this.url + '/' + m.id;
    return this.http.put<MOVIE>(u, m, this.httpOptions).pipe();
  }
  removeMovie(m: MOVIE): Observable<MOVIE> {
    var u = this.url + '/' + m.id;
    return this.http.delete<MOVIE>(u, this.httpOptions).pipe();
  }
  newMovie(m: MOVIE): Observable<MOVIE> {
    return this.http.post<MOVIE>(this.url, m, this.httpOptions).pipe();
  }
}
