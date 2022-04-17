import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LoginDialogComponent} from './components/home-page/login-dialog/login-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './components/home-page/register-dialog/register.component';
import {PersonalCabinetComponent} from "./components/personal-cabinet/personal-cabinet.component";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SpinnerComponent } from './components/spinner/spinner.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'lk', component: PersonalCabinetComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginDialogComponent,
    RegisterComponent,
    SpinnerComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
