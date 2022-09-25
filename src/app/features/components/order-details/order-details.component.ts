import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';
import { combineLatest, filter, forkJoin, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private OrdersSer:OrderService,
    private ProductSer:ProductService,
    private UserSer:UserService,
    private route:ActivatedRoute
    ) { }
  OrderID:any
  order:any
  ProductId:any;
  OrderProduct:any[] = []
  User:any[] = []
  ngOnInit(): void {
    this.getOrderDetails()
  }


  getOrderDetails(){
    this.Order()
    this.Product()
    this.Users()
  }

  Order(){
    this.OrderID = this.route.snapshot.paramMap.get('id')
    this.OrdersSer.getOrders().subscribe((res:any) => {
    res.forEach((element:any) => {
        if(element.OrderId == this.OrderID){
          this.order = element
        }
      });
    })
  }

  Product(){
    this.ProductSer.getProduct().subscribe((res:any) => {
      let cunter = 0
      for (const item of this.order.Products) {
        this.ProductId = item.ProductId
        res.forEach((element:any) => {
          if(element.ProductId == this.ProductId){
            this.OrderProduct.push({...element,'Quantity':this.order?.Products[cunter++]?.Quantity})
          }
        });
      }
    })
  }

  Users(){
    this.UserSer.getUser().subscribe((res:any) => {
      res.forEach((ele:any) => {
        if (this.order.UserId === ele.Id) {
          this.User.push({...ele,'OrderDate':this.order.OrderDate,'PaymentType':this.order.PaymentType})
        }
      })
    })
  }


}
