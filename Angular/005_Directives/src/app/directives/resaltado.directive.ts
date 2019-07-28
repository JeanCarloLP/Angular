import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') nuevoColor: string;

  constructor( private elementRef: ElementRef) {}

  @HostListener('mouseenter') ratonEncima() {
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') ratonFuera() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

  private resaltar( color: string ) {
    this.elementRef.nativeElement.style.backgroundColor = color || 'yellow';
  }

}
