import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleInformationComponent } from './vehicle-information.component'
import { VehicleInformationRoutingModule } from './vehicle-information.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
  
} from '@coreui/angular';



@NgModule({
  declarations: [
    VehicleInformationComponent
   
  ],
  imports: [
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    VehicleInformationRoutingModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class VehicleInformationModule {
}
