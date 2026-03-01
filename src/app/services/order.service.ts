import { Injectable } from '@angular/core';
import { OrderProduction } from '../models/order-production.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order = new OrderProduction(1,'Rondanas de cuero', 300, 500, false);


  getOrder(): OrderProduction {
    return this.order;
  }

  finishOrder(): void {
    this.order.finish();
  }

  startOrder(): void {
    this.order.start();
  }
}
