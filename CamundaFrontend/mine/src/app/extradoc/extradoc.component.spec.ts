import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtradocComponent } from './extradoc.component';

describe('ExtradocComponent', () => {
  let component: ExtradocComponent;
  let fixture: ComponentFixture<ExtradocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtradocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtradocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
