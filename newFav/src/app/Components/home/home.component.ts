import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UtilsUserService } from 'src/app/Services/utils-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  clientId: string = 'b20bc978b3e240b997fbd6734c1d405d';
  params: any = new URLSearchParams(window.location.search);
  code: any = this.params.get('code');

  constructor(private as: AuthService, private uss: UtilsUserService) {}

  ngOnInit(): void {
    console.log("XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    this.needed();
  }

  async needed() {
    if (!this.code) {
      this.as.redirectToAuthCodeFlow(this.clientId);
    } else {
      const accessToken = await this.as.getAccessToken(
        this.clientId,
        this.code
      );
      const profile = await this.uss.fetchProfile(accessToken);
      this.uss.populateUI(profile);
    }
  }
}
