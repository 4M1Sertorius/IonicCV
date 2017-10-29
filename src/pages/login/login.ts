import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'app-page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //Constructs toast (small text popup window) and navigation elements Asko Mikkola 1600397
  constructor(private toast: ToastController, private navCtrl: NavController, private navParams: NavParams) {
  }
//Login takes the info from login-form
  login(event: LoginResponse) {
    //if no error sets root to tabs page and welcomes the user
    if(!event.error){
      this.toast.create({
        message: `Welcome, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('TabsPage')
    }
    //in case of error presents error message described by LoginResponse
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
    console.log(event);
  }
}
