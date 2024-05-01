import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCounterChildComponent } from './c-counter-child.component';

describe('CCounterChildComponent', () => {
  let component: CCounterChildComponent;
  let fixture: ComponentFixture<CCounterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCounterChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCounterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
