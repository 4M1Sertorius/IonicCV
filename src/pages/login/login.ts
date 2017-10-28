import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'app-page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toast: ToastController, private navCtrl: NavController, private navParams: NavParams) {
  }

  login(event: LoginResponse) {
    if(!event.error){
      this.toast.create({
        message: `Welcome, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfilePage')
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
    console.log(event);
  }
/* //Doesn't give "Go back" arrow if loads page TabsPage
  navigateToPage(pageName: string){
    if(pageName === 'TabsPage'){
      this.navCtrl.setRoot(pageName)
    }
    else {
      this.navCtrl.push(pageName)
    }
  } */


}
