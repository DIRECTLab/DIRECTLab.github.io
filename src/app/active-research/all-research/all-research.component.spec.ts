import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResearchComponent } from './all-research.component';

describe('AllResearchComponent', () => {
  let component: AllResearchComponent;
  let fixture: ComponentFixture<AllResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
