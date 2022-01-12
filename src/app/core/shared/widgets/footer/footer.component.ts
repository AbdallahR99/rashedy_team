import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routes } from '@constants/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  get routes(): typeof Routes {
    return Routes;
  }
  constructor() { }

  ngOnInit(): void {
  }

  onContactSubmit(form: NgForm): void {
    console.log(form);
  }

}
