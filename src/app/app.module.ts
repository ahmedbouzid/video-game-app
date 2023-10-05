import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './intercepors/http-headers.intereptor';
import { HttpErrorsInterceptor } from './intercepors/http-errors.interceptor';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, HomeComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS ,
      useClass : HttpHeadersInterceptor ,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS ,
      useClass : HttpErrorsInterceptor ,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
