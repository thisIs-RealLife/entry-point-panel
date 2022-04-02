import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<string> {
    return this.http.post<string>(this.baseUrl + '/login', data).pipe(
      tap(res => {
        localStorage.setItem("token", res);
      })
    );
  }

  register(data: any): Observable<string> {
    return this.http.post<string>(this.baseUrl + "/register", data);
  }
}
