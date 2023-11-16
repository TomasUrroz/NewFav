import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorsService } from 'app/Services/errors.service';
import { getAuth, 
  setPersistence, 
  browserLocalPersistence,
  onAuthStateChanged, 
  browserSessionPersistence} from 'firebase/auth';



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
      this.configureFirebasePersistenceAndCheckAuthState();
    }
  
    async configureFirebasePersistenceAndCheckAuthState() {
      const auth = getAuth();
  
      try {
        await setPersistence(auth, browserSessionPersistence);
        console.log('Firebase session persistence set successfully');
        this.checkAuthState();
      } catch (error) {
        console.error('Error setting Firebase session persistence:', error);
      }
    }
  
    checkAuthState() {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          if (user.emailVerified) {
            this.router.navigate(['/profile']);
          } else {
            this.router.navigate(['/verificar-correo']);
          }
        } else {
          // Usuario no autenticado, puedes manejarlo de acuerdo a tus necesidades
        }
      });
    }
  
    login() {
      const email = this.loginUsuario.value.email;
      const password = this.loginUsuario.value.password;
  
      this.loading = true;
  
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
        })
        .catch((error) => {
          this.loading = false;
          this.toastr.error(this.fbErrors.codeError(error.code), 'Error');
          console.log(error);
        });
    }

}
