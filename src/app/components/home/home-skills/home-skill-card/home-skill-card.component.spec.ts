import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillCardComponent } from './home-skill-card.component';

describe('HomeSkillCardComponent', () => {
  let component: HomeSkillCardComponent;
  let fixture: ComponentFixture<HomeSkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSkillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
