import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './Carrito.html',
  styleUrls: ['./Carrito.css']
})
export class CarritoComponent implements OnInit {
  productos$: Observable<CartItem[]>;
  total: number = 0;

  constructor(private cartService: CartService) {
    this.productos$ = this.cartService.getProductos();
  }

  ngOnInit() {
    this.productos$.subscribe(productos => {
      this.total = this.cartService.getTotal();
    });
  }

  eliminarProducto(id: number) {
    this.cartService.eliminarProducto(id);
  }
}