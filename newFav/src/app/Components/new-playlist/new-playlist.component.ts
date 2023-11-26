import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Lista } from 'app/Interfaces/interfaces';
import { ListGeneratorService } from 'app/Services/list-generator.service';

@Component({
    selector: 'app-new-playlist',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './new-playlist.component.html',
    styleUrls: ['./new-playlist.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPlaylistComponent { 
  
    now:Date = new Date();

    constructor(private fb: FormBuilder, private lg: ListGeneratorService) {}
  
    form: FormGroup = this.fb.group({
      title: ['', Validators.required],
      user: this.lg.sDataUser.email,
      date: this.now.toLocaleDateString(),
      description: '',
      id: 0,
    });
  
    async saveList() {
      if (this.form.invalid) return;
  
      const list: Lista = {
          title: this.form.controls['title'].value,
          description: this.form.controls['description'].value,
          id: this.form.controls['id'].value,
          user: this.lg.sDataUser.email,
          date: this.now.toLocaleDateString(),        
          songs: []
      };
      this.lg.postList(list);
    }
}
