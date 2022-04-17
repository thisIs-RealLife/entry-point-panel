import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonalCabinetService {

  private url = environment.url + '/cabinet';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<any>{
    return this.http.get(this.url);
  }
}
