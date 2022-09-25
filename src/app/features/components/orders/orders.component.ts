import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { IOrder } from '../../Interface/iorder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  Order:IOrder | any

  constructor(private OrdersSer:OrderService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.OrdersSer.getOrders().subscribe(res => {
      this.Order = res;
    })
  }

}
