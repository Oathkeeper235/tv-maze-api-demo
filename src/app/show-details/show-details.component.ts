import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private tvMazeService: TvMazeService
  ) {
    this.showId = '';
  }

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('id')!;
    this.tvMazeService.getShowDetails(this.showId).subscribe((data: any) => {
      this.show = data;
    });
  }
}
