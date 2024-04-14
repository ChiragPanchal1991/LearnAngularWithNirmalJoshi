import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPeramComponent } from './query-peram.component';

describe('QueryPeramComponent', () => {
  let component: QueryPeramComponent;
  let fixture: ComponentFixture<QueryPeramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryPeramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryPeramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
