import { Component, OnInit } from '@angular/core';
import { ReliefCampService } from '../relief-camp.service';
import { ReliefCamp } from '../models/relief-camp.model';

@Component({
  selector: 'app-relief-camp-search',
  templateUrl: './relief-camp-search.component.html',
  styleUrls: ['./relief-camp-search.component.css'],
})
export class ReliefCampSearchComponent implements OnInit {
  reliefCamps: ReliefCamp[] = [];
  searchText: string = '';

  constructor(private reliefCampService: ReliefCampService) {}

  ngOnInit(): void {
    this.getAllReliefCamps();
  }

  getAllReliefCamps(): void {
    this.reliefCampService
      .getAllReliefCamps()
      .subscribe((data: ReliefCamp[]) => {
        this.reliefCamps = data;
      });
  }

  searchCamps(): void {
    if (this.searchText.trim()) {
      this.reliefCampService
        .getReliefCampsByName(this.searchText)
        .subscribe((nameData: ReliefCamp[]) => {
          if (nameData.length > 0) {
            this.reliefCamps = nameData;
          } else {
            this.reliefCampService
              .getReliefCampsByLocation(this.searchText)
              .subscribe((locationData: ReliefCamp[]) => {
                this.reliefCamps = locationData;
              });
          }
        });
    } else {
      this.getAllReliefCamps(); // Reset to show all camps if search field is empty
    }
  }
}
