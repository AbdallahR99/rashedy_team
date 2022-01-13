import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortfolioItemComponent } from './home-portfolio-item.component';

describe('HomePortfolioItemComponent', () => {
  let component: HomePortfolioItemComponent;
  let fixture: ComponentFixture<HomePortfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePortfolioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
