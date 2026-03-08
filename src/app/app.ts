import { Component } from '@angular/core';
import { OrderProduction } from './models/order-production.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  orders: OrderProduction[] = [];
  message = '';

  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders();
  }

  start(order: OrderProduction) {
    try {
      this.orderService.startOrder(order);
      this.message = 'Orden iniciada correctamente';
    } catch (error: any) {
      this.message = error.message;
    }
  }

  finish(order: OrderProduction) {
    try {
      this.orderService.finishOrder(order);
      this.message = 'Orden finalizada correctamente';
    } catch (error: any) {
      this.message = error.message;
    }
  }

  updateQuantity(order: OrderProduction) {
    // aquí solo se recalcula el estado automáticamente
    if (order.quantity > order.machineCapacity) {
      this.message = 'La cantidad excede la capacidad de la máquina';
    } else {
      this.message = '';
    }
  }

  getProgress(order: OrderProduction): number {
    const progress = (order.quantity / order.machineCapacity) * 100;
    return Math.min(progress, 100); // nunca más de 100%
  }

}
