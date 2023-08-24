import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTasksComponent } from './store-tasks.component';

describe('StoreTasksComponent', () => {
  let component: StoreTasksComponent;
  let fixture: ComponentFixture<StoreTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreTasksComponent]
    });
    fixture = TestBed.createComponent(StoreTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
