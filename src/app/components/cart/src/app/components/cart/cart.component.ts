import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  


  public product : any = [];
  public grandTotal !: number ;
  constructor(private cartService : CartService){}
  ngOnInit(): void{
    this.product=this.cartService.addtooCart(this.product);
  }
  removeItem(item : any){
    this.cartService.removeCartitem(item);

  }
}
