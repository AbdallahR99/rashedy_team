import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  get $isLoading(): Observable<boolean> {
    return this.routerLoaderService.$isLoading;
  }


  get routes(): typeof Routes {
    return Routes;
  }
  constructor(private routerLoaderService: RouterLoaderService, private router: Router) { }
  isLinkActive(url: string): boolean {
    const currentUrl = this.router.url.substring(1);
    console.log(window);

    return (currentUrl === url);
  }
  ngOnInit(): void {
    console.log(this.router);

  }

}
