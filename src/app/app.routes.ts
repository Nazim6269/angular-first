import { Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { DynamicComponent } from './components/form/dynamic-form.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import ProductsComponent from './components/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'sign-up', component: FormComponent },
  { path: 'dynamic-form', component: DynamicComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
