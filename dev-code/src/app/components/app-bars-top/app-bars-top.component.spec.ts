import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarsTopComponent } from './app-bars-top.component';

describe('AppBarsTopComponent', () => {
  let component: AppBarsTopComponent;
  let fixture: ComponentFixture<AppBarsTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarsTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
