import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarsBottomComponent } from './app-bars-bottom.component';

describe('AppBarsBottomComponent', () => {
  let component: AppBarsBottomComponent;
  let fixture: ComponentFixture<AppBarsBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarsBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
