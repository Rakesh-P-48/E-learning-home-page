import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Username:any;
  password:any;
  user:any;
  constructor(private route:Router){}
  checklogin() {
    if(this.password=='12345')
      {
       this.user={
         username:this.Username,
         password:this.password
       };
       this.route.navigateByUrl("/Home");
       localStorage.setItem('user',JSON.stringify(this.user));
     }
    else {
      alert ("Invalid Credentials");
    }
  }

}
