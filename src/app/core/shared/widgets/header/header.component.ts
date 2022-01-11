import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '@constants/routes';
import { RouterLoaderService } from '@services/routing/router-loader.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navbar!: ElementRef<HTMLButtonElement>;

  get $isLoading(): Observable<boolean> {
    return this.routerLoaderService.$isLoading;
  }


  get routes(): typeof Routes {
    return Routes;
  }
  constructor(private routerLoaderService: RouterLoaderService, private router: Router,
    @Inject(DOCUMENT) private document: Document) { }
  isLinkActive(url: string): boolean {
    const currentUrl = this.router.url.substring(1);
    console.log(window);

    return (currentUrl === url);
  }
  ngOnInit(): void {
    console.log(this.router);
  }

  @HostListener('window:scroll', ['$event'])
  scrollFunction(e: any) {
    if (this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20) {
      this.navbar.nativeElement.classList.add('bg-white');
      this.navbar.nativeElement.classList.add('shadow-lg');
    } else {
      this.navbar.nativeElement.classList.remove('bg-white');
      this.navbar.nativeElement.classList.remove('shadow-lg');

    }
  }

}
