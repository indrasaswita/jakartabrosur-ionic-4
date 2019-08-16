import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';
import { SalelistPageModule } from '../salelist/salelist.module';
import { PricelistPageModule } from '../pricelist/pricelist.module';
import { AddpricePageModule } from '../pricelist/addprice/addprice.module';
import { CustomerPageModule } from '../customer/customer.module';
import { NotificationPageModule } from '../notification/notification.module';
import { WhatsappPageModule } from '../whatsapp/whatsapp.module';
import { MasterPageModule } from '../master/master.module';
import { AlluserPageModule } from '../alluser/alluser.module';
import { CartsPageModule } from '../carts/carts.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    SalelistPageModule,
    PricelistPageModule,
    AddpricePageModule,
    CustomerPageModule,
    NotificationPageModule,
    WhatsappPageModule,
    MasterPageModule,
    AlluserPageModule,
    CartsPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
