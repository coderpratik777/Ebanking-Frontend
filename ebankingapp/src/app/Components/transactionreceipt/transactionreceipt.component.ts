import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactionreceipt',
  templateUrl: './transactionreceipt.component.html',
  styleUrls: ['./transactionreceipt.component.css']
})
export class TransactionreceiptComponent implements OnInit {

  transactionReceipt!:any;
  constructor(private transactionService:TransactionService){

  }

  ngOnInit(): void {
    this.transactionReceipt=this.transactionService.getTransactionData();
    console.log(this.transactionReceipt.toAccount+"from receipt");
  }
  
}
