import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'single',
    loadComponent: () => import('./single/single.component').then(m => m.SingleComponent)
  },
  {
    path: 'couple',
    loadComponent: () => import('./couples/couples.component').then(m => m.CouplesComponent)
  },
  { path: '',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
  },
  { path: 'rather',
    loadComponent: () => import('./rather/rather.component').then(m => m.RatherComponent)
  },
  { path: 'emergency',
    loadComponent: () => import('./emergency/emergency.component').then(m => m.EmergencyComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
