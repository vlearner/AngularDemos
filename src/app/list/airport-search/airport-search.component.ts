import { Component} from '@angular/core';
import {AirportSearchService} from "./airport-search.service";
import { Subscription} from "rxjs";

@Component({
  selector: 'app-airport-search',
  templateUrl: './airport-search.component.html',
  styleUrls: ['./airport-search.component.scss']
})
export class AirportSearchComponent {

  constructor(private airportService: AirportSearchService) {
    this.data = [];
  }
  airportServiceSub: Subscription | any;
  search: string = '';
  data = [];

  searchSubmit() {
    this.airportServiceSub = this.airportService.getAirportInfo(this.search).subscribe(data => {
      // console.log(JSON.stringify(data));
      this.data = data;
    });
  }
}
