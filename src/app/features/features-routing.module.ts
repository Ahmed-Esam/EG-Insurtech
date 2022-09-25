import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:'Product',
    component:ProductComponent,
  },
  {
    path:'Orders',
    component:OrdersComponent,
  },
  {
    path:'OrderDetails/:id',
    component:OrderDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
