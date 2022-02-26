import { Component} from '@angular/core';
import {AirportSearchService} from "./airport-search.service";
import { Subscription} from "rxjs";
import {Airport} from "./airport";

@Component({
  selector: 'app-airport-search',
  templateUrl: './airport-search.component.html',
  styleUrls: ['./airport-search.component.scss']
})
export class AirportSearchComponent {

  constructor(private airportService: AirportSearchService) {}
  airportServiceSub: Subscription | any;
  search: string = '';
  // @ts-ignore
  airportInfo: Airport;

  searchSubmit() {
    this.airportServiceSub = this.airportService.getAirportInfo(this.search).subscribe(data => {
      // console.log(JSON.stringify(data));
      this.airportInfo = data;
    });
  }

  keySearch() {
    this.searchSubmit();
  }
}
