import {Component, OnDestroy} from '@angular/core';
import {AirportSearchService} from './airport-search.service';
import {Subscription} from 'rxjs';
import {Airport} from './airport';


@Component({
  selector: 'app-airport-search',
  templateUrl: './airport-search.component.html',
  styleUrls: ['./airport-search.component.scss']
})
export class AirportSearchComponent implements OnDestroy {
  airportServiceSub: Subscription | any;
  search: string = '';
  // @ts-ignore
  airportInfo: Airport;
  errorMessage: any;

  constructor(private airportService: AirportSearchService) {
  }

  searchSubmit() {

    this.airportServiceSub = this.airportService.getAirportInfo(this.search).subscribe(
      (response) => {
          if (response.error) {
           this.airportServiceSub = this.errorMessage = response
          }
          this.airportInfo = response
      },
      (error) => {
        this.errorMessage = error
      },
    );
  }

  ngOnDestroy() {
    this.airportServiceSub.unsubscribe;
  }

  keySearch() {
    this.airportServiceSub.unsubscribe;
    this.searchSubmit();
  }

}
