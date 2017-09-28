import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CalendarPage } from '../calendar/calendar';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  public date: string;
  public events;

  constructor( private http: Http, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController )
  {


    this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/events?eventdate='+ this.date)
    .map(res => res.json())
    .subscribe(
        data => {
          this.events = data;
        },
        // Jika ada error
        err => console.log("error is "+err),
        // Jika request complete
        () => console.log('read events Complete '+ this.events)
    );
  
  }

  


  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'circle',
    });
  
    setTimeout(() => {
      this.navCtrl.push(CalendarPage);
    }, 500);
  
    setTimeout(() => {
      loading.dismiss();
    }, 500);
  
  }


}
