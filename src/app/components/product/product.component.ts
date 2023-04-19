import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
console.log("0");

@Component({
  selector: 'app-pro  duct',                
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  
public productList : any;
constructor(private api : ApiService ,private cartService : CartService){}


ngOnInit(): void{
  this.api.getProduct()
.subscribe(res=>{
  this.productList= res;
  // console.log("1");
  this.productList.forEach((a: any) =>{
    
    Object.assign(a,{quantity:1,total:a.price})
  });
  
})
}

addtocart(item : any){
this.cartService.addtooCart(item);


}
}


