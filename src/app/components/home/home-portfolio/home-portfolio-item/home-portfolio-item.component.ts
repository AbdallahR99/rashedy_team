import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@models/project.model';
import { Routes } from '@constants/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-portfolio-item',
  templateUrl: './home-portfolio-item.component.html',
  styleUrls: ['./home-portfolio-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePortfolioItemComponent implements OnInit {
  @Input() project!: Project;
  @Output() onOpenModal = new EventEmitter<Project>();
  get routes(): typeof Routes {
    return Routes;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModal() {
    this.onOpenModal.emit(this.project);
  }

  viewDetails(){
    this.router.navigate([this.routes.ProjectDetails, this.project.id], {
      state:{
        data: {
          project: this.project,
        },
      },

    });
  }

}
