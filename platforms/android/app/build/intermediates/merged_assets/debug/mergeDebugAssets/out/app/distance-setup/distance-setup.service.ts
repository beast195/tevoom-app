import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { DistanceSetup } from './distance-setup.models';
import { Injectable } from '@angular/core';


@Injectable()
export class DistanceSetupsService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://maps.googleapis.com/maps/api/directions/json';
  getDistanceSetup(origin, dest)  {
    let params = new HttpParams();
    params = params.set('origin', origin)
      .set('destination', dest)
      .set('key', 'AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8');
      
    return this.httpClient.get<DistanceSetup>(this.apiUrl, {params : params});
  }

 
}
