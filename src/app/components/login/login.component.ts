import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {

  constructor(private router: Router) { }

  onLoginButtonClick(): void {
    // Navigate to the 'vehicle' path when the 'Login' button is clicked
    this.router.navigate(['/vehicle']);
  }

}
