import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the UpdateDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-date',
  templateUrl: 'update-date.html',
})
export class UpdateDatePage {
name ;
job;
area;
phone;
key;
itemsRef: AngularFireList<any>;
items: Observable<any[]>;
  constructor(public db:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.name =this.navParams.get("name");
    this.job =this.navParams.get("job");
    this.area =this.navParams.get("area");
    this.phone =this.navParams.get("phone");
    this.key= this.navParams.get("key");
    this.itemsRef=db.list('/jobs');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDatePage');
  }
  update(name , job , area , phone){
    this.itemsRef.update(this.key,{
      "name":name,
      "job":job,
      "area":area,
      "phoneNumber":phone
    })
  }

}
