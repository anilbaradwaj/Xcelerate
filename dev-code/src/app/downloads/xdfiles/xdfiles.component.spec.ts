import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdfilesComponent } from './xdfiles.component';

describe('ButtonsComponent', () => {
  let component: XdfilesComponent;
  let fixture: ComponentFixture<XdfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
