import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef<HTMLButtonElement>;
  constructor(@Inject(DOCUMENT) private document: Document) {
    localStorage.setItem('test', 'test');
    console.log(localStorage.getItem('test'));
    AOS.init();
  }

  @HostListener('window:scroll', ['$event'])
  scrollFunction(e: any) {
    if (this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20) {
      this.scrollToTopButton.nativeElement.classList.add('show');
    } else {
      this.scrollToTopButton.nativeElement.classList.remove('show');
    }
  }

  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
