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

  login(data: any): Observable<any> {
    return this.http.post<string>(this.baseUrl + '/login', data).pipe(
      tap(res => {
        // @ts-ignore
        var token: string = 'Auth' + res?.data;
        localStorage.setItem("token", token);
      })
    );
  }

  register(data: any): Observable<string> {
    return this.http.post<string>(this.baseUrl + "/register", data);
  }

  public getToken(): string | null{
    return localStorage.getItem("token");
  }

  public deleteToken(): void {
    localStorage.setItem("token", "");
  }
}
