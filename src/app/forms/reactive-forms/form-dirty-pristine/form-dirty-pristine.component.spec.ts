import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirtyPristineComponent } from './form-dirty-pristine.component';

describe('FormDirtyPristineComponent', () => {
  let component: FormDirtyPristineComponent;
  let fixture: ComponentFixture<FormDirtyPristineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDirtyPristineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDirtyPristineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
