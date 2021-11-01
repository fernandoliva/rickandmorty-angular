import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersGalleryComponent } from './characters-gallery/characters-gallery.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailComponent,
    CharactersGalleryComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
