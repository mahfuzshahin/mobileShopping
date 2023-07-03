import { Component,OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit{
  public prod:any;
  productArray=[
    {
      id:1,
      img:"../assets/iphone.jpg",
      name: "Iphone 14 pro max",
      price: 1500,
      description: 'Apple iPhone ',
      quantity: 1
    },
    {
      id:2,
      img:"../assets/iphone.jpg",
      name: "Iphone 14 pro max",
      price: 1500,
      description: 'Apple iPhone ',
      quantity: 1
    },
    {
      id:3,
      img:"../assets/iphone.jpg",
      name: "Iphone 14 pro max",
      price: 1500,
      description: 'Apple iPhone ',
      quantity: 1
    },
    {
      id:4,
      img:"../assets/iphone.jpg",
      name: "Iphone 14 pro max",
      price: 1500,
      description: 'Apple iPhone ',
      quantity: 1
    },
    {
      id:5,
      img:"../assets/iphone.jpg",
      name: "Iphone 14 pro max",
      price: 1500,
      description: 'Apple iPhone ',
      quantity: 1
    },
  ]
  public productList:any;
  constructor(private c:CartService) {}
  ngOnInit() {
    this.c.getProduct()
      .subscribe(res=>{
        this.productList=res;
        console.log('FROM API', this.productList);
        this.productList.forEach((a:any)=>{
          Object.assign(a,{quantity: 1, total:a.price})
        })
      })
  }
  quantity:number=1;
  i=0;
  increment(prod:any){
    prod.quantity += 1;
  }
  decrement(prod:any){
    if(prod.quantity != 1){
      prod.quantity -=1;
    }
  }
  public count = 0;
  public subtotal=0;
  addCart(prod:any){
    this.c.addCart(prod);
  }
}
