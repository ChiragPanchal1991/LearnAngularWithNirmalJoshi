import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutOutputComponent } from './inout-output.component';

describe('InoutOutputComponent', () => {
  let component: InoutOutputComponent;
  let fixture: ComponentFixture<InoutOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InoutOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InoutOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
