import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'dias-horarios-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dias-horarios.component.html',
  styleUrl: './dias-horarios.component.css'
})
export class DiasHorariosComponent {
  inputsForm: FormGroup;

  constructor() {
    this.inputsForm = new FormGroup({
      bairro: new FormControl('', Validators.required),
      diaSemana: new FormControl('', [Validators.required]),
      horario: new FormControl('', Validators.required)
    })
  }
}
