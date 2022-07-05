import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  urlBase = 'http://api.weatherunlocked.com/api/current/';

  //Api de clima
  getClima(ciudad: string, Cp: string) {
    return this.httpClient.get(`${this.urlBase}${ciudad}.${Cp}?app_id=2db7945c&app_key=ddedeed981edc87ba31acadcfb793d07`);
  }
}
