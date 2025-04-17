import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { games } from '../models/games';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './homepage.component.html'
})
export class HomepageComponent {
  gamesList = games;
  searchText = '';

  get filteredGames() {
    return this.gamesList.filter((game: { title: string }) =>
      game.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  goToGame(title: string) {
    window.location.href = `/oncegame/${title}`;
  }
}
