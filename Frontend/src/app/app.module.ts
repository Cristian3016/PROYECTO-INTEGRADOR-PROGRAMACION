import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/Carrito';
import { ConfirmacionPedidoComponent } from './components/confirmacion-pedido/Confirmacion_Pedido';
import { DireccionComponent } from './components/direccion-form/Direccion';
import { PagoComponent } from './components/pago-form/Pago';
import { MenuComponent } from './components/menu/Menu';
import { CartService } from './services/cart.service';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ConfirmacionPedidoComponent,
    DireccionComponent,
    PagoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CartService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }