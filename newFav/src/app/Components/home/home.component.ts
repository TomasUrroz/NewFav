import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Services/auth.service';
import { GetApiInfoService } from 'app/Services/get-api-info.service';
import { UtilsUserService } from 'app/Services/utils-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  

  constructor(private as: AuthService, private uss: UtilsUserService, private gai: GetApiInfoService) {}

  ngOnInit(): void {
    console.log(this.gai.getTop50());
  }

}
