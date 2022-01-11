import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../home-skills.component';

@Component({
  selector: 'app-home-skill-card',
  templateUrl: './home-skill-card.component.html',
  styleUrls: ['./home-skill-card.component.scss'],

})
export class HomeSkillCardComponent implements OnInit {
  @Input() skill!: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
