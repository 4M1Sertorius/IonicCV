import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from "../../models/account/account.interface";
import { ToastController } from "ionic-angular";

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

//declaration of account Asko Mikkola 1600397
  account = {} as Account

  constructor(private toast: ToastController, private afAuth: AngularFireAuth) {
  }

  //Tries if valid email and password, creates account if valid
  async register() {
    try{
      const result = await 
        this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)
        this.toast.create({
         message: "Account successfully created.",
         duration: 3000
        }).present();
        console.log(result);
      }
  //If not valid catches the error and describes it and pops the explanation
      catch (e) {
       console.error(e);
       this.toast.create({
          message: e.message,
          duration: 3000
       }).present();
      }
    }
  }