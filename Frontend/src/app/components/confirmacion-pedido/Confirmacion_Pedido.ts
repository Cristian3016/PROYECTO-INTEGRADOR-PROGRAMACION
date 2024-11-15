import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion-pedido',
  templateUrl: './Confirmacion_Pedido.html',
  styleUrls: ['./Confirmacion_Pedido.css'],
})
export class ConfirmacionPedidoComponent {
  seleccionEntrega: string = '';
  opcionesEntrega = ['Opción 1', 'Opción 2'];
  onSeleccionarEntrega(opcion: string) {
    this.seleccionEntrega = opcion;
  }
}
