import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorsService } from 'src/app/Services/errors.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit{

  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb:FormBuilder, 
    private afAuth:AngularFireAuth, 
    private toastr: ToastrService, 
    private router: Router,
    private fbErrors: ErrorsService){
      this.recuperarUsuario = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      })
    }


  ngOnInit(): void { }

  recuperar(){
    const email = this.recuperarUsuario.value.email;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.toastr.info('Le enviamos un correo para recuperar la password.','Recuperar Password'),
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this.fbErrors.codeError(error.code),'Error');
    })
  }
  
}
