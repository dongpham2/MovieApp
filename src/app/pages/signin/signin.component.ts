import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hidePassword: boolean = true;

  applyForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
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

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  } 
  submitData(event: Event) {
    // Truy cập vào giá trị của email và password thông qua form.value
    const email = this.applyForm.value.email;
    const password = this.applyForm.value.password;

    // Xử lý dữ liệu đã submit
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form sau khi submit (nếu cần)
    // this.applyForm.reset();
     this.router.navigate(['/home']);
    
  }
}
