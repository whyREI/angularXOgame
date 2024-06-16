import { Routes } from '@angular/router';
import { XoGamePageComponent } from './xo-game-page/xo-game-page.component';

export const routes: Routes = [
  { path: '', component: XoGamePageComponent },
  { path: '**', redirectTo: '' },
];
