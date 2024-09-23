import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  
  ];
