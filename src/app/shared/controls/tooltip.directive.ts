import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { OutletComponent } from 'src/app/customer/outlet/outlet.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') template: TemplateRef<unknown> | undefined;
  @Input() title: string | undefined;

  private viewRef: EmbeddedViewRef<unknown> | undefined;
  private componentRef: ComponentRef<OutletComponent> | undefined;
  // private outletComponent = OutletComponent;

  constructor(private host: ElementRef, private viewContainer: ViewContainerRef) {}

  @HostListener('mouseover')
  handleMouseover(): void {
    this.setHidden(false);
  }

  @HostListener('mouseout', ['$event.shiftKey'])
  handleMouseout(shiftKey: boolean) {
    if (!shiftKey) {
      this.setHidden(true);
    }
  }

  ngOnInit(): void {
    if (!this.template) {
      return;
    }

    // this.viewRef = this.viewContainer.createEmbeddedView(this.template);

    // this.componentRef = this.viewContainer.createComponent(this.outletComponent);

    this.viewRef = this.viewContainer.createEmbeddedView(this.template, {
      $implicit: this.title,
      content: 'Do this and that!!!',
      helplink: 'https://www.google.de'
    });

    this.setHidden(true);

    // Alternative zu HostListener (siehe oben)
    // const element = this.host.nativeElement as HTMLElement;
    // element.addEventListener('mouseover', () => {
    //   this.setHidden(false);
    // });

    // element.addEventListener('mouseout', () => {
    //   this.setHidden(true);
    // });
  }

  setHidden(hidden: boolean) {
    this.viewRef?.rootNodes.forEach((nativeElement) => {
      nativeElement.hidden = hidden;
    });
  }
}
