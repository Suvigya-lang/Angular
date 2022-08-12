import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
    ngOnInit(): void {
      
   
  }
   name: string="";
   pass: string="";

  loginForm= new FormGroup({
    userId : new FormControl('',[Validators.required]),
    password:  new FormControl('',[Validators.required])
  });
  get userId(): any{
    return this.loginForm.get('userId');
  }
  get password(): any{
    return this.loginForm.get('password');
  }
  onLogin(){
    
    localStorage.setItem('username',this.name);
    localStorage.setItem('password',this.pass)
    this.router.navigateByUrl('/list');
  }

}
