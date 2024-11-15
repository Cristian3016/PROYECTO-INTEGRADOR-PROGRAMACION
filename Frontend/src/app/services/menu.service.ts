import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

export interface Categoria {
  nombre: string;
  productos: Producto[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private categorias: Categoria[] = [
    {
      nombre: 'Nuestras Especialidades',
      productos: [
        {
          id: 1,
          nombre: 'Empanada Criolla',
          precio: 2.50,
          descripcion: 'Empanada casera rellena de carne picada, cebolla, huevo y especias',
          imagen: 'https://images.unsplash.com/photo-1626198226928-fb8b3ddc9b11?w=800'
        },
        {
          id: 2,
          nombre: 'Hamburguesa Clásica',
          precio: 8.99,
          descripcion: 'Carne 100% vacuna, lechuga, tomate, queso cheddar y salsa especial',
          imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800'
        },
        {
          id: 3,
          nombre: 'Pizza Margherita',
          precio: 12.99,
          descripcion: 'Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva',
          imagen: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800'
        }
      ]
    }
  ];

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getProductoById(id: number): Producto | undefined {
    for (const categoria of this.categorias) {
      const producto = categoria.productos.find(p => p.id === id);
      if (producto) return producto;
    }
    return undefined;
  }
}