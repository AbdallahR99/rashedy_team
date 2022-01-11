import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss'],
  host: {'class': 'd-flex flex-column justify-content-center align-items-center'},
})
export class HomeIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
