import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  helplineNumbers: any[] = [];
  helplineWebsites: any[] = [];
  searchName: string = '';
  searchRegion: string = '';

  constructor(private supportService: SupportService) {}

  ngOnInit(): void {
    this.getAllHelplines();
  }

  getAllHelplines(): void {
    this.supportService.getAllHelplineNumbers().subscribe((data) => {
      this.helplineNumbers = data;
    });

    this.supportService.getAllHelplineWebsites().subscribe((data) => {
      this.helplineWebsites = data;
    });
  }

  searchHelplines(): void {
    if (this.searchName && this.searchRegion) {
      // If both name and region are provided
      this.supportService
        .searchHelplineNumbersByName(this.searchName)
        .subscribe((nameData) => {
          this.supportService
            .searchHelplineNumbersByRegion(this.searchRegion)
            .subscribe((regionData) => {
              this.helplineNumbers = nameData.filter((n) =>
                regionData.some((r) => r.id === n.id)
              );
            });
        });
      this.supportService
        .searchHelplineWebsitesByName(this.searchName)
        .subscribe((nameData) => {
          this.supportService
            .searchHelplineWebsitesByRegion(this.searchRegion)
            .subscribe((regionData) => {
              this.helplineWebsites = nameData.filter((n) =>
                regionData.some((r) => r.id === n.id)
              );
            });
        });
    } else if (this.searchName) {
      // If only name is provided
      this.supportService
        .searchHelplineNumbersByName(this.searchName)
        .subscribe((data) => {
          this.helplineNumbers = data;
        });
      this.supportService
        .searchHelplineWebsitesByName(this.searchName)
        .subscribe((data) => {
          this.helplineWebsites = data;
        });
    } else if (this.searchRegion) {
      // If only region is provided
      this.supportService
        .searchHelplineNumbersByRegion(this.searchRegion)
        .subscribe((data) => {
          this.helplineNumbers = data;
        });
      this.supportService
        .searchHelplineWebsitesByRegion(this.searchRegion)
        .subscribe((data) => {
          this.helplineWebsites = data;
        });
    } else {
      // If neither name nor region is provided, load all records
      this.getAllHelplines();
    }
  }
}
