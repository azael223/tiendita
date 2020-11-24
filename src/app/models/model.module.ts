import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    HttpClientModule
  ],
})
export class ModelModule {}
