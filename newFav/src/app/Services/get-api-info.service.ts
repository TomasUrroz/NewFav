import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})


export class GetApiInfoService{

  constructor(private as: AuthService) {}

  token: string = "";

  async asignToken() {
    this.token = await this.getToken();
  }


  async getTop50() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items;
    } catch (error) {
      console.log(error);
    }
  }


  async getToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(this.as.clientId + ':' + this.as.clientSecret),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    return data.access_token;
  }


  async getTracks(token: string, tracksEndPoint: string) {
    const limit = 10;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    return data.items;
  }

  async getTrack(token: string, trackEndPoint: string) {
    const result = await fetch(`${trackEndPoint}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    return data;
  }


}
