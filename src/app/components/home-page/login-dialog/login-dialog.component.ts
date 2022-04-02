import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SecurityService} from "../../../service/security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  // @ts-ignore
  fg: FormGroup;

  constructor(private security: SecurityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fg = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  logIn() {
    this.security.login(this.fg.getRawValue()).subscribe(response => {
      if (response){

      }
    })
  }
}
