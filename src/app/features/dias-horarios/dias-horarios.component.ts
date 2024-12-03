import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DistrictService } from '../../services/district.service';
import { DistrictResponse } from '../../../interfaces/district-response';
import { CollectResponse } from '../../../interfaces/collect-response';
import { CollectService } from '../../services/collect.service';
import { Shift } from '../../../enums/shift';
import { Router } from '@angular/router';

@Component({
  selector: 'dias-horarios-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [DistrictService, CollectService],  
  templateUrl: './dias-horarios.component.html',
  styleUrl: './dias-horarios.component.css'
})
export class DiasHorariosComponent implements OnInit {
  inputsForm: FormGroup;
  districts: DistrictResponse[] = [] 
  collections: CollectResponse[] = []
  selectedDistrictForViewCollect: string = '';
  selectedDistrictForSchedule: string = '';
  shift: Shift | null = null 

  public readonly Shift = Shift;

  constructor
  (
    private districtService: DistrictService,
    private collectService: CollectService,
    private router: Router
  ) {
    this.inputsForm = new FormGroup({
      bairro: new FormControl('', Validators.required),
      diaSemana: new FormControl('', [Validators.required]),
      horario: new FormControl('', Validators.required),
    })
  }


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
    this.districtService.callDistrictManagementServiceForFetchCollectionsByDistrict(district)
    .subscribe({
      next: (response) => {
        this.collections = response
      }
    })
  }


  updateShift(): void {
    const horario = this.inputsForm.get('horario')?.value;
    if (horario) {
      const [hour] = horario.split(':').map((part: string) => parseInt(part, 10));
      if (hour >= 6 && hour < 12) {
        this.shift = Shift.DIURNO;
      } else if (hour >= 12 && hour < 18) {
        this.shift = Shift.VESPERTINO;
      } else {
        this.shift = Shift.NOTURNO;
      }
    }
  }


  updateScheduleByDistrictAndDayWeek() {   
    if (this.inputsForm.valid && this.shift) {
      
      this.collectService.callCollectManagementServiceUpdateScheduleByDistrictAndDayWeek
      (
        this.inputsForm.value.diaSemana,
        this.shift,
        this.inputsForm.value.horario,
        this.inputsForm.value.bairro
      ).subscribe({
        complete: () => {
          window.location.reload()
        }
      }) 
    }
  }
}
