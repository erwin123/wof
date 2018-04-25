import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ConfigService {

  constructor(private http:HttpClient) { }
  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
