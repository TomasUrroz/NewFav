import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppComponent } from './app.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { LoginComponent } from './Components/login-Componentes/login/login.component';
import { RegistrarUsuarioComponent } from './Components/login-Componentes/registrar-usuario/registrar-usuario.component';
import { SpinnerComponent } from './Components/Shared/spinner/spinner.component';
import { environment } from 'environments/environments';
import { DisplaySongComponent } from './Components/Shared/display-song/display-song.component';
import { AboutPagesComponent } from './Pages/about-pages/about-pages.component';
import { FeaturesPageComponent } from './Pages/features-page/features-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './Components/playlist/playlist.component';
import { NewPlaylistComponent } from './Components/new-playlist/new-playlist.component';
import { PlaylistPageComponent } from './Pages/playlist-page/playlist-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { AboutComponent } from './Components/about/about.component';
import { FeatureComponent } from './Components/feature/feature.component';
import { NewPlaylistPageComponent } from './Pages/new-playlist-page/new-playlist-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    SpinnerComponent,
    DisplaySongComponent,
    AboutPagesComponent,
    FeaturesPageComponent,
    PlaylistComponent,
    NewPlaylistComponent,
    PlaylistPageComponent,
    ProfilePageComponent,
    AboutComponent,
    FeatureComponent,
    NewPlaylistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
