import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CollectResponse } from '../../interfaces/collect-response';
import { DistrictResponse } from '../../interfaces/district-response';
import { EcopointResponse } from '../../interfaces/ecopoint-response';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private endpointDistrictUrl = `${environment.apiUrl}/district`

  constructor(private http: HttpClient) { }


  callDistrictManagementServiceForFetchAllDistricts() : Observable<DistrictResponse[]> {
    return this.http.get<DistrictResponse[]>(`${this.endpointDistrictUrl}/all`)
  }


  callDistrictManagementServiceForFetchCollectionsByDistrict(districtDTO: string)
   : Observable<CollectResponse[]> {
    const url = `${this.endpointDistrictUrl}/collections`

    return this.http.get<CollectResponse[]>(url, {params: {districtDTO}})
  }

  callDistrictManagementServiceForFetchEcopointsByDistrict(districtDTO: string)
  : Observable<EcopointResponse[]> {
   const url = `${this.endpointDistrictUrl}/ecopoints`

   return this.http.get<EcopointResponse[]>(url, {params: {districtDTO}})
  }
}
