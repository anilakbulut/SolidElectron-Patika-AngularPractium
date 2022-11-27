import { Component, Injectable, OnInit } from '@angular/core';
import {ChangeDetectionStrategy, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import { AuthService } from 'src/app/services/auth.service';
import { WhichUserLoginService } from 'src/app/services/whichUserLogin.service';
import { User } from '../login/login.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
      {
          provide: TUI_IS_IOS,
          useValue: false,
      },
      {
          provide: TUI_IS_ANDROID,
          useValue: true,
      },
  ],
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private authService:AuthService,
    private router: Router,
    private whichUserLoginService: WhichUserLoginService
    ) {}

  isLogin = this.authService.AuthenticatedUser()
  loginUser: User = {}

  ngOnInit(): void {
    if(this.isLogin){
      this.loginUser = this.whichUserLoginService.sendUser();
    }
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['layout/logout'])
  }
  readonly login = {
    text: `Üye Girişi`,
    icon: `tuiIconCard`,
  }

  readonly signup = {
    text: `Kayıt Ol`,
    icon: `tuiIconCard`,
  }

  readonly signout = {
    text: `Oturumu Kapat`,
    icon: `tuiIconCard`,
  }

  readonly items = [
    {
        text: `Login`,
        icon: `tuiIconCard`,
    },
    {
        text: `Sign Up`,
        icon: `tuiIconCall`,
    },
];

activeItemIndex1 = 0;
activeItemIndex2 = 0;

onClick(item: string): void {
    // this.alerts.open(item).subscribe();
}



}
