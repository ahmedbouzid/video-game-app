import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  @Input() widgetInput : string = 'Just For test web component ' ;
  @Output() widgetOutput = new EventEmitter<number>() ;


  number1 : number = 0 ;
  number2 : number = 0 ;

  add () : void {
    this.widgetOutput.emit(this.number1+ this.number2) ;
  }
  substruct () : void {
    this.widgetOutput.emit(this.number1 - this.number1) ;
  }
  multiply() : void {
    this.widgetOutput.emit(this.number1 * this.number2) ;
  }
  divide() : void {
    this.widgetOutput.emit(this.number1 / this.number2) ;
  }
}
