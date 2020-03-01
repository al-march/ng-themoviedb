import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  URL: string = 'https://api.themoviedb.org/3/trending/movie/day?';
  API: string = 'api_key=712dddf9c2e456d59357238a18de737a';
  LANG: string = 'language=ru;';

  constructor(public http: HttpClient) {
  }

  getTrending() {
    const url = `${this.URL}${this.API}&${this.LANG}`
    return this.http.get(url);
  }
}
