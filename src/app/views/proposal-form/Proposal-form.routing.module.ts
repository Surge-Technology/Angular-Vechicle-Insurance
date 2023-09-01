import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProposalFormComponent} from './proposal-form.component'

const routes: Routes = [
  {
    path: '',
    component:ProposalFormComponent,
    data: {
      title: 'ProposalForm'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalFormRoutingModule {}
