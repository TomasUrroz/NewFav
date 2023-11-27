import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginComponent } from './Components/login-Componentes/login/login.component';
import { RegistrarUsuarioComponent } from './Components/login-Componentes/registrar-usuario/registrar-usuario.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutPagesComponent } from './Pages/about-pages/about-pages.component';
import { FeaturesPageComponent } from './Pages/features-page/features-page.component';
import { AuthGuard } from '../app/guards/auth-guards';
import { LoginGuard } from './guards/login-guard';
import { PlaylistComponent } from './Components/playlist/playlist.component';
import { NewPlaylistComponent } from './Components/new-playlist/new-playlist.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "callback", component: HomePageComponent},

  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutPagesComponent, canActivate: [AuthGuard]},
  {path: "playlist", component: PlaylistComponent, canActivate: [AuthGuard]},
  {path: "new-playlist", component: NewPlaylistComponent, canActivate: [AuthGuard]},
  {path: "features", component: FeaturesPageComponent, canActivate: [AuthGuard]},
  
  //{path: "login", component: LoginComponent, canActivate:[LoginGuard]},
  {path: "registrar-usuario", component: RegistrarUsuarioComponent, canActivate:[LoginGuard]},


  
  //{path: "**", redirectTo: 'login'},
  //{path: "", redirectTo: 'login', pathMatch:'full'}, //cambiar 'profile' por 'login'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
