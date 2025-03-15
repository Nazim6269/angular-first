import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';
}
