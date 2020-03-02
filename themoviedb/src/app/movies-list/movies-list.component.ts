import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  topMovies: any;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getTrending();

    this.movieService.isAnotherRequest.subscribe((newRequest: string) => {
      switch (newRequest) {
        case 'getTrending':
          this.getTrending()
          break
        case 'getPopular':
          this.getPopular()
          break
      }
    })
  }

  getPopular() {
    this.movieService.getPopular()
      .subscribe((movies) => this.topMovies = movies.results);
  }
  getTrending() {
    this.movieService.getTrending()
      .subscribe((movies) => this.topMovies = movies.results);
  }
}
