import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularMaterialModule} from './angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { VehicleInformationComponent } from './components/vehicle-information/vehicle-information.component';
import { ProposalFormComponent } from './components/proposal-form/proposal-form.component';
import { MatCardModule } from '@angular/material/card';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InboxComponent } from './components/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VehicleInformationComponent,
    ProposalFormComponent,
    CheckoutComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,     
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
