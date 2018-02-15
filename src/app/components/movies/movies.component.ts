import { Component, OnInit } from '@angular/core';
import { MOVIE } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  list: MOVIE[] = [];
  constructor(private movieSevice: MovieService) { }
  ngOnInit() {
    this.getListMovies();
  }
  getListMovies() {
    this.movieSevice.getListMovies()
    .subscribe(data => this.list = data);
  }
}
