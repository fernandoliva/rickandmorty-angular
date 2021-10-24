import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: any = [];
  info:any = {};

  constructor(private locationsService:LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((locations:any) => {
      this.locations = locations.results;
      this.info = locations.info;
    });
  }

}
