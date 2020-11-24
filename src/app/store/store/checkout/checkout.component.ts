import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/models/order.model';
import { OrderRepository } from 'src/app/models/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public _repository: OrderRepository, public _order: Order) {}
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this._repository.saveOrder(this._order).subscribe((order) => {
        this._order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
  ngOnInit(): void {}
}
