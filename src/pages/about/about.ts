import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name;
  phoneNumber;
  area;
  job;
  insert:AngularFireList<any>;
  constructor(public db:AngularFireDatabase,public navCtrl: NavController) {
    this.insert=db.list('/jobs');
  }
  save(name , job , area , phoneNumber ){
    alert(name + phoneNumber);
    this.navCtrl.setRoot(HomePage,
      {
        "name":name,
        "job":job,
        "area":area,
        "phoneNumber":phoneNumber
      }
  );
  this.insert.push(
    {
    "name":name,
    "job":job,
    "area":area,
    "phoneNumber":phoneNumber
  }
)
  }

}
