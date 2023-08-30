import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerInformationComponent} from './customer-information.component'

const routes: Routes = [
  {
    path: '',
    component:CustomerInformationComponent,
    data: {
      title: 'CustomerInformation'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerInformationRoutingModule {}
