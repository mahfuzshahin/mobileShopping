import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {ViewProductsComponent} from "./view-products/view-products.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'viewproducts', component: ViewProductsComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
