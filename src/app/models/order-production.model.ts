export type OrderState = 'pendiente' | 'en_proceso' | 'finalizada';

export class OrderProduction {
  constructor(
    public id:number,
    public product:string,
    public quantity:number,
    public machineCapacity:number,
    public onMaintenance: boolean = false,
    public state:OrderState = 'pendiente',
  ) {}

  //Reglas
  // 1. N o puede iniciar si excede la capacidad
  // 2. No puede finalizar si no est'a en proceso
  // 3. No se puede iniciar si la maquina está en mantenimiento
  // 4. Si la cantidad > 400 la eficiencia es baja

  canStart():boolean{
    return this.quantity <= this.machineCapacity && this.onMaintenance;
  }

  start():void{
    if (this.onMaintenance){
      throw new Error('No se puede iniciar: Maquina en mantenimiento');
    }

    if (this.quantity > this.machineCapacity) {
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

  getEfficiency():string{
    if (this.quantity > 400){
      return 'Baja';
    }
    return 'Alta';
  }
}
