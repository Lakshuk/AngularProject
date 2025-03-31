import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniordocComponent } from './seniordoc.component';

describe('SeniordocComponent', () => {
  let component: SeniordocComponent;
  let fixture: ComponentFixture<SeniordocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeniordocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniordocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
