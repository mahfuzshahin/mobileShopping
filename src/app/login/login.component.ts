import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title='Mobile Shopping';
  toggleBtn:boolean=true;
  ngOnInit() {
    this.toggleBtn=false;
  }
  toggleFun1(){
    this.toggleBtn=true;
  }
  toggleFun2(){
    this.toggleBtn = false;
  }

}
