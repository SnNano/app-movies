import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexMoviesComponent } from './front/index-movies/index-movies.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailMoviesComponent } from './front/detail-movies/detail-movies.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './cors/spinner/spinner.component';
import { SpinnerInterceptor } from './services/spinner/spinner.interceptor';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    IndexMoviesComponent,
    HeaderComponent,
    FooterComponent,
    DetailMoviesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute, {
      scrollPositionRestoration: 'enabled'
   }),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: SpinnerInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
