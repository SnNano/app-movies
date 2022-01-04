import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import {Movie} from 'src/app/modals/movies';
import { Genre } from 'src/app/modals/genre';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index-movies',
  templateUrl: './index-movies.component.html',
  styleUrls: ['./index-movies.component.css']
})
export class IndexMoviesComponent implements OnInit {

  movie:Movie[] = [];
  latest:Movie;
  searchForm:FormGroup;
  data:Movie[];
  categories:Genre[];
  showMore= true;
  pageNumber = 1;
  constructor(
    private moviesService: MoviesService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchForm=this.fb.group({
      searchInput:['',]
    })
    this.getLatestMovie();
    this.getLatestMovies();
    this.getGenres();
  }
  getLatestMovie(){
    this.moviesService.getLatest().subscribe((res:any)=>{
      this.latest=res;
    } )
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
    })
  }
  getGenres(){
    this.moviesService.getGenres().subscribe((res:any)=>{
      this.categories=res.genres;
      console.log(this.categories)
    })
  }
  searchMovie(){

  }
  displayMore(){
    this.pageNumber++;
    this.getLatestMovies();
  }
}
