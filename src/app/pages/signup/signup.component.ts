import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  applyForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(private router: Router) {}
  ngOnInit(): void {
      
  }

  get email() {
    return this.applyForm.get('email')
  }
  get password() {
    return this.applyForm.get('password')
  }
  get confirmPassword() {
    return this.applyForm.get('confirmPassword')
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  } 
  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
  
  submitData(event: Event) {
    // Truy cập vào giá trị của email và password thông qua form.value
    const email = this.applyForm.value.email;
    const password = this.applyForm.value.password;
    const confirmPassword = this.applyForm.value.confirmPassword
    // Xử lý dữ liệu đã submit
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Password:', confirmPassword);

    // Reset form sau khi submit (nếu cần)
    // this.applyForm.reset();
    //  this.router.navigate(['/home']);
    
  }
}

