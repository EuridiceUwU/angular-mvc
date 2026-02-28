export type OrderState = 'pendiente' | 'en_proceso' | 'finalizada';

export class OrderProduction {
  constructor(
    public id:number,
    public product:string,
    public quantity:number,
    public machineCapacity:number,
    public state:OrderState = 'pendiente',
  ) {}

  //Reglas
  //  1. N o puede iniciar si excede la capacidad
  // 2. No puede finalizar si no est'a en proceso

  canStart():boolean{
    return this.quantity <= this.machineCapacity;
  }

  start():void{
    if (!this.canStart()) {
      throw new Error('La cantidad excede la capacidad de la maquina');
    }
    this.state = 'en_proceso';
  }

  finish():void{
    if (this.state !== 'en_proceso') {
      throw new Error('La orden debe estar en proceso para finalizar');
    }
    this.state = 'finalizada';
  }
}
