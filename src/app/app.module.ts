import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './services/movie.service';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
     RoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
