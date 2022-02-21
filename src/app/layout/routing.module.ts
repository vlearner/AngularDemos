import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "../list/list.component";
import {DemosComponent} from "../demos/demos.component";
import {ResourceComponent} from "../resource/resource.component";

const routes: Routes = [
  { path: '',   redirectTo: '/resource', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'demo', component: DemosComponent },
  { path: 'resource', component: ResourceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
