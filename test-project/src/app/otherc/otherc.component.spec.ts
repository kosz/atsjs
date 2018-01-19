import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercComponent } from './otherc.component';

describe('OthercComponent', () => {
  let component: OthercComponent;
  let fixture: ComponentFixture<OthercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
