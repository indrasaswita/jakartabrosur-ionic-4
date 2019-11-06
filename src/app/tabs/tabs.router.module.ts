import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { SalelistPage } from '../salelist/salelist.page';
import { PricelistPage } from '../pricelist/pricelist.page';
import { AddpricePage } from '../pricelist/addprice/addprice.page';
import { CustomerPage } from '../customer/customer.page';
import { NotificationPage } from '../notification/notification.page';
import { WhatsappPage } from '../whatsapp/whatsapp.page';
import { MasterPage } from '../master/master.page';
import { AlluserPage } from '../alluser/alluser.page';
import { CartsPage } from '../carts/carts.page';
import { UserPage } from "../user/user.page";

const routes: Routes = [
	{
		path: 'full',
		component: TabsPage,
		children: [
			{
				path: 'home',
				outlet: 'home',
				component: HomePage
			},
			{
				path: 'about',
				outlet: 'about',
				component: AboutPage
			},
			{
				path: 'contact',
				outlet: 'contact',
				component: ContactPage
			},
			{
				path: 'salelist',
				outlet: 'salelist',
				component: SalelistPage
			},
			{
				path: 'pricelist',
				outlet: 'pricelist',
				component: PricelistPage
			},
			{
				path: 'addprice',
				outlet: 'addprice',
				component: AddpricePage
			},
			{
				path: 'customer',
				outlet: 'customer',
				component: CustomerPage
			},
			{
				path: 'notification',
				outlet: 'notification',
				component: NotificationPage
			},
			/*{
				path: 'whatsapp',
				outlet: 'whatsapp',
				component: WhatsappPage
			},*/
			{
				path: 'master',
				outlet: 'master',
				component: MasterPage
			},
			{
				path: 'alluser',
				outlet: 'alluser',
				component: AlluserPage
			},
			{
				path: 'user',
				outlet: 'user',
				component: UserPage
			},/*
			{
				path: 'carts',
				outlet: 'carts',
				component: CartsPage
			},*/
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
