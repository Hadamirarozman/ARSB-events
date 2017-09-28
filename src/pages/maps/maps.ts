import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  latLng: any;
  
    @ViewChild('map') mapElement: ElementRef;
     map: any;
    constructor() {
      this.latLng = new google.maps.LatLng(2.9427466,101.8737259);
  }

  loadMap(){
    
    
          let mapOptions = {
            center: this.latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
    
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    
    
        }

}
