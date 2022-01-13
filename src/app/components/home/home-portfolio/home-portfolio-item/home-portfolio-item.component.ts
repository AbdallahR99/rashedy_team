import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Project } from '@models/project.model';

@Component({
  selector: 'app-home-portfolio-item',
  templateUrl: './home-portfolio-item.component.html',
  styleUrls: ['./home-portfolio-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePortfolioItemComponent implements OnInit {
  @Input() project!: Project;
  constructor() { }

  ngOnInit(): void {
  }

}
