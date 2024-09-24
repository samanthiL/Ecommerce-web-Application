import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/seller/products/products.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { DetailsComponent } from './pages/seller/details/details.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'cart', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seller-home', component: SellerHomeComponent },
  { path: 'seller-products', component: ProductsComponent },
  { path: 'seller-update/:id', component: DetailsComponent },

  ];
