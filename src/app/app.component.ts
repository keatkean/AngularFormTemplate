import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Template driven forms';
  @ViewChild('contactForm',{static: true}) contactForm: NgForm;
  
  contact:contact;
  countryList:country[] = [
    new country("1", "Malaysia"),
    new country('2', 'Singapore'),
    new country('3', 'Japan')
  ];

  ngOnInit(){
    this.contact = {
      firstname: "KK",
      lastname: "LEE",
      email: "kk@mail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Malaysia", street: "Street", pincode: "12345" }
    };

    setTimeout(() => { 
      this.contactForm.setValue(this.contact);
    });
  }

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }

  reset() {
    
    this.contactForm.reset();
  }

  resetForm() {
    this.contactForm.resetForm();
  }

  setDefaults(){
    // this.contact = {
    //   firstname: "KK",
    //   lastname: "LEE",
    //   email: "kk@mail.com",
    //   gender: "male",
    //   isMarried: true,
    //   country: "2",
    //   address: { city: "Malaysia", street: "Street", pincode: "12345" }
    // };
    this.contactForm.setValue(this.contact);
  }

  patchValue() {
    let obj = {
      firstname: "abc",
      lastname: "efg",
      email: "abc@mail.com",
    };
 
    this.contactForm.control.patchValue(obj);
 
  }
 
  changeAddress() {
    let obj = {
      city: "cities",
      street: "abc street",
      pincode: "12432"
    };
    let address= this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
 
  }

  changeCountry() {
    // this.contact.country = "1";
    this.contactForm.controls["country"].setValue("1");
  }
}


export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

export class contact {
  firstname:string;
  lastname:string;
  email:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
} 