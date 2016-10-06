import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[value-emitter]'
})
export class ValueEmitterDirective {

  @Output() value = new EventEmitter<string>();

  @HostListener('keydown') onKeydown() {
    this.value.emit(this.el.nativeElement.value);
  }

  constructor(private el: ElementRef) {  }
}