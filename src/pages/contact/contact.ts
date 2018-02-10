import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegiterPage} from '../regiter/regiter';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
// import * as firebase from 'firebase/app';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
signin:boolean;
ifSignOut:boolean;

  constructor(private toastCtrl: ToastController,public fire:AngularFireAuth, public navCtrl: NavController) {
    fire.authState.subscribe(user => {
      if(!user){
        this.ifSignOut=true;
        this.signin=false;
      }else{
        this.signin=true;
        this.ifSignOut=false
      }
    });

    
  }
  loginPage(){
    this.navCtrl.push(LoginPage);
  }
  registerPgae(){
    this.navCtrl.push(RegiterPage);
  }
  logOut(){
    let toast = this.toastCtrl.create(
      {
      message: 'تم تسجيل خروجك ',
      duration: 3000,
      position: 'top'
    }
  );

    this.fire.auth.signOut().then(page=>{
      this.navCtrl.push(HomePage);
      toast.present();
      this.ifSignOut=true;
      this.signin =false;
    })
  }
}
