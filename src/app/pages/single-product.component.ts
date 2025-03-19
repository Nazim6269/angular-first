import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { SingleProductService } from '../services/products/single-product.service';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
})
export class SingleProductComponent implements OnInit {
  productId: string | null = '';
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: SingleProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService
        .getSingeProduct(this.productId)
        .subscribe((comment) => {
          this.product = comment;
        });
    }
  }
}
