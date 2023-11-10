import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "callback", component: HomePageComponent},
  {path: "profile", component: ProfilePageComponent},
  {path: "**", redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
