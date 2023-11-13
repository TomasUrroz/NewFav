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
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getGem() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DWWVULl5wUsL9`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getAries() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DX2DC3Q7JOmYe`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getTau() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DWZTUo2Td8Xxx`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getCancer() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DXaeX3MJpiD4U`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getLeo() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DX7cvHpkIJFt2`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getVirg() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DX6PdsVYbP4rI`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getLib() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DXco4NYQOMLiT`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getScorpio() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DWWVULl5wUsL9`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getSagit() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DWWcXJ7QPlujx`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getCapri() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DX2rcqmLx0nK4`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getAqu() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DX7F9VDRJOFhw`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
    } catch (error) {
      console.log(error);
    }
  }

  async getPis() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DWX0EDWtabVRv`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)];
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
