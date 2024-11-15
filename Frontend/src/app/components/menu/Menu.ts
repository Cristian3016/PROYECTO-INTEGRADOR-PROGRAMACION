import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './Menu.html',
  styleUrls: ['./Menu.css']
})
export class MenuComponent {
  categorias = this.menuService.getCategorias();
  
  constructor(
    private cartService: CartService,
    private menuService: MenuService
  ) {}

  agregarAlCarrito(productoId: number) {
    const producto = this.menuService.getProductoById(productoId);
    if (producto) {
      this.cartService.agregarProducto(producto);
    }
  }
}