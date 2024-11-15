import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './menu.service';

export interface CartItem extends Producto {
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productos: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  getProductos(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  agregarProducto(producto: Producto) {
    const existingProduct = this.productos.find(p => p.id === producto.id);
    if (existingProduct) {
      existingProduct.cantidad += 1;
      this.productos = [...this.productos];
    } else {
      this.productos = [...this.productos, { ...producto, cantidad: 1 }];
    }
    this.cartSubject.next(this.productos);
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    this.cartSubject.next(this.productos);
  }

  getTotal(): number {
    return this.productos.reduce((total, producto) => 
      total + (producto.precio * producto.cantidad), 0);
  }

  limpiarCarrito() {
    this.productos = [];
    this.cartSubject.next(this.productos);
  }
}