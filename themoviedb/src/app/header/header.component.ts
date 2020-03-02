import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openSettings = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  setAnotherRequest(value: string) {
    this.movieService.setNewRequest(value)
  }
}
