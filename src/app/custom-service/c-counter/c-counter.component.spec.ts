import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCounterComponent } from './c-counter.component';

describe('CCounterComponent', () => {
  let component: CCounterComponent;
  let fixture: ComponentFixture<CCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
