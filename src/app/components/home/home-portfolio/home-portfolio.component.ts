import { animate, style } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '@models/project.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxMasonryOptions } from 'ngx-masonry';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePortfolioComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    animations: {
      show: [
        style({opacity: 0}),
        animate('500ms ease-in', style({opacity: 1})),
      ],
      hide: [
        style({opacity: '*'}),
        animate('500ms ease-in', style({opacity: 0})),
      ]
    },


  };
  modalRef?: BsModalRef;
  filterBy: '' | 'web' | 'mobile' | 'backend' = '';
  selectedProject!: Project;
  projects: Project[] = [
    {
      name: 'Business Platform',
      description: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ',
      imagesUrl: ['assets/img/portfolio/business/business.png','assets/img/portfolio//business/business1.png',
      'assets/img/portfolio//business/business3.png', 'assets/img/portfolio//business/business.png'],
      videosUrl: ['tgbNymZ7vqY', 'A0GuKuk7IxE'],
      url: 'https://www.google.com',
      tags: ['web', 'mobile', 'backend'],
    },
    {
      name: 'Kolo Mashy',
      description: 'test details',
      imagesUrl: ['assets/img/portfolio/kolomashy/home.png','assets/img/portfolio/kolomashy/kolo1.png',
              'assets/img/portfolio/kolomashy/kolo2.png', 'assets/img/portfolio/kolomashy/kolo3.png'],

      url: 'https://www.google.com',
      tags: ['web', 'backend', 'mobile'],
    },
    {
      name: 'Customer Index',
      description: '',
      imagesUrl: ['assets/img/portfolio/customerIndex/indexx.png','assets/img/portfolio/customerIndex/index.png',
              'assets/img/portfolio/customerIndex/index1.png', 'assets/img/portfolio/customerIndex/index3.png'],
      url: 'https://www.google.com',
      tags: ['mobile', 'backend'],
    },
    {
      name: 'RitzLine',
      description: '',
      imagesUrl: ['assets/img/portfolio/ritzline/ritzline.png','assets/img/portfolio/ritzline/ritzline1.png',
                'assets/img/portfolio/ritzline/ritzline2.png', 'assets/img/portfolio/ritzline/ritzline3.png'],
      url: 'https://www.google.com',
      tags: [ 'mobile', 'backend'],
    },
    {
      name: 'Resturants Platform',
      description: '',
      imagesUrl: ['assets/img/portfolio/resturant/rest.png','assets/img/portfolio/resturant/Resturant1.png',
              'assets/img/portfolio/resturant/Resturant2.png', 'assets/img/portfolio/resturant/Resturant3.png',
              'assets/img/portfolio/resturant/Resturant4.png','assets/img/portfolio/resturant/Resturant5.png'],
      url: 'https://www.google.com',
      tags: ['web', 'backend'],
    },
    {
      name: 'Emdady',
      description: '',
      imagesUrl: ['assets/img/portfolio/app3.jpg'],
      url: '',
      tags: ['mobile', 'web', 'backend'],
    },
  ]
  constructor(private modalService: BsModalService,

    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    AOS.refreshHard();
    AOS.init();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-lg'
    });
  }

}

