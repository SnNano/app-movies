import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count=0;
  private status = new BehaviorSubject<string>('');

  constructor() { }

  getSpinnerObserver() :Observable<string>{
    return this.status.asObservable();
  }
  startRequest(){
    if(++this.count===1){
      this.status.next('start');
    }
  }
  stopRequest(){
    if(this.count===0 || --this.count===0){
      this.status.next('stop');
    }
  }
  resetRequest(){
    this.count=0;
    this.status.next('stop');
  }
}
