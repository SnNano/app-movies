import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import {Movie} from 'src/app/modals/movies';

@Component({
  selector: 'app-index-movies',
  templateUrl: './index-movies.component.html',
  styleUrls: ['./index-movies.component.css']
})
export class IndexMoviesComponent implements OnInit {

  movie:Movie[] = [];
  data:Movie[];
  showMore= true;
  pageNumber = 1;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getLatestMovies();
  }
  getLatestMovies(){
    this.showMore=false;
    this.moviesService.getMovies(this.pageNumber).subscribe((res: any) =>{
      for (let i = 0; i < res.results.length; ++i) {
        this.movie.push(res.results[i]);
    }
    this.showMore=true;
    if (this.movie.length >= 100) {
      this.showMore = false;
    }
      console.log(this.movie)
    })
  }
  displayMore(){
    this.pageNumber++;
    this.getLatestMovies();
  }
}
