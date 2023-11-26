import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarComponent } from 'app/Components/Shared/nav-bar/nav-bar.component';
import { NewPlaylistComponent } from 'app/Components/new-playlist/new-playlist.component';

@Component({
    selector: 'app-new-playlist-page',
    standalone: true,
    imports: [
        CommonModule,
        NewPlaylistComponent
    ],
    templateUrl: './new-playlist-page.component.html',
    styleUrls: ['./new-playlist-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPlaylistPageComponent { }
