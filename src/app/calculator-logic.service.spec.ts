import { TestBed } from '@angular/core/testing';

import { CalculatorLogicService } from './calculator-logic.service';

describe('CalculatorLogicService', () => {
  let service: CalculatorLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
