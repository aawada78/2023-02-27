// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.module').then((m) => m.FlightBookingModule),
    data: {
      preloading: {
        preload: true,
        startLoadingFrom: 29
      }
    }
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
    data: {
      preloading: {
        preload: true,
        startLoadingFrom: 1
      }
    }
  },
  {
    path: 'about1',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
