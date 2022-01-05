import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends DataService{

  allPassedData : BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(http: HttpClient) {
    super(`${environment.apiUrl}/movie/`, http)
   }
   sendSearchResults(result:any){
     this.allPassedData.next(result);
   }
   receiveSearchResults(){
     return this.allPassedData;
   }

}
