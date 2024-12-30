import { Component } from '@angular/core';
import { ResultComponent } from "../result/result.component";

@Component({
  selector: 'app-main',
  standalone : true,
  imports: [ResultComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  output : number = 0;

  result(value: number): void {
    this.output = value;
  }
}
