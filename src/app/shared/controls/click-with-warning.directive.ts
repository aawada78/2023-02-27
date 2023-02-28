import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: 'button[appClickWithWarning]'
})
export class ClickWithWarningDirective implements OnInit {
  @Input() message = 'Bist du sicher?';
  @Output() appClickWithWarning = new EventEmitter();

  @HostBinding('class') classBinding: string | undefined;

  @HostListener('click', ['$event.shiftKey'])
  handleClick(shiftKey: boolean): void {
    if (shiftKey || confirm(this.message)) {
      this.appClickWithWarning.emit();
    }
  }

  // constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
    this.classBinding = 'btn btn-danger';
  }
}
