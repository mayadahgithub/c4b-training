import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegiterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regiter',
  templateUrl: 'regiter.html',
})
export class RegiterPage {
  email;
  password;
  constructor(public fire2:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegiterPage');
  }
  register(){
    this.fire2.auth.createUserWithEmailAndPassword(this.email , this.password)
    .then(user=>{
      this.navCtrl.push(HomePage);
    });
  }
}
