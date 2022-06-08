import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdashboaedComponent } from './udashboaed.component';

describe('UdashboaedComponent', () => {
  let component: UdashboaedComponent;
  let fixture: ComponentFixture<UdashboaedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdashboaedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdashboaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
