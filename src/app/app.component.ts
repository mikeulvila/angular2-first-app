import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Root component works!';
  attach = true;
  test = 'starting value';
  boundValue = 999;
}
