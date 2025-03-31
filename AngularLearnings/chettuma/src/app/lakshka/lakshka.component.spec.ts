import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakshkaComponent } from './lakshka.component';

describe('LakshkaComponent', () => {
  let component: LakshkaComponent;
  let fixture: ComponentFixture<LakshkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LakshkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LakshkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
