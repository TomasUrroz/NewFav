import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  codeError(code: string){
    switch(code){
      case 'auth/email-already-in-use':
        return 'El usuario ya existe.';

      case 'auth/weak-password':
        return 'La contraseña es debil.';
      
      case 'auth/invalid-email':
        return 'El correo es invalido.';
      
      case 'auth/wrong-password':
        return 'La contraseña es erronea.';
      
      case 'auth/user-not-found':
        return 'Usuario no encontrado.';  
      
        default:
        return 'Error desconocido';
    }
  }

}
