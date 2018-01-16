import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'TabChatsPage'
  tab2Root = 'TabContactsPage'
  tab3Root = 'TabProfilePage'
  tab4Root = 'ForYouPage'


  constructor(public navCtrl: NavController) {}

}
