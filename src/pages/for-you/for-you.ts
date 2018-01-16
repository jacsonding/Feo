import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ForYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-for-you',
  templateUrl: 'for-you.html',
})
export class ForYouPage {

    @ViewChild('map') mapElement;
    map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
      this.initMap();
  }

  initMap(){
      let latLng = new google.maps.LatLng(40.742623,-73.988822);
      let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
  }

}
