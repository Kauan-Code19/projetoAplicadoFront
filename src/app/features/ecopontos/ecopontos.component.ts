import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DistrictResponse } from '../../../interfaces/district-response';
import { DistrictService } from '../../services/district.service';
import { EcopointResponse } from '../../../interfaces/ecopoint-response';

@Component({
  selector: 'ecopontos-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DistrictService],
  templateUrl: './ecopontos.component.html',
  styleUrl: './ecopontos.component.css'
})
export class EcopontosComponent implements OnInit {
  ecopoints: EcopointResponse[] = []
  districts: DistrictResponse[] = [] 
  selectedDistrictForViewEcopoint: string = '';


  constructor(private districtService: DistrictService) {}


  ngOnInit(): void {
    this.districtService.callDistrictManagementServiceForFetchAllDistricts().subscribe({
      next: (response) => {
        this.districts = response;
      }
    })
  }


  onDistrictSelected(districtName: string): void {
    if (districtName) {
      this.fetchCollectionsByDistrict(districtName);
    }
  }


  fetchCollectionsByDistrict(district: string) {
    this.districtService.callDistrictManagementServiceForFetchEcopointsByDistrict(district)
    .subscribe({
      next: (response) => {
        this.ecopoints = response
      }
    })
  }
}
