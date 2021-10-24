import { CharactersService } from './../../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public characterDetail:any = {};

  constructor(private route:ActivatedRoute, private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let id = param.get('id');
      this.charactersService.getCharacterById(id).subscribe((character)=>{
        this.characterDetail = character;
        // console.log(this.characterDetail);
      })
    })
  }

}
