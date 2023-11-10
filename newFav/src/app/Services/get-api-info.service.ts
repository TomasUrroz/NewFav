import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetApiInfoService {
  constructor() {}

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
