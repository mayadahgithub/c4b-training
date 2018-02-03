import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;
  job;
  area;
  phone;
  items:Observable<any>;

  constructor(public db:AngularFireDatabase,public NavP:NavParams,public navCtrl: NavController) {
    this.name=this.NavP.get("name");
    this.job=this.NavP.get("job");
    this.area=this.NavP.get("area");
    this.phone=this.NavP.get("phoneNumber");
    // this.name=this.NavP.get("phoneNumber");
    this.items=db.list('/jobs').valueChanges();
  }

}
