import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppControllerComponent } from './app-controller.component';

describe('AppControllerComponent', () => {
  let component: AppControllerComponent;
  let fixture: ComponentFixture<AppControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
