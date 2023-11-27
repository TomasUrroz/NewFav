import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Lista } from 'app/Interfaces/interfaces';
import { ListGeneratorService } from 'app/Services/list-generator.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  list: Lista[] | undefined;

  constructor(private lg: ListGeneratorService, private au: AuthService) {}

  ngOnInit(): void {
    this.generateLists();
  }

  async generateLists() {
    if (this.au.currentUser != undefined) {
      this.list = await this.lg.getLists(this.au.currentUser.email);
    }
  }

  async deletePlaylist(id: number) {
    const ok = confirm('Desea borrar la playlist?');
    if (!ok) return;
    this.lg.deleteList(id);
  }

  async deleteSong(idPL: number, idSong: string) {
    const ok = confirm('Desea borrar la cancion?');
    if (!ok) return;

    if (this.list != undefined) {
      this.list[idPL].songs = this.list[idPL].songs.filter(
        (item) => item.id !== idSong
      );
      await this.lg.putList(this.list[idPL]);
    }
  }
}
