import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList= new BehaviorSubject<any>([]);
  search: any;
  constructor() { }
  getProducts(){
    this.productList.asObservable();
     
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  // addtooCart(product:any){
  //   console.log("Product from product page",product);
    
  //   this.cartItemList.push(product);
  //   // console.log("product",product);
  //   console.log("cartService item list ", this.cartItemList);
  //   return this.cartItemList;
  // }



addtooCart(product:any){
  
    this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    console.log("service product",this.cartItemList);
    // console.log("product list from service file",this.productList);
    
    return this.cartItemList;
}
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCartitem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);

      }
    })
  
  }
  removeAllCart(){
    this.cartItemList=[];
    this.cartItemList.next(this.cartItemList);
  }
}
function setItem(product: any, cartItemList: any) {
  throw new Error('Function not implemented.');
}

