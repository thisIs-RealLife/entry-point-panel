import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SecurityService} from "../../../service/security.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  fg: FormGroup;

  constructor(private service: SecurityService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<LoginDialogComponent>) {
  }

  ngOnInit(): void {
    this.fg = new FormGroup({
      login: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  register() {

    this.service.register(this.fg.getRawValue()).subscribe(response => {
      this.dialogRef.close();
      this.dialog.open(LoginDialogComponent, {
        data: [],
        width: '458px',
        height: '610px',
      })

    })
  }
}
