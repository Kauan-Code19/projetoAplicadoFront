import { Routes } from '@angular/router';
import { WindowsComponent } from './features/windows/windows.component';
import { DiasHorariosComponent } from './features/dias-horarios/dias-horarios.component';
import { EcopontosComponent } from './features/ecopontos/ecopontos.component';

export const routes: Routes = [
    {path: 'windows', component: WindowsComponent},
    { path: '',   redirectTo: '/windows', pathMatch: 'full' },
    {path: 'dias-horarios', component: DiasHorariosComponent},
    {path: 'ecopontos', component: EcopontosComponent}
];
