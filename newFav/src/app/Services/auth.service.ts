import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  clientId: string = 'b20bc978b3e240b997fbd6734c1d405d';
  clientSecret: string = '6d78a3abb98a42b796ed99f4f355a9e5';
  params: any = new URLSearchParams(window.location.search);
  code: any = this.params.get('code');

  constructor() {}

}
