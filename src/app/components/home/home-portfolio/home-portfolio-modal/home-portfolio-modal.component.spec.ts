import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortfolioModalComponent } from './home-portfolio-modal.component';

describe('HomePortfolioModalComponent', () => {
  let component: HomePortfolioModalComponent;
  let fixture: ComponentFixture<HomePortfolioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePortfolioModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortfolioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
