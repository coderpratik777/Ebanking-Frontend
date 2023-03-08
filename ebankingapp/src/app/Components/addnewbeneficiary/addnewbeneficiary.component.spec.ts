import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbeneficiaryComponent } from './addnewbeneficiary.component';

describe('AddnewbeneficiaryComponent', () => {
  let component: AddnewbeneficiaryComponent;
  let fixture: ComponentFixture<AddnewbeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewbeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewbeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
