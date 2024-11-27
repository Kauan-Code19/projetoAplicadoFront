import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'windows-component',
  standalone: true,
  imports: [],
  templateUrl: './windows.component.html',
  styleUrl: './windows.component.css'
})
export class WindowsComponent {

  constructor(private router: Router) {}

  navigateEcopontos() {
    this.router.navigateByUrl('/ecopontos')
  }

  navigateDiasHorarios() {
    this.router.navigateByUrl('/dias-horarios')
  }

  navigateDicas() {
    this.router.navigateByUrl('/dicas')
  }
}
