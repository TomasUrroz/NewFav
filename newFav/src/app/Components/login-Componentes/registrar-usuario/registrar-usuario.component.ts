import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorsService } from 'app/Services/errors.service';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb:FormBuilder, 
              private afAuth:AngularFireAuth, 
              private toastr: ToastrService, 
              private router: Router,
              private fbErrors: ErrorsService ){ 
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    })
   }

  ngOnInit(): void{
  }

  registrar(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password !== repetirPassword){
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas.', 'Error');
      return;
    }

    this.loading = true;
    
    this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // this.loading = false;
      // this.toastr.success('El usuario fue registrado con exito!','Usuario Registrado');
      // this.router.navigate(['/login']);
      // console.log(user);
      this.verificarEmail();
    })
    .catch((error) => {
      this.loading = false;
      console.log(error);
      this.toastr.error(this.fbErrors.codeError(error.code), 'Error');
    })
  }


  verificarEmail(){
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
                           .then(() => {
                            this.toastr.info(
                              'Le enviamos un correo electronico para su verificacion',
                              'Verificar correo'
                            );
                            this.router.navigate(['/login']);
                          });
  }

}
