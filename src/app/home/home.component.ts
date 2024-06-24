import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TvMazeService } from '../tv-maze.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class HomeComponent {
  query: string = '';
  shows: any[] = [];

  constructor(private tvMazeService: TvMazeService) { }

  searchShows() {
    if (this.query.trim()) {
      this.tvMazeService.searchShows(this.query).subscribe((results: any) => {
        this.shows = results;
      });
    }
  }
}
