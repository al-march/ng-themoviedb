import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  URL = 'https://api.themoviedb.org/3/';
  API = 'api_key=712dddf9c2e456d59357238a18de737a';
  LANG = 'language=ru;';

  constructor(public http: HttpClient) {
  }

  public isAnotherRequest = new Subject();

  setNewRequest(newRequest: string) {
    this.isAnotherRequest.next(newRequest);
  }

  getTrending() {
    const key = 'trending/movie/day?'
    const url = `${this.URL}${key}${this.API}&${this.LANG}`
    return this.http.get(url);
  }

  getPopular() {
    const key = 'movie/popular?';
    const url = `${this.URL}${key}${this.API}`;
    return this.http.get(url);
  }
}
