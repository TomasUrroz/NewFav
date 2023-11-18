import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Track } from 'app/Interfaces/interfaces';
import { GetApiInfoService } from 'app/Services/get-api-info.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  dataUser: any;
  rockList: any[] = [];
  popList: any[] = [];
  hipHopList: any[] = [];
  pis: any | undefined;
  url: string = "https://open.spotify.com/track/";
  urlPlay: string = "https://open.spotify.com/playlist/";
  recomToday: any | undefined;
  Aries: string = '';
  Tauro: string = '';
  Geminis: string = '';
  Cancer: string = '';
  Leo: string = '';
  Virgo: string = '';
  Libra: string = '';
  Escorpio: string = '';
  Sagitario: string = '';
  Capricornio: string = '';
  Acuario: string = '';
  Piscis: string = '';
  sad:string = '';
  chill:string = '';
  happy:string = '';
  walk:string = '';
  gym:string = '';
  clean:string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private gai:GetApiInfoService) {}

  ngOnInit(): void {
    this.popuLists(3);
    this.popuHoros();
    this.popuMood();
    this.afAuth.currentUser.then((user) => {
      if (user && user.emailVerified) {
        this.dataUser = user;
        console.log(user);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  async popuLists(x: number) {
    this.recomToday = await this.gai.getTop50();
    for (let i = 0; i < x; i++) {
      try {
        this.rockList[i] = await this.gai.getRock();
        this.popList[i] = await this.gai.getPop();
        this.hipHopList[i] = await this.gai.getHipHop();
        } catch (error) {
        console.log(error);
      }
    }
  }
  async popuHoros() {
    try {
      this.Aries = this.url + await this.gai.getAries();
      this.Tauro= this.url +await this.gai.getTau();
      this.Geminis= this.url +await this.gai.getGem();
      this.Cancer= this.url +await this.gai.getCancer();
      this.Leo= this.url +await this.gai.getLeo();
      this.Virgo= this.url +await this.gai.getVirg();
      this.Libra= this.url +await this.gai.getLib();
      this.Escorpio= this.url +await this.gai.getScorpio();
      this.Sagitario=this.url + await this.gai.getSagit();
      this.Capricornio= this.url +await this.gai.getCapri();
      this.Acuario= this.url +await this.gai.getAqu();
      this.Piscis= this.url +await this.gai.getPis();
    } catch (error) {
      console.log(error);
    }
  }
  async popuMood(){
    try {
      this.sad = this.urlPlay + await this.gai.getSad();
      this.chill= this.urlPlay+await this.gai.getChill();
      this.happy = this.urlPlay +await this.gai.getHappy();
      this.walk = this.urlPlay+await this.gai.getWalk();
      this.gym = this.urlPlay +await this.gai.getGym();
      this.clean = this.urlPlay + await this.gai.getClean();
    } catch (error) {
      console.log(error);
    }
  }
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}
