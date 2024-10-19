import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  isLoginActive: boolean = true;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,private loginService:LoginService,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const credentials = {
      email: this.loginForm.value.email, // If your API expects email
      password: this.loginForm.value.password,
    };

    this.loginService.login(credentials).subscribe(
      (response) => {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;

      // Store the access token in local storage
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('user',this.loginForm.value.email)

      this.loading = false;
      console.log('Login successful');
      this.router.navigate(['/home'])
      },
      (error:string) => {
        this.loading = false;
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error', error);
      }
    );
  }

  toggleForm() {
    this.isLoginActive = !this.isLoginActive; // Toggle between forms
  }

}
