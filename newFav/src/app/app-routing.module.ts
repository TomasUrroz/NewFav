import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { LoginComponent } from './Components/login-Componentes/login/login.component';
import { RegistrarUsuarioComponent } from './Components/login-Componentes/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent } from './Components/login-Componentes/recuperar-password/recuperar-password.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "callback", component: HomePageComponent},
  {path: "profile", component: ProfilePageComponent},
  
  {path: "", redirectTo: 'profile', pathMatch:'full'},
 // {path: "login", component: LoginComponent},
  {path: "registrar-usuario", component: RegistrarUsuarioComponent},
  {path: "verificar-correo", component: RegistrarUsuarioComponent},
  {path: "recuperar-password", component: RecuperarPasswordComponent},
  
  {path: "**", redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
