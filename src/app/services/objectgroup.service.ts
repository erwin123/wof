import { Injectable } from '@angular/core';
import { Objectgroup} from '../models/objectgroup';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ObjectgroupService {
  public apiUrl:string = 'http://mufondev.muf.co.id/mufon_new/muf_on_new/api/c_search_object_group';
  public config:any;
  
  constructor(private http:HttpClient, private configService:ConfigService) { }
 
  getObjectgroup() {
    return this.http
      .get<Objectgroup[]>(this.apiUrl)
      .map((res:Objectgroup[]) => {
          return res;
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });
  }
}
