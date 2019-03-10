import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Payment } from '../model/payment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoDbService {
  baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient, private router: Router) { }

  submitContactUsForm(contactFormData: any) {
    return this.httpClient.post<{ message: string, contact: Contact }>(this.baseUrl + '/storeData/contact', contactFormData).subscribe((responseData) => {
    console.log("contactFormData response", responseData);
    });
  }

  submitPaymentForm(paymentFormData: any) {
    return this.httpClient.post<{ message: string, payment: Payment }>(this.baseUrl + '/storeData/payment', paymentFormData).subscribe((responseData) => {
      console.log("paymentFormData response", responseData);
    });
  }
}
