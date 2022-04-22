import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponse } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',

})
export class AuthComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoading = false;
  error = null;
  obsAuth: Observable<AuthResponse>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSwitchMode(): void {
    this.isLoggedIn = !this.isLoggedIn
  }
  onFormSubmit(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true
    if (this.isLoggedIn) {
      this.obsAuth = this.authService.login(email, password)
    } else {
      this.obsAuth = this.authService.signUp(email, password)
    }
    this.obsAuth.subscribe(data => {
      this.isLoading = false
      this.error = null;
    }, error => {
      console.log(error);
      this.error = "Something Went Wrong!"
      this.isLoading = false
    })

    form.reset()
  }

}
