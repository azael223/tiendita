import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public _cart:Cart){}

  ngOnInit(): void {
  }

}
