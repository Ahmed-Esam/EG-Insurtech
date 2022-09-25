import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from '../../Interface/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Product:IProduct | any

  constructor(private ProductSer:ProductService) { }

  ngOnInit(): void {
    this.ProductSer.getProduct().subscribe(res => {
      this.Product = res
    })
  }

}
