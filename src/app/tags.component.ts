import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tags-container',
  template: `
    <input value-emitter tags-capturer 
      (tags)="onTags($event)" class="form-control"> 
    <div>
      <button *ngFor="let tag of tags$ | async" >
        {{ tag }}
      </button>
    </div>
  `
})
export class TagsContainerComponent {

  private tagsSource = new Subject<string[]>();
  private tags$ = this.tagsSource.asObservable();

  onTags(tags: string[]) {
    this.tagsSource.next(tags);
  }


}