import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CalculatorComponent } from './calculator/calculator.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
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

  bootstrap: [],
})
export class AppModule implements DoBootstrap{
  constructor(private injector : Injector) {}
  ngDoBootstrap(appRef: ApplicationRef): void {
   const calculator = createCustomElement(CalculatorComponent , {injector : this.injector}) ;
   customElements.define('app-calculator' ,calculator ) ;
  }
}
