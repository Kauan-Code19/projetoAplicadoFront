import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Shift } from '../../enums/shift';

@Injectable({
  providedIn: 'root'
})
export class CollectService {
  private endpointCollectUrl = `${environment.apiUrl}/collect`

  constructor(private http: HttpClient) { }


  callCollectManagementServiceUpdateScheduleByDistrictAndDayWeek
  (dayOfWeek: string, shift: Shift, schedule: number, district: string) : Observable<void> {
    const data = {dayOfWeek, shift, schedule, district}

    return this.http.put<void>(this.endpointCollectUrl, data)
  }
}
