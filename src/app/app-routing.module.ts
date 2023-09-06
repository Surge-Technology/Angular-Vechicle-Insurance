import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VehicleInformationComponent } from './components/vehicle-information/vehicle-information.component';
import { ProposalFormComponent } from './components/proposal-form/proposal-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InboxComponent } from './components/inbox/inbox.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vehicle', component: VehicleInformationComponent },
  { path: 'proposalform',component: ProposalFormComponent},
  { path: 'checkoutform', component: CheckoutComponent},
  { path: 'inbox', component: InboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
