import { Component } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { ResultComponent } from "./result/result.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
}
