import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Song, User } from 'app/Interfaces/interfaces';
import { AuthService } from 'app/Services/auth.service';
import { Lista, Track } from 'app/Interfaces/interfaces';
import { GetApiInfoService } from 'app/Services/get-api-info.service';
import { ListGeneratorService } from 'app/Services/list-generator.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  selectedOption: string = '';

  selectOption(option: string) {
    this.selectedOption = option;
  }

  dataUser: any;
  rockList: any[] = [];
  popList: any[] = [];
  hipHopList: any[] = [];

  pis: any | undefined;
  url: string = 'https://open.spotify.com/track/';
  urlPlay: string = 'https://open.spotify.com/playlist/';
  recomToday: any | undefined;

  list: Lista[] | undefined;

  saveTo: number = -1;
  saveTitle: string | undefined;
  saveSong: string | undefined;

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
  sad: string = '';
  chill: string = '';
  happy: string = '';
  walk: string = '';
  gym: string = '';
  clean: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private gai: GetApiInfoService,
    private lg: ListGeneratorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.populateAll();

    this.afAuth.currentUser.then((user) => {
      if (user && user.emailVerified) {
        this.dataUser = user;
        console.log(user);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  toSave(option: Lista, song: any) {
    this.saveTo = option.id;
    const newSong: Song = {
      id: song.track.id,
      name: song.track.name,
      artist: song.track.artists[0].name,
      imageUrl: song.track.album.images[1].url,
    };
    option.songs.push(newSong);
    this.saveToList(option);
  }

  async populateAll() {
    try {
      this.popuLists(3);
      this.popuHoros();
      this.popuMood();
      this.storeLists();
    } catch (error) {
      console.log(error);
    }
  }

  async popuLists(x: number) {
    try {
      this.recomToday = await this.gai.getTop50();
      this.rockList = await this.gai.getRock();
      this.popList = await this.gai.getPop();
      this.hipHopList = await this.gai.getHipHop();
    } catch (error) {
      console.log(error);
    }
  }

  async popuHoros() {
    try {
      this.Aries = this.url + (await this.gai.getAries());
      this.Tauro = this.url + (await this.gai.getTau());
      this.Geminis = this.url + (await this.gai.getGem());
      this.Cancer = this.url + (await this.gai.getCancer());
      this.Leo = this.url + (await this.gai.getLeo());
      this.Virgo = this.url + (await this.gai.getVirg());
      this.Libra = this.url + (await this.gai.getLib());
      this.Escorpio = this.url + (await this.gai.getScorpio());
      this.Sagitario = this.url + (await this.gai.getSagit());
      this.Capricornio = this.url + (await this.gai.getCapri());
      this.Acuario = this.url + (await this.gai.getAqu());
      this.Piscis = this.url + (await this.gai.getPis());
    } catch (error) {
      console.log(error);
    }
  }

  async popuMood() {
    try {
      this.sad = this.urlPlay + (await this.gai.getSad());
      this.chill = this.urlPlay + (await this.gai.getChill());
      this.happy = this.urlPlay + (await this.gai.getHappy());
      this.walk = this.urlPlay + (await this.gai.getWalk());
      this.gym = this.urlPlay + (await this.gai.getGym());
      this.clean = this.urlPlay + (await this.gai.getClean());
    } catch (error) {
      console.log(error);
    }
  }

  async storeLists() {
    if (this.getUser?.email != undefined) {
      this.list = await this.lg.getLists(this.getUser?.email);
    }
  }

  get getUser(): User | undefined {
    return this.authService.currentUser;
  }

  async saveToList(lista: Lista) {
    if (this.list != undefined) {
      await this.lg.putList(lista);
      alert('La cansion ha sido guardada  ╰（‵□′）╯');
    }
  }

  // logOut() {
  //   this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  // }
}
