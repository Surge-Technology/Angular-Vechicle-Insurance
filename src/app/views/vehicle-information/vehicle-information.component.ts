import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { VehicleInformation } from './vehicle-information.service'

@Component({
  selector: 'vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss'],
  
  
})


export class VehicleInformationComponent implements OnInit {

  public userData : any = FormGroup; 

  ngOnInit(): void {
    
    this.userData = new FormGroup({
      'brand':new FormControl(null),
      'model':new FormControl(null),
      'make':new FormControl(null),
      'registration': new FormControl(null),
      'rto_location': new FormControl(null),
      'billing_address': new FormControl(null),
      'vehicle_life_years':new FormControl(null),
      'no_of_claims_made': new FormControl(null),
      'criminal_records': new FormControl(null),
      'age_of_the_owner': new FormControl(null),
    });
  }

  onSubmit() {
    
  }

  goBack=()=>{

  }


}
