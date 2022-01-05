import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/modals/movies';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUrl:string;
  searchForm: FormGroup;
  searchedMovies:Movie[];
  constructor(
    private fb: FormBuilder,
    private service: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['']
    })
  }
  onSubmit(){
    this.currentUrl=this.router.url;
    let data = this.searchForm.get('search');
    if(this.currentUrl=='/'){
      if(data?.value && data?.value!==''){
        this.service.searchMovie(data?.value).subscribe((res:any)=>{
          this.searchedMovies=res.results;
          this.service.sendSearchResults(this.searchedMovies);
          data?.setValue('');
          window.scrollTo(screen.width,screen.height);
        })
      }
  } else {
    this.router.navigateByUrl('/');
  }
}
}
