import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input()

  topMovies;

  constructor(private  movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getTrending()
      .subscribe((movies) => this.topMovies = movies.results, null, () => console.log(this.topMovies));
  }

  getPopular() {
    this.movieService.getPopular()
    .subscribe((movies) => this.topMovies = movies.results, null, () => console.log(this.topMovies));
  }
}
