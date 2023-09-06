import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss']
})
export class ProposalFormComponent implements OnInit{

  public proposalData : any = FormGroup;
   
  constructor() { }

  ngOnInit(): void {
    
    this.proposalData = new FormGroup({
      'name':new FormControl(null),
      'age':new FormControl(null),
      'address':new FormControl(null),
      'color_of_car': new FormControl(null),
      'usage': new FormControl(null),
      'rc_book_number': new FormControl(null),
      'engine_number': new FormControl(null),
      'chassis_number': new FormControl(null),
      'driver_licence_number': new FormControl(null),
    });
  }

  onSubmit() {
   
  }

  goBack=()=>{
    
  }

}
