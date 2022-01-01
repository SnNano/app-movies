import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



export class DataService {


  constructor(
    private url:string,
    private http: HttpClient) {}

  getMovies(pageNumber:number){
    return this.http.get(this.url+"&page="+pageNumber);
  }
  getOneMovie(resource:number){
    return this.http.get(this.url+resource+`?api_key=${environment.apiKey}`);
  }
  getByGenre(resource:number){
    return this.http.get(`${environment.apiUrl}`+'/discover/movie'+`?api_key=${environment.apiKey}`+'&with_genres='+resource);
  }
}
