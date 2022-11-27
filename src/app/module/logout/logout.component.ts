import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WhichUserLoginService } from 'src/app/services/whichUserLogin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router,
              private whichUserLogin: WhichUserLoginService
    ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.whichUserLogin.logoutReset();
    this._router.navigate(['layout']);
  }
}
