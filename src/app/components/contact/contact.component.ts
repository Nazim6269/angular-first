import { Component, signal } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  count = signal(0);

  increase() {
    this.count.update((prev) => prev + 1);
  }
}
