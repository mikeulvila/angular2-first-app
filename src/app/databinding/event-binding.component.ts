import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClick()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClick() {
    this.clicked.emit('It works!');
  }
}
