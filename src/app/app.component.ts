import { Component } from '@angular/core';
import {DUMMY_DATA} from "./dummy-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = DUMMY_DATA;
}
