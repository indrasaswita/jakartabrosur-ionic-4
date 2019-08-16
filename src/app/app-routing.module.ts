import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  	path: 'tabs',
  	loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { 
  	path: '', 
  	loadChildren: './login/login.module#LoginPageModule' 
	},
  { 
  	path: 'signup', 
  	loadChildren: './signup/signup.module#SignupPageModule' 
  },
  { 
  	path: 'popup/addprice', 
  	loadChildren: './pricelist/addprice/addprice.module#AddpricePageModule' 
  },
  { path: 'alluser', loadChildren: './alluser/alluser.module#AlluserPageModule' },
  { path: 'master', loadChildren: './master/master.module#MasterPageModule' },
  { path: 'whatsapp', loadChildren: './whatsapp/whatsapp.module#WhatsappPageModule' },
  { path: 'carts', loadChildren: './carts/carts.module#CartsPageModule' },
  { path: 'cartdetails', loadChildren: './cartdetails/cartdetails.module#CartdetailsPageModule' },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'saledetails', loadChildren: './saledetails/saledetails.module#SaledetailsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
