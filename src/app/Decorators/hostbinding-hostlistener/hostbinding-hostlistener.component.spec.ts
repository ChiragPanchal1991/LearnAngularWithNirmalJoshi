import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbindingHostlistenerComponent } from './hostbinding-hostlistener.component';

describe('HostbindingHostlistenerComponent', () => {
  let component: HostbindingHostlistenerComponent;
  let fixture: ComponentFixture<HostbindingHostlistenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostbindingHostlistenerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostbindingHostlistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
