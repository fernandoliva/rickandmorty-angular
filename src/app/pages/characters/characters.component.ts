import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../shared/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: any = [];
  info:any = {};

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((characters:any) => {
      this.characters = characters.results;
      this.info = characters.info;
      console.log(this.info);
    });
  }
}
