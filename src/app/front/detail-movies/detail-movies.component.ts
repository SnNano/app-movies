import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/modals/movies';
import { DetailsService } from 'src/app/services/detail/details.service';

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.css']
})
export class DetailMoviesComponent implements OnInit {

  movieItem: Movie;
  relatedMovie: Movie[];
  constructor(
    private detailService: DetailsService,
    private activated: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      this.getDetail(params.id);
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    stagePadding: 50,
    margin: 10,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide hidden-md'><i class='fas fa-angle-double-left'></i></div>",
      "<div class='nav-btn next-slide hidden-md'><i class='fas fa-angle-double-right'></i></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  }
  getDetail(id:number){
    this.detailService.getOneMovie(id).subscribe((res:any)=>{
      this.movieItem =res;
      this.getMovieByGenre(this.movieItem.genres[0].id);
    });
  }
  getMovieByGenre(id:number){
    this.detailService.getByGenre(id).subscribe((res:any)=>{
      this.relatedMovie=res.results;
    })
  }
}
