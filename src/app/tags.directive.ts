import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[tags-capturer]'
})
export class TagsCapturerDirective {

  private _tags = new Map([
    ['js', 'javascript'],
    ['rb', 'ruby']
  ]);

  // @Input() set tags(tags: Map<string, string>) {
  //   this._tags = new Map(tags);
  // }
  get tags() {
    return this._tags;
  }

  @Output('tags') newTags = new EventEmitter<string[]>();

  @HostListener('value', ['$event']) onValue(text: string) {
    let words = text.split(' ');
    let keys = Array.from(this.tags.keys());

    let newTags = words.reduce((acc, word: string) => {
      if (keys.some(k => k === word) && acc.indexOf(this.tags.get(word)) === -1) {
        acc.push(this.tags.get(word));
      }
      return acc;
    }, [])

    this.newTags.emit(newTags);
  }

  constructor(private el: ElementRef) {

  }
}