import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HomeSkillCardComponent } from './home-skills/home-skill-card/home-skill-card.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    HomeComponent,
    HomeIntroComponent,
    HomeAboutComponent,
    HomeSkillsComponent,
    HomePortfolioComponent,
    HomeSkillCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPageScrollCoreModule,
    LazyLoadImageModule,
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }

  ]
})
export class HomeModule { }
