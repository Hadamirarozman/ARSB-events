import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ToastOptions } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  toastOptions: ToastOptions

 

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private toast:ToastController) {
    

  this.toastOptions = { 
    message: ' User is successfully created. Please login',
    duration: 2000
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  showToast(){
        this.toast.create(this.toastOptions).present();
  }

    presentLoadingText() {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: 'Loading Please Wait...'
      });
    
      loading.present();
    
      setTimeout(() => {
        this.navCtrl.push(LoginPage);
      }, 1000);
    
      setTimeout(() => {
        loading.dismiss();
      }, 3000);

      
      }

     
   }
    
