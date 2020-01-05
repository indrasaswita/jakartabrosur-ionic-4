import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'tabs',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: '',
		loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
	},
	{
		path: 'signup',
		loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
	},
	{
		path: 'popup/addprice',
		loadChildren: () => import('./pricelist/addprice/addprice.module').then(m => m.AddpricePageModule)
	},
	{ path: 'alluser', loadChildren: () => import('./alluser/alluser.module').then(m => m.AlluserPageModule) },
	{ path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterPageModule) },
	{ path: 'whatsapp', loadChildren: () => import('./whatsapp/whatsapp.module').then(m => m.WhatsappPageModule) },
	{ path: 'carts', loadChildren: () => import('./carts/carts.module').then(m => m.CartsPageModule) },
	{ path: 'cartdetails', loadChildren: () => import('./cartdetails/cartdetails.module').then(m => m.CartdetailsPageModule) },
	
	{ path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesPageModule) },
	{ path: 'saledetails', loadChildren: () => import('./saledetails/saledetails.module').then(m => m.SaledetailsPageModule) },
	{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeePageModule) },
	{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerPageModule) },
	{ path: 'customerpayment', loadChildren: () => import('./customerpayment/customerpayment.module').then(m => m.CustomerpaymentPageModule) },
	{ path: 'customersales', loadChildren: () => import('./customersales/customersales.module').then(m => m.CustomersalesPageModule) },
	{ path: 'addnewcustomer', loadChildren: () => import('./addnewcustomer/addnewcustomer.module').then(m => m.AddnewcustomerPageModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserPageModule) },
  { path: 'confirmationbyemployee', loadChildren: () => import('./confirmationbyemployee/confirmationbyemployee.module').then(m => m.ConfirmationbyemployeePageModule) },
  { path: 'cetaksuratjalan', loadChildren: () => import('./cetaksuratjalan/cetaksuratjalan.module').then(m => m.CetaksuratjalanPageModule) },  { path: 'editcustomerbankacc', loadChildren: () => import('./editcustomerbankacc/editcustomerbankacc.module').then(m => m.EditcustomerbankaccPageModule) }

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
