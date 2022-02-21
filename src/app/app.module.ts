import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DemosComponent } from './demos/demos.component';
import { ResourceComponent } from './resource/resource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RoutingModule} from "./layout/routing.module";
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DemosComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
