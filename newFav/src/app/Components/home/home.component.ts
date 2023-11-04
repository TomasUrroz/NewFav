import { Component, OnInit } from '@angular/core';
import { redirectToAuthCodeFlow, getAccessToken} from "./authCodeWithPkce";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  clientId:string = "b20bc978b3e240b997fbd6734c1d405d"; // Replace with your client id
  params:any = new URLSearchParams(window.location.search);
  code:any = this.params.get("code");
  
  ngOnInit(): void {
    this.needed()

  }

  async needed(){
    if (!this.code) {
      redirectToAuthCodeFlow(this.clientId);
    } else {
        const accessToken = await getAccessToken(this.clientId, this.code);
        const profile = await this.fetchProfile(accessToken);
        this.populateUI(profile);
    }
  }

  async fetchProfile(code: string): Promise<UserProfile> {
      const result = await fetch("https://api.spotify.com/v1/me", {
          method: "GET", headers: { Authorization: `Bearer ${code}` }
      });
  
      return await result.json();
  }
  
  populateUI(profile: UserProfile) {
      document.getElementById("displayName")!.innerText = profile.display_name;
      document.getElementById("avatar")!.setAttribute("src", profile.images[0].url)
      document.getElementById("id")!.innerText = profile.id;
      document.getElementById("email")!.innerText = profile.email;
      document.getElementById("uri")!.innerText = profile.uri;
      document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
      document.getElementById("url")!.innerText = profile.href;
      document.getElementById("url")!.setAttribute("href", profile.href);
      document.getElementById("imgUrl")!.innerText = profile.images[0].url;
  }

}
