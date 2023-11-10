import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UtilsUserService } from 'src/app/Services/utils-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  

  constructor(private as: AuthService, private uss: UtilsUserService) {}

  ngOnInit(): void {
    this.startup();
  }

  async startup() {
    if (!this.as.code) {
      this.as.redirectToAuthCodeFlow(this.as.clientId);
    } else {
      const accessToken = await this.as.getAccessToken(
        this.as.clientId,
        this.as.code
      );
      const profile = await this.uss.fetchProfile(accessToken);
      this.uss.populateUI(profile);
    }
  }
}
