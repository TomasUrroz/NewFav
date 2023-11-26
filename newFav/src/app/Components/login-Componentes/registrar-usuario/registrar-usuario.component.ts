import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Interfaces/interfaces';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{


  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,private user: UserService){

  }

ngOnInit(): void {
}

  list: User[] = [];
  
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')!.value;
    let confirmPass = group.get('repetirPassword')!.value
    return pass === confirmPass ? null : { notSame: true }
  }
  
  usuarioNuevo: FormGroup = this.formBuilder.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    repetirPassword:['',[Validators.required]],
  }, { validators: this.checkPasswords })
  
  async registraUsuario(){
    if(this.usuarioNuevo.invalid){
      this.usuarioNuevo.markAllAsTouched();
      return;
    } 

    this.list = await this.user.getUsers();
    const usuarioEncontrado: User|undefined = this.list.find((i) => i.user === this.usuarioNuevo.controls['username'].value);

    if(usuarioEncontrado){
      alert('El usuario elegido ya existe');
      this.usuarioNuevo.reset();
      return;
    }

    const user: User = {
      user: this.usuarioNuevo.controls['username'].value,
      email: this.usuarioNuevo.controls['email'].value,
      password: this.usuarioNuevo.controls['password'].value,
    }
    this.user.postUser(user);
    alert('Your account was created!')
  }

  validar(field: string, error: string){
    return this.usuarioNuevo.controls[field].getError(error)
    &&
    this.usuarioNuevo.controls[field].touched
  }
  

}
