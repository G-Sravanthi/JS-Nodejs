import {Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MongoDbService } from '../../service/mongoDb.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private router: Router,private mongoDbService:MongoDbService) { }
  ngOnInit() {

    this.ContactForm = this._formBuilder.group({
      name: [''],
      email: [''],
      subject:[''],
      message:[''],
    });
  }
 
  onContact(){
    console.log('userForm',this.ContactForm);
    this.mongoDbService.submitContactUsForm(this.ContactForm.value);
  }

}

