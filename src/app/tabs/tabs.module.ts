import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { SalelistPageModule } from '../salelist/salelist.module';
import { PricelistPageModule } from '../pricelist/pricelist.module';
import { AddpricePageModule } from '../pricelist/addprice/addprice.module';
import { NotificationPageModule } from '../notification/notification.module';
import { CustomerPageModule } from '../customer/customer.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    SalelistPageModule,
    CustomerPageModule,
    PricelistPageModule,
    NotificationPageModule,
    AddpricePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
