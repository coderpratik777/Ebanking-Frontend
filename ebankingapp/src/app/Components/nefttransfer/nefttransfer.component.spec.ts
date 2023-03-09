import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NefttransferComponent } from './nefttransfer.component';

describe('NefttransferComponent', () => {
  let component: NefttransferComponent;
  let fixture: ComponentFixture<NefttransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NefttransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NefttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
