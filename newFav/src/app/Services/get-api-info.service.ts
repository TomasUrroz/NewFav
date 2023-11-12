import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GetApiInfoService implements OnInit{
  constructor(private as: AuthService) {}

  token:any | undefined;

  ngOnInit(): void {
    this.asignToken()
  }

  async asignToken(){
    this.token = await this.as.getAccessToken(this.as.clientId, this.as.code);
  }

  async getTop50(){
    const limit = 10;
    try {
      const result = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + this.token},
      });
      const data = await result.json();
      return data.items;
      } catch (error) {
      console.log(error);
      
    }
  }


  //async getTracks(tracksEndPoint: string) {
  async getTracks() {
    const limit = 10;
    //const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
      try {
        const result = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF?limit=${limit}`, {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token},
        });
    
        const data = await result.json();
        return data.items;
          } catch (error) {
            console.log(error);
      }
  }

  async getTrack( trackEndPoint: string) {
    const result = await fetch(`${trackEndPoint}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + this.token},
    });
    const data = await result.json();
    return data;
  }


}
