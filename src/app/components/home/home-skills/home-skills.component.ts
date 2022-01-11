import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Skill } from '@models/skill.model';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'py-5 container bg-light d-flex'}
})
export class HomeSkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-info"> Angular 4/8/10+ </span>
      `,
      icon: '',
      color: '#00bcd4',
    },
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-color-blue"> Angular 4/8/10+ </span>
      `,
      icon: '',
      color: '#00bcd4',
    },
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-color-blue"> Angular 4/8/10+ </span>
      `,
      icon: '',
      color: '#00bcd4',
    },
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-color-blue"> Angular 4/8/10+ </span>
      `,
      icon: '',
      color: '#00bcd4',
    },
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-color-blue"> Angular 4/8/10+ </span>
      `,
      icon: '',
      color: '#00bcd4',
    },
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-color-blue"> Angular 4/8/10+ </span>
      `,
      icon: '',
      color: '#00bcd4',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

