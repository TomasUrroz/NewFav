import { Component, OnInit } from '@angular/core';
import { Lista } from 'app/Interfaces/interfaces';
import { ListGeneratorService } from 'app/Services/list-generator.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  saveTo: number | undefined;

  constructor(private lg:ListGeneratorService){}

  ngOnInit(): void {
    this.storeLists();
  }
  
  async storeLists() {
    this.lg.sList = await this.lg.getLists(this.lg.sDataUser.email);
  }

  async saveToList(id: number) {
    if (this.lg.sList != undefined) {
      await this.lg.putList(this.lg.sList[id]);
    }
  }
}
