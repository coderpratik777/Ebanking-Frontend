import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionreceiptComponent } from './transactionreceipt.component';

describe('TransactionreceiptComponent', () => {
  let component: TransactionreceiptComponent;
  let fixture: ComponentFixture<TransactionreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionreceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
