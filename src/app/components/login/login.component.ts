import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit   {

  //var for storing data from result
  dataList:any;

  constructor(private httpClient: HttpClient) {
    this.dataList=[];
   }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    //result is var which stores data that comes from this url (response)
    this.httpClient.get('http://localhost:8080/read-json').subscribe((result:any)=>{
        this.dataList = result;
        console.log("result"+result.data);
    })
  }

  onLoginButtonClick(): void {
    // Navigate to the 'vehicle' path when the 'Login' button is clicked
    // this.router.navigate(['/vehicle']);
  }

}
