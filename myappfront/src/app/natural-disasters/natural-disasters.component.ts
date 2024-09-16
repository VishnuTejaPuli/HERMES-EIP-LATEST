// natural-disasters.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-natural-disasters',
  templateUrl: './natural-disasters.component.html',
  styleUrls: ['./natural-disasters.component.css'],
})
export class NaturalDisastersComponent {
  search: boolean = false; // Initialize to false to show the incident report form first

  // Method to toggle the form
  toggleForm() {
    this.search = !this.search; // Toggle the value of 'search'
  }
}
