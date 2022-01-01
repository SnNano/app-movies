import { Routes } from '@angular/router';
import { DetailMoviesComponent } from './front/detail-movies/detail-movies.component';
import { IndexMoviesComponent } from './front/index-movies/index-movies.component';

export const appRoute:Routes = [
  {path:'', component:IndexMoviesComponent, children:[
    {path:'home', component:IndexMoviesComponent},
  ]},
  {path:'movie/details/:id', component:DetailMoviesComponent}
]
