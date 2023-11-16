import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorsService } from 'app/Services/errors.service';
import { getAuth, 
  setPersistence, 
  browserLocalPersistence,
  onAuthStateChanged } from 'firebase/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginUsuario: FormGroup;
  loading: boolean = false;

  
  
  constructor(private fb:FormBuilder, 
    private afAuth:AngularFireAuth, 
    private toastr: ToastrService, 
    private router: Router,
    private fbErrors: ErrorsService){
      this.loginUsuario = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });

     
      
    }

ngOnInit(): void {
  
}



    login(){
      const email = this.loginUsuario.value.email;
      const password = this.loginUsuario.value.password;
      
      this.loading = true;
      //console.log(email,password);
      this.afAuth.signInWithEmailAndPassword(email,password).then((user) => {
        if(user.user?.emailVerified){
          this.router.navigate(['/profile']);
        }else{
          this.router.navigate(['/verificar-correo']);
        }
      }).catch((error) => {
        this.loading = false;
        this.toastr.error(this.fbErrors.codeError(error.code),'Error');
        console.log(error);
      })
    }

}
