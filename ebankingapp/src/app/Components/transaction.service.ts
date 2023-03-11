import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionReceipt!:any;

  constructor() { }

  setTransactionReceipt(data:any){
    this.transactionReceipt=data;
  }

  getTransactionData():any{
    return this.transactionReceipt;
  }
}
