import { Routes } from '@angular/router';
import { WindowsComponent } from './f/windows/windows.component';

export const routes: Routes = [
    {path: 'windows', component: WindowsComponent},
    { path: '',   redirectTo: '/windows', pathMatch: 'full' }
];
