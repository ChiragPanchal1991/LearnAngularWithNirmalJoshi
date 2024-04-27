import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildChildComponent } from './contentchild-child.component';

describe('ContentchildChildComponent', () => {
  let component: ContentchildChildComponent;
  let fixture: ComponentFixture<ContentchildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentchildChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentchildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
