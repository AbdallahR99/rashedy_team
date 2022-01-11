import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Skill } from '@models/skill.model';

@Component({
  selector: 'app-home-skill-card',
  templateUrl: './home-skill-card.component.html',
  styleUrls: ['./home-skill-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeSkillCardComponent implements OnInit {
  @Input() skill!: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
