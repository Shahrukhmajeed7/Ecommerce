// import { Component } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
// public totalItem : number =0;
// constructor (private cartService : CartService) {
// {
//   this.cartService.getProducts().subscribe((res: string | any[])=>{
//     this.totalItem = res.length;
//     return this.totalItem;
//   })
// }

// }
// // console.log("Shahru,h")
// }
// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   public totalItem: number = 0;
//   public searchTerm !: string;
//   constructor(private cartService: CartService) { } // define the service in the constructor

//   ngOnInit(): void {
//     this.cartService.getProducts()
//       .subscribe((res: string | any[]) => {
//         this.totalItem = res.length;
//       });
//   }

//   search(event: any) {
//     this.searchTerm = (event.target as HTMLInputElement).value;
//     console.log(this.searchTerm);
//     this.cartService.search.next(this.searchTerm);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  constructor(private apiService : ApiService) { } 
  ngOnInit(){
    this.apiService.getProduct()
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
