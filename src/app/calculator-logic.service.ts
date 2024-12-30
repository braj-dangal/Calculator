import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorLogicService {

  constructor() { }
  sum(x: number, y: number): number {
    return x + y;
  }

  diff(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    return x / y;
  }
}
