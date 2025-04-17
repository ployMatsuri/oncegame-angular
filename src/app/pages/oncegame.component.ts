import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { games } from '../models/games';

@Component({
  selector: 'app-oncegame',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4" *ngIf="game">
      <h2>{{ game.title }}</h2>
      <p>{{ game.subtitle }}</p>
      <img [src]="game.icon" width="200" />

      <hr />

      <form (ngSubmit)="submitForm()" #gameForm="ngForm">
        <div class="mb-3">
          <label for="uid">UID</label>
          <input type="text" id="uid" name="UID" [(ngModel)]="formData.UID" required class="form-control" />
        </div>

        <div class="mb-3">
          <label for="slip">Upload Slip</label>
          <input type="file" id="slip" name="slip" (change)="onFileChange($event)" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="!gameForm.form.valid">Submit</button>
      </form>
    </div>
  `
})
export class OncegameComponent {
  game: any;
  formData = { UID: '', slip: '' };

  constructor(private route: ActivatedRoute) {
    const title = this.route.snapshot.paramMap.get('title');
    this.game = games.find((g: any) => g.title === title);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.formData.slip = file.name;
  }

  submitForm() {
    alert(`Submitted UID: ${this.formData.UID}, Slip: ${this.formData.slip}`);
  }
}
