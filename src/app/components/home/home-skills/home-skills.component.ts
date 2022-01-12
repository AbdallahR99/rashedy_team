import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Skill } from '@models/skill.model';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'py-5 container d-flex'}
})
export class HomeSkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Front-End Stack',
      description: `
      HTML5, CSS3, Bootstrap, AJAX, LESS, SASS, JSON, JavaScript, JQuery, TypeScript. <br><span class="text-primary"> Angular 4/8/10+ and Flutter </span>
      `,
      icon: '',
      color: '#ff689b',
    },
    {
      name: 'Back-End Stack',
      description: `
      C#, SQL Server, Oracle, ADO.Net, Entity Framework, LINQ, AutoMapper, SignalR
       <br /> <span class="text-primary"> C#,REST API, ASP.NET Core </span>
      `,
      icon: '',
      color: '#e98e06',
    },
    {
      name: 'Skills',
      description: `
      Redis Cache, RabbitQ, Elastic Search, DTOs
      <br />
      <span class="text-primary">Report Tools: </span>  Crystal Reports,
      Telerik Report, DevExpress.
      `,
      icon: '',
      color: '#3fcdc7',
    },
    {
      name: 'Advanced Skills',
      description: `
      OOP, SOLID Principles, N-Tier Applications, Repository, DRY, DDD,
      JWT Token, CI/CD Principles, Microsoft Azure, Docker, SEO.
      `,
      icon: '',
      color: '#41cf2e',
    },
    {
      name: 'Application Software',
      description: `
      E-commerce Software, Enterprise Software, Bank Software,
      Socail Media Software, CRM Software, PaaS, Custome Software.
      `,
      icon: '',
      color: '#2282ff',
    },
    {
      name: 'Version Control Tools & IDEs',
      description: `
      Visual Studio, Visual Studio Code, Microsoft SQL Server,
            SQL Developer.
            <br>
            Git, Bitbucket, Team Foundation Server(TFS)
      `,
      icon: '',
      color: '#8660fe',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

