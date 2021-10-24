import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.scss']
})
export class CharactersGalleryComponent implements OnInit {

  @Input() characters:any = [];
  @Input() info:any = {};


  constructor() {
  }

  ngOnInit(): void {}
}
