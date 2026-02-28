import { Component, signal } from '@angular/core';
import {OrderProduction} from './models/order-production.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  order = new OrderProduction(1,'Rondanas de cuero', 300, 500);
  message = '';

  startOrder(){
    try {
      this.order.start();
      this.message = 'Orden Iniciada correctamente'
    } catch (error:any){
      this.message = error;
    }
  }
}
