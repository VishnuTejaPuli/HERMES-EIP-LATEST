import { Component, OnInit } from '@angular/core';
import { ReliefCampService } from '../relief-camp.service';
import { ReliefCamp } from '../models/relief-camp.model';

@Component({
  selector: 'app-relief-camp-manager',
  templateUrl: './relief-camp-manager.component.html',
  styleUrls: ['./relief-camp-manager.component.css'],
})
export class ReliefCampManagerComponent implements OnInit {
  reliefCamps: ReliefCamp[] = [];
  selectedCamp: ReliefCamp = {
    name: '',
    location: '',
    capacity: 0,
    contactNumber: '',
  };
  isEditing: boolean = false;

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

  createOrUpdateReliefCamp(): void {
    if (this.isEditing) {
      this.reliefCampService
        .updateReliefCamp(this.selectedCamp.id!, this.selectedCamp)
        .subscribe(() => {
          this.resetForm();
          this.getAllReliefCamps();
        });
    } else {
      this.reliefCampService
        .createReliefCamp(this.selectedCamp)
        .subscribe(() => {
          this.resetForm();
          this.getAllReliefCamps();
        });
    }
  }

  deleteReliefCamp(campId: number): void {
    this.reliefCampService.deleteReliefCamp(campId).subscribe(() => {
      this.getAllReliefCamps();
    });
  }

  selectCampForEdit(camp: ReliefCamp): void {
    this.selectedCamp = { ...camp };
    this.isEditing = true;
  }

  resetForm(): void {
    this.selectedCamp = {
      name: '',
      location: '',
      capacity: 0,
      contactNumber: '',
    };
    this.isEditing = false;
  }
}
