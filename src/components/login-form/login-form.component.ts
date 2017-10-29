import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  //declaration of account Asko Mikkola 1600397
  account = {} as Account;
  @Output() loginStatus: EventEmitter<any>;

//Constructor for LoginPage authentication and errorhandlers(LoginResponse)
  constructor(private afAuth: AngularFireAuth, private NavCtrl: NavController) {
    this.loginStatus = new EventEmitter<any>();
  }
//Checks the user credentials
  async login() {
     try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      } 
      this.loginStatus.emit(result);
    }
//Points out errors and drives errors to the LoginResponse
    catch(e){
      console.error(e);
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
    }
  }
//For the LoginPage Registerbutton
    navigateToRegisterPage(){
      this.NavCtrl.push('RegisterPage');
  }
}


