import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpstransferComponent } from './impstransfer.component';

describe('ImpstransferComponent', () => {
  let component: ImpstransferComponent;
  let fixture: ComponentFixture<ImpstransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpstransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpstransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
