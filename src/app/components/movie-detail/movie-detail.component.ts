import { Component, OnInit } from '@angular/core';
import { MOVIE } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: MOVIE = { id: null, nameMovie: '', realeaseMovie: 2018 };
  title: String = 'New Movie';
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieSevice: MovieService) { }
  getSelectdMovie() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != 0) {
      this.title = 'Edit Movie';
      this.movieSevice.getMovie(id).subscribe(data => this.selectedMovie = data);
    }
  }
  goback() {
    this.location.back();
  }
  ngOnInit() {
    this.getSelectdMovie();
  }
  onUpdateMovive(): void {
    this.movieSevice.updateMovie(this.selectedMovie).subscribe(data => {
      if (data != null) {
        this.goback()
      }
    });
  }

  onRemoveMovive(): void {
    var c = confirm('Bạn có muốn xoá phim này không?');
    if (c) {
      this.movieSevice.removeMovie(this.selectedMovie).subscribe(data => {
        if (data != null) {
          this.goback();
        }
      });
    }
  }
  onConfirmMovie(): void {
    this.movieSevice.newMovie(this.selectedMovie).subscribe(data => {
      if (data != null) {
        this.goback();
      }
    });
  }
}
