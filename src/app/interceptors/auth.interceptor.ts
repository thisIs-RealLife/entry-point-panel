import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SecurityService} from "../service/security.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private securityService: SecurityService,
              private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token: string | null = this.securityService.getToken();
    if (token === null) {
      this.router.navigate(['/']);
    } else {
      return next.handle(request.clone({setHeaders: {Authorization: token}}));
    }
    return next.handle(request);
  }
}
