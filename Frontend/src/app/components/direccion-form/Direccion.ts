import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-direccion',
  templateUrl: './Direccion.html',
  styleUrls: ['./Direccion.css']
})
export class DireccionComponent {
  direccionForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.direccionForm = this.fb.group({
      calle: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      referencia: ['']
    });
  }

  get f() { return this.direccionForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.direccionForm.valid) {
      console.log(this.direccionForm.value);
      // Here you would typically send the data to a service
    }
  }
}