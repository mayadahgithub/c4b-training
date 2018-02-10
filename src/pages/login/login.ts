import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email;
password;

  constructor(public toast:ToastController ,  public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
login(){
  let toast = this.toast.create({
    message: 'اهلا بيك مجددا ',
    duration: 3000,
    position: 'top'
  });
  this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
  .then(user =>{
      this.navCtrl.push(HomePage);
    toast.present();
  },
  error=>{
    alert(error);
  }
)

}
}
