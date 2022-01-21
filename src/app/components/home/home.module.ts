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
import { FilterModule } from '@pipes/filter/filter.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMasonryModule } from 'ngx-masonry';
import { HomePortfolioModalComponent } from './home-portfolio/home-portfolio-modal/home-portfolio-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomePortfolioItemComponent } from './home-portfolio/home-portfolio-item/home-portfolio-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeIntroComponent,
    HomeAboutComponent,
    HomeSkillsComponent,
    HomePortfolioComponent,
    HomeSkillCardComponent,
    HomePortfolioModalComponent,
    HomePortfolioItemComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPageScrollCoreModule,
    LazyLoadImageModule,
    FilterModule,
    NgxMasonryModule ,
    ModalModule.forRoot(),
    CarouselModule ,
    MatDialogModule,
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ]
})
export class HomeModule { }
