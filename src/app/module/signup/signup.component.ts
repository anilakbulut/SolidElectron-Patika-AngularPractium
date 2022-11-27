import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './signup.model';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class SignupComponent implements OnInit {

  constructor(
    private signupService: SignupService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  readonly testForm = new FormGroup({
    testValue1: new FormControl(``), // name
    testValue2: new FormControl(``), // lastname
    testValue3: new FormControl(``), // email
    testValue4: new FormControl(``), // password
    testValue5: new FormControl(``), // password again
    testValue6: new FormControl(``), // address
  });

  users: User[];
  singleUser: User[];
  postUser: User = {}


  getUsers() {
    this.signupService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  getSingleUser(user_id: number) {
    this.signupService.getUserById(user_id).subscribe(data => {
      this.singleUser = data;
      console.log(this.singleUser);
    })
  }

  checkLogin = true
  message=""
  add() {
    this.postUser.user_name = this.testForm.get('testValue1').value
    this.postUser.user_surname = this.testForm.get('testValue2').value
    this.postUser.user_email = this.testForm.get('testValue3').value
    this.postUser.user_password = this.testForm.get('testValue4').value
    this.postUser.user_address = this.testForm.get('testValue6').value


      this.signupService.postUser(this.postUser).subscribe(
        { 
          next:  (data) => {this.users.push(data)},
          error: (error)  => {
            const _err = error as any as HttpErrorResponse;
            if (_err.status === 400 ) {
              this.checkLogin = false;
              alert('MailHatası');
            }
            else {
              this.checkLogin = false;
              alert('Bilgileri Eksiksiz Doldurunuz');
            }
          },
          complete: ()=>{
            alert('Başarılı Kayıt')
            this.routeLogin()
          }

        }
      )


  }

  

  routeLogin(){
    this._router.navigate(['layout/login'])
  }

  
}
