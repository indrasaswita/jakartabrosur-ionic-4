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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}