import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgstransferComponent } from './rtgstransfer.component';

describe('RtgstransferComponent', () => {
  let component: RtgstransferComponent;
  let fixture: ComponentFixture<RtgstransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgstransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtgstransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
