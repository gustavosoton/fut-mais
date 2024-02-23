import { Routes } from '@angular/router';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { TeamUploaderComponent } from './pages/team-uploader/team-uploader.component';

export const routes: Routes = [
  {
    path: 'players',
    component: PlayersPageComponent,
  },
  {
    path: 'team-uploader',
    component: TeamUploaderComponent,
  },
];
