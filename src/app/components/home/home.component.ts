import { Component } from '@angular/core';
import { CardListComponent } from '../cardList/cardList.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'home',
  imports: [HeroComponent, CardListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
