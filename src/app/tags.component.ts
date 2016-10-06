import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tags-container',
  template: `

  <button (tags)="onTags($event)">Hello</button>
  `
})
export class TagsContainerComponent {

  private tagsSource = new Subject<string[]>();
  private tags$ = this.tagsSource.asObservable();

  onTags(tags: string[]) {
    console.log(tags);
  }


}