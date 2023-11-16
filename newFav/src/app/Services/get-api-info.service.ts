import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GetApiInfoService {
  constructor(private as: AuthService) {}

  token: string = '';

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
      return  data.tracks.items[Math.floor(Math.random() * 50)];
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
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
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getRock() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EQpj7X7UK8OOF`,
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

  async getHipHop() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EQnqst5TRi17F`,
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

  async getPop() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EQncLwOalG3K7`,
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

  async getSad() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EIdChYeHNDfK5`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getChill() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EVHGWrwldPRtj`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getHappy() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EVJSvZp5AOML2`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getWalk() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EIhyYQ2buKkVp`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getGym() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DX5n5gZBZb0AT`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getClean() {
    try {
      await this.asignToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1EIhmPdaeHzd5o`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + this.token },
        }
      );
      const data = await result.json();
      return data.tracks.items[Math.floor(Math.random() * 50)].track.id;
    } catch (error) {
      console.log(error);
    }
  }


  async getToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' + btoa(this.as.clientId + ':' + this.as.clientSecret),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    return data.access_token;
  }


  //pa despues, ni idea si llego we
  async getHoroscope(horos: string) {
    const result = await fetch(
      `https://aztro.sameerkumar.website/?sign=${horos}&day=today`,
      {
        method: 'POST',
      }
    );
    const data = await result.json();
    return data.description;
  }
}
