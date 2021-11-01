import { Component, OnInit } from '@angular/core';
import { EpisodesService } from './../../shared/services/episodes.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: any = [];
  info:any = {};

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((episodes:any) => {
      this.episodes = episodes.results;
      this.info = episodes.info;
      console.log(this.episodes);
    });
  }
}
