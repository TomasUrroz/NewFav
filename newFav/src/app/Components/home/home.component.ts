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
  
  rockList: any[] = [];

  constructor(private as: AuthService, private uss: UtilsUserService, private gai: GetApiInfoService) {}

  ngOnInit(): void {
    this.popuRock(3);
    console.log(this.gai.getPis());
  }

  async popuRock(x:number){
    for(let i = 0 ; i<x ; i++){
      this.rockList[i] = await this.gai.getRock();
    }
  }

}
