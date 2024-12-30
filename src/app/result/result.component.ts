import { Component, EventEmitter, Output } from '@angular/core';
import { CalculatorLogicService } from '../calculator-logic.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-result',
  standalone:true,
  imports: [FormsModule,],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  @Output() resultEvent = new EventEmitter<number>();
  num1!: number;
  num2!: number;

  constructor(private calculatorLogicService: CalculatorLogicService) { }

  calculate(operation: string): void {
    let result: number;
    switch (operation) {
      case 'sum':
        result = this.calculatorLogicService.sum(this.num1, this.num2);
        break;
      case 'diff':
        result = this.calculatorLogicService.diff(this.num1, this.num2);
        break;
      case 'product':
        result = this.calculatorLogicService.multiply(this.num1, this.num2);
        break;
      case 'divide':
        result = this.calculatorLogicService.divide(this.num1, this.num2);
        break;
      default:
        result = NaN;
    }
    console.log(result);
    this.resultEvent.emit(result);
  }
}