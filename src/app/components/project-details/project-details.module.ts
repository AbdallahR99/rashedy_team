import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { NgxMasonryModule } from 'ngx-masonry';


@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
  CommonModule,
    LazyLoadImageModule,
    ProjectDetailsRoutingModule,
    NgxMasonryModule
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ]
})
export class ProjectDetailsModule { }
