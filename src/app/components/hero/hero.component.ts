import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  imports: [NgOptimizedImage],
})
export class HeroComponent {}
