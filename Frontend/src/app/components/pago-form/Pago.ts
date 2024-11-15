import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-pago',
  templateUrl: './Pago.html',
  styleUrls: ['./Pago.css']
})
export class PagoComponent implements OnInit {
  pagoForm: FormGroup;
  tipoPago: string = 'efectivo';
  submitted = false;
  total: number = 0;
  pagoConfirmado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService
  ) {
    this.pagoForm = this.fb.group({
      montoEfectivo: ['', [Validators.required, Validators.min(0)]],
      numeroTarjeta: ['', [Validators.pattern('^[0-9]{16}$')]],
      nombreTitular: ['', [Validators.minLength(3)]],
      fechaVencimiento: ['', [Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{4})$')]],
      cvc: ['', [Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  ngOnInit() {
    this.updateValidators();
    this.cartService.getProductos().subscribe(productos => {
      this.total = this.cartService.getTotal();
      this.pagoForm.get('montoEfectivo')?.setValue(this.total);
    });
  }

  onTipoPagoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoPago = selectElement.value;
    this.updateValidators();
  }

  private updateValidators() {
    const montoEfectivoControl = this.pagoForm.get('montoEfectivo');
    const tarjetaControls = [
      this.pagoForm.get('numeroTarjeta'),
      this.pagoForm.get('nombreTitular'),
      this.pagoForm.get('fechaVencimiento'),
      this.pagoForm.get('cvc')
    ];

    if (this.tipoPago === 'efectivo') {
      montoEfectivoControl?.setValidators([Validators.required, Validators.min(this.total)]);
      tarjetaControls.forEach(control => control?.clearValidators());
    } else {
      montoEfectivoControl?.clearValidators();
      this.pagoForm.get('numeroTarjeta')?.setValidators([Validators.required, Validators.pattern('^[0-9]{16}$')]);
      this.pagoForm.get('nombreTitular')?.setValidators([Validators.required, Validators.minLength(3)]);
      this.pagoForm.get('fechaVencimiento')?.setValidators([Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{4})$')]);
      this.pagoForm.get('cvc')?.setValidators([Validators.required, Validators.pattern('^[0-9]{3,4}$')]);
    }

    Object.keys(this.pagoForm.controls).forEach(key => {
      const control = this.pagoForm.get(key);
      control?.updateValueAndValidity();
    });
  }

  get f() { return this.pagoForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.pagoForm.valid) {
      if (this.tipoPago === 'efectivo') {
        const montoEfectivo = this.pagoForm.get('montoEfectivo')?.value;
        if (montoEfectivo < this.total) {
          alert('El monto en efectivo debe ser igual o mayor al total de la compra');
          return;
        }
      }

      this.pagoConfirmado = true;
      this.cartService.limpiarCarrito();
      alert('¡Pago confirmado! Gracias por su compra.');
    }
  }

  getVuelto(): number {
    if (this.tipoPago === 'efectivo') {
      const montoEfectivo = this.pagoForm.get('montoEfectivo')?.value || 0;
      return Math.max(0, montoEfectivo - this.total);
    }
    return 0;
  }
}