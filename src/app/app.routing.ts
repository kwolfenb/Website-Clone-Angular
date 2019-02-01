import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [ 
  {
    path: '',
    component: WelcomeComponent
  },
  // {
  //   path: 'home',
  //   component: WelcomeComponent
  // },
  {
    path: 'products',
    component: ProductsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
