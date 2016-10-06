import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <tags-container>
    <input value-emitter tags-capturer class="form-control">
  </tags-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
