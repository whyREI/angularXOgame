import { Component } from '@angular/core';
import { XoGameComponent } from '../xo-game/xo-game.component';

@Component({
  selector: 'app-xo-game-page',
  standalone: true,
  imports: [XoGameComponent],
  templateUrl: './xo-game-page.component.html',
  styleUrl: './xo-game-page.component.scss',
})
export class XoGamePageComponent {}
