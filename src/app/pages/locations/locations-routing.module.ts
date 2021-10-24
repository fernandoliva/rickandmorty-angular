import { LocationDetailComponent } from './location-detail/location-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';


const routes: Routes = [
  {path: "", component: LocationsComponent},
  {path: ":id", component: LocationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
