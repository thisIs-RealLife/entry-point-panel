import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {PersonalCabinetService} from "../../service/personal-cabinet.service";

@Component({
  selector: 'app-personal-cabinet',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.scss']
})
export class PersonalCabinetComponent implements OnInit {

  private url = environment.url + '/cabinet';

  constructor(
              private cabinetService: PersonalCabinetService) { }

  ngOnInit(): void {
    this.cabinetService.getPerson().subscribe(response => {
      console.log(response?.data);
    })
  }


}
