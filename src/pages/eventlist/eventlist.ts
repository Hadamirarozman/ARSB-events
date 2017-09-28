import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
import { Http } from '@angular/http';

@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {
  event: string = "food";
  isAndroid: boolean = false;
  public date: string;
  public events;
  

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) 
  {

}
  
  getData() {
    // Buat permintaan pada API
    this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/events?eventdate='+this.date)
    // Pemetaan
    .map(res => res.json())
    // Subscribe
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
      spinner: 'hide',
      content: 'Opening Maps'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(MapsPage);
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  
  }

}
