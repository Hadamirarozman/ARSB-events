import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController, ToastController, ToastOptions } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  toastOptions: ToastOptions
  personName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, private toast:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showToast(name: string){
    this.toast.create({
      message: `Hello ${name}`,
      duration: 2000
    }).present();
}

presentLoadingText() {
  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'Loading Please Wait...'
  });

  loading.present();

  setTimeout(() => {
    this.navCtrl.setRoot(TabsPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 2000);

  
  }
}

