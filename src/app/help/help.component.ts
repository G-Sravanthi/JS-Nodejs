import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  PaymentForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {

    this.PaymentForm = this._formBuilder.group({
      cardNumber: [''],
      cardExpiration: [''],
      cardCvv:[''],
      cardOwnerName:[''],


    });
  }
 
  onPayment(){
    console.log('on payment');
    console.log('userForm',this.PaymentForm);
  }

}

