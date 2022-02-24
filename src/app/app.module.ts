import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DemosComponent } from './demos/demos.component';
import { ResourceComponent } from './resource/resource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RoutingModule} from "./layout/routing.module";
import {MaterialModule} from "./material/material.module";
import { AirportSearchComponent } from './list/airport-search/airport-search.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DemosComponent,
    ResourceComponent,
    AirportSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonToggleModule,
    FormsModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
