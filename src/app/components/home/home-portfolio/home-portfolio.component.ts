import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { Project } from '@models/project.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePortfolioComponent implements OnInit {
  modalRef?: BsModalRef;
  filterBy: '' | 'web' | 'mobile' | 'backend' = '';
  selectedProject!: Project;
  projects: Project[] = [
    {
      name: 'Project 1',
      description: 'description',
      imageUrl: 'https://www.placecage.com/1000/1000.png',
      url: 'https://www.google.com',
      tags: ['web', 'mobile', 'backend'],
    },
    {
      name: 'Project 2',
      description: 'description',
      imageUrl: 'https://www.placecage.com/900/600.png',
      url: 'https://www.google.com',
      tags: ['web'],
    },
    {
      name: 'Project 3',
      description: 'description',
      imageUrl: 'https://www.placecage.com/800/700.png',
      url: 'https://www.google.com',
      tags: ['mobile', 'backend'],
    },
    {
      name: 'Project 4',
      description: 'description',
      imageUrl: 'https://www.placecage.com/800/400.png',
      url: 'https://www.google.com',
      tags: ['web', 'mobile',],
    },
    {
      name: 'Project 5',
      description: 'description',
      imageUrl: 'https://www.placecage.com/450/450.png',
      url: 'https://www.google.com',
      tags: ['web', 'backend'],
    },
  ]
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });
  }

}

