import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {RegisterComponent} from "./register-dialog/register.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login() {
    this.dialog.open(LoginDialogComponent, {
      data: [],
      width: '458px',
      height: '610px',
    })
  }

  register() {
    this.dialog.open(RegisterComponent, {
      data: [],
      width: '458px',
      height: '610px',
    })
  }
}
