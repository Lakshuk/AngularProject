import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovaldecisionComponent } from './approvaldecision.component';

describe('ApprovaldecisionComponent', () => {
  let component: ApprovaldecisionComponent;
  let fixture: ComponentFixture<ApprovaldecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovaldecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovaldecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
