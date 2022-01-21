// import { animate, style } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Project } from '@models/project.model';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { NgxMasonryOptions } from 'ngx-masonry';
// import * as AOS from 'aos';
import { ProjectsService } from '@services/projects/projects.service';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePortfolioComponent implements OnInit {
  // public myOptions: NgxMasonryOptions = {
  //   animations: {
  //     show: [
  //       style({opacity: 0}),
  //       animate('500ms ease-in', style({opacity: 1})),
  //     ],
  //     hide: [
  //       style({opacity: '*'}),
  //       animate('500ms ease-in', style({opacity: 0})),
  //     ]
  //   },


  // };
  // modalRef?: BsModalRef;
  filterBy: '' | 'web' | 'mobile' | 'backend' = '';
  selectedProject!: Project;
  projects!: Project[];
  constructor(
    private ProjectsService: ProjectsService,
    ) { }

  ngOnInit(): void {
    this.projects = this.ProjectsService.list();
  }

  // @HostListener('window:resize', ['$event']) onResize(event: any) {
  //   AOS.refreshHard();
  //   AOS.init();
  // }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {
  //     class: 'modal-dialog-centered modal-lg'
  //   });
  // }

}

