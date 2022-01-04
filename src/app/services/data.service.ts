import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



export class DataService {


  constructor(
    private url:string,
    private http: HttpClient) {}

  getMovies(pageNumber:number){
    return this.http.get(this.url+`popular?api_key=${environment.apiKey}`+"&page="+pageNumber);
  }
  getOneMovie(resource:number){
    return this.http.get(this.url+resource+`?api_key=${environment.apiKey}`);
  }
  getByGenre(resource:number){
    return this.http.get(`${environment.apiUrl}`+'/discover/movie'+`?api_key=${environment.apiKey}`+'&with_genres='+resource);
  }
  getLatest(){
    return this.http.get(this.url+`latest?api_key=${environment.apiKey}`);
  }
  getGenres(){
    return this.http.get(`${environment.apiUrl}/genre/movie/list?api_key=${environment.apiKey}`);
  }
  searchMovie(resource:string){
    return this.http.get(`${environment.apiUrl}/search/movie?api_key=${environment.apiKey}&query=`+resource);
  }
}
