import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.product=products[+params.get("productId")];
    });
  }

}
