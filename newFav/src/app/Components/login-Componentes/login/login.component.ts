import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../Interfaces/interfaces';
import { AuthService } from '../../../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loading: boolean = false;
  
  private formBuilder: FormBuilder = inject(FormBuilder)
  private auth: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  formulario: FormGroup = this.formBuilder.group({
    user: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  
  constructor(){    }

  ngOnInit(): void {}

  iniciarSession() {
    if (this.formulario.invalid) return;

    this.auth.verificarUserAndPass(
      this.formulario.controls['user'].value,
      this.formulario.controls['password'].value)

  }
   
}



