import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(
    private spinnerService : SpinnerService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.startRequest();
    return this.handler(request, next);
  }
  handler(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request)
    .pipe(
      tap((event:any) =>{
        if(event instanceof HttpResponse){
          this.spinnerService.stopRequest();
        }
      },
      (Error: HttpErrorResponse) =>{
        this.spinnerService.resetRequest();
        throw Error;
      })
    );
  }
}
