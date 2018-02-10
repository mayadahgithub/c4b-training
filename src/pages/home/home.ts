import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { UpdateDatePage } from '../update-date/update-date';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;
  job;
  area;
  phone;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(public db:AngularFireDatabase,public NavP:NavParams,public navCtrl: NavController) {
    this.name=this.NavP.get("name");
    this.job=this.NavP.get("job");
    this.area=this.NavP.get("area");
    this.phone=this.NavP.get("phoneNumber");
    // this.name=this.NavP.get("phoneNumber");
    
    
    this.itemsRef = db.list('/jobs');
      
      this.items = this.itemsRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ 
          key: c.payload.key,
           name:c.payload.val().name,
           area:c.payload.val().area,
          job:c.payload.val().job,
          phoneNumber:c.payload.val().phoneNumber
           })
        );
      });

  }
  delete(key){
    alert(key);
    this.itemsRef.remove(key)
  }
  update(key,name , job , area ,phone){
    this.navCtrl.push(UpdateDatePage,
    {
      "key":key,
      "name":name,
      "job":job,
      "area":area,
      "phone":phone
    }
    );
  }
}
