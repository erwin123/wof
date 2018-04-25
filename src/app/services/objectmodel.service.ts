import { Injectable } from '@angular/core';
import { Objectmodel} from '../models/objectmodel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ObjectmodelService {
  public apiUrl:string = 'http://mufondev.muf.co.id/mufon_new/muf_on_new/api/c_search_object_model_wof';
  
  constructor(private http:HttpClient, private configService:ConfigService) { }
    createAuthorizationHeader(headers: HttpHeaders) {
      headers.append('Content-Type', 'application/json'); 
    }

    getObjectmodel(objbrand:string) {
      let headers = new HttpHeaders();
      this.createAuthorizationHeader(headers);
      
      return  this.http.post<Objectmodel[]>(this.apiUrl, {brand_code:objbrand}).map(
          res => {
            console.log(res);
            return res;
          },
          (err: HttpErrorResponse) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
          }
        );
    }
}
