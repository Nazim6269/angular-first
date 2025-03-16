import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  imports: [NgFor, NgClass, NgOptimizedImage],
})
export default class ProuductsComponent {
  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      age: 25,
      isActive: false,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      age: 28,
      isActive: true,
    },
  ];
}
