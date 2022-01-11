import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  get $isLoading(): Observable<boolean> {
    return this.routerLoaderService.$isLoading;
  }


  get routes(): typeof Routes {
    return Routes;
  }
  constructor(private routerLoaderService: RouterLoaderService, private activatedRoute: ActivatedRoute) { }
  isLinkActive(url: string): boolean {
    const currentUrl = (this.activatedRoute.snapshot.url.join('/') + ( this.activatedRoute.snapshot.fragment ? ('#' + this.activatedRoute.snapshot.fragment) : ''));
      console.log(`param ${url}`, `url ${currentUrl}`, `this.activatedRoute.snapshot.fragment ${this.activatedRoute.snapshot.fragment}`, this.activatedRoute);
    console.log(window);

    return (currentUrl === url);
  }
  ngOnInit(): void {
  }

}
