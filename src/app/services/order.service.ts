import { Injectable } from '@angular/core';
import { OrderProduction } from '../models/order-production.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: OrderProduction[] = [
    new OrderProduction(1,'Rondanas de cuero',300,500,false),
    new OrderProduction(2,'Tornillos',200,400,false),
    new OrderProduction(3,'Tuercas',450,500,false)
  ];

  getOrders(): OrderProduction[] {
    return this.orders;
  }

  startOrder(order: OrderProduction): void {
    order.start();
  }

  finishOrder(order: OrderProduction): void {
    order.finish();
  }

}
