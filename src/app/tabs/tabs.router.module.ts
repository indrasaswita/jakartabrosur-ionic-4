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

const routes: Routes = [
  {
    path: 'full',
    component: TabsPage,
    children: [
      /*{
        path: '',
        redirectTo: '/tabs/full/(home:home)',
        pathMatch: 'full',
      },*/
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
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
        //loadChildren: './pricelist/pricelist.module#PricelistPageModule'
      },/*
      {
        path: 'addprice',
        outlet: 'pricelist',
        component: AddpricePage,
        redirectTo: '/popup/addprice',
        pathMatch: 'full'
      },*/
      /*{ path: 'addprice', loadChildren: './pricelist/addprice/addprice.module#AddpricePageModule' }*/
      {
        path: 'customer',
        outlet: 'customer',
        component: CustomerPage
      },
      {
        path: 'notification',
        outlet: 'notification',
        component: NotificationPage
      }
    ]
  }/*,
  {
    path: 'addprice',
    redirectTo: '/tabs/addprice',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
