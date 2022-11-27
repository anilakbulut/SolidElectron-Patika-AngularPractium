import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { WhichUserLoginService } from 'src/app/services/whichUserLogin.service';
import { User } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, 
              private _router: Router,
              private authService:AuthService,
              private whichUserLoginService :WhichUserLoginService
              ) { }

  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe(data => {
      this.users = data
    })
  }
  readonly testForm = new FormGroup({
    testValue1: new FormControl(``), // email
    testValue2: new FormControl(`password`), // password
  });

  users: User[];
  loginUser: User = {}

  i:number


  checkLogin:boolean = false
  checkUser() {
    this.loginUser.user_email = this.testForm.get('testValue1').value
    this.loginUser.user_password = this.testForm.get('testValue2').value

    for (this.i =0; this.i<this.users.length;this.i++){
      if (this.users[this.i].user_email == this.loginUser.user_email &&
        this.users[this.i].user_password == this.loginUser.user_password
      ) {
        this.checkLogin = true
        this.whichUserLoginService.whichUser(this.loginUser)
        break;
      }
      else {
      }
    }
   

    if(this.checkLogin){
      this.authService.login()
      alert('Login Başarılı')
      this._router.navigate([''])
    }
    else{
      alert('Hatalı giris')
    }
  }




}
