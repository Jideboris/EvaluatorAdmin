import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Admincontent } from "../objects/admincontent";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-content-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css'],
  providers: [DataService]
})
export class LocationItemComponent implements OnInit {

  @Input() locations: Admincontent[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.retrieveLocations();
  }
  retrieveLocations() {
    this.dataService
      .getAllLocations()
      .subscribe(
      (locations) => {
        this.locations = locations;
      }
      );
  }
}
