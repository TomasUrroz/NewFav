import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lista } from 'app/Interfaces/interfaces';
import { AuthService } from 'app/Services/auth.service';
import { ListGeneratorService } from 'app/Services/list-generator.service';

@Component({
    selector: 'app-new-playlist',
    templateUrl: './new-playlist.component.html',
    styleUrls: ['./new-playlist.component.css'],
})

export class NewPlaylistComponent { 
  
    now:Date = new Date();

    form: FormGroup = this.fb.group({
      id: 0,
      title: ['', Validators.required],
      user: this.authService?.currentUser?.email,
      date: this.now.toLocaleDateString(),
      songs: [],
      description: '',
    });
  

    constructor(private fb: FormBuilder, private lg: ListGeneratorService, private authService: AuthService) {}
  
    async saveList() {
      if (this.form.invalid ) return;
  
      const list: Lista = {
          id: this.form.controls['id'].value,
          title: this.form.controls['title'].value,
          user: this.authService.currentUser?.email,
          date: this.now.toLocaleDateString(),  
          songs: [],      
          description: this.form.controls['description'].value,
      };
      this.lg.postList(list);
    }
}
