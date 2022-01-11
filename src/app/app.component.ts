import { Component } from '@angular/core';
import { RouterLoaderService } from '@services/routing/router-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rashedy_team';
  constructor() {
    localStorage.setItem('test', 'test');
    console.log(localStorage.getItem('test'));
  }
}
