import { Routes } from '@angular/router';
import { DynamicComponent } from './components/form/dynamic-form.component';
import { FormComponent } from './components/form/form.component';
import ProductsComponent from './components/products/products.component';
import { SingleProductComponent } from './pages/single-product.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'sign-up', component: FormComponent },
  { path: 'dynamic-form', component: DynamicComponent },
  { path: 'single-product/:id', component: SingleProductComponent },

  {
    path: 'comments',
    //lazy loading
    loadComponent: () => {
      return import('../app/components/comments/comments.component').then(
        (res) => res.CommentsComponent
      );
    },
  },
  {
    path: '',
    pathMatch: 'full',
    //lazy loading
    loadComponent: () => {
      return import('../app/components/home/home.component').then(
        (res) => res.HomeComponent
      );
    },
  },
];
