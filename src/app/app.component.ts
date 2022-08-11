import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { HotelSearchService } from './hotel-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-application';
  hotels:any = [];
  results:any = [];
  resultNews: any = [];
  imageDirectorypath: any = 'http:://127.0.0.1:8000/public/image/';

  showOtherComponent: boolean = false;
  constructor(router: Router, private dataService: HotelSearchService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showOtherComponent = event.url !== '/admin-page';
      }
    });
  }


  search(): void {
    if (this.hotels.item == 'name') {
      this.dataService.getByNames(this.hotels.query).subscribe(data => {
        this.results = data.data;

        console.log(this.results);

      })
    }

    if (this.hotels.item == 'bed_sizes') {
      this.dataService.getByBedSize(this.hotels.query).subscribe(data => {
        this.results = data.data;

        console.log(this.results);

      })
    }

    if (this.hotels.item == 'price') {
      this.dataService.getByPrice(this.hotels.query).subscribe(data => {
        this.results = data.data;
        if (this.results.length == 0) {
          alert("No information Found");
        }
        console.log(this.results);
      })
    }
    if (this.hotels.item == 'amenities') {
      this.dataService.getByAmenities(this.hotels.query).subscribe(data => {
        this.results = data.data;
        const ress = new Set(this.results);
        if (this.results.length == 0) {
          alert("No information Found");
        }
        console.log(this.results);

      })
    }
  }
}
