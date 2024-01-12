import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightRating]'
})
export class HighlightRatingDirective {
  @Input() number: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlightRating();
  }

  private highlightRating() {
    if (this.number >= 4) {
      this.el.nativeElement.style.color = 'yellow';
    }
  }

}
