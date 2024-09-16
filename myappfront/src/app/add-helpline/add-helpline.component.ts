import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-helpline',
  templateUrl: './add-helpline.component.html',
  styleUrls: ['./add-helpline.component.css'],
})
export class AddHelplineComponent {
  helplineNumber = {
    name: '',
    phoneNumber: '',
    region: '',
  };

  helplineWebsite = {
    name: '',
    website: '',
    region: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onAddHelplineNumber() {
    this.http
      .post(
        'http://localhost:8000/api/helplines/setnumbers',
        this.helplineNumber
      )
      .subscribe(
        (response) => {
          console.log('Helpline number added successfully:', response);
          this.helplineNumber = { name: '', phoneNumber: '', region: '' }; // Reset form
        },
        (error) => {
          console.error('Error adding helpline number:', error);
        }
      );
  }

  onAddHelplineWebsite() {
    this.http
      .post(
        'http://localhost:8000/api/helplines/setwebsites',
        this.helplineWebsite
      )
      .subscribe(
        (response) => {
          console.log('Helpline website added successfully:', response);
          this.helplineWebsite = { name: '', website: '', region: '' }; // Reset form
        },
        (error) => {
          console.error('Error adding helpline website:', error);
        }
      );
  }
}
