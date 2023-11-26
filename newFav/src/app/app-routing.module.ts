import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginComponent } from './Components/login-Componentes/login/login.component';
import { RegistrarUsuarioComponent } from './Components/login-Componentes/registrar-usuario/registrar-usuario.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutPagesComponent } from './Pages/about-pages/about-pages.component';
import { FeaturesPageComponent } from './Pages/features-page/features-page.component';
<<<<<<< HEAD
import { AuthGuard } from '../app/guards/auth-guards';
import { LoginGuard } from './guards/login-guard';
=======
import { PlaylistComponent } from './Components/playlist/playlist.component';
>>>>>>> f2c19a81f45720f761ac7935d43a1edf8ac75063

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "callback", component: HomePageComponent},
<<<<<<< HEAD
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutPagesComponent, canActivate: [AuthGuard]},
  {path: "features", component: FeaturesPageComponent, canActivate: [AuthGuard]},
  
  {path: "", redirectTo: 'login', pathMatch:'full'}, //cambiar 'profile' por 'login'
  {path: "login", component: LoginComponent, canActivate:[LoginGuard]},
  {path: "registrar-usuario", component: RegistrarUsuarioComponent, canActivate:[LoginGuard]},
=======
  {path: "profile", component: ProfileComponent},
  {path: "about", component: AboutPagesComponent},
  {path: "features", component: FeaturesPageComponent},
  {path: "playlist", component: PlaylistComponent},
  
  {path: "", redirectTo: 'profile', pathMatch:'full'}, //cambiar 'profile' por 'login'
  //{path: "login", component: LoginComponent},
  {path: "registrar-usuario", component: RegistrarUsuarioComponent},
  {path: "verificar-correo", component: RegistrarUsuarioComponent},
  {path: "recuperar-password", component: RecuperarPasswordComponent},
>>>>>>> f2c19a81f45720f761ac7935d43a1edf8ac75063
  
  {path: "**", redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
