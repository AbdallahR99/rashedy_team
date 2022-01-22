import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@models/project.model';
import { ProjectsService } from '@services/projects/projects.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project!: Project;
  isError = false;
  filterBy: '' | 'web' | 'mobile' = 'web';

  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService,
     private titleService: Title) {
    this.project = this.activatedRoute.snapshot.data['project'];
    // console.log(this.activatedRoute);

  }

  ngOnInit(): void {
    if (!this.project) {
      this.project = this.projectsService.get(this.activatedRoute.snapshot.params['projectName'])!;
      if (!this.project) {
        this.isError = true;
        return;
      }
    }
    this.setTitle();
    if (this.project.imagesUrl?.length < 2) {
      this.filterBy = 'mobile';
    }
    // console.log(this.project);
  }


  setTitle(): void {
    this.titleService.setTitle(this.project.name);
  }

}
