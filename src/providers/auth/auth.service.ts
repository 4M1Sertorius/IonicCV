import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";

/*
  Generated class for the AuthProvider provider.
Asko Mikkola 1600397
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
  }

}
