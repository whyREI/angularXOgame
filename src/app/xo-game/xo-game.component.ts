import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-xo-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xo-game.component.html',
  styleUrl: './xo-game.component.scss',
})
export class XoGameComponent {
  arrNine = Array(9).fill(null);
  board = [...this.arrNine];
  players: any = { X: [], O: [] };
  round = 0;
  gamePause = false;
  winArr = ['012', '345', '678', '036', '147', '258', '048', '246'];
  whoesRound!: string;

  constructor() {
    this.updateWhoesRound();
  }

  onMouseEnter(event: Event) {
    const target = event.target as HTMLButtonElement;
    if (!target.classList.contains('clicked')) {
      const pElement = target.querySelector('p');
      pElement!.textContent =
        this.whoesRound.length > 1 ? null : this.whoesRound;
    }
  }

  onMouseLeave(event: Event) {
    const target = event.target as HTMLButtonElement;
    if (!target.classList.contains('clicked')) {
      const pElement = target.querySelector('p');
      pElement!.textContent = null;
    }
  }

  checkWin(playerMoves: any) {
    let playerMovesStr = playerMoves.join('');

    for (let win of this.winArr) {
      if (win.split('').every((pos) => playerMovesStr.includes(pos))) {
        return true;
      }
    }
    return false;
  }

  startNewGame() {
    this.players = { X: [], O: [] };
    this.round = 0;
    this.gamePause = false;
    this.board = [...this.arrNine];
    this.updateWhoesRound();
  }

  onSquareClick(i: number) {
    let newBoard = [...this.board];
    if (!newBoard[i]) {
      this.updateWhoesRound();
      newBoard[i] = this.whoesRound;
      this.board = newBoard;
      this.players[this.whoesRound].push(i.toString());
      if (this.win()) return;

      this.round++;
      this.updateWhoesRound();
    }
  }

  win(): boolean {
    if (this.round > 3) {
      if (
        this.checkWin(this.players['X']) ||
        this.checkWin(this.players['O'])
      ) {
        this.gamePause = true;
        this.whoesRound = `WINNER: ${this.whoesRound}`;
        return true;
      }
    }
    return false;
  }

  updateWhoesRound(): void {
    this.whoesRound = this.round % 2 === 0 ? 'X' : 'O';
  }
}
