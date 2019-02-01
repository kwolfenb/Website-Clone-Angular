import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailsComponent} from './product-details/product-details.component';

const appRoutes: Routes = [ 
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
