import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialog } from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game',
  imports: [
    CommonModule, 
    PlayerComponent, 
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    GameInfoComponent,
    MatCardModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  drawCardAnimation = false;
  currentCard: string = '';
  game = inject(GameService);

  constructor(public dialog: MatDialog) {
    console.log(this.game);
  }

  drawCard() {
    if (!this.drawCardAnimation) {
      this.currentCard = this.game.stack.pop() ?? '';
      this.drawCardAnimation = true;
      console.log(this.currentCard);
      console.log(this.game);
      
      this.game.currentPlayer++,
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.drawCardAnimation = false;
      }, 1000); 
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name); 
      }
    });
  }
}

// firebaseID = ring-of-fire-20172