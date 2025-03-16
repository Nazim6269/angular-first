import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import ProductsComponent from './components/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'sign-up', component: FormComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
