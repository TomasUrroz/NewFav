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
  pis: Track | undefined;
  xd: string = "https://open.spotify.com/track/" + this.rockList[0].track.id;
  
  constructor(private afAuth: AngularFireAuth, private router: Router, private gai:GetApiInfoService) {}

  ngOnInit(): void {
    this.popuLists(3);
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
    for (let i = 0; i < x; i++) {
      this.rockList[i] = await this.gai.getRock();
      this.popList[i] = await this.gai.getPop();
      this.hipHopList[i] = await this.gai.getHipHop();
    }
  }
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}
