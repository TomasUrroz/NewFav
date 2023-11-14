import { Component, OnInit } from '@angular/core';
import { Track } from 'app/Interfaces/interfaces';
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
  popList: any[] = [];
  hipHopList: any[] = [];
  pis:Track | undefined ;

  constructor(private as: AuthService, private uss: UtilsUserService, private gai: GetApiInfoService) {}

  ngOnInit(): void {
    this.popuLists(3);
  }

  async popuLists(x:number){
    for(let i = 0 ; i<x ; i++){
      this.rockList[i] = await this.gai.getRock();
      this.popList[i] = await this.gai.getPop();
      this.hipHopList[i] = await this.gai.getHipHop();
    }
  }


}
