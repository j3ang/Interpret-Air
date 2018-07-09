import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Http, Headers} from '@angular/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  email: String;
  name: String;
  webserverip = environment.webserverip;


  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private https:Http
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    console.log("onLoginSubmit()" + this.username);

    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data=>{
      // console.log(data);
      if(data.success){
      this.authService.storeUserData(data.token, data.user);
      this.flashMessage.show('You are now logged in', {
        cssClass: 'alert-success',
        timeout: 2000});
        this.router.navigate(['/dashboard']);
    } else{
      this.flashMessage.show(data.msg, {
        cssClass: 'alert-danger',
        timeout: 2000});
        this.router.navigate(['/login']);
    }
    });
  }

  // facebookLogin() {
  //   console.log("facebookLogin() called");
  //    return this.https.get(`https://192.168.1.165:3000/socialusers/auth/facebook`)
  //    .map((res) => res.json());
  //  }

   googleLogin() {
     window.location.href = 'https://'+ this.webserverip +':3000/socialusers/auth/google';
     console.log("googleLogin() called");
     const googleUser = {
       name: this.name,
       email: this.email,
     }

     this.authService.googleAuth(googleUser).subscribe(data=>{
       // console.log(data);
       if(data.success){
       this.authService.storeUserData(data.token, data.googleUser);
       this.flashMessage.show('You are now logged in', {
         cssClass: 'alert-success',
         timeout: 2000});
         this.router.navigate(['/dashboard']);
     } else{
       this.flashMessage.show(data.msg, {
         cssClass: 'alert-danger',
         timeout: 2000});
         this.router.navigate(['/login']);
     }
     });

    }


}
