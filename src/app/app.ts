import { Component, signal } from '@angular/core';
import {OrderProduction} from './models/order-production.model';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OrderService} from './services/order.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  order : OrderProduction;
  message = '';
  newQantity = 0;

  constructor(private orderService: OrderService) {
    this.order = this.orderService.getOrder();
  }

  start(){
    try {
      this.orderService.startOrder()
      this.message = 'Orden iniciada corretamente';
    } catch (error: any){
      this.message = error.message;
    }
  }
  finish(){
    try {
      this.orderService.finishOrder()
      this.message = 'Orden finalizada corretamente';
    } catch (error: any){
      this.message = error.message;
    }
  }
  updateQantity(){
    this.order.quantity = this.newQantity;
  }


  // startOrder(){
  //   try {
  //     this.order.start();
  //     this.message = 'Orden Iniciada correctamente'
  //   } catch (error:any){
  //     this.message = error;
  //   }
  // }
  //
  // finishOrder(){
  //   try {
  //     this.order.finish();
  //     this.message = 'Orden finalizada correctamente';
  //   }catch (e: any) {
  //     this.message= e.message;
  //   }
  // }
}
