import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CartService{
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  constructor() {
  }
  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotal();
    console.log(this.cartItemList);
  }
  getTotal(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCartItem(prod:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(prod.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  getValue(){
    return this.cartItemList;
  }

}
