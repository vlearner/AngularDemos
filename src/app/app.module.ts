import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DemosComponent } from './demos/demos.component';
import {RouterModule, Routes} from "@angular/router";
import { ResourceComponent } from './resource/resource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'list', component: ListComponent },
  { path: 'demo', component: DemosComponent },
  { path: 'resource', component: ResourceComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DemosComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
