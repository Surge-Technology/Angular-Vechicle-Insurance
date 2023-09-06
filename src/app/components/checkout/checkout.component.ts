import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  public paymentData : any = FormGroup;
  formBuilder: any;
  isPaymentDone: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.paymentData = new FormGroup({
      'card_name':new FormControl(null),
      'card_number':new FormControl(null),
      'valid_upto':new FormControl(null),
      'cvv': new FormControl(null),
    });
   
  }


  onSubmit(): void {
    
  }
  goBack=()=>{

  }


}
