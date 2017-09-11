import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventlistPage} from '../eventlist/eventlist';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {

  constructor(public navCtrl: NavController) {}
  nextPage(){
    this.navCtrl.push(EventlistPage);
  }    
    }
