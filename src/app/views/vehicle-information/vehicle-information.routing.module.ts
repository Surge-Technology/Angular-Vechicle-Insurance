import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VehicleInformationComponent} from './vehicle-information.component'

const routes: Routes = [
  {
    path: '',
    component:VehicleInformationComponent,
    data: {
      title: 'VehicleInformation'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleInformationRoutingModule {}
