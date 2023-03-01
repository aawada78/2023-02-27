// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BasketComponent } from './basket/basket.component';
import { CustomPreloadingStrategy } from './preloading.strategy';
import { environment } from 'src/environments/environment';

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => {
    if (environment.production) {
      return 'http://www.isc-ejpd.admin.ch';
    } else {
      return 'http://www.isc-ejpd.dummy.ch';
    }
  }
});

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: CustomPreloadingStrategy }),
    HttpClientModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [AppComponent, SidebarComponent, NavbarComponent, HomeComponent, AboutComponent, NotFoundComponent, BasketComponent],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
