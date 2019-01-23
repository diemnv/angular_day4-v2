import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfProfileComponent } from './rf-profile.component';

describe('RfProfileComponent', () => {
  let component: RfProfileComponent;
  let fixture: ComponentFixture<RfProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
