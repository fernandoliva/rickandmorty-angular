import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationsGalleryComponent } from './locations-gallery/locations-gallery.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationDetailComponent,
    LocationsGalleryComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
