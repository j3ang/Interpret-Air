import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  // everytime we use a service in a component, we need to inject it in the constuctor
  constructor(
  private validateService: ValidateService,
  private authService: AuthService,
  private flashMessage: FlashMessagesService,
  private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    //Required Fields
    if(!this.validateService.validateRegister(user)){
    this.flashMessage.show('Please fill in all fields',{
      cssClass: 'alert-danger',
      timeout: 3000
    });
    return false;
  }

  // Validate email
  if(!this.validateService.validateEmail(user.email)){
  this.flashMessage.show('Please use a valid email',{
    cssClass: 'alert-danger',
    timeout: 3000
  });
  return false;
}

// Register user
this.authService.registerUser(user).subscribe(data=>{
if(data.success){
  this.flashMessage.show('Registered!',{cssClass:'alert-success',timeout: 3000});
  console.log("register.ts: Registered");
  this.router.navigate(['/login']);
} else{
  this.flashMessage.show('Something went wrong',{cssClass:'alert-danger',timeout: 3000});
  console.log("register.ts: something went wrong");
  this.router.navigate(['/register']);
}
});
}
}
