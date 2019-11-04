import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

import { PricelistPage } from '../pricelist/pricelist.page';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

	constructor(
		public navCtrl: NavController
	){

	}

}
