import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input value-emitter tags-capturer class="form-control">
  <tags-container></tags-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
