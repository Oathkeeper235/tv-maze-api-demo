import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvMazeService } from '../tv-maze.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ShowDetailsComponent implements OnInit {
  showId: string;
  show: any;
  episodes: any[] = [];
  limitedCast: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tvMazeService: TvMazeService
  ) {
    this.showId = '';
  }

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('id')!;
    this.tvMazeService.getShowDetails(this.showId).subscribe((data: any) => {
      this.show = data;
    });
    this.tvMazeService.getEpisodes(this.showId).subscribe((data: any) => {
      this.episodes = data;
      this.limitedCast = this.show._embedded.cast.slice(0, 18);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
