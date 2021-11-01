import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }

  getCharacterById(idCharacter: any) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + idCharacter);
  }

  getLocationByPages(url:any) {
    return this.http.get(url)
  }

}
