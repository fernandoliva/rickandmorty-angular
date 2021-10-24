import { LocationsService } from './../../../shared/services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  public locationDetail:any = {};

  constructor(private route:ActivatedRoute, private locationsService:LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let id = param.get('id');
      this.locationsService.getLocationById(id).subscribe((location) =>{
        this.locationDetail = location;
        console.log(this.locationDetail);
      })
    })
  }

}
