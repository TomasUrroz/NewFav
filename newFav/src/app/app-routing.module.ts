import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login-Componentes/login/login.component';
import { RegistrarUsuarioComponent } from './Components/login-Componentes/registrar-usuario/registrar-usuario.component';
import { AboutPagesComponent } from './Pages/about-pages/about-pages.component';
import { FeaturesPageComponent } from './Pages/features-page/features-page.component';
import { AuthGuard } from '../app/guards/auth-guards';
//import { LoginGuard } from './guards/login-guard';
import { createAuthGuard } from './guards/login-guard';
import { PlaylistPageComponent } from './Pages/playlist-page/playlist-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { NewPlaylistPageComponent } from './Pages/new-playlist-page/new-playlist-page.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
//import { AuthGuardFeatures } from './guards/about-guards';

const routes: Routes = [

  { path: "login", component: LoginComponent, canActivate: [createAuthGuard] },
  { path: "registrar-usuario", component: RegistrarUsuarioComponent },
  { path: "profile", component: ProfilePageComponent, canActivate: [AuthGuard] }, 
  { path: "about", component: AboutPagesComponent, canActivate: [AuthGuard] },
  { path: "playlist", component: PlaylistPageComponent, canActivate: [AuthGuard] },
  { path: "new-playlist", component: NewPlaylistPageComponent, canActivate: [AuthGuard] },
  { path: "features", component: FeaturesPageComponent},
  { path: "contacto", component: ContactoComponent, canActivate: [AuthGuard]},
  { path: "**", redirectTo: 'login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
