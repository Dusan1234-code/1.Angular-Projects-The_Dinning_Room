import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRestaurantComponent } from './child-restaurant.component';

describe('ChildRestaurantComponent', () => {
  let component: ChildRestaurantComponent;
  let fixture: ComponentFixture<ChildRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
