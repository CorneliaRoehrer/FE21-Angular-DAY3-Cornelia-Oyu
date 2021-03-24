import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartService: CartService, private FormBuilder: FormBuilder) {
    this.checkoutForm = this.FormBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // process checkout data here
    console.warn("Your order has been submitted",customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
