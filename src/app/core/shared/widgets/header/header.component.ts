import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  constructor(private routerLoaderService: RouterLoaderService) { }

  ngOnInit(): void {
  }

}
